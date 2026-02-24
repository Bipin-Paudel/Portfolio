"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { MapPin, GraduationCap, Award, Briefcase, ExternalLink, Calendar, Code } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="max-w-7xl mx-auto px-4 py-24 scroll-mt-20 space-y-16">

            {/* ── Section Header ── */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center md:text-left"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold mb-6 tracking-wider uppercase">
                    <Code className="w-3 h-3" /> Professional Background
                </div>
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
                    Crafting <span className="gradient-text">Solutions</span> With Care
                </h2>
            </motion.div>

            {/* ── About Me ── */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                {/* Visual Avatar Column */}
                <div className="lg:col-span-5 lg:h-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative group h-full"
                    >
                        {/* Decorative background glow */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-blue-400/20 blur-2xl opacity-50 rounded-[2.5rem] group-hover:opacity-75 transition-opacity duration-700" />

                        <div className="relative h-full min-h-[500px] lg:min-h-[600px] rounded-[3rem] overflow-hidden glass p-4 border border-border/50">
                            <div className="relative w-full h-full rounded-[2rem] bg-gradient-to-br from-background to-secondary flex items-center justify-center overflow-hidden border border-white/5 shadow-inner">
                                <Image
                                    src="/image2.png"
                                    alt="Bipin Paudel"
                                    fill
                                    className="object-cover opacity-80 group-hover:scale-[1.05] transition-transform duration-700"
                                    style={{ objectPosition: 'center 25%' }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-background/40 to-transparent pointer-events-none" />

                                {/* Floating Code Block */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 glass p-6 rounded-2xl shadow-2xl border border-primary/20 scale-90 md:scale-100 group-hover:scale-105 transition-transform duration-500">
                                    <div className="flex gap-1.5 mb-4">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                                    </div>
                                    <div className="font-mono text-xs md:text-sm space-y-1 text-muted-foreground">
                                        <p className="text-blue-400">const <span className="text-foreground">developer</span> = &#123;</p>
                                        <p className="ml-4">name: <span className="text-amber-300">&apos;Bipin Paudel&apos;</span>,</p>
                                        <p className="ml-4">focus: [<span className="text-emerald-300">&apos;FullStack&apos;</span>, <span className="text-emerald-300">&apos;ML&apos;</span>],</p>
                                        <p className="ml-4">passion: <span className="text-amber-300">&apos;Scalable Code&apos;</span></p>
                                        <p className="text-blue-400">&#125;;</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Text Content Column */}
                <div className="lg:col-span-7 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            Full-Stack Engineer & ML Enthusiast
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {portfolioData.about.description}
                        </p>
                    </motion.div>

                    {/* Education & Certs Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Education */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass rounded-3xl p-8 border border-border/50 group h-full"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-500 border border-violet-500/20">
                                    <GraduationCap className="w-5 h-5" />
                                </div>
                                <h4 className="font-bold text-lg tracking-tight">Education</h4>
                            </div>
                            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[5px] before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border/50 before:to-transparent">
                                {portfolioData.education.map((edu, i) => (
                                    <div key={i} className="relative pl-6">
                                        {/* Timeline Dot */}
                                        <div className="absolute left-0 top-1 w-3 h-3 bg-violet-500 rounded-full border-[3px] border-background shadow-[0_0_0_2px_rgba(139,92,246,0.2)]" />

                                        <p className="text-[11px] font-bold text-violet-500 mb-1 tracking-wider uppercase">{edu.period}</p>
                                        <h5 className="font-bold text-sm leading-tight mb-1.5">{edu.degree}</h5>
                                        <p className="text-xs text-muted-foreground font-medium">{edu.institution}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Certifications */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass rounded-3xl p-8 border border-border/50 group h-full"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
                                    <Award className="w-5 h-5" />
                                </div>
                                <h4 className="font-bold text-lg tracking-tight">Certifications</h4>
                            </div>
                            <div className="space-y-4">
                                {portfolioData.certifications.map((cert, i) => {
                                    const Content = (
                                        <div className="flex items-center gap-3 p-3 rounded-2xl bg-secondary/30 border border-border/40 group-hover/cert:bg-secondary/50 group-hover/cert:border-amber-500/20 transition-all">
                                            <Award className="w-5 h-5 text-amber-500 shrink-0" />
                                            <div className="flex-1">
                                                <p className="text-sm font-bold leading-tight group-hover/cert:text-amber-500 transition-colors flex items-center justify-between">
                                                    {cert.title}
                                                    {cert.link && <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-50 group-hover/cert:opacity-100 group-hover/cert:text-amber-500 transition-all shrink-0 ml-2" />}
                                                </p>
                                                <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
                                            </div>
                                        </div>
                                    );

                                    return cert.link ? (
                                        <a key={i} href={cert.link} target="_blank" rel="noopener noreferrer" className="block group/cert">
                                            {Content}
                                        </a>
                                    ) : (
                                        <div key={i} className="block group/cert">
                                            {Content}
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

        </section>
    );
}
