"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { process as steps, services } from "@/data/site";
import GridLines from "./GridLines";

gsap.registerPlugin(ScrollTrigger, SplitText);

const byType = (slug: string, k: 0 | 1) => services.find((s) => s.slug === slug)!.images[k];
// Foto de cada paso (de relleno hasta tener las imágenes reales).
const photos = [
  byType("estrategia-digital", 1),
  byType("diseno-ui-ux", 0),
  byType("desarrollo-web", 0),
  byType("diseno-ui-ux", 1),
  byType("desarrollo-web", 1),
];
const areas = ["DISEÑO", "DESARROLLO", "SOPORTE", "ESTRATEGIA"];

// "Cómo lo hacemos": cabecera con título gigante y lista de áreas, y rejilla de 5 pasos + tarjeta final.
// Cada paso revela su descripción y acerca la foto al pasar el cursor.
export default function ProcessTeam() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cancelled = false;
    let ctx: gsap.Context | undefined;
    const t = window.setTimeout(() => {
      if (cancelled) return;
      ctx = gsap.context(() => {
        if (!reduce) {
          const h = SplitText.create(".pt-h1", { type: "words" });
          gsap
            .timeline({ scrollTrigger: { trigger: ".pt-wrap", start: "top 85%", once: true } })
            .from(h.words, { opacity: 0, yPercent: 50, duration: 1, stagger: 0.1, ease: "power4.out" }, 0)
            .from(".pt-sub, .pt-mt, .pt-st, .pt-sd", { opacity: 0, yPercent: 50, duration: 1, stagger: 0.05, ease: "power4.out" }, 0.3)
            .fromTo(".pt-job", { opacity: 0, xPercent: -20 }, { opacity: 1, xPercent: 0, duration: 0.3, stagger: 0.05, ease: "power1.inOut" }, 0.41)
            .from(".pt-card", { opacity: 0, yPercent: 20, duration: 1, stagger: 0.1, ease: "power4.out" }, 1);
        }
        // Hover de cada tarjeta: la descripción se abre y la foto escala a 1.1
        gsap.utils.toArray<HTMLElement>(".pt-card[data-step]").forEach((card) => {
          const info = card.querySelector<HTMLElement>(".pt-hide");
          const img = card.querySelector<HTMLElement>(".pt-img");
          if (!info) return;
          gsap.set(info, { height: 0 });
          card.addEventListener("pointerenter", () => {
            gsap.to(info, { height: "auto", duration: 0.5, ease: "power3.out" });
            gsap.to(img, { scale: 1.1, duration: 0.5, ease: "power3.out" });
          });
          card.addEventListener("pointerleave", () => {
            gsap.to(info, { height: 0, duration: 0.5, ease: "power3.out" });
            gsap.to(img, { scale: 1, duration: 0.5, ease: "power3.out" });
          });
        });
      }, el);
    }, 700);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
      ctx?.revert();
    };
  }, []);

  return (
    <section className="sec g pt" id="proceso" ref={root}>
      <GridLines />
      <div className="wrap">
        <div className="pt-wrap">
          <div className="pt-header">
            <span className="lbl" data-a="label">
              El equipo
            </span>
            <div className="pt-title">
              <h2 className="pt-h1">
                Cómo lo hacemos<span className="pt-r">®</span>
              </h2>
              <div className="pt-member">
                <div className="avs" aria-hidden="true">
                  <span className="av">DI</span>
                  <span className="av a2">DE</span>
                  <span className="av a3">SO</span>
                  <span className="av n">+5</span>
                </div>
                <div className="pt-mt">PERSONAS MUY CAPACES</div>
              </div>
            </div>
            <div className="pt-subwrap">
              <p className="pt-sub">Un equipo diverso de diseñadores, desarrolladores y estrategas obsesionados con la perfección.</p>
              <div className="pt-jobs">
                {areas.map((a, i) => (
                  <div className="pt-job" key={a}>
                    <span>/{String(i + 1).padStart(2, "0")}</span>
                    <b>{a}</b>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-body">
            <div className="pt-side">
              <div>
                <div className="pt-st">LAS MENTES DETRÁS DE LOS PÍXELES</div>
                <p className="pt-sd">Cinco pasos claros, de la idea al crecimiento, con un equipo que te acompaña en cada uno.</p>
              </div>
              <div className="pt-big">({String(steps.length).padStart(2, "0")})</div>
            </div>
            <div className="pt-grid">
              {steps.map((s, i) => (
                <article className="pt-card" data-step key={s.n}>
                  <Image className="pt-img" src={photos[i]} alt={`Paso ${s.n}: ${s.title}`} fill sizes="315px" />
                  <div className="pt-fade" />
                  <div className="pt-info">
                    <i className="pt-bar" />
                    <div>
                      <div className="pt-n">{s.title}</div>
                      <div className="pt-r2">Paso {s.n}</div>
                      <div className="pt-hide">
                        <p>{s.text}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
              <div className="pt-card pt-more">
                <div className="avs" aria-hidden="true">
                  <span className="av">DI</span>
                  <span className="av a2">DE</span>
                  <span className="av a3">SO</span>
                  <span className="av n">+5</span>
                </div>
                <div className="pt-more-t">
                  <span className="lbl">Empecemos</span>
                  <div className="pt-more-h">Trabaja con nosotros</div>
                </div>
                <Link href="/contacto" className="pt-btn">
                  Contáctanos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
