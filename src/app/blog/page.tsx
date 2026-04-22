import { ArticleList, type ArticleEntry } from "@/components/ArticleList";
import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import type { Metadata } from "next";
import articlePreview from "../../../assets/We know it works. We do not know how.png";

export const metadata: Metadata = {
  title: "Blog - Raj Dangi",
  description: "Essays and notes from the study.",
};

const articles: ArticleEntry[] = [
  {
    date: "April 2026",
    title: "We Know It Works. We Don’t Know Why.",
    excerpt:
      "Science and engineering are entering an era where the power to do outpaces the knowledge of why, and that gap may be the defining civilizational condition of our time.",
    href: "https://medium.com/@rach.dev0731/we-know-it-works-we-dont-know-why-27ea3f4fbcae",
    previewSrc: articlePreview,
    previewAlt: "Overview art for We Know It Works. We Do Not Know Why.",
  },
];

export default function BlogPage() {
  return (
    <Layout>
      <SectionTitle kicker="Thoughts">Blog</SectionTitle>
      <ArticleList articles={articles} />
      <p className="mt-16 text-center">
        <a
          href="https://medium.com/@rach.dev0731"
          target="_blank"
          rel="noopener noreferrer"
          className="ink-link small-caps text-sm"
        >
          More at medium.com/@rach.dev0731
        </a>
      </p>
    </Layout>
  );
}
