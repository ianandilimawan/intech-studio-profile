import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { LanguageProvider } from "@/lib/i18n";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Intech Studio | Premium Custom Software Development",
  icons: {
    icon: "/logo.png",
  },
  description:
    "World-class software house specializing in custom software development, business automation, POS systems, and WhatsApp commerce. We build enterprise-grade digital products.",
  keywords: [
    "Software House",
    "Custom Software Development",
    "Business Automation",
    "POS Systems",
    "WhatsApp Commerce",
    "Enterprise Applications",
    "Digital Transformation",
  ],
  authors: [{ name: "Intech Studio" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://intechstudio.com",
    siteName: "Intech Studio",
    title: "Intech Studio | Premium Custom Software Development",
    description:
      "World-class software house specializing in custom software development, business automation, POS systems, and WhatsApp commerce.",
    images: [
      {
        url: "https://intechstudio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Intech Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intech Studio | Premium Custom Software Development",
    description:
      "World-class software house specializing in custom software development, business automation, POS systems, and WhatsApp commerce.",
    images: ["https://intechstudio.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary selection:text-white">
        <LanguageProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
