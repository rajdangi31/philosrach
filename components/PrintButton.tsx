"use client";

export function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className="caps link text-[0.9rem] text-ink-3">
      Print
    </button>
  );
}
