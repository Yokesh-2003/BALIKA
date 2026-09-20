import type { Metadata } from "next";
import ProductsGallery from "@/components/ProductsGallery";
import ClientProjects from "@/components/ClientProjects";
import ContactBanner from "@/components/ContactBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Products | Balika - Architectural Lighting Collection",
  description:
    "Explore Balika's architectural lighting products and installations. Bespoke luminaires, suspended fixtures, surface systems, and sculptural lighting for visionary spaces.",
  openGraph: {
    title: "Our Products | Balika - Architectural Lighting Collection",
    description:
      "Explore Balika's architectural lighting products and installations. High-performance, sculptural illumination for luxury interiors.",
  },
};

export default function ProductsPage() {
  return (
    <main>
      {/* 3-Column Image Grid featuring all 24 product photos with Lightbox modal */}
      <ProductsGallery />

      {/* Esteemed Clients & Project Installations Directory */}
      <ClientProjects />

      {/* Contact Banner */}
      <ContactBanner />

      {/* Site Footer */}
      <Footer />
    </main>
  );
}
