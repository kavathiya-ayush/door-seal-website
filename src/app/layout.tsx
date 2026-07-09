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
  title: "Door Seal — Premium Door Hardware by Sardar Manufactures | Rajkot",
  description:
    "India's first lock brand offering lifetime guarantee. Premium brass mortise handles, hydraulic floor springs, and aluminium section hardware. Manufactured in Rajkot. Trusted by architects and wholesalers nationwide.",
  keywords: [
    "door hardware",
    "mortise locks",
    "floor springs",
    "brass handles",
    "Rajkot manufacturer",
    "B2B hardware",
    "Door Seal",
    "Sardar Manufactures",
  ],
  openGraph: {
    title: "Door Seal — Premium Door Hardware",
    description:
      "India's first lock brand offering lifetime guarantee. Premium hardware for architects & wholesalers.",
    type: "website",
    locale: "en_IN",
  },
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
        {children}
      </body>
    </html>
  );
}
