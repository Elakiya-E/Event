import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://iraguevents.com";
  const now = new Date();

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/customised-decor", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/our-work", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/case-studies", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/why-iragu", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.95, changeFrequency: "monthly" as const },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
