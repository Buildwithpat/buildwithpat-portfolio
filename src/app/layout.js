"use client";
import React from "react";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
        <CustomCursor />
        {/* --- 1. THE HEADER (Branding & Resume) --- */}
        <header className="fixed top-0 left-0 w-full z-[60] px-8 h-20 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-3 pointer-events-auto">
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
              Aakash Pathak /
            </span>
            <span className="text-lg font-bold tracking-tight text-white">
              BuildWithPat
            </span>
          </div>

          <button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1PP7jLmMmlEbbRRXLHuJkdswfy4GLMHY0/view?usp=drive_link",
                "_blank",
              )
            }
            className="pointer-events-auto px-6 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-all shadow-lg"
          >
            Resume
          </button>
        </header>

        {/* --- 2. MAIN CONTENT --- */}
        {/* We removed the old sidebar and stars from here to avoid conflicts */}
        <main className="relative z-10 w-full min-h-screen">{children}</main>
      </body>
    </html>
  );
}
