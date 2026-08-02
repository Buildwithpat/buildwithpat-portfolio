"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BIO, MINI_PROJECTS, PROFILE_IMAGE } from "@/content/profile";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { maskReveal, riseIn, viewportOnce } from "@/lib/motion";

export function About() {
  return (
    <section
      id="about"
      className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-5 py-28 md:px-8 md:py-36"
    >
      <SectionHeading eyebrow="About" title="A little about how I work." />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <Reveal variants={maskReveal} className="mx-auto w-full max-w-xs md:mx-0">
          <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-line-subtle shadow-[var(--shadow-elevation-2)]">
            <Image
              src={PROFILE_IMAGE}
              alt="Aakash Pathak"
              fill
              sizes="(min-width: 768px) 320px, 80vw"
              className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
              priority={false}
            />
          </div>
        </Reveal>

        <div className="flex flex-col gap-8">
          {BIO.map((paragraph, i) => (
            <Reveal
              key={i}
              variants={riseIn}
              delay={i * 0.05}
              className={
                i === 0
                  ? "text-h3 font-normal leading-snug text-ink-0 font-serif italic"
                  : "text-body-lg text-ink-2"
              }
            >
              <p>{paragraph.text}</p>
            </Reveal>
          ))}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            className="mt-4 flex flex-wrap gap-3"
          >
            {MINI_PROJECTS.map((project) => (
              <motion.div
                key={project.name}
                variants={riseIn}
                whileHover={{ y: -3, borderColor: "var(--line-strong)" }}
                transition={{ duration: 0.2 }}
                className="cursor-default rounded-full border border-line-subtle bg-surface-1 px-4 py-2 text-body-sm text-ink-2 shadow-[var(--shadow-elevation-1)]"
              >
                <span className="font-medium text-ink-0">{project.name}</span>
                <span className="text-ink-3"> — {project.tagline}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
