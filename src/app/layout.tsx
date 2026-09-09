import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111",
};

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
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
    url: "https://balika.com",
    siteName: "Balika",
    images: [
      {
        url: "/slider1.jpg",
        width: 1600,
        height: 599,
        alt: "Balika Architectural Lighting",
      },
    ],
    locale: "en_US",
    type: "website",
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
      </head>
      <body>
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
