"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services as allServices } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

// El servicio técnico no se muestra en la home (sigue disponible en /servicios/servicio-tecnico).
const services = allServices.filter((s) => s.slug !== "servicio-tecnico");

// Tramos de la línea de tiempo (0 → 1) en los que un servicio se cierra y el siguiente se abre. Igual que en la
// referencia: se mantiene abierto el primero, y luego cada ~25 % de scroll cambia al siguiente en un tramo de ~13 %.
const HOLD_START = 0.1;
const STEP = 0.25;
const TRANS = 0.13;

// Acordeón de servicios. En escritorio se maneja con el scroll (sección alta con el contenido fijo en pantalla: al
// bajar se abre cada servicio en orden y al subir se vuelven a cerrar, con scrub suavizado). En pantallas pequeñas,
// bajas de alto o con "reducir movimiento" funciona como acordeón normal con clic.
export default function ServicesAccordion() {
  const [open, setOpen] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const scrubbed = useRef(false);
  const range = useRef({ start: 0, end: 1 });

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 992px) and (min-height: 720px) and (prefers-reduced-motion: no-preference)", () => {
      const items = gsap.utils.toArray<HTMLElement>(".svc-item", el);
      const bodies = items.map((it) => it.querySelector<HTMLElement>(".svc-body")!);
      const inners = bodies.map((b) => b.firstElementChild as HTMLElement);
      const ease = gsap.parseEase("power2.inOut");
      const n = items.length;
      let current = -1;

      const apply = (p: number) => {
        // s[k]: avance (0→1) del cambio del servicio k al k+1
        const s = Array.from({ length: n - 1 }, (_, k) => {
          const a = HOLD_START + k * STEP;
          return ease(gsap.utils.clamp(0, 1, (p - a) / TRANS));
        });
        let best = 0;
        let bestO = -1;
        items.forEach((it, i) => {
          const o = (i === 0 ? 1 : s[i - 1]) - (i === n - 1 ? 0 : s[i]);
          it.style.setProperty("--o", o.toFixed(4));
          bodies[i].style.height = `${(inners[i].scrollHeight * o).toFixed(1)}px`;
          if (o > bestO) {
            bestO = o;
            best = i;
          }
        });
        if (best !== current) {
          current = best;
          setOpen(best);
        }
      };

      // Solo se activa si el contenido a pantalla completa cabe en la ventana; si no, queda el acordeón con clic.
      el.classList.add("is-scrub");
      const maxBody = Math.max(...inners.map((b) => b.scrollHeight));
      const heads = items.reduce((t, it) => t + it.querySelector<HTMLElement>(".svc-btn")!.offsetHeight + 1, 0);
      const needed = heads + maxBody;
      if (needed > window.innerHeight + 60) {
        el.classList.remove("is-scrub");
        bodies.forEach((b) => (b.style.height = ""));
        return;
      }
      scrubbed.current = true;
      // Si el contenido es un poco más alto que la ventana, el bloque fijo se sube lo justo para que se vea completo.
      const sticky = el.querySelector<HTMLElement>(".svc-sticky")!;
      sticky.style.top = `${Math.min(0, window.innerHeight - needed - 8)}px`;

      const state = { p: 0 };
      const tl = gsap.to(state, {
        p: 1,
        ease: "none",
        onUpdate: () => apply(state.p),
        scrollTrigger: {
          trigger: el,
          start: "top 20%",
          end: "bottom top",
          scrub: 0.8,
          onRefresh: (self) => {
            range.current = { start: self.start, end: self.end };
            apply(state.p);
          },
        },
      });
      apply(0);

      return () => {
        scrubbed.current = false;
        tl.scrollTrigger?.kill();
        tl.kill();
        el.classList.remove("is-scrub");
        el.querySelector<HTMLElement>(".svc-sticky")!.style.top = "";
        items.forEach((it) => it.style.removeProperty("--o"));
        bodies.forEach((b) => (b.style.height = ""));
        setOpen(0);
      };
    });
    return () => mm.revert();
  }, []);

  // En modo scroll, pulsar un servicio lleva el scroll hasta el punto en que ese servicio queda abierto.
  const toggle = (i: number) => {
    if (!scrubbed.current) {
      setOpen(open === i ? -1 : i);
      return;
    }
    const { start, end } = range.current;
    const p = i === 0 ? 0.04 : HOLD_START + (i - 1) * STEP + TRANS + (STEP - TRANS) / 2;
    const y = start + (end - start) * p;
    const lenis = (window as unknown as { __lenis?: { scrollTo: (y: number, o?: object) => void } }).__lenis;
    if (lenis) lenis.scrollTo(y, { duration: 1.2 });
    else window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="svc-scroll" ref={root}>
      <div className="svc-sticky" role="list">
        {services.map((s, i) => {
          const isOpen = open === i;
          return (
            <div role="listitem" key={s.slug} className={`svc-item ${isOpen ? "open" : ""}`}>
              <h3>
                <button className="svc-btn" aria-expanded={isOpen} aria-controls={`svc-${s.slug}`} onClick={() => toggle(i)}>
                  <span className="n">{s.n}.</span>
                  <span className="t">
                    <span>
                      {s.title}
                      <sup>({s.n})</sup>
                    </span>
                    <span className="pm" aria-hidden="true" />
                  </span>
                </button>
              </h3>
              <div className="svc-body" id={`svc-${s.slug}`}>
                <div>
                  <div className="in">
                    <div className="col">
                      <div className="svc-tiles">
                        {s.images.map((src, k) => (
                          <div className="tile" key={src}>
                            <Image src={src} alt={`${s.title}: imagen ${k + 1}`} fill sizes="(min-width: 992px) 270px, 45vw" />
                          </div>
                        ))}
                      </div>
                      <p>{s.short}</p>
                      <div className="chips">
                        {s.categories.map((c) => (
                          <span className="chip" key={c}>
                            {c}
                          </span>
                        ))}
                      </div>
                      <Link href={`/servicios/${s.slug}`} className="more link-u" tabIndex={isOpen ? 0 : -1}>
                        Ver servicio de {s.title.toLowerCase()} →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
