import type { MetadataRoute } from "next";
import { absoluteUrl, services, projects, posts, blogCategories } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = ["/", "/nosotros", "/servicios", "/proyectos", "/blog", "/planes", "/contacto", "/privacidad", "/terminos"];
  return [
    ...fixed.map((p) => ({ url: absoluteUrl(p), changeFrequency: "monthly" as const, priority: p === "/" ? 1 : 0.7 })),
    ...services.map((s) => ({ url: absoluteUrl(`/servicios/${s.slug}`), changeFrequency: "monthly" as const, priority: 0.8 })),
    ...projects.map((p) => ({ url: absoluteUrl(`/proyectos/${p.slug}`), changeFrequency: "yearly" as const, priority: 0.6 })),
    ...posts.map((p) => ({ url: absoluteUrl(`/blog/${p.slug}`), lastModified: p.updated, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...blogCategories.map((c) => ({ url: absoluteUrl(`/blog/categoria/${c.slug}`), changeFrequency: "monthly" as const, priority: 0.5 })),
  ];
}
