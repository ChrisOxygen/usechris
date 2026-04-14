"use client";

import { useInView } from "@/shared/hooks/useInView";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  /** Tailwind delay utility, e.g. "delay-100", "delay-200" */
  delayClass?: string;
}

export default function FadeIn({
  children,
  className = "",
  delayClass = "",
}: FadeInProps) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={[
        "transition-[opacity,transform] duration-700 ease-out",
        "motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        delayClass,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
