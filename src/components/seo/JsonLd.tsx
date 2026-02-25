import { portfolioData } from "@/data/portfolio";

const BASE_URL = "https://paudelbipin.com.np";

/**
 * JSON-LD Structured Data for the portfolio.
 * Provides rich search results (Knowledge Panel, Sitelinks, etc.)
 */

export function PersonJsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: portfolioData.about.name,
        url: BASE_URL,
        image: `${BASE_URL}/Bipin.png`,
        sameAs: [
            portfolioData.socials.github,
            portfolioData.socials.linkedin,
            portfolioData.socials.twitter,
            portfolioData.socials.instagram,
        ],
        jobTitle: "Full-Stack Developer & ML Engineer",
        worksFor: {
            "@type": "Organization",
            name: "Khata Academy",
        },
        alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Tribhuvan University",
        },
        address: {
            "@type": "PostalAddress",
            addressLocality: "Bharatpur",
            addressRegion: "Chitwan",
            addressCountry: "NP",
        },
        email: portfolioData.about.email,
        telephone: portfolioData.about.phone,
        knowsAbout: [
            "Python",
            "JavaScript",
            "Django",
            "React",
            "Next.js",
            "FastAPI",
            "Machine Learning",
            "Scikit-learn",
            "PostgreSQL",
            "Tailwind CSS",
            "Full-Stack Web Development",
        ],
        description: portfolioData.about.tagline,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

export function WebSiteJsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Bipin Paudel Portfolio",
        url: BASE_URL,
        description:
            "Portfolio of Bipin Paudel — Computer Science student and full-stack developer skilled in Django, React, Next.js, and Machine Learning.",
        author: {
            "@type": "Person",
            name: portfolioData.about.name,
        },
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: `${BASE_URL}/projects?search={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

export function BreadcrumbJsonLd({
    items,
}: {
    items: { name: string; url: string }[];
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

export function ProjectJsonLd({
    project,
}: {
    project: (typeof portfolioData.projects)[0];
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.description,
        url: `${BASE_URL}/projects/${project.slug}`,
        image: project.image,
        applicationCategory: project.category === "AI/ML" ? "DeveloperApplication" : "WebApplication",
        operatingSystem: "Web",
        author: {
            "@type": "Person",
            name: portfolioData.about.name,
            url: BASE_URL,
        },
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

export function ProfilePageJsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        mainEntity: {
            "@type": "Person",
            name: portfolioData.about.name,
            description: portfolioData.about.description,
            image: `${BASE_URL}/Bipin.png`,
            sameAs: [
                portfolioData.socials.github,
                portfolioData.socials.linkedin,
                portfolioData.socials.twitter,
            ],
        },
        dateCreated: "2025-02-23",
        dateModified: new Date().toISOString().split("T")[0],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
