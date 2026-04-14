import { RiCalendar2Line, RiArrowRightLine } from "react-icons/ri";

export default function CTASection() {
  return (
    <section id="contact" className="relative px-10 pb-32 overflow-hidden">
      {/* Ambient red radial glow — draws the eye toward the column */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(220,53,69,0.07)_0%,transparent_70%)]"
      />

      <div className="relative max-w-5xl mx-auto">
        {/* ── Centered column ── */}
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
          {/* Section label */}
          <div className="flex items-center gap-2">
            <p className="font-squada-one text-xs text-accent uppercase tracking-[0.22em]">
              Available for New Projects
            </p>
          </div>

          {/* Headline */}
          <h2 className="mt-5 font-russo-one text-4xl md:text-5xl xl:text-[3.25rem] leading-[1.1] tracking-tight text-foreground text-balance">
            Let&apos;s talk about what you&apos;re building.
          </h2>

          {/* Supporting line */}
          <p className="mt-6 font-source-code-pro text-sm text-muted leading-relaxed max-w-lg text-pretty">
            Whether it&apos;s a product that needs shipping, a team that needs a
            developer, or an idea that needs shape I&apos;d love to hear about
            it. Pick a time, and let&apos;s figure it out together.
          </p>

          {/* Primary CTA button */}
          <a
            href="#"
            className="group mt-10 inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-light text-foreground font-squada-one text-base tracking-widest rounded-xl transition-all duration-200"
          >
            Book a Free Call
            <RiArrowRightLine
              size={16}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>

          {/* Vertical pip — separates primary from secondary tier */}
          <div className="mt-12 w-px h-8 bg-foreground/10" aria-hidden="true" />

          {/* Secondary text */}
          <p className="mt-5 font-source-code-pro text-xs text-muted leading-relaxed max-w-xs">
            Not ready to hop on a call? No pressure. Drop me a line and
            I&apos;ll get back to you.
          </p>

          {/* Secondary links */}
          <div className="mt-4 flex items-center gap-2 font-squada-one text-sm tracking-wide">
            <a
              href="mailto:chris@usechris.dev"
              className="text-muted hover:text-foreground transition-colors duration-200 underline underline-offset-4 decoration-muted/30 hover:decoration-foreground/50"
            >
              chris@email.com
            </a>
            <span className="text-muted/30 select-none" aria-hidden="true">
              ·
            </span>
            <a
              href="https://www.linkedin.com/in/christopher-okafor-17084416b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors duration-200 underline underline-offset-4 decoration-muted/30 hover:decoration-foreground/50"
            >
              LinkedIn
            </a>
            <span className="text-muted/30 select-none" aria-hidden="true">
              ·
            </span>
            <a
              href="https://x.com/chris_okafor_x"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors duration-200 underline underline-offset-4 decoration-muted/30 hover:decoration-foreground/50"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
