export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="ornament mt-24" aria-hidden>
        ❦
      </div>
      <p className="small-caps text-center text-xs text-ink-muted">{year}</p>
    </footer>
  );
}
