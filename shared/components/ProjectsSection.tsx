import { PROJECTS } from "@/shared/constants/projects";
import FeaturedProjectCard from "@/shared/components/FeaturedProjectCard";
import ProjectCard from "@/shared/components/ProjectCard";
import FadeIn from "@/shared/components/FadeIn";

const featuredProjects = PROJECTS.filter((p) => p.isFeatured);
const otherProjects = PROJECTS.filter((p) => !p.isFeatured);

export default function ProjectsSection() {
  return (
    <section
      id="work"
      className=" relative px-6 sm:px-12 -mt-40 sm:-mt-60 lg:mt-0 z-10"
    >
      <div className="w-full  lg:pb-20 pb-8 max-w-3xl lg:max-w-5xl mx-auto flex flex-col gap-12 sm:gap-24 ">
        {/* Section heading */}
        <FadeIn className="flex items-center gap-4">
          <h2 className="font-russo-one text-2xl md:text-3xl text-foreground whitespace-nowrap">
            Built to Ship
          </h2>
          <div className="h-px bg-accent flex-1" />
        </FadeIn>

        {/* Featured project cards */}
        <div className="flex flex-col gap-8 lg:gap-32">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.title}>
              <FeaturedProjectCard
                project={project}
                flipped={index % 2 !== 0}
              />
            </FadeIn>
          ))}
        </div>

        {/* Other noteworthy projects */}
        <div className="flex flex-col items-center gap-10">
          <FadeIn className="sm:text-center">
            <h3 className="font-russo-one text-xl text-foreground">
              Other Noteworthy Projects
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {otherProjects.map((project, index) => {
              const delays = ["", "delay-100", "delay-200", "delay-300"];
              return (
                <FadeIn
                  key={project.title}
                  delayClass={delays[index % delays.length]}
                >
                  <ProjectCard project={project} />
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
