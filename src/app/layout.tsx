import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Door Seal by Sardar Manufactures | Premium Hardware in Rajkot",
  description:
    "Rajkot's premier manufacturer of Door Seal brand hardware. Specialized in premium brass mortise locks, hydraulic floor springs, and aluminium section hardware. Trusted by India's top architects.",
  keywords: [
    "Door Seal Rajkot",
    "Door Seal",
    "Sardar Manufactures",
    "mortise locks Rajkot",
    "hydraulic floor springs",
    "hardware manufacturer Rajkot",
    "premium door hardware",
  ],
  openGraph: {
    title: "Door Seal by Sardar Manufactures | Premium Hardware in Rajkot",
    description:
      "Rajkot's premier manufacturer of Door Seal brand hardware. Specialized in premium brass mortise locks and hydraulic floor springs.",
    type: "website",
    locale: "en_IN",
    siteName: "Door Seal - Sardar Manufactures",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ManufacturingBusiness",
  "name": "Sardar Manufactures",
  "alternateName": "Door Seal",
  "description": "Premium hardware manufacturer specializing in brass mortise locks and hydraulic floor springs.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "30, Samrat Industrial Area Main Rd, Ambedkar Nagar, Samrat Industrial Area",
    "addressLocality": "Rajkot",
    "addressRegion": "Gujarat",
    "postalCode": "360004",
    "addressCountry": "IN"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "19"
  },
  "keywords": "Door Seal Rajkot, Door Seal, hardware manufacturer"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-offwhite text-brand-charcoal">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
