import type { Metadata } from "next";
import Skills from "@/components/sections/Skills";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Skills — Python, Django, React, Next.js, Machine Learning",
    description:
        "Explore Bipin Paudel's technical skills: Python, JavaScript, Django, React.js, Next.js, FastAPI, NestJS, Machine Learning, Scikit-learn, PostgreSQL, MongoDB, and more.",
    alternates: {
        canonical: "https://paudelbipin.com.np/skills",
    },
    openGraph: {
        title: "Technical Skills — Bipin Paudel",
        description:
            "Full-stack programming skills: Python, Django, React, Next.js, FastAPI, Machine Learning, PostgreSQL, and modern web technologies.",
        url: "https://paudelbipin.com.np/skills",
    },
};

export default function SkillsPage() {
    return (
        <div className="pt-20">
            <BreadcrumbJsonLd
                items={[
                    { name: "Home", url: "https://paudelbipin.com.np" },
                    { name: "Skills", url: "https://paudelbipin.com.np/skills" },
                ]}
            />
            <Skills />
        </div>
    );
}
