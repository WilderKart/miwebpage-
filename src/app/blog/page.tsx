import { pageMeta } from "@/lib/meta";
import PageHero from "@/components/PageHero";
import BlogIndex from "@/components/blog/BlogIndex";
import { CtaBand } from "@/components/Sections";
import JsonLd from "@/components/JsonLd";
import { posts, absoluteUrl } from "@/data/site";

export const metadata = pageMeta({
  title: "Blog de TechnoUltra | Páginas web, SEO local, branding y servicio técnico",
  description:
    "Guías prácticas de TechnoUltra: cuánto cuesta una página web en Colombia, SEO local en Cali, branding para pymes y mantenimiento de computadores.",
  path: "/blog",
  keywords: ["blog de desarrollo web", "SEO local en Cali", "branding para pymes", "mantenimiento de computadores", "páginas web en Colombia"],
});

export default function Blog() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog de TechnoUltra",
    url: absoluteUrl("/blog"),
    inLanguage: "es-CO",
    publisher: { "@id": absoluteUrl("/#organization") },
    blogPost: posts.map((p) => ({ "@type": "BlogPosting", headline: p.title, url: absoluteUrl(`/blog/${p.slug}`), datePublished: p.date, image: absoluteUrl(p.image) })),
  };
  return (
    <>
      <PageHero word="Blog" title="Guías y artículos sobre páginas web, SEO, branding y tecnología" crumbs={[{ label: "Blog" }]} />
      <BlogIndex />
      <CtaBand />
      <JsonLd data={ld} />
    </>
  );
}
