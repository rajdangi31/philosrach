import Image from "next/image";
import Link from "next/link";
import angel from "@/assets/angel.jpg";
import portrait from "@/assets/profile.jpg";
import schoolOfAthens from "@/assets/school-of-athens.jpg";
import { Chapter } from "@/components/Chapter";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Plate } from "@/components/Plate";
import { Reveal } from "@/components/Reveal";
import { Works } from "@/components/Works";
import { essays, experience, finished, inBrief, principles, reading, site, socials } from "@/lib/content";

const d = (n: number) => ({ "--d": n }) as React.CSSProperties;
const hairline = "border-ink/[0.13]";
const coverShadow =
  "shadow-[0_0_0_1px_oklch(0.2_0.018_50/0.1),0_22px_40px_-22px_oklch(0.2_0.018_50/0.55)]";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="content">
        <Hero />

        <Chapter
          id="preface"
          numeral="I"
          title="Preface"
          lede="A student who builds things, breaks them on purpose, and keeps reading until the picture is clear."
        >
          <div className="grid grid-cols-1 items-start gap-14 xl:grid-cols-[minmax(0,1fr)_17rem]">
            <div className="max-w-measure space-y-6 text-[1.14rem] leading-[1.75]">
              <p className="fade-up initial" style={d(1)}>
                I am a student, and I think I always will be. Right now I am studying computer science at the
                University of Toledo, trying to learn by making things and by understanding how they fail before
                they work.
              </p>
              <p className="fade-up" style={d(2)}>
                My work sits where systems meet data: infrastructure that stays up when a machine goes down, and
                reporting that people can rely on. I like to build, optimize, and keep refining until an idea
                feels clear. Outside of code I read philosophy and take notes on whatever stays with me after a
                page is done.
              </p>
              <p className="fade-up" style={d(3)}>
                If anything here resonates, write to me. I read every message and reply to most of them,
                eventually.
              </p>
            </div>
            <Plate
              src={portrait}
              alt="Black and white portrait of Raj Dangi."
              numeral="I"
              caption="The author."
              aspect="aspect-[4/5]"
              position="56% 30%"
              sizes="(max-width: 1280px) 80vw, 17rem"
              className="max-w-[20rem] xl:mt-2"
            />
          </div>

          <dl className={`fade-up mt-20 grid grid-cols-1 border-y ${hairline} sm:grid-cols-2`}>
            {inBrief.map((item, i) => (
              <div
                key={item.label}
                className={`py-5 sm:px-6 ${i > 0 ? `border-t ${hairline}` : ""} ${i === 1 ? "sm:border-t-0" : ""} ${
                  i % 2 === 0 ? "sm:pl-0" : `sm:border-l ${hairline}`
                }`}
              >
                <dt className="caps text-[0.8rem] text-rubric">{item.label}</dt>
                <dd className="mt-1.5 font-display text-[1.3rem] leading-snug text-ink">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Chapter>

        <Chapter id="experience" numeral="II" title="Experience" lede="Where I have worked, and what I did there.">
          <ol className={`border-b ${hairline}`}>
            {experience.map((item) => (
              <li
                key={item.role}
                className={`fade-up grid grid-cols-1 gap-3 border-t ${hairline} py-10 sm:grid-cols-[9rem_1fr] sm:gap-10`}
              >
                <p className="lining pt-2 font-display text-[1.1rem] text-ink-3">{item.period}</p>
                <div>
                  <h3 className="text-[clamp(1.65rem,2.8vw,2.2rem)] leading-[1.1]">{item.role}</h3>
                  <p className="mt-1.5 font-display text-[1.2rem] italic text-rubric">{item.org}</p>
                  <p className="mt-4 max-w-measure text-[1.1rem] leading-[1.72]">{item.text}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <li
                        key={t}
                        className="caps rounded-full border border-ink/[0.16] px-3 py-0.5 text-[0.78rem] leading-relaxed text-ink-2"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Chapter>

        <Chapter id="principles" numeral="III" title="Principles" lede="What I try to hold to, in work and out of it.">
          <Plate
            src={schoolOfAthens}
            alt="Raphael's fresco The School of Athens: philosophers gathered under a great arch."
            numeral="II"
            caption="Raphael, The School of Athens. Everyone in it is still arguing."
            aspect="aspect-[16/9] sm:aspect-[2/1]"
            position="50% 40%"
            sizes="(max-width: 1024px) 92vw, 58rem"
            imageClassName="saturate-[0.82] sepia-[0.12]"
          />
          <ol className={`mt-16 grid grid-cols-1 border-t ${hairline} md:grid-cols-2`}>
            {principles.map((p, i) => (
              <li
                key={p.title}
                className={`fade-up border-b ${hairline} py-10 md:py-12 ${i % 2 === 0 ? "md:pr-12" : "md:border-l md:pl-12"}`}
                style={d(i)}
              >
                <p className="font-display text-[1.15rem] italic text-rubric">{["i", "ii", "iii", "iv"][i]}.</p>
                <h3 className="mt-3 text-[clamp(1.7rem,2.6vw,2rem)] leading-[1.12]">{p.title}</h3>
                <p className="mt-4 text-[1.08rem] leading-[1.72]">{p.text}</p>
              </li>
            ))}
          </ol>
        </Chapter>

        <Works />

        <Chapter id="writing" numeral="V" title="Writing" lede="Essays on the mind, and on the things we build.">
          <ul className={`border-b ${hairline}`}>
            {essays.map((e, i) => (
              <li key={e.title} className={`fade-up border-t ${hairline}`} style={d(i)}>
                <a
                  href={e.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-1 items-center gap-6 py-10 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-10"
                >
                  <div className={`relative aspect-[3/2] overflow-hidden bg-ink ${coverShadow}`}>
                    <Image
                      src={e.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 90vw, 16rem"
                      placeholder="blur"
                      className="object-cover grayscale-[0.85] transition duration-[900ms] ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
                    />
                  </div>
                  <div>
                    <p className="caps lining text-[0.82rem] text-ink-3">{e.date} · Medium</p>
                    <h3 className="mt-3 text-[clamp(1.75rem,3vw,2.35rem)] leading-[1.12] transition-colors duration-300 group-hover:text-rubric">
                      {e.title}
                      <span
                        aria-hidden
                        className="ml-3 inline-block align-middle text-[0.5em] text-ink-3 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-0.5 group-hover:text-rubric"
                      >
                        ↗
                      </span>
                    </h3>
                    <p className="mt-3 max-w-measure text-[1.08rem] leading-[1.7]">{e.text}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://medium.com/@rach.dev0731"
            target="_blank"
            rel="noopener noreferrer"
            className="caps link mt-8 inline-block text-[0.9rem]"
          >
            More essays on Medium
          </a>
        </Chapter>

        <Chapter
          id="reading"
          numeral="VI"
          title="Reading"
          lede="What I am reading now, and a few books that stayed with me."
        >
          <p className="caps fade-up text-[0.8rem] text-rubric">On the desk</p>
          <ul className="mt-6 grid grid-cols-3 gap-4 sm:gap-10">
            {reading.map((b, i) => (
              <li key={b.title} className="fade-up group" style={d(i)}>
                <div
                  className={`relative aspect-[2/3] overflow-hidden bg-paper-2 ${coverShadow} transition-transform duration-700 ease-out group-hover:-translate-y-1.5`}
                >
                  <Image src={b.cover} alt={`Cover of ${b.title}`} fill sizes="(max-width: 640px) 30vw, 14rem" className="object-cover" />
                </div>
                <p className="mt-4 font-display text-[1.1rem] leading-tight text-ink sm:text-[1.3rem]">{b.title}</p>
                <p className="mt-0.5 font-display text-[0.98rem] italic text-ink-3">{b.author}</p>
              </li>
            ))}
          </ul>

          <div className={`mt-20 border-t ${hairline} pt-6`}>
            <p className="caps fade-up text-[0.8rem] text-rubric">Finished, and kept</p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-x-8">
              {finished.map((b, i) => (
                <li key={b.title} className="fade-up group" style={d(i)}>
                  <div
                    className={`relative aspect-[2/3] overflow-hidden bg-paper-2 ${coverShadow} transition-transform duration-700 ease-out group-hover:-translate-y-1`}
                  >
                    <Image
                      src={b.cover}
                      alt={`Cover of ${b.title}`}
                      fill
                      sizes="(max-width: 640px) 44vw, 10rem"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-3 font-display text-[1.05rem] leading-tight text-ink sm:text-[1.12rem]">{b.title}</p>
                  <p className="mt-0.5 font-display text-[0.95rem] italic text-ink-3">{b.author}</p>
                </li>
              ))}
            </ul>
          </div>
        </Chapter>

        <Chapter
          id="correspondence"
          numeral="VII"
          title="Correspondence"
          lede="For work, research, or a good book recommendation."
          dark
          backdrop={
            <div aria-hidden className="absolute inset-0 -z-10">
              <Image
                src={angel}
                alt=""
                fill
                sizes="100vw"
                placeholder="blur"
                className="object-cover object-[60%_30%] opacity-50 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.16_0.012_50)] via-[oklch(0.16_0.012_50/0.7)] to-[oklch(0.16_0.012_50/0.15)]" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[oklch(0.16_0.012_50)] to-transparent" />
            </div>
          }
        >
          <a
            href={`mailto:${site.email}`}
            className="lining fade-up group inline-block break-all font-display text-[clamp(1.9rem,5vw,4rem)] leading-[1.05] text-white transition-colors duration-300 hover:text-[oklch(0.8_0.1_40)]"
            style={d(1)}
          >
            {site.email}
            <span className="mt-3 block h-px w-full origin-left scale-x-[0.14] bg-rubric transition-transform duration-700 ease-out group-hover:scale-x-100" />
          </a>
          <ul className="fade-up mt-14 flex flex-wrap gap-x-9 gap-y-3" style={d(2)}>
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="caps link text-[0.95rem] !text-white/80 hover:!text-white"
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <Link href="/resume" className="caps link text-[0.95rem] !text-[oklch(0.78_0.12_38)]">
                Résumé
              </Link>
            </li>
          </ul>
        </Chapter>
      </main>
      <Footer dark />
      <Reveal />
    </>
  );
}
