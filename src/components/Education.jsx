"use client";
import React from "react";
import { GraduationCap, BookOpen, Award, MapPin } from "lucide-react";

const educationData = [
  {
    institution: "JSS Academy of Technical Education",
    degree:
      "Bachelor of Technology in Electronics and Communication Engineering",
    location: "Noida, UP",
    duration: "2023 — 2027",
    status: "6th Semester // Active",
    courses: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Microprocessors",
    ],
    stats: {
      label: "Current Standing",
      value: "Semester 06",
    },
  },
  // You can add your 12th/10th grade here later if you want
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative z-10 w-full bg-black border-t border-white/5 py-32 px-6 overflow-hidden"
    >
      {/* AESTHETIC BACKGROUND */}
      <div
        className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff05 1px, transparent 1px), linear-gradient(90deg, #ffffff05 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center gap-6 mb-16">
          <div className="p-3 rounded-xl bg-zinc-950 border border-white/10 text-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.1)]">
            <GraduationCap size={24} strokeWidth={1.5} />
          </div>
          <div>
            <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.4em] mb-2 block">
              [ Protocol 05 // Academy ]
            </span>
            <h2 className="text-4xl font-bold uppercase tracking-tight text-white leading-none">
              Education
            </h2>
          </div>
        </div>

        {/* Education Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {educationData.map((edu, index) => (
            <div key={index} className="lg:col-span-12 group relative">
              <div className="relative rounded-2xl border border-white/10 bg-[#080808]/80 backdrop-blur-md p-5 md:p-12 transition-all duration-300 hover:border-violet-500/30">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                  {/* Left Side: Info */}
                  <div className="flex-grow space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                        {edu.institution}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-zinc-400 font-mono text-sm">
                        <span className="flex items-center gap-2">
                          <MapPin size={14} className="text-violet-500" />{" "}
                          {edu.location}
                        </span>
                        <span className="text-zinc-800 hidden md:inline">
                          |
                        </span>
                        <span className="text-violet-300/80">
                          {edu.duration}
                        </span>
                      </div>
                    </div>

                    <p className="text-lg text-zinc-300 max-w-3xl leading-relaxed">
                      {edu.degree}
                    </p>

                    {/* Coursework Tags */}
                    <div className="space-y-3">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
                        <BookOpen size={12} /> Relevant_Coursework
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course) => (
                          <span
                            key={course}
                            className="px-2 py-0.5 rounded-md bg-zinc-900 border border-white/5 text-[11px] text-zinc-400 font-mono italic"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Status Badge */}
                  <div className="w-full lg:w-auto">
                    <div className="p-4 md:p-6 rounded-2xl bg-zinc-950 border border-white/5 flex flex-col items-center justify-center text-center space-y-2 lg:min-w-[200px]">
                      <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                        {edu.stats.label}
                      </span>
                      <span className="text-xl font-black text-white uppercase tracking-tighter">
  {edu.stats.value}
</span>
                      <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden mt-2">
                        <div className="h-full bg-violet-500 w-[75%]" />{" "}
                        {/* Progress bar for 6th sem */}
                      </div>
                      <span className="font-mono text-[9px] text-violet-500/80 mt-1 uppercase">
                        Current_Status: {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
