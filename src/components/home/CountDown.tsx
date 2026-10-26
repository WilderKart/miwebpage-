"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);

// Pilas de dígitos de la referencia: las columnas "down" bajan desde -90 % hasta 0 y las "up" suben hasta -88.9 % (3 s, "ease").
export type CountPart = { kind: "down" | "up"; d: number[] } | { kind: "text"; t: string };

const num120: CountPart[] = [
  { kind: "down", d: [1, 3, 5, 7, 6, 8, 1, 5, 1] },
  { kind: "up", d: [2, 9, 5, 2, 7, 8, 0, 2, 2] },
  { kind: "down", d: [0, 2, 3, 1, 8, 7, 9, 0, 0] },
  { kind: "text", t: "%" },
];

export default function CountDown({ label = "120%", parts = num120 }: { label?: string; parts?: CountPart[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const rolls = parts.some((p) => p.kind !== "text");

  useEffect(() => {
    const el = ref.current;
    if (!el || !rolls) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ease = CustomEase.create("cdEase", "0.25,0.1,0.25,1");
    const ctx = gsap.context(() => {
      // El CSS ya deja las columnas en su posición inicial; GSAP la lee como px, así que se limpia para no sumarla dos veces.
      gsap.set(".cd-a", { y: 0 });
      const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top bottom", once: true } });
      tl.fromTo(".cd-a", { yPercent: -90 }, { yPercent: 0, duration: 3, ease }, 0).fromTo(
        ".cd-b",
        { yPercent: 0 },
        { yPercent: -88.9, duration: 3, ease },
        0,
      );
    }, el);
    return () => ctx.revert();
  }, [rolls]);

  return (
    <div className="cd-size" role="img" aria-label={label}>
      <div className="cd-wrap" ref={ref} aria-hidden="true">
        {parts.map((c, i) =>
          c.kind === "text" ? (
            <div className="cd-item" key={i}>
              <div className="cd-n semi">{c.t}</div>
            </div>
          ) : (
            <div className={`cd-item ${c.kind === "up" ? "cd-b" : "cd-a"}`} key={i}>
              {c.d.map((n, k) => (
                <div className={k === 0 || k === c.d.length - 1 ? "cd-n semi" : "cd-n"} key={k}>
                  {n}
                </div>
              ))}
            </div>
          ),
        )}
      </div>
    </div>
  );
}
