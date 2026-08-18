import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MobileCTA from "@/components/MobileCTA";
import { siteConfig } from "@/lib/site-config";
import { FAQ } from "@/lib/faq";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const description =
  "Clearwater's coastal property and marine infrastructure company. Docks, boat lifts, seawalls, and storm-ready waterfront work across Pinellas, Hillsborough, Pasco, and Manatee counties since 2011.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Regressive Enterprises | Built to Hold Up",
  description,
  openGraph: {
    title: "Regressive Enterprises | Built to Hold Up",
    description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: ["/brand/logo-reference.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regressive Enterprises | Built to Hold Up",
    description,
    images: ["/brand/logo-reference.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: siteConfig.name,
  description,
  url: siteConfig.url,
  telephone: siteConfig.phone.display,
  email: siteConfig.email.display,
  foundingDate: String(siteConfig.founded),
  identifier: siteConfig.license.number,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
  },
  areaServed: siteConfig.address.serviceArea,
  sameAs: Object.values(siteConfig.socials).filter(Boolean),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col grain bg-plum text-ivory pb-16 md:pb-0">
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-ivory px-5 py-2.5 text-sm font-semibold text-plum transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <SmoothScroll>{children}</SmoothScroll>
        <MobileCTA />
      </body>
    </html>
  );
}
