"use client";

import { useState } from "react";

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div>
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className={`faq-item ${isOpen ? "open" : ""}`}>
            <h3>
              <button className={`faq-q ${isOpen ? "" : "shut"}`} aria-expanded={isOpen} aria-controls={`faq-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
                <span>{f.q}</span>
                <span className="pm" aria-hidden="true" />
              </button>
            </h3>
            <div className="faq-a" id={`faq-${i}`} role="region">
              <div>
                <p>{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
