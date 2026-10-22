"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);

// Pilas de dígitos de la referencia: la 1.ª y la 3.ª bajan desde -90 % hasta 0 y la 2.ª sube hasta -88.9 % (3 s, "ease").
const cols = [
  { up: false, d: [1, 3, 5, 7, 6, 8, 1, 5, 1] },
  { up: true, d: [2, 9, 5, 2, 7, 8, 0, 2, 2] },
  { up: false, d: [0, 2, 3, 1, 8, 7, 9, 0, 0] },
];

export default function CountDown({ label = "120%" }: { label?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ease = CustomEase.create("cdEase", "M0,0 C0.25,0.1 0.25,1 1,1");
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top bottom", once: true } });
      tl.fromTo(".cd-a", { yPercent: -90 }, { yPercent: 0, duration: 3, ease }, 0).fromTo(
        ".cd-b",
        { yPercent: 0 },
        { yPercent: -88.9, duration: 3, ease },
        0,
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div className="cd-size" role="img" aria-label={label}>
      <div className="cd-wrap" ref={ref} aria-hidden="true">
        {cols.map((c, i) => (
          <div className={`cd-item ${c.up ? "cd-b" : "cd-a"}`} key={i}>
            {c.d.map((n, k) => (
              <div className={k === 0 || k === c.d.length - 1 ? "cd-n semi" : "cd-n"} key={k}>
                {n}
              </div>
            ))}
          </div>
        ))}
        <div className="cd-item">
          <div className="cd-n semi">%</div>
        </div>
      </div>
    </div>
  );
}
