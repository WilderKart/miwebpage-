import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogCategories, posts } from "@/data/site";
import { pageMeta } from "@/lib/meta";
import PageHero from "@/components/PageHero";
import BlogIndex from "@/components/blog/BlogIndex";
import { CtaBand } from "@/components/Sections";

export function generateStaticParams() {
  return blogCategories.map((c) => ({ cat: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/categoria/[cat]">): Promise<Metadata> {
  const { cat } = await params;
  const c = blogCategories.find((x) => x.slug === cat);
  if (!c) return {};
  const n = posts.filter((p) => p.category === c.label).length;
  return pageMeta({
    title: `${c.label}: guías y artículos | Blog de TechnoUltra`,
    description: `${n} artículos de ${c.label.toLowerCase()} para negocios en Cali y Colombia, escritos por el equipo de TechnoUltra.`,
    path: `/blog/categoria/${c.slug}`,
  });
}

export default async function Categoria({ params }: PageProps<"/blog/categoria/[cat]">) {
  const { cat } = await params;
  const c = blogCategories.find((x) => x.slug === cat);
  if (!c) notFound();
  return (
    <>
      <PageHero word="Blog" title={`${c.label}: guías y artículos para tu negocio`} crumbs={[{ href: "/blog", label: "Blog" }, { label: c.label }]} />
      <BlogIndex category={c.label} />
      <CtaBand />
    </>
  );
}
