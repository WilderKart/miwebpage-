"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/site";
import GridLines from "./GridLines";

gsap.registerPlugin(ScrollTrigger);

// Proporciones (ancho / alto) distintas por tarjeta, como en la referencia (una alta, otra más baja...).
const ratios = [0.955, 1.333, 0.724, 1.333];

// "Proyectos destacados": rejilla de 2 columnas; cada imagen se revela al entrar (altura 0 → 100 % y
// escala 1.5 → 1) y un círculo translúcido sigue al cursor sobre cada tarjeta.
export default function FeaturedProjects() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (!reduce) {
        gsap.utils.toArray<HTMLElement>(".fp-item").forEach((item, i) => {
          const img = item.querySelector<HTMLElement>(".fp-img");
          gsap.fromTo(
            img,
            { height: "0%", scale: 1.5 },
            {
              height: "100%",
              scale: 1,
              duration: 1,
              ease: "power4.inOut",
              delay: (i % 2) * 0.2,
              scrollTrigger: { trigger: item, start: "top 70%", once: true },
            },
          );
        });
      } else {
        gsap.set(".fp-img", { height: "100%" });
      }
      // Círculo que sigue al ratón dentro de cada tarjeta
      if (window.matchMedia("(hover: hover) and (min-width: 768px)").matches) {
        gsap.utils.toArray<HTMLElement>(".fp-item").forEach((item) => {
          const cur = item.querySelector<HTMLElement>(".fp-cur");
          if (!cur) return;
          const xTo = gsap.quickTo(cur, "x", { duration: 0.5, ease: "power3" });
          const yTo = gsap.quickTo(cur, "y", { duration: 0.5, ease: "power3" });
          const box = item.querySelector<HTMLElement>(".fp-box")!;
          item.addEventListener("pointermove", (e) => {
            const r = box.getBoundingClientRect();
            xTo(e.clientX - r.left - r.width / 2);
            yTo(e.clientY - r.top - r.height / 2);
          });
          item.addEventListener("pointerenter", () => gsap.to(cur, { opacity: 1, scale: 1, duration: 0.3 }));
          item.addEventListener("pointerleave", () => gsap.to(cur, { opacity: 0, scale: 0.6, duration: 0.3 }));
        });
      }
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section className="sec l fp clip" id="proyectos" ref={root}>
      <div className="wrap">
        <div className="fp-wrap">
          <div>
            <div className="fp-head">
              <span className="lbl">Proyectos destacados</span>
              <a href="#aliados" className="fp-down" aria-label="Ir a nuestros aliados">
                <ArrowDown size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="fp-list">
              {projects.map((p, i) => (
                <article className="fp-item" key={p.slug}>
                  <div className="fp-box" style={{ aspectRatio: String(ratios[i % ratios.length]) }}>
                    <Image
                      className="fp-img"
                      src={p.image}
                      alt={`Captura del proyecto ${p.name}`}
                      fill
                      sizes="(min-width: 768px) 642px, 100vw"
                      style={{ objectPosition: "50% 0%" }}
                    />
                    <Link href={`/proyectos/${p.slug}`} className="fp-link" aria-label={`Ver el proyecto ${p.name}`}>
                      <span className="fp-cur">
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </span>
                    </Link>
                  </div>
                  <div className="fp-title">
                    <span>{p.name.toUpperCase()}</span>
                    <span className="fp-date">
                      <span>/</span>
                      <span>{p.month}</span>
                      <span>{p.year}</span>
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <GridLines />
    </section>
  );
}
