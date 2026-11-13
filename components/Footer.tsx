export function Footer({ dark = false }: { dark?: boolean }) {
  return (
    <footer className={`no-print px-6 pb-10 sm:px-10 ${dark ? "bg-[oklch(0.16_0.012_50)]" : ""}`}>
      <div className={`mx-auto max-w-page border-t pt-20 text-center ${dark ? "border-white/15" : "border-ink/[0.13]"}`}>
        <span aria-hidden className="flex items-center justify-center gap-4">
          <span className={`h-px w-14 ${dark ? "bg-white/25" : "bg-ink/25"}`} />
          <span className="h-[5px] w-[5px] rotate-45 bg-rubric" />
          <span className={`h-px w-14 ${dark ? "bg-white/25" : "bg-ink/25"}`} />
        </span>
        <p className={`mt-6 font-display text-[1.25rem] italic ${dark ? "text-white/80" : "text-ink-2"}`}>
          Thank you for reading.
        </p>
        <div className="mt-16 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className={`caps text-[0.8rem] ${dark ? "text-white/50" : "text-ink-3"}`}>Raj Dangi · MMXXVI</p>
          <a href="#top" className={`caps link text-[0.8rem] ${dark ? "!text-white/60 hover:!text-white" : "text-ink-3"}`}>
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
