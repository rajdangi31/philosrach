import Link from "next/link";
import { Layout } from "@/components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="mx-auto max-w-xl py-32 text-center">
        <p className="small-caps text-sm text-ink-muted">Not Found</p>
        <p className="mt-6 font-display text-[5.5rem] leading-none text-ink">
          404
        </p>
        <div className="ornament" aria-hidden>
          ❦
        </div>
        <p className="font-display text-[1.2rem] italic text-ink-soft">
          The page you sought is not in this chamber.
        </p>
        <p className="mt-10">
          <Link href="/" className="small-caps ink-link text-sm">
            Return home
          </Link>
        </p>
      </div>
    </Layout>
  );
}
