"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { projects } from "@/data/site";
import PhotoAv from "./PhotoAv";
import GridLines from "./GridLines";

gsap.registerPlugin(ScrollTrigger, SplitText);

function Asterisk({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 104 104" aria-hidden="true">
      <g fill="#d9d9d9">
        {[0, 60, 120].map((a) => (
          <rect key={a} x="43" y="0" width="18" height="104" rx="2" transform={`rotate(${a} 52 52)`} />
        ))}
      </g>
    </svg>
  );
}

const imgs = ["/works/w1.jpg", "/works/w2.jpg", "/works/w3.jpg"];

// Encabezado de "Proyectos": asterisco que gira al entrar, título gigante por líneas con tres imágenes
// que suben a distinta velocidad (parallax) y fila final con avatares y descripción.
export default function Works() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelled = false;
    let ctx: gsap.Context | undefined;
    const t = window.setTimeout(() => {
      if (cancelled) return;
      ctx = gsap.context(() => {
        const title = SplitText.create(".wk-title", { type: "lines" });
        const h6 = SplitText.create(".wk-h6", { type: "words", mask: "words" });
        gsap
          .timeline({ scrollTrigger: { trigger: ".wk-wrap", start: "top 70%" } })
          .from(".wk-a1", { rotation: 45, scale: 0, duration: 1.5, ease: "power4.out" }, 0)
          .from(".wk-img", { opacity: 0 }, 0.4)
          .from(title.lines, { yPercent: 60, opacity: 0, duration: 1, stagger: 0.1, ease: "power4.out" }, 0.4)
          .from(".wk-a2", { rotation: 45, scale: 0, duration: 1.5, ease: "power4.out" }, 1.4)
          .from(h6.words, { yPercent: 100, duration: 1, stagger: 0.1, ease: "power4.out" }, 1.8);

        // Parallax: las tres imágenes suben a distinta velocidad
        gsap.to(".wk-img", {
          yPercent: (i: number) => [-100, -180, -80][i],
          ease: "none",
          stagger: { each: 0.05, ease: "power1.out", from: "start" },
          scrollTrigger: { trigger: ".wk-wrap", start: "top 80%", end: "bottom -20%", scrub: 1 },
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
    <section className="sec l wk clip" ref={root}>
      <GridLines />
      <div className="wrap">
        <div className="wk-wrap">
          <div className="wk-label">
            <div>
              PROYECTOS
              <br />
              DESTACADOS
            </div>
            <div className="end">
              VITRINA
              <br />
              (‘25 COMPLETADOS)
            </div>
          </div>
          <div className="wk-hero">
            <Asterisk className="wk-a1" />
            <h2 className="wk-title">
              EN “TN
              <br />
              <span className="wk-red">CREAMOS</span>
              <br />
              LO QUE SIGUE.
            </h2>
            <Asterisk className="wk-a2" />
            <div className="wk-assets" aria-hidden="true">
              {imgs.map((src, i) => (
                <Image key={src} className={`wk-img wk-img${i + 1}`} src={src} alt="" width={312} height={312} sizes="312px" />
              ))}
            </div>
          </div>
          <div className="wk-content">
            <div className="wk-col">
              <div className="wk-h6">
                NUESTRO TRABAJO
                <br />
                SELECCIONADO
              </div>
              <div className="avs" aria-hidden="true">
                <PhotoAv src="/team/laura-valencia.jpg" />
                <PhotoAv src="/team/andres-mejia.jpg" className="av a2" />
                <PhotoAv src="/team/natalia-cardenas.jpg" className="av a3" />
                <span className="av n">{String(projects.length).padStart(2, "0")}</span>
              </div>
            </div>
            <p className="wk-desc">
              Explora una galería de proyectos reales. Cada sitio, tienda o aplicación demuestra nuestro compromiso con un trabajo cuidado, que convierte retos de negocio complejos en experiencias digitales claras que conectan con tus clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
