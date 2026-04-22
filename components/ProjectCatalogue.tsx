"use client";

import { useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

export type ProjectEntry = {
  title: string;
  medium: string;
  description: string;
  href?: string;
  previewSrc?: string | StaticImageData;
  previewAlt?: string;
};

function ExternalLinkMark() {
  return (
    <span aria-hidden="true" className="ml-2 align-middle text-sm text-sepia">
      ↗
    </span>
  );
}

export function ProjectCatalogue({ projects }: { projects: ProjectEntry[] }) {
  const [activePreview, setActivePreview] = useState<{
    src: string | StaticImageData;
    alt: string;
  } | null>(null);

  return (
    <>
      <ul className="space-y-12">
        {projects.map((project, index) => (
          <li
            key={project.title}
            className={
              index < projects.length - 1 ? "border-b border-rule pb-12" : ""
            }
          >
            <div className="flex gap-4">
              {project.previewSrc ? (
                <button
                  type="button"
                  onClick={() =>
                    setActivePreview({
                      src: project.previewSrc!,
                      alt: project.previewAlt ?? `${project.title} preview`,
                    })
                  }
                  className="relative h-20 w-20 shrink-0 self-center overflow-hidden border border-rule bg-parchment-deep transition-colors duration-200 ease-out hover:border-sepia"
                  aria-label={`Open full preview for ${project.title}`}
                >
                  <Image
                    src={project.previewSrc}
                    alt={project.previewAlt ?? `${project.title} preview`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ) : (
                <div className="small-caps flex h-20 w-20 shrink-0 self-center items-center justify-center border border-rule bg-parchment-deep px-2 text-center text-[0.62rem] leading-tight text-ink-muted">
                  Preview
                </div>
              )}
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h2 className="font-display text-[1.55rem] font-medium text-ink">
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ink transition-colors duration-200 ease-out hover:text-sepia"
                      >
                        {project.title}
                        <ExternalLinkMark />
                      </a>
                    ) : (
                      project.title
                    )}
                  </h2>
                  <p className="small-caps shrink-0 text-xs text-ink-muted">
                    {project.medium}
                  </p>
                </div>
                <p className="mt-4 text-[1.05rem] leading-[1.72]">
                  {project.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {activePreview ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-label="Project image preview"
          onClick={() => setActivePreview(null)}
        >
          <div
            className="relative h-[85vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activePreview.src}
              alt={activePreview.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
          <button
            type="button"
            onClick={() => setActivePreview(null)}
            className="small-caps absolute right-6 top-6 border border-rule bg-parchment/90 px-3 py-1 text-xs text-ink transition-colors duration-200 ease-out hover:text-sepia"
          >
            Close
          </button>
        </div>
      ) : null}
    </>
  );
}
