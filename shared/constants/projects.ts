export type Project = {
  title: string;
  isFeatured: boolean;
  description: string;
  role?: string;
  tools?: string[];
  liveLink?: string;
  githubLink?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Propreso",
    isFeatured: true,
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
    description:
      "Invoice management for freelancers and small businesses in Nigeria. Invox handles the unglamorous stuff — generating professional invoices, tracking payment status, keeping a paper trail. Simple to use, solid under the hood, and actively processing real transactions. The metric says it all: 500+ invoices isn't a demo. It's a product with real users and real stakes.",
    role: "Full-stack developer · Design, frontend, backend, deployment.",
    tools: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    liveLink: "https://shelf.usechris.dev",
    githubLink: "https://github.com/chrisokafor/shelf",
  },
  {
    title: "Shelf",
    isFeatured: false,
    description:
      "A personal reading tracker that lets you log books, set reading goals, and visualise your progress over time.",
    tools: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    liveLink: "https://shelf.usechris.dev",
    githubLink: "https://github.com/chrisokafor/shelf",
  },
  {
    title: "Taskly",
    isFeatured: false,
    description:
      "A minimal Kanban board for solo developers who want to organise work without the noise of a full project-management suite.",
    tools: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    liveLink: "https://taskly.usechris.dev",
    githubLink: "https://github.com/chrisokafor/taskly",
  },
  {
    title: "Notebox",
    isFeatured: false,
    description:
      "A lightweight markdown note-taking app with autosave, folder organisation, and instant full-text search.",
    tools: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    liveLink: "https://notebox.usechris.dev",
    githubLink: "https://github.com/chrisokafor/notebox",
  },
  {
    title: "Linkpilot",
    isFeatured: false,
    description:
      "A URL shortener with click analytics — see where your traffic comes from, which links perform, and when.",
    tools: ["Next.js", "Prisma", "PostgreSQL", "Resend"],
    liveLink: "https://linkpilot.usechris.dev",
    githubLink: "https://github.com/chrisokafor/linkpilot",
  },
  {
    title: "Formly",
    isFeatured: false,
    description:
      "A drag-and-drop form builder that generates embeddable forms and collects submissions without any backend setup.",
    tools: ["Next.js", "TypeScript", "Supabase", "Tailwind", "react-hook-form"],
    liveLink: "https://formly.usechris.dev",
    githubLink: "https://github.com/chrisokafor/formly",
  },
  {
    title: "Quoteboard",
    isFeatured: false,
    description:
      "A dashboard for freelancers to draft, send, and manage client quotes — with status tracking from draft to acceptance.",
    tools: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    liveLink: "https://quoteboard.usechris.dev",
    githubLink: "https://github.com/chrisokafor/quoteboard",
  },
];
