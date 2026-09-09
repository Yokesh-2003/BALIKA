import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111",
};

const siteUrl = "https://balika-eight.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Balika | Inspiration to Creative Minds - Architectural Lighting",
  description:
    "Balika delivers modern architectural lighting, bespoke chandeliers, and sculptural luminaires crafted for visionary spaces and creative minds.",
  keywords: [
    "balika",
    "architectural lighting",
    "modern lighting",
    "interior chandeliers",
    "sculptural lighting",
    "commercial lighting",
  ],
  openGraph: {
    title: "Balika | Architectural Lighting",
    description: "Inspiration to Creative Minds - Bespoke Architectural Illumination",
    url: siteUrl,
    siteName: "Balika",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Balika Architectural Lighting",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Balika | Architectural Lighting",
    description: "Inspiration to Creative Minds - Bespoke Architectural Illumination",
    images: [`${siteUrl}/og-image.jpg`],
  },
  icons: {
    icon: [
      { url: "/logo-favicon.png" },
      { url: "/icon.png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Direct OpenGraph tags for WhatsApp & Social Media Preview Crawlers */}
        <meta property="og:title" content="Balika | Architectural Lighting" />
        <meta
          property="og:description"
          content="Inspiration to Creative Minds - Bespoke Architectural Illumination"
        />
        <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
        <meta property="og:image:secure_url" content={`${siteUrl}/og-image.jpg`} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
      </head>
      <body>
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
