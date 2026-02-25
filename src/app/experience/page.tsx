import type { Metadata } from "next";
import Experience from "@/components/sections/Experience";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Experience — Web Developer at Khata Academy & Data Fellow",
    description:
        "Bipin Paudel's professional experience: Web Developer at Khata Academy building financial MIS with Django & React, and Data Fellow at Code for Nepal working on community tech projects.",
    alternates: {
        canonical: "https://paudelbipin.com.np/experience",
    },
    openGraph: {
        title: "Professional Experience — Bipin Paudel",
        description:
            "Web Developer at Khata Academy · Data Fellow at Code for Nepal. Building financial MIS, business tools, and community data projects.",
        url: "https://paudelbipin.com.np/experience",
    },
};

export default function ExperiencePage() {
    return (
        <div className="pt-20">
            <BreadcrumbJsonLd
                items={[
                    { name: "Home", url: "https://paudelbipin.com.np" },
                    { name: "Experience", url: "https://paudelbipin.com.np/experience" },
                ]}
            />
            <Experience />
        </div>
    );
}
