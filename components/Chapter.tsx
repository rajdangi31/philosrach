export function ChapterLabel({ numeral, title, dark = false }: { numeral: string; title: string; dark?: boolean }) {
  return (
    <div className="flex items-end gap-5 lg:block">
      <p
        aria-hidden
        className={`font-display text-[3.4rem] font-normal leading-[0.85] lg:text-[5.25rem] ${
          dark ? "text-[oklch(0.72_0.13_35)]" : "text-rubric"
        }`}
      >
        {numeral}
      </p>
      <div className="pb-1 lg:pb-0">
        <span aria-hidden className={`hidden h-px w-8 lg:mt-6 lg:block ${dark ? "bg-white/30" : "bg-ink/30"}`} />
        <p className={`caps text-[0.95rem] leading-none lg:mt-5 ${dark ? "text-white/85" : "text-ink"}`}>{title}</p>
      </div>
    </div>
  );
}

export function ChapterRule({ dark = false }: { dark?: boolean }) {
  return (
    <div aria-hidden className={`relative h-px ${dark ? "bg-white/15" : "bg-ink/[0.13]"}`}>
      <span className="absolute left-0 top-0 h-px w-12 bg-rubric" />
    </div>
  );
}

export function Lede({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <h2
      className={`fade-up max-w-[24ch] text-[clamp(2rem,3.7vw,3rem)] leading-[1.12] tracking-[-0.005em] ${
        dark ? "!text-white" : ""
      }`}
    >
      {children}
    </h2>
  );
}

export function Chapter({
  id,
  numeral,
  title,
  lede,
  children,
  dark = false,
  backdrop,
}: {
  id: string;
  numeral: string;
  title: string;
  lede?: React.ReactNode;
  children: React.ReactNode;
  dark?: boolean;
  backdrop?: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-label={title}
      className={`relative scroll-mt-16 px-6 sm:px-10 ${dark ? "isolate overflow-hidden bg-[oklch(0.16_0.012_50)] text-white/75" : ""}`}
    >
      {backdrop}
      <div className="relative mx-auto max-w-page">
        {dark ? null : <ChapterRule />}
        <div className="grid grid-cols-1 gap-12 py-24 lg:grid-cols-[13rem_1fr] lg:gap-20 lg:py-36">
          <div className="fade-up lg:sticky lg:top-28 lg:self-start">
            <ChapterLabel numeral={numeral} title={title} dark={dark} />
          </div>
          <div className="min-w-0">
            {lede ? <Lede dark={dark}>{lede}</Lede> : null}
            <div className={lede ? "mt-14" : ""}>{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
