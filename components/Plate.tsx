"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef } from "react";

export function Plate({
  src,
  alt,
  numeral,
  caption,
  className = "",
  aspect = "aspect-[4/5]",
  sizes,
  position = "center",
  imageClassName = "",
  dark = false,
}: {
  src: StaticImageData;
  alt: string;
  numeral?: string;
  caption?: React.ReactNode;
  className?: string;
  aspect?: string;
  sizes: string;
  position?: string;
  imageClassName?: string;
  dark?: boolean;
}) {
  const frame = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = frame.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom < 0 || r.top > vh) return;
      const offset = (r.top + r.height / 2 - vh / 2) / vh;
      el.style.setProperty("--py", `${(offset * -6).toFixed(2)}%`);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <figure className={`plate m-0 ${className}`}>
      <div
        ref={frame}
        className={`plate-mask relative overflow-hidden ${aspect} ${
          dark ? "bg-white/5" : "bg-paper-2 shadow-[0_0_0_1px_oklch(0.2_0.018_50/0.12),0_30px_60px_-34px_oklch(0.2_0.018_50/0.55)]"
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          placeholder="blur"
          className={`plate-img object-cover ${imageClassName}`}
          style={{ objectPosition: position }}
        />
      </div>
      {numeral || caption ? (
        <figcaption className={`mt-4 flex items-baseline gap-3 ${dark ? "text-white/70" : "text-ink-3"}`}>
          {numeral ? <span className={`caps shrink-0 text-[0.78rem] ${dark ? "text-white" : "text-rubric"}`}>Plate {numeral}</span> : null}
          {caption ? <span className="font-display text-[1.02rem] italic leading-snug">{caption}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
