"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Contador tipo odómetro: cada dígito "rueda" hasta su valor al entrar en pantalla.
export default function Odo({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      el.querySelectorAll<HTMLElement>(".odo-strip").forEach((strip, i) => {
        const d = Number(strip.dataset.d);
        if (reduce) {
          gsap.set(strip, { yPercent: -(d * 10) });
          return;
        }
        gsap.to(strip, {
          yPercent: -(d * 10),
          duration: 1.8,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <span ref={ref} className="num" aria-label={text} style={{ display: "inline-flex" }}>
      {text.split("").map((ch, i) =>
        /\d/.test(ch) ? (
          <span key={i} aria-hidden="true" className="odo" style={{ position: "relative" }}>
            <span style={{ visibility: "hidden" }}>{ch}</span>
            <span className="odo-strip" data-d={ch} style={{ position: "absolute", left: 0, top: 0 }}>
              {Array.from({ length: 10 }, (_, k) => (
                <span key={k}>{k}</span>
              ))}
            </span>
          </span>
        ) : (
          <span key={i} aria-hidden="true">
            {ch}
          </span>
        ),
      )}
    </span>
  );
}
