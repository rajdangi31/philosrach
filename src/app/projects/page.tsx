import { Layout } from "@/components/Layout";
import {
  ProjectCatalogue,
  type ProjectEntry,
} from "@/components/ProjectCatalogue";
import { SectionTitle } from "@/components/SectionTitle";
import type { Metadata } from "next";
import athenaPreview from "../../../assets/Athena.png";
import gpt2Preview from "../../../assets/GPT-2.png";
import irisLampPreview from "../../../assets/Iris-Lamp.png";
import nyxisPreview from "../../../assets/nyxis-architecture.png";
import rocketRideClubPreview from "../../../assets/Rocket-ride-club.png";
import takeAPeekPreview from "../../../assets/takeApeek.png";

export const metadata: Metadata = {
  title: "Projects - Raj Dangi",
  description: "Selected works and experiments.",
};

const projects: ProjectEntry[] = [
  {
    title: "GPT-2 from Scratch",
    medium: "Python · PyTorch · NLP, 2025",
    description:
      "A ground-up PyTorch implementation of GPT-style language modeling: custom character tokenizer, causal self-attention (QKV + masking), positional embeddings, and a full training loop. Built as an interpretability-first study of how transformer mechanics turn raw symbols into coherent text.",
    href: "https://github.com/rajdangi31/GPT-2",
    previewSrc: gpt2Preview,
    previewAlt: "Architecture preview from the GPT-2 from-scratch implementation.",
  },
  {
    title: "Iris-Lamp",
    medium: "PHP · HAProxy · MariaDB · Tailscale, 2025",
    description:
      "A research-backed high-availability LAMP deployment for low-cost environments. Uses HAProxy health checks, Tailscale networking, rsync file replication, and scheduled MariaDB sync between primary/backup nodes, with measured failover and recovery behavior documented in the repo.",
    href: "https://github.com/rajdangi31/iris-lamp",
    previewSrc: irisLampPreview,
    previewAlt: "System overview for the Iris-Lamp high-availability architecture.",
  },
  {
    title: "NYXIS",
    medium: "TypeScript · React Native · Expo · Supabase, 2026",
    description:
      "A React Native + Supabase 'personal evolution OS' with AI-generated quest systems, behavioral profiling, stat progression, and pressure-based penalties. Architected around edge functions, RPC workflows, and long-term user state rather than simple habit tracking.",
    href: "https://github.com/rajdangi31/NYXIS",
    previewSrc: nyxisPreview,
    previewAlt: "System architecture diagram for the NYXIS project.",
  },
  {
    title: "Rocket Ride Club",
    medium: "TypeScript · Web App, 2026",
    description:
      "An active TypeScript experiment currently under construction. The repository is early-stage, so this entry represents ongoing product and architecture exploration rather than a finalized public release.",
    href: "https://github.com/rajdangi31/rocket-ride-club",
    previewSrc: rocketRideClubPreview,
    previewAlt: "Preview image for Rocket Ride Club.",
  },
  {
    title: "TakeApeek",
    medium: "TypeScript · React · Supabase · Tailwind, 2025",
    description:
      "A real-time social discovery platform built with React, Supabase, and Tailwind: live interaction updates, threaded conversations, and auth-protected spaces with RLS policies. Emphasis is on responsive feed performance and production-minded front-end architecture.",
    href: "https://github.com/rajdangi31/takeApeek",
    previewSrc: takeAPeekPreview,
    previewAlt: "Interface preview for the TakeApeek social discovery platform.",
  },
  {
    title: "Athena",
    medium: "Python · Flask · JavaScript · OpenRouter, 2026",
    description:
      "An AI companion focused on eudaimonic reflection, implemented as a Flask backend with a modular vanilla-JS frontend. Includes structured prompt design, health/chat endpoints, error-handling paths, and a restrained interface language inspired by minimalist editorial systems.",
    href: "https://github.com/rajdangi31/Athena",
    previewSrc: athenaPreview,
    previewAlt: "Athena interface preview.",
  },
];

export default function ProjectsPage() {
  return (
    <Layout>
      <SectionTitle kicker="Catalogue">Projects</SectionTitle>
      <ProjectCatalogue projects={projects} />
      <p className="mt-16 text-center">
        <a
          href="https://github.com/rajdangi31"
          target="_blank"
          rel="noopener noreferrer"
          className="ink-link small-caps text-sm"
        >
          See all at github.com/rajdangi31
        </a>
      </p>
    </Layout>
  );
}
