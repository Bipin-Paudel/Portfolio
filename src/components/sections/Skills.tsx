"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Code2, Server, BrainCircuit, Database, Laptop, PenTool, Layout, Terminal } from "lucide-react";

export default function Skills() {
    const categories = [
        {
            title: "Core Programming",
            icon: <Code2 className="w-8 h-8 text-blue-500" />,
            skills: portfolioData.skills.programming,
            className: "md:col-span-2 md:row-span-1",
            color: "from-blue-500/10 to-cyan-500/5",
        },
        {
            title: "Web & Backend",
            icon: <Server className="w-8 h-8 text-emerald-500" />,
            skills: portfolioData.skills.frameworks,
            className: "md:col-span-1 md:row-span-2",
            color: "from-emerald-500/10 to-teal-500/5",
        },
        {
            title: "AI & Data Science",
            icon: <BrainCircuit className="w-8 h-8 text-violet-500" />,
            skills: portfolioData.skills.ml,
            className: "md:col-span-2 md:row-span-2",
            color: "from-violet-500/10 to-purple-500/5",
        },
        {
            title: "Databases & Tools",
            icon: <Database className="w-8 h-8 text-rose-500" />,
            skills: portfolioData.skills.databases,
            className: "md:col-span-1 md:row-span-1",
            color: "from-rose-500/10 to-pink-500/5",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="skills" className="relative max-w-7xl mx-auto px-4 py-24 scroll-mt-20 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold mb-6 tracking-wider uppercase">
                    <Terminal className="w-3 h-3" /> Tech Stack
                </div>
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                    Professional <span className="gradient-text">Skills</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    My technical expertise spans across the complete software development lifecycle,
                    with a core focus on scalable backend systems and intelligent ML integrations.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
                {categories.map((category, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        className={`group relative glass rounded-[2.5rem] p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden flex flex-col h-full ${category.className}`}
                    >
                        {/* Background Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />

                        {/* Shimmer effect */}
                        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />

                        <div className="relative z-10 flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-2xl bg-background/50 border border-border/50 group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold tracking-tight">{category.title}</h3>
                        </div>

                        <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                            {category.skills.map((skill, sIdx) => (
                                <div key={sIdx} className="w-full">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-semibold tracking-tight">{skill.name}</span>
                                        <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-secondary/50 rounded-full overflow-hidden border border-border/50">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 + sIdx * 0.1 }}
                                            className="h-full bg-primary relative overflow-hidden"
                                        >
                                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
                                        </motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}

                {/* Additional Tools Info Box */}
                <motion.div
                    variants={itemVariants}
                    className="md:col-span-3 glass rounded-[2.5rem] p-10 border border-border/50 bg-gradient-to-r from-primary/5 to-transparent flex flex-col md:flex-row items-center justify-between gap-8 mt-4 group"
                >
                    <div className="max-w-xl">
                        <div className="flex items-center gap-3 mb-4">
                            <Laptop className="w-6 h-6 text-primary" />
                            <h3 className="text-2xl font-bold tracking-tight">Development Workflow</h3>
                        </div>
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                            I leverage modern tools for efficient development including <span className="text-foreground font-semibold">Git, Docker, VS Code, and Postman</span>.
                            My process prioritizes clean code, comprehensive testing, and continuous integration.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2.5 justify-center md:justify-end">
                        {['Git', 'Docker', 'Postman', 'VS Code', 'Linux'].map((tool, i) => (
                            <span key={i} className="px-5 py-2.5 rounded-2xl bg-background border border-border/50 text-sm font-bold group-hover:border-primary/30 group-hover:text-primary transition-all duration-300">
                                {tool}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
