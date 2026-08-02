import type { SectionId } from "@/content/site";

/**
 * Rules-based (no LLM) mapping from the section a visitor is currently
 * looking at to the most relevant Patty prompt — used to float that prompt
 * to the top of the list so Patty feels aware of context, not just a menu.
 */
export function getSuggestedPromptId(activeSectionId: SectionId): string | null {
  switch (activeSectionId) {
    case "projects":
      return "favorite";
    case "currently-building":
      return "building";
    case "experience":
      return "hire";
    case "education":
      return "about";
    case "skills":
      return "hire";
    case "contact":
      return "contact";
    default:
      return null;
  }
}
