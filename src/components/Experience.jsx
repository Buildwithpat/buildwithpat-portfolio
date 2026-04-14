"use client";
import React from "react";
import { Terminal } from "lucide-react";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Macziom Architects & Constructions",
    location: "Pitampura, Delhi",
    duration: "April 2026 — Present",
    description:
      "Developing and optimizing responsive web interfaces for the Build Buddy project, improving user experience and performance.",
    stack: ["React.js", "Tailwind CSS", "JavaScript", "Vite"],
    achievements: [
      "Optimizing responsive web interfaces for the Build Buddy project to improve usability.",
      "Collaborating with design and backend teams to implement scalable frontend architectures.",
      "Refining UI/UX layouts, interactions, and component structures for better consistency.",
      "Assisting in building maintainable web applications with a focus on clean code practices.",
    ],
  },
  {
    role: "UI Designer",
    company: "Gettobyte Technologies Pvt. Ltd.",
    location: "Noida, India",
    duration: "Nov 2024 — Dec 2024",
    description:
      "Designed scalable user interfaces and improved UI consistency across digital products for internal and external stakeholders.",
    stack: ["Figma", "UI/UX", "Prototyping", "Design Systems"],
    achievements: [
      "Created high-fidelity wireframes and interactive prototypes in Figma to streamline workflows.",
      "Collaborated with developers to ensure accurate implementation of responsive layouts.",
      "Improved UI consistency across various digital products used by stakeholders.",
    ],
  },
  {
    role: "UI/UX Designer",
    company: "Banao Technologies",
    location: "Remote",
    duration: "May 2024 — July 2024",
    description:
      "Delivered client-focused UI solutions for web and mobile platforms across multiple domains.",
    stack: ["UI/UX", "Figma", "Interaction Design", "User Research"],
    achievements: [
      "Delivered client-focused UI solutions for both web and mobile platforms.",
      "Improved usability and interaction flows through structured feedback cycles.",
      "Executed iterative design improvements based on user research and testing.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 w-full bg-black border-t border-white/5 py-32 px-6 overflow-hidden"
    >
      {/* AESTHETIC BACKGROUND */}
      <div
        className="absolute inset-0 z-0 opacity-[0.12]"
        style={{
          backgroundImage: `linear-gradient(#ffffff05 1px, transparent 1px), linear-gradient(90deg, #ffffff05 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-6 mb-16">
          <div className="p-3 rounded-xl bg-zinc-950 border border-white/10 text-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
            <Terminal size={24} strokeWidth={1.5} />
          </div>
          <div>
            <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.4em] mb-2 block">
              [ Protocol 04 // Professional_Logs ]
            </span>
            <h2 className="text-4xl font-bold uppercase tracking-tight text-white leading-none">
              Experience
            </h2>
          </div>
        </div>

        {/* INDEPENDENT COLUMN STACK: This prevents any card from jumping between sides */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Stack: Macziom (Current) & Banao */}
          <div className="flex-1 flex flex-col gap-8 w-full">
            <ExperienceCard {...experiences[0]} />
            <ExperienceCard {...experiences[2]} />
          </div>

          {/* Right Stack: Gettobyte */}
          <div className="flex-1 flex flex-col gap-8 w-full">
            <ExperienceCard {...experiences[1]} />
            {/* You can add more cards here in the future to keep it balanced */}
          </div>
        </div>
      </div>
    </section>
  );
}
