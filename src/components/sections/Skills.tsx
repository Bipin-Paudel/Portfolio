"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Code2, Server, BrainCircuit, Database } from "lucide-react";

export default function Skills() {
  const categories = [
    {
      title: "Core Programming",
      icon: <Code2 className="w-5 h-5" style={{ color: "var(--accent-violet)" }} />,
      skills: portfolioData.skills.programming,
      className: "md:col-span-2",
      accent: "var(--accent-violet)",
    },
    {
      title: "Web & Backend",
      icon: <Server className="w-5 h-5" style={{ color: "var(--accent-emerald)" }} />,
      skills: portfolioData.skills.frameworks,
      className: "md:col-span-1",
      accent: "var(--accent-emerald)",
    },
    {
      title: "AI & Data Science",
      icon: <BrainCircuit className="w-5 h-5" style={{ color: "var(--accent-fuchsia)" }} />,
      skills: portfolioData.skills.ml,
      className: "md:col-span-2",
      accent: "var(--accent-fuchsia)",
    },
    {
      title: "Databases",
      icon: <Database className="w-5 h-5" style={{ color: "var(--accent-amber)" }} />,
      skills: portfolioData.skills.databases,
      className: "md:col-span-1",
      accent: "var(--accent-amber)",
    },
  ];

  return (
    <section id="skills" className="w-full px-6 sm:px-10 lg:px-20 py-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Skills
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
          Tools and technologies I work with regularly, across the full stack
          and into ML.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {categories.map((category, idx) => (
          <div
            key={idx}
            className={`rounded-xl border border-border bg-card p-6 flex flex-col gap-5 ${category.className}`}
            style={{ borderTopColor: category.accent, borderTopWidth: "2px" }}
          >
            <div className="flex items-center gap-2.5">
              {category.icon}
              <h3 className="text-base font-semibold">{category.title}</h3>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-xs text-muted-foreground font-mono">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        ease: "easeOut",
                        delay: 0.2 + sIdx * 0.07,
                      }}
                      className="h-full rounded-full"
                      style={{ background: category.accent }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Tools row */}
        <div className="md:col-span-3 rounded-xl border border-border bg-card p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-base font-semibold mb-1">Development Tools</h3>
            <p className="text-sm text-muted-foreground">
              Day-to-day tools: Git, Docker, VS Code, Postman, Linux.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Git", "Docker", "VS Code", "Postman", "Linux"].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 rounded-lg border border-border bg-secondary text-sm font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
