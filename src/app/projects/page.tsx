import type { Metadata } from "next";
import ProjectsPageClient from "./ProjectsPageClient";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Bipin Paudel: ResearchGap AI, A-One Collection Stores, HumanSign, CrisisCare, and Khata Academy business tools.",
  alternates: {
    canonical: "https://paudelbipin.com.np/projects",
  },
  openGraph: {
    title: "Projects | Bipin Paudel",
    description:
      "Research work, an e-commerce business, and web apps built with Python, Django, React, and Next.js.",
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
