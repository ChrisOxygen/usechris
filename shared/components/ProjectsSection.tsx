"use client";

import { PROJECTS } from "../constants";
import { useProjectCarousel } from "../hooks/useProjectCarousel";
import CarouselControls from "./projects/CarouselControls";
import ProjectCarousel from "./projects/ProjectCarousel";
import ProjectGrid from "./projects/ProjectGrid";

const RESPONSIVE_PADDING = "pr-4 sm:pr-8 md:pr-16 lg:pr-20";

function ProjectsSection() {
  const { emblaRef, scrollPrev, scrollNext } = useProjectCarousel();

  return (
    <section
      id="projects"
      className="w-full relative pl-4 sm:pl-8 py-16 md:pl-16 md:py-24 lg:pl-20 lg:py-30 border-b-2 sm:border-b-3 border-black dark:border-white flex flex-col gap-8 lg:gap-12"
    >
      <div className={`flex items-end justify-between ${RESPONSIVE_PADDING}`}>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-russo-one">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 w-full max-w-[1200px]">
            Recent work showcasing innovative solutions, quality craftsmanship,
            and modern development practices across various platforms.
          </p>
        </div>
        <CarouselControls
          onPrev={scrollPrev}
          onNext={scrollNext}
          className="hidden lg:flex"
        />
      </div>

      <ProjectCarousel projects={PROJECTS} emblaRef={emblaRef} />

      <CarouselControls
        onPrev={scrollPrev}
        onNext={scrollNext}
        className="hidden md:flex lg:hidden"
      />

      <ProjectGrid projects={PROJECTS} />
    </section>
  );
}

export default ProjectsSection;
