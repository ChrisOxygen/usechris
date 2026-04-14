import { FiGithub, FiExternalLink } from "react-icons/fi";
import type { Project } from "@/shared/constants/projects";

type FeaturedProjectCardProps = {
  project: Project;
  imageSrc: string;
  flipped?: boolean;
};

export default function FeaturedProjectCard({
  project,
  imageSrc,
  flipped = false,
}: FeaturedProjectCardProps) {
  const truncated =
    project.description.length > 258
      ? project.description.slice(0, 258).trimEnd() + "…"
      : project.description;

  const links = (
    <>
      {project.githubLink && (
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} GitHub repository`}
          className="text-muted hover:text-accent transition-colors duration-200"
        >
          <FiGithub size={20} />
        </a>
      )}
      {project.liveLink && (
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} live site`}
          className="text-muted hover:text-accent transition-colors duration-200"
        >
          <FiExternalLink size={20} />
        </a>
      )}
    </>
  );

  const tools = project.tools && project.tools.length > 0 && (
    <ul className="flex flex-wrap gap-x-5 gap-y-1">
      {project.tools.map((tool) => (
        <li key={tool} className="font-source-code-pro text-xs text-muted/70">
          {tool}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* ── Mobile card (< lg) — image background with overlay ── */}
      <div
        className="lg:hidden relative rounded-xl overflow-hidden border flex flex-col"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        {/* Dark overlay */}
        <div className="absolute w-full h-full inset-0 bg-background/98" />

        {/* Content on top of overlay */}
        <div className="relative z-10 px-4 sm:px-8 py-6 sm:py-10 sm:p-8 flex flex-col gap-5">
          <span className="font-source-code-pro text-xs text-accent tracking-widest uppercase">
            Featured Project
          </span>

          <h3 className="font-russo-one text-2xl text-foreground leading-tight">
            {project.title}
          </h3>

          <p className="font-source-code-pro text-sm text-muted leading-relaxed">
            {truncated}
          </p>

          {tools}

          {(project.githubLink || project.liveLink) && (
            <div className="flex items-center gap-4 mt-1">{links}</div>
          )}
        </div>
      </div>

      {/* ── Desktop two-panel layout (lg+) ── */}
      <div className="hidden lg:grid grid-cols-12 items-center">
        {/* Image panel */}
        <div
          className={[
            "row-start-1 relative aspect-video rounded-sm overflow-hidden group",
            flipped ? "col-start-6 col-span-7" : "col-start-1 col-span-7",
          ].join(" ")}
        >
          {/* eslint-disable-next-line react/forbid-dom-props */}
          <div
            style={{ backgroundImage: `url(${imageSrc})` }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            role="img"
            aria-label={project.title}
          />
          <div className="absolute inset-0 bg-accent/40 group-hover:bg-transparent transition-colors duration-300 z-10" />
        </div>

        {/* Content panel */}
        <div
          className={[
            "row-start-1 z-20 flex flex-col gap-4",
            flipped
              ? "col-start-1 col-span-7 items-start text-left"
              : "col-start-6 col-span-7 items-end text-right",
          ].join(" ")}
        >
          <span className="font-source-code-pro text-xs text-accent tracking-widest uppercase">
            Featured Project
          </span>

          <h3 className="font-russo-one text-2xl text-foreground">
            {project.title}
          </h3>

          <div className="bg-surface rounded-sm p-6 shadow-xl flex flex-col gap-4">
            <p className="font-source-code-pro text-sm text-muted leading-relaxed">
              {truncated}
            </p>
            <button
              className={[
                "font-source-code-pro text-xs text-accent/60 hover:text-accent transition-colors flex items-center gap-1 group",
                flipped ? "self-start" : "self-end",
              ].join(" ")}
            >
              View Case Study
              <span className="group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </button>
          </div>

          {tools && (
            <ul
              className={[
                "flex flex-wrap gap-x-5 gap-y-1",
                flipped ? "justify-start" : "justify-end",
              ].join(" ")}
            >
              {project.tools!.map((tool) => (
                <li
                  key={tool}
                  className="font-source-code-pro text-xs text-muted"
                >
                  {tool}
                </li>
              ))}
            </ul>
          )}

          {(project.githubLink || project.liveLink) && (
            <div className="flex items-center gap-4">{links}</div>
          )}
        </div>
      </div>
    </>
  );
}
