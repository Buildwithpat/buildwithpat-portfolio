"use client";
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  KBarResults,
  useMatches,
} from "kbar";
import { useRouter } from "next/navigation";

export default function CommandPalette({ children }) {
  const router = useRouter();

  const actions = [
    {
      id: "home",
      name: "Home",
      shortcut: ["h"],
      keywords: "home start",
      perform: () => router.push("/"),
    },
    {
      id: "about",
      name: "About Me",
      shortcut: ["a"],
      keywords: "bio profile aakash",
      perform: () =>
        document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      id: "experience",
      name: "Experience",
      shortcut: ["x"],
      keywords: "jobs work history",
      perform: () =>
        document
          .getElementById("experience")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      id: "vault",
      name: "Tech Vault",
      shortcut: ["v"],
      keywords: "tech stack skills",
      perform: () =>
        document
          .getElementById("vault")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      id: "projects",
      name: "View Projects",
      shortcut: ["p"],
      keywords: "works portfolio",
      perform: () =>
        document
          .getElementById("projects")
          ?.scrollIntoView({ behavior: "smooth" }),
    },

    // --- SOCIALS & CONTACT ---
    {
      id: "github",
      name: "GitHub Profile",
      keywords: "git buildwithpat",
      perform: () => window.open("https://github.com/Buildwithpat", "_blank"),
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      keywords: "connect professional",
      perform: () =>
        window.open(
          "https://www.linkedin.com/in/aakash-pathak-7aa151304/",
          "_blank",
        ),
    },
    {
      id: "resume",
      name: "Download Resume",
      shortcut: ["r"],
      keywords: "cv pdf",
      perform: () =>
        window.open(
          "https://drive.google.com/file/d/1PP7jLmMmlEbbRRXLHuJkdswfy4GLMHY0/view?usp=drive_link",
          "_blank",
        ),
    },
    {
      id: "email",
      name: "Send Email",
      shortcut: ["e"],
      keywords: "contact aakashbwp",
      perform: () => (window.location.href = "mailto:aakashbwp@gmail.com"),
    },
  ];

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="bg-black/80 backdrop-blur-md z-[1000000] p-4 items-center flex justify-center">
          <KBarAnimator className="w-full max-w-[600px] bg-[#0D0D0D] border border-white/10 rounded-2xl overflow-hidden shadow-2xl pointer-events-auto">
            <div className="p-4 border-b border-white/5">
              <KBarSearch
                autoFocus
                className="w-full bg-transparent border-none outline-none text-white text-base font-mono placeholder-zinc-600 focus:ring-0 cursor-text"
              />
            </div>

            <div className="max-h-[400px] overflow-y-auto no-scrollbar py-2">
              <RenderResults />
            </div>

            <div className="p-3 bg-black flex justify-end gap-4 border-t border-white/5">
              <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-tighter italic">
                ↑↓ to navigate
              </span>
              <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-tighter italic">
                ↵ to select
              </span>
            </div>
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
}

function RenderResults() {
  const { results } = useMatches();
  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className="px-4 py-2 text-[10px] uppercase tracking-widest text-zinc-600 font-mono">
            {item}
          </div>
        ) : (
          <div
            className={`px-5 py-3 flex items-center justify-between cursor-pointer transition-all ${active ? "bg-white/5 text-white border-l-2 border-white" : "text-zinc-500 border-l-2 border-transparent"}`}
          >
            <span className="text-sm font-mono uppercase tracking-tight">
              {item.name}
            </span>
            {item.shortcut?.length > 0 && (
              <div className="flex gap-1">
                {item.shortcut.map((sc) => (
                  <kbd
                    key={sc}
                    className="px-2 py-0.5 bg-zinc-800 rounded text-[9px] border border-white/10 text-zinc-400 uppercase"
                  >
                    {sc}
                  </kbd>
                ))}
              </div>
            )}
          </div>
        )
      }
    />
  );
}
