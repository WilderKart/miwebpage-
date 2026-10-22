"use client";

import { useEffect, useRef } from "react";
import {
  ArrowRight,
  BookOpen,
  CircleArrowUp,
  CornerDownRight,
  Globe,
  AudioLines,
  Mic,
  Paperclip,
  PenLine,
  Plus,
  SlidersHorizontal,
  Square,
  X,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import GridLines from "./GridLines";

gsap.registerPlugin(ScrollTrigger, SplitText);

const list = [
  "Precisión en cada diseño e interacción",
  "Tecnología moderna para velocidad y escala",
  "Decisiones de diseño respaldadas por pruebas de usuario",
  "Acceso directo al equipo creativo de tu proyecto",
];

const bars = [69, 50, 75, 35, 69, 80, 50];

// Foto de relleno en escala de grises (equipo en una mesa) hasta tener la imagen real.
function TeamPhoto() {
  return (
    <svg className="wy-photo-art" viewBox="0 0 659 443" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="wyBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8a8a8a" />
          <stop offset="0.62" stopColor="#6e6e6e" />
          <stop offset="1" stopColor="#8d8d8d" />
        </linearGradient>
        <linearGradient id="wyFloor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9a9a9a" />
          <stop offset="1" stopColor="#c9c9c9" />
        </linearGradient>
      </defs>
      <rect width="659" height="443" fill="url(#wyBg)" />
      <rect y="330" width="659" height="113" fill="url(#wyFloor)" />
      <rect x="470" y="190" width="170" height="170" rx="4" fill="#d6d6d6" />
      <rect x="110" y="300" width="270" height="12" rx="4" fill="#b9b9b9" />
      <rect x="130" y="312" width="10" height="70" fill="#a8a8a8" />
      <rect x="350" y="312" width="10" height="70" fill="#a8a8a8" />
      <g fill="#4a4a4a">
        <circle cx="205" cy="150" r="24" />
        <path d="M165 330c-4-70 6-130 40-130s48 58 44 130z" />
      </g>
      <g fill="#5e5e5e">
        <circle cx="385" cy="130" r="26" />
        <path d="M340 340c-6-90 10-170 46-170s54 80 48 170z" />
      </g>
      <g fill="#3b3b3b">
        <circle cx="560" cy="105" r="22" />
        <path d="M528 360c-8-110 0-200 30-200s42 90 36 200z" />
      </g>
    </svg>
  );
}

// "Por qué elegirnos": cabecera con palabras que suben, filas que entran de lado, dos paneles que se deslizan,
// barras que crecen y un texto de chat que se escribe y se borra con el scroll.
export function Why() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelled = false;
    let ctx: gsap.Context | undefined;
    const t = window.setTimeout(() => {
      if (cancelled) return;
      ctx = gsap.context(() => {
        // Cabecera (IX3: top 85 % → una vez)
        const h1 = SplitText.create(".wy-h1", { type: "words" });
        const h6 = SplitText.create(".wy-h6", { type: "lines" });
        gsap
          .timeline({ scrollTrigger: { trigger: ".wy-header", start: "top 85%", once: true } })
          .from(h1.words, { opacity: 0, yPercent: 50, duration: 1, stagger: 0.1, ease: "power4.out" }, 0)
          .from(h6.lines, { opacity: 0, yPercent: 50, duration: 1, stagger: 0.05, ease: "power4.out" }, 0.33)
          .fromTo(
            ".wy-row",
            { opacity: 0, xPercent: -20 },
            { opacity: 1, xPercent: 0, duration: 0.5, stagger: 0.05, ease: "power1.inOut" },
            0.48,
          );

        // Etiqueta: entra desde la izquierda (100 px, 1 s, outQuart, retraso .25 s)
        gsap.from(".wy-lab", {
          opacity: 0,
          x: -100,
          duration: 1,
          delay: 0.25,
          ease: "power4.out",
          scrollTrigger: { trigger: ".wy-lab", start: "top bottom", once: true },
        });

        // Paneles: el contenedor entra desde la izquierda; el panel 1 desde la izquierda y el 2 desde la derecha (retraso .35 s)
        const st = { trigger: ".wy-panels", start: "top bottom", once: true } as const;
        gsap.from(".wy-panels", { opacity: 0, x: -100, duration: 1, ease: "power4.out", scrollTrigger: st });
        gsap.from(".wy-b1", { opacity: 0, x: -100, duration: 1, delay: 0.35, ease: "power4.out", scrollTrigger: st });
        gsap.from(".wy-b2", { opacity: 0, x: 100, duration: 1, delay: 0.35, ease: "power4.out", scrollTrigger: st });

        // Barras: crecen una tras otra (500 ms, easeInOut, 100 ms entre cada una)
        gsap.fromTo(
          ".wy-col i",
          { height: 0 },
          {
            height: (i: number) => bars[i],
            duration: 0.5,
            stagger: 0.1,
            ease: "sine.inOut",
            scrollTrigger: { trigger: ".wy-cols", start: "top bottom", once: true },
          },
        );

        // Texto del chat ligado al scroll: se escribe (0–20 %), espera, se borra (50–55 %) y se escribe otro (55–60 %)
        const tl = gsap.timeline({
          scrollTrigger: { trigger: ".wy-run", start: "top bottom", end: "bottom top", scrub: 0.5 },
        });
        tl.set(".wy-t1, .wy-t2", { width: "0%" }, 0)
          .to(".wy-t1", { width: "100%", duration: 20, ease: "none" }, 0)
          .to(".wy-t1", { width: "0%", duration: 5, ease: "none" }, 50)
          .to(".wy-t2", { width: "100%", duration: 5, ease: "none" }, 55)
          .to({}, { duration: 40 }, 60);
      }, el);
    }, 700);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
      ctx?.revert();
    };
  }, []);

  return (
    <section className="sec l nop wy clip" id="por-que" ref={root}>
      <GridLines />
      <div className="wrap">
        <div className="wy-wrap">
          <div className="wy-header">
            <div className="wy-title">
              <span className="lbl wy-lab">Por qué elegirnos</span>
              <h2 className="hm-h1 wy-h1">Elevamos tu marca</h2>
            </div>
            <div className="wy-sub">
              <h3 className="hm-h6 wy-h6">Las marcas más ambiciosas confían en nosotros</h3>
              <div className="wy-list">
                {list.map((t, i) => (
                  <div className="wy-row" key={t}>
                    <span className="lbl">{String(i + 1).padStart(3, "0")}</span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="wy-panels">
            <div className="wy-b wy-b1">
              <div className="wy-card">
                <div className="wy-c1">
                  <span className="wy-cap">Crecimiento</span>
                  <span className="wy-ico">
                    <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </div>
                <div className="wy-c2">
                  <div className="wy-mini">
                    <div className="wy-top">
                      <CircleArrowUp size={14} aria-hidden="true" />
                      <span className="wy-num">280%</span>
                    </div>
                    <div className="wy-desc">Crecimiento de conversión</div>
                  </div>
                  <div className="wy-mini">
                    <div className="wy-top">
                      <span className="wy-num">-45%</span>
                    </div>
                    <div className="wy-desc">Reducción de costos</div>
                  </div>
                </div>
                <div className="wy-cols" aria-hidden="true">
                  {bars.map((h, i) => (
                    <div className="wy-col" key={i}>
                      <i className={i === 2 ? "hot" : ""} style={{ height: h }} />
                    </div>
                  ))}
                </div>
                <div className="wy-c4">
                  {[
                    ["3.5x", "ROI", "Web - 43%"],
                    ["120", "%", "Apps - 34%"],
                    ["92", "%", "Marca - 22%"],
                  ].map(([n, u, d]) => (
                    <div className="wy-mini" key={d}>
                      <div className="wy-top end">
                        <span className="wy-num tight">{n}</span>
                        <span className="wy-unit">{u}</span>
                      </div>
                      <div className="wy-bot">
                        <i className="wy-dot" />
                        <span className="wy-desc">{d}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="wy-b wy-b2">
              <TeamPhoto />
              <div className="wy-card wy-box2">
                <span className="wy-cap1">Escribe o programa</span>
                <div className="wy-icons">
                  <div className="wy-ic">
                    <span className="wy-i">
                      <Plus size={11} aria-hidden="true" />
                    </span>
                    <span className="wy-i">
                      <SlidersHorizontal size={11} aria-hidden="true" />
                    </span>
                    <i className="wy-sep" />
                    <span className="wy-i">
                      <PenLine size={11} aria-hidden="true" />
                    </span>
                    <span className="wy-i blue">
                      <X size={11} aria-hidden="true" />
                    </span>
                  </div>
                  <div className="wy-ic">
                    <span className="wy-i">
                      <Mic size={11} aria-hidden="true" />
                    </span>
                    <span className="wy-i gray">
                      <Square size={9} fill="currentColor" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="wy-card wy-box3">
                <div className="wy-q">
                  <div className="wy-q1">
                    <CornerDownRight size={16} aria-hidden="true" />
                    <div className="wy-run">
                      <div className="wy-t wy-t1">“¿Quieres cotizar tu proyecto web?”</div>
                      <div className="wy-t wy-t2">“Te ayudo con lo que necesites”</div>
                    </div>
                  </div>
                  <X size={14} aria-hidden="true" />
                </div>
                <span className="wy-cap1">Pregúntanos lo que quieras</span>
                <div className="wy-pills">
                  <div className="wy-pg">
                    <span className="wy-pill">
                      <BookOpen size={11} aria-hidden="true" />
                      Estudio
                    </span>
                    <span className="wy-pill">
                      <Paperclip size={11} aria-hidden="true" />
                      Adjuntar
                    </span>
                    <span className="wy-pill">
                      <Globe size={11} aria-hidden="true" />
                      Buscar
                    </span>
                  </div>
                  <span className="wy-pill voice">
                    <AudioLines size={11} aria-hidden="true" />
                    Voz
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
