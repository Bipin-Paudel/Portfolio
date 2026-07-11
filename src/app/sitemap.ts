import type { MetadataRoute } from "next";
import { portfolioData } from "@/data/portfolio";

export const dynamic = "force-static";

const BASE_URL = "https://paudelbipin.com.np";
const LAST_MODIFIED = "2026-07-12T00:00:00.000Z";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = portfolioData.projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...projectRoutes,
  ];
}
