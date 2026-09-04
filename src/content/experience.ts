export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  summary: string;
  stack: string[];
  bullets: string[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "AI FullStack Intern",
    company: "Kenfeat-Integrated",
    location: "Remote",
    period: "August 2026 — Present",
    current: true,
    summary:
      "Building Hospitality-Now, a hospitality news platform, across the frontend and backend.",
    stack: ["Next.js", "React", "TypeScript", "Node.js"],
    bullets: [
      "Building Hospitality-Now, a hospitality news platform, end-to-end across frontend and backend.",
      "Implementing features using Next.js, React, TypeScript, and Node.js.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Macziom Architects & Constructions",
    location: "Pitampura, Delhi",
    period: "April 2026 — Present",
    current: true,
    summary:
      "Developing and optimizing responsive web interfaces for the Build Buddy project, improving user experience and performance.",
    stack: ["React.js", "Tailwind CSS", "JavaScript", "Vite"],
    bullets: [
      "Optimizing responsive web interfaces for the Build Buddy project to improve usability.",
      "Collaborating with design and backend teams to implement scalable frontend architectures.",
      "Refining UI/UX layouts, interactions, and component structures for better consistency.",
      "Assisting in building maintainable web applications with a focus on clean code practices.",
    ],
  },
  {
    role: "UI Designer",
    company: "Gettobyte Technologies Pvt. Ltd.",
    location: "Noida, India",
    period: "Nov 2024 — Dec 2024",
    current: false,
    summary:
      "Designed scalable user interfaces and improved UI consistency across digital products for internal and external stakeholders.",
    stack: ["Figma", "UI/UX", "Prototyping", "Design Systems"],
    bullets: [
      "Created high-fidelity wireframes and interactive prototypes in Figma to streamline workflows.",
      "Collaborated with developers to ensure accurate implementation of responsive layouts.",
      "Improved UI consistency across various digital products used by stakeholders.",
    ],
  },
  {
    role: "UI/UX Designer",
    company: "Banao Technologies",
    location: "Remote",
    period: "May 2024 — July 2024",
    current: false,
    summary:
      "Delivered client-focused UI solutions for web and mobile platforms across multiple domains.",
    stack: ["UI/UX", "Figma", "Interaction Design", "User Research"],
    bullets: [
      "Delivered client-focused UI solutions for both web and mobile platforms.",
      "Improved usability and interaction flows through structured feedback cycles.",
      "Executed iterative design improvements based on user research and testing.",
    ],
  },
];
