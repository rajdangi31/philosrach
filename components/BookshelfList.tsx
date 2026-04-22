import Image from "next/image";
import type { StaticImageData } from "next/image";

export type BookEntry = {
  title: string;
  author: string;
  note?: string;
  href?: string;
  previewSrc?: string | StaticImageData;
  previewAlt?: string;
};

function ExternalLinkMark() {
  return (
    <span aria-hidden="true" className="ml-2 align-middle text-xs text-sepia">
      ↗
    </span>
  );
}

function BookTitle({ book, className }: { book: BookEntry; className?: string }) {
  if (book.href) {
    return (
      <a
        href={book.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-ink transition-colors duration-200 ease-out hover:text-sepia ${className ?? ""}`}
      >
        {book.title}
        <ExternalLinkMark />
      </a>
    );
  }
  return <span className={className}>{book.title}</span>;
}

export function BookshelfList({
  current,
  past,
}: {
  current: BookEntry[];
  past: BookEntry[];
}) {
  return (
    <div className="space-y-16">
      <section>
        <h2 className="small-caps mb-8 border-b border-rule pb-3 text-sm text-ink-muted">
          currently reading
        </h2>
        <ul className="space-y-10">
          {current.map((book) => (
            <li key={`${book.author}-${book.title}`}>
              <div className="flex gap-4">
                {book.previewSrc ? (
                  <div className="relative h-28 w-20 shrink-0 overflow-hidden border border-rule bg-parchment-deep">
                    <Image
                      src={book.previewSrc}
                      alt={book.previewAlt ?? `${book.title} cover`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="small-caps flex h-28 w-20 shrink-0 items-center justify-center border border-rule bg-parchment-deep px-2 text-center text-[0.62rem] leading-tight text-ink-muted">
                    Cover
                  </div>
                )}
                <div>
                  <p className="font-display text-[1.4rem] font-medium text-ink">
                    <BookTitle book={book} />
                  </p>
                  <p className="mt-1 font-display text-[1rem] italic text-ink-muted">
                    {book.author}
                  </p>
                  {book.note ? (
                    <p className="mt-3 text-[1rem] leading-[1.72]">{book.note}</p>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="small-caps mb-8 border-b border-rule pb-3 text-sm text-ink-muted">
          Shelved &amp; finished
        </h2>
        <ul className="space-y-6">
          {past.map((book) => (
            <li
              key={`${book.author}-${book.title}`}
              className="flex flex-col gap-1 border-b border-dotted border-rule pb-6 last:border-0 sm:flex-row sm:gap-6"
            >
              <div className="flex items-start gap-4 sm:min-w-[10rem] sm:shrink-0">
                {book.previewSrc ? (
                  <div className="relative h-28 w-20 shrink-0 overflow-hidden border border-rule bg-parchment-deep">
                    <Image
                      src={book.previewSrc}
                      alt={book.previewAlt ?? `${book.title} cover`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="small-caps flex h-28 w-20 shrink-0 items-center justify-center border border-rule bg-parchment-deep px-2 text-center text-[0.62rem] leading-tight text-ink-muted">
                    Cover
                  </div>
                )}
                <p className="font-display text-[1rem] italic text-ink-soft">{book.author}</p>
              </div>
              <div className="pt-1">
                <p>
                  <cite className="not-italic">
                    <BookTitle book={book} />
                  </cite>
                  {book.note ? (
                    <span className="text-ink-muted"> - {book.note}</span>
                  ) : null}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
