"use client";

import { useState } from "react";
import {
  EXPERIENCE,
  type ExperienceEntry,
} from "@/shared/constants/experience";

export default function ExperienceSection() {
  const [selectedId, setSelectedId] = useState<string>(EXPERIENCE[0].id);

  const selected = EXPERIENCE.find(
    (e) => e.id === selectedId,
  ) as ExperienceEntry;

  return (
    <section id="experience" className="px-10 py-24">
      <div className="max-w-3xl mx-auto">
        {/* Section label */}
        <p className="font-squada-one text-xs text-accent uppercase tracking-[0.22em]">
          Experience
        </p>

        <h2 className="font-russo-one text-3xl md:text-4xl text-foreground leading-tight mt-3">
          Where I&apos;ve <span className="text-accent">worked.</span>
        </h2>

        {/* Two-panel layout */}
        <div className="mt-12 flex flex-col md:flex-row gap-0">
          {/* ── Left: company tab list ── */}
          <aside className="md:w-44 shrink-0 flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible">
            {EXPERIENCE.map((entry) => (
              <button
                key={entry.id}
                onClick={() => setSelectedId(entry.id)}
                className={[
                  "shrink-0 px-5 py-3 text-left font-source-code-pro text-sm transition-colors duration-150 whitespace-nowrap",
                  "md:border-l-2 border-b-2 md:border-b-0",
                  selectedId === entry.id
                    ? "border-accent text-accent bg-accent/5"
                    : "border-surface text-muted hover:text-foreground hover:border-foreground/20 hover:bg-surface/30",
                ].join(" ")}
              >
                {entry.company}
              </button>
            ))}
          </aside>

          {/* ── Right: detail panel ── */}
          <div className="flex-1 md:pl-12 pt-8 md:pt-0">
            {/* Role + company */}
            <h3 className="font-russo-one text-xl md:text-2xl text-foreground leading-snug">
              {selected.role}{" "}
              {selected.companyUrl ? (
                <a
                  href={selected.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-light transition-colors duration-150"
                >
                  @ {selected.company}
                </a>
              ) : (
                <span className="text-accent">@ {selected.company}</span>
              )}
            </h3>

            {/* Timeline */}
            <p className="mt-1.5 font-source-code-pro text-sm text-muted tracking-wide">
              {selected.timeline}
            </p>

            {/* Bullet points */}
            <ul className="mt-6 flex flex-col gap-3.5">
              {selected.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-[3px] shrink-0 text-accent text-xs leading-none"
                    aria-hidden="true"
                  >
                    ▶
                  </span>
                  <span className="font-source-code-pro text-sm text-foreground/70 leading-relaxed">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
