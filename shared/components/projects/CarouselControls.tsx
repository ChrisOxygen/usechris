import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface CarouselControlsProps {
  onPrev: () => void;
  onNext: () => void;
  className?: string;
}

function CarouselControls({
  onPrev,
  onNext,
  className = "",
}: CarouselControlsProps) {
  return (
    <div className={`flex gap-6 items-center shrink-0 ${className}`}>
      <button
        className="size-12 sm:size-14 md:size-16 cursor-pointer rounded-full border-2 sm:border-3 border-black dark:border-white flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all"
        onClick={onPrev}
      >
        <FaChevronLeft className="size-4 sm:size-5 md:size-6" />
      </button>
      <button
        className="size-12 sm:size-14 md:size-16 cursor-pointer rounded-full border-2 sm:border-3 border-black dark:border-white flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all"
        onClick={onNext}
      >
        <FaChevronRight className="size-4 sm:size-5 md:size-6" />
      </button>
    </div>
  );
}

export default CarouselControls;
