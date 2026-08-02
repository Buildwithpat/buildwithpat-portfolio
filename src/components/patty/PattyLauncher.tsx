"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BotMessageSquare, X } from "lucide-react";
import { usePattyStore } from "@/components/patty/PattyStore";
import { PattyPanel } from "@/components/patty/PattyPanel";
import { useActiveSection } from "@/components/providers/SectionObserverProvider";

export function PattyLauncher() {
  const { isOpen, toggle, setActiveSectionId } = usePattyStore();
  const activeSectionId = useActiveSection();

  useEffect(() => {
    setActiveSectionId(activeSectionId);
  }, [activeSectionId, setActiveSectionId]);

  return (
    <>
      <AnimatePresence>{isOpen && <PattyPanel />}</AnimatePresence>

      <motion.button
        type="button"
        onClick={toggle}
        aria-label={isOpen ? "Close Patty" : "Open Patty, portfolio assistant"}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed right-5 bottom-5 z-[1002] flex size-14 items-center justify-center rounded-full bg-accent text-accent-ink shadow-[var(--shadow-elevation-2)] md:right-8 md:bottom-8"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isOpen ? "close" : "open"}
            initial={{ rotate: -45, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 45, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X size={20} /> : <BotMessageSquare size={22} />}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </>
  );
}
