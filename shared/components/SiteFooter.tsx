import { RiMailLine, RiLinkedinBoxLine, RiTwitterXLine } from "react-icons/ri";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-10 py-8 border-t border-foreground/[0.06]">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">

        {/* Copyright */}
        <p className="font-squada-one text-xs text-muted tracking-[0.15em] uppercase">
          © {year} Chris Okafor
        </p>

        {/* Social links */}
        <div className="flex items-center gap-5">
          <a
            href="mailto:chris@usechris.dev"
            aria-label="Email"
            className="text-muted hover:text-foreground transition-colors duration-200"
          >
            <RiMailLine size={16} aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/christopher-okafor-17084416b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-foreground transition-colors duration-200"
          >
            <RiLinkedinBoxLine size={16} aria-hidden="true" />
          </a>
          <a
            href="https://x.com/chris_okafor_x"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (formerly Twitter)"
            className="text-muted hover:text-foreground transition-colors duration-200"
          >
            <RiTwitterXLine size={16} aria-hidden="true" />
          </a>
        </div>

      </div>
    </footer>
  );
}
