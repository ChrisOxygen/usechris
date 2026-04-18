"use client";

import { useState } from "react";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import type { Project } from "@/shared/constants/projects";

type FeaturedProjectCardProps = {
  project: Project;
  flipped?: boolean;
};

function ImageFallback({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 bg-surface flex flex-col items-center justify-center gap-3">
      <div className="w-12 h-12 rounded-full bg-[#1e1414] border border-[#2a1e1e] flex items-center justify-center">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#5a4040"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2.5" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      </div>
      <p className="font-squada-one text-[10px] text-[#5a4040] uppercase tracking-[0.12em]">
        {label}
      </p>
    </div>
  );
}

function CoverImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="absolute inset-0">
      {failed ? (
        <ImageFallback label={alt} />
      ) : (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}

export default function FeaturedProjectCard({
  project,
  flipped = false,
}: FeaturedProjectCardProps) {
  const coverSrc = project.caseStudySlug
    ? `/assets/${project.caseStudySlug}-cover.png`
    : null;

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

  return (
    <>
      {/* ── Mobile card (< lg) ── */}
      <div className="lg:hidden relative rounded-xl overflow-hidden border-accent border flex flex-col">
        {/* Cover image behind overlay */}
        <div className="absolute inset-0">
          {coverSrc ? (
            <CoverImage src={coverSrc} alt={project.title} />
          ) : (
            <ImageFallback label={project.title} />
          )}
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/95" />

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-8 py-6 sm:py-10 flex flex-col gap-5">
          <span className="font-source-code-pro text-xs text-accent tracking-widest uppercase">
            Featured Project
          </span>

          <h3 className="font-russo-one text-2xl text-foreground leading-tight">
            {project.title}
          </h3>

          <p className="font-source-code-pro text-sm text-muted leading-relaxed">
            {truncated}
          </p>

          {project.tools && project.tools.length > 0 && (
            <ul className="flex flex-wrap gap-x-5 gap-y-1">
              {project.tools.map((tool) => (
                <li key={tool} className="font-source-code-pro text-xs text-muted/70">
                  {tool}
                </li>
              ))}
            </ul>
          )}

          {project.caseStudySlug && (
            <Link
              href={`/case-studies/${project.caseStudySlug}`}
              className="font-source-code-pro text-xs text-accent/60 hover:text-accent transition-colors flex items-center gap-1 group self-start"
            >
              View Case Study
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
          )}

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
          {coverSrc ? (
            <CoverImage src={coverSrc} alt={project.title} />
          ) : (
            <ImageFallback label={project.title} />
          )}
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
            {project.caseStudySlug && (
              <Link
                href={`/case-studies/${project.caseStudySlug}`}
                className={[
                  "font-source-code-pro text-xs text-accent/60 hover:text-accent transition-colors flex items-center gap-1 group",
                  flipped ? "self-start" : "self-end",
                ].join(" ")}
              >
                View Case Study
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>
            )}
          </div>

          {project.tools && project.tools.length > 0 && (
            <ul
              className={[
                "flex flex-wrap gap-x-5 gap-y-1",
                flipped ? "justify-start" : "justify-end",
              ].join(" ")}
            >
              {project.tools.map((tool) => (
                <li key={tool} className="font-source-code-pro text-xs text-muted">
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
