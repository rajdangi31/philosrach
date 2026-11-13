"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site, socials } from "@/lib/content";

const handles: Record<string, string> = {
  GitHub: "rajdangi31",
  LinkedIn: "rajdangi01",
  X: "@philosrach",
  Medium: "@rach.dev0731",
  Instagram: "not._raj_",
};

function useToledoTime() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "America/New_York",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);
  return time;
}

export function Correspondence() {
  const [copied, setCopied] = useState(false);
  const time = useToledoTime();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  const rows = [
    ...socials.map((s) => ({ label: s.label, note: handles[s.label] ?? "", href: s.href, external: true })),
    { label: "Résumé", note: "One page", href: "/resume", external: false },
  ];

  return (
    <>
      <div className="fade-up flex flex-wrap items-end gap-x-6 gap-y-3" style={{ "--d": 1 } as React.CSSProperties}>
        <a
          href={`mailto:${site.email}`}
          className="lining group inline-block break-all font-display text-[clamp(1.9rem,5vw,4rem)] leading-[1.05] text-white transition-colors duration-300 hover:text-[oklch(0.82_0.09_45)]"
        >
          {site.email}
          <span className="mt-3 block h-px w-full origin-left scale-x-[0.14] bg-rubric transition-transform duration-700 ease-out group-hover:scale-x-100" />
        </a>
        <button
          type="button"
          onClick={copy}
          className="caps mb-5 rounded-full border border-white/20 px-3.5 py-1 text-[0.78rem] text-white/70 transition-colors hover:border-white/50 hover:text-white"
          aria-live="polite"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <p className="fade-up mt-8 font-display text-[1.1rem] italic text-white/55" style={{ "--d": 2 } as React.CSSProperties}>
        Toledo, Ohio
        {time ? (
          <>
            <span className="mx-2.5 text-[oklch(0.72_0.13_35)]">·</span>
            <span className="lining not-italic">{time}</span> local time
          </>
        ) : null}
      </p>

      <div className="fade-up mt-16" style={{ "--d": 3 } as React.CSSProperties}>
        <p className="caps text-[0.8rem] text-[oklch(0.72_0.13_35)]">Elsewhere</p>
        <ul className="mt-4 grid grid-cols-1 border-t border-white/15 sm:grid-cols-2 sm:gap-x-12">
          {rows.map((r) => {
            const inner = (
              <>
                <span className="font-display text-[1.45rem] leading-none text-white/90 transition-colors duration-300 group-hover:text-white">
                  {r.label}
                </span>
                <span className="ml-auto mr-4 truncate font-display text-[1rem] italic text-white/45 transition-colors duration-300 group-hover:text-white/70">
                  {r.note}
                </span>
                <span
                  aria-hidden
                  className="text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[oklch(0.78_0.12_38)]"
                >
                  {r.external ? "↗" : "→"}
                </span>
              </>
            );
            const cls = "group flex items-baseline border-b border-white/15 py-5";
            return (
              <li key={r.label}>
                {r.external ? (
                  <a href={r.href} target="_blank" rel="noopener noreferrer" className={cls}>
                    {inner}
                  </a>
                ) : (
                  <Link href={r.href} className={cls}>
                    {inner}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
