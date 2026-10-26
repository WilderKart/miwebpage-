"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountDown, { type CountPart } from "./CountDown";
import GridLines from "./GridLines";
import TextScroll from "./TextScroll";

gsap.registerPlugin(ScrollTrigger);

const items: { n: CountPart[]; label: string; title: string; d: string }[] = [
  {
    n: [
      { kind: "down", d: [5, 3, 1, 7, 6, 8, 2, 4, 5] },
      { kind: "up", d: [0, 9, 5, 2, 7, 8, 1, 2, 0] },
      { kind: "text", t: "+" },
    ],
    label: "50+",
    title: "Páginas y apps\nlanzadas",
    d: "Sitios, tiendas y aplicaciones en producción para empresas de Cali y de toda Colombia.",
  },
  {
    n: [
      { kind: "text", t: "+" },
      { kind: "down", d: [4, 3, 1, 7, 6, 8, 2, 9, 4] },
      { kind: "up", d: [5, 9, 3, 2, 7, 8, 1, 2, 5] },
      { kind: "text", t: "%" },
    ],
    label: "+45%",
    title: "Más solicitudes\nde clientes",
    d: "Estructura y llamados a la acción pensados para convertir visitas en cotizaciones y contactos.",
  },
  {
    n: [
      { kind: "down", d: [9, 3, 5, 7, 6, 8, 1, 5, 9] },
      { kind: "up", d: [8, 9, 5, 2, 7, 8, 0, 2, 8] },
      { kind: "text", t: "%" },
    ],
    label: "98%",
    title: "Clientes que\nvuelven",
    d: "Mantenemos una relación cercana y seguimos mejorando cada proyecto mucho después del lanzamiento.",
  },
];

// "Números que hablan": las tarjetas salen en abanico (escala y desplazamiento) mientras se hace scroll.
export default function Numbers() {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 992px) and (prefers-reduced-motion: no-preference)", () => {
      const cards = el.querySelectorAll<HTMLElement>(".nm-it");
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
        <div className="nm-wrap" ref={wrap}>
          <div className="nm-hg">
            <h3 className="nm-h6" data-a="words">
              Números
              <br />
              que hablan
            </h3>
            <div className="nm-tf">
              <span className="lbl" data-a="label">
                Indicadores
              </span>
              <TextScroll
                tone="light"
                className="nm-text"
                trigger=".nm"
                text="Nuestro impacto se nota en sectores muy distintos, donde ayudamos a marcas ambiciosas a superar su techo de crecimiento."
              />
            </div>
          </div>
          <div className="nm-ic">
            <div className="nm-left">
              <div className="nm-member">
                <div className="nm-mt">
                  <span>MÁS DE</span> 23K+ CLIENTES
                </div>
                <div className="avs" aria-hidden="true">
                  <span className="av">EO</span>
                  <span className="av a2">EX</span>
                  <span className="av a3">TF</span>
                  <span className="av n">23K</span>
                </div>
              </div>
              <div>
                <p className="nm-cta">
                  ¿Listo para ser
                  <br />
                  nuestro próximo
                  <br />
                  caso de éxito?
                </p>
                <Link href="/contacto" className="nm-work">
                  Trabaja con nosotros <Plus size={8} aria-hidden="true" />
                </Link>
              </div>
            </div>
            {items.map((it, i) => (
              <div className="nm-it" key={it.label} style={{ gridColumn: i + 2, zIndex: 3 - i }}>
                <div className="nm-top">
                  <CountDown label={it.label} parts={it.n} />
                  <span className="nm-idx">/0{i + 1}</span>
                </div>
                <div className="nm-bot">
                  <h4>
                    {it.title.split("\n").map((l, k) => (
                      <span key={k}>
                        {l}
                        {k === 0 && <br />}
                      </span>
                    ))}
                  </h4>
                  <p>{it.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
