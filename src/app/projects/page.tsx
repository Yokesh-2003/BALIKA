import type { Metadata } from "next";
import ProjectsGallery from "@/components/ProjectsGallery";
import ContactBanner from "@/components/ContactBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Projects | Balika - Architectural Lighting Portfolio",
  description:
    "Explore Balika's architectural lighting installations across luxury residential, commercial, and hospitality spaces. High-performance, sculptural illumination.",
  openGraph: {
    title: "Our Projects | Balika - Architectural Lighting",
    description:
      "Explore Balika's architectural lighting portfolio featuring bespoke illumination systems, linear fixtures, chandeliers, and sculptural lighting.",
  },
};

export default function ProjectsPage() {
  return (
    <main>
      {/* All Project Images in Gallery Grid with Fullscreen Popup Modal */}
      <ProjectsGallery />

      {/* Contact Call-To-Action Banner */}
      <ContactBanner />

      {/* Modern White Footer with Dark Logo */}
      <Footer />
    </main>
  );
}
