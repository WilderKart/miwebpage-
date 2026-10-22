"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { testimonials } from "@/data/site";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  return (
    <div className="testi" aria-live="polite">
      <div className="qm" aria-hidden="true">
        ”
      </div>
      <div className="body">
        <h3>{t.title}</h3>
        <blockquote>
          <p>“{t.text}”</p>
        </blockquote>
        <div className="by">
          <span className="stars" aria-label="5 de 5 estrellas">
            {Array.from({ length: 5 }, (_, k) => (
              <Star key={k} size={16} fill="currentColor" aria-hidden="true" />
            ))}
          </span>
          <span>
            {t.author} — {t.role}
          </span>
        </div>
        <div className="dots">
          {testimonials.map((x, k) => (
            <button key={x.author} className={k === i ? "on" : ""} aria-label={`Ver testimonio de ${x.author}`} onClick={() => setI(k)} />
          ))}
        </div>
      </div>
    </div>
  );
}
