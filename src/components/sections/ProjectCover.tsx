import Image from "next/image";
import type { Project } from "@/data/portfolio";

interface ProjectCoverProps {
  project: Pick<Project, "title" | "category" | "role" | "image">;
  large?: boolean;
}

export default function ProjectCover({ project, large }: ProjectCoverProps) {
  if (project.image) {
    return (
      <div className="relative aspect-video w-full rounded-lg border border-border bg-secondary overflow-hidden">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          sizes={
            large
              ? "(max-width: 1024px) 100vw, 1024px"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
          }
          className="object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div
      className={`aspect-video w-full rounded-lg border border-border bg-secondary
                  flex flex-col justify-between overflow-hidden
                  ${large ? "p-8 sm:p-10" : "p-5"}`}
    >
      <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
        {project.category}
        {project.role ? ` · ${project.role}` : ""}
      </span>
      <span
        className={`font-semibold tracking-tight text-foreground/80 leading-snug
                    ${large ? "text-2xl sm:text-4xl" : "text-lg sm:text-xl"}`}
      >
        {project.title}
      </span>
    </div>
  );
}
