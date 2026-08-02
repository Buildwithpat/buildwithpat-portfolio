"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { EDUCATION } from "@/content/education";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusChip } from "@/components/ui/status-chip";
import { Reveal } from "@/components/ui/reveal";
import { riseIn, slideFromSide } from "@/lib/motion";

export function Education() {
  return (
    <section
      id="education"
      className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-5 py-28 md:px-8 md:py-36"
    >
      <SectionHeading eyebrow="Education" title="Where the fundamentals came from." />

      <Reveal variants={slideFromSide(true)} className="mx-auto w-full max-w-4xl">
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 items-start gap-8 rounded-xl border border-line-subtle bg-surface-1 p-8 shadow-[var(--shadow-elevation-1)] transition-shadow hover:shadow-[var(--shadow-elevation-2)] md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10 md:p-12"
        >
          <div className="flex size-14 items-center justify-center rounded-full bg-surface-2 text-ink-1">
            <GraduationCap size={22} />
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-h3 font-medium text-ink-0">
              {EDUCATION.degree}
            </h3>
            <p className="text-body text-ink-2">
              {EDUCATION.institution} — {EDUCATION.location}
            </p>
            <p className="font-mono text-label uppercase tracking-wider text-ink-3">
              {EDUCATION.period}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {EDUCATION.coursework.map((course) => (
                <Reveal key={course} variants={riseIn} className="inline-block">
                  <span className="inline-block rounded-full border border-line-subtle px-3 py-1 font-mono text-[11px] text-ink-2 transition-colors hover:border-line-strong hover:text-ink-0">
                    {course}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="flex md:flex-col md:items-end">
            <StatusChip label={`${EDUCATION.status} — ${EDUCATION.statusLabel}`} tone="accent" />
          </div>
        </motion.div>
      </Reveal>
    </section>
  );
}
