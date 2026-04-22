export function SectionTitle({
  children,
  kicker,
}: {
  children: React.ReactNode;
  kicker?: string;
}) {
  return (
    <div className="mb-14">
      {kicker ? (
        <p className="small-caps mb-4 text-sm text-ink-muted">{kicker}</p>
      ) : null}
      <h1 className="text-[2.4rem] leading-[1.08] sm:text-[2.8rem] md:text-[3rem]">
        {children}
      </h1>
      <div className="ornament mt-8" aria-hidden>
        ❦
      </div>
    </div>
  );
}
