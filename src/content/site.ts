export type SectionId =
  | "hero"
  | "about"
  | "experience"
  | "projects"
  | "currently-building"
  | "skills"
  | "education"
  | "contact";

export interface SectionMeta {
  id: SectionId;
  label: string;
}

export const SECTIONS: SectionMeta[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "currently-building", label: "Currently Building" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const SITE = {
  name: "Aakash Pathak",
  handle: "BuildWithPat",
  title: "Aakash Pathak — Full Stack Developer",
  description:
    "Portfolio of Aakash Pathak (BuildWithPat) — full stack developer building products that solve real-world problems.",
  location: "Noida, India",
};
