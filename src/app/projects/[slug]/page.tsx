import type { Metadata } from "next";
import { portfolioData } from "@/data/portfolio";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Layers } from "lucide-react";
import ProjectImage from "@/components/sections/ProjectImage";
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = portfolioData.projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${project.title} — Case Study`,
        description: `${project.description} Built with ${project.techStack.join(", ")}. ${project.problem}`,
        alternates: {
            canonical: `${BASE_URL}/projects/${project.slug}`,
        },
        openGraph: {
            title: `${project.title} — Bipin Paudel`,
            description: project.description,
            url: `${BASE_URL}/projects/${project.slug}`,
            type: "article",
            images: project.image
                ? [
                    {
                        url: project.image,
                        width: 1200,
                        height: 630,
                        alt: project.title,
                    },
                ]
                : [],
        },
        twitter: {
            card: "summary_large_image",
            title: `${project.title} — Bipin Paudel`,
            description: project.description,
            images: project.image ? [project.image] : [],
        },
        keywords: [
            project.title,
            ...project.techStack,
            project.category,
            "Bipin Paudel",
            "Case Study",
            "Project",
        ],
    };
}

export default async function ProjectDetail({ params }: PageProps) {
    const { slug } = await params;
    const project = portfolioData.projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <article className="min-h-screen pt-32 pb-24 max-w-4xl mx-auto px-4">
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
                className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors group"
            >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Projects
            </Link>

            {/* Header */}
            <header className="mb-12">
                <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider rounded-full">
                        {project!.category}
                    </span>
                    {project!.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full border border-border"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-foreground tracking-tight">
                    {project!.title}
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed">
                    {project!.description}
                </p>
            </header>

            {/* Meta info block */}
            <div className="glass rounded-2xl p-6 md:p-8 mb-16 flex flex-col md:flex-row gap-8 justify-between">
                <div className="flex gap-4 items-center">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                        <Layers className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-xs uppercase text-muted-foreground font-semibold">Tech Stack</p>
                        <p className="font-medium text-sm">{project!.techStack.join(", ")}</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    {project!.githubUrl && (
                        <Link
                            href={project!.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project!.title} source code on GitHub`}
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-xl font-medium transition-colors"
                        >
                            <Github className="w-5 h-5" />
                            <span>Source</span>
                        </Link>
                    )}
                    {project!.liveUrl && (
                        <Link
                            href={project!.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${project!.title} live demo`}
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm rounded-xl font-medium transition-colors"
                        >
                            <ExternalLink className="w-5 h-5" />
                            <span>Live Demo</span>
                        </Link>
                    )}
                </div>
            </div>

            {/* Main Content Area */}
            <div className="space-y-16">
                {/* Cover Image */}
                <ProjectImage src={project.image} alt={`${project.title} — ${project.description.substring(0, 60)}`} />

                {/* Problem Statement Section */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">01</span>
                        The Problem
                    </h2>
                    <div className="glass p-8 rounded-3xl">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {project!.problem}
                        </p>
                    </div>
                </section>

                {/* Architecture Section */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">02</span>
                        Architecture &amp; Solution

                    </h2>
                    <div className="glass p-8 rounded-3xl">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {project!.architecture}
                        </p>
                    </div>
                </section>
            </div>
        </article>
    );
}
