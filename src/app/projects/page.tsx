import type { Metadata } from "next";
import ProjectsPageClient from "./ProjectsPageClient";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Projects — HumanSign, CrisisCare & More",
    description:
        "Explore Bipin Paudel's portfolio projects: HumanSign (AI keystroke verification), CrisisCare (disaster management app), Khata Academy Business Tools, and more. Built with Python, React, Django, Next.js, FastAPI.",
    alternates: {
        canonical: "https://paudelbipin.com.np/projects",
    },
    openGraph: {
        title: "Projects by Bipin Paudel — Full-Stack & ML",
        description:
            "Real-world applications, hackathon projects, and open-source work built with Python, React, Django, Next.js, and Machine Learning.",
        url: "https://paudelbipin.com.np/projects",
    },
};

export default function ProjectsPage() {
    return (
        <>
            <BreadcrumbJsonLd
                items={[
                    { name: "Home", url: "https://paudelbipin.com.np" },
                    { name: "Projects", url: "https://paudelbipin.com.np/projects" },
                ]}
            />
            <ProjectsPageClient />
        </>
    );
}
