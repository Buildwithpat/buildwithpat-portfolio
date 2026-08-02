import type { SectionId } from "@/content/site";
import { SOCIAL } from "@/content/social";
import { scrollToSection } from "@/lib/scroll";

export type ActionId =
  | "about"
  | "experience"
  | "projects"
  | "currently-building"
  | "skills"
  | "education"
  | "contact"
  | "resume-view"
  | "resume-download"
  | "github"
  | "linkedin"
  | "hire-me"
  | "toggle-theme";

export interface PattyAction {
  id: ActionId;
  label: string;
}

const SECTION_ACTIONS: Record<
  Extract<ActionId, SectionId>,
  { label: string }
> = {
  about: { label: "About Me" },
  experience: { label: "Experience" },
  projects: { label: "Projects" },
  "currently-building": { label: "Currently Building" },
  skills: { label: "Skills" },
  education: { label: "Education" },
  contact: { label: "Contact" },
};

export const BASE_ACTIONS: PattyAction[] = [
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "currently-building", label: "Currently Building" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "resume-view", label: "View Resume" },
  { id: "resume-download", label: "Download Resume" },
  { id: "contact", label: "Contact Info" },
  { id: "github", label: "Open GitHub" },
  { id: "linkedin", label: "Open LinkedIn" },
  { id: "hire-me", label: "Hire Me" },
  { id: "toggle-theme", label: "Toggle Theme" },
];

export function runPattyAction(
  id: ActionId,
  toggleTheme: () => void,
) {
  if (id in SECTION_ACTIONS) {
    scrollToSection(id as SectionId);
    return;
  }

  switch (id) {
    case "resume-view":
      window.open(SOCIAL.resume, "_blank");
      break;
    case "resume-download": {
      const link = document.createElement("a");
      link.href = SOCIAL.resume;
      link.download = "Aakash_Pathak_SDE.pdf";
      link.click();
      break;
    }
    case "github":
      window.open(SOCIAL.github, "_blank");
      break;
    case "linkedin":
      window.open(SOCIAL.linkedin, "_blank");
      break;
    case "hire-me":
      scrollToSection("contact");
      break;
    case "toggle-theme":
      toggleTheme();
      break;
  }
}
