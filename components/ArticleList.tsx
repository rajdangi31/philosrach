import Image from "next/image";
import type { StaticImageData } from "next/image";

export type ArticleEntry = {
  date: string;
  title: string;
  excerpt: string;
  href?: string;
  previewSrc?: string | StaticImageData;
  previewAlt?: string;
};

function ExternalLinkMark() {
  return (
    <span aria-hidden="true" className="ml-2 align-middle text-sm text-sepia">
      ↗
    </span>
  );
}

export function ArticleList({ articles }: { articles: ArticleEntry[] }) {
  return (
    <ol className="list-none">
      {articles.map((article, index) => (
        <li key={`${article.date}-${article.title}`}>
          <article
            className={`grid grid-cols-1 gap-4 border-rule py-10 sm:grid-cols-[minmax(6rem,auto)_1fr] sm:gap-12 ${
              index < articles.length - 1 ? "border-b" : ""
            }`}
          >
            <time
              dateTime={article.date}
              className="small-caps text-xs text-ink-muted sm:pt-2"
            >
              {article.date}
            </time>
            <div>
              {article.previewSrc ? (
                <div className="relative mb-5 aspect-[16/9] overflow-hidden border border-rule bg-parchment-deep">
                  <Image
                    src={article.previewSrc}
                    alt={article.previewAlt ?? `${article.title} preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 48rem"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="small-caps mb-5 border border-rule bg-parchment-deep px-4 py-6 text-xs text-ink-muted">
                  Article overview image
                </div>
              )}
              <h2 className="font-display text-[1.55rem] font-medium leading-[1.2] text-ink">
                {article.href ? (
                  <a
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink transition-colors duration-200 ease-out hover:text-sepia"
                  >
                    {article.title}
                    <ExternalLinkMark />
                  </a>
                ) : (
                  article.title
                )}
              </h2>
              <p className="mt-3 text-[1.05rem] leading-[1.72]">
                {article.excerpt}
              </p>
            </div>
          </article>
        </li>
      ))}
    </ol>
  );
}
