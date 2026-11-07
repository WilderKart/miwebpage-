import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { posts, blogCategories, services, site, absoluteUrl, wa } from "@/data/site";
import { pageMeta } from "@/lib/meta";
import GridLines from "@/components/home/GridLines";
import JsonLd from "@/components/JsonLd";
import { CtaBand } from "@/components/Sections";
import BlogCard from "@/components/blog/BlogCard";
import Rich from "@/components/blog/Rich";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) return {};
  const m = pageMeta({
    title: p.metaTitle,
    description: p.description,
    path: `/blog/${p.slug}`,
    image: p.image,
    keywords: p.keywords,
    article: { published: p.date, modified: p.updated, section: p.category, tags: p.keywords },
  });
  // El título ya está pensado para Google (≤ 60 caracteres): sin sufijo de marca.
  return { ...m, title: { absolute: p.metaTitle } };
}

const heights = [272, 361, 400, 161];

const shareIcons = {
  whatsapp:
    "M20.5 3.5A11.8 11.8 0 0 0 1.9 17.8L0 24l6.4-1.7a11.8 11.8 0 0 0 5.6 1.4h0A11.8 11.8 0 0 0 20.5 3.5Zm-8.5 18.2a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 1 1 8.4 4.7Zm5.4-7.3c-.3-.1-1.7-.8-2-.9s-.5-.1-.7.1-.8.9-.9 1.1-.3.2-.6.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6a.6.6 0 0 0 0-.5c-.1-.1-.7-1.7-.9-2.3s-.5-.5-.7-.5h-.6a1.1 1.1 0 0 0-.8.4 3.3 3.3 0 0 0-1 2.4 5.7 5.7 0 0 0 1.2 3 13 13 0 0 0 5 4.4c1.8.8 2.5.8 3.4.7a2.9 2.9 0 0 0 1.9-1.3 2.4 2.4 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3Z",
  facebook: "M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4a22 22 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.2h2.8V22h3.4Z",
  linkedin:
    "M6.9 8.9H3.4V21h3.5V8.9ZM5.2 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM21 21v-6.6c0-3.2-1.7-4.7-4-4.7a3.5 3.5 0 0 0-3.2 1.8V8.9h-3.4V21h3.5v-6.3c0-1.7.9-2.7 2.3-2.7s2 1 2 2.6V21H21Z",
};

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) notFound();

  const url = absoluteUrl(`/blog/${p.slug}`);
  const date = new Intl.DateTimeFormat("es-CO", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(p.date));
  const cat = blogCategories.find((c) => c.label === p.category);
  const related = [...posts.filter((x) => x.slug !== p.slug && x.category === p.category), ...posts.filter((x) => x.slug !== p.slug && x.category !== p.category)].slice(0, 4);
  const words = [p.intro, ...p.sections.flatMap((s) => [...s.paragraphs, ...(s.list ?? [])])]
    .join(" ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .split(/\s+/).length;
  const svc = services.find((s) => s.slug === p.service.slug);

  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      image: [absoluteUrl(p.image)],
      datePublished: p.date,
      dateModified: p.updated,
      inLanguage: "es-CO",
      articleSection: p.category,
      keywords: p.keywords.join(", "),
      wordCount: words,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: { "@type": "Organization", name: site.name, url: absoluteUrl("/") },
      publisher: { "@id": absoluteUrl("/#organization") },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: p.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
        { "@type": "ListItem", position: 3, name: p.title, item: url },
      ],
    },
  ];

  const share = [
    { k: "whatsapp", label: "Compartir en WhatsApp", href: `https://wa.me/?text=${encodeURIComponent(`${p.title} ${url}`)}` },
    { k: "facebook", label: "Compartir en Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
    { k: "linkedin", label: "Compartir en LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` },
  ] as const;

  return (
    <>
      <article>
        <section className="sec l bp">
          <div className="wrap">
            <nav className="bp-crumbs" aria-label="Ruta de navegación">
              <Link href="/">Inicio</Link> / <Link href="/blog">Blog</Link> / <Link href={`/blog/categoria/${cat?.slug ?? ""}`}>{p.category}</Link>
            </nav>
            <div className="bp-hero">
              <div className="bp-author">
                <span className="av">TU</span>
                <div>
                  <div className="bc-an">TechnoUltra</div>
                  <div className="bc-ap">Editor</div>
                </div>
              </div>
              <h1 className="bp-h1" data-a="words">
                {p.title}
              </h1>
            </div>
            <div className="bp-cover" data-a="fade">
              <Image src={p.image} alt={p.imageAlt} fill priority sizes="(min-width: 1440px) 1296px, 100vw" />
            </div>
          </div>
        </section>

        <section className="sec l bp-body">
          <GridLines />
          <div className="wrap">
            <div className="bp-grid">
              <aside className="bp-side">
                <div className="bp-date">
                  <time dateTime={p.date}>{date}</time>
                  <span>{p.readMinutes} min de lectura</span>
                </div>
                <div className="bp-share">
                  {share.map((s) => (
                    <a key={s.k} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                        <path fill="currentColor" d={shareIcons[s.k]} />
                      </svg>
                    </a>
                  ))}
                </div>
              </aside>
              <div className="bp-content">
                <p className="bp-intro">{p.intro}</p>
                <div className="bp-line" />
                {p.sections.map((s) => (
                  <section className="bp-block" key={s.heading}>
                    <h2>{s.heading}</h2>
                    {s.paragraphs.map((t) => (
                      <p key={t.slice(0, 30)}>
                        <Rich text={t} />
                      </p>
                    ))}
                    {s.list && (
                      <ul>
                        {s.list.map((li) => (
                          <li key={li}>{li}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
                <section className="bp-block bp-faq">
                  <h2>Preguntas frecuentes</h2>
                  {p.faqs.map((f) => (
                    <div key={f.q}>
                      <h3>{f.q}</h3>
                      <p>{f.a}</p>
                    </div>
                  ))}
                </section>
                <aside className="bp-cta">
                  <p className="bp-cta-t">¿Quieres que lo hagamos por ti?</p>
                  <p className="bp-cta-d">
                    {svc ? `Conoce nuestro servicio de ${p.service.label.toLowerCase()} y pide una cotización sin compromiso.` : "Pide una cotización sin compromiso."}
                  </p>
                  <div className="bp-cta-b">
                    <Link href={`/servicios/${p.service.slug}`} className="pf-btn dark">
                      {p.service.label} <ArrowUpRight size={15} aria-hidden="true" />
                    </Link>
                    <a href={wa(`Hola TechnoUltra, leí el artículo «${p.title}» y quiero una cotización.`)} className="pf-btn" target="_blank" rel="noopener noreferrer">
                      Escríbenos por WhatsApp
                    </a>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </article>

      <section className="sec l bl bp-more">
        <GridLines />
        <div className="wrap">
          <div className="bl-head">
            <span className="lbl" data-a="label">
              El blog
            </span>
            <h2 className="bl-h1">Sigue leyendo</h2>
          </div>
          <div className="bp-rel">
            {related.map((r, i) => (
              <BlogCard key={r.slug} p={r} h={heights[i % heights.length]} sizes="(min-width: 992px) 315px, 50vw" />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
      {ld.map((d, i) => (
        <JsonLd key={i} data={d} />
      ))}
    </>
  );
}
