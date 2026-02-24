"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectImageProps {
    src: string;
    alt: string;
}

export default function ProjectImage({ src, alt }: ProjectImageProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="aspect-video w-full rounded-[2.5rem] overflow-hidden relative border border-border/50 shadow-2xl shadow-primary/5"
        >
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                priority
            />
            {/* Subtle Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
        </motion.div>
    );
}
