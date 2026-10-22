"use client";

import { useEffect, useRef } from "react";

// Líneas verticales de la rejilla de 4 columnas: crecen de arriba hacia abajo al entrar la sección.
export default function GridLines({ tone = "light" }: { tone?: "light" | "dark" }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("on");
          io.disconnect();
        }
      },
      { threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={tone === "dark" ? "gl dark" : "gl"} aria-hidden="true">
      <div className="wrap">
        <div className="g4">
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
    </div>
  );
}
