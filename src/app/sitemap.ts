import type { MetadataRoute } from "next";
import { articles } from "@/data/site";

const BASE = "https://danyellefreitasadvogada.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                        lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/sobre`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/areas`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/areas/trabalhista`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/areas/previdenciario`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/diagnostico`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/conteudo`,          lastModified: new Date(), changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE}/contato`,           lastModified: new Date(), changeFrequency: "yearly",  priority: 0.8 },
    { url: `${BASE}/privacidade`,       lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/termos`,            lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/lgpd`,             lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
  ];

  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE}/conteudo/${a.slug}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...articleRoutes];
}
