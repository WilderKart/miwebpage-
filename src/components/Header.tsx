"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { nav, site } from "@/data/site";
import Btn from "./Btn";

const main = nav.filter((l) => l.href !== "/planes");
const more = [
  { href: "/planes", label: "Planes" },
  { href: "/servicios/servicio-tecnico", label: "Servicio técnico" },
  { href: "/privacidad", label: "Política de privacidad" },
  { href: "/terminos", label: "Términos de servicio" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const last = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y > 140 && y > last.current + 4) setHidden(true);
      else if (y < last.current - 4 || y <= 140) setHidden(false);
      last.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const cls = [
    "header",
    open ? "open" : scrolled ? "scrolled" : pathname !== "/" ? "on-light" : "",
    open && scrolled ? "scrolled" : "",
    hidden && !open ? "hide" : "",
  ].join(" ");

  return (
    <>
      <div className="promo">
        <i />
        <span>Diagnóstico gratis para tu sitio web</span>
        <i />
        <Link href="/contacto">Agendar</Link>
        <i />
      </div>
      <header className={cls}>
        <div className="wrap">
          <Link href="/" className="logo" aria-label={`${site.name} — inicio`} onClick={() => setOpen(false)}>
            <Image src="/brand/icon.png" alt="" width={96} height={96} priority />
            <span className="logo-txt">
              <span className="a">
                {site.nameTop}
                <b>{site.nameBottom}</b>
              </span>
              <span className="b" aria-hidden="true">
                {site.nameTop}
                <b>{site.nameBottom}</b>
              </span>
            </span>
          </Link>
          <p className="h-info">
            Con sede en
            <br />
            {site.city}, {site.country}
          </p>
          <p className="h-info">
            <a href={site.phoneHref}>{site.phone}</a>
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <div className="h-last">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="h-info h-ig">
              Instagram <ArrowUpRight size={13} aria-hidden="true" />
            </a>
            <button
              className="menu-btn"
              aria-expanded={open}
              aria-controls="menu"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((v) => !v)}
            >
              <i />
              <i />
            </button>
          </div>
        </div>
      </header>

      <div id="menu" className={`menu ${open ? "open" : ""}`} data-lenis-prevent aria-hidden={!open}>
        <div className="wrap menu-grid">
          <nav className="menu-left" aria-label="Menú principal">
            {main.map((l, i) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`ml ${active ? "is-active" : ""}`}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                >
                  <span className="ml-row">
                    <span className="ml-title">
                      <span className="t">{l.label}</span>
                      <span className="t b" aria-hidden="true">
                        {l.label}
                      </span>
                    </span>
                    <sup className="ml-n">({String(i + 1).padStart(2, "0")})</sup>
                  </span>
                  <ArrowUpRight className="ml-ico" aria-hidden="true" />
                </Link>
              );
            })}
          </nav>
          <div className="menu-right">
            <div>
              <div className="mr-head">
                Más páginas <sup>(06)</sup>
              </div>
              <ul className="mr-links">
                {more.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
                      <span>{l.label}</span>
                      <ArrowUpRight size={20} aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Btn href="/contacto" tone="dark" className="mr-btn" onClick={() => setOpen(false)}>
              Contáctanos
            </Btn>
          </div>
        </div>
      </div>
    </>
  );
}
