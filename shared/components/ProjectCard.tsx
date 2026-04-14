import { FiFolder, FiGithub, FiExternalLink } from "react-icons/fi";
import type { Project } from "@/shared/constants/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-surface rounded-sm min-h-[240px] md:min-h-[300px] p-6 flex flex-col gap-4 border border-white/5 hover:border-accent/20 hover:-translate-y-1 transition-all duration-200 group">
      {/* Top row — folder icon + links */}
      <div className="flex items-center justify-between">
        <FiFolder size={28} className="text-accent" />
        <div className="flex items-center gap-3">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="text-muted hover:text-foreground transition-colors"
            >
              <FiGithub size={18} />
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live site`}
              className="text-muted hover:text-foreground transition-colors"
            >
              <FiExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Title + description */}
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="font-russo-one text-base text-foreground group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="font-source-code-pro text-xs text-muted leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Tools */}
      {project.tools && project.tools.length > 0 && (
        <ul className="flex flex-wrap gap-x-4 gap-y-1 mt-auto pt-2">
          {project.tools.map((tool) => (
            <li
              key={tool}
              className="font-source-code-pro text-[11px] text-muted/70"
            >
              {tool}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
