import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  coverImage: string;
  liveLink: string;
  githubRepo: string;
  tools: string[];
}

interface ProjectCardProps {
  project: Project;
  showTools?: boolean;
  imageHeight?: string;
}

function ProjectCard({
  project,
  showTools = false,
  imageHeight = "h-[200px] lg:h-[280px]",
}: ProjectCardProps) {
  return (
    <div className="border-3 rounded-xl overflow-hidden border-black flex h-full flex-col">
      <div className="border-b-3 border-black overflow-hidden w-full">
        <Image
          src={`/assets/projects-cover/${project.coverImage}.jpg`}
          alt={project.title}
          width={800}
          height={800}
          className={`object-cover object-top w-full ${imageHeight} hover:scale-105 transition-all`}
        />
      </div>
      <div className="flex flex-col w-full p-4">
        <h3 className="text-2xl font-russo-one">{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <div className="flex gap-3 mt-auto flex-col lg:flex-row p-4 w-full">
        <Link
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-2 px-4 bg-black text-white font-semibold rounded-lg hover:bg-black/80 transition-all"
        >
          Live Demo
        </Link>
        <Link
          href={project.githubRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-2 px-4 border-2 border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white transition-all"
        >
          GitHub
        </Link>
      </div>
      {showTools && (
        <div className="flex items-center px-4 gap-2 flex-wrap pb-4 text-sm text-gray-600">
          {project.tools.map((tool, index) => (
            <span key={tool}>
              {tool}
              {index < project.tools.length - 1 && (
                <span className="ml-2">|</span>
              )}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
