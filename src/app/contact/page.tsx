import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Contact — Get in Touch with Bipin Paudel",
    description:
        "Reach out to Bipin Paudel for collaboration, freelance projects, or job opportunities. Full-Stack Developer & ML Engineer based in Bharatpur, Chitwan, Nepal.",
    alternates: {
        canonical: "https://paudelbipin.com.np/contact",
    },
    openGraph: {
        title: "Contact Bipin Paudel — Developer for Hire",
        description:
            "Get in touch for web development, Django, React, or Machine Learning projects. Based in Bharatpur, Nepal.",
        url: "https://paudelbipin.com.np/contact",
    },
};

export default function ContactPage() {
    return (
        <div className="pt-20">
            <BreadcrumbJsonLd
                items={[
                    { name: "Home", url: "https://paudelbipin.com.np" },
                    { name: "Contact", url: "https://paudelbipin.com.np/contact" },
                ]}
            />
            <Contact />
        </div>
    );
}
