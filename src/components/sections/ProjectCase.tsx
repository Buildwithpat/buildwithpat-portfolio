"use client";

import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Hammer } from "lucide-react";
import type { Project } from "@/content/projects";
import { StatusChip } from "@/components/ui/status-chip";
import { Reveal } from "@/components/ui/reveal";
import { maskReveal, riseIn, scaleDepth } from "@/lib/motion";

const SWATCHES = ["#e0a458", "#7c3aed", "#0ea5e9", "#f43f5e"];

function StackChips({ stack }: { stack: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-line-subtle px-3 py-1 font-mono text-[11px] text-ink-2"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function Links({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-3 pt-1">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-1.5 rounded-full bg-ink-0 px-5 py-2.5 text-body-sm font-medium text-surface-0 shadow-[var(--shadow-elevation-1)] transition-all hover:-translate-y-0.5 hover:opacity-90 hover:shadow-[var(--shadow-elevation-2)]"
        >
          Live demo
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      )}
      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 rounded-full border border-line-strong px-5 py-2.5 text-body-sm font-medium text-ink-0 transition-all hover:-translate-y-0.5 hover:bg-surface-2"
        >
          GitHub
        </a>
      )}
    </div>
  );
}

/** Denken AI — document/parsing-inspired: real screenshot framed like a scanned page. */
function DenkenLayout({ project }: { project: Project }) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
      <Reveal variants={riseIn} className="order-2 flex flex-col gap-5 md:order-1">
        <StatusChip label={project.statusLabel} tone="live" />
        <h3 className="text-h2 font-medium tracking-tight text-ink-0">
          {project.title}
        </h3>
        <p className="max-w-md text-body-lg text-ink-2">
          {project.description}
        </p>
        <StackChips stack={project.stack} />
        <Links project={project} />
      </Reveal>
      <Reveal
        variants={maskReveal}
        className="order-1 md:order-2"
      >
        <div className="group relative overflow-hidden rounded-xl border border-line-subtle bg-surface-1 p-3 shadow-[var(--shadow-elevation-1)] transition-shadow hover:shadow-[var(--shadow-elevation-2)]">
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-accent/60 via-accent/10 to-transparent" />
          {project.screenshot && (
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src={project.screenshot}
                alt={`${project.title} screenshot`}
                fill
                sizes="(min-width: 768px) 50vw, 90vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </div>
          )}
        </div>
      </Reveal>
    </div>
  );
}

/** Kotoba — live, real-time/multiplayer: kinetic tilt, energetic live badge. */
function KotobaLayout({ project }: { project: Project }) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
      <Reveal variants={scaleDepth}>
        <Tilt
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          glareEnable
          glareMaxOpacity={0.12}
          glareColor="#f2c48a"
          className="rounded-xl"
        >
          {project.screenshot && (
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-line-subtle shadow-[var(--shadow-elevation-2)]">
              <Image
                src={project.screenshot}
                alt={`${project.title} screenshot`}
                fill
                sizes="(min-width: 768px) 55vw, 90vw"
                className="object-cover"
              />
            </div>
          )}
        </Tilt>
      </Reveal>
      <Reveal variants={riseIn} className="flex flex-col gap-5">
        <StatusChip label={project.statusLabel} tone="live" />
        <h3 className="text-h2 font-medium tracking-tight text-ink-0">
          {project.title}
        </h3>
        <p className="max-w-md text-body-lg text-ink-2">
          {project.description}
        </p>
        <StackChips stack={project.stack} />
        <Links project={project} />
      </Reveal>
    </div>
  );
}

