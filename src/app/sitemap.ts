import type { MetadataRoute } from "next";
import { portfolioData } from "@/data/portfolio";

export const dynamic = "force-static";

const BASE_URL = "https://paudelbipin.com.np";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const projectRoutes = portfolioData.projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...projectRoutes,
  ];
}

