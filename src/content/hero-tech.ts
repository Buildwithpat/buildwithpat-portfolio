export interface FloatingTech {
  name: string;
  icon: string;
  quote: string;
  /** Position as percentage of the hero viewport, kept off the dead-center content column. */
  top: string;
  left: string;
  /** Float animation timing offsets so icons don't move in lockstep. */
  duration: number;
  delay: number;
  size: number;
}

export const FLOATING_TECH: FloatingTech[] = [
  {
    name: "React",
    icon: "/logos/tech/react.svg",
    quote: "Most of my ideas eventually become React components.",
    top: "18%",
    left: "10%",
    duration: 7,
    delay: 0,
    size: 44,
  },
  {
    name: "Next.js",
    icon: "/logos/tech/nextjs.svg",
    quote: "If it's not server-rendered, is it even shipped?",
    top: "68%",
    left: "8%",
    duration: 8.5,
    delay: 0.6,
    size: 40,
  },
  {
    name: "TypeScript",
    icon: "/logos/tech/typescript.svg",
    quote: "Because future me deserves fewer bugs.",
    top: "12%",
    left: "82%",
    duration: 7.5,
    delay: 1.1,
    size: 42,
  },
  {
    name: "JavaScript",
    icon: "/logos/tech/javascript.svg",
    quote: "Still my most trusted companion.",
    top: "78%",
    left: "86%",
    duration: 9,
    delay: 0.3,
    size: 38,
  },
  {
    name: "Figma",
    icon: "/logos/tech/figma.svg",
    quote: "I use Figma before writing a single line of code.",
    top: "36%",
    left: "4%",
    duration: 6.5,
    delay: 1.6,
    size: 36,
  },
  {
    name: "Node.js",
    icon: "/logos/tech/nodejs.svg",
    quote: "Where ideas become APIs.",
    top: "30%",
    left: "92%",
    duration: 8,
    delay: 0.9,
    size: 38,
  },
  {
    name: "Tailwind",
    icon: "/logos/tech/tailwind.svg",
    quote: "Pixels move faster with utilities.",
    top: "88%",
    left: "50%",
    duration: 7,
    delay: 1.3,
    size: 34,
  },
  {
    name: "Git",
    icon: "/logos/tech/git.svg",
    quote: "commit -m \"final final v2 fix.\"",
    top: "8%",
    left: "48%",
    duration: 9.5,
    delay: 0.4,
    size: 32,
  },
  {
    name: "MongoDB",
    icon: "/logos/tech/mongodb.svg",
    quote: "Schemas are more of a suggestion, honestly.",
    top: "56%",
    left: "94%",
    duration: 8.2,
    delay: 1.8,
    size: 36,
  },
];
