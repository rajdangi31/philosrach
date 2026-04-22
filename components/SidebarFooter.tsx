import Image from "next/image";

const socials = [
  { label: "Email", href: "mailto:rach.dev0731@gmail.com" },
  { label: "X", href: "https://x.com/philosrach" },
  { label: "GitHub", href: "https://github.com/rajdangi31" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rajdangi01/" },
  { label: "Instagram", href: "https://www.instagram.com/not._raj_/" },
] as const;

function SocialIcon({ label }: { label: (typeof socials)[number]["label"] }) {
  if (label === "Email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Zm1.5.37v.22l7.11 4.89a.67.67 0 0 0 .78 0L19.5 7.34v-.22a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25Z"
        />
      </svg>
    );
  }
  if (label === "GitHub") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.21.68-.48v-1.67c-2.77.6-3.36-1.18-3.36-1.18-.45-1.14-1.11-1.44-1.11-1.44-.9-.61.07-.6.07-.6 1 .07 1.52 1.02 1.52 1.02.88 1.52 2.32 1.08 2.89.83.09-.64.35-1.08.63-1.33-2.21-.25-4.54-1.11-4.54-4.93 0-1.09.39-1.98 1.02-2.68-.1-.25-.44-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.54 9.54 0 0 1 12 6.8c.85 0 1.7.12 2.49.36 1.91-1.29 2.75-1.02 2.75-1.02.54 1.38.2 2.4.1 2.65.64.7 1.02 1.59 1.02 2.68 0 3.83-2.33 4.67-4.56 4.92.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
        />
      </svg>
    );
  }
  if (label === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.12 2.12 0 1 0 5.3 7.24 2.12 2.12 0 0 0 5.25 3ZM20.5 13.54c0-3.1-1.66-5.04-4.33-5.04-2 0-2.9 1.1-3.4 1.87V8.5H9.39V20h3.38v-6.04c0-1.6.3-3.15 2.27-3.15 1.94 0 1.97 1.81 1.97 3.25V20h3.49v-6.46Z"
        />
      </svg>
    );
  }
  if (label === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.5A3 3 0 0 0 4.5 7.5v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3h-9Zm10.88 1.12a1.13 1.13 0 1 0 0 2.26 1.13 1.13 0 0 0 0-2.26ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="currentColor"
        d="M18.9 4.2H21L16.4 9.5l5.4 7.3h-4.2l-3.3-4.5-3.9 4.5H8.3l5-5.7L8.1 4.2h4.3l3 4.1 3.5-4.1Z"
      />
    </svg>
  );
}

export function SidebarFooter() {
  return (
    <div className="border-t border-rule pt-8">
      {/* Profile */}
      <div className="mb-7 flex items-center gap-4">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden">
          <Image
            src="/assets/profile.png"
            alt="Raj Dangi"
            fill
            sizes="80px"
            className="object-cover"
            style={{
              opacity: 0.95,
              filter: "sepia(0.18) contrast(0.95)",
            }}
          />
        </div>
        <p className="font-display text-base italic leading-snug text-ink-soft">
          Raj, in passing.
        </p>
      </div>

      {/* Elsewhere label */}
      <p className="small-caps mb-4 text-sm text-ink-muted">Elsewhere</p>

      {/* Socials */}
      <ul className="space-y-2.5">
        {socials.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={
                href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="small-caps inline-flex items-center gap-2 text-base text-ink transition-colors duration-200 ease-out hover:text-sepia"
            >
              <SocialIcon label={label} />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
