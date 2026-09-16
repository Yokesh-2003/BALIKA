import type { Metadata } from "next";
import AboutQuoteSection from "@/components/AboutQuoteSection";
import AboutSection from "@/components/AboutSection";
import ContactBanner from "@/components/ContactBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Balika - Architectural & Decorative Lighting",
  description:
    "Creating spaces. Shaping experiences. Through light. BALIKA brings together innovative lighting, refined design, and technical expertise to elevate architecture.",
  openGraph: {
    title: "About Us | Balika - Architectural Lighting",
    description:
      "Creating spaces. Shaping experiences. Through light. Discover Balika's philosophy, curated collections, and architectural lighting solutions.",
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* 1. Comma / Quote Vision Section */}
      <AboutQuoteSection />

      {/* 2. Welcome to Balika - About Section from Home */}
      <AboutSection />

      {/* 3. Contact Banner */}
      <ContactBanner />

      {/* 4. Footer with white background */}
      <Footer />
    </main>
  );
}
