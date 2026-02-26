"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { MapPin, Briefcase, ExternalLink, Calendar } from "lucide-react";
import Link from "next/link";

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full px-6 sm:px-10 lg:px-20 py-24 scroll-mt-20"
    >
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
            Places I&apos;ve worked and what I built there.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[1.1rem] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-6">
            {portfolioData.experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-4 p-1.5 rounded-full bg-background z-10"
                  style={{ border: "2px solid var(--accent-violet)" }}>
                  <Briefcase className="w-3 h-3" style={{ color: "var(--accent-violet)" }} />
                </div>

                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4 pb-4 border-b border-border">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold tracking-tight">
                        {job.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">
                          {job.company}
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {job.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-1.5 shrink-0">
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                        <Calendar className="w-3 h-3" /> {job.period}
                      </span>
                      {job.link && (
                        <Link
                          href={job.link}
                          target="_blank"
                          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          {job.link.replace("https://", "")}
                        </Link>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {job.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                      >
                        <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
