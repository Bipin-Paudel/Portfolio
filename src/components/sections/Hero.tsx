"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Github, Linkedin, ChevronDown } from "lucide-react";

const ROLES = [
    "Fullstack Developer",
    "Python Developer",
    "AI/ML Enthusiast",
    "React / Next.js Dev",
];

const TECH_BADGES = [
    { label: "Python", color: "#3b82f6" },
    { label: "React", color: "#06b6d4" },
    { label: "Next.js", color: "#8b5cf6" },
    { label: "FastAPI", color: "#f59e0b" },
    { label: "Machine Learning", color: "#ec4899" },
];

/* ── Floating particle dots ─────────────────────────────── */
function ParticleField() {
    const [mounted, setMounted] = useState(false);
    const [particles, setParticles] = useState<any[]>([]);

    useEffect(() => {
        setMounted(true);
        const count = 28;
        const newParticles = Array.from({ length: count }).map(() => ({
            width: Math.random() * 5 + 2,
            height: Math.random() * 5 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            yMove: Math.random() * -40 - 10,
            duration: Math.random() * 5 + 4,
            delay: Math.random() * 4,
        }));
        setParticles(newParticles);
    }, []);

    if (!mounted) return null;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-primary/20"
                    style={{
                        width: p.width,
                        height: p.height,
                        left: p.left,
                        top: p.top,
                    }}
                    animate={{
                        y: [0, p.yMove, 0],
                        opacity: [0.2, 0.7, 0.2],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

/* ── Typewriter text ─────────────────────────────────────── */
function Typewriter({ texts }: { texts: string[] }) {
    const [idx, setIdx] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [deleting, setDeleting] = useState(false);
    const speed = deleting ? 40 : 80;

    useEffect(() => {
        const full = texts[idx];
        const timer = setTimeout(() => {
            if (!deleting) {
                setDisplayed(full.slice(0, displayed.length + 1));
                if (displayed.length + 1 === full.length) {
                    setTimeout(() => setDeleting(true), 1400);
                }
            } else {
                setDisplayed(full.slice(0, displayed.length - 1));
                if (displayed.length === 0) {
                    setDeleting(false);
                    setIdx((prev) => (prev + 1) % texts.length);
                }
            }
        }, speed);
        return () => clearTimeout(timer);
    }, [displayed, deleting, idx, texts, speed]);

    return (
        <span className="inline-flex items-center">
            <span className="shimmer-text text-3xl md:text-4xl font-bold">{displayed}</span>
            <span className="ml-0.5 w-0.5 h-8 bg-primary rounded animate-pulse inline-block" />
        </span>
    );
}

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);

    const stats = [
        { label: "Projects Built", value: "10+" },
        { label: "Work Experience", value: "1+ yr" },
        { label: "Hackathons", value: "2" },
        { label: "Certifications", value: "20+" },
    ];

    return (
        <section
            id="home"
            ref={ref}
            aria-label="Hero section — Bipin Paudel, Full-Stack Developer"
            className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        >
            {/* Visually hidden heading for SEO — ensures crawlers see the full role descriptions */}
            <h2 className="sr-only">Bipin Paudel — Fullstack Developer, Python Developer, AI/ML Enthusiast, React / Next.js Developer</h2>
            {/* ── Dot-grid background ── */}
            <div className="absolute inset-0 dot-grid opacity-60" />

            {/* ── Animated gradient orbs ── */}
            <div className="absolute pointer-events-none inset-0">
                <motion.div
                    className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full 
                     bg-gradient-to-br from-primary/25 via-blue-400/15 to-transparent blur-3xl"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full 
                     bg-gradient-to-tl from-violet-500/20 via-blue-500/15 to-transparent blur-3xl"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
                <motion.div
                    className="absolute top-[40%] left-[50%] w-[350px] h-[350px] rounded-full 
                     bg-gradient-to-br from-cyan-400/10 to-transparent blur-3xl"
                    animate={{ x: [-20, 20, -20], y: [-10, 15, -10] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* ── Floating particles ── */}
            <ParticleField />

            {/* ── Main content ── */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 pt-28 pb-10 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Left column */}
                    <div className="flex-1 space-y-7">

                        {/* Greeting badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                               border border-primary/30 bg-primary/5 text-primary text-sm font-semibold
                               backdrop-blur-sm">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                Available for opportunities
                            </span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.05 }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]"
                        >
                            I&apos;m{" "}
                            <span className="gradient-text">
                                {portfolioData.about.name}
                            </span>
                        </motion.h1>

                        {/* Typewriter */}
                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="h-12"
                        >
                            <Typewriter texts={ROLES} />
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.15 }}
                            className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
                        >
                            {portfolioData.about.tagline}
                        </motion.p>

                        {/* Tech badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="flex flex-wrap gap-2"
                        >
                            {TECH_BADGES.map((badge, i) => (
                                <motion.span
                                    key={badge.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 + i * 0.06 }}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm cursor-default"
                                    style={{
                                        borderColor: badge.color + "50",
                                        backgroundColor: badge.color + "15",
                                        color: badge.color,
                                    }}
                                >
                                    {badge.label}
                                </motion.span>
                            ))}
                        </motion.div>

                        {/* CTA buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.25 }}
                            className="flex flex-wrap gap-4 items-center"
                        >
                            <Link
                                href="/projects"
                                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 
                           text-sm font-semibold text-white shadow-lg shadow-primary/30
                           hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5
                           transition-all duration-200"
                            >
                                View Projects
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <a
                                href={portfolioData.about.resumeLink}
                                download="Bipin_Paudel_Resume.pdf"
                                className="inline-flex items-center gap-2 rounded-full border border-border 
                           bg-background/80 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold 
                           shadow-sm hover:bg-secondary hover:-translate-y-0.5 transition-all duration-200"
                            >
                                Download Resume
                                <Download className="w-4 h-4" />
                            </a>

                            <div className="flex gap-3">
                                {[
                                    { href: portfolioData.socials.github, icon: <Github className="w-5 h-5" />, label: "GitHub profile of Bipin Paudel" },
                                    { href: portfolioData.socials.linkedin, icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn profile of Bipin Paudel" },
                                ].map((s) => (
                                    <Link key={s.label} href={s.href} target="_blank" aria-label={s.label}
                                        className="p-3 rounded-full bg-secondary/70 backdrop-blur-sm hover:bg-primary hover:text-white 
                               hover:-translate-y-0.5 transition-all duration-200 text-foreground border border-border/40">
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
                        className="hidden lg:flex flex-col items-center gap-6"
                    >
                        {/* Avatar with animated rings */}
                        <div className="relative">
                            {/* Outer spinning ring */}
                            <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" />
                            {/* Pulsing glow ring */}
                            <div className="absolute inset-0 rounded-full animate-pulse-ring opacity-40" />

                            {/* Avatar */}
                            <div className="relative w-52 h-52 rounded-full glass flex items-center justify-center 
                              border-2 border-primary/30 shadow-2xl shadow-primary/20 overflow-hidden">
                                <div className="w-44 h-44 rounded-full bg-gradient-to-br from-primary via-blue-500 to-violet-500
                                 flex items-center justify-center overflow-hidden
                                 animate-tilt border-2 border-white/20 relative">
                                    <Image
                                        src="/Bipin.png"
                                        alt="Bipin Paudel — Full-Stack Developer and ML Engineer from Nepal"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Floating badge: location */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -right-8 top-8 glass px-3 py-1.5 rounded-xl text-xs font-semibold 
                           border border-border shadow-lg whitespace-nowrap"
                            >
                                📍 Bharatpur, Nepal
                            </motion.div>

                            {/* Floating badge: open to work */}
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -left-10 bottom-8 glass px-3 py-1.5 rounded-xl text-xs font-semibold 
                           border border-primary/30 shadow-lg bg-primary/10 text-primary whitespace-nowrap"
                            >
                                🚀 Open to Work
                            </motion.div>
                        </div>

                        {/* Stacked floating skill pills */}
                        <motion.div
                            className="flex flex-wrap justify-center gap-2 max-w-xs animate-float-slow"
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            {["Python", "React", "Next.js", "FastAPI", "ML"].map((tech, i) => (
                                <span key={tech}
                                    className="px-3 py-1 glass rounded-full text-xs font-medium border border-border/50">
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* ── Stats row ── */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + i * 0.07 }}
                            whileHover={{ scale: 1.05 }}
                            className="glass px-5 py-4 rounded-2xl border border-border/40 text-center"
                        >
                            <p className="text-3xl font-extrabold gradient-text">{stat.value}</p>
                            <p className="text-xs text-muted-foreground mt-1 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* ── Scroll indicator ── */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce-arrow">
                <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
                <ChevronDown className="w-5 h-5" />
            </div>
        </section>
    );
}
