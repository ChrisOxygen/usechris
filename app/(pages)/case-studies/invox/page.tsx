import React from "react";
import type { Metadata } from "next";
import {
  FiDollarSign,
  FiFileText,
  FiGitBranch,
  FiShare2,
  FiUsers,
  FiShield,
  FiExternalLink,
  FiGithub,
  FiArrowRight,
} from "react-icons/fi";

export const metadata: Metadata = {
  title: "Invox — Case Study",
  description:
    "From draft to paid — invoicing built for the Nigerian market. A full-stack SaaS by Christopher Okafor.",
};

/* ─── Data Flow Diagram ──────────────────────────────────────────────────── */

function DataFlowDiagram() {
  const layers = [
    {
      icon: FiUsers,
      name: "Client",
      badge: "React / Next.js",
      bullets: ["App Router UI", "Optimistic updates", "Streaming responses"],
    },
    {
      icon: FiShare2,
      name: "TanStack Query",
      badge: "Cache Layer",
      bullets: ["Query deduplication", "Background refetch", "Mutation hooks"],
    },
    {
      icon: FiGitBranch,
      name: "API Route",
      badge: "Route Handler",
      bullets: ["Auth middleware", "Request validation", "Error boundaries"],
    },
    {
      icon: FiFileText,
      name: "Prisma",
      badge: "ORM",
      bullets: ["Type-safe queries", "Schema migrations", "Relation loading"],
    },
    {
      icon: FiShield,
      name: "PostgreSQL",
      badge: "Supabase",
      bullets: ["Row Level Security", "Composite indexes", "Cascade deletes"],
    },
  ];

  return (
    <figure className="my-10">
      <div className="w-full bg-[#0d0a0a] border border-[#2a1e1e] rounded-xl p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-[#2a1e1e]" />
          <span className="font-squada-one text-[11px] tracking-[0.18em] uppercase text-muted px-2">
            Data Flow
          </span>
          <div className="h-px flex-1 bg-[#2a1e1e]" />
        </div>

        {/* Flow */}
        <div className="overflow-x-auto pb-2">
          <div className="flex items-stretch min-w-[740px] gap-0">
            {layers.map((layer, i) => (
              <React.Fragment key={layer.name}>
                {/* Layer node */}
                <div
                  className="flex flex-col items-center gap-2 flex-1 min-w-0"
                >
                  <div className="w-full bg-surface border border-[#2a1e1e] rounded-lg overflow-hidden hover:border-accent/25 transition-colors">
                    <div className="bg-[#1c1414] border-b border-[#2a1e1e] px-3 py-1.5 flex items-center justify-between gap-2">
                      <span className="font-squada-one text-[10px] uppercase tracking-wide text-foreground truncate">
                        {layer.name}
                      </span>
                      <span className="font-source-code-pro text-[9px] text-muted whitespace-nowrap">
                        {layer.badge}
                      </span>
                    </div>
                    <div className="p-3">
                      <div className="w-6 h-6 rounded bg-[#1c1414] border border-[#2a1e1e] flex items-center justify-center mb-2.5">
                        <layer.icon className="w-3 h-3 text-accent" />
                      </div>
                      <ul className="space-y-1.5">
                        {layer.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-1.5 font-source-code-pro text-[10px] text-muted leading-snug"
                          >
                            <span className="w-1 h-1 rounded-full bg-accent/40 flex-shrink-0 mt-1" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <span className="font-source-code-pro text-[9px] text-muted/40 uppercase tracking-widest">
                    {i === 0 ? "browser" : i === layers.length - 1 ? "database" : `layer ${i}`}
                  </span>
                </div>

                {/* Connector — not after last node */}
                {i < layers.length - 1 && (
                  <div
                    key={`conn-${i}`}
                    className="flex flex-col items-center justify-center gap-1 px-1 mb-5 flex-shrink-0 w-[28px]"
                  >
                    <FiArrowRight className="w-3 h-3 text-accent" />
                    <FiArrowRight className="w-3 h-3 text-muted/30 rotate-180" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-5 border-t border-[#2a1e1e] flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-source-code-pro text-[10px] text-muted/40">
              <FiArrowRight className="w-3 h-3 text-accent/50" />
              Query / mutation
            </span>
            <span className="flex items-center gap-1.5 font-source-code-pro text-[10px] text-muted/40">
              <FiArrowRight className="w-3 h-3 text-muted/30 rotate-180" />
              Response / data
            </span>
          </div>
          <span className="font-source-code-pro text-[10px] text-muted/40 ml-auto whitespace-nowrap">
            Prisma singleton — max: 1 per Vercel function
          </span>
        </div>
      </div>
      <figcaption className="font-source-code-pro text-[10px] text-muted/40 text-center mt-3 uppercase tracking-widest">
        Fig. 1 — Full-Stack Data Flow
      </figcaption>
    </figure>
  );
}

/* ─── Reusable primitives ────────────────────────────────────────────────── */

function SectionKicker({ number, label }: { number: string; label: string }) {
  return (
    <p className="font-squada-one text-[11px] tracking-[0.2em] uppercase text-muted mb-5 flex items-center gap-3">
      <span className="text-accent">{number}</span>
      <span className="inline-block w-5 h-px bg-surface" />
      {label}
    </p>
  );
}

function Divider() {
  return <div className="w-full h-px bg-surface my-20" />;
}

function ImagePlaceholder({
  label,
  wide = true,
}: {
  label: string;
  wide?: boolean;
}) {
  return (
    <figure className="my-10">
      <div
        className={`w-full ${
          wide ? "aspect-video" : "aspect-[4/3]"
        } bg-surface border-2 border-dashed border-[#2a1e1e] rounded-xl flex flex-col items-center justify-center gap-3`}
      >
        <div className="w-12 h-12 rounded-full bg-[#1e1414] flex items-center justify-center">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#5a4040"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2.5" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        </div>
        <p className="font-squada-one text-[10px] text-[#5a4040] text-center px-8 leading-relaxed max-w-[380px] uppercase tracking-[0.12em]">
          {label}
        </p>
      </div>
      <figcaption className="font-source-code-pro text-xs text-muted text-center mt-3 leading-relaxed">
        {label}
      </figcaption>
    </figure>
  );
}

type InvoiceStatus =
  | "DRAFT"
  | "SENT"
  | "PAID"
  | "PARTIAL"
  | "OVERDUE"
  | "CANCELLED";

function StatusBadge({ status }: { status: InvoiceStatus }) {
  const map: Record<InvoiceStatus, { classes: string; label: string }> = {
    DRAFT: { classes: "bg-[#1a1d38] text-[#8b9bff]", label: "Draft" },
    SENT: { classes: "bg-[#0d2830] text-[#4ecdc4]", label: "Sent" },
    PAID: { classes: "bg-[#0d2818] text-[#4caf7d]", label: "Paid" },
    PARTIAL: { classes: "bg-[#2a1e00] text-[#ffa726]", label: "Partial" },
    OVERDUE: { classes: "bg-[#2a0d0d] text-[#ff6b6b]", label: "Overdue" },
    CANCELLED: { classes: "bg-surface text-muted", label: "Cancelled" },
  };
  const { classes, label } = map[status];
  return (
    <span
      className={`font-squada-one inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] tracking-wider ${classes}`}
    >
      {label}
    </span>
  );
}

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="font-source-code-pro text-[12px] bg-surface text-accent px-1.5 py-0.5 rounded">
      {children}
    </code>
  );
}

function CodeBlock({
  code,
  language = "typescript",
}: {
  code: string;
  language?: string;
}) {
  return (
    <div className="my-6 rounded-xl overflow-hidden border border-surface">
      <div className="bg-[#0f0c0c] flex items-center gap-2 px-4 py-3 border-b border-surface">
        <div className="w-2.5 h-2.5 rounded-full bg-accent opacity-60" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#f0a020] opacity-60" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28a745] opacity-60" />
        <span className="font-squada-one text-[9px] text-muted ml-2 uppercase tracking-[0.18em]">
          {language}
        </span>
      </div>
      <pre className="bg-surface px-6 py-5 overflow-x-auto">
        <code className="font-source-code-pro text-[13px] text-foreground leading-7 whitespace-pre">
          {code}
        </code>
      </pre>
    </div>
  );
}

/* ─── Static data ────────────────────────────────────────────────────────── */

const techStack = [
  { layer: "Framework", tech: "Next.js 16.2 (App Router, React 19)" },
  { layer: "Language", tech: "TypeScript 5.9 (strict mode)" },
  { layer: "Database", tech: "Supabase PostgreSQL (via Prisma 7.5)" },
  { layer: "Auth", tech: "Supabase Auth (SSR-compatible)" },
  { layer: "Styling", tech: "Tailwind CSS v4 + shadcn/ui" },
  { layer: "Forms", tech: "React Hook Form 7.71 + Zod v4" },
  { layer: "Data fetching", tech: "TanStack Query v5" },
  { layer: "Tables", tech: "TanStack React Table v8" },
  { layer: "PDF", tech: "@react-pdf/renderer 4.3" },
  { layer: "Charts", tech: "Recharts 3.8" },
  { layer: "File uploads", tech: "React Dropzone 15 + Supabase Storage" },
  { layer: "Email", tech: "Resend 6.9" },
  { layer: "Analytics", tech: "PostHog" },
  { layer: "Deployment", tech: "Vercel" },
];

const phases = [
  {
    num: "00",
    name: "Project Setup",
    desc: "Repo, Supabase clients, Prisma init, proxy.ts, env validation",
  },
  {
    num: "01",
    name: "Authentication",
    desc: "Register, login, Google OAuth, forgot/reset password, profile sync",
  },
  {
    num: "02",
    name: "Onboarding",
    desc: "4-step wizard, logo upload, color picker",
  },
  {
    num: "03",
    name: "Client Management",
    desc: "CRUD, soft delete, search, client detail",
  },
  {
    num: "04",
    name: "Invoice Creation",
    desc: "Form, line items, tax/discount, auto-save",
  },
  {
    num: "05",
    name: "Invoice Tracking",
    desc: "List, filters, status workflow, payment logging, overdue detection",
  },
  {
    num: "06",
    name: "PDF Generation",
    desc: "Render, preview, download, storage",
  },
  {
    num: "07",
    name: "Dashboard",
    desc: "Stats, charts, recent invoices",
  },
  {
    num: "08",
    name: "Public Invoice View",
    desc: "Share tokens, public /i/[token] route",
  },
  {
    num: "09",
    name: "Settings & Branding",
    desc: "Business info, logo, brand color, invoice defaults",
  },
  {
    num: "10",
    name: "Polish & Launch",
    desc: "PostHog, Sentry, security audit, RLS validation, mobile pass",
  },
  {
    num: "11",
    name: "AI Tier (post-MVP)",
    desc: "Claude API — line item suggestions, follow-up email drafting",
  },
];

const features = [
  {
    icon: FiDollarSign,
    title: "NGN-first invoicing",
    desc: "Naira formatting baked in. No currency config needed.",
  },
  {
    icon: FiFileText,
    title: "Branded PDF generation",
    desc: "Logo, brand color, and bank details on every PDF.",
  },
  {
    icon: FiGitBranch,
    title: "Draft → Paid tracking",
    desc: "Six statuses including Partial and auto-Overdue detection.",
  },
  {
    icon: FiShare2,
    title: "Public share links",
    desc: "30-day tokens. Clients view invoices without logging in.",
  },
  {
    icon: FiUsers,
    title: "Client management",
    desc: "Full history, soft deletes, search and filter.",
  },
  {
    icon: FiShield,
    title: "WHT support",
    desc: "Withholding Tax as a first-class option on every invoice.",
  },
];

const lessons = [
  {
    title: "Start relational.",
    body: "The v1 MongoDB setup required workarounds for data that was inherently relational. Moving to PostgreSQL in v2 eliminated entire categories of bugs.",
  },
  {
    title: "Supabase RLS is free multi-tenancy.",
    body: "Row Level Security policies mean the database enforces ownership — no need to WHERE profileId = user.id in every query.",
  },
  {
    title: "PDF generation in serverless is trickier than it looks.",
    body: "Puppeteer doesn't work cleanly in Vercel functions. @react-pdf/renderer was the right call but required a separate component tree — no Tailwind, uses StyleSheet.create.",
  },
  {
    title: "Feature folders beat type folders.",
    body: "Keeping features/invoices/ self-contained (components, hooks, schemas, server functions) made the codebase much easier to navigate than grouping all hooks in one /hooks folder.",
  },
  {
    title: "Ship the Nigerian-specific features first.",
    body: "Generic invoicing software already exists. The WHT support, bank details on PDFs, and NGN formatting are what make Invox worth using.",
  },
];

const prismaSingleton = `const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
  max: 1,
})
export const prisma = new PrismaClient({ adapter })`;

const nigeriaFeatures = [
  "₦ (Naira) as default currency with proper locale formatting via Intl.NumberFormat",
  "WHT (Withholding Tax) as a first-class tax option — calculated correctly on PDFs",
  "TIN (Tax Identification Number) on the business profile and printed on every invoice PDF",
  "RC Number (CAC business registration) on the profile and PDF for formal invoicing",
  "Bank transfer details (account name, number, bank name) prominently on every generated PDF",
  "Payment methods include Paystack and Flutterwave (local) plus Wise for diaspora payments",
  "Nigeria set as the default country on all profile and client forms",
  "Date format: 15 Jan 2025 (DD MMM YYYY) — not the US MM/DD/YYYY format",
];

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function InvoxCaseStudyPage() {
  return (
    <main className="bg-background text-muted min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="border-b border-surface">
        {/* Red accent stripe */}
        <div className="h-0.5 w-full bg-accent" />

        <div className="max-w-[1100px] mx-auto px-6 pt-16 pb-10">
          {/* Kicker */}
          <p className="font-squada-one text-[11px] tracking-[0.2em] uppercase text-muted mb-8 flex items-center gap-3">
            <span className="inline-block w-6 h-px bg-accent" />
            Case Study
          </p>

          <div className="max-w-[780px]">
            <h1 className="font-russo-one text-[56px] md:text-[80px] text-foreground leading-none tracking-tight mb-4">
              Invox
            </h1>
            <p className="font-squada-one text-xl md:text-2xl text-foreground tracking-wide mb-5">
              From draft to paid — invoicing built for the Nigerian market.
            </p>
            <p className="font-source-code-pro text-sm leading-7 text-muted mb-8 max-w-[580px]">
              Invox is a production SaaS that lets Nigerian freelancers and
              small businesses create branded PDF invoices, manage clients, and
              track payment status — built solo by Christopher Okafor.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.invox.cc/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-squada-one inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-foreground text-sm tracking-wider px-5 py-2.5 rounded-lg transition-colors uppercase"
              >
                View Live App
                <FiExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com/ChrisOxygen/invox"
                target="_blank"
                rel="noopener noreferrer"
                className="font-squada-one inline-flex items-center gap-2 bg-surface border border-surface hover:border-accent text-foreground text-sm tracking-wider px-5 py-2.5 rounded-lg transition-colors uppercase"
              >
                View GitHub
                <FiGithub className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-[1100px] mx-auto px-6 pb-12">
          <ImagePlaceholder
            label="Dashboard overview — invoice list with status filters and stats cards."
            wide={true}
          />
        </div>
      </section>

      {/* ── Sections: narrow content column ──────────────────────────────── */}
      <div className="max-w-[780px] mx-auto px-6 py-20">

        {/* ── 01 The Problem ─────────────────────────────────────────────── */}
        <SectionKicker number="01" label="The Problem" />
        <h2 className="font-russo-one text-3xl text-foreground leading-tight mb-6">
          Invoice creation in Nigeria is stuck in 2010.
        </h2>
        <div className="space-y-4 font-source-code-pro text-sm leading-7">
          <p>
            Nigerian freelancers — developers, designers, consultants,
            marketers — invoice constantly. But their tooling doesn&apos;t match
            their market. Generic invoicing software (Wave, FreshBooks, Zoho)
            defaults to USD, doesn&apos;t understand Withholding Tax, buries bank
            account details, and feels over-engineered for a solo freelancer.
          </p>
          <p>
            The primary payment method in Nigeria is bank transfer. Yet most
            invoicing tools treat it as an afterthought — clients are expected
            to ask for account details separately over WhatsApp or email, after
            receiving the invoice.
          </p>
          <p>
            The workaround is painful: a Word template, manually updated line
            items, exported as a PDF, emailed to the client, and payment chased
            over WhatsApp. No tracking. No history. No way to know who has
            paid, who&apos;s overdue, and who hasn&apos;t opened the invoice.
          </p>
          <p>
            WHT (Withholding Tax) is a standard Nigerian tax mechanism, but no
            mainstream invoicing tool supports it as a first-class option.
            Freelancers either calculate it manually or skip it entirely, which
            creates accounting problems downstream.
          </p>
        </div>

        {/* Pull quote */}
        <blockquote className="my-10 pl-6 border-l-4 border-accent">
          <p className="font-revalia text-xl text-foreground leading-snug">
            &ldquo;A freelancer shouldn&apos;t spend 45 minutes building an invoice
            from a Word template.&rdquo;
          </p>
        </blockquote>

        <Divider />

        {/* ── 02 The Solution ────────────────────────────────────────────── */}
        <SectionKicker number="02" label="The Solution" />
        <h2 className="font-russo-one text-3xl text-foreground leading-tight mb-6">
          A purpose-built tool for the Nigerian market.
        </h2>
        <p className="font-source-code-pro text-sm leading-7 mb-10">
          Invox solves the core problem with a focused feature set: create
          branded PDF invoices in seconds, track status from draft through paid,
          and give clients a public link to view their invoice without signing
          up.
        </p>
      </div>

      {/* Feature grid — wider container */}
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-surface border border-[#2a1e1e] rounded-xl p-5 flex flex-col gap-3 hover:border-accent/30 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-[#1e1414] border border-[#2a1e1e] flex items-center justify-center">
                <f.icon className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h3 className="font-squada-one text-sm text-foreground tracking-wide mb-1 uppercase">
                  {f.title}
                </h3>
                <p className="font-source-code-pro text-xs leading-relaxed text-muted">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <ImagePlaceholder
          label="Invoice creation form — dynamic line items with live total calculations."
          wide={true}
        />
      </div>

      <div className="max-w-[780px] mx-auto px-6 pb-20">
        <Divider />

        {/* ── 03 Architecture ────────────────────────────────────────────── */}
        <SectionKicker number="03" label="Architecture" />
        <h2 className="font-russo-one text-3xl text-foreground leading-tight mb-6">
          Built to scale from one freelancer to a small agency.
        </h2>
        <p className="font-source-code-pro text-sm leading-7 mb-8">
          The stack is opinionated. Every dependency was chosen deliberately —
          not because it was popular, but because it solves a specific problem
          for a serverless SaaS targeting a Nigerian market.
        </p>
      </div>

      {/* Tech stack table */}
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="bg-surface border border-[#2a1e1e] rounded-xl overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#2a1e1e] bg-[#0f0c0c]">
                <th className="font-squada-one text-left px-6 py-3 text-[10px] tracking-[0.18em] uppercase text-muted w-40">
                  Layer
                </th>
                <th className="font-squada-one text-left px-6 py-3 text-[10px] tracking-[0.18em] uppercase text-muted">
                  Technology
                </th>
              </tr>
            </thead>
            <tbody>
              {techStack.map((row, i) => (
                <tr
                  key={row.layer}
                  className={`border-b border-[#1e1414] last:border-0 ${
                    i % 2 === 0 ? "bg-surface" : "bg-[#120e0e]"
                  }`}
                >
                  <td className="font-squada-one px-6 py-3 text-sm text-foreground tracking-wide">
                    {row.layer}
                  </td>
                  <td className="font-source-code-pro px-6 py-3 text-xs text-muted">
                    {row.tech}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="max-w-[780px] mx-auto px-6 pb-4">
        <h3 className="font-squada-one text-xl text-foreground tracking-wide uppercase mb-3 mt-8">
          v1 → v2: MongoDB to Supabase PostgreSQL
        </h3>
        <p className="font-source-code-pro text-sm leading-7 mb-8">
          v1 used MongoDB, NextAuth, and Cloudinary. The rebuild was driven by a
          simple problem: invoice data is inherently relational. Clients have
          invoices. Invoices have line items. Payments belong to invoices.
          Modelling this in a document database required workarounds that
          introduced bugs. Moving to Supabase PostgreSQL gave relational
          integrity, Row Level Security for zero-config multi-tenancy, and
          Postgres-native features like composite unique indexes and cascading
          deletes.
        </p>

        <h3 className="font-squada-one text-xl text-foreground tracking-wide uppercase mb-3">
          Serverless PDF generation
        </h3>
        <p className="font-source-code-pro text-sm leading-7 mb-6">
          PDFs are generated on-demand by a Vercel serverless function using{" "}
          <InlineCode>@react-pdf/renderer</InlineCode>. No headless browser. No
          Puppeteer. The rendered PDF is stored in Supabase Storage and made
          available for download. The Prisma singleton uses PrismaPg with{" "}
          <InlineCode>max: 1</InlineCode> — critical for Vercel functions which
          spin up per-request.
        </p>

        <CodeBlock code={prismaSingleton} language="typescript" />
      </div>

      <div className="max-w-[1100px] mx-auto px-6">
        <DataFlowDiagram />
      </div>

      <div className="max-w-[780px] mx-auto px-6 py-20">
        <Divider />

        {/* ── 04 Feature Deep Dives ──────────────────────────────────────── */}
        <SectionKicker number="04" label="Feature Deep Dives" />
        <h2 className="font-russo-one text-3xl text-foreground leading-tight mb-10">
          Three features worth explaining in depth.
        </h2>

        {/* Feature 1: PDF */}
        <h3 className="font-squada-one text-xl text-foreground tracking-wide uppercase mb-3">
          1. PDF Generation
        </h3>
        <div className="space-y-4 font-source-code-pro text-sm leading-7 mb-6">
          <p>
            Generating PDFs that look professional, support multi-page invoices,
            embed client logos from Supabase Storage, and work inside a Vercel
            function was the biggest technical challenge in the project.
          </p>
          <p>
            Puppeteer was ruled out immediately — too heavy for serverless,
            memory constraints, cold start overhead. The solution was{" "}
            <InlineCode>@react-pdf/renderer</InlineCode>: pure JavaScript, no
            headless browser, renders a React component tree to a PDF buffer
            in-process.
          </p>
          <p>
            The PDF layout includes a branded header with the user&apos;s logo and
            custom brand color, a detailed line items table, tax and discount
            summaries, and — critically — a bank transfer details section in the
            footer. When an invoice status is PAID, a diagonal stamp overlays
            the document. The live preview uses{" "}
            <InlineCode>&lt;PDFViewer&gt;</InlineCode> with dynamic import and
            SSR disabled.
          </p>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-6">
        <ImagePlaceholder
          label="Generated PDF invoice — branded header, line items, and bank transfer details."
          wide={false}
        />
      </div>

      <div className="max-w-[780px] mx-auto px-6 pb-4">
        {/* Feature 2: Status Workflow */}
        <h3 className="font-squada-one text-xl text-foreground tracking-wide uppercase mb-3 mt-10">
          2. Invoice Status Workflow + Payment Logging
        </h3>
        <p className="font-source-code-pro text-sm leading-7 mb-6">
          Invox tracks six distinct invoice states with defined transition rules:
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {(
            [
              "DRAFT",
              "SENT",
              "PAID",
              "PARTIAL",
              "OVERDUE",
              "CANCELLED",
            ] as InvoiceStatus[]
          ).map((s) => (
            <StatusBadge key={s} status={s} />
          ))}
        </div>

        <div className="space-y-4 font-source-code-pro text-sm leading-7 mb-6">
          <p>
            Auto-overdue detection runs on every invoice list load: any invoice
            with a past due date and status of{" "}
            <StatusBadge status="SENT" /> is automatically flagged as{" "}
            <StatusBadge status="OVERDUE" />. No cron job. No background
            worker. The detection is a computed field resolved at query time.
          </p>
          <p>
            Payment logging supports multiple partial payments per invoice.
            Record the amount, date, method (Bank Transfer, Paystack,
            Flutterwave, PayPal, Wise, Cash), and an optional note. Status
            becomes <StatusBadge status="PARTIAL" /> until recorded payments
            sum to the invoice total, at which point it moves to{" "}
            <StatusBadge status="PAID" />.
          </p>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-6">
        <ImagePlaceholder
          label="Invoice detail — payment history and status workflow."
          wide={false}
        />
      </div>

      <div className="max-w-[780px] mx-auto px-6 pb-4">
        {/* Feature 3: Share Links */}
        <h3 className="font-squada-one text-xl text-foreground tracking-wide uppercase mb-3 mt-10">
          3. Public Share Links
        </h3>
        <div className="space-y-4 font-source-code-pro text-sm leading-7 mb-6">
          <p>
            Clients shouldn&apos;t need to create an account to view their invoice.
            This is a friction point in almost every invoicing tool — the client
            receives a link, the link requires login, they give up.
          </p>
          <p>
            Each invoice gets a Nanoid share token stored on the invoice record.
            The <InlineCode>/i/[token]</InlineCode> route is fully public — no
            auth, no cookies, no redirect to login. Tokens expire after 30 days
            and can be regenerated by the invoice owner.
          </p>
          <p>
            The public view is a completely separate UI from the app — styled as
            a clean, readable invoice page with all line items, totals, and bank
            details visible. The user&apos;s branding (logo, brand color) carries
            through to the public page.
          </p>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 pb-6">
        <ImagePlaceholder
          label="Public invoice view — accessible to clients via share link, no login required."
          wide={false}
        />
      </div>

      <div className="max-w-[780px] mx-auto px-6 pb-20 pt-4">
        <Divider />

        {/* ── 05 Nigerian Market ─────────────────────────────────────────── */}
        <SectionKicker number="05" label="Nigerian Market" />
        <h2 className="font-russo-one text-3xl text-foreground leading-tight mb-6">
          Built for how Nigerians actually do business.
        </h2>
        <p className="font-source-code-pro text-sm leading-7 mb-8">
          Generic invoicing tools are not wrong — they&apos;re just built for someone
          else. Invox&apos;s value proposition is specificity: every design decision
          maps to how Nigerian freelancers and SMBs actually operate.
        </p>

        <ul className="space-y-3 mb-8">
          {nigeriaFeatures.map((item) => (
            <li key={item} className="flex gap-3 font-source-code-pro text-sm leading-[1.7]">
              <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-[#1e1414] border border-accent/30 flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path
                    d="M1.5 4l1.5 1.5 3.5-3.5"
                    stroke="#dc3545"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="font-source-code-pro text-sm leading-7">
          These aren&apos;t optional configuration settings — they&apos;re defaults. A new
          user who signs up, creates a client, and generates their first invoice
          gets a correct ₦-denominated PDF with bank details in the footer,
          formatted to Nigerian business standards, without changing any
          settings.
        </p>

        <Divider />

        {/* ── 06 Build Process ───────────────────────────────────────────── */}
        <SectionKicker number="06" label="Build Process" />
        <h2 className="font-russo-one text-3xl text-foreground leading-tight mb-6">
          Shipped in phases — foundation first.
        </h2>
        <div className="space-y-4 font-source-code-pro text-sm leading-7 mb-10">
          <p>
            The project was structured as 12 sequential phases. Phase 0 — the
            unsexy work — was non-negotiable: Supabase client setup, Prisma
            schema, environment variable validation with Zod, and the{" "}
            <InlineCode>proxy.ts</InlineCode> route guard (Next.js 16&apos;s
            replacement for <InlineCode>middleware.ts</InlineCode>). Getting
            these right before writing a single page component meant the entire
            project ran on a reliable foundation.
          </p>
          <p>
            The v1 → v2 rebuild decision was made deliberately after reaching
            the limits of the original MongoDB architecture. Rather than
            patching an increasingly brittle system, the cleaner path was a full
            rebuild on a relational foundation. The domain knowledge from v1
            made v2 significantly faster to ship.
          </p>
        </div>
      </div>

      {/* Phase table */}
      <div className="max-w-[1100px] mx-auto px-6 pb-6">
        <div className="bg-surface border border-[#2a1e1e] rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#2a1e1e] bg-[#0f0c0c]">
                <th className="font-squada-one text-left px-5 py-3 text-[10px] tracking-[0.18em] uppercase text-muted w-16">
                  Phase
                </th>
                <th className="font-squada-one text-left px-5 py-3 text-[10px] tracking-[0.18em] uppercase text-muted w-44">
                  Name
                </th>
                <th className="font-squada-one text-left px-5 py-3 text-[10px] tracking-[0.18em] uppercase text-muted hidden md:table-cell">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {phases.map((phase, i) => (
                <tr
                  key={phase.num}
                  className={`border-b border-[#1e1414] last:border-0 ${
                    i % 2 === 0 ? "bg-surface" : "bg-[#120e0e]"
                  }`}
                >
                  <td className="font-source-code-pro px-5 py-3 text-sm text-accent">
                    {phase.num}
                  </td>
                  <td className="font-squada-one px-5 py-3 text-sm text-foreground tracking-wide">
                    {phase.name}
                  </td>
                  <td className="font-source-code-pro px-5 py-3 text-xs text-muted hidden md:table-cell leading-relaxed">
                    {phase.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="max-w-[780px] mx-auto px-6 pb-20 pt-4">
        <Divider />

        {/* ── 07 What I Learned ──────────────────────────────────────────── */}
        <SectionKicker number="07" label="Retrospective" />
        <h2 className="font-russo-one text-3xl text-foreground leading-tight mb-10">
          What I&apos;d do differently.
        </h2>

        <div className="space-y-8">
          {lessons.map((lesson, i) => (
            <div key={lesson.title} className="flex gap-5">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1e1414] border border-accent/20 flex items-center justify-center mt-0.5">
                <span className="font-source-code-pro text-[10px] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="font-squada-one text-base text-foreground tracking-wide uppercase mb-2">
                  {lesson.title}
                </h3>
                <p className="font-source-code-pro text-sm leading-7">
                  {lesson.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Divider />

        {/* ── Footer / CTA ───────────────────────────────────────────────── */}
        <div className="text-center py-10">
          <p className="font-squada-one text-[10px] tracking-[0.2em] uppercase text-muted mb-4">
            Project
          </p>
          <h2 className="font-russo-one text-3xl text-foreground mb-2">
            Invox
          </h2>
          <p className="font-source-code-pro text-sm text-muted mb-8">
            Professional invoicing for Nigerian freelancers.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-10">
            <a
              href="https://www.invox.cc/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-squada-one inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-foreground text-sm tracking-wider px-5 py-2.5 rounded-lg transition-colors uppercase"
            >
              View Live App
              <FiExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/ChrisOxygen/invox"
              target="_blank"
              rel="noopener noreferrer"
              className="font-squada-one inline-flex items-center gap-2 bg-surface border border-surface hover:border-accent text-foreground text-sm tracking-wider px-5 py-2.5 rounded-lg transition-colors uppercase"
            >
              View GitHub
              <FiGithub className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/christopher-okafor-17084416b"
              className="font-squada-one inline-flex items-center gap-2 bg-surface border border-surface hover:border-accent text-foreground text-sm tracking-wider px-5 py-2.5 rounded-lg transition-colors uppercase"
            >
              Christopher Okafor
            </a>
          </div>

          <p className="font-source-code-pro text-[11px] text-muted/60 leading-relaxed">
            Built with Next.js, Supabase, and Prisma. Deployed on Vercel.
          </p>
        </div>
      </div>
    </main>
  );
}
