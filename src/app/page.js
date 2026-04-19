"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import {
  Terminal,
  ExternalLink,
  Zap,
  ShieldAlert,
  Briefcase,
  FolderRoot,
} from "lucide-react";

import Tilt from "react-parallax-tilt";
import { GravityStarsBackground } from "@/components/ui/gravity-stars";
import TechVault from "@/components/TechVault";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {

  
  const projects = [
    {
      title: "Denken AI",
      logo: "/logos/denken.svg",
      screenshot: null, // <--- You need to add this image
      description:
        "AI-native academic intelligence. Automating syllabus parsing and exam orchestration with RAG.",
      status: "Initializing",
      statusCode: "init", // Gray
      link: null,
      stack: ["Next.js", "Python", "LLM", "Vercel"],
    },
    {
      title: "Kotoba",
      logo: "/logos/kotoba.svg",
      screenshot: "/screenshots/kotoba.png", // <--- You need to add this image
      description:
        "High-performance multiplayer word-engine designed for competitive linguistic play.",
      status: "Operational",
      statusCode: "live", // Green
      link: "https://bwp-kotoba.vercel.app",
      stack: ["Socket.io", "React", "Node", "Supabase"],
    },
    {
      title: "Eidos",
      logo: "/logos/eidos.svg",
      screenshot: "/screenshots/eidos.png", // <--- You need to add this image
      description:
        "Design-to-Data pipeline. Extracting typography and color DNA from live web systems.",
      status: "Operational",
      statusCode: "live", // Green
      link: "https://bwp-eidos.vercel.app",
      stack: ["OCR", "Tailwind", "Canvas", "AWS"],
    },
    {
      title: "Zukre",
      logo: "/logos/zukre.svg",
      screenshot: null, // <--- You need to add this image
      description:
        "Next-gen skill acquisition platform utilizing AI to bridge the SDE competency gap.",
      status: "Protocol Error",
      statusCode: "error", // Red
      link: null,
      stack: ["AI", "Vector DB", "SaaS", "Pinecone"],
    },
  ];

  return (
    <div className="bg-black relative min-h-screen">
      <Navbar />

      <GravityStarsBackground
        starsCount={120}
        starsSize={1.5}
        movementSpeed={0.3}
        mouseInfluence={150} // <--- This controls the swirl radius
        gravityStrength={100} // <--- This controls how fast they snap
        starsInteraction={true}
        starsInteractionType="merge"
        className="fixed inset-0 z-0 pointer-events-none"
      />
      <section
        id="hero"
        className="relative z-1 min-h-screen flex flex-col items-center justify-center px-6 text-center"
      >
        {/* 1. @BuildWithPat Label (Centered above) */}
        <div className="mb-4">
          <span className="font-mono text-[10px] tracking-[0.4em] text-zinc-500 uppercase font-semibold">
            @BuildWithPat
          </span>
        </div>

        {/* 2. MAIN BOLD TITLE (With Opacity Differentiator) */}
        <div className="max-w-5xl">
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter text-white leading-[1.1] mb-8">
            Hey, I'm <br />
            <span className="text-white/40">Aakash</span> Pathak
          </h1>
        </div>

        {/* 3. AUTO WRITER (Centered below) */}
        <div className="font-mono text-xs md:text-sm text-zinc-500 tracking-[0.2em] uppercase max-w-xl leading-relaxed h-12">
          <TypeAnimation
            sequence={[
              "Building products to solve real-world problems.",
              2000,
              "Turning original ideas into functional systems is my hobby.",
              2000,
              "Developing solutions for challenges people face daily.",
              2000,
            ]}
            repeat={Infinity}
            cursor={true}
          />
        </div>

        {/* 4. CTA BUTTONS (Matching Screenshot) */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center pointer-events-auto relative z-20">
          <button
            onClick={() => {
              const el = document.getElementById("matrix");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-10 py-4 bg-white text-black text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-zinc-200 transition-all shadow-xl"
          >
            View Projects
          </button>
          <button
            onClick={() => {
              const el = document.getElementById("footer-section"); // Changed to match wrapper below
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-10 py-4 border border-zinc-800 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-zinc-900 transition-all"
          >
            Contact
          </button>
        </div>

        {/* 5. STATUS BAR (Fixed bottom) */}
      </section>

      <About />

      <section
        id="matrix"
        className="relative z-10 w-full bg-black border-t border-white/5 py-32 px-6"
      >
        <div
          className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#ffffff05 1px, transparent 1px), linear-gradient(90deg, #ffffff05 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] -z-10" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Your existing Matrix Header and Project Mapping code goes here */}
        </div>
        <div className="max-w-7xl mx-auto">
          {/* Header Area */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
            {/* Left Side: Icon + Text Container */}
            <div className="flex items-center gap-6">
              {/* 1. The Icon Box */}
              <div className="p-3 rounded-xl bg-zinc-950 border border-white/10 text-white/70 shadow-[0_0_20px_rgba(255,255,255,0.05)] shrink-0">
                <Briefcase size={24} strokeWidth={1.5} />
              </div>

              {/* 2. The Titles */}
              <div>
                <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.4em] mb-2 block">
                  [ Protocol 01 // Production_Inventory ]
                </span>
                <h2 className="text-4xl font-bold uppercase tracking-tight text-white leading-none">
                  System Matrix
                </h2>
              </div>
            </div>

            {/* Right Side: Stats */}
            <div className="font-mono text-[9px] text-zinc-700 uppercase tracking-widest leading-relaxed md:text-right">
              Active Instances: 02 <br />
              Total Systems Deployed: {projects.length}
            </div>
          </div>

          {/* New Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project) => (
              <ProjectModule key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
      <div id="tech-vault">
        <TechVault />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="footer-section">
        <Footer />
      </div>
    </div>
  );
}

/* SUB-COMPONENT: PROJECT MODULE */
function ProjectModule({
  title,
  logo,
  screenshot,
  description,
  status,
  statusCode,
  link,
  stack,
}) {
  const isLive = link !== null;

  // Handle status colors dynamically
  const statusConfig = {
    init: {
      color: "text-zinc-600",
      borderColor: "border-zinc-800",
      icon: <Terminal size={12} />,
    },
    live: {
      color: "text-green-500",
      borderColor: "border-green-500/30",
      icon: <Zap size={12} />,
    },
    error: {
      color: "text-red-500",
      borderColor: "border-red-500/30",
      icon: <ShieldAlert size={12} />,
    },
  };

  const currentStatus = statusConfig[statusCode] || statusConfig.init;

  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.02} // <--- Reduced intensity even further (0.05 is too high for pure black)
      glareColor="#ffffff"
      glarePosition="top" // <--- Locks light to the top edge only
      glareBorderRadius="16px"
      tiltMaxAngleX={3} // <--- Subtler tilt (4 or 5 can catch too much glare)
      tiltMaxAngleY={3}
      scale={1.01} // <--- Minimal scale to keep it crisp
      perspective={1500} // <--- High perspective keeps the "tilt" from looking distorted
      className="parallax-effect rounded-2xl"
    >
      <div
        onClick={() => isLive && window.open(link, "_blank")}
        className={`relative bg-black border rounded-2xl overflow-hidden transition-all duration-300 shadow-2xl group flex flex-col h-full
  ${
    isLive
      ? "border-white/20 hover:border-white/40 cursor-pointer" // Brighter default
      : "border-white/10 cursor-default hover:border-white/30" // Visible even when not live
  }`}
      >
        {/* 1. TOP SECTION: Dashboard Visualization (Screenshot Slot) */}
        {/* 1. TOP SECTION: Dashboard Visualization */}
        <div className="relative h-[200px] w-full border-b border-white/5 bg-black md:h-[320px] p-3 md:p-4 overflow-hidden">
          <div className="relative h-full w-full rounded-xl overflow-hidden flex items-center justify-center p-4">
            {screenshot ? (
              <>
                {/* ACTUAL SCREENSHOT: For Eidos & Kotoba */}
                <Image
                  src={screenshot}
                  alt={`${title} Interface`}
                  fill
                  className={`object-contain object-center transition-all duration-700
            ${isLive ? "group-hover:scale-105 opacity-80 group-hover:opacity-100" : "opacity-30 grayscale"}`}
                />
                {/* Deep Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
              </>
            ) : (
              /* "COMING SOON" PLACEHOLDER: For Denken & Zukre */
              <div className="flex flex-col items-center gap-4 opacity-30 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100">
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
                <div className="flex flex-col items-center">
                  <span className="font-mono text-[9px] uppercase tracking-[0.5em] text-zinc-500 mb-1">
                    System_Status
                  </span>
                  <span className="font-mono text-[11px] text-white uppercase tracking-widest font-bold">
                    Coming Soon
                  </span>
                </div>
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
              </div>
            )}

            {/* Top-Right Technical Hint (External Link icon) */}
            <div className="absolute top-4 right-4 z-20">
              {isLive && (
                <span className="p-2 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-zinc-500 group-hover:text-white transition-colors shadow-2xl flex items-center justify-center">
                  <ExternalLink size={14} />
                </span>
              )}
            </div>
          </div>
        </div>

        {/* 2. MIDDLE SECTION: Brand & Text */}
        <div className="p-5 md:p-8 flex-grow bg-black">
          <div className="flex items-center justify-between mb-4 md:mb-8 gap-4">
            {/* wide LOGO slot */}
            <div className="relative h-7 md:h-9 w-[140px] md:w-[180px]">
              <Image
                src={logo}
                alt={title}
                fill
                className={`object-contain object-left transition-all duration-500 
    ${isLive ? "opacity-100" : "opacity-100 brightness-110"}`}
              />
            </div>

            {/* Live Status Badge - Added bg-black and specific borders */}
            <div
              className={`flex items-center gap-2.5 font-mono text-[9px] uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border bg-black shadow-[0_0_20px_rgba(0,0,0,0.8)] ${currentStatus.borderColor} ${currentStatus.color}`}
            >
              {currentStatus.icon}
              {status}
            </div>
          </div>

          <p className="text-zinc-400 leading-relaxed text-[13px] md:text-sm mb-4 md:mb-10 group-hover:text-white transition-colors">
            {description}
          </p>
        </div>

        {/* 3. BOTTOM SECTION: Tech Stack & Access */}
        <div className="px-5 py-4 border-t border-zinc-900 bg-zinc-950/50 mt-auto flex items-center justify-between">
          <div className="flex flex-wrap gap-2.5">
            {stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-zinc-600 bg-zinc-900 px-2 py-0.5 md:px-3 md:py-1 text-[8px] md:text-[9px] rounded border border-zinc-800 uppercase tracking-tight"
              >
                {tech}
              </span>
            ))}
          </div>

          {isLive && (
            <span className="font-mono text-[10px] text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 uppercase tracking-widest flex items-center gap-2">
              System Matrix <span className="text-lg">→</span>
            </span>
          )}
        </div>

        {/* Subtle Hover Highlight decor */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </Tilt>
  );
}
