"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, services } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

const COUNT = 11;
const STEP = 360 / COUNT; // 32.72°

const proj = (i: number) => ({ src: projects[i % projects.length].image, alt: `Proyecto ${projects[i % projects.length].name}`, top: true });
const svc = (slug: string, k: 0 | 1, alt: string) => ({ src: services.find((s) => s.slug === slug)!.images[k], alt, top: false });

// 11 tarjetas cuadradas: proyectos reales y fotos de los servicios.
const cards = [
  proj(0),
  svc("diseno-ui-ux", 1, "Boceto de un sitio web"),
  proj(1),
  svc("identidad-de-marca", 1, "Diseñadora frente a un tablero de tipografía"),
  proj(2),
  svc("desarrollo-web", 1, "Desarrollador trabajando con su portátil"),
  proj(3),
  svc("estrategia-digital", 0, "Tablero de estrategia con formas geométricas"),
  svc("servicio-tecnico", 0, "Placa base de un computador"),
  svc("identidad-de-marca", 0, "Papelería de marca"),
  svc("diseno-ui-ux", 0, "Manos sobre un trackpad"),
];

// Galería circular (Show reel): dos paneles fijos apilados; las palabras se abren hacia los lados,
// la rueda de 11 tarjetas sube escalando de .3 a 1 y gira sin parar, igual que en la referencia.
export default function ShowReel() {
  const root = useRef<HTMLElement>(null);
  const wheel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const el = root.current!;
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top 50%", end: "bottom 150%", scrub: 1 },
      });
      tl.to(".sr-w1", { xPercent: -700, duration: 0.29, ease: "none" }, 0.3)
        .to(".sr-w2", { xPercent: 700, duration: 0.29, ease: "none" }, 0.3)
        .fromTo(".sr-spin", { scale: 0.3 }, { scale: 1, duration: 0.86, ease: "none" }, 0.46)
        .fromTo(".sr-brand", { opacity: 0 }, { opacity: 1, duration: 0.07, ease: "none" }, 1.188);

      // Giro de la rueda: 7 s lineales de 90° y un salto de 30° en 0,5 s, tres veces (360° cada 22,5 s)
      gsap.set(wheel.current, { rotation: -16.36 });
      const spin = gsap.timeline({ repeat: -1 });
      for (let k = 0; k < 3; k++) {
        const base = -16.36 - k * 120;
        spin.to(wheel.current, { rotation: base - 90, duration: 7, ease: "none" }).to(wheel.current, { rotation: base - 120, duration: 0.5, ease: "power1.inOut" });
      }
    });
    return () => mm.revert();
  }, []);

  return (
    <section className="sr" ref={root} aria-label="Muestra de proyectos">
      <div className="sr-text" aria-hidden="true">
        <div className="sr-w1">SHOW</div>
        <div className="sr-w2">REEL</div>
      </div>
      <h2 className="sr-only">Show reel: una muestra de nuestros proyectos</h2>
      <div className="sr-spin">
        <div className="sr-brand">
          <Image src="/brand/icon.png" alt="" width={24} height={24} />
          <div className="sr-brand-text">
            COLECCIÓN ✦<br />
            PROYECTOS Y SERVICIOS
            <br />
            11 PIEZAS · 1080x1080
            <br />
            <br />
            “TECHNOULTRA”
          </div>
        </div>
        <div className="sr-wrap">
          <div className="sr-wheel" ref={wheel}>
            {cards.map((c, i) => (
              <div className="sr-pivot" key={i} style={{ transform: `rotate(${(i * STEP).toFixed(2)}deg)` }}>
                <div className="sr-card">
                  <Image src={c.src} alt={c.alt} fill sizes="680px" style={{ objectPosition: c.top ? "50% 0%" : "50% 50%" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
