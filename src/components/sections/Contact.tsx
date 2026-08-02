"use client";

import { Coffee } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { CONTACT_COPY, SOCIAL } from "@/content/social";
import { Reveal } from "@/components/ui/reveal";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { riseIn, staggerChildren } from "@/lib/motion";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-10 px-5 py-32 text-center md:px-8 md:py-44"
    >
      <Reveal variants={riseIn}>
        <span className="font-mono text-label uppercase tracking-[0.16em] text-accent">
          Contact
        </span>
      </Reveal>

      <Reveal variants={riseIn} delay={0.05}>
        <h2 className="text-h1 font-medium tracking-tight text-ink-0">
          {CONTACT_COPY.heading}
        </h2>
      </Reveal>

      <Reveal variants={riseIn} delay={0.1} className="max-w-md">
        <p className="text-body-lg text-ink-2">{CONTACT_COPY.subtext}</p>
      </Reveal>

      <Reveal variants={riseIn} delay={0.15}>
        <MagneticLink
          href={`mailto:${SOCIAL.email}`}
          className="inline-block text-h1 font-serif italic text-ink-0 underline decoration-line-strong decoration-1 underline-offset-8 transition-colors hover:text-accent"
        >
          {SOCIAL.email}
        </MagneticLink>
      </Reveal>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren(0.06)}
        className="mt-4 flex flex-wrap items-center justify-center gap-3"
      >
        <motion.a
          variants={riseIn}
          whileHover={{ y: -3 }}
          href={SOCIAL.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="flex size-12 items-center justify-center rounded-full border border-line-subtle text-ink-1 shadow-[var(--shadow-elevation-1)] transition-colors hover:border-line-strong hover:text-ink-0"
        >
          <GithubIcon className="size-[18px]" />
        </motion.a>
        <motion.a
          variants={riseIn}
          whileHover={{ y: -3 }}
          href={SOCIAL.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="flex size-12 items-center justify-center rounded-full border border-line-subtle text-ink-1 shadow-[var(--shadow-elevation-1)] transition-colors hover:border-line-strong hover:text-ink-0"
        >
          <LinkedinIcon className="size-[18px]" />
        </motion.a>
        <motion.a
          variants={riseIn}
          whileHover={{ y: -3 }}
          href={SOCIAL.buyMeAChai}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-body-sm font-medium text-accent-ink shadow-[var(--shadow-elevation-1)] transition-all hover:opacity-90"
        >
          <Coffee size={16} />
          Buy me a chai
        </motion.a>
      </motion.div>
    </section>
  );
}
