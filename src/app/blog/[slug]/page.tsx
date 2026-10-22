import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { posts, site, absoluteUrl } from "@/data/site";
import { pageMeta } from "@/lib/meta";
import Art from "@/components/Art";
import JsonLd from "@/components/JsonLd";
import { CtaBand, PostCard } from "@/components/Sections";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) return {};
  return pageMeta({ title: p.title, description: p.excerpt, path: `/blog/${p.slug}` });
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const i = posts.findIndex((x) => x.slug === slug);
  if (i === -1) notFound();
  const p = posts[i];
  const date = new Date(p.date + "T12:00:00").toLocaleDateString("es-CO", { day: "numeric", month: "long", year: "numeric" });
  const more = posts.filter((x) => x.slug !== p.slug).slice(0, 3);

  const ld = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.excerpt,
    datePublished: p.date,
    inLanguage: "es-CO",
    mainEntityOfPage: absoluteUrl(`/blog/${p.slug}`),
    author: { "@type": "Organization", name: site.name },
    publisher: { "@id": absoluteUrl("/#organization") },
  };

  return (
    <>
      <section className="detail-hero">
        <div className="wrap">
          <nav className="crumbs" style={{ marginBottom: 40, fontSize: 14, color: "#525252" }} aria-label="Ruta de navegación">
            <Link href="/">Inicio</Link> / <Link href="/blog">Blog</Link> / {p.category}
          </nav>
          <div className="grid4">
            <h1>{p.title}</h1>
            <p className="lead">{p.excerpt}</p>
          </div>
          <div className="post-meta">
            <span>{p.category}</span>
            <span>{date}</span>
            <span>{p.readMinutes} min de lectura</span>
          </div>
        </div>
      </section>
      <article className="section light" style={{ paddingTop: 80 }}>
        <div className="wrap">
          <Art tone="a" variant={i + 1} className="detail-visual" />
          <div className="post-layout">
            <div className="prose">
              {p.sections.map((s) => (
                <section key={s.heading}>
                  <h2>{s.heading}</h2>
                  {s.paragraphs.map((t) => (
                    <p key={t.slice(0, 24)}>{t}</p>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </div>
      </article>
      <section className="section gray">
        <div className="wrap">
          <span className="label">Sigue leyendo</span>
          <div className="blog-grid" style={{ marginTop: 40 }}>
            {more.map((m, k) => (
              <PostCard key={m.slug} p={m} i={k} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
      <JsonLd data={ld} />
    </>
  );
}
