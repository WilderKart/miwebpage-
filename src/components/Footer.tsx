"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/data/site";
import GridLines from "@/components/home/GridLines";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/blog", label: "Blog" },
  { href: "/planes", label: "Planes" },
  { href: "/privacidad", label: "Privacidad" },
  { href: "/terminos", label: "Términos" },
];

const socials = [
  { href: site.instagram, label: "Instagram" },
  { href: site.facebook, label: "Facebook" },
  { href: site.linkedin, label: "LinkedIn" },
];

// Pie de página: contacto grande a la izquierda, formulario y enlaces a la derecha y la marca gigante
// (Techno / Ultra) al fondo, que baja y aparece con el scroll.
export default function Footer() {
  const root = useRef<HTMLElement>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ft-logo span",
        { opacity: 0, yPercent: -100 },
        {
          opacity: 1,
          yPercent: 0,
          ease: "none",
          stagger: 0.05,
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.8 },
        },
      );
    }, el);
    return () => ctx.revert();
  }, []);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "");
    const email = String(f.get("email") ?? "");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Contacto desde la web")}&body=${encodeURIComponent(`Hola, soy ${name}. Mi correo es ${email}.`)}`;
    setSent(true);
  }

  return (
    <footer className="ft" ref={root}>
      <GridLines tone="dark" />
      <div className="wrap">
        <div className="ft-content">
          <div className="ft-left">
            <div className="ft-info">
              <div className="ft-k">HABLEMOS</div>
              <div className="ft-big">
                <a href={site.phoneHref}>{site.phone}</a>
                <a href={`mailto:${site.email}?subject=${encodeURIComponent("Contacto desde la web")}`}>{site.email}</a>
              </div>
              <div className="ft-addr">
                Con sede en <br />
                {site.city}, {site.country}
              </div>
            </div>
          </div>
          <div className="ft-right">
            <div className="ft-news">
              <div className="ft-nt">Escríbenos</div>
              {sent ? (
                <p className="ft-done">¡Gracias! Abrimos tu correo para enviar el mensaje.</p>
              ) : (
                <form onSubmit={onSubmit}>
                  <input name="name" type="text" maxLength={256} placeholder="Tu nombre *" aria-label="Tu nombre" required />
                  <input name="email" type="email" maxLength={256} placeholder="Correo *" aria-label="Correo electrónico" required />
                  <button type="submit" className="ft-btn">
                    Contáctanos
                  </button>
                </form>
              )}
              <p className="ft-sub">Cuéntanos tu proyecto y te respondemos con un diagnóstico gratis para tu sitio web.</p>
            </div>
            <div className="ft-links">
              <div className="ft-col">
                <div className="ft-lt">NAVEGACIÓN</div>
                {links.map((l) => (
                  <Link key={l.href} href={l.href} className="ft-link">
                    {l.label}
                  </Link>
                ))}
              </div>
              <div className="ft-col ft-soc">
                <div className="ft-lt">REDES</div>
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="ft-link ft-sl">
                    {s.label}
                    <ArrowUpRight size={12} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ft-logo" aria-hidden="true">
        <span>{site.nameTop}</span>
        <span>{site.nameBottom}®</span>
      </div>
    </footer>
  );
}
