import Link from "next/link";
import { Wrench, Truck, Home as HomeIcon, Check } from "lucide-react";
import { site, projects, coverage, wa } from "@/data/site";
import Hero from "@/components/Hero";
import { About } from "@/components/home/AboutWhy";
import { Why } from "@/components/home/Why";
import Approach from "@/components/home/Approach";
import Numbers from "@/components/home/Numbers";
import Reveal from "@/components/Reveal";
import ServicesAccordion from "@/components/ServicesAccordion";
import ShowReel from "@/components/home/ShowReel";
import Testimonials from "@/components/Testimonials";
import Btn from "@/components/Btn";
import { CtaBand, FaqSection, PostGrid, ProcessGrid, ProjectGrid } from "@/components/Sections";

export default function Home() {
  return (
    <div className="home-root">
      <Hero />

      <About />
      <Approach />
      <Why />
      <Numbers />

      {/* Servicios */}
      <section className="section dark" id="servicios">
        <div className="wrap">
          <div className="svc-head">
            <span className="label">Qué hacemos</span>
            <span style={{ color: "#a0a0a0" }}>Servicios (05)</span>
          </div>
          <ServicesAccordion />
        </div>
      </section>

      {/* Servicio técnico */}
      <section className="section tecnico" id="servicio-tecnico">
        <div className="wrap">
          <div className="tec-head">
            <Reveal className="h-lg">
              <span className="label">Servicio técnico</span>
              <h2 className="h-lg" style={{ marginTop: 24 }}>
                Reparación de computadores e impresoras en Cali
              </h2>
            </Reveal>
          </div>
          <div className="modes">
            {[
              { i: Truck, t: "Recogemos y entregamos", d: "Pasamos por tu equipo, lo reparamos en el laboratorio y te lo devolvemos listo. Sin filas ni traslados." },
              { i: Wrench, t: "Laboratorio técnico", d: "Diagnóstico claro, repuestos de calidad, mantenimiento preventivo y recuperación de información con garantía." },
              { i: HomeIcon, t: "A domicilio y remoto", d: "Visita en tu casa u oficina en Cali, Palmira, Jamundí y Yumbo, y soporte remoto en toda Colombia." },
            ].map(({ i: Icon, t, d }, k) => (
              <Reveal key={t} className="mode" delay={k * 0.1}>
                <span className="ico">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="tec-foot">
            <div className="devices">
              {["Computadores de escritorio", "Portátiles", "Impresoras"].map((d) => (
                <span className="chip" key={d}>
                  <Check size={14} style={{ marginRight: 8 }} aria-hidden="true" />
                  {d}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Btn href={wa("Hola TechnoUltra, necesito servicio técnico para mi equipo.")} tone="white" external>
                Solicitar servicio técnico
              </Btn>
              <Btn href="/servicios/servicio-tecnico" tone="ghost">
                Ver más
              </Btn>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <ShowReel />
      <section className="section light" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="works-head">
            <div className="row">
              <span>
                Proyectos
                <br />
                destacados
              </span>
              <span style={{ textAlign: "right" }}>
                ({projects.length} en producción)
                <br />
                2026
              </span>
            </div>
            <div className="ast" aria-hidden="true">
              ✱
            </div>
            <h2>Proyectos</h2>
          </div>
          <p className="lead muted" style={{ maxWidth: "36ch", margin: "0 0 70px 50%" }}>
            Una selección de sitios, tiendas y aplicaciones que hemos construido para empresas reales en Colombia.
          </p>
          <ProjectGrid />
          <div className="view-all">
            <Btn href="/proyectos" tone="dark">
              Ver todos los proyectos
            </Btn>
          </div>
        </div>
      </section>

      {/* Confían en nosotros */}
      <section className="section tight light partners" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="grid4">
            <span className="label">Empresas que confían en nosotros</span>
            <div className="marquee" aria-hidden="true">
              <div className="marquee-in">
                {[0, 1].map((k) => (
                  <span key={k}>
                    {["Electriobras", "Excelenter", "Tufink", "El Viajero", "Level23"].map((n) => (
                      <b key={n} style={{ fontWeight: 600 }}>
                        {n}
                      </b>
                    ))}
                  </span>
                ))}
              </div>
            </div>
            <div className="partners-text">
              <p>Trabajamos con empresas de ingeniería, comercio de tecnología, turismo y servicios que buscan crecer en internet.</p>
              <p>Nuestra misión es ser tu aliado estratégico, usando tecnología moderna y diseño sofisticado para que tu negocio destaque.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cobertura */}
      <section className="section dark">
        <div className="wrap">
          <div className="cov-head">
            <Reveal>
              <span className="label">Cobertura</span>
            </Reveal>
            <Reveal className="h-md">
              <h2 className="h-md">Donde estamos y a dónde llegamos</h2>
            </Reveal>
          </div>
          {coverage.map((c) => (
            <Reveal className="cov-row" key={c.city}>
              <span>{c.city}</span>
              <span>{c.detail}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <section className="section light">
        <div className="wrap">
          <div className="grid4" style={{ marginBottom: 20 }}>
            <span className="label">Testimonios</span>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Proceso */}
      <section className="section gray">
        <div className="wrap">
          <div className="proc-head">
            <Reveal className="h-md">
              <span className="label">Cómo lo hacemos</span>
              <h2 className="h-md" style={{ marginTop: 24 }}>
                Una arquitectura de crecimiento: diagnóstico, diseño, desarrollo y mejora continua
              </h2>
            </Reveal>
          </div>
          <ProcessGrid />
        </div>
      </section>

      {/* Blog */}
      <section className="section light">
        <div className="wrap">
          <div className="blog-head">
            <Reveal>
              <span className="label">El blog</span>
              <h2 className="h-md" style={{ marginTop: 20 }}>
                Noticias y guías de {site.name}
              </h2>
            </Reveal>
            <Link href="/blog" className="link-u">
              Ver todos los artículos
            </Link>
          </div>
          <PostGrid limit={3} />
        </div>
      </section>

      <FaqSection />
      <CtaBand />
    </div>
  );
}
