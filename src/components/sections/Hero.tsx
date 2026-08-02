"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { HERO, TAGLINES } from "@/content/profile";
import { SITE } from "@/content/site";
import { scrollToSection } from "@/lib/scroll";
import { EASE_PREMIUM, staggerChildren, wordReveal } from "@/lib/motion";
import { FloatingTechIcons } from "@/components/sections/FloatingTechIcons";

const HeroCanvas = dynamic(
  () => import("@/components/three/HeroCanvas").then((m) => m.HeroCanvas),
  { ssr: false },
);

function TaglineCrossfade() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TAGLINES.length);
    }, 3600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-7 overflow-hidden md:h-8">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE_PREMIUM }}
          className="absolute inset-x-0 text-body-lg text-ink-2"
        >
          {TAGLINES[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

function MaskedWord({ children }: { children: string }) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <motion.span variants={wordReveal} className="inline-block">
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col items-center overflow-hidden px-5 py-28 md:px-8"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <HeroCanvas />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface-0/80" />
      </div>

      <FloatingTechIcons />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerChildren(0.07)}
        className="flex flex-1 flex-col items-center justify-center gap-7 text-center"
      >
        <motion.span
          variants={wordReveal}
          className="flex items-center gap-2 rounded-full border border-line-subtle bg-surface-1/70 px-4 py-1.5 font-mono text-label uppercase tracking-[0.16em] text-accent backdrop-blur-md"
        >
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
          </span>
          {HERO.eyebrow} — {SITE.location}
        </motion.span>

        <h1 className="max-w-4xl text-display font-medium tracking-tight text-ink-0">
          <MaskedWord>{HERO.greeting}</MaskedWord>{" "}
          <span className="font-serif italic font-normal text-ink-0">
            <MaskedWord>{HERO.name}</MaskedWord>
          </span>
        </h1>

        <motion.div variants={wordReveal} className="relative w-full max-w-lg">
          <TaglineCrossfade />
        </motion.div>

        <motion.div
          variants={wordReveal}
          className="mt-3 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="group flex items-center gap-2 rounded-full bg-ink-0 px-6 py-3 text-body-sm font-medium text-surface-0 shadow-[var(--shadow-elevation-2)] transition-opacity hover:opacity-90"
          >
            View Projects
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="rounded-full border border-line-strong px-6 py-3 text-body-sm font-medium text-ink-0 transition-colors hover:bg-surface-2"
          >
            Contact
          </button>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => scrollToSection("about")}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        aria-label="Scroll to About"
        className="flex flex-col items-center gap-2 text-ink-3 transition-colors hover:text-ink-0"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
          Scroll to explore
        </span>
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex size-9 items-center justify-center rounded-full border border-line-subtle"
        >
          <ArrowDown size={14} />
        </motion.span>
      </motion.button>
    </section>
  );
}
