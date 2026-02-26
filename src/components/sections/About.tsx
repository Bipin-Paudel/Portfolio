"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-24 scroll-mt-20 space-y-16"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          About me
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl">
          A bit of context on who I am and what I&apos;ve been working on.
        </p>
      </motion.div>

      {/* Main about grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-4"
        >
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-sm">
            <Image
              src="/image2.png"
              alt="Bipin Paudel"
              fill
              className="object-cover"
              style={{ objectPosition: "center 70%" }}
            />
          </div>
        </motion.div>

        {/* Text + cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-8 space-y-10"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Fullstack Developer & ML Enthusiast
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {portfolioData.about.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-5">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h4 className="font-bold text-base">Education</h4>
              </div>
              <div className="space-y-5 relative before:absolute before:inset-0 before:ml-[5px] before:-translate-x-px before:h-full before:w-0.5 before:bg-border">
                {portfolioData.education.map((edu, i) => (
                  <div key={i} className="relative pl-6">
                    <div className="absolute left-0 top-1.5 w-2.5 h-2.5 bg-primary rounded-full border-2 border-background" />
                    <p className="text-xs font-medium text-muted-foreground mb-1">
                      {edu.period}
                    </p>
                    <h5 className="font-semibold text-sm leading-snug mb-0.5">
                      {edu.degree}
                    </h5>
                    <p className="text-xs text-muted-foreground">
                      {edu.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <h4 className="font-bold text-base">Certifications</h4>
              </div>
              <div className="space-y-3">
                {portfolioData.certifications.map((cert, i) => {
                  const Content = (
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/40 border border-border/50 hover:bg-secondary/70 transition-colors">
                      <Award className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold leading-snug flex items-center justify-between gap-2">
                          <span className="truncate">{cert.title}</span>
                          {cert.link && (
                            <ExternalLink className="w-3 h-3 text-muted-foreground shrink-0" />
                          )}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                  );

                  return cert.link ? (
                    <a
                      key={i}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {Content}
                    </a>
                  ) : (
                    <div key={i}>{Content}</div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
