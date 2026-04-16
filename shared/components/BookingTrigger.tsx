"use client";

import { useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import BookingModal from "@/shared/components/BookingModal";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export default function BookingTrigger({ className, children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={
          className ??
          "group mt-10 inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-light text-foreground font-squada-one text-base tracking-widest rounded-xl transition-all duration-200"
        }
      >
        {children ?? (
          <>
            Book a Free Call
            <RiArrowRightLine
              size={16}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </>
        )}
      </button>
      <BookingModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
