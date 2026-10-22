"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

type Props = {
  text: string;
  tone?: "light" | "dark";
  className?: string;
  trigger?: string; // selector del contenedor que dispara el scrub
};

// Texto que se "enciende" letra por letra con el scroll (de 30 % a 100 % de opacidad).
export default function TextScroll({ text, tone = "light", className = "", trigger }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const from = tone === "dark" ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)";
    const to = tone === "dark" ? "#ffffff" : "#000000";
    let ctx: gsap.Context | undefined;
    let cancelled = false;
    const t = window.setTimeout(() => {
      if (cancelled) return;
      ctx = gsap.context(() => {
        const split = SplitText.create(el, { type: "chars,words" });
        gsap.fromTo(
          split.chars,
          { color: from },
          {
            color: to,
            duration: 0.1,
            ease: "expo.out",
            stagger: 0.03,
            scrollTrigger: {
              trigger: trigger ? (el.closest(trigger) ?? el) : el,
              start: "top 90%",
              end: "bottom 50%",
              scrub: 1,
            },
          },
        );
      }, el);
    }, 700);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
      ctx?.revert();
    };
  }, [tone, trigger]);

  return (
    <p ref={ref} className={className}>
      {text}
    </p>
  );
}
