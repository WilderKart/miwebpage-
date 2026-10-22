"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Odo from "@/components/Odo";
import GridLines from "./GridLines";
import TextScroll from "./TextScroll";

gsap.registerPlugin(ScrollTrigger);

const items = [
  { v: "+70%", t: "Más velocidad de carga", d: "Sitios optimizados para cargar rápido en celulares, mejorar la experiencia y el posicionamiento." },
  { v: "+45%", t: "Más solicitudes de clientes", d: "Estructura y llamados a la acción pensados para convertir visitas en cotizaciones y contactos." },
  { v: "+120%", t: "Más visitas al sitio", d: "SEO técnico y contenidos enfocados en las búsquedas locales de tus clientes en Cali." },
];

// "Números que hablan": las tarjetas salen en abanico (escala y desplazamiento) mientras se hace scroll.
export default function Numbers() {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 992px) and (prefers-reduced-motion: no-preference)", () => {
      const cards = el.querySelectorAll<HTMLElement>(".nm-i");
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top bottom", end: "-20% top", scrub: 0.8 },
      });
      tl.from(cards[1], { xPercent: -100, scale: 0.85, ease: "none", duration: 1 }, 0).from(
        cards[2],
        { xPercent: -200, scale: 0.7, ease: "none", duration: 1 },
        0,
      );
    });
    return () => mm.revert();
  }, []);

  return (
    <section className="sec l nm clip" id="numeros">
      <GridLines />
      <div className="wrap">
        <div ref={wrap}>
          <header className="nm-head" data-a="block">
            <h3 className="hm-h6" data-a="words">
              Números
              <br />
              que hablan
            </h3>
            <div className="r">
              <span className="lbl" data-a="label">
                Indicadores
              </span>
              <TextScroll
                tone="light"
                className="hm-h6 m"
                trigger=".nm"
                text="Nuestro impacto se nota en sectores muy distintos, donde ayudamos a marcas ambiciosas a superar su techo de crecimiento."
              />
            </div>
          </header>
          <div className="nm-body">
            <div className="nm-l">
              <div>
                <div className="t">
                  <span>MÁS DE </span>4 PROYECTOS
                </div>
                <div className="avs" data-a="stagger" aria-hidden="true">
                  <span className="av">EO</span>
                  <span className="av a2">EX</span>
                  <span className="av a3">TF</span>
                  <span className="av n">04</span>
                </div>
              </div>
              <div>
                <p className="hm-h6 m" style={{ textTransform: "none" }}>
                  ¿Listo para ser
                  <br />
                  nuestro próximo
                  <br />
                  caso de éxito?
                </p>
                <Link href="/contacto" className="cta link-u">
                  Trabaja con nosotros <Plus size={13} aria-hidden="true" />
                </Link>
              </div>
            </div>
            {items.map((it, i) => (
              <div className="nm-i" key={it.v} style={{ gridColumn: i + 2 }}>
                <div className="nm-top">
                  <span className="odo-w">
                    <Odo text={it.v} />
                  </span>
                  <span style={{ color: "#a3a3a3" }}>/0{i + 1}</span>
                </div>
                <div className="nm-bot">
                  <h4>{it.t}</h4>
                  <p>{it.d}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="hm-b5 g6" style={{ marginTop: 32 }}>
            Resultados del caso Electriobras. Los resultados varían según el mercado y la competencia.
          </p>
        </div>
      </div>
    </section>
  );
}
