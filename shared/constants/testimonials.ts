export type Testimonial = {
  id: string;
  name: string;
  role: string;
  rating: 5;
  testimonial: string;
  description: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Marcus Webb",
    role: "Founder, Stacklane",
    rating: 5,
    testimonial: "Chris delivered a polished product faster than I expected — zero back-and-forth.",
    description: "Built our SaaS dashboard from scratch in two weeks.",
  },
  {
    id: "testimonial-2",
    name: "Priya Nair",
    role: "Product Manager, Novatek",
    rating: 5,
    testimonial: "Exceptional communication and clean code. Would hire Chris on every project.",
    description: "Integrated a complex third-party API without a single bug.",
  },
  {
    id: "testimonial-3",
    name: "Jordan Elliot",
    role: "CTO, Driftware",
    rating: 5,
    testimonial: "The codebase Chris left us is something our whole team is proud of.",
    description: "Refactored our legacy Next.js app into a scalable architecture.",
  },
  {
    id: "testimonial-4",
    name: "Sofia Reyes",
    role: "E-commerce Director, Lumio",
    rating: 5,
    testimonial: "Chris turned a rough Figma file into a pixel-perfect, fast-loading storefront.",
    description: "Delivered full e-commerce UI with cart and checkout flow.",
  },
  {
    id: "testimonial-5",
    name: "Daniel Osei",
    role: "Lead Engineer, Arcpoint",
    rating: 5,
    testimonial: "Top-tier TypeScript skills. Chris caught edge cases our own team missed.",
    description: "Implemented role-based access control across our entire platform.",
  },
];
