"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { plans, wa } from "@/data/site";
import GridLines from "./GridLines";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Planes mensuales de relleno (sustituir por los reales cuando estén definidos).
const monthly = [
  {
    n: "01",
    name: "Soporte continuo",
    text: "Para sitios y aplicaciones que ya están publicados y necesitan mantenimiento, copias de seguridad y mejoras cada mes.",
    items: ["Mantenimiento y actualizaciones de seguridad", "Copias de seguridad y monitoreo de disponibilidad", "Cambios de contenido y pequeñas mejoras", "Soporte técnico por WhatsApp"],
  },
  {
    n: "02",
    name: "Marketing y crecimiento",
    text: "Para marcas que quieren atraer clientes todos los meses con contenido, redes sociales y campañas medidas.",
    items: ["Calendario editorial y gestión de redes sociales", "Campañas en Google Ads y Meta Ads", "Informe mensual de resultados", "SEO local y contenidos para el blog"],
  },
];

const tabs = [
  { id: "proyecto", label: "Por proyecto", list: plans },
  { id: "mensual", label: "Mensual", list: monthly },
] as const;

// Planes: pestañas "Por proyecto / Mensual" y dos tarjetas grises con lista, precio y botón.
export default function Pricing() {
  const root = useRef<HTMLElement>(null);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelled = false;
    let ctx: gsap.Context | undefined;
    const t = window.setTimeout(() => {
      if (cancelled) return;
      ctx = gsap.context(() => {
        const h = SplitText.create(".pr-h1", { type: "words" });
        gsap.from(h.words, {
          opacity: 0,
          yPercent: 50,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          scrollTrigger: { trigger: ".pr-head", start: "top 85%", once: true },
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
    <section className="sec k pr" id="planes" ref={root}>
      <GridLines tone="dark" />
      <div className="wrap">
        <div className="pr-head">
          <span className="lbl" data-a="label">
            Planes
          </span>
          <h2 className="pr-h1">Nuestros planes</h2>
        </div>
        <div className="pr-tabs" role="tablist">
          {tabs.map((t, i) => (
            <button key={t.id} type="button" role="tab" aria-selected={tab === i} className={`pr-tab${tab === i ? " on" : ""}`} onClick={() => setTab(i)}>
              {t.label}
            </button>
          ))}
        </div>
        <div className="pr-box" key={tabs[tab].id}>
          {tabs[tab].list.map((p) => (
            <article className="pr-card" key={p.n}>
              <div className="pr-top">
                <div className="pr-tt">
                  <h3>{p.name}</h3>
                  <span>/{p.n}</span>
                </div>
                <p>{p.text}</p>
              </div>
              <div className="pr-bot">
                <div className="pr-inc">
                  <div className="pr-k">LO QUE INCLUYE</div>
                  <ul>
                    {p.items.map((it) => (
                      <li key={it}>
                        <Plus size={14} aria-hidden="true" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pr-price">
                  <div className="pr-pp">
                    <span className="pr-pk">{tab === 0 ? "Diagnóstico inicial" : "Cotización"}</span>
                    <span className="pr-num">{tab === 0 ? "Gratis" : "A medida"}</span>
                  </div>
                  <Link href={wa(`Hola TechnoUltra, quiero información sobre el plan ${p.name}.`)} className="pr-btn" target="_blank" rel="noopener noreferrer">
                    <span>Empezar</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
