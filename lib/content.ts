import type { StaticImageData } from "next/image";
import athenaPreview from "@/assets/Athena.png";
import caesarCover from "@/assets/Caesar Life of a Colossus.jpg";
import gebCover from "@/assets/Gödel, Escher, Bach an Eternal Golden Braid.jpg";
import gpt2Preview from "@/assets/GPT-2.png";
import irisLampPreview from "@/assets/Iris-Lamp.png";
import lacanCover from "@/assets/The Lacanian Subject Between Language and Jouissance.jpg";
import nyxisPreview from "@/assets/nyxis-architecture.png";
import takeAPeekPreview from "@/assets/takeApeek.png";
import rocketRidePreview from "@/assets/Rocket-ride-club.png";
import siddharthaCover from "@/assets/Hermann Hesse Siddharta.jpg";
import ethicsCover from "@/assets/Nicomachean Ethics.jpg";
import republicCover from "@/assets/The Republic.jpg";
import gitaCover from "@/assets/The Bhagavad Gītā.jpg";
import mindWindowImage from "@/assets/What if mind is a window not a source.png";
import knowItWorksImage from "@/assets/We know it works. We do not know how.png";

export const site = {
  name: "Raj Dangi",
  url: "https://philosrach.com",
  description:
    "Raj Dangi studies computer science at the University of Toledo. Experience, selected work, essays, and a reading list.",
  email: "rach.dev0731@gmail.com",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/rajdangi31" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rajdangi01/" },
  { label: "X", href: "https://x.com/philosrach" },
  { label: "Medium", href: "https://medium.com/@rach.dev0731" },
  { label: "Instagram", href: "https://www.instagram.com/not._raj_/" },
] as const;

export const chapters = [
  { id: "preface", numeral: "I", title: "Preface" },
  { id: "experience", numeral: "II", title: "Experience" },
  { id: "principles", numeral: "III", title: "Principles" },
  { id: "works", numeral: "IV", title: "Selected Works" },
  { id: "writing", numeral: "V", title: "Writing" },
  { id: "reading", numeral: "VI", title: "Reading" },
  { id: "correspondence", numeral: "VII", title: "Correspondence" },
] as const;

export const inBrief = [
  { label: "Studying", value: "B.S. Computer Science, University of Toledo, 2027" },
  { label: "Working", value: "Sports analytics & data science, UToledo Athletics" },
  { label: "Research", value: "High-availability systems, ISDFS 2026" },
  { label: "Based in", value: "Toledo, Ohio" },
];

export type Experience = {
  period: string;
  role: string;
  org: string;
  text: string;
  tags: string[];
  current?: boolean;
};

export const experience: Experience[] = [
  {
    period: "2026",
    role: "Sports Analytics & Data Science Intern",
    org: "University of Toledo Athletics",
    current: true,
    text: "I build internal reporting tools for the Athletics marketing team and keep the data behind them accurate and up to date.",
    tags: ["Analytics", "Data engineering", "Reporting"],
  },
  {
    period: "2025 – 2026",
    role: "First Author, Systems Research",
    org: "University of Toledo · ISDFS 2026",
    text: "With two classmates I designed Iris, a two-node web stack that switches to a backup server when the main one fails, in about three seconds. The paper was accepted for oral presentation at ISDFS 2026.",
    tags: ["Linux", "HAProxy", "Networking"],
  },
  {
    period: "2025 – April 2026",
    role: "Software Developer",
    org: "Batting Cleanup · civic tech",
    text: "I built the software for a volunteer cleanup program, including a QR-code reporting system that replaced manual tracking.",
    tags: ["TypeScript", "Product", "Analytics"],
  },
  {
    period: "2025",
    role: "AWS DeepRacer Competitor",
    org: "University of Toledo",
    text: "Placed in the top five of more than sixty by writing reward functions for reinforcement-learning models.",
    tags: ["Reinforcement learning"],
  },
];

export const principles = [
  { title: "Principles", text: "Knowing what I stand for, and acting on it." },
  { title: "Moral values", text: "Treating people well, whether or not anyone is watching." },
  { title: "Integrity", text: "Doing what I said I would do." },
  { title: "Honesty", text: "Saying what is true, including when I do not know." },
];

