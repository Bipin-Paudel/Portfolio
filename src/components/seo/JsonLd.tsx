import { portfolioData, type Project } from "@/data/portfolio";

const BASE_URL = "https://paudelbipin.com.np";

/**
 * JSON-LD structured data for the portfolio.
 */

export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.about.name,
    url: BASE_URL,
    image: `${BASE_URL}/bipin.jpg`,
    sameAs: [
      portfolioData.socials.github,
      portfolioData.socials.linkedin,
      portfolioData.socials.twitter,
      portfolioData.socials.youtube,
    ],
    jobTitle: "AI & Backend Developer",
    worksFor: {
      "@type": "Organization",
      name: "SkinPal AI",
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
    knowsAbout: [
      "Python",
      "Django",
      "FastAPI",
      "Machine Learning",
      "Retrieval-Augmented Generation",
      "React",
      "React Native",
      "Next.js",
      "PostgreSQL",
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
    name: "Bipin Paudel",
    url: BASE_URL,
    description:
      "Portfolio of Bipin Paudel, an AI and backend developer from Nepal.",
    author: {
      "@type": "Person",
      name: portfolioData.about.name,
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

export function ProjectJsonLd({ project }: { project: Project }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    url: `${BASE_URL}/projects/${project.slug}`,
    applicationCategory:
      project.category === "AI/ML" ? "DeveloperApplication" : "WebApplication",
    operatingSystem: "Web",
    author: {
      "@type": "Person",
      name: portfolioData.about.name,
      url: BASE_URL,
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
      image: `${BASE_URL}/bipin.jpg`,
      sameAs: [
        portfolioData.socials.github,
        portfolioData.socials.linkedin,
        portfolioData.socials.twitter,
      ],
    },
    dateCreated: "2025-02-23",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
