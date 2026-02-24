"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink, ArrowRight, Search, Sparkles } from "lucide-react";

export default function ProjectsPage() {
    const [filter, setFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const categories = [
        "All",
        ...Array.from(new Set(portfolioData.projects.map((p) => p.category))),
    ];

    const filteredProjects = portfolioData.projects.filter((project) => {
        const matchesFilter = filter === "All" || project.category === filter;
        const matchesSearch =
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="min-h-screen pt-32 pb-32 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/8 blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-violet-400/8 blur-3xl" />
                <div className="absolute inset-0 dot-grid opacity-40" />
            </div>

            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30
                       bg-primary/5 text-primary text-sm font-semibold mb-6"
                    >
                        <Sparkles className="w-4 h-4" /> Selected Work
                    </motion.span>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-5">
                        My{" "}
                        <span className="gradient-text">Projects</span>
                    </h1>
                    <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6" />
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Real-world applications, hackathon projects, and open-source work.
                    </p>
                </motion.div>

                {/* Filters + Search */}
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap gap-1.5"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${filter === cat
                                    ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border/50"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative w-full sm:w-72"
                    >
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-5 py-2.5 bg-secondary/50 border border-border rounded-full 
                         text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        />
                    </motion.div>
                </div>

                {/* Cards grid */}
                <AnimatePresence mode="popLayout">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.article
                                key={project.slug}
                                layout
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.45, delay: index * 0.08 }}
                                whileHover={{ y: -6 }}
                                className="group glass rounded-3xl overflow-hidden flex flex-col h-full 
                           border border-border/50 hover:border-primary/40 transition-colors
                           shadow-sm hover:shadow-xl hover:shadow-primary/10"
                            >
                                {/* Image */}
                                <div className="relative h-52 w-full overflow-hidden bg-muted">
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-violet-500/20 
                                    flex items-center justify-center">
                                            <span className="text-5xl font-black text-primary/30">
                                                {project.title.substring(0, 2).toUpperCase()}
                                            </span>
                                        </div>
                                    )}

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                  flex items-end p-4 gap-3">
                                        {project.githubUrl && (
                                            <Link
                                                href={project.githubUrl}
                                                target="_blank"
                                                onClick={(e) => e.stopPropagation()}
                                                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-colors"
                                            >
                                                <Github className="w-5 h-5" />
                                            </Link>
                                        )}
                                        {project.liveUrl && (
                                            <Link
                                                href={project.liveUrl}
                                                target="_blank"
                                                onClick={(e) => e.stopPropagation()}
                                                className="p-2.5 rounded-full bg-primary/80 hover:bg-primary backdrop-blur-sm text-white transition-colors"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </Link>
                                        )}
                                    </div>

                                    {/* Category badge */}
                                    <div className="absolute top-3 left-3">
                                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/40 backdrop-blur-sm text-white border border-white/10">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow gap-4">
                                    <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-grow">
                                        {project.description}
                                    </p>

                                    {/* Tech stack */}
                                    <div className="flex flex-wrap gap-1">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2.5 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <Link
                                        href={`/projects/${project.slug}`}
                                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground 
                               hover:text-primary transition-colors group/link mt-auto pt-2 border-t border-border/40"
                                    >
                                        View Case Study
                                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-24 text-muted-foreground"
                    >
                        <p className="text-lg">No projects found matching your criteria.</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
