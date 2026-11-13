import Image from "next/image";
import { works } from "@/lib/content";
import { ChapterLabel, ChapterRule, Lede } from "./Chapter";

export function Works() {
  return (
    <section id="works" aria-label="Selected Works" className="scroll-mt-16 px-6 sm:px-10">
      <div className="mx-auto max-w-page">
        <ChapterRule />
        <div className="grid grid-cols-1 gap-12 py-24 lg:grid-cols-[13rem_1fr] lg:gap-20 lg:py-36">
          <div className="fade-up lg:sticky lg:top-28 lg:self-start">
            <ChapterLabel numeral="IV" title="Selected Works" />
          </div>

          <div className="min-w-0">
            <Lede>Things I have built, mostly to understand how they work.</Lede>
            <ol className="mt-14 border-b border-ink/[0.13]">
              {works.map((w, i) => (
                <li key={w.title} className="fade-up border-t border-ink/[0.13]">
                  <a
                    href={w.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid grid-cols-[2.25rem_1fr] gap-x-4 gap-y-6 py-9 sm:grid-cols-[3rem_1fr_13rem] lg:grid-cols-[3rem_1fr_15rem] sm:gap-x-8"
                  >
                    <span className="lining pt-3 text-[0.95rem] text-ink-3 transition-colors group-hover:text-rubric">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span className="min-w-0">
                      <span className="flex items-baseline gap-3">
                        <span className="font-display text-[clamp(1.7rem,3.2vw,2.5rem)] leading-[1.08] text-ink transition-colors duration-300 group-hover:text-rubric">
                          {w.title}
                        </span>
                        <span
                          aria-hidden
                          className="text-[1rem] text-ink-3 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-rubric"
                        >
                          ↗
                        </span>
                      </span>
                      <span aria-hidden className="mt-4 block h-px w-full max-w-[34rem] origin-left scale-x-[0.1] bg-rubric transition-transform duration-700 ease-out group-hover:scale-x-100" />
                      <span className="mt-4 block max-w-[34rem] text-[1.04rem] leading-[1.62] text-ink-2">{w.text}</span>
                      <span className="caps lining mt-4 block text-[0.8rem] text-ink-3">
                        {w.medium} · {w.year}
                      </span>
                    </span>

                    <figure className="col-start-2 m-0 w-full max-w-[18rem] sm:col-start-3 sm:max-w-none">
                      <span className="relative block aspect-[4/3] overflow-hidden bg-[oklch(0.16_0.012_50)] shadow-[0_22px_40px_-24px_oklch(0.2_0.018_50/0.7)] transition-transform duration-500 ease-out group-hover:-translate-y-1">
                        {w.image ? (
                          <Image
                            src={w.image}
                            alt={`Preview of ${w.title}.`}
                            fill
                            sizes="(max-width: 640px) 18rem, 15rem"
                            className="object-contain p-3 opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                          />
                        ) : (
                          <span className="absolute inset-0 flex items-center justify-center font-display text-[3.5rem] italic text-[oklch(0.72_0.13_35)]">
                            {w.title.charAt(0)}
                          </span>
                        )}
                      </span>
                    </figure>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
