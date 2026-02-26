"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Github, Linkedin, MapPin } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease },
});

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero section — Bipin Paudel, Full-Stack Developer"
      className="relative min-h-screen flex flex-col justify-center"
    >
      {/* Hidden heading for SEO */}
      <h2 className="sr-only">
        Bipin Paudel — Fullstack Developer, Python Developer, AI/ML Enthusiast,
        React / Next.js Developer
      </h2>

      <div className="w-full px-6 sm:px-10 lg:px-20 pt-28 pb-16 relative">
        {/* Decorative Background Elements */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] -z-10 animate-pulse delay-700" />

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* ── Left column ── */}
          <div className="flex-1 min-w-0 space-y-6">
            {/* Location */}
            <motion.p
              {...fadeUp(0.05)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground"
            >
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              Bharatpur, Nepal &mdash; open to remote work
            </motion.p>

            {/* Name */}
            <motion.h1
              {...fadeUp(0.15)}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]"
            >
              I&apos;m{" "}
              <span className="gradient-text">{portfolioData.about.name}</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              {...fadeUp(0.24)}
              className="text-xl font-semibold text-muted-foreground"
            >
              {portfolioData.about.title}
            </motion.p>

            {/* Tagline */}
            <motion.p
              {...fadeUp(0.32)}
              className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              {portfolioData.about.tagline}
            </motion.p>

            {/* CTAs + socials */}
            <motion.div
              {...fadeUp(0.42)}
              className="flex flex-wrap gap-3 items-center pt-2"
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary
                           px-6 py-3 text-sm font-semibold text-primary-foreground
                           hover:opacity-90 transition-opacity duration-150"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
              </Link>

              <a
                href={portfolioData.about.resumeLink}
                download="Bipin_Paudel_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-lg border border-border
                           bg-background px-6 py-3 text-sm font-semibold
                           hover:bg-secondary transition-colors duration-150"
              >
                Download Resume
                <Download className="w-4 h-4" />
              </a>

              <div className="flex gap-2">
                {[
                  {
                    href: portfolioData.socials.github,
                    icon: <Github className="w-5 h-5" />,
                    label: "GitHub profile of Bipin Paudel",
                  },
                  {
                    href: portfolioData.socials.linkedin,
                    icon: <Linkedin className="w-5 h-5" />,
                    label: "LinkedIn profile of Bipin Paudel",
                  },
                ].map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    aria-label={s.label}
                    className="p-2.5 rounded-lg border border-border text-muted-foreground
                               hover:bg-secondary hover:text-foreground transition-colors duration-150"
                  >
                    {s.icon}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column – animated avatar card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex flex-col items-center gap-12 lg:-translate-x-4"
          >
            {/* Avatar with animated rings */}
            <div className="relative">
              {/* Decorative Rings System */}
              {/* outermost faint ring */}
              <div className="absolute -inset-24 rounded-full border border-primary/5 animate-[spin_20s_linear_infinite]" />
              {/* middle dashed ring */}
              <div className="absolute -inset-16 rounded-full border-2 border-dashed border-primary/10 animate-spin-slow" />
              {/* inner-most dashed ring */}
              <div className="absolute -inset-10 rounded-full border border-dashed border-primary/20 animate-[spin_12s_linear_infinite_reverse]" />

              {/* Background glows */}
              <div className="absolute -inset-12 rounded-full bg-primary/5 blur-3xl opacity-60" />
              <div className="absolute inset-0 rounded-full animate-pulse-ring opacity-40" />

              {/* Avatar */}
              <div className="relative w-52 h-52 rounded-full glass flex items-center justify-center border-2 border-primary/30 shadow-2xl shadow-primary/20 overflow-hidden">
                <div className="w-44 h-44 rounded-full bg-gradient-to-br from-primary via-blue-500 to-violet-500 flex items-center justify-center overflow-hidden animate-tilt border-2 border-white/20 relative">
                  <Image
                    src="/Bipin.png"
                    alt="Bipin Paudel — Full-Stack Developer and ML Engineer from Nepal"
                    fill
                    className="object-cover scale-95 hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: "center 85%" }}
                    priority
                  />
                </div>
              </div>

              {/* Floating badge: location */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-20 top-0 glass px-4 py-2 rounded-2xl text-[10px] sm:text-xs font-bold border border-border/60 shadow-xl whitespace-nowrap flex items-center gap-2 backdrop-blur-md z-10"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                Bharatpur, Nepal
              </motion.div>

              {/* Floating badge: open to work */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-20 bottom-0 glass px-4 py-2 rounded-2xl text-[10px] sm:text-xs font-bold border border-primary/20 shadow-xl bg-primary/5 text-primary whitespace-nowrap flex items-center gap-2 backdrop-blur-md z-10"
              >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Open to Work
              </motion.div>
            </div>

            {/* Stacked floating skill pills */}
            <motion.div
              className="flex flex-wrap justify-center gap-2 max-w-xs animate-float-slow"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              {["Python", "React", "Next.js", "FastAPI", "ML"].map((tech, i) => (
                <span
                  key={tech}
                  className="px-3 py-1 glass rounded-full text-xs font-medium border border-border/50"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
