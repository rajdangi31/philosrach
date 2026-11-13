import Link from "next/link";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header home={false} />
      <main className="flex min-h-[100svh] flex-col items-center justify-center px-6 pt-16 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/glitch-hands.gif"
          alt="The hands from the Creation of Adam, breaking up into static."
          width={612}
          height={408}
          className="w-[min(460px,84vw)] mix-blend-multiply"
        />
        <p className="caps mt-4 text-[0.9rem] text-rubric">Page not found</p>
        <h1 className="mt-4 max-w-[22ch] text-[clamp(2rem,4vw,2.8rem)] leading-[1.12]">
          This page is missing, or it never existed.
        </h1>
        <Link href="/" className="caps link mt-10 text-[0.95rem]">
          Back to the first page
        </Link>
      </main>
    </>
  );
}
