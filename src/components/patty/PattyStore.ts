import { create } from "zustand";
import type { SectionId } from "@/content/site";

interface PattyState {
  isOpen: boolean;
  activeSectionId: SectionId;
  open: () => void;
  close: () => void;
  toggle: () => void;
  setActiveSectionId: (id: SectionId) => void;
}

export const usePattyStore = create<PattyState>((set) => ({
  isOpen: false,
  activeSectionId: "hero",
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((s) => ({ isOpen: !s.isOpen })),
  setActiveSectionId: (id) => set({ activeSectionId: id }),
}));
