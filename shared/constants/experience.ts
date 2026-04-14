export type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  /** e.g. "2022 – Present" | "Ongoing" | "Earlier Career" */
  timeline: string;
  bullets: string[];
  companyUrl?: string;
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: "upwork",
    company: "Upwork",
    role: "Full-Stack Developer",
    timeline: "2022 – Present",
    bullets: [
      "Build and ship production-grade web applications for international clients using Next.js, React, TypeScript, Tailwind CSS, Supabase, and Prisma — consistently earning repeat contracts and strong client reviews.",
      "Architect end-to-end solutions spanning complex multi-step forms, role-based access control, real-time data handling, and third-party API integrations across diverse industries.",
      "Translate client requirements into clean, maintainable codebases with a strong emphasis on type safety, scalable folder structures, and modern React patterns.",
      "Deliver under tight freelance deadlines while balancing multiple active contracts simultaneously.",
    ],
  },
  {
    id: "propreso",
    company: "Propreso",
    role: "Founder & Lead Developer",
    timeline: "2024 – Present",
    bullets: [
      "Designed and built Propreso, an AI-powered proposal generator helping freelancers craft tailored, high-converting proposals in seconds — currently serving 50+ active users.",
      "Engineered a four-step AI pipeline (classify → analyze → generate → tone calibrate) using OpenRouter via the Vercel AI SDK, producing contextually accurate output across different job categories.",
      "Built the full product from the ground up: Next.js 16, Prisma 7, Supabase, and Stripe — covering authentication, billing, and usage analytics.",
      "Developed a companion Chrome Extension (WXT framework) that scrapes Upwork job listings and feeds structured data directly into the proposal pipeline, reducing manual input to near zero.",
      "Modelled API cost structures across multiple LLM providers to keep per-request costs sustainable at scale without sacrificing output quality.",
    ],
  },
  {
    id: "invox",
    company: "Invox",
    role: "Founder & Lead Developer",
    timeline: "2024 – Present",
    bullets: [
      "Created Invox, a full-featured invoice management platform that has processed over 500 transactions, designed for freelancers and small businesses who need fast, reliable billing.",
      "Produced a comprehensive PRD and brand style guide from scratch, defining the product's visual identity and long-term roadmap.",
      "Implemented automated keep-alive workflows using n8n to maintain uptime on Supabase and Upstash Redis free-tier infrastructure, reducing cold start failures to nearly zero.",
    ],
  },
  {
    id: "vignettes",
    company: "Vignettes",
    role: "Lead Developer",
    timeline: "2024 – Present",
    bullets: [
      "Built Vignettes, a visa application platform with multi-step guided forms for complex immigration categories including EB1A and EB2NIW, simplifying a process that typically overwhelms applicants.",
      "Implemented field-level admin commenting so immigration consultants can leave targeted feedback on individual form responses without disrupting the applicant's workflow.",
      "Engineered a role-based access system with granular permissions, allowing admins, reviewers, and applicants to interact with the same data at different privilege levels.",
      "Authored extensive TypeScript form constants and validation schemas to handle nuanced, category-specific U.S. immigration requirements with strict data integrity.",
    ],
  },
  {
    id: "velux-gray",
    company: "Velux Gray",
    role: "Co-Founder",
    timeline: "2023 – Present",
    bullets: [
      "Co-founded Velux Gray, a luxury accessories brand specialising in curated watch and bracelet collections — managing both brand strategy and the technical infrastructure behind the business.",
      "Built automated lead management workflows using n8n, integrating Facebook Ads lead forms with WhatsApp API validation, Notion CRM, and Telegram bot notifications to capture and qualify prospects in real time.",
      "Ran and optimised Facebook ad campaigns for product bundles, performing financial analysis on ad spend versus revenue to refine targeting and improve return on investment.",
    ],
  },
  {
    id: "automation",
    company: "Internal Tooling",
    role: "Automation Engineer",
    timeline: "Ongoing",
    bullets: [
      "Design and maintain production n8n workflows powering business operations across multiple ventures — covering lead validation, CRM updates, messaging automation, and scheduled infrastructure health checks.",
      "Built a Lead Validator web app using n8n and Next.js to automate CSV parsing, Gmail attachment extraction, and WhatsApp number verification for incoming ad leads.",
      "Integrate WhatsApp Business API, Telegram Bot API, and Notion API into unified automation pipelines that reduce manual data entry and response times across teams.",
    ],
  },
  {
    id: "design",
    company: "Earlier Career",
    role: "UI/UX Designer",
    timeline: "Earlier Career",
    bullets: [
      "Transitioned from a foundation in UI/UX and graphic design into full-stack development, carrying forward a sharp eye for layout, spacing, typography, and user experience into every application built.",
      "Created LinkedIn carousel designs using Python and ReportLab for PDF generation, and produced marketing assets for multiple brands — blending visual design with technical execution.",
    ],
  },
];
