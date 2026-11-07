"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/site";
import { BrowserFrame, PhoneFrame } from "./Frames";

gsap.registerPlugin(ScrollTrigger);

const types = ["Todos", ...Array.from(new Set(projects.map((p) => p.category)))];

// Portafolio: filtros por tipo de proyecto y un caso por fila, con marco de navegador, teléfono y datos clave.
export default function PortfolioList() {
  const root = useRef<HTMLDivElement>(null);
  const [type, setType] = useState("Todos");
  const list = useMemo(() => projects.filter((p) => type === "Todos" || p.category === type), [type]);

  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".pf-case").forEach((c) => {
        const frame = c.querySelector(".pf-media");
        const phone = c.querySelector(".pf-phone");
        const txt = c.querySelectorAll(".pf-reveal");
        gsap.from(frame, { clipPath: "inset(0 0 100% 0)", scale: 1.06, duration: 1.1, ease: "power4.inOut", scrollTrigger: { trigger: c, start: "top 75%" } });
        gsap.from(txt, { opacity: 0, yPercent: 30, duration: 0.9, stagger: 0.07, ease: "power4.out", scrollTrigger: { trigger: c, start: "top 75%" } });
        if (phone) gsap.fromTo(phone, { yPercent: 8 }, { yPercent: -10, ease: "none", scrollTrigger: { trigger: c, start: "top bottom", end: "bottom top", scrub: 0.8 } });
      });
    }, el);
    return () => ctx.revert();
  }, [list]);

  return (
    <div ref={root}>
      <div className="pf-filters" role="tablist" aria-label="Filtrar proyectos por tipo">
        {types.map((t) => (
          <button key={t} type="button" role="tab" aria-selected={type === t} className={`pf-chip${type === t ? " on" : ""}`} onClick={() => setType(t)}>
            {t}
            <sup>{t === "Todos" ? projects.length : projects.filter((p) => p.category === t).length}</sup>
          </button>
        ))}
      </div>

      <div className="pf-cases">
        {list.map((p, i) => (
          <article className={`pf-case${i % 2 ? " flip" : ""}`} key={p.slug} data-cursor="Ver caso">
            <div className="pf-info">
              <div className="pf-meta pf-reveal">
                <span className="pf-idx">{String(i + 1).padStart(2, "0")}</span>
                <span className="pf-dot" style={{ background: p.accent }} aria-hidden="true" />
                <span>{p.category}</span>
                {p.note && <span className="pf-note">{p.note}</span>}
              </div>
              <h2 className="pf-name pf-reveal">
                <Link href={`/proyectos/${p.slug}`}>{p.name}</Link>
              </h2>
              <p className="pf-tag pf-reveal">{p.tagline}</p>
              <ul className="pf-hl pf-reveal">
                {p.highlights.slice(0, 3).map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <div className="pf-res pf-reveal">
                {p.results.map((r) => (
                  <div key={r.label}>
                    <b>{r.value}</b>
                    <span>{r.label}</span>
                  </div>
                ))}
              </div>
              <div className="pf-tags pf-reveal">
                {p.services.map((s) => (
                  <span key={s}>{s}</span>
                ))}
                <span className="y">
                  {p.month} {p.year}
                </span>
              </div>
              <div className="pf-cta pf-reveal">
                <Link href={`/proyectos/${p.slug}`} className="pf-btn dark">
                  Ver el caso
                </Link>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="pf-btn">
                  Visitar sitio <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </div>
            <Link href={`/proyectos/${p.slug}`} className="pf-media" aria-label={`Ver el caso ${p.name}`}>
              <BrowserFrame src={p.shots[0]} url={p.url} alt={`Captura del sitio ${p.name}`} priority={i === 0} ratio={p.ratio} />
              {p.mobile && <PhoneFrame src={p.mobile} alt={`Versión móvil de ${p.name}`} />}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
