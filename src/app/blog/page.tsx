import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Blog — Tutorials, Thoughts & Learnings",
    description:
        "Bipin Paudel's blog — upcoming articles on web development, Django, React, Next.js, Machine Learning, Python, and UI/UX design tips. Stay tuned for tutorials and insights.",
    alternates: {
        canonical: "https://paudelbipin.com.np/blog",
    },
    openGraph: {
        title: "Blog — Bipin Paudel",
        description:
            "Upcoming blog posts on web development, Django, React, Machine Learning, and more.",
        url: "https://paudelbipin.com.np/blog",
    },
};

export default function BlogPage() {
    return (
        <>
            <BreadcrumbJsonLd
                items={[
                    { name: "Home", url: "https://paudelbipin.com.np" },
                    { name: "Blog", url: "https://paudelbipin.com.np/blog" },
                ]}
            />
            <BlogPageClient />
        </>
    );
}
