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
      "Freelancers shouldn't lose jobs because their proposal was weak. Writing a proposal used to cost me an hour. Now it takes two minutes. Propreso is the AI-powered proposal and cover letter generator I built for freelancers — born from my own frustration, validated by 1,000+ downloads on the Chrome Web Store before I even ran a single ad. Currently rebuilding it as a full SaaS with a smarter AI pipeline: the tool classifies job briefs, extracts real signals, and generates proposals that sound like the freelancer — not a robot.",
    role: "Solo founder · Designed, built, and shipped end-to-end.",
    tools: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Vercel AI SDK",
      "WXT",
      "Tailwind",
    ],
    liveLink: "https://shelf.usechris.dev",
    githubLink: "https://github.com/chrisokafor/shelf",
  },
  {
    title: "Invox",
    isFeatured: true,
    caseStudySlug: "invox",
    description:
      "Invoice management for freelancers and small businesses in Nigeria. Invox handles the unglamorous stuff — generating professional invoices, tracking payment status, keeping a paper trail. Simple to use, solid under the hood, and actively processing real transactions. The metric says it all: 500+ invoices isn't a demo. It's a product with real users and real stakes.",
    role: "Full-stack developer · Design, frontend, backend, deployment.",
    tools: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    liveLink: "https://shelf.usechris.dev",
    githubLink: "https://github.com/chrisokafor/shelf",
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
