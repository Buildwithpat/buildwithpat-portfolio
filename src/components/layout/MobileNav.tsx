"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { SECTIONS, type SectionId } from "@/content/site";
import { scrollToSection } from "@/lib/scroll";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { EASE_PREMIUM } from "@/lib/motion";

export function MobileNav({
  open,
  onClose,
  activeSectionId,
}: {
  open: boolean;
  onClose: () => void;
  activeSectionId: SectionId;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[1001] bg-surface-0/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-mono text-label uppercase tracking-[0.14em] text-ink-2">
              Menu
            </span>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="flex size-10 items-center justify-center rounded-full border border-line-subtle text-ink-1"
            >
              <X size={16} />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-6 py-8">
            {SECTIONS.filter((s) => s.id !== "hero").map((section, i) => (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.4, ease: EASE_PREMIUM }}
                onClick={() => {
                  scrollToSection(section.id);
                  onClose();
                }}
                className={`py-3 text-left text-h3 font-medium tracking-tight transition-colors ${
                  activeSectionId === section.id ? "text-accent" : "text-ink-0"
                }`}
              >
                {section.label}
              </motion.button>
            ))}
          </nav>
          <div className="flex items-center gap-3 px-6">
            <ThemeToggle />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
