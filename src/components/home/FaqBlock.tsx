"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import GridLines from "./GridLines";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Preguntas frecuentes: lista de una sola pestaña abierta (el signo + gira 90° y la respuesta se despliega
// en 0,5 s) y, debajo, el bloque "¿Tienes otra pregunta?" con botón de contacto.
export default function FaqBlock({ items }: { items: { q: string; a: string }[] }) {
  const root = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(0);

  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelled = false;
    let ctx: gsap.Context | undefined;
    const t = window.setTimeout(() => {
      if (cancelled) return;
      ctx = gsap.context(() => {
        const h = SplitText.create(".fq-h1", { type: "words" });
        gsap
          .timeline({ scrollTrigger: { trigger: ".fq", start: "top 85%", once: true } })
          .from(h.words, { opacity: 0, yPercent: 50, duration: 1, stagger: 0.1, ease: "power4.out" }, 0)
          .from(".fq-item", { opacity: 0, yPercent: 100, duration: 0.5, stagger: 0.2, ease: "power1.in" }, 0.3)
          .from(".fq-contact", { opacity: 0, duration: 0.5, ease: "sine.out" }, 1.6);
      }, el);
    }, 700);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
      ctx?.revert();
    };
  }, []);

  return (
    <section className="sec l fqs" id="faq" ref={root}>
      <GridLines />
      <div className="wrap">
        <div className="fq">
          <span className="lbl" data-a="label">
            Pregúntanos
          </span>
          <div className="fq-wrap">
            <h2 className="fq-h1">Preguntas frecuentes</h2>
            <div className="fq-list">
              {items.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div className={`fq-item${isOpen ? " open" : ""}`} key={f.q}>
                    <button type="button" className="fq-btn" aria-expanded={isOpen} aria-controls={`fq-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
                      <span className="fq-q">{f.q}</span>
                      <span className="fq-icon" aria-hidden="true">
                        <i />
                        <i />
                      </span>
                    </button>
                    <div className="fq-a" id={`fq-${i}`}>
                      <div>
                        <p>{f.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="fq-contact">
              <span className="lbl">¿Otra pregunta?</span>
              <div className="fq-sub">
                <div className="fq-sh">CONTÁCTANOS</div>
                <Link href="/contacto" className="pt-btn">
                  Escríbenos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
