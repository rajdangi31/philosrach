"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarFooter } from "./SidebarFooter";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/books", label: "Books" },
] as const;

export function Nav() {
  const pathname = usePathname();

  return (
    <aside
      className="
        px-8 pb-12 pt-10
        lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto
        lg:px-10 lg:pt-16
      "
    >
      <div className="max-w-sidebar mx-auto lg:mx-0">
        {/* Top block: on lg+ hands on top, then name; on mobile name left, hands right */}
        <div className="flex items-start gap-5 lg:block">
          {/* Hands: bleeds left on lg+, sits right of name on mobile */}
          <div
            className="
              order-2 w-[50%] max-w-[220px] shrink-0
              lg:order-none lg:w-[112%] lg:max-w-none
              lg:-ml-[6%] lg:mb-0
            "
          >
            <Image
              src="/assets/creation_of_adam.png"
              alt="Detail of hands from Michelangelo's Creation of Adam."
              width={1500}
              height={900}
              priority
              sizes="(max-width: 1024px) 40vw, 320px"
              className="h-auto w-full"
              unoptimized
            />
          </div>

          {/* Name: pulled up on lg+ so the stack sits closer to the hands art */}
          <div className="order-1 flex-1 lg:order-none lg:-mt-2">
            <h1
              className="
                font-caps font-medium uppercase text-ink
                text-[2rem] leading-[1.05] tracking-[0.14em]
                sm:text-[2.2rem]
                lg:text-[2.4rem]
              "
              style={{ fontFeatureSettings: '"smcp" off' }}
            >
              <span className="block">Raj</span>
              <span className="block">Dangi</span>
            </h1>
          </div>
        </div>

        {/* Tagline */}
        <p
          className="
            mb-10 mt-3 border-l border-rule pl-3
            font-display text-[1.05rem] italic leading-tight text-ink-soft
            lg:mb-10
          "
        >
          I like to make stuff, play with stuff, and break stuff until I understand it.
        </p>

        {/* Primary nav */}
        <nav aria-label="Primary" className="mb-12">
          <ul className="space-y-3">
            {links.map(({ href, label }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname?.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className={
                      "font-display text-xl transition-colors duration-200 ease-out border-b " +
                      (isActive
                        ? "text-sepia border-transparent"
                        : "text-ink border-transparent hover:text-sepia hover:border-sepia")
                    }
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Profile + socials: only in sidebar on lg+; on mobile these move to page footer */}
        <div className="hidden lg:block">
          <SidebarFooter />
        </div>
      </div>
    </aside>
  );
}
