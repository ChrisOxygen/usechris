import { RiStarFill } from "react-icons/ri";
import { PiQuotesBold } from "react-icons/pi";
import { Testimonial } from "@/shared/constants/testimonials";

type Props = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="relative flex-1 flex flex-col p-6 sm:p-10 rounded-md bg-[#141414] justify-center min-h-[320px] sm:min-h-[420px] overflow-hidden">
      {/* Watermark */}
      <span
        aria-hidden="true"
        className="absolute text-[300px] leading-0 -right-5 -top-18 opacity-5"
      >
        <PiQuotesBold />
      </span>

      {/* Content — outer div is re-mounted via key in parent to replay animation */}
      <div className="relative z-10 testimonial-fade-in  sm:pr-14">
        <blockquote className="font-russo-one text-xl md:text-2xl lg:text-[1.65rem] text-foreground leading-snug">
          {testimonial.testimonial}
        </blockquote>

        <p className="mt-4 font-source-code-pro text-sm text-muted leading-relaxed max-w-md">
          {testimonial.description}
        </p>

        <div className="mt-8 flex items-end justify-between">
          <div>
            <p className="font-squada-one text-foreground text-base tracking-wide">
              {testimonial.name}
            </p>
            <p className="font-source-code-pro text-xs text-muted mt-0.5">
              {testimonial.role}
            </p>
          </div>

          <div className="flex gap-1">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
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
  );
}
