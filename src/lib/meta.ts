import type { Metadata } from "next";

type Opts = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  article?: { published: string; modified: string; section: string; tags: string[] };
};

export function pageMeta({ title, description, path, image, keywords, article }: Opts): Metadata {
  const images = image ? [{ url: image, alt: title }] : undefined;
  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      locale: "es_CO",
      ...(article
        ? { type: "article" as const, publishedTime: article.published, modifiedTime: article.modified, section: article.section, tags: article.tags, authors: ["TechnoUltra"] }
        : { type: "website" as const }),
      ...(images ? { images } : {}),
    },
    twitter: { card: "summary_large_image", title, description, ...(image ? { images: [image] } : {}) },
  };
}
