import { pageMeta } from "@/lib/meta";
import PageHero from "@/components/PageHero";
import { CtaBand, ProjectGrid } from "@/components/Sections";

export const metadata = pageMeta({
  title: "Proyectos | Páginas web, tiendas online y aplicaciones en Colombia",
  description:
    "Casos de éxito de TechnoUltra: Electriobras, Excelenter, Tufink y TechnoUltra App. Páginas web, tiendas online y aplicaciones a medida hechas en Cali.",
  path: "/proyectos",
});

export default function Proyectos() {
  return (
    <>
      <PageHero word="Proyectos" title="Proyectos de desarrollo web, tiendas online y aplicaciones que generan resultados" crumbs={[{ label: "Proyectos" }]} />
      <section className="section light inner-pad" style={{ paddingTop: 100 }}>
        <div className="wrap">
          <ProjectGrid />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
