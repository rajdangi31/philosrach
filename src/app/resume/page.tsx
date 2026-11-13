import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PrintButton } from "@/components/PrintButton";
import { skills } from "@/lib/content";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "Résumé of Raj Dangi: computer science at the University of Toledo, sports analytics and data science, high-availability systems research, and AI/ML projects.",
};

type Entry = {
  title: string;
  org?: string;
  meta: string;
  link?: { href: string; label: string };
  bullets: string[];
};

const experience: Entry[] = [
  {
    title: "Sports Analytics & Data Science Intern",
    org: "University of Toledo Athletics",
    meta: "2026",
    bullets: [
      "Build internal analytics and reporting tools for the Athletics marketing team.",
      "Develop and maintain a repeatable, validated data refresh process so reports stay accurate and current.",
      "Work directly with staff to turn recurring reporting questions into tools they use day to day.",
      "Check source data for consistency and document open questions before figures inform decisions.",
    ],
  },
  {
    title: "Software Developer",
    org: "Batting Cleanup (Civic-Tech Initiative)",
    meta: "Aug 2025 – Present",
    bullets: [
      "Architected a QR-based asset status reporting system, reducing per-event submission time to under 5 seconds and eliminating manual tracking overhead.",
      "Instrumented full-stack analytics via PostHog to drive architectural decisions and identify usage bottlenecks.",
    ],
  },
  {
    title: "Amazon DeepRacer Competitor",
    org: "University of Toledo",
    meta: "Jan 2025",
    bullets: [
      "Placed top 5 of 60+ participants by engineering and iterating reward functions for reinforcement learning models on AWS.",
    ],
  },
];

