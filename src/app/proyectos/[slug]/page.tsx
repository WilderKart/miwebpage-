import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { projects } from "@/data/site";
import { pageMeta } from "@/lib/meta";
import Reveal from "@/components/Reveal";
import Btn from "@/components/Btn";
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

  return (
    <>
      <section className="detail-hero" style={{ paddingBottom: 60 }}>
        <div className="wrap">
          <nav className="crumbs" style={{ marginBottom: 40, fontSize: 14, color: "#525252" }} aria-label="Ruta de navegación">
            <Link href="/">Inicio</Link> / <Link href="/proyectos">Proyectos</Link> / {p.name}
          </nav>
          <div className="grid4">
            <h1>
              {p.name}: {p.category.toLowerCase()}
            </h1>
            <p className="lead">{p.summary}</p>
          </div>
        </div>
      </section>

      <section className="section light" style={{ paddingTop: 60 }}>
        <div className="wrap">
          <div className="facts">
            <div>
              <small>Cliente</small>
              <b>{p.client}</b>
            </div>
            <div>
              <small>Fecha</small>
              <b>
                {p.month} {p.year}
              </b>
            </div>
            <div>
              <small>Industria</small>
              <b>{p.industry}</b>
            </div>
            <div>
              <small>Servicios</small>
              <b>{p.services.join(", ")}</b>
            </div>
          </div>
          <div className="shot">
            <Image src={p.image} alt={`Captura del proyecto ${p.name}`} fill sizes="(min-width: 1440px) 1296px, 100vw" priority />
          </div>

          <div className="case">
            <h2>El reto</h2>
            <p>{p.challenge}</p>
          </div>
          <div className="case" style={{ borderTop: "1px solid rgba(0,0,0,.1)" }}>
            <h2>La solución</h2>
            <p>{p.solution}</p>
          </div>

          <Reveal className="res" delay={0.05}>
            {p.results.map((r) => (
              <div key={r.label}>
                <b>{r.value}</b>
                <span>{r.label}</span>
              </div>
            ))}
          </Reveal>

          <div className="chips" style={{ marginTop: 40 }}>
            {p.stack.map((t) => (
              <span className="chip" key={t}>
                {t}
              </span>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Btn href={p.url} tone="dark" external>
              Visitar {p.name}
            </Btn>
          </div>
        </div>
      </section>

      <section className="light">
        <div className="wrap">
          <Link href={`/proyectos/${next.slug}`} className="next-link">
            <small>Siguiente proyecto</small>
            <h3>{next.name}</h3>
          </Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
