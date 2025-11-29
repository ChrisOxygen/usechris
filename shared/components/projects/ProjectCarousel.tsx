"use client";

import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  coverImage: string;
  liveLink: string;
  githubRepo: string;
  tools: string[];
}

interface ProjectCarouselProps {
  projects: Project[];
  emblaRef: (node: HTMLDivElement | null) => void;
}

function ProjectCarousel({ projects, emblaRef }: ProjectCarouselProps) {
  return (
    <div className="embla hidden! md:flex!" ref={emblaRef}>
      <div className="embla__container">
        {projects.map((project) => (
          <div key={project.title} className="embla__slide h-full">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCarousel;
