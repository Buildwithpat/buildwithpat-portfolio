export const TAGLINES = [
  "Building products to solve real-world problems.",
  "Turning original ideas into functional systems is my hobby.",
  "Developing solutions for challenges people face daily.",
];

export const HERO = {
  eyebrow: "Full Stack Developer",
  greeting: "Hey, I'm",
  name: "Aakash Pathak",
};

export interface BioParagraph {
  text: string;
}

export const BIO: BioParagraph[] = [
  {
    text: "I build for the missing piece. I identify friction points and engineer direct solutions rather than following trends.",
  },
  {
    text: "Performance-first frontend logic is the obsession — I lean on Next.js to make sure every solution is as fast as it is functional.",
  },
  {
    text: "Responsive design isn't an afterthought, it's a requirement. Every project I ship is built to scale across the hardware spectrum.",
  },
  {
    text: "From Eidos, a design-analysis tool, to Denken, built for learners — my work is a collection of direct solutions to problems I've actually run into.",
  },
  {
    text: "Looking ahead: actively seeking the next complex problem to dismantle and rebuild into a seamless product.",
  },
];

export interface MiniProject {
  name: string;
  tagline: string;
}

export const MINI_PROJECTS: MiniProject[] = [
  { name: "Kotoba", tagline: "For boring typers like me." },
  { name: "Eidos", tagline: "For people who have a hard time analyzing a design." },
  { name: "DenkenAI", tagline: "To help students in exam prep." },
  { name: "Zukre", tagline: "It's suspense." },
];

export const PROFILE_IMAGE = "/aakash1.jpg";
