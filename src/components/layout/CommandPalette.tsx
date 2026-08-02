"use client";

import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  KBarResults,
  useMatches,
  useRegisterActions,
  type Action,
} from "kbar";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  Briefcase,
  CornerDownLeft,
  Download,
  FolderKanban,
  GraduationCap,
  Hammer,
  Layers,
  Mail,
  Moon,
  Search,
  Send,
  User,
} from "lucide-react";
import { SOCIAL } from "@/content/social";
import { scrollToSection } from "@/lib/scroll";
import { useTheme } from "@/components/providers/ThemeProvider";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";

function useCommandActions(): Action[] {
  const { toggleTheme } = useTheme();

  return [
    {
      id: "about",
      name: "About Me",
      subtitle: "The short version of how I work",
      icon: <User size={15} />,
      shortcut: ["a"],
      keywords: "bio profile aakash",
      section: "Navigate",
      perform: () => scrollToSection("about"),
    },
    {
      id: "experience",
      name: "Experience",
      subtitle: "Internships and design roles",
      icon: <Briefcase size={15} />,
      shortcut: ["x"],
      keywords: "jobs work history",
      section: "Navigate",
      perform: () => scrollToSection("experience"),
    },
    {
      id: "projects",
      name: "Projects",
      subtitle: "Case studies, not just cards",
      icon: <FolderKanban size={15} />,
      shortcut: ["p"],
      keywords: "works portfolio case studies",
      section: "Navigate",
      perform: () => scrollToSection("projects"),
    },
    {
      id: "currently-building",
      name: "Currently Building",
      subtitle: "Zukre, in progress",
      icon: <Hammer size={15} />,
      shortcut: ["b"],
      keywords: "zukre in progress",
      section: "Navigate",
      perform: () => scrollToSection("currently-building"),
    },
    {
      id: "skills",
      name: "Skills",
      subtitle: "The toolkit",
      icon: <Layers size={15} />,
      shortcut: ["s"],
      keywords: "tech stack tools",
      section: "Navigate",
      perform: () => scrollToSection("skills"),
    },
    {
      id: "education",
      name: "Education",
      subtitle: "JSS Academy of Technical Education",
      icon: <GraduationCap size={15} />,
      shortcut: ["u"],
      keywords: "college degree jss",
      section: "Navigate",
      perform: () => scrollToSection("education"),
    },
    {
      id: "contact",
      name: "Contact",
      subtitle: "Let's connect",
      icon: <Mail size={15} />,
      shortcut: ["c"],
      keywords: "email connect hire",
      section: "Navigate",
      perform: () => scrollToSection("contact"),
    },
    {
      id: "theme",
      name: "Toggle Theme",
      subtitle: "Switch between dark and light",
      icon: <Moon size={15} />,
      shortcut: ["t"],
      keywords: "dark light mode",
      section: "Quick Actions",
      perform: () => toggleTheme(),
    },
    {
      id: "resume",
      name: "Download Resume",
      subtitle: "PDF, opens in a new tab",
      icon: <Download size={15} />,
      shortcut: ["r"],
      keywords: "cv pdf",
      section: "Quick Actions",
      perform: () => window.open(SOCIAL.resume, "_blank"),
    },
    {
      id: "email",
      name: "Send Email",
      subtitle: SOCIAL.email,
      icon: <Send size={15} />,
      shortcut: ["e"],
      keywords: "contact aakashbwp",
      section: "Quick Actions",
      perform: () => (window.location.href = `mailto:${SOCIAL.email}`),
    },
    {
      id: "github",
      name: "GitHub Profile",
      icon: <GithubIcon className="size-[15px]" />,
      keywords: "git buildwithpat",
      section: "Connect",
      perform: () => window.open(SOCIAL.github, "_blank"),
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: <LinkedinIcon className="size-[15px]" />,
      keywords: "connect professional",
      section: "Connect",
      perform: () => window.open(SOCIAL.linkedin, "_blank"),
    },
  ];
}

// KBarProvider's `actions` prop is only ever read once, on mount — it does
// NOT re-register when the array's contents change on later renders (see
// kbar's useStore, which memoizes the ActionInterface with an empty dep
// array). Any action closing over live state (like the theme toggle) would
// otherwise freeze at whatever that state was on first render. This
// component registers actions via `useRegisterActions` instead, which does
// react to a dependency array, so the palette always calls fresh handlers.
function RegisterCommandActions() {
  const actions = useCommandActions();
  useRegisterActions(actions, [actions]);
  return null;
}

function CommandPaletteInner({ children }: { children: ReactNode }) {
  return (
    <KBarProvider options={{ animations: { enterMs: 250, exitMs: 180 } }}>
      <RegisterCommandActions />
      <KBarPortal>
        <KBarPositioner className="z-[1000000] flex items-start justify-center bg-surface-0/70 p-4 pt-[15vh] backdrop-blur-lg">
          <KBarAnimator className="w-full max-w-[560px] overflow-hidden rounded-2xl border border-line-subtle bg-surface-1/95 shadow-[var(--shadow-elevation-3)] backdrop-blur-xl">
            <div className="flex items-center gap-3 border-b border-line-subtle px-5 py-4">
              <Search size={15} className="text-ink-3" />
              <KBarSearch
                autoFocus
                placeholder="Jump to a section or run an action…"
                className="w-full border-none bg-transparent text-body text-ink-0 outline-none placeholder:text-ink-3"
              />
              <kbd className="rounded border border-line-subtle px-1.5 py-0.5 font-mono text-[10px] text-ink-3">
                esc
              </kbd>
            </div>

            <div className="no-scrollbar max-h-[380px] overflow-y-auto py-2">
              <RenderResults />
            </div>

            <div className="flex items-center justify-end gap-4 border-t border-line-subtle px-4 py-2.5">
              <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-ink-3">
                ↑↓ navigate
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-ink-3">
                <CornerDownLeft size={10} /> select
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

  if (results.length === 0) {
    return (
      <div className="px-5 py-10 text-center text-body-sm text-ink-3">
        No matches. Try “projects” or “resume”.
      </div>
    );
  }

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className="px-5 pt-3 pb-1.5 font-mono text-[10px] uppercase tracking-widest text-ink-3">
            {item}
          </div>
        ) : (
          <div
            className={`mx-2 flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3.5 py-2.5 transition-colors ${
              active ? "bg-surface-3 text-ink-0" : "text-ink-2"
            }`}
          >
            <div className="flex min-w-0 items-center gap-3">
              <span
                className={`flex size-7 shrink-0 items-center justify-center rounded-md ${
                  active ? "bg-surface-4 text-accent" : "bg-surface-2 text-ink-3"
                }`}
              >
                {item.icon ?? <ArrowUpRight size={14} />}
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="truncate text-body-sm">{item.name}</span>
                {item.subtitle && (
                  <span className="truncate text-[11px] text-ink-3">
                    {item.subtitle}
                  </span>
                )}
              </span>
            </div>
            {item.shortcut && item.shortcut.length > 0 && (
              <div className="flex shrink-0 gap-1">
                {item.shortcut.map((sc) => (
                  <kbd
                    key={sc}
                    className="rounded border border-line-subtle bg-surface-2 px-1.5 py-0.5 font-mono text-[10px] uppercase text-ink-2"
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

export function CommandPalette({ children }: { children: ReactNode }) {
  return <CommandPaletteInner>{children}</CommandPaletteInner>;
}
