import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, EB_Garamond } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Raj Dangi",
    template: "%s · Raj Dangi",
  },
  description: site.description,
  authors: [{ name: site.name, url: site.url }],
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title: "Raj Dangi",
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@philosrach",
  },
  icons: {
    icon: "/assets/creation_of_adam.png",
    apple: "/assets/creation_of_adam.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7edd8",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: "Computer Science student",
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Toledo" },
  sameAs: [
    "https://github.com/rajdangi31",
    "https://www.linkedin.com/in/rajdangi01/",
    "https://x.com/philosrach",
    "https://medium.com/@rach.dev0731",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${ebGaramond.variable}`}>
      <body>
        <a
          href="#content"
          className="caps sr-only z-50 bg-paper px-3 py-1 text-sm text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
