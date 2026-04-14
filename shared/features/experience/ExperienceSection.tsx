"use client";

import { useState } from "react";
import { RiArrowRightSFill } from "react-icons/ri";
import {
  EXPERIENCE,
  type ExperienceEntry,
} from "@/shared/constants/experience";
import ExperienceTabs from "@/shared/features/experience/ExperienceTabs";
import FadeIn from "@/shared/components/FadeIn";

export default function ExperienceSection() {
  const [selectedId, setSelectedId] = useState<string>(EXPERIENCE[0].id);

  const selected = EXPERIENCE.find(
    (e) => e.id === selectedId,
  ) as ExperienceEntry;

  return (
    <section id="experience" className="px-6 sm:px-12 py-18 lg:py-24">
      <div className="max-w-3xl mx-auto">
        {/* Section label + heading */}
        <FadeIn>
          <p className="font-squada-one text-xs text-accent uppercase tracking-[0.22em]">
            The Journey So Far
          </p>

          <h2 className="font-russo-one text-3xl min-[420px]:text-4xl text-foreground leading-tight mt-3">
            From <span className="text-accent">freelance gigs</span> to full
            products
          </h2>
        </FadeIn>

        {/* Mobile tab buttons */}
        <FadeIn delayClass="delay-100" className="md:hidden mt-12">
          <ExperienceTabs
            entries={EXPERIENCE}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </FadeIn>

        {/* Two-panel layout */}
        <FadeIn delayClass="delay-100" className="mt-8 md:mt-12 flex flex-col md:flex-row gap-0">
          {/* ── Left: company tab list (desktop only) ── */}
          <aside className="hidden md:flex md:w-44 shrink-0 flex-col">
            {EXPERIENCE.map((entry) => (
              <button
                key={entry.id}
                onClick={() => setSelectedId(entry.id)}
                className={[
                  "shrink-0 px-5 py-3 text-left font-source-code-pro text-sm transition-colors duration-150 whitespace-nowrap",
                  "border-l-2",
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
                  <RiArrowRightSFill
                    className="mt-[3px] shrink-0 text-accent"
                    size={16}
                    aria-hidden="true"
                  />
                  <span className="font-source-code-pro text-sm text-foreground/70 leading-relaxed">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
