import Image from "next/image";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Testimonial } from "@/shared/constants/testimonials";
import { avatarPath } from "./lib/avatarPath";

type Props = {
  visibleItems: (Testimonial | null)[];
  activeInWindow: number;
  onSelect: (windowPos: number) => void;
  hasLeft: boolean;
  hasRight: boolean;
};

export default function TestimonialImageRow({
  visibleItems,
  activeInWindow,
  onSelect,
  hasLeft,
  hasRight,
}: Props) {
  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      {/* Left indicator */}
      <div className="w-6 shrink-0 flex justify-center">
        {hasLeft && (
          <RiArrowLeftSLine
            size={20}
            className="text-muted"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-3 items-end">
        {visibleItems.map((item, pos) => {
          if (!item) return <div key={pos} className="w-14 h-16" />;
          const isActive = pos === activeInWindow;
          return (
            <button
              key={item.id}
              onClick={() => onSelect(pos)}
              aria-label={`View testimonial from ${item.name}`}
              className={[
                "relative overflow-hidden rounded-sm transition-all duration-400 cursor-pointer shrink-0",
                isActive
                  ? "w-16 h-20 opacity-100 ring-2 ring-accent/50"
                  : "w-14 h-20 opacity-35 hover:opacity-55",
              ].join(" ")}
            >
              <Image
                src={avatarPath(item.name)}
                alt={item.name}
                fill
                className="object-cover object-top"
              />
            </button>
          );
        })}
      </div>

      {/* Right indicator */}
      <div className="w-6 shrink-0 flex justify-center">
        {hasRight && (
          <RiArrowRightSLine
            size={20}
            className="text-muted"
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
}
