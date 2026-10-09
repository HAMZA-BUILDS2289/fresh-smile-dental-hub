import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWidgets, LeadPopup } from "@/components/FloatingUI";
import { BUSINESS } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.siteUrl),
  title: {
    default: "Freshsmile Dental Hub | Best Dental Clinic in Osogbo, Osun",
    template: "%s | Freshsmile Dental Hub Osogbo",
  },
  description:
    "Freshsmile Dental Hub is a women-owned, 4.8★ rated dental clinic in Osogbo. Teeth whitening, braces, root canals, scaling & polishing, extractions, emergency and pediatric care. Book on WhatsApp.",
  keywords: [
    "dentist in Osogbo",
    "dental clinic Osogbo",
    "teeth whitening Osogbo",
    "braces Osogbo",
    "root canal Osogbo",
    "emergency dentist Osun",
    "Freshsmile Dental Hub",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: BUSINESS.name,
    title: "Freshsmile Dental Hub | Osogbo",
    description: BUSINESS.tagline,
    images: [{ url: "/images/tooth-3d.jpg", width: 672, height: 457, alt: "Freshsmile Dental Hub" }],
  },
  twitter: { card: "summary_large_image", title: "Freshsmile Dental Hub", description: BUSINESS.tagline },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#06243a",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: BUSINESS.name,
  description: BUSINESS.tagline,
  telephone: BUSINESS.phoneTel,
  url: BUSINESS.siteUrl,
  image: `${BUSINESS.siteUrl}/images/tooth-3d.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sir Grounding 3 Kobogbogboe, beside Ascension filling station",
    addressLocality: "Osogbo",
    addressRegion: "Osun",
    postalCode: "230001",
    addressCountry: "NG",
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: BUSINESS.rating, reviewCount: BUSINESS.reviewCount },
  paymentAccepted: "Credit Card, Debit Card",
  isAccessibleForFree: false,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWidgets />
        <LeadPopup />
      </body>
    </html>
  );
}
