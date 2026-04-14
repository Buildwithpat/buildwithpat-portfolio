"use client";
import React from "react";
import { Database, Terminal, Layers3, Layout } from "lucide-react";
import CodeWindow from "./CodeWindow";
import TechCategoryCard from "./TechCategoryCard";

export default function TechVault() {
  const frontendStack = [
    { name: "React.js", icon: "/logos/tech/react.svg" },
    { name: "Next.js", icon: "/logos/tech/nextjs.svg" },
    { name: "TypeScript", icon: "/logos/tech/typescript.svg" },
    { name: "JavaScript", icon: "/logos/tech/javascript.svg" },
    { name: "Tailwind", icon: "/logos/tech/tailwind.svg" },
    { name: "Framer", icon: "/logos/tech/framer.svg" },
    { name: "Shadcn UI", icon: "/logos/tech/shadcn.svg" },
    { name: "Figma", icon: "/logos/tech/figma.svg" },
  ];

  const backendStack = [
    { name: "Java", icon: "/logos/tech/java.svg" },
    { name: "Spring Boot", icon: "/logos/tech/spring.svg" },
    { name: "Node.js", icon: "/logos/tech/nodejs.svg" },
    { name: "Express.js", icon: "/logos/tech/express.svg" },
    { name: "C++", icon: "/logos/tech/cpp.svg" },
  ];

  const databaseStack = [
    { name: "MongoDB", icon: "/logos/tech/mongodb.svg" },
    { name: "PostgreSQL", icon: "/logos/tech/postgresql.svg" },
    { name: "Prisma", icon: "/logos/tech/prisma.svg" },
    { name: "SQL", icon: "/logos/tech/sql.svg" },
  ];

  const devopsStack = [
    { name: "Docker", icon: "/logos/tech/docker.svg" },
    { name: "AWS", icon: "/logos/tech/aws.svg" },
    { name: "Git", icon: "/logos/tech/git.svg" },
    { name: "GitHub", icon: "/logos/tech/github.svg" },
  ];

  return (
    <section
      id="vault"
      className="relative z-10 w-full bg-black border-t border-white/5 py-32 px-6"
    >
      {/* 1. BACKGROUND WRAPPER (Handles overflow for the glows without breaking sticky) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(#ffffff05 1px, transparent 1px), linear-gradient(90deg, #ffffff05 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[140px] -z-10" />
        <div className="absolute bottom-1/4 -left-24 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      </div>

      {/* 2. CONTENT WRAPPER */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-6 mb-16">
          <div className="p-3 rounded-xl bg-zinc-950 border border-white/10 text-white/70 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
            <Layers3 size={24} strokeWidth={1.5} />
          </div>
          <div>
            <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.4em] mb-2 block">
              [ Protocol 03 // Core_Competency ]
            </span>
            <h2 className="text-4xl font-bold uppercase tracking-tight text-white leading-none">
              Tech Vault
            </h2>
          </div>
        </div>

        {/* 3. BENTO GRID (Ensuring items-start is set) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (Scrolls normally) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <TechCategoryCard
              title="Frontend Ecosystem"
              icon={Layout}
              stack={frontendStack}
              color="text-amber-500"
            />
            <TechCategoryCard
              title="Backend Core"
              icon={Terminal}
              stack={backendStack}
              color="text-amber-500"
            />
            <TechCategoryCard
              title="Database & ORM"
              icon={Database}
              stack={databaseStack}
              color="text-amber-500"
            />
            <TechCategoryCard
              title="DevOps & Tooling"
              icon={Layers3}
              stack={devopsStack}
              color="text-amber-500"
            />
          </div>

          {/* Right Column (STAYING STICKY) */}
          <div className="hidden lg:block lg:col-span-7 sticky top-32">
            <CodeWindow />
          </div>

          {/* Mobile Fallback (Not sticky) */}
          <div className="block lg:hidden">
            <CodeWindow />
          </div>
        </div>
      </div>
    </section>
  );
}
