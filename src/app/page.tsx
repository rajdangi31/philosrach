import Image from "next/image";
import angel from "@/about/aboutBG.jpg";
import portrait from "@/assets/profile.jpg";
import schoolOfAthens from "@/admin/SchoolOfAthens.jpg";
import { Chapter, Grain } from "@/components/Chapter";
import { Correspondence } from "@/components/Correspondence";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Plate } from "@/components/Plate";
import { Reveal } from "@/components/Reveal";
import { Works } from "@/components/Works";
import { essays, experience, finished, inBrief, principles, reading } from "@/lib/content";

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
          lede="A few words about myself."
          dark
        >
          <div className="grid grid-cols-1 items-start gap-14 xl:grid-cols-[minmax(0,1fr)_17rem]">
            <div className="max-w-measure space-y-6 text-[1.14rem] leading-[1.75]">
              <p className="fade-up initial" style={d(1)}>
                I am a student, and I think I always will be. Right now I am studying computer science at the
                University of Toledo. I like movies, music, and games.
              </p>
              <p className="fade-up" style={d(2)}>
                I think we are at a point where building has become incredibly easy, because of AI. So my current
                focus is on understanding AI. I also love exchanging ideas, and I think AI should be trained to do
                the same if we hope to reach a utopia.
              </p>
              <p className="fade-up" style={d(3)}>If any of this makes sense to you, write to me. I read every message.</p>
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
              dark
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
                <div className="pt-2">
                  <p className="lining font-display text-[1.15rem] text-ink-3">{item.period}</p>
                  {item.current ? (
                    <p className="caps mt-2 flex items-center gap-2 text-[0.75rem] text-rubric">
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-rubric" />
                      Current
                    </p>
                  ) : null}
                </div>
                <div>
                  <h3 className="text-[clamp(1.65rem,2.8vw,2.2rem)] leading-[1.1]">{item.role}</h3>
                  <p className="mt-1.5 font-display text-[1.2rem] italic text-rubric">{item.org}</p>
                  <p className="mt-4 max-w-measure text-[1.1rem] leading-[1.72]">{item.text}</p>
                  <p className="caps mt-5 text-[0.78rem] text-ink-3">
                    {item.tags.map((t, j) => (
                      <span key={t}>
                        {j > 0 ? <span aria-hidden className="mx-2.5 text-rubric/60">·</span> : null}
                        {t}
                      </span>
                    ))}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Chapter>

        <Chapter id="principles" numeral="III" title="Principles" lede="What I think matters most in a person." dark>
          <Plate
            src={schoolOfAthens}
            alt="Raphael's fresco The School of Athens: philosophers gathered under a great arch."
            numeral="II"
            caption="Raphael, The School of Athens. Everyone in it is still arguing."
            aspect="aspect-[16/9] sm:aspect-[2/1]"
            position="50% 40%"
            sizes="(max-width: 1024px) 92vw, 58rem"
            imageClassName="saturate-[0.82] sepia-[0.12]"
            dark
          />
          <ol className={`mt-16 grid grid-cols-1 border-t ${hairline} md:grid-cols-2`}>
            {principles.map((p, i) => (
              <li
                key={p.title}
                className={`fade-up border-b ${hairline} py-10 md:py-12 ${i % 2 === 0 ? "md:pr-12" : "md:border-l md:pl-12"}`}
                style={d(i)}
              >
                <p
                  aria-hidden
                  className="select-none bg-gradient-to-b -mb-[0.22em] from-ink/[0.2] to-ink/[0.06] bg-clip-text font-display text-[clamp(5rem,8vw,7rem)] font-medium leading-none text-transparent"
                >
                  {["I", "II", "III", "IV"][i]}
                </p>
                <h3 className="relative mt-1 text-[clamp(1.7rem,2.6vw,2rem)] leading-[1.12]">{p.title}</h3>
                <p className="mt-4 text-[1.08rem] leading-[1.72]">{p.text}</p>
              </li>
            ))}
          </ol>
          <p className="fade-up mt-14 max-w-measure text-[1.14rem] leading-[1.75]">
            I think principles, moral values, integrity, and honesty are the most important things for a person, and
            we should all try to get better at them. There is beauty in each of them. As AI emerges, I believe we
            should be careful to train the models on these things as well.
          </p>
        </Chapter>

        <Works />

        <Chapter
          id="writing"
          numeral="V"
          title="Writing"
          lede="Essays on the mind, and on the things we build."
          dark
          backdrop={
            <div aria-hidden className="absolute inset-0 -z-10">
              <Grain glow="20% 70%" />
            </div>
          }
        >
          <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2">
            {essays.map((e, i) => (
              <li key={e.title} className="fade-up" style={d(i)}>
                <a href={e.href} target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-black shadow-[0_30px_60px_-30px_rgb(0_0_0/0.8)]">
                    <Image
                      src={e.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 90vw, 30rem"
                      placeholder="blur"
                      className="object-cover opacity-80 grayscale-[0.7] transition duration-[1200ms] ease-out group-hover:scale-[1.04] group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </div>
                  <p className="caps lining mt-7 text-[0.8rem] text-white/45">{e.date} · Medium</p>
                  <h3 className="mt-3 text-[clamp(1.7rem,2.6vw,2.2rem)] leading-[1.12] !text-white/90 transition-colors duration-300 group-hover:!text-white">
                    {e.title}
                    <span
                      aria-hidden
                      className="ml-2.5 inline-block align-middle text-[0.5em] text-white/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-0.5 group-hover:text-[oklch(0.78_0.12_38)]"
                    >
                      ↗
                    </span>
                  </h3>
                  <span aria-hidden className="mt-4 block h-px w-full origin-left scale-x-[0.14] bg-rubric transition-transform duration-700 ease-out group-hover:scale-x-100" />
                  <p className="mt-4 max-w-[34rem] text-[1.06rem] leading-[1.7] text-white/60">{e.text}</p>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://medium.com/@rach.dev0731"
            target="_blank"
            rel="noopener noreferrer"
            className="caps fade-up mt-16 inline-flex items-center gap-2 border-b border-white/20 pb-1 text-[0.85rem] text-white/70 transition-colors hover:border-white/60 hover:text-white"
          >
            More essays on Medium <span aria-hidden>↗</span>
          </a>
        </Chapter>

        <Chapter
          id="reading"
          numeral="VI"
          title="Reading"
          lede="What I am reading now, and a few books that stayed with me."
        >
          <p className="caps fade-up text-[0.8rem] text-rubric">On the desk</p>
          {reading.map((b) => (
            <div key={b.title} className="fade-up group mt-6 flex items-end gap-6 sm:gap-10" style={d(1)}>
              <div
                className={`relative aspect-[2/3] w-[42%] max-w-[15rem] shrink-0 overflow-hidden bg-paper-2 ${coverShadow} transition-transform duration-700 ease-out group-hover:-translate-y-1.5`}
              >
                <Image src={b.cover} alt={`Cover of ${b.title}`} fill sizes="(max-width: 640px) 42vw, 15rem" className="object-cover" />
              </div>
              <div className="pb-2">
                <p className="font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.1] text-ink">{b.title}</p>
                <p className="mt-1.5 font-display text-[1.15rem] italic text-ink-3">{b.author}</p>
              </div>
            </div>
          ))}

          <div className={`mt-20 border-t ${hairline} pt-6`}>
            <p className="caps fade-up text-[0.8rem] text-rubric">Finished, and kept</p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-x-10">
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
                className="animate-[drift_40s_ease-in-out_infinite_alternate] object-cover object-[60%_30%] opacity-50 grayscale motion-reduce:animate-none"
              />
              <Grain />
              <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.15_0_0)] via-[oklch(0.15_0_0/0.7)] to-[oklch(0.15_0_0/0.15)]" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[oklch(0.15_0_0)] to-transparent" />
            </div>
          }
        >
          <Correspondence />
        </Chapter>
      </main>
      <Footer dark />
      <Reveal />
    </>
  );
}
