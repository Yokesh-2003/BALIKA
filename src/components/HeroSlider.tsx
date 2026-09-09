"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./HeroSlider.module.css";

interface SlideData {
  id: number;
  image: string;
  alt: string;
  tagline: string;
  title: string;
  subtitle: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    image: "/slider1.jpg",
    alt: "Balika Contemporary Wire Pendant Lighting",
    tagline: "Architectural Lighting Studio",
    title: "INSPIRATION TO CREATIVE MINDS",
    subtitle: "All the beauty of life is made up of light and shadow.",
  },
  {
    id: 2,
    image: "/slider2.jpg",
    alt: "Balika Grand Suspended Chandelier Installation",
    tagline: "Custom Architectural Projects",
    title: "INSPIRATION TO CREATIVE MINDS",
    subtitle: "Bespoke suspended installations designed for distinguished spaces.",
  },
  {
    id: 3,
    image: "/slider3.jpg",
    alt: "Balika Cylindrical Glass Pendant Lights",
    tagline: "Minimalist Living & Warmth",
    title: "INSPIRATION TO CREATIVE MINDS",
    subtitle: "Linear precision and ambient warmth engineered to perfection.",
  },
  {
    id: 4,
    image: "/slider4.jpg",
    alt: "Balika Circular Halo Sculptural Luminaires",
    tagline: "Sculptural Lighting Art",
    title: "INSPIRATION TO CREATIVE MINDS",
    subtitle: "Transforming modern luxury interiors with geometric brilliance.",
  },
];

export default function HeroSlider() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Detect mobile view (<= 768px)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Exclude slider1.jpg on mobile alone
  const activeSlides = isMobile ? slides.filter((s) => s.id !== 1) : slides;
  const safeIndex = currentIndex % (activeSlides.length || 1);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % activeSlides.length);
  }, [activeSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + activeSlides.length) % activeSlides.length);
  }, [activeSlides.length]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
  };

  // Autoplay interval
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5500);

    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (diff > minSwipeDistance) {
      nextSlide();
    } else if (diff < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className={styles.heroContainer}
      aria-label="Balika Hero Showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      id="hero-banner"
    >
      {/* Slides */}
      <div className={styles.slidesWrapper}>
        {activeSlides.map((slide, idx) => {
          const isActive = idx === safeIndex;
          return (
            <div
              key={slide.id}
              className={`${styles.slide} ${isActive ? styles.active : ""}`}
              aria-hidden={!isActive}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className={styles.slideImage}
                loading={idx === 0 ? "eager" : "lazy"}
                draggable={false}
              />
            </div>
          );
        })}
      </div>

      {/* Atmospheric Contrast Overlays */}
      <div className={styles.overlayGradients} />

      {/* Side Navigation Arrows (Desktop) */}
      <button
        className={`${styles.navArrow} ${styles.arrowPrev}`}
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        className={`${styles.navArrow} ${styles.arrowNext}`}
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Bottom Center Dots with Ring Active State */}
      <div
        className={styles.paginationContainer}
        role="tablist"
        aria-label="Slider Pagination"
      >
        {activeSlides.map((slide, idx) => {
          const isActive = idx === safeIndex;
          return (
            <button
              key={slide.id}
              className={`${styles.dotWrapper} ${isActive ? styles.active : ""}`}
              onClick={() => goToSlide(idx)}
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to slide ${idx + 1}: ${slide.tagline}`}
            >
              {isActive ? (
                <div className={styles.dotRing}>
                  <span className={styles.innerDot} />
                </div>
              ) : (
                <span className={styles.dot} />
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
