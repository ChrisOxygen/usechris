import type { Metadata } from "next";
import {
  FiZap,
  FiCpu,
  FiPackage,
  FiCreditCard,
  FiUser,
  FiMessageSquare,
  FiClock,
  FiShield,
  FiBarChart2,
  FiToggleRight,
  FiExternalLink,
  FiGithub,
  FiArrowRight,
  FiCheck,
  FiX,
} from "react-icons/fi";

export const metadata: Metadata = {
  title: "Propreso — Case Study",
  description:
    "AI-powered proposal generation for Upwork freelancers. A full-stack SaaS with a two-stage Claude pipeline, Chrome extension, and Stripe billing.",
};

/* ─── Pipeline Diagram ───────────────────────────────────────────────────── */

function PipelineDiagram() {
  return (
    <figure className="my-10">
      <div className="w-full bg-[#0d0a0a] border border-[#2a1e1e] rounded-xl p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-[#2a1e1e]" />
          <span className="font-squada-one text-[11px] tracking-[0.18em] uppercase text-muted px-2">
            2-Stage AI Pipeline
          </span>
          <div className="h-px flex-1 bg-[#2a1e1e]" />
        </div>

        {/* Flow — horizontally scrollable on small screens */}
        <div className="overflow-x-auto pb-2">
          <div className="flex items-stretch min-w-[680px] gap-0">

            {/* 1 — Input: Job Post */}
            <div className="flex flex-col items-center gap-2 w-[108px] flex-shrink-0">
              <div className="w-full h-full bg-[#161111] border border-[#2a1e1e] rounded-lg p-4 text-center flex flex-col items-center justify-center">
                <div className="w-8 h-8 mb-3 rounded-lg bg-[#0d0a0a] border border-[#2a1e1e] flex items-center justify-center">
                  <FiMessageSquare className="w-4 h-4 text-muted" />
                </div>
                <p className="font-squada-one text-[11px] uppercase tracking-wide text-foreground mb-1">
                  Job Post
                </p>
                <p className="font-source-code-pro text-[10px] text-muted leading-relaxed">
                  Raw Upwork posting
                </p>
              </div>
              <span className="font-source-code-pro text-[9px] text-muted/40 uppercase tracking-widest">
                input
              </span>
            </div>

            {/* Connector */}
            <div className="flex items-center flex-1 px-2 mb-5">
              <div className="h-px flex-1 bg-[#3a2020]" />
              <FiArrowRight className="w-3 h-3 text-accent flex-shrink-0" />
            </div>

            {/* 2 — Stage 1: Analyzer / Haiku */}
            <div className="flex flex-col items-center gap-2 w-[150px] flex-shrink-0">
              <div className="w-full bg-surface border border-accent/20 rounded-lg overflow-hidden">
                <div className="bg-[#1c1414] border-b border-accent/15 px-3 py-1.5 flex items-center justify-between">
                  <span className="font-source-code-pro text-[9px] text-accent tracking-wide">
                    Stage 1
                  </span>
                  <span className="font-source-code-pro text-[9px] text-muted">
                    Claude Haiku
                  </span>
                </div>
                <div className="p-3">
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-5 h-5 rounded bg-[#1c1414] border border-accent/20 flex items-center justify-center flex-shrink-0">
                      <FiCpu className="w-3 h-3 text-accent" />
                    </div>
                    <p className="font-squada-one text-[11px] uppercase tracking-wide text-foreground">
                      Analyzer
                    </p>
                  </div>
                  <ul className="space-y-1.5">
                    {[
                      "Tone & urgency",
                      "Client fears",
                      "Keyword mapping",
                      "Red flag detection",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-1.5 font-source-code-pro text-[10px] text-muted"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent/40 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <span className="font-source-code-pro text-[9px] text-muted/40 uppercase tracking-widest">
                ~600 tokens
              </span>
            </div>

            {/* Connector — Intelligence Report label */}
            <div className="flex flex-col items-center justify-center flex-1 px-2 mb-5 gap-1">
              <span className="font-source-code-pro text-[9px] text-muted/60 whitespace-nowrap">
                Intelligence Report
              </span>
              <div className="w-full flex items-center">
                <div className="h-px flex-1 bg-[#3a2020]" />
                <FiArrowRight className="w-3 h-3 text-accent flex-shrink-0" />
              </div>
            </div>

            {/* 3 — Stage 2: Generator / Sonnet */}
            <div className="flex flex-col items-center gap-2 w-[150px] flex-shrink-0">
              <div className="w-full bg-surface border border-accent/20 rounded-lg overflow-hidden">
                <div className="bg-[#1c1414] border-b border-accent/15 px-3 py-1.5 flex items-center justify-between">
                  <span className="font-source-code-pro text-[9px] text-accent tracking-wide">
                    Stage 2
                  </span>
                  <span className="font-source-code-pro text-[9px] text-muted">
                    Claude Sonnet
                  </span>
                </div>
                <div className="p-3">
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-5 h-5 rounded bg-[#1c1414] border border-accent/20 flex items-center justify-center flex-shrink-0">
                      <FiZap className="w-3 h-3 text-accent" />
                    </div>
                    <p className="font-squada-one text-[11px] uppercase tracking-wide text-foreground">
                      Generator
                    </p>
                  </div>
                  <ul className="space-y-1.5">
                    {[
                      "Grounded in report",
                      "Freelancer's voice",
                      "No AI tells",
                      "Word-by-word stream",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-1.5 font-source-code-pro text-[10px] text-muted"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent/40 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <span className="font-source-code-pro text-[9px] text-muted/40 uppercase tracking-widest">
                streaming
              </span>
            </div>

            {/* Connector */}
            <div className="flex items-center flex-1 px-2 mb-5">
              <div className="h-px flex-1 bg-[#3a2020]" />
              <FiArrowRight className="w-3 h-3 text-accent flex-shrink-0" />
            </div>

            {/* 4 — Output: Streamed Proposal */}
            <div className="flex flex-col items-center gap-2 w-[108px] flex-shrink-0">
              <div className="w-full h-full bg-[#161111] border border-accent/30 rounded-lg p-4 text-center flex flex-col items-center justify-center">
                <div className="w-8 h-8 mb-3 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <FiCheck className="w-4 h-4 text-accent" />
                </div>
                <p className="font-squada-one text-[11px] uppercase tracking-wide text-foreground mb-1">
                  Proposal
                </p>
                <p className="font-source-code-pro text-[10px] text-muted leading-relaxed">
                  Streamed live
                </p>
              </div>
              <span className="font-source-code-pro text-[9px] text-accent/50 uppercase tracking-widest">
                output
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-5 border-t border-[#2a1e1e] flex items-center justify-between gap-4 flex-wrap">
          <span className="font-source-code-pro text-[10px] text-muted/40">
            Spec / scam detection triggers automatic token refund — no credit consumed
          </span>
          <span className="font-source-code-pro text-[10px] text-muted/40 ml-auto whitespace-nowrap">
            ~2–4 s end-to-end
          </span>
        </div>
      </div>
      <figcaption className="font-source-code-pro text-[10px] text-muted/40 text-center mt-3 uppercase tracking-widest">
        Fig. 1 — Two-Stage AI Pipeline
      </figcaption>
    </figure>
  );
}

/* ─── Primitives ─────────────────────────────────────────────────────────── */

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

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="font-source-code-pro text-[12px] bg-surface text-accent px-1.5 py-0.5 rounded">
      {children}
    </code>
  );
}

/* ─── Static data ────────────────────────────────────────────────────────── */

const heroStats = [
  { icon: FiZap, value: "~60s", label: "to generate a proposal" },
  { icon: FiCpu, value: "2-stage", label: "AI pipeline (analyze → generate)" },
  { icon: FiPackage, value: "Chrome", label: "extension for in-page generation" },
  { icon: FiCreditCard, value: "Free", label: "freemium with Stripe billing" },
];

const features = [
  {
    icon: FiUser,
    title: "Niche Profiles",
    desc: "Up to 2 (free) or 4 (pro) profiles — each with role, skills, bio, and portfolio items.",
  },
  {
    icon: FiMessageSquare,
    title: "4 Writing Tones",
    desc: "Professional, Conversational, Confident, Friendly — each tunes vocabulary and sentence rhythm.",
  },
  {
    icon: FiZap,
    title: "Streaming Output",
    desc: "Proposals stream word-by-word in real-time via Vercel AI SDK's streamText().",
  },
  {
    icon: FiPackage,
    title: "Chrome Extension",
    desc: "WXT-based extension injects a generation panel directly into Upwork job pages.",
  },
  {
    icon: FiClock,
    title: "Proposal History",
    desc: "All proposals saved. Track status (Won / Replied / No Response) for win-rate analytics.",
  },
  {
    icon: FiToggleRight,
    title: "Token Economy",
    desc: "Free: 10 lifetime tokens. Pro: 200/month. Tokens refunded on failed or suspicious posts.",
  },
  {
    icon: FiShield,
    title: "Suspicious Post Detection",
    desc: "AI flags spec work, scam posts, and unclassifiable jobs — no token wasted.",
  },
  {
    icon: FiBarChart2,
    title: "Freemium + Stripe Billing",
    desc: "Free → Pro upgrade with monthly ($6/mo) or annual ($48/yr) plans via Stripe Checkout.",
  },
];

const techStack = [
  { layer: "Frontend", tech: "Next.js 16.1 (App Router), TypeScript strict, Tailwind CSS v4, shadcn/ui" },
  { layer: "AI", tech: "Vercel AI SDK v6, OpenRouter (Haiku → Sonnet), real-time streamText()" },
  { layer: "Database", tech: "PostgreSQL (Supabase), Prisma ORM v7 (ES modules)" },
  { layer: "Auth", tech: "Supabase Auth + SSR cookie sessions" },
  { layer: "Billing", tech: "Stripe Checkout + Webhooks, idempotent handling via Upstash Redis" },
  { layer: "Rate Limiting", tech: "Upstash Redis (5 req/min per user on generation endpoint)" },
  { layer: "Analytics", tech: "PostHog (client + server-side event tracking)" },
  { layer: "Extension", tech: "WXT + React (Chrome extension, separate project)" },
  { layer: "Deployment", tech: "Vercel" },
];

const archDecisions = [
  {
    title: "Auth-only Supabase, Prisma for all data.",
    body: "Supabase handles sessions; every DB read/write goes through Prisma. This avoids mixing two ORM paradigms and keeps query logic fully typed and predictable.",
  },
  {
    title: "Feature-based folder structure.",
    body: "Code lives in features/<feature>/ with sub-folders for components, hooks, schemas, and server functions. Shared code goes in shared/. Keeps related code co-located, avoids a monolithic utils/ blob.",
  },
  {
    title: "Server functions prefixed with _.",
    body: "_createProfile, _generateProposal. A visual convention that makes it immediately clear a function must only run server-side and can access Prisma directly.",
  },
  {
    title: "Atomic token deduction before generation.",
    body: "Tokens are decremented before the AI call, then refunded on failure. Prevents race conditions and ensures users can't over-consume by firing parallel requests.",
  },
  {
    title: "Two-model pipeline for cost control.",
    body: "Analysis uses the cheapest capable model (Haiku) to extract structured signals; only generation uses the more expensive Sonnet. Keeps per-generation cost low while keeping quality high.",
  },
  {
    title: "Idempotent Stripe webhooks.",
    body: "Every webhook event ID is cached in Redis with a 7-day TTL. Duplicate deliveries from Stripe are silently ignored, preventing double token grants.",
  },
];

const challenges = [
  {
    title: "Streaming in App Router with Prisma.",
    body: "The generation endpoint needed to stream while also saving the result to the DB after completion. Solved with Vercel AI SDK's onFinish callback, which fires server-side after the stream ends without blocking the client.",
  },
  {
    title: "Race conditions in token deduction.",
    body: "Early versions allowed parallel requests to both pass a balance check. Switched to a Prisma atomic update (decrement where balance > 0) that either succeeds or returns zero rows — making check-and-decrement a single atomic operation.",
  },
  {
    title: "Prisma v7 ES module migration.",
    body: "Prisma 7 ships as ESM and moves database config out of schema.prisma into a separate prisma.config.ts. Required careful adjustment of import paths and the build pipeline.",
  },
  {
    title: "Next.js 16 middleware.ts deprecation.",
    body: "Next.js 16 deprecated middleware.ts in favor of proxy.ts with a renamed export. Small but easy to miss when scaffolding — noted in project docs to avoid future confusion.",
  },
];

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function PropresCaseStudyPage() {
  return (
    <main className="bg-background text-muted min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="border-b border-surface">
        <div className="h-0.5 w-full bg-accent" />

        <div className="max-w-[1100px] mx-auto px-6 pt-16 pb-10">
          <p className="font-squada-one text-[11px] tracking-[0.2em] uppercase text-muted mb-8 flex items-center gap-3">
            <span className="inline-block w-6 h-px bg-accent" />
            Case Study
          </p>

          <div className="max-w-[780px]">
            <h1 className="font-russo-one text-[56px] md:text-[80px] text-foreground leading-none tracking-tight mb-4">
              Propreso
            </h1>
            <p className="font-squada-one text-xl md:text-2xl text-foreground tracking-wide mb-5">
              AI-Powered Proposal Generation for Upwork Freelancers
            </p>
            <p className="font-source-code-pro text-sm leading-7 text-muted mb-10 max-w-[580px]">
              Upwork freelancers waste hours on proposals that never convert.
              Propreso analyzes each job post for emotional signals and client
              intent, then streams a personalized, human-sounding proposal in
              under 60 seconds — built by Christopher Okafor.
            </p>

            {/* Stat badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
              {heroStats.map((s) => (
                <div
                  key={s.label}
                  className="bg-surface border border-[#2a1e1e] rounded-xl p-4 flex flex-col gap-2"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#1e1414] border border-[#2a1e1e] flex items-center justify-center">
                    <s.icon className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <p className="font-russo-one text-foreground text-lg leading-none">
                    {s.value}
                  </p>
                  <p className="font-source-code-pro text-[11px] text-muted leading-snug">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://propreso.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-squada-one inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-foreground text-sm tracking-wider px-5 py-2.5 rounded-lg transition-colors uppercase"
              >
                View Live App
                <FiExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com/ChrisOxygen/propreso-v2"
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
          <figure className="my-10">
            <img
              src="/assets/generating-proposals.gif"
              alt="Propreso generating a proposal — job post input, profile selector, tone picker, and streaming output"
              className="w-full rounded-xl border border-[#2a1e1e]"
            />
          </figure>
        </div>
      </section>

      {/* ── Sections ─────────────────────────────────────────────────────── */}
      <div className="max-w-[780px] mx-auto px-6 py-20">

        {/* ── 01 The Problem ─────────────────────────────────────────────── */}
        <SectionKicker number="01" label="The Problem" />
        <h2 className="font-russo-one text-3xl text-foreground leading-tight mb-6">
          Freelancers are losing bids they should be winning.
        </h2>
        <div className="space-y-4 font-source-code-pro text-sm leading-7">
          <p>
            Upwork freelancers send dozens of proposals per week. A strong
            proposal — one that mirrors the client&apos;s tone, addresses their
            actual fear, and sounds like a human wrote it — takes 15–30 minutes
            to craft from scratch.
          </p>
          <p>
            Generic AI tools make this worse, not better. ChatGPT prompts
            produce hollow, detectable text (&ldquo;I came across your posting
            and…&rdquo;) that clients have learned to skip. The output doesn&apos;t
            know the client&apos;s sophistication level, urgency, or emotional state
            — it just completes the sentence.
          </p>
          <p>
            Freelancers with multiple niches face a compound problem: the
            proposal for a React development job should read nothing like the
            one for a technical writing contract. There&apos;s no tool that lets them
            maintain multiple context profiles and apply the right one per job —
            until now.
          </p>
        </div>

        <blockquote className="my-10 pl-6 border-l-4 border-accent">
          <p className="font-revalia text-xl text-foreground leading-snug">
            &ldquo;Stop Losing Bids. Start Winning Clients.&rdquo;
          </p>
        </blockquote>

        <Divider />

        {/* ── 02 The Solution ────────────────────────────────────────────── */}
        <SectionKicker number="02" label="The Solution" />
        <h2 className="font-russo-one text-3xl text-foreground leading-tight mb-6">
          A two-stage AI pipeline built for signal, not just completion.
        </h2>
        <p className="font-source-code-pro text-sm leading-7 mb-8">
          Propreso&apos;s core architecture is a deliberate two-model pipeline. The
          first stage analyzes; the second generates. Most AI tools skip the
          first step entirely — and that&apos;s why their output is generic.
        </p>

        {/* Pipeline visualization */}
        <div className="bg-surface border border-[#2a1e1e] rounded-xl overflow-hidden mb-8">
          {/* Stage 1 */}
          <div className="p-6 border-b border-[#2a1e1e]">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-source-code-pro text-[11px] text-accent bg-[#1e1414] border border-accent/20 px-2 py-0.5 rounded">
                Stage 1
              </span>
              <span className="font-squada-one text-sm text-foreground uppercase tracking-wide">
                Job Post Analysis
              </span>
              <span className="font-source-code-pro text-[10px] text-muted ml-auto">
                Claude Haiku
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "Core problem extraction",
                "Client sophistication level",
                "Emotional tone + urgency",
                "Keywords to mirror",
                "Biggest client fears",
                "Red flag / scam detection",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 font-source-code-pro text-xs text-muted"
                >
                  <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center py-3 bg-[#0f0c0c] border-b border-[#2a1e1e]">
            <div className="flex items-center gap-2 font-squada-one text-[10px] text-muted uppercase tracking-widest">
              <span>Intelligence Report</span>
              <FiArrowRight className="w-3 h-3 text-accent" />
              <span>Stage 2</span>
            </div>
          </div>

          {/* Stage 2 */}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-source-code-pro text-[11px] text-accent bg-[#1e1414] border border-accent/20 px-2 py-0.5 rounded">
                Stage 2
              </span>
              <span className="font-squada-one text-sm text-foreground uppercase tracking-wide">
                Proposal Generation
              </span>
              <span className="font-source-code-pro text-[10px] text-muted ml-auto">
                Claude Sonnet
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "Grounded in intelligence report",
                "Tuned to freelancer's real profile",
                "No hollow openers, no AI tells",
                "Rhythm-aware writing + contractions",
                "One CTA, proof points with numbers",
                "Streamed word-by-word in real-time",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 font-source-code-pro text-xs text-muted"
                >
                  <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="font-source-code-pro text-sm leading-7">
          The pipeline also handles edge cases cleanly: posts flagged as spec
          work, scams, or unclassifiable trigger a refund of the generation
          token — the system never consumes a credit on a job that can&apos;t
          produce a useful proposal.
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto px-6">
        <PipelineDiagram />
      </div>

      {/* Feature grid */}
      <div className="max-w-[780px] mx-auto px-6 pb-4">
        <Divider />
        <SectionKicker number="03" label="Key Features" />
        <h2 className="font-russo-one text-3xl text-foreground leading-tight mb-10">
          Everything a freelancer needs. Nothing they don&apos;t.
        </h2>
      </div>

      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-surface border border-[#2a1e1e] rounded-xl p-5 flex gap-4 hover:border-accent/30 transition-colors"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#1e1414] border border-[#2a1e1e] flex items-center justify-center mt-0.5">
                <f.icon className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h3 className="font-squada-one text-sm text-foreground tracking-wide uppercase mb-1">
                  {f.title}
                </h3>
                <p className="font-source-code-pro text-xs leading-relaxed text-muted">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-6">
        <figure className="my-10">
          <img
            src="/assets/adding-profiles.gif"
            alt="Propreso profile setup — role selector, skills picker, bio input, and portfolio items"
            className="w-full rounded-xl border border-[#2a1e1e]"
          />
        </figure>
      </div>

      {/* Architecture */}
      <div className="max-w-[780px] mx-auto px-6 pb-4">
        <Divider />
        <SectionKicker number="04" label="Technical Architecture" />
        <h2 className="font-russo-one text-3xl text-foreground leading-tight mb-6">
          Opinionated by design.
        </h2>
        <p className="font-source-code-pro text-sm leading-7 mb-8">
          Every dependency was chosen to solve a specific problem at scale in a
          serverless, AI-heavy SaaS. The stack reflects hard lessons from v1 and
          deliberate tradeoffs between simplicity and capability.
        </p>
      </div>

      {/* Tech stack table */}
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="bg-surface border border-[#2a1e1e] rounded-xl overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#2a1e1e] bg-[#0f0c0c]">
                <th className="font-squada-one text-left px-6 py-3 text-[10px] tracking-[0.18em] uppercase text-muted w-36">
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

      {/* Arch decisions */}
      <div className="max-w-[780px] mx-auto px-6 pb-4">
        <h3 className="font-squada-one text-xl text-foreground tracking-wide uppercase mb-6 mt-4">
          Key Architectural Decisions
        </h3>
        <div className="space-y-7">
          {archDecisions.map((d, i) => (
            <div key={d.title} className="flex gap-5">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1e1414] border border-accent/20 flex items-center justify-center mt-0.5">
                <span className="font-source-code-pro text-[10px] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h4 className="font-squada-one text-sm text-foreground uppercase tracking-wide mb-1.5">
                  {d.title}
                </h4>
                <p className="font-source-code-pro text-sm leading-7">{d.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-6">
        <figure className="my-10">
          <img
            src="/assets/proposals-history.gif"
            alt="Propreso proposal history — status badges (Won, Replied, No Response) and win-rate metric"
            className="w-full rounded-xl border border-[#2a1e1e]"
          />
        </figure>
      </div>

      {/* Design system */}
      <div className="max-w-[780px] mx-auto px-6 pb-20 pt-4">
        <Divider />
        <SectionKicker number="05" label="Design System" />
        <h2 className="font-russo-one text-3xl text-foreground leading-tight mb-6">
          Warm ember. Urgency without aggression.
        </h2>
        <p className="font-source-code-pro text-sm leading-7 mb-8">
          Propreso uses a custom Tailwind v4 token system built around a warm
          ember palette — evocative of productivity and focus, without the
          cold sterility of most SaaS tools. The typography pairs Space
          Grotesk (headings), Instrument Serif italic (display/hero), Inter
          (body), and JetBrains Mono (badges, tags, code).
        </p>

        {/* Color swatches */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
          {[
            { name: "Deep Ember", hex: "#C85438", label: "Primary actions" },
            { name: "Warm Canvas", hex: "#FDF8F6", label: "Page background" },
            { name: "Ember Tint", hex: "#FDF0EC", label: "Accent surfaces" },
            { name: "Rich Ink", hex: "#1A1412", label: "Primary text" },
            { name: "Warm Slate", hex: "#5A4E4A", label: "Secondary text" },
            { name: "Border", hex: "#E8DDD9", label: "Dividers, outlines" },
          ].map((c) => (
            <div
              key={c.name}
              className="bg-surface border border-[#2a1e1e] rounded-xl overflow-hidden"
            >
              <div
                className="h-10 w-full"
                style={{ backgroundColor: c.hex }}
              />
              <div className="p-3">
                <p className="font-squada-one text-xs text-foreground uppercase tracking-wide">
                  {c.name}
                </p>
                <p className="font-source-code-pro text-[10px] text-accent mt-0.5">
                  {c.hex}
                </p>
                <p className="font-source-code-pro text-[10px] text-muted mt-0.5">
                  {c.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Billing */}
      <div className="max-w-[780px] mx-auto px-6 pb-4">
        <Divider />
        <SectionKicker number="06" label="Billing & Freemium" />
        <h2 className="font-russo-one text-3xl text-foreground leading-tight mb-6">
          Simple pricing. Generous free tier.
        </h2>
        <p className="font-source-code-pro text-sm leading-7 mb-8">
          Token flow: Stripe <InlineCode>invoice.paid</InlineCode> webhook →
          grant 200 tokens atomically → Prisma{" "}
          <InlineCode>User.tokenBalance</InlineCode> incremented. Users manage
          billing via Stripe Customer Portal — no custom billing UI required.
        </p>

        {/* Billing table */}
        <div className="bg-surface border border-[#2a1e1e] rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#2a1e1e] bg-[#0f0c0c]">
                <th className="font-squada-one text-left px-6 py-3 text-[10px] tracking-[0.18em] uppercase text-muted" />
                <th className="font-squada-one text-center px-6 py-3 text-[10px] tracking-[0.18em] uppercase text-muted">
                  Free
                </th>
                <th className="font-squada-one text-center px-6 py-3 text-[10px] tracking-[0.18em] uppercase text-accent border-l border-[#2a1e1e]">
                  Pro
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "Profiles", free: "2", pro: "4" },
                { label: "Generation tokens", free: "10 lifetime", pro: "200 / month" },
                { label: "Monthly price", free: "$0", pro: "$6 / mo" },
                { label: "Annual price", free: "$0", pro: "$48 / yr ($4/mo)" },
                { label: "Token rollover", free: false, pro: true },
              ].map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-b border-[#1e1414] last:border-0 ${
                    i % 2 === 0 ? "bg-surface" : "bg-[#120e0e]"
                  }`}
                >
                  <td className="font-squada-one px-6 py-3 text-sm text-foreground tracking-wide">
                    {row.label}
                  </td>
                  <td className="font-source-code-pro px-6 py-3 text-xs text-muted text-center">
                    {typeof row.free === "boolean" ? (
                      row.free ? (
                        <FiCheck className="w-3.5 h-3.5 text-accent mx-auto" />
                      ) : (
                        <FiX className="w-3.5 h-3.5 text-muted mx-auto opacity-40" />
                      )
                    ) : (
                      row.free
                    )}
                  </td>
                  <td className="font-source-code-pro px-6 py-3 text-xs text-foreground text-center border-l border-[#2a1e1e]">
                    {typeof row.pro === "boolean" ? (
                      row.pro ? (
                        <FiCheck className="w-3.5 h-3.5 text-accent mx-auto" />
                      ) : (
                        <FiX className="w-3.5 h-3.5 text-muted mx-auto opacity-40" />
                      )
                    ) : (
                      row.pro
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Chrome extension */}
      <div className="max-w-[780px] mx-auto px-6 pb-4">
        <Divider />
        <SectionKicker number="07" label="Chrome Extension" />
        <h2 className="font-russo-one text-3xl text-foreground leading-tight mb-6">
          Generate without switching tabs.
        </h2>
        <div className="space-y-4 font-source-code-pro text-sm leading-7">
          <p>
            The Chrome extension — built with WXT + React — injects a Propreso
            panel directly into Upwork job listing pages. Freelancers can select
            a profile, choose a tone, and generate a proposal without leaving
            the job page.
          </p>
          <p>
            The extension communicates with the same API as the web app, sharing
            auth state via the Supabase session cookie. No separate login. No
            token duplication. The same token balance governs both surfaces.
          </p>
          <p>
            WXT was chosen over a manual webpack manifest setup for its
            first-class HMR support during development and automatic manifest v3
            compatibility — reducing extension-specific boilerplate to near
            zero.
          </p>
        </div>
      </div>

      {/* Challenges */}
      <div className="max-w-[780px] mx-auto px-6 pb-20 pt-4">
        <Divider />
        <SectionKicker number="08" label="Challenges & Learnings" />
        <h2 className="font-russo-one text-3xl text-foreground leading-tight mb-10">
          What I&apos;d do differently.
        </h2>

        <div className="space-y-8">
          {challenges.map((c, i) => (
            <div key={c.title} className="flex gap-5">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1e1414] border border-accent/20 flex items-center justify-center mt-0.5">
                <span className="font-source-code-pro text-[10px] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="font-squada-one text-base text-foreground tracking-wide uppercase mb-2">
                  {c.title}
                </h3>
                <p className="font-source-code-pro text-sm leading-7">{c.body}</p>
              </div>
            </div>
          ))}
        </div>

        <Divider />

        {/* Results */}
        <SectionKicker number="09" label="Results & Status" />
        <h2 className="font-russo-one text-3xl text-foreground leading-tight mb-6">
          Live and billing.
        </h2>
        <ul className="space-y-3 mb-16">
          {[
            "Live product at production URL with freemium model fully operational",
            "Stripe billing integrated — monthly and annual plans processing successfully",
            "Chrome extension published and available on the Chrome Web Store",
            "PostHog tracking proposal generation events, plan upgrades, and token limit hits",
          ].map((item) => (
            <li
              key={item}
              className="flex gap-3 font-source-code-pro text-sm leading-[1.7]"
            >
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

        <Divider />

        {/* Footer CTA */}
        <div className="text-center py-10">
          <p className="font-squada-one text-[10px] tracking-[0.2em] uppercase text-muted mb-4">
            Project
          </p>
          <h2 className="font-russo-one text-3xl text-foreground mb-2">
            Propreso
          </h2>
          <p className="font-source-code-pro text-sm text-muted mb-8">
            AI-powered proposal generation for Upwork freelancers.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-10">
            <a
              href="https://propreso.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-squada-one inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-foreground text-sm tracking-wider px-5 py-2.5 rounded-lg transition-colors uppercase"
            >
              View Live App
              <FiExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/ChrisOxygen/propreso-v2"
              target="_blank"
              rel="noopener noreferrer"
              className="font-squada-one inline-flex items-center gap-2 bg-surface border border-surface hover:border-accent text-foreground text-sm tracking-wider px-5 py-2.5 rounded-lg transition-colors uppercase"
            >
              View GitHub
              <FiGithub className="w-3.5 h-3.5" />
            </a>
            <a
              href="#"
              className="font-squada-one inline-flex items-center gap-2 bg-surface border border-surface hover:border-accent text-foreground text-sm tracking-wider px-5 py-2.5 rounded-lg transition-colors uppercase"
            >
              Chrome Extension
              <FiPackage className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://usechris.dev"
              className="font-squada-one inline-flex items-center gap-2 bg-surface border border-surface hover:border-accent text-foreground text-sm tracking-wider px-5 py-2.5 rounded-lg transition-colors uppercase"
            >
              Christopher Okafor
            </a>
          </div>

          <p className="font-source-code-pro text-[11px] text-muted/60 leading-relaxed">
            Built with Next.js, Supabase, Prisma, and the Vercel AI SDK.
            Deployed on Vercel.
          </p>
        </div>
      </div>
    </main>
  );
}
