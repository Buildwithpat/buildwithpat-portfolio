"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Moon, Sun, X } from "lucide-react";
import { usePattyStore } from "@/components/patty/PattyStore";
import { getSuggestedPromptId } from "@/components/patty/context-rules";
import { runPattyAction } from "@/components/patty/actions";
import { PATTY_PROMPTS, type PattyPrompt } from "@/components/patty/conversations";
import { useTheme } from "@/components/providers/ThemeProvider";
import { GlassPanel } from "@/components/ui/glass-panel";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { SOCIAL } from "@/content/social";
import { EASE_PREMIUM, EASE_SOFT } from "@/lib/motion";

export function PattyPanel() {
  const { activeSectionId, close } = usePattyStore();
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState<PattyPrompt | null>(null);

  const suggestedId = getSuggestedPromptId(activeSectionId);
  const prompts = useMemo(() => {
    if (!suggestedId) return PATTY_PROMPTS;
    const suggested = PATTY_PROMPTS.find((p) => p.id === suggestedId);
    if (!suggested) return PATTY_PROMPTS;
    return [suggested, ...PATTY_PROMPTS.filter((p) => p.id !== suggestedId)];
  }, [suggestedId]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 16, scale: 0.96 }}
      transition={{ duration: 0.3, ease: EASE_PREMIUM }}
      className="fixed right-5 bottom-24 z-[1002] w-[min(384px,calc(100vw-2.5rem))] md:right-8"
    >
      <GlassPanel className="overflow-hidden rounded-2xl">
        <div className="flex items-start justify-between gap-3 border-b border-line-subtle px-5 py-4">
          <div className="flex items-start gap-2.5">
            {active && (
              <button
                onClick={() => setActive(null)}
                aria-label="Back to questions"
                className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-ink-2 hover:bg-surface-2 hover:text-ink-0"
              >
                <ArrowLeft size={13} />
              </button>
            )}
            <div>
              <p className="text-body-sm font-medium text-ink-0">Patty</p>
              {!active ? (
                <p className="mt-1 text-body-sm text-ink-2">
                  👋 Hey, I&apos;m Patty. I&apos;m Aakash&apos;s AI portfolio
                  assistant. Need something quickly?
                </p>
              ) : (
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-ink-3">
                  {active.question}
                </p>
              )}
            </div>
          </div>
          <button
            onClick={close}
            aria-label="Close Patty"
            className="flex size-7 shrink-0 items-center justify-center rounded-full text-ink-2 hover:bg-surface-2 hover:text-ink-0"
          >
            <X size={14} />
          </button>
        </div>

        <div className="max-h-[440px] overflow-y-auto p-3">
          <AnimatePresence mode="wait">
            {!active ? (
              <motion.div
                key="prompts"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.2, ease: EASE_SOFT }}
                className="flex flex-col gap-1.5"
              >
                {prompts.map((prompt) => (
                  <button
                    key={prompt.id}
                    onClick={() => setActive(prompt)}
                    className={`flex w-full items-center justify-between rounded-lg px-3.5 py-3 text-left text-body-sm transition-colors hover:bg-surface-2 hover:text-ink-0 ${
                      prompt.id === suggestedId
                        ? "border border-accent-line bg-accent-soft text-ink-0"
                        : "text-ink-1"
                    }`}
                  >
                    {prompt.question}
                    <ArrowUpRight size={13} className="text-ink-3" />
                  </button>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="reply"
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.2, ease: EASE_SOFT }}
                className="flex flex-col gap-4 px-1 py-2"
              >
                <p className="font-serif text-body-lg leading-snug text-ink-0 italic">
                  &ldquo;{active.reply}&rdquo;
                </p>
                <button
                  onClick={() => {
                    runPattyAction(active.action, toggleTheme);
                    close();
                    setActive(null);
                  }}
                  className="group flex items-center justify-center gap-2 rounded-full bg-ink-0 px-5 py-2.5 text-body-sm font-medium text-surface-0 transition-opacity hover:opacity-90"
                >
                  {active.actionLabel}
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
                <button
                  onClick={() => setActive(null)}
                  className="text-center text-body-sm text-ink-3 transition-colors hover:text-ink-1"
                >
                  Ask something else
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between border-t border-line-subtle px-4 py-2.5">
          <div className="flex items-center gap-1">
            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex size-8 items-center justify-center rounded-full text-ink-2 hover:bg-surface-2 hover:text-ink-0"
            >
              <GithubIcon className="size-4" />
            </a>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex size-8 items-center justify-center rounded-full text-ink-2 hover:bg-surface-2 hover:text-ink-0"
            >
              <LinkedinIcon className="size-4" />
            </a>
          </div>
          <button
            onClick={() => toggleTheme()}
            aria-label="Toggle theme"
            className="flex size-8 items-center justify-center rounded-full text-ink-2 hover:bg-surface-2 hover:text-ink-0"
          >
            {theme === "dark" ? <Moon size={14} /> : <Sun size={14} />}
          </button>
        </div>
      </GlassPanel>
    </motion.div>
  );
}
