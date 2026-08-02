"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EXPERIENCE } from "@/content/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { riseIn, slideFromSide, staggerChildren } from "@/lib/motion";

const STATS = [
  { label: "Roles", value: String(EXPERIENCE.length) },
  { label: "Active since", value: "2024" },
  { label: "Focus", value: "Frontend & Design" },
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 40%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
      className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-5 py-28 md:px-8 md:py-36"
    >
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've put in the work."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren(0.08)}
          className="flex gap-6 md:gap-10"
        >
          {STATS.map((stat) => (
            <motion.div key={stat.label} variants={riseIn} className="flex flex-col gap-1">
              <span className="text-h3 font-medium text-ink-0">{stat.value}</span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-ink-3">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div ref={containerRef} className="relative pl-8 md:pl-14">
        <div className="absolute top-1 left-0 h-[calc(100%-0.5rem)] w-px bg-line-subtle" />
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute top-1 left-0 h-[calc(100%-0.5rem)] w-px origin-top bg-accent"
        />

        <div className="flex flex-col gap-8">
          {EXPERIENCE.map((entry, i) => (
            <Reveal
              key={entry.company}
              variants={slideFromSide(i % 2 === 0)}
              className="relative"
            >
              <span
                className={`absolute top-8 -left-[2.15rem] size-3 rounded-full border-2 border-surface-0 md:top-9 md:-left-[3.65rem] ${
                  entry.current ? "bg-accent" : "bg-ink-3"
                }`}
              >
                {entry.current && (
                  <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-60" />
                )}
              </span>

              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-4 rounded-xl border border-line-subtle bg-surface-1 p-6 shadow-[var(--shadow-elevation-1)] transition-shadow hover:shadow-[var(--shadow-elevation-2)] md:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-h3 font-medium text-ink-0">
                      {entry.role}
                    </h3>
                    <p className="text-body-sm text-ink-2">
                      {entry.company} — {entry.location}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider ${
                      entry.current
                        ? "border-accent-line bg-accent-soft text-accent"
                        : "border-line-subtle text-ink-3"
                    }`}
                  >
                    {entry.period}
                  </span>
                </div>

                <p className="max-w-2xl text-body text-ink-1">
                  {entry.summary}
                </p>

                <ul className="flex flex-col gap-1.5">
                  {entry.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2 text-body-sm text-ink-2"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-ink-3" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 border-t border-line-subtle pt-4">
                  {entry.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-line-subtle bg-surface-0/40 px-3 py-1 font-mono text-[11px] text-ink-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
