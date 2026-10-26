"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { site } from "@/data/site";
import GridLines from "./GridLines";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Boletín: franja gris con título y un campo de correo con botón circular dentro.
export default function Newsletter() {
  const root = useRef<HTMLElement>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelled = false;
    let ctx: gsap.Context | undefined;
    const t = window.setTimeout(() => {
      if (cancelled) return;
      ctx = gsap.context(() => {
        const h = SplitText.create(".nl-t", { type: "words", mask: "words" });
        gsap
          .timeline({ scrollTrigger: { trigger: ".nl-wrap", start: "top 80%", once: true } })
          .from(h.words, { yPercent: 100, opacity: 0, duration: 1, stagger: 0.1, ease: "power4.out" }, 0)
          .from(".nl-form", { opacity: 0, yPercent: 50, duration: 1, ease: "power4.out" }, 0.3);
      }, el);
    }, 700);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
      ctx?.revert();
    };
  }, []);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "");
    // Sin servicio de correo conectado: abre el correo del usuario con la solicitud de suscripción.
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Suscripción al boletín")}&body=${encodeURIComponent(`Quiero recibir novedades. Mi correo: ${email}`)}`;
    setSent(true);
  }

  return (
    <section className="sec g nl" id="boletin" ref={root}>
      <GridLines />
      <div className="wrap">
        <div className="nl-wrap">
          <span className="lbl" data-a="label">
            Boletín
          </span>
          <div className="nl-t">ACTUALIZA TUS CONOCIMIENTOS</div>
          <div className="nl-form">
            {sent ? (
              <p className="nl-done">¡Gracias! Abrimos tu correo para confirmar la suscripción.</p>
            ) : (
              <form onSubmit={onSubmit}>
                <input type="email" name="email" required maxLength={256} placeholder="Escribe tu correo" aria-label="Correo electrónico" />
                <button type="submit" aria-label="Suscribirme">
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
