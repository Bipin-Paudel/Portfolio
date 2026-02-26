"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink, ArrowRight, Search } from "lucide-react";

export default function ProjectsPageClient() {
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
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-14"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Real-world apps, hackathon projects, and open-source work built with
            Python, Django, React, and Next.js.
          </p>
        </motion.div>

        {/* Filters + Search */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-10"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150 border ${
                  filter === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:bg-secondary hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search projects"
              className="w-full pl-9 pr-4 py-2 bg-secondary/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-foreground/30 focus:border-foreground/30 transition-all"
            />
          </div>
        </motion.div>

        {/* Cards grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
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
                  <h2 className="text-lg font-bold leading-snug">
                    {project.title}
                  </h2>

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
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-muted-foreground"
          >
            <p className="text-base">No projects match that search.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
