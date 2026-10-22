"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function whenGo(fn: () => void) {
  if (document.documentElement.dataset.intro === "go") {
    fn();
    return () => {};
  }
  window.addEventListener("intro:go", fn, { once: true });
  return () => window.removeEventListener("intro:go", fn);
}

// Animaciones globales: titulares por líneas con máscara, parallax de imágenes y cursor circular en proyectos.
export default function Motion() {
  const pathname = usePathname();
  const first = useRef(true);
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const delay = first.current ? 0 : 0.8;
    first.current = false;
    let ctx: gsap.Context | undefined;
    let cancelled = false;

    const off = whenGo(() => {
      // Espera a que React termine de hidratar toda la página antes de dividir los titulares
      document.fonts.ready.then(() => setTimeout(() => {
        if (cancelled) return;
        ctx = gsap.context(() => {
          // Titulares de páginas internas: líneas que suben desde una máscara
          gsap.utils
            .toArray<HTMLElement>("main h2, main .detail-hero h1, main .page-hero h1.sub, footer h2")
            .filter((el) => !el.closest(".hero") && !el.closest(".home-root") && !el.hasAttribute("data-a"))
            .forEach((el) => {
              SplitText.create(el, {
                type: "lines",
                mask: "lines",
                autoSplit: true,
                onSplit: (self) =>
                  gsap.from(self.lines, {
                    yPercent: 105,
                    opacity: 0,
                    duration: 1,
                    ease: "power4.out",
                    stagger: 0.08,
                    delay,
                    scrollTrigger: { trigger: el, start: "top 90%", once: true },
                  }),
              });
            });

          // Animaciones de la home (mismos tiempos y easings que la referencia)
          const st = (el: Element, start = "top 85%") => ({ trigger: el, start, once: true });
          gsap.utils.toArray<HTMLElement>("[data-a='h'], [data-a='words']").forEach((el) => {
            const sp = SplitText.create(el, { type: "words" });
            gsap.from(sp.words, { opacity: 0, yPercent: 50, duration: 1, ease: "power4.out", stagger: 0.1, delay, scrollTrigger: st(el) });
          });
          gsap.utils.toArray<HTMLElement>("[data-a='lines']").forEach((el) => {
            const sp = SplitText.create(el, { type: "lines", mask: "lines" });
            gsap.from(sp.lines, { opacity: 0, yPercent: 50, duration: 1, ease: "power4.out", stagger: 0.05, delay: delay + 0.3, scrollTrigger: st(el) });
          });
          gsap.utils.toArray<HTMLElement>("[data-a='label']").forEach((el) => {
            const sp = SplitText.create(el, { type: "lines", mask: "lines" });
            gsap.from(sp.lines, { opacity: 0, xPercent: -100, duration: 0.3, ease: "power1.inOut", delay, scrollTrigger: st(el, "top 95%") });
          });
          gsap.utils.toArray<HTMLElement>("[data-a='slide']").forEach((el, i) => {
            gsap.from(el, { opacity: 0, xPercent: -20, duration: 0.4, ease: "power1.inOut", delay: 0.2 + (i % 4) * 0.05, scrollTrigger: st(el) });
          });
          gsap.utils.toArray<HTMLElement>("[data-a='fade']").forEach((el) => {
            gsap.from(el, { opacity: 0, duration: 1, ease: "power2.out", scrollTrigger: st(el, "top 80%") });
          });
          gsap.utils.toArray<HTMLElement>("[data-a='up']").forEach((el) => {
            gsap.from(el, { opacity: 0, yPercent: 50, duration: 1, ease: "power4.out", delay, scrollTrigger: st(el) });
          });
          gsap.utils.toArray<HTMLElement>("[data-a='stagger']").forEach((el) => {
            gsap.from(el.children, { opacity: 0, yPercent: 50, duration: 1, ease: "power4.out", stagger: 0.05, scrollTrigger: st(el, "top 80%") });
          });

          // Parallax suave en imágenes
          gsap.utils.toArray<HTMLElement>(".about-photo .tile svg, .proj .thumb img, .shot img, [data-parallax]").forEach((img) => {
            gsap.fromTo(
              img,
              { yPercent: -7, scale: 1.12 },
              {
                yPercent: 7,
                ease: "none",
                scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: true },
              },
            );
          });
        });
        ScrollTrigger.refresh();
      }, 700));
    });

    return () => {
      cancelled = true;
      off();
      ctx?.revert();
    };
  }, [pathname]);

  // Cursor circular al pasar sobre proyectos
  useEffect(() => {
    const el = cursor.current;
    if (!el || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const qx = gsap.quickTo(el, "x", { duration: 0.45, ease: "power3" });
    const qy = gsap.quickTo(el, "y", { duration: 0.45, ease: "power3" });
    const label = el.querySelector("span")!;
    const move = (e: PointerEvent) => {
      qx(e.clientX);
      qy(e.clientY);
    };
    const over = (e: PointerEvent) => {
      const t = (e.target as Element).closest<HTMLElement>("[data-cursor]");
      if (!t) return;
      label.textContent = t.dataset.cursor ?? "";
      el.style.backgroundImage = t.dataset.img ? `url(${t.dataset.img})` : "none";
      gsap.to(el, { scale: 1, opacity: 1, duration: 0.45, ease: "power3.out" });
    };
    const out = (e: PointerEvent) => {
      const t = (e.target as Element).closest("[data-cursor]");
      const to = (e.relatedTarget as Element | null)?.closest?.("[data-cursor]");
      if (t && !to) gsap.to(el, { scale: 0, opacity: 0, duration: 0.35, ease: "power3.in" });
    };
    window.addEventListener("pointermove", move);
    document.addEventListener("pointerover", over);
    document.addEventListener("pointerout", out);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.removeEventListener("pointerout", out);
    };
  }, []);

  return (
    <div className="wcursor" ref={cursor} aria-hidden="true">
      <span />
    </div>
  );
}
