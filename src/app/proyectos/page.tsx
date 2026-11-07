import { pageMeta } from "@/lib/meta";
import GridLines from "@/components/home/GridLines";
import PortfolioList from "@/components/portfolio/PortfolioList";
import { CtaBand } from "@/components/Sections";
import { projects, absoluteUrl } from "@/data/site";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "Portafolio | Páginas web, tiendas online y aplicaciones en Colombia",
  description:
    "Portafolio de TechnoUltra: Electriobras, Excelenter, Tufink, Electriobras Ferretería y TechnoUltra App. Páginas web, tiendas online, sitios de reservas y aplicaciones a medida hechas en Cali.",
  path: "/proyectos",
});

export default function Proyectos() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Portafolio de TechnoUltra",
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(`/proyectos/${p.slug}`),
      name: `${p.name}: ${p.category.toLowerCase()}`,
    })),
  };
  const sectors = new Set(projects.map((p) => p.industry)).size;

  return (
    <>
      <section className="sec l pf-hero clip">
        <GridLines />
        <div className="wrap">
          <div className="pf-top">
            <span className="lbl" data-a="label">
              Portafolio
            </span>
            <h1 className="pf-h1" data-a="words">
              Trabajo real, en línea hoy
            </h1>
          </div>
          <div className="pf-intro">
            <p data-a="lines">
              Cada proyecto de esta página está publicado y funcionando. Son negocios reales de Cali y el Valle del Cauca que confiaron en nosotros para diseñar, programar y posicionar su presencia digital.
            </p>
            <div className="pf-counts">
              <div>
                <b>{String(projects.length).padStart(2, "0")}</b>
                <span>Proyectos publicados</span>
              </div>
              <div>
                <b>{String(sectors).padStart(2, "0")}</b>
                <span>Sectores distintos</span>
              </div>
              <div>
                <b>2026</b>
                <span>Entregados este año</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec l pf-list-sec">
        <GridLines />
        <div className="wrap">
          <PortfolioList />
        </div>
      </section>
      <CtaBand title="¿Tu negocio será el próximo caso?" />
      <JsonLd data={ld} />
    </>
  );
}
