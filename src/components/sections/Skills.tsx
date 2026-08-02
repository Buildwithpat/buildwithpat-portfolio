"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/content/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { riseIn, staggerChildren, viewportOnce } from "@/lib/motion";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-5 py-28 md:px-8 md:py-36"
    >
      <SectionHeading
        eyebrow="Skills"
        title="The toolkit, not a checklist."
      />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {SKILL_CATEGORIES.map((category, i) => (
          <Reveal key={category.id} variants={riseIn} delay={i * 0.05}>
            <h3 className="mb-5 font-mono text-label uppercase tracking-[0.14em] text-ink-3">
              {category.title}
            </h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerChildren(0.05)}
              className="grid grid-cols-3 gap-3 sm:grid-cols-4"
            >
              {category.skills.map((skill) => (
                <motion.div key={skill.name} variants={riseIn}>
                  <Tilt
                    tiltMaxAngleX={12}
                    tiltMaxAngleY={12}
                    scale={1.04}
                    transitionSpeed={1200}
                    className="rounded-lg"
                  >
                    <div className="group flex flex-col items-center gap-2 rounded-lg border border-line-subtle bg-surface-1 px-3 py-4 shadow-[var(--shadow-elevation-1)] transition-all hover:border-line-strong hover:shadow-[var(--shadow-elevation-2)]">
                      <div className="relative size-7">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          fill
                          sizes="28px"
                          className="object-contain"
                        />
                      </div>
                      <span className="text-center text-[11px] text-ink-2">
                        {skill.name}
                      </span>
                    </div>
                  </Tilt>
                </motion.div>
              ))}
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
