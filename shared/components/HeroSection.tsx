import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-24 pb-16 px-6 md:px-12 lg:px-20 flex items-center bg-linear-to-tr from-[#130202] via-background to-[#130202]"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-50 items-center">
        {/* ── Left Column ── */}
        <div className="flex flex-col gap-8 items-start">
          {/* Main heading */}
          <h1 className="font-russo-one text-4xl md:text-5xl xl:text-[4.5rem] leading-[1.08] tracking-tight text-foreground">
            I turn complex
            <br /> ideas into{" "}
            <span className="text-accent">working software.</span>
          </h1>

          {/* Description */}
          <div className="flex flex-col gap-1.5">
            <p className="font-source-code-pro text-xs text-muted tracking-[0.2em] uppercase">
              Next.js · React · TypeScript · Supabase
            </p>
            <p className="font-source-code-pro text-sm text-foreground/60 leading-relaxed">
              3+ years. 5 production apps. 1,000+ real users.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-5 flex-wrap">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-lg border border-accent text-accent font-squada-one text-base tracking-wide hover:bg-accent hover:text-foreground transition-all duration-200"
            >
              See my work.
            </a>
            <a
              href="#about"
              className="px-5 py-2.5 rounded-lg font-squada-one text-base text-muted tracking-wide hover:text-foreground transition-colors duration-200"
            >
              Learn more.
            </a>
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
        <div className="relative w-full">
          {/* Image frame */}
          <div className="relative w-full aspect-3/4 rounded-2xl">
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
          </div>

          {/* ── Bottom overlay card — lives outside overflow-hidden so it can bleed right ── */}
          <div className="absolute bottom-8 left-16 -right-8 bg-surface/80 backdrop-blur-md border border-foreground/10 rounded-xl px-3 py-3 flex items-center justify-between gap-4">
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

            <a
              href="#contact"
              className="shrink-0 px-4 py-2 bg-accent hover:bg-accent-light text-foreground font-squada-one text-sm tracking-wide rounded-lg transition-colors duration-200 whitespace-nowrap"
            >
              Book a call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
