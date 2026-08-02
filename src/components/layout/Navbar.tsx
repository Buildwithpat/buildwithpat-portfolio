"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { SECTIONS } from "@/content/site";
import { SITE } from "@/content/site";
import { SOCIAL } from "@/content/social";
import { scrollToSection } from "@/lib/scroll";
import { useActiveSection } from "@/components/providers/SectionObserverProvider";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { MobileNav } from "@/components/layout/MobileNav";
import { EASE_PREMIUM } from "@/lib/motion";

export function Navbar() {
  const activeSectionId = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE_PREMIUM }}
        className="fixed top-0 left-0 z-[1000] flex h-18 w-full items-center justify-between px-5 md:px-8"
      >
        <div className="flex items-center gap-3 rounded-full border border-line-subtle bg-surface-0/70 px-4 py-2 backdrop-blur-xl">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex flex-col leading-none"
          >
            <span className="text-body-sm font-semibold tracking-tight text-ink-0">
              {SITE.handle}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
              {SITE.location}
            </span>
          </button>
        </div>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-line-subtle bg-surface-0/70 px-2 py-2 backdrop-blur-xl md:flex">
          {SECTIONS.filter((s) => s.id !== "hero").map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="relative rounded-full px-3.5 py-1.5 text-body-sm text-ink-2 transition-colors hover:text-ink-0"
            >
              {activeSectionId === section.id && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 rounded-full bg-surface-3"
                  transition={{ type: "spring", stiffness: 350, damping: 32 }}
                />
              )}
              <span
                className={`relative z-10 ${activeSectionId === section.id ? "text-ink-0" : ""}`}
              >
                {section.label}
              </span>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 rounded-full border border-line-subtle bg-surface-0/70 p-2 backdrop-blur-xl">
          <ThemeToggle className="hidden md:flex" />
          <a
            href={SOCIAL.resume}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center rounded-full bg-ink-0 px-5 py-2 text-body-sm font-medium text-surface-0 transition-opacity hover:opacity-90 md:flex"
          >
            Resume
          </a>
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="flex size-10 items-center justify-center rounded-full text-ink-1 md:hidden"
          >
            <Menu size={18} />
          </button>
        </div>
      </motion.header>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        activeSectionId={activeSectionId}
      />
    </>
  );
}
