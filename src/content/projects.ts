export type ProjectStatus = "live" | "in-development" | "building";

export interface StackCategory {
  label: string;
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  status: ProjectStatus;
  statusLabel: string;
  stack: string[];
  logo: string;
  screenshot?: string;
  liveUrl?: string;
  repoUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "denken-ai",
    title: "Denken AI",
    description:
      "AI-native academic intelligence. Automating syllabus parsing and exam orchestration with RAG.",
    status: "live",
    statusLabel: "Live",
    stack: ["Next.js", "Python", "LLM", "Vercel"],
    logo: "/logos/denken.svg",
    screenshot: "/screenshots/Denken-AI.png",
    liveUrl: "https://denken-ai.vercel.app",
  },
  {
    slug: "kotoba",
    title: "Kotoba",
    description:
      "High-performance multiplayer word-engine designed for competitive linguistic play.",
    status: "live",
    statusLabel: "Live",
    stack: ["Socket.io", "React", "Node", "Supabase"],
    logo: "/logos/kotoba.svg",
    screenshot: "/screenshots/kotoba.png",
    liveUrl: "https://bwp-kotoba.vercel.app",
  },
  {
    slug: "eidos",
    title: "Eidos",
    description:
      "Design-to-data pipeline. Extracting typography and color DNA from live web systems.",
    status: "live",
    statusLabel: "Live",
    stack: ["OCR", "Tailwind", "Canvas", "AWS"],
    logo: "/logos/eidos.svg",
    screenshot: "/screenshots/eidos.png",
    liveUrl: "https://bwp-eidos.vercel.app",
  },
  {
    slug: "zukre",
    title: "Zukre",
    description:
      "Next-gen skill acquisition platform utilizing AI to bridge the SDE competency gap.",
    status: "building",
    statusLabel: "Building…",
    stack: ["Next.js", "LangChain", "PostgreSQL", "OpenRouter"],
    logo: "/logos/zukre.svg",
  },
];

export const CURRENTLY_BUILDING = {
  project: PROJECTS.find((p) => p.slug === "zukre")!,
  vision:
    "Zukre is Duolingo for becoming a software engineer — but instead of learning a language, you build real software every day.",
  problem:
    "Most prep platforms teach in isolation — DSA over here, system design over there — with no sense of how close you actually are to being interview-ready. Zukre closes that loop with AI-guided, competency-mapped learning paths that turn theory into daily, shippable practice.",
  status: "Actively building — core learning engine and competency graph in progress.",
  stackCategories: [
    { label: "Frontend", items: ["Next.js", "React", "Tailwind CSS"] },
    { label: "Backend", items: ["Node.js", "Express.js", "PostgreSQL"] },
    { label: "AI", items: ["OpenRouter", "Gemini API", "LangChain"] },
    { label: "Authentication", items: ["JWT", "Google OAuth"] },
    { label: "Deployment", items: ["Vercel", "Railway"] },
    { label: "Tools", items: ["GitHub", "Prisma", "Docker"] },
  ] satisfies StackCategory[],
};
