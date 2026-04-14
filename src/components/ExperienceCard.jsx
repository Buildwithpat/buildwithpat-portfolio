"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  MoveRight,
} from "lucide-react";

export default function ExperienceCard({
  role,
  company,
  location,
  duration,
  description,
  stack,
  achievements,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="inline-block w-full rounded-2xl border border-white/10 bg-[#080808]/80 backdrop-blur-sm p-8 transition-all duration-300 hover:border-white/20 group">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight mb-1 group-hover:text-amber-500 transition-colors">
            {role}
          </h3>
          <div className="flex items-center gap-2 text-zinc-400 font-mono text-[13px]">
            <span className="text-amber-500/80">{company}</span>
            <span className="text-zinc-800">•</span>
            <div className="flex items-center gap-1">
              <MapPin size={12} className="text-zinc-600" />
              <span>{location}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-white/5 text-zinc-400 text-[11px] font-mono whitespace-nowrap">
          <Calendar size={12} className="text-amber-500" />
          {duration}
        </div>
      </div>

      <p className="text-zinc-400 text-[14px] leading-relaxed mb-8 italic">
        "{description}"
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {stack.map((item) => (
          <div
            key={item}
            className="px-2.5 py-1 rounded bg-zinc-950 border border-white/5 flex items-center gap-2"
          >
            <img
              src={`https://cdn.simpleicons.org/${item.toLowerCase().replace(/\.js/g, "dotjs").replace(/\s+/g, "")}`}
              alt=""
              className="h-3 w-3 object-contain opacity-70"
            />
            <span className="text-[10px] text-zinc-500 font-mono">{item}</span>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="overflow-hidden"
          >
            <div className="pt-8 border-t border-white/5 flex flex-col gap-4 mb-8">
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-bold">
                Log_Entries
              </h4>
              {achievements.map((point, i) => (
                <div key={i} className="flex gap-4 group/item">
                  <MoveRight
                    size={14}
                    className="text-amber-500 mt-1 flex-shrink-0 transition-transform group-hover/item:translate-x-1"
                  />
                  <p className="text-zinc-400 text-[13.5px] leading-relaxed group-hover/item:text-zinc-200 transition-colors">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full py-3 rounded-xl border border-white/5 bg-zinc-950 hover:bg-zinc-900 transition-all flex items-center justify-center gap-2 text-[11px] font-mono uppercase tracking-widest text-zinc-500 hover:text-white group-hover:border-amber-500/20"
      >
        {isExpanded ? (
          <>
            Collapse_Protocol <ChevronUp size={14} />
          </>
        ) : (
          <>
            View_Full_Experience <ChevronDown size={14} />
          </>
        )}
      </button>
    </div>
  );
}
