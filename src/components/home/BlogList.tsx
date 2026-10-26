"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { posts, services } from "@/data/site";
import GridLines from "./GridLines";

gsap.registerPlugin(ScrollTrigger, SplitText);

const heights = [272, 361, 400, 161];
const imgOf = (slug: string, k: 0 | 1) => services.find((s) => s.slug === slug)!.images[k];
// Imagen de cada artículo (de relleno hasta tener las reales).
const imgs = [imgOf("desarrollo-web", 0), imgOf("estrategia-digital", 0), imgOf("servicio-tecnico", 1), imgOf("identidad-de-marca", 1)];

const fmt = (iso: string) => new Intl.DateTimeFormat("es-CO", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(iso));

// Blog: cuatro columnas con alturas de imagen distintas; las imágenes se revelan (altura 0 → 100 %, escala 1.5 → 1),
// los autores caen desde arriba y la imagen se acerca (1 → 1.1) al pasar el cursor.
export default function BlogList() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelled = false;
    let ctx: gsap.Context | undefined;
    const t = window.setTimeout(() => {
      if (cancelled) return;
      ctx = gsap.context(() => {
        const h = SplitText.create(".bl-h1", { type: "words" });
        gsap.from(h.words, {
          opacity: 0,
          yPercent: 50,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          scrollTrigger: { trigger: ".bl-head", start: "top 85%", once: true },
        });
        gsap
          .timeline({ scrollTrigger: { trigger: ".bl-list", start: "top 90%", once: true } })
          .fromTo(".bl-ghost", { height: 0, scale: 1.5 }, { height: "100%", scale: 1, duration: 1, stagger: 0.2, ease: "power4.inOut" }, 0)
          .from(".bl-author", { opacity: 0, yPercent: -100, duration: 1, stagger: 0.02, ease: "power4.out" }, 0);
        gsap.utils.toArray<HTMLElement>(".bl-link").forEach((a) => {
          const img = a.querySelector<HTMLElement>(".bl-ghost");
          a.addEventListener("pointerenter", () => gsap.to(img, { scale: 1.1, duration: 0.6, ease: "power2.out", overwrite: "auto" }));
          a.addEventListener("pointerleave", () => gsap.to(img, { scale: 1, duration: 0.6, ease: "power2.out", overwrite: "auto" }));
        });
      }, el);
    }, 700);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
      ctx?.revert();
    };
  }, []);

  return (
    <section className="sec l bl clip" id="blog" ref={root}>
      <GridLines />
      <div className="wrap">
        <div className="bl-head">
          <span className="lbl" data-a="label">
            El blog
          </span>
          <h2 className="bl-h1">Noticias y guías</h2>
        </div>
        <div className="bl-list">
          {posts.slice(0, 4).map((p, i) => (
            <Link href={`/blog/${p.slug}`} className="bl-link" key={p.slug}>
              <div className="bl-author">
                <div className="bl-aw">
                  <span className="av">TU</span>
                  <div>
                    <div className="bl-an">TechnoUltra</div>
                    <div className="bl-ap">Editor</div>
                  </div>
                </div>
                <time className="bl-date" dateTime={p.date}>
                  {fmt(p.date)}
                </time>
              </div>
              <div className="bl-img" style={{ height: heights[i % heights.length] }}>
                <Image className="bl-ghost" src={imgs[i % imgs.length]} alt="" fill sizes="(min-width: 992px) 315px, 50vw" />
              </div>
              <div className="bl-t">{p.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
