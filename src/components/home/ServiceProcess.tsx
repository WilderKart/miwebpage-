"use client";

import { useState } from "react";
import GridLines from "./GridLines";
import TextScroll from "./TextScroll";

type Item = { title: string; text: string };

// "Qué hacemos" de la página de servicio: frase grande que se enciende con el scroll y lista de pasos
// donde solo uno está abierto (el número crece y aparece la descripción), como en la referencia.
export default function ServiceProcess({ intro, items, children }: { intro: string; items: Item[]; children?: React.ReactNode }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="sec g sp clip">
      <GridLines />
      <div className="wrap">
        <div className="sp-head">
          <span className="lbl" data-a="label">
            Qué hacemos
          </span>
          <TextScroll text={intro} tone="light" className="sp-text" trigger=".sp" />
        </div>
        <div className="sp-list">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div className={`sp-item${isOpen ? " open" : ""}`} key={it.title}>
                <button
                  type="button"
                  className="sp-btn"
                  aria-expanded={isOpen}
                  aria-controls={`sp-${i}`}
                  onClick={() => setOpen(i)}
                >
                  <span className="sp-num">{String(i + 1).padStart(2, "0")}.</span>
                  <span className="sp-title">{it.title}</span>
                  <span className="sp-plus" aria-hidden="true" />
                </button>
                <div className="sp-desc" id={`sp-${i}`}>
                  <p>{it.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        {children}
      </div>
    </section>
  );
}
