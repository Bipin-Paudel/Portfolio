import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCover from "./ProjectCover";
import SectionShell from "./SectionShell";

export default function HomeProjects() {
  const featured = portfolioData.projects.slice(0, 4);

  return (
    <SectionShell
      id="projects"
      title="Projects"
      subtitle="Research work, my own e-commerce business, and apps built with Python, Django, React, and Next.js."
      aside={
        <Link
          href="/projects"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
        >
          View all <ArrowRight className="w-4 h-4" />
        </Link>
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {featured.map((project) => (
          <article
            key={project.slug}
            className="group bg-card rounded-lg overflow-hidden flex flex-col h-full border border-border hover:border-foreground/20 transition-colors"
          >
            <Link href={`/projects/${project.slug}`} className="block p-4 pb-0">
              <ProjectCover project={project} />
            </Link>

            <div className="p-5 flex flex-col flex-grow gap-3">
              <h3 className="text-lg font-semibold leading-snug">
                {project.title}
              </h3>

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
    </SectionShell>
  );
}
