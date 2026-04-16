import Image from "next/image";
import { Testimonial } from "@/shared/constants/testimonials";
import { avatarPath } from "./lib/avatarPath";

type Props = {
  visibleItems: (Testimonial | null)[];
  activeInWindow: number;
  onSelect: (windowPos: number) => void;
};

export default function TestimonialImageStack({
  visibleItems,
  activeInWindow,
  onSelect,
}: Props) {
  return (
    <div className="w-52 shrink-0 flex flex-col h-[420px] gap-2">
      {visibleItems.map((item, pos) => {
        if (!item) return <div key={pos} className="flex-1" />;
        const isActive = pos === activeInWindow;
        return (
          <button
            key={item.id}
            onClick={() => onSelect(pos)}
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
              src={avatarPath(item.name)}
              alt={item.name}
              fill
              sizes="208px"
              className="object-cover object-top"
            />
          </button>
        );
      })}
    </div>
  );
}
