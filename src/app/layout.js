"use client";
import React from "react";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import CommandPalette from "@/components/CommandPalette";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
        <CommandPalette>
          <CustomCursor />

          {/* --- 1. THE HEADER (Optimized for Mobile) --- */}
          <header className="fixed top-0 left-0 w-full z-[1002] h-20 flex items-center justify-between pointer-events-none px-5 md:px-8">
            <div className="flex flex-col md:flex-row md:items-center gap-0.5 md:gap-3 pointer-events-auto">
              <span className="font-mono text-[9px] md:text-[10px] text-zinc-500 uppercase tracking-widest leading-none">
                {/* Shows 'A. Pathak' on mobile, 'Aakash Pathak' on desktop */}
                <span className="md:hidden">A. Pathak /</span>
                <span className="hidden md:inline">Aakash Pathak /</span>
              </span>
              <span className="text-base md:text-lg font-bold tracking-tight text-white leading-none">
                BuildWithPat
              </span>
            </div>

            {/* Command Menu Indicator (Desktop Only) */}
            {/* Command Menu Indicator (Desktop Only) */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg pointer-events-auto hover:bg-white/10 transition-colors group absolute left-1/2 -translate-x-1/2">
              <span className="text-[10px] font-mono text-zinc-400 group-hover:text-white transition-colors">
                PRESS
              </span>
              <div className="flex gap-1">
                <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded text-[9px] text-zinc-300 font-sans border border-white/10 shadow-sm leading-none flex items-center">
                  ⌘
                </kbd>
                <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded text-[9px] text-zinc-300 font-sans border border-white/10 shadow-sm leading-none flex items-center text-[10px]">
                  K
                </kbd>
              </div>
            </div>

            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1PP7jLmMmlEbbRRXLHuJkdswfy4GLMHY0/view?usp=drive_link",
                  "_blank",
                )
              }
              className="pointer-events-auto px-5 py-1.5 md:px-6 md:py-2 bg-white text-black text-[9px] md:text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-all shadow-lg leading-none"
            >
              Resume
            </button>
          </header>

          {/* --- 2. MAIN CONTENT --- */}
          <main className="relative z-10 w-full min-h-screen">{children}</main>
        </CommandPalette>
      </body>
    </html>
  );
}
