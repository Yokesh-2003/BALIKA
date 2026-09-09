import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import CategoryGrid from "@/components/CategoryGrid";
import BrandGrid from "@/components/BrandGrid";
import ProjectsSlider from "@/components/ProjectsSlider";
import ContactBanner from "@/components/ContactBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      {/* Primary Hero Banner */}
      <HeroSlider />

      {/* Welcome to Balika - About Section */}
      <AboutSection />

      {/* 4 Category Showcase Columns in same line (Suspended, Surface, Wall, Table) */}
      <CategoryGrid />

      {/* Infinite Brand Marquee Banner */}
      <BrandGrid />

      {/* Our Projects Slider with images 1-6 */}
      <ProjectsSlider />

      {/* Get In Touch Call-To-Action Banner */}
      <ContactBanner />

      {/* Modern Dark Multi-Column Footer */}
      <Footer />
    </main>
  );
}
