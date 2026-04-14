import { PROJECTS } from "@/shared/constants/projects";
import FeaturedProjectCard from "@/shared/components/FeaturedProjectCard";
import ProjectCard from "@/shared/components/ProjectCard";

const PLACEHOLDER_IMAGES = [
  "/assets/projects-cover/Dictionary-Web-App-Case-Study-react-API-2.jpg",
  "/assets/projects-cover/modern-financial-services-website-built-with-React-and-SASS.jpg",
];

const featuredProjects = PROJECTS.filter((p) => p.isFeatured);
const otherProjects = PROJECTS.filter((p) => !p.isFeatured);

export default function ProjectsSection() {
  return (
    <section id="work" className=" relative px-12  -mt-60 z-10">
      <div className="w-full py-24 max-w-3xl lg:max-w-5xl mx-auto flex flex-col gap-24 pb-40">
        {/* Section heading */}
        <div className="flex items-center gap-4">
          <h2 className="font-russo-one text-2xl md:text-3xl text-foreground whitespace-nowrap">
            Built to Ship
          </h2>
          <div className="h-px bg-accent flex-1" />
        </div>

        {/* Featured project cards */}
        <div className="flex flex-col gap-8 lg:gap-32">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard
              key={project.title}
              project={project}
              imageSrc={PLACEHOLDER_IMAGES[index % PLACEHOLDER_IMAGES.length]}
              flipped={index % 2 !== 0}
            />
          ))}
        </div>

        {/* Other noteworthy projects */}
        <div className="flex flex-col items-center gap-10">
          <div className="text-center">
            <h3 className="font-russo-one text-xl text-foreground">
              Other Noteworthy Projects
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {otherProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
