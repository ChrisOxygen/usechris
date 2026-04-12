"use client";

import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-04-24T00:00:00Z");

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function getTimeLeft(): TimeLeft {
  const diff = TARGET_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

const BOOT_LINES = [
  "> INITIALIZING SYSTEM...",
  "> LOADING CORE MODULES............. [OK]",
  "> MOUNTING FILE SYSTEM............. [OK]",
  "> ESTABLISHING SECURE CONNECTION... [OK]",
  "> COMPILING NEW PORTFOLIO........... [PENDING]",
  "> STATUS: UNDER CONSTRUCTION",
];

const STATIC_TIME: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

export default function ComingSoon() {
  // mounted guard — prevents SSR/client hydration mismatch for time-dependent values
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(STATIC_TIME);
  const [visibleLines, setVisibleLines] = useState(0);
  const [cursor, setCursor] = useState(true);
  const [glitch, setGlitch] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // All effects run only on the client — safe from hydration mismatch
  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeLeft());

    // Countdown ticker
    const ticker = setInterval(() => setTimeLeft(getTimeLeft()), 1000);

    // Boot log reveal
    let i = 0;
    const bootTimer = setInterval(() => {
      i++;
      setVisibleLines(i);
      if (i >= BOOT_LINES.length) clearInterval(bootTimer);
    }, 420);

    // Cursor blink
    const cursorTimer = setInterval(() => setCursor((c) => !c), 530);

    // Glitch fires
    let glitchTimeout: ReturnType<typeof setTimeout>;
    const scheduleGlitch = () => {
      glitchTimeout = setTimeout(
        () => {
          setGlitch(true);
          setTimeout(() => setGlitch(false), 140);
          scheduleGlitch();
        },
        3000 + Math.random() * 6000,
      );
    };
    scheduleGlitch();

    return () => {
      clearInterval(ticker);
      clearInterval(bootTimer);
      clearInterval(cursorTimer);
      clearTimeout(glitchTimeout);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <>
      <style>{`
        .cs-root {
          min-height: 100vh;
          background: #050505;
          color: #00ff41;
          font-family: var(--font-source-code-pro), 'Courier New', monospace;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.5rem;
        }

        /* Scanlines */
        .cs-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.18) 2px,
            rgba(0,0,0,0.18) 4px
          );
          pointer-events: none;
          z-index: 10;
        }

        .cs-grid-bg {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,255,65,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,65,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          z-index: 0;
        }

        .cs-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 780px;
          border: 2px solid #00ff41;
          box-shadow: 0 0 0 1px rgba(0,255,65,0.15), 0 0 40px rgba(0,255,65,0.08);
          padding: 2.5rem 2rem;
          animation: flicker-in 0.8s ease forwards;
        }

        @media (min-width: 640px) {
          .cs-inner { padding: 3.5rem 3rem; }
        }

        .cs-corner {
          position: absolute;
          width: 16px;
          height: 16px;
          border-color: #00ff41;
          border-style: solid;
        }
        .cs-corner-tl { top: -2px; left: -2px; border-width: 2px 0 0 2px; }
        .cs-corner-tr { top: -2px; right: -2px; border-width: 2px 2px 0 0; }
        .cs-corner-bl { bottom: -2px; left: -2px; border-width: 0 0 2px 2px; }
        .cs-corner-br { bottom: -2px; right: -2px; border-width: 0 2px 2px 0; }

        .cs-badge {
          font-size: 0.68rem;
          letter-spacing: 0.22em;
          color: #050505;
          background: #00ff41;
          display: inline-block;
          padding: 3px 10px;
          margin-bottom: 1.6rem;
          text-transform: uppercase;
        }

        .cs-title {
          font-family: var(--font-russo-one), monospace;
          font-size: clamp(2.8rem, 8vw, 6rem);
          line-height: 0.92;
          letter-spacing: -0.02em;
          color: #ffffff;
          text-transform: uppercase;
          margin-bottom: 0.4rem;
        }

        .cs-title.glitch {
          animation: glitch-anim 0.14s steps(2) forwards;
        }

        @keyframes glitch-anim {
          0%   { text-shadow: 3px 0 #ff003c, -3px 0 #00fff9; }
          33%  { text-shadow: -3px 0 #ff003c, 3px 0 #00fff9; }
          66%  { text-shadow: 3px 2px #ff003c, -3px -2px #00fff9; }
          100% { text-shadow: none; }
        }

        .cs-subtitle {
          font-size: clamp(1rem, 3vw, 1.5rem);
          color: #00ff41;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 2.5rem;
        }

        .cs-divider {
          border: none;
          border-top: 1px solid rgba(0,255,65,0.3);
          margin: 1.8rem 0;
        }

        .cs-log {
          font-size: 0.78rem;
          line-height: 1.9;
          letter-spacing: 0.05em;
          color: rgba(0,255,65,0.7);
          margin-bottom: 2rem;
          min-height: 8.5rem;
        }

        .cs-log-line { display: block; }
        .cs-log-line.ok { color: #00ff41; }
        .cs-log-line.pending { color: #ffcc00; }

        .cs-cursor {
          display: inline-block;
          width: 9px;
          height: 1em;
          background: #00ff41;
          vertical-align: text-bottom;
          margin-left: 2px;
        }

        .cs-countdown {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .cs-unit {
          text-align: center;
          border: 1px solid rgba(0,255,65,0.3);
          padding: 1rem 0.5rem 0.8rem;
          position: relative;
          background: rgba(0,255,65,0.03);
        }

        .cs-unit::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00ff41, transparent);
          opacity: 0.5;
        }

        .cs-unit-value {
          font-family: var(--font-russo-one), monospace;
          font-size: clamp(1.8rem, 5vw, 3rem);
          color: #ffffff;
          display: block;
          line-height: 1;
          margin-bottom: 0.4rem;
          letter-spacing: 0.04em;
        }

        .cs-unit-label {
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          color: rgba(0,255,65,0.55);
          text-transform: uppercase;
        }

        .cs-form {
          display: flex;
          gap: 0;
          margin-bottom: 2rem;
        }

        .cs-input {
          flex: 1;
          background: transparent;
          border: 1px solid rgba(0,255,65,0.5);
          border-right: none;
          color: #00ff41;
          font-family: inherit;
          font-size: 0.8rem;
          letter-spacing: 0.06em;
          padding: 0.7rem 1rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .cs-input::placeholder { color: rgba(0,255,65,0.3); }
        .cs-input:focus { border-color: #00ff41; }

        .cs-btn {
          background: #00ff41;
          color: #050505;
          border: none;
          font-family: var(--font-russo-one), monospace;
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 0.7rem 1.2rem;
          cursor: pointer;
          transition: background 0.15s;
        }
        .cs-btn:hover { background: #ffffff; }

        .cs-submitted {
          font-size: 0.78rem;
          color: #00ff41;
          letter-spacing: 0.08em;
          margin-bottom: 2rem;
          padding: 0.7rem 1rem;
          border: 1px solid rgba(0,255,65,0.4);
          background: rgba(0,255,65,0.06);
        }

        .cs-links {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          color: rgba(0,255,65,0.55);
        }
        .cs-links a {
          color: rgba(0,255,65,0.55);
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.15s;
          border-bottom: 1px solid transparent;
        }
        .cs-links a:hover {
          color: #00ff41;
          border-bottom-color: rgba(0,255,65,0.4);
        }

        .cs-footer-bar {
          margin-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: rgba(0,255,65,0.35);
          text-transform: uppercase;
          border-top: 1px solid rgba(0,255,65,0.15);
          padding-top: 1rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .cs-side-label {
          position: fixed;
          right: 1.5rem;
          top: 50%;
          transform: translateY(-50%) rotate(90deg);
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          color: rgba(0,255,65,0.2);
          text-transform: uppercase;
          white-space: nowrap;
          z-index: 2;
        }

        @keyframes flicker-in {
          0%   { opacity: 0; }
          10%  { opacity: 0.8; }
          12%  { opacity: 0.1; }
          20%  { opacity: 0.9; }
          22%  { opacity: 0.3; }
          30%  { opacity: 1; }
          100% { opacity: 1; }
        }
      `}</style>

      <div className="cs-root">
        <div className="cs-grid-bg" />
        <span className="cs-side-label">usechris.dev // portfolio v2.0</span>

        <div className="cs-inner">
          <div className="cs-corner cs-corner-tl" />
          <div className="cs-corner cs-corner-tr" />
          <div className="cs-corner cs-corner-bl" />
          <div className="cs-corner cs-corner-br" />

          <span className="cs-badge">// System Status: Under Construction</span>

          <h1 className={`cs-title${glitch ? " glitch" : ""}`}>
            COMING
            <br />
            SOON
          </h1>
          <p className="cs-subtitle">&gt; Chris Okafor — Portfolio V2</p>

          <hr className="cs-divider" />

          {/* Boot log — only rendered on client after mount */}
          <div className="cs-log">
            {mounted &&
              BOOT_LINES.slice(0, visibleLines).map((line, i) => (
                <span
                  key={i}
                  className={`cs-log-line ${line.includes("[PENDING]") ? "pending" : "ok"}`}
                >
                  {line}
                </span>
              ))}
            {mounted && visibleLines < BOOT_LINES.length && (
              <span className="cs-log-line ok">
                &gt;{" "}
                <span className="cs-cursor" style={{ opacity: cursor ? 1 : 0 }} />
              </span>
            )}
            {mounted && visibleLines >= BOOT_LINES.length && (
              <span className="cs-log-line" style={{ color: "rgba(0,255,65,0.4)" }}>
                &gt;{" "}
                <span className="cs-cursor" style={{ opacity: cursor ? 1 : 0 }} />
              </span>
            )}
          </div>

          {/* Countdown — shows zeros on SSR, real values after mount */}
          <div className="cs-countdown">
            {(["days", "hours", "minutes", "seconds"] as const).map((unit) => (
              <div className="cs-unit" key={unit}>
                <span className="cs-unit-value">{pad(timeLeft[unit])}</span>
                <span className="cs-unit-label">{unit}</span>
              </div>
            ))}
          </div>

          {/* Email capture */}
          {!submitted ? (
            <form className="cs-form" onSubmit={handleSubmit}>
              <input
                className="cs-input"
                type="email"
                placeholder="enter_email@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="cs-btn" type="submit">
                Notify_Me
              </button>
            </form>
          ) : (
            <div className="cs-submitted">
              [✓] ACCESS_GRANTED — you&apos;ll be notified on launch.
            </div>
          )}

          <div className="cs-links">
            <a
              href="https://github.com/christopher-okafor"
              target="_blank"
              rel="noopener noreferrer"
            >
              [GitHub]
            </a>
            <a
              href="https://www.linkedin.com/in/christopher-okafor-17084416b"
              target="_blank"
              rel="noopener noreferrer"
            >
              [LinkedIn]
            </a>
            <a href="mailto:hello@usechris.dev">[Email]</a>
          </div>

          <div className="cs-footer-bar">
            <span>© 2025 Chris Okafor</span>
            <span>Full-Stack Developer</span>
            <span>Port Harcourt, Nigeria</span>
          </div>
        </div>
      </div>
    </>
  );
}
