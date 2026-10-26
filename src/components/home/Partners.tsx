"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GridLines from "./GridLines";

gsap.registerPlugin(ScrollTrigger);

const logos = ["Electriobras", "Excelenter", "Tufink", "El Viajero", "Level23"];
const row = [...logos, ...logos];

// Aliados: cinta infinita de marcas (15 s por vuelta) con degradados a los lados y dos párrafos debajo.
export default function Partners() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.to(".pa-list", {
        xPercent: -100,
        duration: 15,
        ease: "none",
        repeat: -1,
        scrollTrigger: { trigger: ".pa-slide", start: "top bottom", end: "bottom top", toggleActions: "play pause resume pause" },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section className="sec l pa" id="aliados" ref={root}>
      <GridLines />
      <div className="wrap">
        <div className="pa-wrap">
          <span className="lbl pa-lab" data-a="label">
            Más de 4 empresas aliadas
          </span>
          <div className="pa-content">
            <div className="pa-wrapper">
              <div className="pa-slide" aria-hidden="true">
                {[0, 1].map((k) => (
                  <div className="pa-list" key={k}>
                    {row.map((n, i) => (
                      <span className="pa-logo" key={`${n}-${i}`}>
                        {n}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
              <div className="pa-ov pa-ov1" />
              <div className="pa-ov pa-ov2" />
              <span className="sr-only">Empresas que confían en nosotros: {logos.join(", ")}</span>
            </div>
            <div className="pa-sub">
              <p data-a="lines">
                En TechnoUltra nos distinguimos por un enfoque de colaboración cercano que responde a las necesidades de empresas de ingeniería, comercio de tecnología, turismo y servicios.
              </p>
              <p data-a="lines">
                Nuestra misión es ser tu aliado estratégico, usando tecnología moderna y diseño sofisticado para que tu negocio destaque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
