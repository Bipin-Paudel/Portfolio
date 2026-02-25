"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function BlogPageClient() {
    return (
        <div className="min-h-screen pt-32 pb-24 max-w-4xl mx-auto px-4 flex flex-col justify-center">
            <Link
                href="/"
                className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-12 transition-colors group self-start"
            >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-8">
                    <BookOpen className="w-12 h-12 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
                <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-8"></div>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                    Coming Soon. I&apos;ll be sharing my thoughts, tutorials, and learnings here.
                </p>

                <div className="glass p-8 rounded-3xl inline-block max-w-md w-full">
                    <h2 className="text-2xl font-bold mb-4">Stay tuned!</h2>
                    <p className="text-muted-foreground mb-6 text-sm">
                        I am currently working on adding a markdown-supported blog to share my knowledge about web development, Django, and UI/UX design.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
