"use client";

import { useState } from "react";
import { RiPencilLine } from "react-icons/ri";
import { TESTIMONIALS } from "@/shared/constants/testimonials";
import TestimonialImageStack from "./TestimonialImageStack";
import TestimonialCard from "./TestimonialCard";

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
    <section id="testimonials" className="px-12 pb-16 pt-24">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2">
            <p className="font-squada-one text-xs text-accent uppercase tracking-[0.22em]">
              Words From People Who&apos;ve Seen The Work
            </p>
          </div>
          <h2 className="font-russo-one text-3xl md:text-4xl text-foreground leading-tight mt-3">
            Don&apos;t Take My Word For It
          </h2>
          <p className="mt-3 font-source-code-pro text-sm text-muted max-w-lg leading-relaxed">
            Real results speak louder than promises. Here&apos;s what clients
            and collaborators have to say after working with me.
          </p>
        </div>

        {/* Two-panel layout */}
        <div className="mt-12 max-w-3xl flex mx-auto gap-5 items-stretch">
          <TestimonialImageStack
            visibleItems={visibleItems}
            activeInWindow={activeInWindow}
            onSelect={handleSelect}
          />
          {/* key swap re-mounts the card, replaying the fade-in animation */}
          <TestimonialCard key={fadeKey} testimonial={active} />
        </div>
      </div>
    </section>
  );
}
