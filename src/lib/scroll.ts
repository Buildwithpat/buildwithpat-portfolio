import { getLenisInstance } from "@/lib/lenis-instance";
import type { SectionId } from "@/content/site";

export function scrollToSection(id: SectionId | string) {
  const target = document.getElementById(id);
  if (!target) return;

  const lenis = getLenisInstance();
  if (lenis) {
    lenis.scrollTo(target, { offset: -72, duration: 1.2 });
  } else {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
