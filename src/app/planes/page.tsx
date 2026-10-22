import { Plus } from "lucide-react";
import { pageMeta } from "@/lib/meta";
import { plans, wa } from "@/data/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Btn from "@/components/Btn";
import { CtaBand, FaqSection } from "@/components/Sections";

export const metadata = pageMeta({
  title: "Planes | Páginas web, branding y marketing digital en Cali",
  description:
    "Planes de TechnoUltra para páginas web, tiendas online, branding y marketing digital en Cali. Pide una cotización a la medida de tu negocio.",
  path: "/planes",
});

export default function Planes() {
  return (
    <>
      <PageHero word="Planes" title="Planes de desarrollo web y marketing digital a la medida de tu negocio" crumbs={[{ label: "Planes" }]} />
      <section className="section light inner-pad" style={{ paddingTop: 100 }}>
        <div className="wrap">
          <div className="plans">
            {plans.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.1}>
                <article className="plan">
                  <div className="top">
                    <div className="row">
                      <span className="label">Plan</span>
                      <span className="muted">/{p.n}</span>
                    </div>
                    <div>
                      <h2>{p.name}</h2>
                      <p className="muted" style={{ marginTop: 14, maxWidth: "40ch" }}>
                        {p.text}
                      </p>
                    </div>
                  </div>
                  <div className="body">
                    <small>Qué incluye</small>
                    <ul style={{ display: "grid", gap: 14 }}>
                      {p.items.map((it) => (
                        <li key={it}>
                          <Plus size={16} aria-hidden="true" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="foot">
                    <div className="price">
                      <small>Inversión</small>
                      A tu medida
                    </div>
                    <Btn href={wa(`Hola TechnoUltra, quiero cotizar el plan ${p.name}.`)} tone="dark" external>
                      Cotizar
                    </Btn>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="muted" style={{ marginTop: 28, fontSize: 14 }}>
            Cada proyecto se cotiza según su alcance. Agenda un diagnóstico gratis y recibe una propuesta clara con tiempos y entregables.
          </p>
        </div>
      </section>
      <FaqSection />
      <CtaBand />
    </>
  );
}
