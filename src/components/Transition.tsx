"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { site } from "@/data/site";

const word = `${site.nameTop}${site.nameBottom}`.split("");

function fireGo() {
  document.documentElement.dataset.intro = "go";
  window.dispatchEvent(new Event("intro:go"));
}

type LenisLike = { scrollTo: (n: number, o?: { immediate?: boolean }) => void };

// Loader de entrada (columnas + líneas + logo) y transición entre páginas, como en Conax.
export default function Transition() {
  const root = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const busy = useRef(false);
  const first = useRef(true);
  const fallback = useRef<number | null>(null);

  // Loader inicial
  useEffect(() => {
    const el = root.current!;
    el.style.animation = "none";
    const skip = document.documentElement.dataset.loader !== "play";
    if (skip) {
      gsap.set(el, { display: "none" });
      fireGo();
      return;
    }
    const cols = el.querySelectorAll(".tr-col");
    const lines = el.querySelectorAll(".tr-line");
    const chars = el.querySelectorAll(".tr-ch > span");
    const tl = gsap.timeline({ onComplete: () => void gsap.set(el, { display: "none" }) });
    tl.fromTo(lines, { scaleY: 0 }, { scaleY: 1, duration: 1.8, ease: "power2.inOut", transformOrigin: "top" }, 0)
      .fromTo(chars, { yPercent: 110 }, { yPercent: 0, duration: 0.8, ease: "power4.out", stagger: 0.05 }, 0.55)
      .to(chars, { yPercent: -110, duration: 0.8, ease: "power4.in", stagger: { each: 0.05, from: "end" } }, 1.95)
      .to(lines, { opacity: 0, duration: 0.4 }, 2.6)
      .to(cols, { scaleX: 0, duration: 1.1, ease: "expo.inOut", stagger: 0.08, transformOrigin: "right" }, 2.8)
      .call(fireGo, [], 3.15);
    return () => {
      tl.kill();
    };
  }, []);

  // Cubrir la pantalla al hacer clic en un enlace interno
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element).closest("a");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      let url: URL;
      try {
        url = new URL(a.href, location.href);
      } catch {
        return;
      }
      if (url.origin !== location.origin || url.pathname === location.pathname) return;
      e.preventDefault();
      e.stopPropagation();
      if (busy.current) return;
      busy.current = true;
      const el = root.current!;
      const cols = el.querySelectorAll(".tr-col");
      const chars = el.querySelectorAll(".tr-ch > span");
      gsap.set(el, { display: "block" });
      gsap.set(cols, { scaleX: 0, transformOrigin: "left" });
      gsap.set(chars, { yPercent: 110 });
      gsap
        .timeline()
        .to(cols, { scaleX: 1, duration: 0.6, ease: "power3.inOut", stagger: 0.07 })
        .to(chars, { yPercent: 0, duration: 0.45, ease: "power4.out", stagger: 0.03 }, "-=0.25")
        .call(() => router.push(url.pathname + url.search + url.hash));
      fallback.current = window.setTimeout(reveal, 6000);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  function reveal() {
    if (!busy.current) return;
    if (fallback.current) window.clearTimeout(fallback.current);
    const el = root.current!;
    const cols = el.querySelectorAll(".tr-col");
    const chars = el.querySelectorAll(".tr-ch > span");
    (window as unknown as { __lenis?: LenisLike }).__lenis?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
    gsap
      .timeline({
        onComplete: () => {
          gsap.set(el, { display: "none" });
          busy.current = false;
        },
      })
      .to(chars, { yPercent: -110, duration: 0.45, ease: "power4.in", stagger: { each: 0.03, from: "end" } })
      .set(cols, { transformOrigin: "right" })
      .to(cols, { scaleX: 0, duration: 0.8, ease: "expo.inOut", stagger: 0.07 }, "-=0.1");
  }

  // La nueva página ya cargó: descubrir
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (busy.current) {
      const id = window.setTimeout(reveal, 250);
      return () => window.clearTimeout(id);
    }
  }, [pathname]);

  return (
    <div className="tr" ref={root} aria-hidden="true">
      <div className="tr-cols">
        <i className="tr-col" />
        <i className="tr-col" />
        <i className="tr-col" />
        <i className="tr-col" />
      </div>
      <div className="tr-lines">
        <i className="tr-line" />
        <i className="tr-line" />
        <i className="tr-line" />
      </div>
      <div className="tr-logo">
        {word.map((c, i) => (
          <span className="tr-ch" key={i}>
            <span>{c}</span>
          </span>
        ))}
        <sup>®</sup>
      </div>
    </div>
  );
}
