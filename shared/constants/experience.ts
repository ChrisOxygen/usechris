export type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  /** e.g. "Jan 2022 – Present" or "Jun 2021 – Dec 2021" */
  timeline: string;
  bullets: string[];
  companyUrl?: string;
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: "freelance",
    company: "Self-Employed",
    role: "Freelance Full-Stack Developer",
    timeline: "Jan 2022 – Present",
    companyUrl: "https://usechris.dev",
    bullets: [
      "Design, build, and ship production-ready web applications for clients across fintech, logistics, and professional services.",
      "Developed Propreso — an AI-powered proposal generator that reached 1,000+ Chrome Web Store downloads with zero paid advertising.",
      "Built Invox, an invoice management platform actively processing 500+ real transactions for freelancers and small businesses in Nigeria.",
      "Work across the full stack: Next.js, TypeScript, Supabase, Prisma, and Tailwind CSS.",
      "Manage client relationships end-to-end — from scoping and design to delivery and post-launch support.",
    ],
  },
  {
    id: "cofounder",
    company: "Acme Digital",
    role: "Co-Founder & Technical Lead",
    timeline: "Mar 2023 – Present",
    bullets: [
      "Co-founded a digital services business and architected the entire technical infrastructure from the ground up.",
      "Built internal tooling for lead capture, CRM, and workflow automation — reducing manual overhead by over 60%.",
      "Owned all engineering decisions: system design, database schema, API design, and production deployments.",
      "Scaled the platform to handle active client load while maintaining sub-200ms response times.",
    ],
  },
  {
    id: "contractor",
    company: "Contractor",
    role: "Frontend Developer",
    timeline: "Jun 2021 – Dec 2021",
    bullets: [
      "Delivered responsive UI components and full-page builds for client projects using React and Tailwind CSS.",
      "Translated Figma designs into pixel-accurate, accessible interfaces across mobile and desktop breakpoints.",
      "Collaborated with backend engineers to integrate REST APIs and manage client-side state with React Query.",
      "Reduced initial page load time by 35% through asset optimization and route-level code splitting.",
    ],
  },
  {
    id: "early",
    company: "Studio Work",
    role: "UI/UX Designer & Developer",
    timeline: "Aug 2020 – May 2021",
    bullets: [
      "Designed and prototyped interfaces for mobile and web products using Figma.",
      "Bridged design and development by writing production HTML/CSS for approved layouts.",
      "Conducted user research and iterated on wireframes based on feedback from stakeholders.",
      "Established a component library that cut design-to-handoff time in half across active projects.",
    ],
  },
];
