"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { plans, monthlyPlans, wa } from "@/data/site";
import GridLines from "./GridLines";

gsap.registerPlugin(ScrollTrigger, SplitText);

const tabs = [
  { id: "proyecto", label: "Por proyecto", list: plans },
  { id: "mensual", label: "Mensual", list: monthlyPlans },
] as const;

// Texto de un ítem; el paréntesis final (herramientas) se muestra más pequeño.
function Item({ text }: { text: string }) {
  const m = text.match(/^(.*?)(\s\((?:Figma|Slack)[^)]*\))$/);
  if (!m) return <>{text}</>;
  return (
    <>
      {m[1]}
      <small>{m[2]}</small>
    </>
  );
}

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
          scrollTrigger: { trigger: ".pr-head", start: "top 85%" },
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
            Inversión &amp; planes
          </span>
          <h2 className="pr-h1">Nuestros planes</h2>
          <span className="pr-n" aria-hidden="true">(06)</span>
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
                        <span>
                          <Item text={it} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pr-price">
                  <div className="pr-pp">
                    <span className="pr-pk">{p.priceLabel}</span>
                    <span className="pr-num">{p.price}</span>
                    <span className="pr-note">{p.note}</span>
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
