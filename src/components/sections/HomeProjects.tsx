"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

export default function HomeProjects() {
    // Show only the first 6 featured projects on the homepage
    const featured = portfolioData.projects.slice(0, 6);

    return (
        <section
            id="projects"
            className="w-full px-6 sm:px-10 lg:px-20 py-24 scroll-mt-20"
        >
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
            >
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Projects
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                        Real-world apps, hackathon projects, and open-source work built with
                        Python, Django, React, and Next.js.
                    </p>
                </div>
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors shrink-0"
                >
                    View all projects <ArrowRight className="w-4 h-4" />
                </Link>
            </motion.div>

            {/* Grid */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {featured.map((project, index) => (
                    <motion.article
                        key={project.slug}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: index * 0.06 }}
                        className="group bg-card rounded-2xl overflow-hidden flex flex-col h-full border border-border hover:border-foreground/20 transition-colors duration-200"
                    >
                        {/* Image */}
                        <div className="relative h-48 w-full overflow-hidden bg-secondary">
                            {project.image ? (
                                <Image
                                    src={project.image}
                                    alt={`${project.title} preview`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-secondary flex items-center justify-center">
                                    <span className="text-4xl font-black text-muted-foreground/30">
                                        {project.title.substring(0, 2).toUpperCase()}
                                    </span>
                                </div>
                            )}

                            {/* Hover overlay with links */}
                            <div className="absolute inset-0 bg-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-250 flex items-center justify-center gap-3">
                                {project.githubUrl && (
                                    <Link
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        aria-label={`${project.title} GitHub`}
                                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-background/90 text-foreground text-sm font-medium hover:bg-background transition-colors"
                                    >
                                        <Github className="w-4 h-4" /> Code
                                    </Link>
                                )}
                                {project.liveUrl && (
                                    <Link
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        aria-label={`${project.title} live demo`}
                                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-background/90 text-foreground text-sm font-medium hover:bg-background transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4" /> Live
                                    </Link>
                                )}
                            </div>

                            {/* Category badge */}
                            <div className="absolute top-3 left-3">
                                <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-background/80 backdrop-blur-sm text-foreground border border-border/50">
                                    {project.category}
                                </span>
                            </div>
                        </div>

                        {/* Card content */}
                        <div className="p-5 flex flex-col flex-grow gap-3">
                            <h3 className="text-lg font-bold leading-snug">{project.title}</h3>

                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-grow">
                                {project.description}
                            </p>

                            {/* Tech stack */}
                            <div className="flex flex-wrap gap-1.5">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs font-medium rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <Link
                                href={`/projects/${project.slug}`}
                                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group/link mt-1 pt-3 border-t border-border"
                            >
                                Case Study
                                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.article>
                ))}
            </motion.div>

            {/* View all CTA */}
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="mt-12 flex justify-center"
            >
                <Link
                    href="/projects"
                    className="group inline-flex items-center gap-2 rounded-lg border border-border bg-background px-8 py-3 text-sm font-semibold hover:bg-secondary transition-colors duration-150"
                >
                    See All Projects
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
                </Link>
            </motion.div>
        </section>
    );
}