export type Work = {
  title: string;
  year: string;
  medium: string;
  text: string;
  href: string;
  image?: StaticImageData;
};

export const works: Work[] = [
  {
    title: "Iris",
    year: "2025",
    medium: "Systems · HAProxy, Tailscale, MariaDB",
    text: "A two-node web stack that keeps a site online by switching to a backup server when the main one fails.",
    href: "https://github.com/rajdangi31/iris-lamp",
    image: irisLampPreview,
  },
  {
    title: "GPT-2 from Scratch",
    year: "2025",
    medium: "Machine learning · PyTorch",
    text: "A GPT-2 style language model written from scratch in PyTorch, including the tokenizer and training loop.",
    href: "https://github.com/rajdangi31/GPT-2",
    image: gpt2Preview,
  },
  {
    title: "NYXIS",
    year: "2026",
    medium: "Product · React Native, Supabase",
    text: "A productivity app that turns personal goals into AI-generated quests and tracks progress over time.",
    href: "https://github.com/rajdangi31/NYXIS",
    image: nyxisPreview,
  },
  {
    title: "Rocket Ride Club",
    year: "2026",
    medium: "Product · TypeScript, Mapbox",
    text: "A ride-sharing app for students. You request a ride and follow the route until pickup. Still in progress.",
    href: "https://github.com/rajdangi31/rocket-ride-club",
    image: rocketRidePreview,
  },
  {
    title: "TakeApeek",
    year: "2025",
    medium: "Product · React, Supabase",
    text: "A social app for sharing posts and talking in threads, with real-time updates.",
    href: "https://github.com/rajdangi31/takeApeek",
    image: takeAPeekPreview,
  },
  {
    title: "Athena",
    year: "2026",
    medium: "Machine learning · Flask, OpenRouter",
    text: "An AI companion for journaling and reflection.",
    href: "https://github.com/rajdangi31/Athena",
    image: athenaPreview,
  },
  {
    title: "EvolutionLab",
    year: "2026",
    medium: "Machine learning · Python",
    text: "A comparison of evolutionary agents and Q-learning agents in a simple food-finding simulation.",
    href: "https://github.com/rajdangi31/EvolutionLab",
  },
];

export const essays = [
  {
    date: "April 2026",
    title: "What If Mind Is a Window, Not a Source?",
    text: "Whether consciousness creates reality or reveals it, and what changes if the mind is more receiver than origin.",
    href: "https://medium.com/@rach.dev0731/what-if-mind-is-a-window-not-a-source-a4e72b95df88",
    image: mindWindowImage,
  },
  {
    date: "April 2026",
    title: "We Know It Works. We Don’t Know Why.",
    text: "Our power to do now outpaces our knowledge of why, and that gap may define our time.",
    href: "https://medium.com/@rach.dev0731/we-know-it-works-we-dont-know-why-27ea3f4fbcae",
    image: knowItWorksImage,
  },
];

export const reading = [{ title: "Gödel, Escher, Bach", author: "Douglas Hofstadter", cover: gebCover }];

export const finished = [
  { title: "Caesar: Life of a Colossus", author: "Adrian Goldsworthy", cover: caesarCover },
  { title: "The Lacanian Subject", author: "Bruce Fink", cover: lacanCover },
  { title: "Siddhartha", author: "Hermann Hesse", cover: siddharthaCover },
  { title: "Nicomachean Ethics", author: "Aristotle", cover: ethicsCover },
  { title: "The Republic", author: "Plato", cover: republicCover },
  { title: "The Bhagavad Gītā", author: "Vyāsa", cover: gitaCover },
];

export const skills = [
  { label: "Languages", items: "Python, TypeScript, JavaScript, C, C++, Java, SQL" },
  { label: "Systems", items: "Linux, Docker, networking, high-availability and failover design, Git" },
  { label: "Data", items: "PostgreSQL, Supabase, data pipelines, validation, reporting and dashboards" },
  { label: "AI / ML", items: "PyTorch, transformers, retrieval-augmented generation, LLM evaluation, reinforcement learning" },
];
