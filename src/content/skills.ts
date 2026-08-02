export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

const icon = (name: string) => `/logos/tech/${name}.svg`;

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Ecosystem",
    skills: [
      { name: "React.js", icon: icon("react") },
      { name: "Next.js", icon: icon("nextjs") },
      { name: "TypeScript", icon: icon("typescript") },
      { name: "JavaScript", icon: icon("javascript") },
      { name: "Tailwind", icon: icon("tailwind") },
      { name: "Framer", icon: icon("framer") },
      { name: "Shadcn UI", icon: icon("shadcn") },
      { name: "Figma", icon: icon("figma") },
    ],
  },
  {
    id: "backend",
    title: "Backend Core",
    skills: [
      { name: "Java", icon: icon("java") },
      { name: "Spring Boot", icon: icon("spring") },
      { name: "Node.js", icon: icon("nodejs") },
      { name: "Express.js", icon: icon("express") },
      { name: "C++", icon: icon("cpp") },
    ],
  },
  {
    id: "database",
    title: "Database & ORM",
    skills: [
      { name: "MongoDB", icon: icon("mongodb") },
      { name: "PostgreSQL", icon: icon("postgresql") },
      { name: "Prisma", icon: icon("prisma") },
      { name: "SQL", icon: icon("sql") },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Tooling",
    skills: [
      { name: "Docker", icon: icon("docker") },
      { name: "AWS", icon: icon("aws") },
      { name: "Git", icon: icon("git") },
      { name: "GitHub", icon: icon("github") },
    ],
  },
];
