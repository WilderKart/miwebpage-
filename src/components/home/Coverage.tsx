"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const groups: { title: string; rows: [string, string][] }[] = [
  {
    title: "Cali",
    rows: [
      ["Laboratorio técnico", "(Sede)"],
      ["Recogida y entrega", "(Domicilio)"],
      ["Visita en tu casa u oficina", "(Presencial)"],
    ],
  },
  {
    title: "Palmira",
    rows: [
      ["Recogida y entrega", "(Domicilio)"],
      ["Servicio a domicilio", "(Presencial)"],
    ],
  },
  {
    title: "Jamundí",
    rows: [
      ["Recogida y entrega", "(Domicilio)"],
      ["Servicio a domicilio", "(Presencial)"],
    ],
  },
  { title: "Yumbo", rows: [["Recogida y servicio a domicilio", "(Presencial)"]] },
  { title: "Toda Colombia", rows: [["Soporte remoto y proyectos digitales", "(Remoto)"]] },
];

// Cobertura (formato "premios" de la referencia): título gigante con contador y lista por zonas.
export default function Coverage() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelled = false;
    let ctx: gsap.Context | undefined;
    const t = window.setTimeout(() => {
      if (cancelled) return;
      ctx = gsap.context(() => {
        const h = SplitText.create(".cv-h1", { type: "words" });
        gsap.from(h.words, {
          opacity: 0,
          yPercent: 50,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          scrollTrigger: { trigger: ".cv-head", start: "top 85%", once: true },
        });
        gsap.utils.toArray<HTMLElement>(".cv-item").forEach((item) => {
          const names = item.querySelectorAll<HTMLElement>(".cv-name");
          const dates = item.querySelectorAll<HTMLElement>(".cv-date");
          const tl = gsap.timeline({ scrollTrigger: { trigger: item, start: "top bottom", once: true } });
          names.forEach((n) => {
            const sp = SplitText.create(n, { type: "chars", mask: "chars" });
            tl.from(sp.chars, { opacity: 0, duration: 0.3, stagger: 0.03, ease: "none" }, 0.2);
          });
          dates.forEach((d) => {
            const sp = SplitText.create(d, { type: "words", mask: "words" });
            tl.from(sp.words, { y: 50, opacity: 0, duration: 0.63, ease: "sine.out" }, 0.2);
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
    <section className="sec k cv" id="cobertura" ref={root}>
      <div className="wrap">
        <div className="cv-wrap">
          <div className="cv-head">
            <span className="lbl" data-a="label">
              Dónde trabajamos
            </span>
            <div className="cv-hw">
              <h2 className="cv-h1">Cobertura</h2>
              <div className="cv-n">({String(groups.length).padStart(2, "0")})</div>
            </div>
          </div>
          <div className="cv-content">
            <div className="cv-left">
              <i className="cv-line" />
              <div className="cv-k">ATENCIÓN EN TODA LA REGIÓN</div>
              <p className="cv-desc">Llegamos hasta donde está tu equipo: recogemos, reparamos y entregamos, o trabajamos contigo en remoto desde cualquier ciudad.</p>
            </div>
            <div className="cv-right">
              <i className="cv-line" />
              {groups.map((g) => (
                <div key={g.title}>
                  <div className="cv-item">
                    <div className="cv-k">{g.title}</div>
                    <div className="cv-rows">
                      {g.rows.map((r, i) => (
                        <div key={r[0]}>
                          {i > 0 && <i className="cv-line" />}
                          <div className="cv-row">
                            <span className="cv-name">{r[0]}</span>
                            <span className="cv-date">{r[1]}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <i className="cv-line sep" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
