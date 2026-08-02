"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { CURRENTLY_BUILDING } from "@/content/projects";
import { Reveal } from "@/components/ui/reveal";
import { StatusChip } from "@/components/ui/status-chip";
import { riseIn, staggerChildren, scaleDepth } from "@/lib/motion";

export function CurrentlyBuilding() {
  const { project, vision, problem, status, stackCategories } = CURRENTLY_BUILDING;

  return (
    <section
      id="currently-building"
      className="relative mx-auto w-full max-w-6xl px-5 py-28 md:px-8 md:py-36"
    >
      <Reveal variants={scaleDepth}>
        <div className="relative overflow-hidden rounded-xl border border-line-subtle bg-surface-1 px-6 py-16 shadow-[var(--shadow-elevation-2)] md:px-16 md:py-24">
          <motion.div
            aria-hidden
            initial={{ scale: 0.9, opacity: 0.4 }}
            whileInView={{ scale: 1.05, opacity: 0.7 }}
            transition={{ duration: 2.4, ease: "easeOut" }}
            className="pointer-events-none absolute -top-1/3 -right-1/4 size-[36rem] rounded-full bg-[radial-gradient(circle,var(--accent-soft),transparent_65%)]"
          />

          <div className="relative flex flex-col gap-8">
            <span className="flex items-center gap-2 font-mono text-label uppercase tracking-[0.16em] text-accent">
              <Rocket size={14} />
              Currently Building
            </span>

            <h2 className="max-w-2xl text-h1 font-medium tracking-tight text-ink-0">
              {project.title}
            </h2>

            <p className="max-w-2xl font-serif text-h3 leading-snug text-ink-0 italic">
              &ldquo;{vision}&rdquo;
            </p>

            <Reveal variants={riseIn} className="flex flex-col gap-2">
              <span className="font-mono text-label uppercase tracking-wider text-ink-3">
                The problem
              </span>
              <p className="max-w-2xl text-body text-ink-2">{problem}</p>
            </Reveal>

            <div className="flex flex-col gap-3 pt-2">
              <span className="font-mono text-label uppercase tracking-wider text-ink-3">
                Stack
              </span>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren(0.06)}
                className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3"
              >
                {stackCategories.map((category) => (
                  <motion.div key={category.label} variants={riseIn} className="flex flex-col gap-2">
                    <span className="text-[11px] font-medium tracking-wide text-ink-3 uppercase">
                      {category.label}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {category.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-line-subtle bg-surface-0/50 px-2.5 py-1 font-mono text-[11px] text-ink-2"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="pt-2">
              <StatusChip label={status} tone="accent" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
