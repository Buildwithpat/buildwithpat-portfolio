import type { ActionId } from "@/components/patty/actions";

export interface PattyPrompt {
  id: string;
  question: string;
  reply: string;
  action: ActionId;
  actionLabel: string;
}

export const PATTY_PROMPTS: PattyPrompt[] = [
  {
    id: "about",
    question: "Tell me about Aakash",
    reply:
      "I usually find problems... and sometimes accidentally create them just so I can build the solution. He's a full-stack developer out of Noida who gets genuinely excited about the boring-sounding parts — clean architecture, fast interfaces, code that still makes sense six months later. Less \"move fast and break things,\" more \"move fast and actually ship it.\"",
    action: "about",
    actionLabel: "Read the full story",
  },
  {
    id: "hire",
    question: "Why should I hire him?",
    reply:
      "Every internship taught me something. Mostly that debugging at 2 AM is universal. He's shipped real UI at a real company, taken designs from Figma to production without losing the details, and picks up whatever the stack demands instead of waiting to be handed a perfect ticket. He also actually reads the error message before Googling it.",
    action: "experience",
    actionLabel: "See the receipts",
  },
  {
    id: "building",
    question: "What's he currently building?",
    reply:
      "Zukre is keeping me awake these days... in a good way. Think Duolingo, but for becoming a software engineer — instead of vocabulary streaks, you're shipping real features every day. It's AI-guided, competency-mapped, and built to close the gap between \"I finished the course\" and \"I could actually pass the interview.\"",
    action: "currently-building",
    actionLabel: "Peek behind the curtain",
  },
  {
    id: "favorite",
    question: "Favorite project?",
    reply:
      "My GitHub has fewer abandoned projects than my Downloads folder. That's a win. If pressed, Eidos — turning a live website into its own design system automatically felt like the kind of tool he wished existed before he had to build it himself. Kotoba's real-time multiplayer engine is a close second, purely for how satisfying it was to get the sync right.",
    action: "projects",
    actionLabel: "Browse the work",
  },
  {
    id: "contact",
    question: "Contact him",
    reply:
      "If you've got an exciting idea, don't let it stay in your notes app. He's open to freelance work, collaborations, or just talking shop about a gnarly frontend problem. Email is the fastest way in, and yes, he actually replies — no automated \"thanks for reaching out\" black hole here.",
    action: "contact",
    actionLabel: "Say hello",
  },
  {
    id: "resume",
    question: "Resume",
    reply:
      "Fair warning: contains real projects, not just bullet points that sound busy. Internships, stack, education, all in one PDF — no filler about being a \"passionate team player\" required. Good for a quick skim or an HR system that insists on one anyway.",
    action: "resume-view",
    actionLabel: "Open the resume",
  },
];
