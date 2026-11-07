import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { projects, absoluteUrl, wa } from "@/data/site";
import { pageMeta } from "@/lib/meta";
import GridLines from "@/components/home/GridLines";
import JsonLd from "@/components/JsonLd";
import { BrowserFrame, PhoneFrame } from "@/components/portfolio/Frames";
import { CtaBand } from "@/components/Sections";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/proyectos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return pageMeta({
    title: `${p.name}: ${p.category.toLowerCase()} | Caso de éxito`,
    description: p.summary,
    path: `/proyectos/${p.slug}`,
  });
}

export default async function ProyectoPage({ params }: PageProps<"/proyectos/[slug]">) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i === -1) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];

  const ld = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${p.name}: ${p.category}`,
    description: p.summary,
    url: absoluteUrl(`/proyectos/${p.slug}`),
    creator: { "@id": absoluteUrl("/#organization") },
    about: p.industry,
    dateCreated: p.year,
    sameAs: [p.url],
  };

  return (
    <>
      <section className="sec l pd clip">
        <GridLines />
        <div className="wrap">
          <nav className="pd-crumbs" aria-label="Ruta de navegación">
            <Link href="/">Inicio</Link> / <Link href="/proyectos">Portafolio</Link> / {p.name}
          </nav>
          <div className="pd-head">
            <span className="lbl" data-a="label">
              {p.category}
            </span>
            <h1 className="pd-h1" data-a="words">
              {p.name}
            </h1>
          </div>
          <p className="pd-tag" data-a="lines">
            {p.tagline}
          </p>
          <dl className="pd-facts">
            <div>
              <dt>Cliente</dt>
              <dd>{p.client}</dd>
            </div>
            <div>
              <dt>Sector</dt>
              <dd>{p.industry}</dd>
            </div>
            <div>
              <dt>Año</dt>
              <dd>
                {p.month} {p.year}
              </dd>
            </div>
            <div>
              <dt>Servicios</dt>
              <dd>{p.services.join(", ")}</dd>
            </div>
          </dl>
          <div className="pd-cta">
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="pf-btn dark">
              Visitar sitio <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <Link href={wa(`Hola TechnoUltra, vi el caso ${p.name} y quiero algo parecido para mi negocio.`)} className="pf-btn" target="_blank" rel="noopener noreferrer">
              Quiero algo así
            </Link>
          </div>

          <div className="pd-hero-media" data-a="fade">
            <BrowserFrame src={p.shots[0]} url={p.url} alt={`Captura de ${p.name}`} priority ratio={p.ratio} sizes="(min-width: 1440px) 1296px, 100vw" />
            {p.mobile && <PhoneFrame src={p.mobile} alt={`Versión móvil de ${p.name}`} />}
          </div>
        </div>
      </section>

      <section className="sec g pd-story">
        <GridLines />
        <div className="wrap">
          <div className="pd-row">
            <span className="lbl">El reto</span>
            <p className="pd-big" data-a="lines">
              {p.challenge}
            </p>
          </div>
          <div className="pd-row">
            <span className="lbl">Lo que hicimos</span>
            <p className="pd-big" data-a="lines">
              {p.solution}
            </p>
          </div>
        </div>
      </section>

      <section className="sec l pd-feat">
        <GridLines />
        <div className="wrap">
          <div className="pd-row">
            <span className="lbl">Detalles del proyecto</span>
            <ol className="pd-list">
              {p.highlights.map((h, k) => (
                <li key={h} data-a="slide">
                  <span>{String(k + 1).padStart(2, "0")}</span>
                  <p>{h}</p>
                </li>
              ))}
            </ol>
          </div>
          {p.shots.length > 1 && (
            <div className="pd-gallery">
              {p.shots.slice(1).map((s, k) => (
                <div key={s} data-a="fade">
                  <BrowserFrame src={s} url={p.url} alt={`${p.name}: sección ${k + 2}`} top={false} sizes="(min-width: 992px) 640px, 100vw" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="sec k pd-res">
        <div className="wrap">
          <div className="pd-row">
            <span className="lbl">En cifras</span>
            <div className="pd-nums">
              {p.results.map((r) => (
                <div key={r.label} data-a="up">
                  <b>{r.value}</b>
                  <span>{r.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="pd-stack">
            {p.stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="sec l pd-next">
        <GridLines />
        <div className="wrap">
          <Link href={`/proyectos/${next.slug}`} className="pd-nl">
            <span className="lbl">Siguiente proyecto</span>
            <span className="pd-nn">{next.name}</span>
            <span className="pd-nt">{next.category}</span>
          </Link>
        </div>
      </section>
      <CtaBand title="¿Tu negocio será el próximo caso?" />
      <JsonLd data={ld} />
    </>
  );
}
