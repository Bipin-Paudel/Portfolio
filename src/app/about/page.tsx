import type { Metadata } from "next";
import About from "@/components/sections/About";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "About Me — Education, Certifications & Background",
    description:
        "Learn about Bipin Paudel — a Computer Science student at Tribhuvan University, Full-Stack Developer, and ML Engineer from Bharatpur, Chitwan, Nepal. Education, certifications, and professional background.",
    alternates: {
        canonical: "https://paudelbipin.com.np/about",
    },
    openGraph: {
        title: "About Bipin Paudel — Education & Background",
        description:
            "CS student at Tribhuvan University specializing in Full-Stack Development and Machine Learning. Based in Bharatpur, Nepal.",
        url: "https://paudelbipin.com.np/about",
    },
};

export default function AboutPage() {
    return (
        <div className="pt-20">
            <BreadcrumbJsonLd
                items={[
                    { name: "Home", url: "https://paudelbipin.com.np" },
                    { name: "About", url: "https://paudelbipin.com.np/about" },
                ]}
            />
            <About />
        </div>
    );
}
