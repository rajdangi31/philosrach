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
  tagline:
    "I like to make stuff, play with stuff, and break stuff until I understand it.",
  description:
    "Raj Dangi studies computer science at the University of Toledo and works across systems, data, and machine learning. Experience, selected work, essays, and a reading list.",
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
    text: "I build internal reporting tools for the Athletics marketing team and the data processes behind them. The work is half engineering and half listening: turning the questions staff ask every week into something they can open and trust, and checking the numbers before anyone relies on them.",
    tags: ["Analytics", "Data engineering", "Reporting"],
  },
  {
    period: "2025 – 2026",
    role: "First Author, Systems Research",
    org: "University of Toledo · ISDFS 2026",
    text: "With two classmates I designed Iris, a two-node web stack built entirely from free software that moves traffic to a backup on its own when the primary fails. We broke it on purpose many times and measured failover at about three seconds. The paper was accepted for oral presentation at ISDFS 2026.",
    tags: ["Linux", "HAProxy", "Networking"],
  },
  {
    period: "2025 – Present",
    role: "Software Developer",
    org: "Batting Cleanup · civic tech",
    current: true,
    text: "I build the software a volunteer cleanup program runs on, including a QR-based reporting system that brought each submission under five seconds and replaced manual tracking.",
    tags: ["TypeScript", "Product", "Analytics"],
  },
  {
    period: "2025",
    role: "AWS DeepRacer Competitor",
    org: "University of Toledo",
    text: "Placed in the top five of more than sixty by designing and iterating reward functions for reinforcement-learning agents.",
    tags: ["Reinforcement learning"],
  },
];

export const principles = [
  {
    title: "Break it to understand it.",
    text: "I learn a system by pushing it until it fails, then building it back. Most of what I know about reliability came from watching things go down on purpose.",
  },
  {
    title: "Check the number before you trust it.",
    text: "A confident wrong answer does more damage than an honest open question. I would rather say what is not settled yet than polish something that is.",
  },
  {
    title: "Keep refining until it is clear.",
    text: "First versions are for finding out what the problem actually is. I keep working until the idea is simple enough to explain to someone outside the field.",
  },
  {
    title: "Read outside the lines.",
    text: "Philosophy, history, and psychology keep me honest about what engineering is for. I write about what stays with me after a page is done.",
  },
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
    text: "A two-node high-availability web stack with automatic failover, built from free tools and measured under failure.",
    href: "https://github.com/rajdangi31/iris-lamp",
    image: irisLampPreview,
  },
  {
    title: "GPT-2 from Scratch",
    year: "2025",
    medium: "Machine learning · PyTorch",
    text: "A ground-up transformer: tokenizer, causal self-attention, and training loop, written to understand every step.",
    href: "https://github.com/rajdangi31/GPT-2",
    image: gpt2Preview,
  },
  {
    title: "NYXIS",
    year: "2026",
    medium: "Product · React Native, Supabase",
    text: "A personal evolution OS with AI-generated quests, stat progression, and long-term user state.",
    href: "https://github.com/rajdangi31/NYXIS",
    image: nyxisPreview,
  },
  {
    title: "Rocket Ride Club",
    year: "2026",
    medium: "Product · TypeScript, Mapbox",
    text: "A ride-sharing app for students, still in progress: request a ride, see the route, and follow it until pickup.",
    href: "https://github.com/rajdangi31/rocket-ride-club",
    image: rocketRidePreview,
  },
  {
    title: "TakeApeek",
    year: "2025",
    medium: "Product · React, Supabase",
    text: "A real-time social discovery platform with threaded conversations and row-level security.",
    href: "https://github.com/rajdangi31/takeApeek",
    image: takeAPeekPreview,
  },
  {
    title: "Athena",
    year: "2026",
    medium: "Machine learning · Flask, OpenRouter",
    text: "An AI companion for eudaimonic reflection, with a restrained editorial interface.",
    href: "https://github.com/rajdangi31/Athena",
    image: athenaPreview,
  },
  {
    title: "EvolutionLab",
    year: "2026",
    medium: "Machine learning · Python",
    text: "Evolutionary agents against a Q-learning baseline in a food-seeking world, across a hundred seeds.",
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

export const reading = [
  { title: "Gödel, Escher, Bach", author: "Douglas Hofstadter", cover: gebCover },
  { title: "Caesar: Life of a Colossus", author: "Adrian Goldsworthy", cover: caesarCover },
  { title: "The Lacanian Subject", author: "Bruce Fink", cover: lacanCover },
];

export const finished = [
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
