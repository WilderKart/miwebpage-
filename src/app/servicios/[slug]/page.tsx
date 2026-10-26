import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { services, projects, site, absoluteUrl, wa, faqs } from "@/data/site";
import { pageMeta } from "@/lib/meta";
import Reveal from "@/components/Reveal";
import Btn from "@/components/Btn";
import JsonLd from "@/components/JsonLd";
import GridLines from "@/components/home/GridLines";
import ServiceProcess from "@/components/home/ServiceProcess";
import { CtaBand, FaqSection, ProjectGrid } from "@/components/Sections";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/servicios/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return pageMeta({ title: s.seoTitle, description: s.seoDescription, path: `/servicios/${s.slug}` });
}

export default async function ServicioPage({ params }: PageProps<"/servicios/[slug]">) {
  const { slug } = await params;
  const i = services.findIndex((x) => x.slug === slug);
  if (i === -1) notFound();
  const s = services[i];
  const next = services[(i + 1) % services.length];
  const isTech = s.slug === "servicio-tecnico";
  const faq = isTech ? faqs.filter((f) => /repar|garant|soporte/i.test(f.q)) : faqs.slice(0, 4);

  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.h1,
    serviceType: s.title,
    description: s.seoDescription,
    url: absoluteUrl(`/servicios/${s.slug}`),
    provider: { "@id": absoluteUrl("/#organization") },
    areaServed: isTech ? ["Cali", "Palmira", "Jamundí", "Yumbo"] : ["Cali", "Colombia"],
  };

  return (
    <>
      {/* Cabecera del servicio: imagen cuadrada + categorías + título a la izquierda y la imagen grande a la derecha */}
      <section className="sec l sd clip">
        <GridLines />
        <div className="wrap">
          <div className="sd-wrap">
            <div className="sd-left">
              <div className="sd-small" data-a="fade">
                <Image
                  src={s.images[0]}
                  alt={`${s.title}: imagen del servicio`}
                  fill
                  sizes="(min-width: 992px) 324px, 100vw"
                  style={{ objectPosition: `${s.focus[0]}% 50%` }}
                  priority
                />
              </div>
              <div className="sd-cats">
                <span className="sd-cap">Categorías</span>
                <div className="sd-chips">
                  {s.categories.map((c) => (
                    <span className="sd-chip" key={c}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <p className="sd-info">{s.short}</p>
              <h1 className="sd-h1" data-a="words">
                {s.title}
                <span className="sr-only"> — {s.h1}</span>
              </h1>
            </div>
            <div className="sd-big" data-a="fade">
              <Image
                src={s.images[1]}
                alt={`${s.title}: imagen principal del servicio`}
                fill
                sizes="(min-width: 992px) 660px, 100vw"
                style={{ objectPosition: `${s.focus[1]}% 50%` }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <ServiceProcess intro={s.intro} items={s.deliverables}>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 60 }}>
          <Btn href={wa(`Hola TechnoUltra, quiero información sobre ${s.title.toLowerCase()}.`)} tone="dark" external>
            Cotizar {s.title.toLowerCase()}
          </Btn>
          <Btn href="/contacto" tone="ghost">
            Contacto
          </Btn>
        </div>
      </ServiceProcess>

      {isTech && (
        <section className="section gray">
          <div className="wrap">
            <span className="label">Equipos que atendemos</span>
            <div className="res" style={{ marginTop: 40 }}>
              {[
                { t: "Computadores de escritorio", d: "Diagnóstico, limpieza, cambio de partes, formateo, ensamble y recuperación de información." },
                { t: "Portátiles", d: "Reparación de pantallas, baterías, teclados y puertos; mantenimiento y mejoras de rendimiento." },
                { t: "Impresoras", d: "Revisión y mantenimiento de impresoras: atascos, calidad de impresión y fallas de conexión." },
              ].map((e) => (
                <Reveal key={e.t}>
                  <div>
                    <b style={{ fontSize: 30, letterSpacing: "-0.04em" }}>{e.t}</b>
                    <span style={{ display: "block", marginTop: 14 }}>{e.d}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="muted" style={{ marginTop: 40, maxWidth: "60ch" }}>
              Atendemos Cali, Palmira, Jamundí y Yumbo con recogida, laboratorio y servicio a domicilio, y damos soporte remoto en toda Colombia. Escríbenos al {site.phone}.
            </p>
          </div>
        </section>
      )}

      {!isTech && (
        <section className="section light" style={{ paddingTop: 80 }}>
          <div className="wrap">
            <span className="label">Proyectos relacionados</span>
            <div style={{ marginTop: 40 }}>
              <ProjectGrid limit={Math.min(2, projects.length)} />
            </div>
          </div>
        </section>
      )}

      <FaqSection items={faq.length ? faq : faqs.slice(0, 4)} />

      <section className="light">
        <div className="wrap">
          <Link href={`/servicios/${next.slug}`} className="next-link">
            <small>Siguiente servicio</small>
            <h3>{next.title}</h3>
          </Link>
        </div>
      </section>
      <CtaBand />
      <JsonLd data={ld} />
    </>
  );
}
