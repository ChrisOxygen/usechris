export type Project = {
  title: string;
  isFeatured: boolean;
  description: string;
  role?: string;
  tools?: string[];
  liveLink?: string;
  githubLink?: string;
  caseStudySlug?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Propreso",
    isFeatured: true,
    caseStudySlug: "propreso",
    description:
      "Generic AI proposals get skipped. Propreso analyzes each job post for emotional signals and client intent first — then streams a human-sounding proposal in under 60 seconds. Two-stage Claude pipeline, Chrome extension, Stripe billing. Built from my own frustration. Validated by real users.",
    role: "Solo founder · Designed, built, and shipped end-to-end.",
    tools: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Vercel AI SDK",
      "WXT",
      "Tailwind",
    ],
    liveLink: "https://propreso.com",
    githubLink: "https://github.com/ChrisOxygen/propreso-v2",
  },
  {
    title: "Invox",
    isFeatured: true,
    caseStudySlug: "invox",
    description:
      "500+ invoices processed. Real freelancers, real money, real stakes. Invox is invoice management built for Nigerian freelancers — professional invoices, payment tracking, and a clean audit trail. Simple on the surface. Interesting under the hood.",
    role: "Full-stack developer · Design, frontend, backend, deployment.",
    tools: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    liveLink: "https://www.invox.cc/",
    githubLink: "https://github.com/ChrisOxygen/invox",
  },
  {
    title: "Dictionary Wiki",
    isFeatured: false,
    description:
      "A clean dictionary web app to search any English word and get definitions, pronunciations, synonyms, and examples.",
    tools: ["React", "JavaScript", "CSS"],
    liveLink: "https://wiki-dict.netlify.app",
    githubLink: "https://github.com/ChrisOxygen/dictionary-wiki",
  },
  {
    title: "Passwordly",
    isFeatured: false,
    description:
      "A password generator with adjustable length, character type controls, real-time strength indicator, and one-click clipboard copy.",
    tools: ["Vanilla JavaScript", "SCSS", "Parcel"],
    liveLink: "https://passwordly.netlify.app",
    githubLink: "https://github.com/ChrisOxygen/pw-generator",
  },
  {
    title: "Designo",
    isFeatured: false,
    description:
      "A multi-page design agency site showcasing web, app, and graphic design services with an interactive contact form.",
    tools: ["React", "TypeScript", "Vite", "SCSS", "Framer Motion"],
    liveLink: "https://designo99.netlify.app",
    githubLink: "https://github.com/ChrisOxygen/designo",
  },
  {
    title: "CodeHubb",
    isFeatured: false,
    description:
      "A landing page for a coding help platform connecting developers with certified engineers for mentorship and problem-solving.",
    tools: ["React", "Vite", "SASS", "Framer Motion"],
    liveLink: "https://code-hubb.netlify.app",
    githubLink: "https://github.com/ChrisOxygen/coding-platform-landing-page",
  },
  {
    title: "FinTrack",
    isFeatured: false,
    description:
      "A finance management platform to help you track spending, manage budgets, and reach your financial goals.",
    tools: ["React", "Vite", "Framer Motion", "SASS"],
    liveLink: "https://fin-trackk.netlify.app",
    githubLink: "https://github.com/ChrisOxygen/fintrack-landing",
  },
  {
    title: "Pomodoro Timer",
    isFeatured: false,
    description:
      "A focused Pomodoro timer with session tracking, custom themes, offline PWA support, and a visual progress ring.",
    tools: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    liveLink: "https://pomodoro24.netlify.app",
    githubLink: "https://github.com/ChrisOxygen/pomodoro-timer",
  },
];
