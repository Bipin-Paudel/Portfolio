import type { Metadata } from "next";
import { portfolioData } from "@/data/portfolio";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import ProjectCover from "@/components/sections/ProjectCover";
import { ProjectJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

const BASE_URL = "https://paudelbipin.com.np";

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.slug,
  }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `${BASE_URL}/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Bipin Paudel`,
      description: project.description,
      url: `${BASE_URL}/projects/${project.slug}`,
      type: "article",
      images: project.image ? [{ url: project.image }] : undefined,
    },
    twitter: {
      card: project.image ? "summary_large_image" : "summary",
      title: `${project.title} | Bipin Paudel`,
      description: project.description,
      images: project.image ? [project.image] : undefined,
    },
  };
}

export default async function ProjectDetail({ params }: PageProps) {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-32 pb-24 max-w-5xl mx-auto px-6 lg:px-8">
      <ProjectJsonLd project={project} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: BASE_URL },
          { name: "Projects", url: `${BASE_URL}/projects` },
          { name: project.title, url: `${BASE_URL}/projects/${project.slug}` },
        ]}
      />

      {/* Back Button */}
      <Link
        href="/projects"
        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Projects
      </Link>

      {/* Header */}
      <header className="mb-10">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
          {project.category}
          {project.role ? ` · ${project.role}` : ""}
        </p>

        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
          {project.title}
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </header>

      {/* Meta info block */}
      <div className="border border-border bg-card rounded-lg p-6 mb-12 flex flex-col sm:flex-row gap-6 justify-between sm:items-center">
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
            Tech Stack
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
        </div>

        <div className="flex gap-3 shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-border hover:bg-secondary rounded-md text-sm font-medium transition-colors"
            >
              <Github className="w-4 h-4" />
              Source
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:opacity-90 rounded-md text-sm font-medium transition-opacity"
            >
              <ExternalLink className="w-4 h-4" />
              Visit Site
            </a>
          )}
          {!project.githubUrl && !project.liveUrl && (
            <p className="text-sm text-muted-foreground self-center">
              Code available on request.
            </p>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-12">
        {project.gallery ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.gallery.map((shot) => (
              <figure key={shot.src} className="min-w-0">
                <div className="relative aspect-video w-full rounded-lg border border-border bg-secondary overflow-hidden">
                  <Image
                    src={shot.src}
                    alt={shot.caption}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <figcaption className="mt-2 text-xs font-mono text-muted-foreground">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <ProjectCover project={project} large />
        )}

        <section>
          <h2 className="text-xl font-semibold mb-4">The Problem</h2>
          <p className="text-muted-foreground leading-relaxed">
            {project.problem}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">How It Works</h2>
          <p className="text-muted-foreground leading-relaxed">
            {project.architecture}
          </p>
        </section>
      </div>
    </article>
  );
}
