import type { MetadataRoute } from "next";
import { portfolioData } from "@/data/portfolio";

const BASE_URL = "https://paudelbipin.com.np";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = portfolioData.projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...projectRoutes,
  ];
}
