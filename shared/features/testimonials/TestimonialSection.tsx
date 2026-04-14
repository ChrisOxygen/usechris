"use client";

import { useState } from "react";
import Image from "next/image";
import { RiStarFill, RiPencilLine } from "react-icons/ri";
import { TESTIMONIALS } from "@/shared/constants/testimonials";
import { PiQuotesBold } from "react-icons/pi";

function avatarPath(name: string) {
  return `/assets/${name.replace(/\s+/g, "").toLowerCase()}.webp`;
}

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [windowStart, setWindowStart] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);

  const total = TESTIMONIALS.length;
  const active = TESTIMONIALS[activeIndex];
  const activeInWindow = activeIndex - windowStart;

  const visibleItems = Array.from({ length: 3 }, (_, i) => {
    const idx = windowStart + i;
    return idx < total ? TESTIMONIALS[idx] : null;
  });

  function handleSelect(windowPos: number) {
    const newActive = windowStart + windowPos;
    if (newActive < 0 || newActive >= total) return;
    if (newActive === activeIndex) return;

    const newStart = Math.max(0, Math.min(newActive - 1, total - 3));

    setFadeKey((k) => k + 1);
    setActiveIndex(newActive);
    setWindowStart(newStart);
  }

  return (
    <section id="testimonials" className="px-10 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2">
            <RiPencilLine
              className="text-accent"
              size={13}
              aria-hidden="true"
            />
            <p className="font-squada-one text-xs text-accent uppercase tracking-[0.22em]">
              Words From People Who&apos;ve Seen The Work
            </p>
          </div>
          <h2 className="font-russo-one text-3xl md:text-4xl text-foreground leading-tight mt-3">
            Don&apos;t Take My Word For It
          </h2>
          <p className="mt-3 font-source-code-pro text-sm text-muted max-w-sm leading-relaxed">
            Real results speak louder than promises. Here&apos;s what clients
            and collaborators have to say after working with me.
          </p>
        </div>

        {/* Two-panel layout */}
        <div className="mt-12 max-w-3xl flex mx-auto gap-5 items-stretch">
          {/* ── Left: image stack ── */}
          <div className="w-24 md:w-52 shrink-0 flex flex-col h-[420px] gap-2">
            {visibleItems.map((item, pos) => {
              if (!item) return <div key={pos} className="flex-1" />;
              const isActive = pos === activeInWindow;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(pos)}
                  aria-label={`View testimonial from ${item.name}`}
                  className={[
                    "relative w-full overflow-hidden rounded-sm transition-all duration-500 ease-in-out cursor-pointer",
                    isActive ? "flex-[2]" : "flex-[1]",
                    isActive
                      ? "opacity-100 ring-3 ring-accent/40"
                      : "opacity-40 hover:opacity-60",
                  ].join(" ")}
                >
                  <Image
                    src="/assets/chris-okafor-about-3.webp"
                    alt={item.name}
                    fill
                    className="object-cover object-top"
                    sizes="112px"
                  />
                </button>
              );
            })}
          </div>

          {/* ── Right: testimonial content ── */}
          <div className="relative flex-1 flex flex-col p-10 rounded-md bg-background justify-center min-h-[420px] overflow-hidden">
            {/* Watermark — active person's name */}
            <span
              aria-hidden="true"
              className="absolute text-[300px] leading-0  -right-5 -top-18 opacity-5"
            >
              <PiQuotesBold />
            </span>

            {/* Fading content block — key swap triggers re-mount → CSS animation */}
            <div
              key={fadeKey}
              className="relative z-10 testimonial-fade-in pr-14"
            >
              <blockquote className="font-russo-one text-xl md:text-2xl lg:text-[1.65rem] text-foreground leading-snug">
                {active.testimonial}
              </blockquote>

              <p className="mt-4 font-source-code-pro text-sm text-muted leading-relaxed max-w-md">
                {active.description}
              </p>

              <div className="mt-8 flex items-end justify-between">
                <div>
                  <p className="font-squada-one text-foreground text-base tracking-wide">
                    {active.name}
                  </p>
                  <p className="font-source-code-pro text-xs text-muted mt-0.5">
                    {active.role}
                  </p>
                </div>

                <div className="flex gap-1">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <RiStarFill
                      key={i}
                      className="text-accent"
                      size={13}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>

              <div className="mt-6 h-px w-full bg-surface" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
