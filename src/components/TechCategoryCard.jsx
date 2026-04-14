"use client";
import React from "react";

export default function TechCategoryCard({ title, icon: Icon, stack, color }) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-[#080808] p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#0c0c0c] group shadow-xl">
      {/* Title Section */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className={`p-2 rounded-lg bg-zinc-950 border border-white/5 ${color}`}
        >
          <Icon size={18} strokeWidth={2.5} />
        </div>
        <h3 className="text-[14px] font-bold text-white font-mono tracking-tight uppercase">
          {title}
        </h3>
      </div>

      {/* Tight 2-column Grid */}
      <div className="grid grid-cols-2 gap-y-5">
        {stack.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-3 group/item cursor-default"
          >
            <div className="relative h-4 w-4 flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover/item:scale-125">
              {tech.name === "Express.js" ? (
                <span className="text-[10px] font-bold text-zinc-400 font-mono leading-none">
                  ex
                </span>
              ) : (
                <img
                  src={tech.icon}
                  alt={tech.name}
                  /* Removed grayscale and opacity to show full brand colors */
                  className="w-full h-full object-contain transition-all duration-300"
                />
              )}
            </div>
            <span className="text-[12px] text-zinc-400 group-hover/item:text-white transition-colors font-medium">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* Subtle Bottom Glow Decor */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}
