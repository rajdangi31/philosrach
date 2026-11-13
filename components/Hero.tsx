"use client";

import { useEffect, useRef } from "react";
import { site } from "@/lib/content";

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--p", "1");
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const p = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.55)));
      el.style.setProperty("--p", p.toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Each hand is a window onto the 612×408 fresco, cut in the empty gap between the fingertips, so
  // neither fingertip is clipped as the hands slide. Offsets are the crop rectangles in that image.
  const hand = (side: "left" | "right") => {
    const left = side === "left";
    return (
      <div
        aria-hidden
        className="absolute top-[28.43%] h-[39.71%] overflow-hidden will-change-transform"
        style={{
          left: left ? "6.86%" : "47.71%",
          width: left ? "40.85%" : "46.9%",
          transform: `translate3d(calc(${left ? -1 : 1} * (1 - var(--p)) * min(13vw, 150px)), 0, 0)`,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/creation_of_adam.png"
          alt=""
          draggable={false}
          className="absolute max-w-none select-none"
          style={{
            width: left ? "244.8%" : "213.24%",
            height: "251.85%",
            left: left ? "-16.8%" : "-101.74%",
            top: "-71.6%",
          }}
        />
      </div>
    );
  };

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-24 text-center"
      style={{ "--p": 0 } as React.CSSProperties}
    >
      <p className="caps hero-in text-[0.9rem] text-ink-3" style={{ "--d": 0 } as React.CSSProperties}>
        Computer Science <span className="mx-2 text-rubric">·</span> University of Toledo
      </p>

      <div
        role="img"
        aria-label="The hands of God and Adam from Michelangelo's Creation of Adam, drawing closer as the page scrolls."
        className="hero-in relative mt-10 aspect-[612/408] w-[min(560px,82vw)]"
        style={{ "--d": 1 } as React.CSSProperties}
      >
        {hand("left")}
        {hand("right")}
        <span
          aria-hidden
          className="absolute left-[47.7%] top-[46.5%] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-rubric"
          style={{
            opacity: "clamp(0, calc((var(--p) - 0.85) * 7), 1)",
            boxShadow: "0 0 0 calc(var(--p) * 6px) oklch(0.52 0.16 31 / 0.12)",
          }}
        />
      </div>

      <h1
        className="hero-in mt-6 font-display text-[clamp(3.4rem,11.5vw,9.2rem)] font-medium uppercase leading-[0.9] tracking-[0.1em] text-ink"
        style={{ "--d": 2 } as React.CSSProperties}
      >
        Raj Dangi
      </h1>

      <p
        className="hero-in mt-7 max-w-[30ch] font-display text-[clamp(1.25rem,2.4vw,1.65rem)] italic leading-snug text-ink-2"
        style={{ "--d": 3 } as React.CSSProperties}
      >
        {site.tagline}
      </p>

      <a
        href="#preface"
        className="hero-in caps group absolute bottom-10 flex flex-col items-center gap-3 text-[0.85rem] text-ink-3 transition-colors hover:text-rubric"
        style={{ "--d": 5 } as React.CSSProperties}
      >
        Begin
        <span aria-hidden className="block h-10 w-px origin-top bg-current transition-transform duration-500 group-hover:scale-y-125" />
      </a>
    </section>
  );
}
