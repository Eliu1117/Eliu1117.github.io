import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/data/site";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl(site.canonicalUrl);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — Computer Science, University of Maryland`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Ethan Liu",
    "University of Maryland",
    "Computer Science",
    "software engineering intern",
    "Summer 2027 internship",
  ],
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: `${site.name} Portfolio`,
    title: `${site.name} — Computer Science, University of Maryland`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Computer Science, University of Maryland`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: siteUrl,
  sameAs: [site.github],
  jobTitle: "Computer Science Student",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: site.university,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Clarksburg",
    addressRegion: "MD",
    addressCountry: "US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
