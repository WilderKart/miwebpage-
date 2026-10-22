"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { site, wa } from "@/data/site";
import Btn from "./Btn";

gsap.registerPlugin(SplitText);

const tags = ["Diseño", "Aplicaciones", "Branding"];

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const [t, setT] = useState(0);

  // Misma coreografía que Conax: la foto arranca con la cabeza completa y "respira" creciendo
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let played = false;
    let guard: number | undefined;
    const ctx = gsap.context(() => {
      const title = SplitText.create(".hero-title .ln > span", { type: "chars", mask: "chars" });
      const ghost = SplitText.create(".hero-ghost", { type: "chars" });
      const tagWords = SplitText.create(".tags li", { type: "words", mask: "words" });

      gsap.set(title.chars, { yPercent: 60, opacity: 0 });
      gsap.set(ghost.chars, { xPercent: 10, opacity: 0 });
      gsap.set(tagWords.words, { xPercent: 100 });
      gsap.set(".hero-bl, .hero-btn", { opacity: 0 });

      const run = () => {
        if (played) return;
        played = true;
        window.clearTimeout(guard);
        // Igual que la referencia: respira un 10 % (de 1 a 1.1) en ciclos de 16 s (8 s de ida y 8 s de vuelta)
        gsap.fromTo(
          ".hero-model-in",
          { scale: 1.4 / 1.1 },
          { scale: 1.4, duration: 8, ease: "sine.inOut", yoyo: true, repeat: -1 },
        );
        gsap
          .timeline()
          .to(title.chars, { yPercent: 0, opacity: 1, duration: 0.8, ease: "power4.out", stagger: 0.05 }, 0.1)
          .to(tagWords.words, { xPercent: 0, duration: 1, ease: "power4.out", stagger: 0.1 }, 0.3)
          .to(".hero-bl, .hero-btn", { opacity: 1, duration: 0.9, ease: "power2.out" }, 0.5)
          .to(ghost.chars, { xPercent: 0, opacity: 1, duration: 1, ease: "power4.out", stagger: 0.1 }, 0.6)
          .add(() => {
            gsap.to(ghost.chars, {
              opacity: 0.5,
              duration: 3,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              stagger: { each: 1, from: "random" },
            });
          }, 2.6);
      };

      if (document.documentElement.dataset.intro === "go") run();
      else {
        window.addEventListener("intro:go", run, { once: true });
        guard = window.setTimeout(run, 6000);
      }
    }, root);
    return () => {
      window.clearTimeout(guard);
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    const b = setInterval(() => setT((v) => (v + 1) % tags.length), 2000);
    return () => clearInterval(b);
  }, []);

  // Mientras el hero está a la vista, las líneas de la rejilla se atenúan para no marcarse sobre la foto
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) document.documentElement.dataset.hero = "in";
      else delete document.documentElement.dataset.hero;
    }, { threshold: 0.25 });
    io.observe(el);
    return () => {
      io.disconnect();
      delete document.documentElement.dataset.hero;
    };
  }, []);

  return (
    <section className="hero" ref={root}>
      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-model" aria-hidden="true">
        <div className="hero-model-in">
          <Image src="/brand/hero-model.png" alt="" width={1024} height={1536} priority sizes="(min-width: 1100px) 1100px, 150vw" />
        </div>
      </div>

      <div className="hero-ghost-wrap" aria-hidden="true">
        <div className="wrap">
          <div className="hero-ghost">“25</div>
        </div>
      </div>

      <div className="wrap hero-grid">
        <div className="hero-left">
          <h1 className="hero-title">
            <span className="ln">
              <span>
                Ultra<sup>®</sup>
              </span>
            </span>
            <span className="ln">
              <span>Disruptivo</span>
            </span>
            <span className="sr-only"> — Agencia de desarrollo web, aplicaciones y branding en Cali, Colombia</span>
          </h1>
          <div className="hero-bl">
            <p className="hero-contact">
              Escríbenos a
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
        </div>

        <aside className="hero-c4">
          <ul className="tags" aria-hidden="true">
            {tags.map((tag, k) => (
              <li key={tag} className={k === t ? "on" : ""}>
                [{tag}]
              </li>
            ))}
          </ul>
          <Btn href={wa("Hola TechnoUltra, quiero agendar un diagnóstico gratis.")} tone="white" external className="hero-btn">
            Contáctanos
          </Btn>
        </aside>
      </div>
    </section>
  );
}
