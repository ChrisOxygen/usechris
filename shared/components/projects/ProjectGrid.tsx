import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  coverImage: string;
  liveLink: string;
  githubRepo: string;
  tools: string[];
}

interface ProjectGridProps {
  projects: Project[];
}

const RESPONSIVE_PADDING = "pr-6 sm:pr-8 md:pr-16 lg:pr-20";

function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className={`flex flex-col gap-8 ${RESPONSIVE_PADDING} md:hidden`}>
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          project={project}
          showTools={true}
          imageHeight="h-[200px] sm:h-[280px]"
        />
      ))}
    </div>
  );
}

export default ProjectGrid;
