import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { projects, absoluteUrl } from "@/data/site";
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

// Página de caso, con la estructura de la referencia (Conax /works): hero con título, ficha + texto + imagen,
// segundo bloque, bloque alto con cita, cifras, galería en marquesina y proyectos relacionados.
export default async function ProyectoPage({ params }: PageProps<"/proyectos/[slug]">) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i === -1) notFound();
  const p = projects[i];
  const related = [projects[(i + 1) % projects.length], projects[(i + 2) % projects.length]];

  // Imágenes de la galería: las capturas del proyecto repetidas en el patrón de la referencia (siempre completas).
  const pool = [...p.shots, ...(p.mobile ? [p.mobile] : [])];
  const g = (n: number) => pool[n % pool.length];
  const stats = [...p.results, { value: p.year, label: "Año de publicación" }];
  const second = p.shots[1] ?? p.shots[0];

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

  const tile = (src: string, cls: string, k: number) => (
    <div className={`pdw-tile ${cls}`} key={`${cls}-${k}`}>
      <Image src={src} alt="" fill sizes="(min-width: 992px) 642px, 80vw" />
    </div>
  );
  const group = (key: string) => (
    <div className="pdw-group" key={key} aria-hidden={key === "b" ? "true" : undefined}>
      <div className="pdw-col">
        <div className="pdw-row">
          {tile(g(0), "s", 0)}
          {tile(g(1), "s", 1)}
          {tile(g(2), "m", 2)}
        </div>
        <div className="pdw-row">
          {tile(g(3), "s", 3)}
          {tile(g(4), "m", 4)}
          {tile(g(5), "s", 5)}
        </div>
      </div>
      <div className="pdw-col">{tile(g(6), "l", 6)}</div>
      <div className="pdw-col">
        {tile(g(7), "m", 7)}
        {tile(g(8), "m", 8)}
      </div>
    </div>
  );

  return (
    <>
      <section className="pdh clip" style={{ "--ac": p.accent } as React.CSSProperties}>
        <Image className="pdh-bg" src={p.image} alt="" fill priority sizes="100vw" />
        <div className="pdh-shade" aria-hidden="true" />
        <div className="wrap">
          <h1 className="pdh-title" data-a="words">
            {p.name}
          </h1>
        </div>
      </section>

      <section className="sec l pdw">
        <GridLines />
        <div className="wrap">
          <div className="pdw-grid">
            <dl className="pdw-info">
              <div>
                <dt>CLIENTE</dt>
                <dd>{p.client}</dd>
              </div>
              <div>
                <dt>FECHA</dt>
                <dd>
                  {p.month} {p.year}
                </dd>
              </div>
              <div>
                <dt>SECTOR</dt>
                <dd>{p.industry}</dd>
              </div>
              <div>
                <dt>SERVICIOS</dt>
                <dd className="pdw-svc">
                  {p.services.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </dd>
              </div>
            </dl>
            <div className="pdw-right">
              <p className="pdw-lead">{p.summary}</p>
              <p className="pdw-p">{p.challenge}</p>
              <div className="pdw-img1" data-a="fade">
                <Image src={p.shots[0]} alt={`Captura de ${p.name}`} fill sizes="(min-width: 992px) 659px, 100vw" />
              </div>
            </div>
          </div>

          <div className="pdw-grid two">
            <div className="pdw-left">
              <div className="pdw-img2" data-a="fade">
                <Image src={p.mobile ?? second} alt={`${p.name}: vista del proyecto`} fill sizes="324px" />
              </div>
            </div>
            <div className="pdw-right">
              <p className="pdw-lead">{p.solution}</p>
              <p className="pdw-p">Tecnologías y herramientas: {p.stack.join(", ")}.</p>
            </div>
          </div>

          <div className="pdw-grid three">
            <div className="pdw-tall" data-a="fade" style={{ "--ac": p.accent } as React.CSSProperties}>
              <div className="pdw-tall-in">
                <BrowserFrame src={second} url={p.url} alt={`${p.name}: sección del sitio`} ratio={p.shots[1] ? 1.6 : p.ratio} sizes="(min-width: 992px) 560px, 90vw" top={false} />
                {p.mobile && <PhoneFrame src={p.mobile} alt={`Versión móvil de ${p.name}`} />}
              </div>
            </div>
            <div className="pdw-right end">
              <p className="pdw-lead">{p.highlights[0]}.</p>
              <ul className="pdw-list">
                {p.highlights.slice(1).map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <div className="pdw-quote">
                <p>Míralo en línea, funcionando hoy.</p>
                <a href={p.url} target="_blank" rel="noopener noreferrer">
                  {p.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")} <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec l pds">
        <div className="wrap">
          <div className="pds-list">
            {stats.map((r) => (
              <div className="pds-item" key={r.label} data-a="up">
                <b>{r.value}</b>
                <div>
                  <span>{r.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <GridLines />
      </section>

      <div className="pdw-gallery" aria-label={`Galería de ${p.name}`}>
        <div className="pdw-track">
          {group("a")}
          {group("b")}
        </div>
      </div>

      <section className="sec l pdr">
        <GridLines />
        <div className="wrap">
          <div className="pdr-head">
            <span className="lbl">Proyectos relacionados</span>
            <div className="pdr-h">
              <span>PROYECTOS</span>
              <span className="g">MÁS</span>
            </div>
          </div>
          <div className="pdr-grid">
            {related.map((r) => (
              <Link href={`/proyectos/${r.slug}`} className="pdr-card" key={r.slug} data-cursor="Ver caso">
                <div className="pdr-box" style={{ aspectRatio: String(r.ratio) }}>
                  <Image src={r.image} alt={`Captura de ${r.name}`} fill sizes="(min-width: 992px) 642px, 100vw" />
                </div>
                <div className="pdr-meta">
                  <span>{r.name}</span>
                  <span>
                    / {r.month} {r.year}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="¿Tu negocio será el próximo caso?" />
      <JsonLd data={ld} />
    </>
  );
}
