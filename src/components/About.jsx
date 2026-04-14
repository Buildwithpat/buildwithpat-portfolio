"use client";
import React from "react";
import Image from "next/image";
import {
  User,
  Cpu,
  MapPin,
  GraduationCap,
  MoveRight,
  Globe,
  Database,
} from "lucide-react";

// 1. DATA: "System Specs" Metadata
const systemMetadata = [
  {
    icon: Cpu,
    label: "Core_Version",
    value: "SDE_v2.5",
    color: "text-violet-500",
  },
  {
    icon: Globe,
    label: "Region_Sector",
    value: "Noida, IN",
    color: "text-emerald-500",
  },
  {
    icon: GraduationCap,
    label: "Registry",
    value: "JSSATE Noida",
    color: "text-blue-500",
  },
  {
    icon: Database,
    label: "Focus_Stack",
    value: "Full-Stack / UX",
    color: "text-amber-500",
  },
];

// 2. DATA: Project Narratives
const projectNarratives = [
  {
    title: "Kotoba",
    purpose: "For boring typers like me.",
    icon: "/logos/kotoba.svg", // <-- Ensure this file exists
  },
  {
    title: "Eidos",
    purpose: "For people who have hard time analyzing a design.",
    icon: "/logos/eidos.svg", // <-- Ensure this file exists
  },
  {
    title: "DenkenAI",
    purpose: "To help students in exam prep.",
    icon: "/logos/denken.svg", // <-- Ensure this file exists
  },
  {
    title: "Zukre",
    purpose: "It’s suspense.",
    icon: "/logos/zukre.svg", // <-- Ensure this file exists
    color: "text-red-500", // Special color for suspense
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 w-full bg-black py-20 md:py-32 px-6 overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="flex items-center gap-6 mb-16">
          <div className="p-3 rounded-xl bg-zinc-950 border border-white/10 text-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.1)]">
            <User size={24} strokeWidth={1.5} />
          </div>
          <div>
            <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.4em] mb-2 block">
              [ Protocol 00 // System_Identity ]
            </span>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-white leading-none">
              About Me
            </h2>
          </div>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT COLUMN: THE VISUALIZER (40%) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative aspect-square rounded-2xl border border-white/10 bg-[#080808] overflow-hidden p-3 group">
              <div className="relative h-full w-full rounded-xl overflow-hidden">
                <Image
                  src="/aakash1.jpg" // <-- Ensure this file exists in public/
                  alt="Aakash Pathak"
                  fill
                  className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/80 to-transparent p-5 flex flex-col justify-end">
                  <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest font-bold">
                    Model // A.Pathak
                  </span>
                  <span className="font-mono text-[9px] text-violet-400/80 uppercase tracking-[0.3em]">
                    Status: Nominal
                  </span>
                </div>
              </div>
            </div>

            {/* QUICK STATS (System Specs) */}
            <div className="grid grid-cols-2 gap-4">
              {systemMetadata.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-zinc-950/50 p-4 flex items-start gap-3 transition-all duration-300 hover:border-white/20 hover:bg-zinc-900/50"
                >
                  <div
                    className={`${item.color} mt-1 flex-shrink-0 opacity-80`}
                  >
                    <item.icon size={16} strokeWidth={2} />
                  </div>
                  <div>
                    <span className="font-mono text-[8px] text-zinc-600 uppercase tracking-wider block mb-0.5">
                      {item.label}
                    </span>
                    <span className="text-[11px] md:text-[12px] font-bold text-zinc-300 tracking-tight leading-tight truncate block">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: SPLIT BIO & MINI CARDS (60%) */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-6">
            {/* A. Bio Narrative (Left half of column) */}
            <div className="flex-1 rounded-2xl border border-white/10 bg-[#080808] overflow-hidden flex flex-col min-h-[400px]">
              <div className="flex items-center justify-between px-4 py-3 bg-[#0D0D0D] border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-zinc-800" />
                  <div className="h-2 w-2 rounded-full bg-zinc-800" />
                  <div className="h-2 w-2 rounded-full bg-zinc-800" />
                </div>
                <span className="font-mono text-[9px] text-zinc-600 tracking-widest uppercase">
                  System_Manifest.log
                </span>
              </div>
              <div className="p-6 md:p-10 flex-grow space-y-5 text-zinc-400 text-[14px] md:text-[15px] leading-relaxed italic font-light selection:bg-violet-600/30">
                {/* Point 1: The Philosophy */}
                <p className="flex gap-3">
                  <MoveRight
                    size={14}
                    className="text-violet-500 mt-1 flex-shrink-0"
                  />
                  <span>
                    System Initialized. My approach is simple:{" "}
                    <span className="text-white font-semibold not-italic">
                      I build for the "Missing Piece."
                    </span>{" "}
                    I identify friction points and engineer direct solutions
                    rather than just following trends.
                  </span>
                </p>

                {/* Point 2: Execution */}
                <p className="flex gap-3">
                  <MoveRight
                    size={14}
                    className="text-violet-500 mt-1 flex-shrink-0"
                  />
                  <span>
                    Architecture Protocol: Obsessed with{" "}
                    <span className="text-white not-italic font-medium">
                      performance-first frontend logic
                    </span>
                    . I focus on Next.js 14 to ensure every solution is as fast
                    as it is functional.
                  </span>
                </p>

                {/* Point 3: Scalability */}
                <p className="flex gap-3">
                  <MoveRight
                    size={14}
                    className="text-violet-500 mt-1 flex-shrink-0"
                  />
                  <span>
                    Interface Logic: I treat{" "}
                    <span className="text-violet-400 not-italic font-medium">
                      Responsive Design
                    </span>{" "}
                    as a core requirement. Every project in the matrix below is
                    built to scale across the hardware spectrum.
                  </span>
                </p>

                {/* Point 4: Impact */}
                <p className="flex gap-3">
                  <MoveRight
                    size={14}
                    className="text-violet-500 mt-1 flex-shrink-0"
                  />
                  <span>
                    From building{" "}
                    <span className="text-white not-italic font-medium underline underline-offset-4 decoration-violet-500/50">
                      Eidos
                    </span>{" "}
                    for design analysis to{" "}
                    <span className="text-white not-italic font-medium underline underline-offset-4 decoration-violet-500/50">
                      Denken
                    </span>{" "}
                    for learners, my work is a collection of direct solutions.
                  </span>
                </p>

                {/* Point 5: The Goal */}
                <p className="flex gap-3 pt-2 border-t border-white/5">
                  <MoveRight
                    size={14}
                    className="text-violet-500 mt-1 flex-shrink-0"
                  />
                  <span>
                    Looking ahead:{" "}
                    <span className="text-white font-semibold not-italic">
                      Actively seeking the next complex problem to dismantle and
                      rebuild into a seamless product.
                    </span>
                  </span>
                </p>
              </div>
            </div>

            {/* B. PROJECT MINI CARDS (Right half of column) */}
            <div className="flex-1 flex flex-col gap-6 md:min-h-[400px]">
              {projectNarratives.map((proj, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border border-white/10 bg-zinc-950/70 p-5 flex-grow flex flex-col justify-center transition-all duration-300 hover:border-white/20 group hover:shadow-[0_0_20px_rgba(255,255,255,0.02)] ${proj.color || "border-white/10"}`}
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="h-8 w-8 flex-shrink-0 relative rounded-md border border-white/5 bg-black p-1.5">
                      <Image
                        src={proj.icon}
                        alt={proj.title}
                        fill
                        className="object-contain object-center opacity-70 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <h4 className="text-sm md:text-base font-bold text-white tracking-tight group-hover:text-amber-500 transition-colors">
                      {proj.title}
                    </h4>
                  </div>
                  <p
                    className={`text-zinc-400 text-[12px] md:text-[13px] leading-relaxed italic font-light ${proj.color || "text-zinc-400"}`}
                  >
                    "{proj.purpose}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
