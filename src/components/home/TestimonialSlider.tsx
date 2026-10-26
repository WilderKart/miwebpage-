"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { testimonials } from "@/data/site";
import GridLines from "./GridLines";

gsap.registerPlugin(ScrollTrigger, SplitText);

const initials = (n: string) =>
  n
    .split(" ")
    .filter((_, i, a) => i === 0 || i === a.length - 1)
    .map((w) => w[0])
    .join("");

// Testimonios: deslizador con fundido cruzado (0,5 s), comilla gigante gris y flechas abajo a la izquierda.
export default function TestimonialSlider() {
  const root = useRef<HTMLElement>(null);
  const [i, setI] = useState(0);
  const n = testimonials.length;

  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelled = false;
    let ctx: gsap.Context | undefined;
    const t = window.setTimeout(() => {
      if (cancelled) return;
      ctx = gsap.context(() => {
        const h = SplitText.create(".ts-h", { type: "lines" });
        const d = SplitText.create(".ts-d", { type: "lines" });
        gsap
          .timeline({ scrollTrigger: { trigger: ".ts-wrap", start: "top 85%", once: true } })
          .from(h.lines, { opacity: 0, yPercent: 50, duration: 1, stagger: 0.1, ease: "power4.out" }, 0)
          .from(d.lines, { opacity: 0, yPercent: 50, duration: 1, stagger: 0.05, ease: "power4.out" }, 0.5);
      }, el);
    }, 700);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
      ctx?.revert();
    };
  }, []);

  return (
    <section className="sec l ts" id="testimonios" ref={root}>
      <GridLines />
      <div className="wrap">
        <div className="ts-wrap">
          <div className="ts-slides" aria-live="polite">
            {testimonials.map((t, k) => (
              <div className={`ts-slide${k === i ? " on" : ""}`} key={t.author} aria-hidden={k === i ? undefined : true}>
                <div className="ts-label">
                  <span className="lbl" data-a="label">
                    Testimonios
                  </span>
                </div>
                <svg className="ts-quote" viewBox="0 0 194 182" aria-hidden="true">
                  <path d="M0 0H76V96C76 150 44 180 0 182V150C22 146 36 130 36 106H0Z" />
                  <path d="M118 0H194V96C194 150 162 180 118 182V150C140 146 154 130 154 106H118Z" />
                </svg>
                <div className="ts-review">
                  <h3 className="ts-h">{t.title}</h3>
                  <p className="ts-d">“{t.text}”</p>
                  <div className="ts-author">
                    <span className="av">{initials(t.author)}</span>
                    <div>
                      <div className="ts-rate">
                        <b>5.0/5</b>
                        <span className="ts-stars" aria-label="5 de 5 estrellas">
                          {Array.from({ length: 5 }, (_, s) => (
                            <Star key={s} size={16} fill="currentColor" aria-hidden="true" />
                          ))}
                        </span>
                      </div>
                      <div className="ts-name">
                        {t.author} - {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="ts-arrows">
            <button type="button" aria-label="Testimonio anterior" onClick={() => setI((i - 1 + n) % n)}>
              <ArrowLeft size={16} aria-hidden="true" />
            </button>
            <button type="button" aria-label="Testimonio siguiente" onClick={() => setI((i + 1) % n)}>
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
