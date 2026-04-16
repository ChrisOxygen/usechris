import Image from "next/image";
import Link from "next/link";
import BookingTrigger from "@/shared/components/BookingTrigger";

export default function HeroSection() {
  return (
    <section id="hero" className="px-6 sm:px-12 grid grid-rows-[4rem_1fr] ">
      {/* Row 1 — nav placeholder (matches NavMenu h-16) */}
      <div aria-hidden="true" />

      {/* Row 2 — hero content */}
      <div className="w-full py-16 max-w-2xl lg:max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-50 items-center">
        {/* ── Left Column ── */}
        <div className="flex flex-col items-center gap-8 lg:items-start">
          {/* Main heading */}
          <h1 className="font-russo-one text-center lg:text-left text-3xl min-[420px]:text-4xl md:text-5xl  leading-[1.08] tracking-tight text-foreground">
            I turn complex
            <br /> ideas into{" "}
            <span className="text-accent">working software.</span>
          </h1>

          {/* Description */}
          <div className="flex flex-col gap-2 items-center sm:items-start">
            {/* Mobile stack — individual tags so nothing breaks mid-word */}
            {/* <div className="flex hidden flex-wrap justify-center gap-2">
              {["Next.js", "React", "TypeScript", "Supabase"].map((tech) => (
                <span
                  key={tech}
                  className="font-source-code-pro  text-[0.65rem] text-muted tracking-[0.18em] uppercase border border-muted/20 rounded px-2 py-0.5"
                >
                  {tech}
                </span>
              ))}
            </div> */}

            {/* sm+ — single dot-separated line */}
            <p className="hidden sm:block font-source-code-pro text-xs text-muted tracking-[0.2em] uppercase">
              Next.js · React · TypeScript · Supabase
            </p>

            <p className="font-source-code-pro max-w-[300px] sm:max-w-full text-sm text-foreground/60 leading-relaxed text-center sm:text-left">
              3+ years. 5 production apps. 1,000+ real users.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-5 flex-wrap">
            <Link
              href="#projects"
              className="px-5 py-2.5 rounded-lg border border-accent text-accent font-squada-one text-base tracking-wide hover:bg-accent hover:text-foreground transition-all duration-200"
            >
              See my work
            </Link>
            <Link
              href="#about"
              className="px-5 py-2.5 rounded-lg font-squada-one text-base text-muted tracking-wide hover:text-foreground transition-colors duration-200"
            >
              Download Resume
            </Link>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <div className="flex flex-col items-center gap-1 pl-1 pr-6">
                <span className="font-russo-one text-2xl leading-none text-foreground">
                  500+
                </span>
                <div className="flex flex-col items-center">
                  <span className="font-squada-one text-[0.6rem] text-muted uppercase tracking-[0.16em] text-center">
                    Invoices
                  </span>
                  <span className="font-squada-one text-[0.6rem] text-muted uppercase tracking-[0.16em] text-center">
                    via Invox
                  </span>
                </div>
              </div>

              <div className="w-px self-stretch bg-accent/40" />

              <div className="flex flex-col items-center gap-1 px-6">
                <span className="font-russo-one text-2xl leading-none text-foreground">
                  3+
                </span>
                <div className="flex flex-col items-center">
                  <span className="font-squada-one text-[0.6rem] text-muted uppercase tracking-[0.16em] text-center">
                    years of
                  </span>
                  <span className="font-squada-one text-[0.6rem] text-muted uppercase tracking-[0.16em] text-center">
                    experience
                  </span>
                </div>
              </div>

              <div className="w-px self-stretch bg-accent/40" />

              <div className="flex flex-col items-center gap-1 px-6">
                <span className="font-russo-one text-2xl leading-none text-foreground">
                  50+
                </span>
                <div className="flex flex-col items-center">
                  <span className="font-squada-one text-[0.6rem] text-muted uppercase tracking-[0.16em] text-center">
                    propreso
                  </span>
                  <span className="font-squada-one text-[0.6rem] text-muted uppercase tracking-[0.16em] text-center">
                    Active Users
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right Column ── */}
        <div className="relative w-full max-w-120 mx-auto lg:max-w-none">
          {/* Image frame */}
          <div className="relative w-full aspect-square lg:aspect-3/4 rounded-2xl">
            <Image
              src="/assets/hero-chris-okafor.webp"
              alt="Chris Okafor — Full-Stack Developer"
              width={600}
              height={800}
              priority
            />

            {/* Gradient overlay for card legibility */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(11,8,8,0.95) 0%, rgba(11,8,8,0.5) 28%, transparent 55%)",
              }}
            />

            {/* Mobile-only: aggressive bottom fade so image disappears below the CTA */}
            <div className="lg:hidden absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-background via-background/85 to-transparent pointer-events-none" />
          </div>

          {/* ── Overlay card — centered on mobile, bottom-right bleed on lg ── */}
          <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-full max-w-[350px] lg:mr-0  lg:bottom-8 lg:left-16 lg:-right-8 lg:w-auto lg:translate-x-0 bg-surface/80 backdrop-blur-md border border-foreground/10 rounded-xl pl-3 pr-2 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-0.5">
                <span className="font-squada-one text-[0.55rem] text-muted uppercase tracking-[0.18em]">
                  Response time
                </span>
                <span className="font-russo-one text-foreground text-base leading-tight">
                  &lt; 24 hrs
                </span>
              </div>

              <div className="w-px self-stretch bg-foreground/10" />

              <div className="flex flex-col gap-0.5">
                <span className="font-squada-one text-[0.55rem] text-muted uppercase tracking-[0.18em]">
                  Currently
                </span>
                <span className="font-russo-one text-accent text-base leading-tight">
                  Available
                </span>
              </div>
            </div>

            <BookingTrigger className="shrink-0 px-4 py-2 bg-accent hover:bg-accent-light text-foreground font-squada-one text-sm tracking-wide rounded-lg transition-colors duration-200 whitespace-nowrap">
              Book a call
            </BookingTrigger>
          </div>
        </div>
      </div>
    </section>
  );
}
