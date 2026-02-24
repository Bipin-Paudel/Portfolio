"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { MapPin, Briefcase, ExternalLink, Calendar } from "lucide-react";
import Link from "next/link";

export default function Experience() {
    return (
        <section id="experience" className="max-w-7xl mx-auto px-4 py-24 scroll-mt-20">
            <div className="relative space-y-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-xs font-bold tracking-wider uppercase">
                            <Briefcase className="w-3 h-3" /> Career Path
                        </div>
                        <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight">Work <span className="text-primary italic">Experience</span></h3>
                    </div>
                    <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
                        My professional journey through internships and open-source contributions, focusing on high-impact projects.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-[1.35rem] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/30 via-border/50 to-transparent" />

                    <div className="space-y-8">
                        {portfolioData.experience.map((job, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="relative pl-14"
                            >
                                {/* Dot Icon */}
                                <div className="absolute left-0 top-1 p-2 rounded-full bg-background border-2 border-primary ring-4 ring-primary/10 z-10">
                                    <Briefcase className="w-3.5 h-3.5 text-primary" />
                                </div>

                                <div className="glass rounded-[2rem] p-6 md:p-8 border border-border/40 hover:border-primary/20 transition-all duration-500 group">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 pb-3 border-b border-border/30">
                                        <div className="space-y-1.5">
                                            <h4 className="text-2xl font-extrabold tracking-tight group-hover:text-primary transition-colors">{job.role}</h4>
                                            <div className="flex items-center gap-3 text-muted-foreground font-semibold uppercase tracking-widest text-[10px]">
                                                <span className="text-foreground">{job.company}</span>
                                                <span className="w-1 h-1 rounded-full bg-border" />
                                                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {job.location}</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary/5 text-primary text-xs font-bold rounded-full border border-primary/10">
                                                <Calendar className="w-3 h-3" /> {job.period}
                                            </span>
                                            {job.link && (
                                                <Link
                                                    href={job.link}
                                                    target="_blank"
                                                    className="flex items-center gap-1.5 text-[10px] font-bold text-muted-foreground hover:text-primary transition-colors"
                                                >
                                                    <ExternalLink className="w-3 h-3" />
                                                    {job.link.replace("https://", "")}
                                                </Link>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                                        <div className="lg:col-span-12">
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {job.bullets.map((b, bi) => (
                                                    <li key={bi} className="flex items-start gap-3 p-3.5 rounded-2xl bg-secondary/20 border border-border/30 hover:bg-secondary/40 transition-colors">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 animate-pulse" />
                                                        <span className="text-sm text-muted-foreground leading-relaxed font-medium">{b}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
