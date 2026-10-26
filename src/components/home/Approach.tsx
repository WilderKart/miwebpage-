"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Quote, Rocket, Snowflake, Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountDown from "./CountDown";
import GridLines from "./GridLines";

gsap.registerPlugin(ScrollTrigger);

// "Estrategia primero": tres tarjetas fijas que se acomodan con el scroll
// (las de los lados suben desde abajo, la central baja hasta su sitio), como en la referencia.
export default function Approach() {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    const build = (offset: boolean) => {
      const c1 = el.querySelector<HTMLElement>(".c1");
      const c2 = el.querySelector<HTMLElement>(".c2");
      const c3 = el.querySelector<HTMLElement>(".c3");
      const h1 = el.querySelector<HTMLElement>(".ap-head h2");
      const head = el.querySelector<HTMLElement>(".ap-head");
      if (!c1 || !c2 || !c3 || !h1 || !head) return;
      // La tarjeta 2 arranca arriba (-45 % de su alto) pero nunca pisa el título: queda 40px por debajo.
      const c2Start = () => {
        const listTop = head.offsetTop + head.offsetHeight + 24;
        const h1Bottom = h1.offsetTop + h1.offsetHeight;
        return Math.max(-0.45 * c2.offsetHeight, h1Bottom + 40 - listTop);
      };
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "80% top",
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });
      for (const c of [c1, c3]) {
        tl.fromTo(
          c,
          { y: () => c.offsetHeight },
          { y: 0, ease: "none", duration: 1, immediateRender: false },
          0,
        );
      }
      tl.fromTo(
        c2,
        { y: c2Start },
        {
          y: () => (offset ? window.innerHeight * 0.25 : 0),
          ease: "none",
          duration: 1,
          immediateRender: false,
        },
        0,
      );
    };
    // La tarjeta 2 termina en su desplazamiento natural: 25vh en pantallas anchas, 0 en el resto.
    mm.add(
      "(min-width: 1440px) and (prefers-reduced-motion: no-preference)",
      () => build(true),
    );
    mm.add(
      "(min-width: 992px) and (max-width: 1439.98px) and (prefers-reduced-motion: no-preference)",
      () => build(false),
    );
    return () => mm.revert();
  }, []);

  return (
    <section className="sec l clip" id="enfoque">
      <GridLines />
      <div className="wrap">
        <div className="ap-wrap" ref={wrap}>
          <header className="ap-head" data-a="block">
            <span className="lbl" data-a="label">
              Nuestro enfoque
            </span>
            <h2 className="hm-h1" data-a="h">
              Estrategia primero
            </h2>
            <div className="ap-sub">
              <h3 className="hm-h6 hm-up" data-a="lines">
                Nuestras ventajas incluyen
              </h3>
              <p data-a="lines">
                No solo “hacemos cosas bonitas”. Analizamos a tus clientes y al
                mercado para crear productos que generan crecimiento.
              </p>
            </div>
          </header>

          <div className="ap-list">
            <article className="ap-c c1">
              <div className="ap-n">
                <span className="ap-ico">
                  <Quote size={18} aria-hidden="true" />
                </span>
                <span>/01</span>
              </div>
              <div className="ap-rate">
                <div className="ap-stars" aria-label="5 de 5 estrellas">
                  {Array.from({ length: 5 }, (_, k) => (
                    <Star
                      key={k}
                      size={20}
                      fill="currentColor"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="ap-q">
                  “TechnoUltra desarrolló nuestro sitio web desde cero para maximizar las conversiones.”
                </p>
              </div>
              <div className="ap-by">
                <span className="av">CG</span>
                <div>
                  <b>
                    5.0/5
                    <span style={{ display: "inline-flex", gap: 2 }}>
                      {Array.from({ length: 5 }, (_, k) => (
                        <Star
                          key={k}
                          size={16}
                          fill="currentColor"
                          aria-hidden="true"
                        />
                      ))}
                    </span>
                  </b>
                  <small>César García — Electriobras</small>
                </div>
              </div>
            </article>

            <article className="ap-c c2">
              <div className="ap-n">
                <span className="ap-ico">
                  <Rocket size={18} aria-hidden="true" />
                </span>
                <span>/02</span>
              </div>
              <div className="ap-stat">
                <CountDown label="120%" />
                <p>Más visitas</p>
              </div>
            </article>

            <article className="ap-c c3">
              <div className="ap-n" style={{ position: "relative", zIndex: 2 }}>
                <span className="ap-ico">
                  <Snowflake size={18} aria-hidden="true" />
                </span>
                <span>/03</span>
              </div>
              <div
                className="ap-c3-body"
                style={{ position: "relative", zIndex: 2 }}
              >
                <div className="ap-c3-top">
                  <div>
                    <span className="ap-c3-lab">Características</span>
                    <div>
                      De principio
                      <br />a fin
                    </div>
                  </div>
                </div>
                <h3 className="ap-c3-h">
                  Ecosistemas
                  <br />
                  digitales
                </h3>
              </div>
              <Image
                className="ap-c3-img"
                src="/brand/phone-hand-v3.webp"
                alt="Mano sosteniendo un móvil con una app de TechnoUltra"
                width={1254}
                height={1254}
                sizes="450px"
              />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
