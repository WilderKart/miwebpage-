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
    const body = `Hola TechnoUltra, soy ${f.get("name")}.

${f.get("message")}

Mi correo: ${f.get("email")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Contacto desde la web")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <footer className="ft" ref={root}>
      <GridLines tone="dark" />
      <div className="wrap">
        <div className="ft-content">
          <div className="ft-left">
            <div className="ft-info">
              <div className="ft-k">HABLEMOS DE TU PROYECTO</div>
              <p className="ft-lead">
                Cuéntanos qué tienes en mente. Ya sea una web corporativa, una aplicación a medida o escalar tu e-commerce, nuestro equipo está listo para asesorarte.
              </p>
            </div>
            <address className="ft-contact">
              <a href={`mailto:${site.email}?subject=${encodeURIComponent("Contacto desde la web")}`}>{site.email}</a>
              <span>
                <em>Teléfono</em> <a href={site.phoneHref}>{site.phone}</a>
              </span>
              <span>
                <em>Con sede en</em> {site.city}, {site.country}
              </span>
            </address>
          </div>
          <div className="ft-right">
            <div className="ft-news">
              {sent ? (
                <p className="ft-done">¡Gracias! Abrimos tu correo para enviar el mensaje.</p>
              ) : (
                <form onSubmit={onSubmit}>
                  <input name="name" type="text" maxLength={256} placeholder="Nombre completo" aria-label="Nombre completo" autoComplete="name" required />
                  <input name="email" type="email" maxLength={256} placeholder="Correo electrónico" aria-label="Correo electrónico" autoComplete="email" required />
                  <textarea name="message" rows={3} maxLength={2000} placeholder="Háblanos de tu proyecto (servicios, presupuesto o plazos)..." aria-label="Mensaje" required />
                  <label className="ft-consent">
                    <input type="checkbox" name="consent" required />
                    <span>
                      Al enviar, autorizas el tratamiento de tus datos personales de acuerdo con nuestra <Link href="/privacidad">Política de Privacidad</Link> y <Link href="/terminos">Términos de Servicio</Link>.
                    </span>
                  </label>
                  <button type="submit" className="ft-btn">
                    Enviar mensaje <span aria-hidden="true">→</span>
                  </button>
                </form>
              )}
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
