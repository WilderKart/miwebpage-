import type { Metadata } from "next";

export function pageMeta({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "website", locale: "es_CO" },
    twitter: { card: "summary_large_image", title, description },
  };
}
