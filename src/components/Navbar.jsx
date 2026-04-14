"use client";
import React, { useState } from "react";
import {
  Home,
  User,
  Layers,
  Code2,
  Briefcase,
  BookText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  const navItems = [
    { icon: Home, label: "Home", href: "#hero" },
    { icon: User, label: "About Me", href: "#about" },
    { icon: Layers, label: "Tech Stack", href: "#tech-vault" },
    { icon: Code2, label: "Projects", href: "#matrix" },
    { icon: Briefcase, label: "Experience", href: "#experience" },
    { icon: BookText, label: "Education", href: "#education" },
  ];

  const socialItems = [
    {
      label: "GitHub",
      href: "https://github.com/Buildwithpat",
      icon: (props) => (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aakash-pathak-7aa151304/",
      icon: (props) => (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: "Gmail",
      href: "mailto:aakashbwp@gmail.com",
      icon: (props) => (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* 1. THE TOGGLE BUTTON - Added pointer-events-auto and fixed z-index */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-1/2 -translate-y-1/2 p-2 rounded-full border border-white/10 bg-zinc-900/80 text-zinc-400 hover:text-white transition-all duration-500 ease-in-out flex pointer-events-auto z-[1001]
        ${isOpen ? "left-[85px]" : "left-6"}`} // Increased left offset to clear the blur shadow
      >
        {isOpen ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
      </button>

      {/* 2. THE NAVBAR DOCK */}
      <nav
        className={`fixed left-6 top-1/2 -translate-y-1/2 flex flex-col items-center transition-all duration-500 ease-in-out z-[1000]
        ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-32 opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col items-center py-8 px-3 gap-6 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl pointer-events-auto">
          <div className="flex flex-col gap-6">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="group relative p-2 text-zinc-500 hover:text-white transition-all duration-300 pointer-events-auto"
              >
                <item.icon size={20} strokeWidth={1.5} />
                <span className="absolute left-14 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-zinc-900 text-white text-[10px] py-1.5 px-3 rounded-md pointer-events-none whitespace-nowrap font-mono border border-white/5 uppercase tracking-[0.2em]">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
          <div className="w-6 h-[1px] bg-white/10 my-1" />
          <div className="flex flex-col gap-6">
            {socialItems.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 text-zinc-500 hover:text-amber-500 transition-all duration-300 pointer-events-auto"
              >
                <social.icon className="w-4.5 h-4.5" />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
