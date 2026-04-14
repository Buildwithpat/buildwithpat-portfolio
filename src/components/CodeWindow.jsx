"use client";
import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function CodeWindow() {
  const [activeTab, setActiveTab] = useState("Portfolio.tsx");
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const tabs = ["Portfolio.tsx", "Tailwind.config.js", "Animations.css"];
  const switchInterval = 2500;

  useEffect(() => {
    let timer;
    if (!isPaused) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setActiveTab((current) => {
              const nextIndex = (tabs.indexOf(current) + 1) % tabs.length;
              return tabs[nextIndex];
            });
            return 0;
          }
          return prev + 100 / (switchInterval / 10);
        });
      }, 10);
    }
    return () => clearInterval(timer);
  }, [isPaused, tabs]);

  const handleManualTabChange = (tab) => {
    setActiveTab(tab);
    setProgress(0);
  };

  const getTabIcon = (tabName) => {
    if (tabName.endsWith(".tsx")) return "/logos/tech/react.svg";
    if (tabName.endsWith(".js")) return "/logos/tech/tailwind.svg";
    if (tabName.endsWith(".css")) return "/logos/tech/javascript.svg";
    return null;
  };

  const codeSnippets = {
    "Portfolio.tsx": `// Core Portfolio Architecture
import React from "react";
import { TechVault, Experience } from "@/components";

export default function Portfolio() {
  const techStack = {
    framework: "Next.js 14 (App Router)",
    styling: "Tailwind CSS",
    animations: "Framer Motion",
    icons: "Lucide & SimpleIcons"
  };

  return (
    <main className="bg-black selection:bg-white">
      <Hero data={personalDetails} />
      <ProjectMatrix instances={4} />
      <TechVault stack={techStack} />
    </main>
  );
}`,
    "Tailwind.config.js": `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        zinc: { 950: "#09090b" },
        amber: { 500: "#f59e0b" }
      },
      backgroundImage: {
        'blueprint': 'linear-gradient(#ffffff05 1px, transparent 1px)',
        'glow-mesh': 'radial-gradient(circle, var(--tw-gradient-stops))'
      }
    }
  }
}`,
    "Animations.css": `/* Custom Protocol Transitions */

@keyframes pulse-glow {
  0%, 100% { opacity: 0.1; transform: scale(1); }
  50% { opacity: 0.2; transform: scale(1.05); }
}

.ambient-glow {
  filter: blur(120px);
  pointer-events: none;
  z-index: -10;
  animation: pulse-glow 8s infinite ease-in-out;
}

.parallax-card {
  transition: transform 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);
}`,
  };

  return (
    <div
      className="relative rounded-2xl border border-white/10 bg-[#080808] overflow-hidden shadow-2xl transition-all duration-500 hover:border-white/20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. Tab Bar - UNTOUCHED */}
      <div className="flex items-center bg-[#0D0D0D] border-b border-white/10 px-4 pt-2">
        <div className="flex gap-1.5 mr-6">
          <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
        </div>

        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleManualTabChange(tab)}
            className={`relative px-4 py-2 text-[11px] font-mono flex items-center gap-2 border-t border-x rounded-t-lg transition-all
              ${
                activeTab === tab
                  ? "bg-[#080808] border-white/10 text-white"
                  : "bg-transparent border-transparent text-zinc-500 hover:text-zinc-300"
              }`}
          >
            <img
              src={getTabIcon(tab)}
              alt=""
              className="h-3.5 w-3.5 object-contain"
            />
            <span className="opacity-70">{tab}</span>

            {activeTab === tab && (
              <div
                className="absolute bottom-0 left-0 h-[2px] bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)] transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            )}
          </button>
        ))}
      </div>
      {/* 2. Code Display Area - UNTOUCHED HEIGHT */}
      
      <div className="p-4 text-[13px] leading-relaxed overflow-x-auto h-[450px]">
        <SyntaxHighlighter
          language={activeTab.endsWith(".css") ? "css" : "javascript"}
          style={vscDarkPlus}
          customStyle={{
            background: "transparent",
            padding: "10px",
            fontSize: "inherit", // Ensures it respects your text-[13px]
          }}
          showLineNumbers={true}
          wrapLines={true} // Crucial: Prevents code from pushing the container width
          lineNumberStyle={{ color: "#333", minWidth: "2.5em" }}
        >
          {codeSnippets[activeTab]}
        </SyntaxHighlighter>
      </div>
      
      {/* 3. Footer - UNTOUCHED */}
      <div className="px-6 py-3 border-t border-white/10 bg-[#0D0D0D] flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div
            className={`h-1.5 w-3 rounded-sm ${isPaused ? "bg-red-500" : "bg-amber-500 animate-pulse"}`}
          />
          <span className="text-[10px] text-zinc-500 font-mono tracking-tight uppercase">
            {isPaused ? "System_Paused" : "Auto_Cycle_Active"}
          </span>
        </div>
        <span className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">
          {isPaused ? "Release to resume" : "Hover to freeze"}
        </span>
      </div>
    </div>
  );
}
