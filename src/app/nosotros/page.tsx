import { pageMeta } from "@/lib/meta";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Odo from "@/components/Odo";
import Art from "@/components/Art";
import WordReveal from "@/components/WordReveal";
import { CtaBand, FaqSection, ProcessGrid } from "@/components/Sections";
import { coverage } from "@/data/site";

export const metadata = pageMeta({
  title: "Nosotros | Agencia digital en Cali",
  description:
    "Conoce a TechnoUltra, agencia digital en Cali: desarrollo web, aplicaciones a medida, branding, redes sociales, SEO y servicio técnico de computadores e impresoras.",
  path: "/nosotros",
});

export default function Nosotros() {
  return (
    <>
      <PageHero word="Nosotros" title="Agencia digital en Cali que construye marcas, sitios web y aplicaciones" crumbs={[{ label: "Nosotros" }]} />
      <section className="section dark about" style={{ paddingTop: 120 }}>
        <div className="wrap">
          <div className="grid4">
            <Reveal className="about-photo">
              <Art tone="b" variant={0} />
              <p>Tecnología, diseño y soporte técnico bajo un mismo equipo.</p>
            </Reveal>
            <WordReveal
              className="about-text"
              text="En TechnoUltra unimos desarrollo web, branding, marketing digital y servicio técnico. Diseñamos activos digitales que venden y mantenemos funcionando los equipos que tu negocio necesita."
            />
          </div>
        </div>
      </section>

      <section className="section light numbers">
        <div className="wrap">
          <span className="label">Quiénes somos</span>
          {[
            { v: "04", t: "Proyectos en producción", d: "Sitios corporativos, tiendas online y aplicaciones activas para empresas en Colombia." },
            { v: "05", t: "Servicios integrados", d: "Diseño UI/UX, identidad de marca, desarrollo web, estrategia digital y servicio técnico." },
            { v: "04", t: "Ciudades con servicio técnico", d: "Cali, Palmira, Jamundí y Yumbo, además de soporte remoto en toda Colombia." },
          ].map((s, i) => (
            <div className="stat-row" key={s.t}>
              <Odo text={s.v} />
              <span className="idx">/0{i + 1}</span>
              <Reveal className="desc">
                <h3>{s.t}</h3>
                <p className="muted">{s.d}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="section gray">
        <div className="wrap">
          <div className="proc-head">
            <Reveal className="h-md">
              <span className="label">Metodología</span>
              <h2 className="h-md" style={{ marginTop: 24 }}>
                No construimos sitios web: diseñamos activos digitales
              </h2>
            </Reveal>
          </div>
          <ProcessGrid />
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <div className="cov-head">
            <Reveal>
              <span className="label">Cobertura</span>
            </Reveal>
            <Reveal className="h-md">
              <h2 className="h-md">Con sede en Cali, trabajamos en toda Colombia</h2>
            </Reveal>
          </div>
          {coverage.map((c) => (
            <div className="cov-row" key={c.city}>
              <span>{c.city}</span>
              <span>{c.detail}</span>
            </div>
          ))}
        </div>
      </section>

      <FaqSection />
      <CtaBand />
    </>
  );
}
