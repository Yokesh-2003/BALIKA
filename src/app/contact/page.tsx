import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Balika - Architectural Lighting",
  description:
    "Get in touch with Balika for architectural lighting consultations, bespoke luminaires, and custom project solutions. Located in Ekattuthangal, Chennai.",
  openGraph: {
    title: "Contact Us | Balika - Architectural Lighting",
    description:
      "Connect with Balika's lighting specialists for bespoke architectural, residential, and commercial illumination solutions.",
  },
};

export default function ContactPage() {
  return (
    <main>
      {/* Contact Form, Address, Info, and Google Map */}
      <ContactSection />

      {/* Modern White Footer */}
      <Footer />
    </main>
  );
}