/** Eidos — design-to-data: screenshot foregrounded with an extracted-palette motif. */
function EidosLayout({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-10">
      <Reveal variants={riseIn} className="flex flex-col gap-4">
        <StatusChip label={project.statusLabel} tone="live" />
        <h3 className="text-h2 font-medium tracking-tight text-ink-0">
          {project.title}
        </h3>
        <p className="max-w-xl text-body-lg text-ink-2">
          {project.description}
        </p>
      </Reveal>
      <Reveal variants={maskReveal} className="relative">
        {project.screenshot && (
          <div className="group relative aspect-[16/8] w-full overflow-hidden rounded-xl border border-line-subtle shadow-[var(--shadow-elevation-1)] transition-shadow hover:shadow-[var(--shadow-elevation-2)]">
            <Image
              src={project.screenshot}
              alt={`${project.title} screenshot`}
              fill
              sizes="90vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute right-4 bottom-4 flex gap-2 rounded-full border border-line-subtle bg-surface-0/70 px-3 py-2 backdrop-blur-md">
              {SWATCHES.map((c) => (
                <span
                  key={c}
                  className="size-4 rounded-full border border-line-subtle"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>
        )}
      </Reveal>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <StackChips stack={project.stack} />
        <Links project={project} />
      </div>
    </div>
  );
}

/** Blotto — doodle-style gaming platform: playful tilt card with game-mode chips. */
function BlottoLayout({ project }: { project: Project }) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
      <Reveal variants={scaleDepth}>
        <Tilt
          tiltMaxAngleX={6}
          tiltMaxAngleY={6}
          glareEnable
          glareMaxOpacity={0.14}
          glareColor="#f2c48a"
          className="rounded-xl"
        >
          <div className="relative overflow-hidden rounded-xl border-2 border-dashed border-accent-line bg-surface-1 p-3 shadow-[var(--shadow-elevation-2)]">
            {project.screenshot && (
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src={project.screenshot}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(min-width: 768px) 55vw, 90vw"
                  className="object-cover"
                />
              </div>
            )}
            <div className="absolute top-5 left-5 flex gap-2">
              <span className="rounded-full border border-line-subtle bg-surface-0/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-2 backdrop-blur-md">
                Single-player
              </span>
              <span className="rounded-full border border-accent-line bg-accent-soft px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-accent backdrop-blur-md">
                Multiplayer
              </span>
            </div>
          </div>
        </Tilt>
      </Reveal>
      <Reveal variants={riseIn} className="flex flex-col gap-5">
        <StatusChip label={project.statusLabel} tone="live" />
        <h3 className="text-h2 font-medium tracking-tight text-ink-0">
          {project.title}
        </h3>
        <p className="max-w-md text-body-lg text-ink-2">
          {project.description}
        </p>
        <StackChips stack={project.stack} />
        <Links project={project} />
      </Reveal>
    </div>
  );
}

/** Shared layout for the archive-only entries — alternates image side per index. */
function GenericLayout({
  project,
  imageOnRight = true,
}: {
  project: Project;
  imageOnRight?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
      <Reveal
        variants={riseIn}
        className={imageOnRight ? "order-2 flex flex-col gap-5 md:order-1" : "order-2 flex flex-col gap-5"}
      >
        <StatusChip label={project.statusLabel} tone="live" />
        <h3 className="text-h2 font-medium tracking-tight text-ink-0">
          {project.title}
        </h3>
        <p className="max-w-md text-body-lg text-ink-2">
          {project.description}
        </p>
        <StackChips stack={project.stack} />
        <Links project={project} />
      </Reveal>
      <Reveal
        variants={maskReveal}
        className={imageOnRight ? "order-1 md:order-2" : "order-1"}
      >
        <div className="group relative overflow-hidden rounded-xl border border-line-subtle bg-surface-1 p-3 shadow-[var(--shadow-elevation-1)] transition-shadow hover:shadow-[var(--shadow-elevation-2)]">
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-accent/60 via-accent/10 to-transparent" />
          {project.screenshot && (
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src={project.screenshot}
                alt={`${project.title} screenshot`}
                fill
                sizes="(min-width: 768px) 50vw, 90vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </div>
          )}
        </div>
      </Reveal>
    </div>
  );
}

/** Zukre — no screenshot yet: abstract "Building…" motif that teases Currently Building. */
function ZukreLayout({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const shift = useTransform(scrollYProgress, [0, 1], [-24, 24]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-xl border border-line-subtle bg-surface-1 px-8 py-14 md:px-14"
    >
      <motion.div
        style={{ x: shift }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--accent-soft),transparent_60%)]"
      />
      <Reveal variants={riseIn} className="relative flex flex-col items-start gap-5">
        <StatusChip label={project.statusLabel} tone="accent" />
        <h3 className="text-h2 font-medium tracking-tight text-ink-0">
          {project.title}
        </h3>
        <p className="max-w-lg text-body-lg text-ink-2">
          {project.description}
        </p>
        <StackChips stack={project.stack} />
        <Link
          href="/#currently-building"
          className="group mt-2 flex items-center gap-2 rounded-full border border-accent-line bg-accent-soft px-5 py-2.5 text-body-sm font-medium text-accent transition-all hover:-translate-y-0.5 hover:opacity-90"
        >
          <Hammer size={14} />
          See what&apos;s being built
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </Reveal>
    </div>
  );
}

export function ProjectCase({ project }: { project: Project }) {
  switch (project.slug) {
    case "denken-ai":
      return <DenkenLayout project={project} />;
    case "blotto":
      return <BlottoLayout project={project} />;
    case "kotoba":
      return <KotobaLayout project={project} />;
    case "eidos":
      return <EidosLayout project={project} />;
    case "veyra":
      return <GenericLayout project={project} imageOnRight />;
    case "ai-complaint-copilot":
      return <GenericLayout project={project} imageOnRight={false} />;
    case "macziom-infra":
      return <GenericLayout project={project} imageOnRight />;
    case "zukre":
      return <ZukreLayout project={project} />;
    default:
      return <GenericLayout project={project} imageOnRight />;
  }
}
