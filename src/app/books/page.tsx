import { BookshelfList, type BookEntry } from "@/components/BookshelfList";
import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import type { Metadata } from "next";
import caesarCover from "../../../assets/Caesar Life of a Colossus.jpg";
import gebCover from "../../../assets/Gödel, Escher, Bach an Eternal Golden Braid.jpg";
import gitaCover from "../../../assets/The Bhagavad Gītā.jpg";
import lacanCover from "../../../assets/The Lacanian Subject Between Language and Jouissance.jpg";
import nicomacheanCover from "../../../assets/Nicomachean Ethics.jpg";
import republicCover from "../../../assets/The Republic.jpg";
import siddharthaCover from "../../../assets/Hermann Hesse Siddharta.jpg";

export const metadata: Metadata = {
  title: "Books - Raj Dangi",
  description: "A scholar’s commonplace, reading, present and past.",
};

const current: BookEntry[] = [
  {
    title: "Gödel, Escher, Bach: an Eternal Golden Braid",
    author: "Douglas Hofstadter",
    note:
      "An interdisciplinary meditation on formal systems, music, art, and mind. I'm reading it as a map of how recursion and self-reference produce intelligence from rule-bound structures.",
    previewSrc: gebCover,
    previewAlt: "Cover of Gödel, Escher, Bach: an Eternal Golden Braid.",
  },
  {
    title: "Caesar: Life of a Colossus",
    author: "Adrian Goldsworthy",
    note:
      "A historical biography that situates Caesar inside the machinery of late-republic Rome, showing how personality, military command, and institutional weakness converged into imperial transition.",
    previewSrc: caesarCover,
    previewAlt: "Cover of Caesar: Life of a Colossus.",
  },
  {
    title: "The Lacanian Subject: Between Language and Jouissance",
    author: "Bruce Fink",
    note:
      "A psychoanalytic lens on desire, enjoyment, and psychic structure through Lacanian thought. I keep this one nearby for slow, careful passes rather than straight-through reading.",
    previewSrc: lacanCover,
    previewAlt: "Cover of The Lacanian Subject: Between Language and Jouissance.",
  },
];

const past: BookEntry[] = [
  {
    title: "Siddhartha",
    author: "Hermann Hesse",
    note:
      "A compact philosophical novel on renunciation, experience, and inward freedom; less a doctrine than an invitation to test wisdom against lived life.",
    previewSrc: siddharthaCover,
    previewAlt: "Cover of Siddhartha by Hermann Hesse.",
  },
  {
    title: "Nicomachean Ethics",
    author: "Aristotle",
    note:
      "A foundational account of virtue as practiced habit, where character is formed through repeated action and practical judgment rather than abstract rule-following.",
    previewSrc: nicomacheanCover,
    previewAlt: "Cover of Nicomachean Ethics.",
  },
  {
    title: "The Republic",
    author: "Plato",
    note:
      "A wide-ranging dialogue on justice, education, political order, and the structure of the soul, read here as both civic theory and a study of intellectual discipline.",
    previewSrc: republicCover,
    previewAlt: "Cover of The Republic.",
  },
  {
    title: "The Bhagavad Gītā",
    author: "Vyāsa (trad.)",
    note:
      "A sustained reflection on duty, action, and interior steadiness under pressure; especially useful for its ethic of disciplined work without attachment to outcomes.",
    previewSrc: gitaCover,
    previewAlt: "Cover of the Bhagavad Gita.",
  },
];

export default function BooksPage() {
  return (
    <Layout>
      <SectionTitle kicker="Gaining Wisdom">Books</SectionTitle>
      <BookshelfList current={current} past={past} />
    </Layout>
  );
}
