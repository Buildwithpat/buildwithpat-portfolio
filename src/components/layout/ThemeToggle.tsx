"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <button
      ref={ref}
      type="button"
      aria-label="Toggle theme"
      onClick={() => toggleTheme(ref.current)}
      className={`relative flex size-10 items-center justify-center rounded-full border border-line-subtle text-ink-1 transition-colors hover:bg-surface-2 hover:text-ink-0 ${className ?? ""}`}
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-center"
      >
        {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
      </motion.span>
    </button>
  );
}
