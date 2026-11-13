"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { chapters } from "@/lib/content";

export function Header({ home = true }: { home?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [onDark, setOnDark] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 24);
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      const dark = document.getElementById("correspondence");
      setOnDark(!!dark && dark.getBoundingClientRect().top <= 64);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const href = (id: string) => (home ? `#${id}` : `/#${id}`);

  return (
    <>
      <header
        className={`no-print fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
          onDark ? "on-dark bg-[oklch(0.16_0.012_50/0.85)] backdrop-blur-md" : scrolled ? "bg-paper/85 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-page items-center justify-between px-6 sm:px-10">
          <Link href="/" className="caps text-[0.95rem] text-ink transition-colors hover:text-rubric">
            Raj Dangi
          </Link>
          <nav className="flex items-center gap-7">
            <Link href="/resume" className="caps link hidden text-[0.95rem] sm:inline">
              Résumé
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-haspopup="dialog"
              className="caps group flex items-center gap-2.5 text-[0.95rem] text-ink transition-colors hover:text-rubric"
            >
              Contents
              <span aria-hidden className="flex w-4 flex-col gap-[3px]">
                <span className="h-px w-full bg-current" />
                <span className="h-px w-2/3 bg-current transition-all duration-300 group-hover:w-full" />
              </span>
            </button>
          </nav>
        </div>
        <div
          aria-hidden
          className={`h-px origin-left bg-rubric/70 transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`}
          style={{ transform: `scaleX(${progress})` }}
        />
      </header>

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Contents"
        aria-hidden={!open}
        className={`no-print fixed inset-0 z-50 flex flex-col bg-paper transition-[opacity,visibility] duration-500 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-page items-center justify-between px-6 sm:px-10">
          <span className="caps text-[0.95rem] text-ink-3">Raj Dangi</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="caps text-[0.95rem] text-ink transition-colors hover:text-rubric"
          >
            Close
          </button>
        </div>
        <div className="flex flex-1 items-center justify-center overflow-y-auto px-6 pb-16">
          <div className="w-full max-w-xl">
            <p className="caps mb-10 text-center text-sm text-rubric">Contents</p>
            <ol>
              {chapters.map((c, i) => (
                <li
                  key={c.id}
                  className={`transition-all duration-700 ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
                  style={{ transitionDelay: open ? `${120 + i * 55}ms` : "0ms" }}
                >
                  <a
                    href={href(c.id)}
                    tabIndex={open ? 0 : -1}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline py-2.5 font-display text-[1.75rem] leading-tight text-ink sm:text-[2.2rem]"
                  >
                    <span className="transition-colors duration-200 group-hover:text-rubric group-hover:italic">
                      {c.title}
                    </span>
                    <span className="leader" />
                    <span className="lining text-[1.1rem] text-rubric sm:text-[1.3rem]">{c.numeral}</span>
                  </a>
                </li>
              ))}
              <li
                className={`transition-all duration-700 ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
                style={{ transitionDelay: open ? `${120 + chapters.length * 55}ms` : "0ms" }}
              >
                <Link
                  href="/resume"
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className="group mt-4 flex items-baseline border-t border-rule pt-5 font-display text-[1.4rem] italic text-ink-2"
                >
                  <span className="transition-colors group-hover:text-rubric">Résumé</span>
                  <span className="leader" />
                  <span className="caps text-[0.9rem] not-italic text-ink-3">Appendix</span>
                </Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
