"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/site";
import Art from "@/components/Art";

gsap.registerPlugin(ScrollTrigger);

const COUNT = 11;
const STEP = 360 / COUNT; // 32.72°
const tones = ["a", "b", "c", "d", "e"] as const;

// Galería circular: una rueda de 11 tarjetas que se abre (escala .3 → 1) mientras se hace scroll
// y gira sin parar; el scroll le suma un giro extra.
export default function ShowReel() {
  const root = useRef<HTMLElement>(null);
  const spin = useRef<HTMLDivElement>(null);
  const wheel = useRef<HTMLDivElement>(null);
  const turn = useRef<HTMLDivElement>(null);
  const info = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom bottom", scrub: 0.8 },
      });
      tl.fromTo(spin.current, { scale: 0.3 }, { scale: 1, ease: "power2.out", duration: 0.55 }, 0)
        .fromTo(turn.current, { rotation: -STEP * 2 }, { rotation: STEP * 3, ease: "none", duration: 1 }, 0)
        .fromTo(info.current, { opacity: 0, yPercent: 30 }, { opacity: 1, yPercent: 0, ease: "power2.out", duration: 0.25 }, 0.45);
      gsap.to(wheel.current, { rotation: 360, duration: 90, ease: "none", repeat: -1 });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="sr" ref={root} aria-label="Muestra de proyectos">
      <div className="sr-stick">
        <h2 className="sr-title" data-a="words">
          Show reel
        </h2>
        <div className="sr-spin" ref={spin}>
          <div className="sr-turn" ref={turn}>
            <div className="sr-wheel" ref={wheel}>
              {Array.from({ length: COUNT }, (_, i) => {
                const p = projects[i % projects.length];
                const useShot = i % 3 !== 2;
                return (
                  <figure className="sr-card" key={i} style={{ transform: `rotate(${i * STEP}deg) translateY(-1100px)` }}>
                    {useShot ? (
                      <Image src={p.image} alt={`Captura del proyecto ${p.name}`} fill sizes="680px" />
                    ) : (
                      <Art tone={tones[i % tones.length]} variant={i % 5} />
                    )}
                    <figcaption>
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      <span>{useShot ? p.name : "Concepto"}</span>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
        </div>
        <div className="sr-info" ref={info}>
          <span className="lbl">Estudio digital</span>
          <p>TechnoUltra® — sitios web, aplicaciones y marcas con soporte técnico incluido, desde Cali para toda Colombia.</p>
        </div>
      </div>
    </section>
  );
}
