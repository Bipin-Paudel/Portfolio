"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCover from "@/components/sections/ProjectCover";

export default function ProjectsPageClient() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(portfolioData.projects.map((p) => p.category))),
  ];

  const filteredProjects = portfolioData.projects.filter(
    (project) => filter === "All" || project.category === filter,
  );

  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">
            Projects
          </h1>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Research work, my own e-commerce business, and apps built with
            Python, Django, React, and Next.js.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors border ${
                filter === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:bg-secondary hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="group bg-card rounded-lg overflow-hidden flex flex-col h-full border border-border hover:border-foreground/20 transition-colors"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="block p-4 pb-0"
              >
                <ProjectCover project={project} />
              </Link>

              <div className="p-5 flex flex-col flex-grow gap-3">
                <h2 className="text-lg font-semibold leading-snug">
                  {project.title}
                </h2>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs font-mono rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:opacity-80 transition-opacity mt-1 pt-3 border-t border-border"
                >
                  Read more
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
