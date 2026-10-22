import Link from "next/link";
import { site } from "@/data/site";

type Props = {
  word: string;
  title: string;
  crumbs?: { href?: string; label: string }[];
  dark?: boolean;
};

// Encabezado de páginas internas: palabra gigante decorativa + título H1 con palabras clave.
export default function PageHero({ word, title, crumbs = [], dark }: Props) {
  return (
    <section className={`page-hero ${dark ? "dk" : ""}`}>
      <div className="wrap">
        <div className="row">
          <nav className="crumbs" aria-label="Ruta de navegación">
            <Link href="/">Inicio</Link>
            {crumbs.map((c) => (
              <span key={c.label}>
                {" / "}
                {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}
              </span>
            ))}
          </nav>
          <h1 className="sub" style={{ gridColumn: "2 / span 2" }}>
            {title}
          </h1>
          <div style={{ justifySelf: "end", textAlign: "right" }}>
            <a href={`mailto:${site.email}`} className="link-u">
              {site.email}
            </a>
          </div>
        </div>
        <div className="big" aria-hidden="true">
          {word}
          <sup>*</sup>
        </div>
      </div>
    </section>
  );
}