const projects: Entry[] = [
  {
    title: "Iris: High-Availability Distributed Web Stack",
    meta: "HAProxy, Linux, Tailscale",
    link: { href: "https://github.com/rajdangi31/iris-lamp", label: "github.com/rajdangi31/iris-lamp" },
    bullets: [
      "Designed a two-node fault-tolerant LAMP stack with HAProxy health-check routing and automated failover. First-authored paper accepted for oral presentation at ISDFS 2026.",
      "Achieved ~3 s failover and ~5 s failback with negligible latency overhead (0.010 s vs 0.012 s), using encrypted Tailscale networking and rsync and mysqldump synchronization.",
    ],
  },
  {
    title: "NYXIS: Gamified AI Productivity OS",
    meta: "PostgreSQL, TypeScript, Supabase",
    link: { href: "https://github.com/rajdangi31/NYXIS", label: "github.com/rajdangi31/NYXIS" },
    bullets: [
      "Engineered a gamified productivity platform with a PostgreSQL backend managing complex behavioral state transitions, using event-driven architecture for data integrity under continuous interaction.",
    ],
  },
  {
    title: "GPT-2 Transformer from Scratch",
    meta: "PyTorch, Transformers",
    link: { href: "https://github.com/rajdangi31/GPT-2", label: "github.com/rajdangi31/GPT-2" },
    bullets: [
      "Developed a GPT-2 style transformer with multi-head attention, layer normalization, and custom tokenization. Built training loops and resolved gradient stability issues.",
    ],
  },
  {
    title: "TakeAPeek: Social Media Platform",
    meta: "React, Supabase",
    link: { href: "https://github.com/rajdangi31/takeApeek", label: "github.com/rajdangi31/takeApeek" },
    bullets: [
      "Built a full-stack platform for ephemeral content sharing with real-time authentication, database management, and push notifications.",
    ],
  },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-[9rem_1fr] sm:gap-10 print:mt-3 print:block">
      <h2 className="caps pt-1 text-[0.85rem] font-normal text-rubric print:mb-1.5 print:border-b print:border-rule print:pb-1 print:text-[0.95rem]">
        {title}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

function Item({ entry }: { entry: Entry }) {
  return (
    <article className="avoid-break mb-7 last:mb-0 print:mb-2">
      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 print:flex-row print:items-baseline print:justify-between">
        <h3 className="font-display text-[1.3rem] font-semibold leading-tight text-ink print:text-[1.15rem]">
          {entry.title}
          {entry.org ? <span className="font-normal italic text-ink-2"> · {entry.org}</span> : null}
        </h3>
        <p className="lining shrink-0 text-[0.9rem] text-ink-3 print:text-[0.85rem]">{entry.meta}</p>
      </div>
      {entry.link ? (
        <a href={entry.link.href} target="_blank" rel="noopener noreferrer" className="link text-[0.88rem] text-ink-3 print:text-[0.8rem]">
          {entry.link.label}
        </a>
      ) : null}
      <ul className="mt-2 space-y-1.5 text-[1.02rem] leading-[1.6] print:mt-1 print:space-y-0.5 print:text-[0.98rem] print:leading-[1.38]">
        {entry.bullets.map((b) => (
          <li key={b} className="relative pl-5 before:absolute before:left-0 before:text-rubric before:content-['–']">
            {b}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function ResumePage() {
  return (
    <>
      <Header home={false} />
      <main id="content" className="px-6 pb-24 pt-32 sm:px-10 print:p-0">
        <div className="mx-auto max-w-[56rem] print:max-w-none">
          <div className="no-print mb-16 flex flex-wrap items-center justify-between gap-4 border-b border-rule pb-5">
            <p className="caps text-[0.9rem] text-ink-3">Appendix · Résumé</p>
            <div className="flex items-center gap-7">
              <PrintButton />
            </div>
          </div>

          <header className="text-center">
            <h1 className="font-display text-[clamp(2.6rem,6vw,4rem)] font-medium uppercase leading-none tracking-[0.1em] text-ink print:text-[2.1rem]">
              Raj Dangi
            </h1>
            <p className="mt-5 text-[0.98rem] text-ink-2 print:mt-2 print:text-[0.95rem]">
              <a className="link" href="mailto:raj.dangi@rockets.utoledo.edu">raj.dangi@rockets.utoledo.edu</a>
              <span className="mx-2 text-rubric">·</span>
              <a className="link" href="https://philosrach.com">philosrach.com</a>
              <span className="mx-2 text-rubric">·</span>
              <a className="link" href="https://www.linkedin.com/in/rajdangi01/">linkedin.com/in/rajdangi01</a>
              <span className="mx-2 text-rubric">·</span>
              <a className="link" href="https://github.com/rajdangi31">github.com/rajdangi31</a>
            </p>
          </header>

          <Section title="Summary">
            <p className="text-[1.05rem] leading-[1.65] print:text-[0.98rem] print:leading-[1.4]">
              Computer Science undergraduate working across distributed systems, data engineering and analytics,
              and AI/ML. Builds fault-tolerant multi-node web stacks, reliable reporting tools, and GPT
              architectures from scratch. First-authored research on high-availability infrastructure accepted for
              oral presentation at ISDFS 2026.
            </p>
          </Section>

          <Section title="Education">
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between print:flex-row print:justify-between">
              <h3 className="font-display text-[1.3rem] font-semibold text-ink print:text-[1.15rem]">
                University of Toledo<span className="font-normal italic text-ink-2"> · B.S. Computer Science</span>
              </h3>
              <p className="lining text-[0.9rem] text-ink-3 print:text-[0.85rem]">Aug 2023 – May 2027</p>
            </div>
            <p className="mt-1 text-[1rem] leading-[1.6] print:text-[0.95rem]">
              <span className="italic text-ink-3">Relevant coursework:</span> Computer Architecture, Operating
              Systems, Data Communications, Network Security, Data Structures.
            </p>
          </Section>

          <Section title="Experience">
            {experience.map((e) => (
              <Item key={e.title} entry={e} />
            ))}
          </Section>

          <Section title="Projects">
            {projects.map((e) => (
              <Item key={e.title} entry={e} />
            ))}
          </Section>

          <Section title="Skills">
            <dl className="space-y-1.5 text-[1.02rem] leading-[1.55] print:space-y-0.5 print:text-[0.96rem] print:leading-[1.38]">
              {skills.map((s) => (
                <div key={s.label} className="grid grid-cols-1 sm:grid-cols-[7rem_1fr] sm:gap-4 print:grid-cols-[7rem_1fr] print:gap-3">
                  <dt className="font-display font-semibold text-ink">{s.label}</dt>
                  <dd>{s.items}</dd>
                </div>
              ))}
            </dl>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
