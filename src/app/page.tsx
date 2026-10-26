import { Wrench, Truck, Home as HomeIcon, Check } from "lucide-react";
import { wa } from "@/data/site";
import Hero from "@/components/Hero";
import { About } from "@/components/home/AboutWhy";
import { Why } from "@/components/home/Why";
import Approach from "@/components/home/Approach";
import Numbers from "@/components/home/Numbers";
import Reveal from "@/components/Reveal";
import ServicesAccordion from "@/components/ServicesAccordion";
import ShowReel from "@/components/home/ShowReel";
import Works from "@/components/home/Works";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Partners from "@/components/home/Partners";
import Coverage from "@/components/home/Coverage";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import ProcessTeam from "@/components/home/ProcessTeam";
import Pricing from "@/components/home/Pricing";
import Newsletter from "@/components/home/Newsletter";
import BlogList from "@/components/home/BlogList";
import Btn from "@/components/Btn";
import { FaqSection } from "@/components/Sections";

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

      <ShowReel />
      <Works />
      <FeaturedProjects />

      <Partners />
      <Coverage />

      <TestimonialSlider />

      <ProcessTeam />

      <Pricing />

      <Newsletter />
      <BlogList />

      <FaqSection />
    </div>
  );
}
