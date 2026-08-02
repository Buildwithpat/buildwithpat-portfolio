"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { SECTIONS, type SectionId } from "@/content/site";

const SectionContext = createContext<SectionId>("hero");

export function SectionObserverProvider({ children }: { children: ReactNode }) {
  const [activeSectionId, setActiveSectionId] = useState<SectionId>("hero");
  const ratios = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.current.set(entry.target.id, entry.intersectionRatio);
        }
        let bestId: string | null = null;
        let bestRatio = 0;
        ratios.current.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });
        if (bestId && bestRatio > 0) {
          setActiveSectionId(bestId as SectionId);
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: "-96px 0px -40% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <SectionContext.Provider value={activeSectionId}>
      {children}
    </SectionContext.Provider>
  );
}

export function useActiveSection() {
  return useContext(SectionContext);
}
