"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./ProjectsSlider.module.css";

interface ProjectItem {
  id: number;
  image: string;
  alt: string;
}

const allProjects: ProjectItem[] = [
  { id: 1, image: "/1.png", alt: "Balika Lighting Project 1" },
  { id: 2, image: "/2.png", alt: "Balika Lighting Project 2" },
  { id: 3, image: "/3.png", alt: "Balika Lighting Project 3" },
  { id: 4, image: "/4.png", alt: "Balika Lighting Project 4" },
  { id: 5, image: "/5.png", alt: "Balika Lighting Project 5" },
  { id: 6, image: "/6.png", alt: "Balika Lighting Project 6" },
];

// Pair projects for 2-card desktop views
const projectPairs: ProjectItem[][] = [];
for (let i = 0; i < allProjects.length; i += 2) {
  projectPairs.push(allProjects.slice(i, i + 2));
}

export default function ProjectsSlider() {
  const [currentPage, setCurrentPage] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalPages = projectPairs.length;

  const prevSlide = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const nextSlide = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  // Lightbox keyboard and scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % allProjects.length : 0));
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + allProjects.length) % allProjects.length : 0
        );
      }
    };

    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex]);

  // Touch swipe support for slider
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const openLightbox = (projectIndex: number) => {
    setLightboxIndex(projectIndex);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + allProjects.length) % allProjects.length : 0
    );
  };

  const nextLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % allProjects.length : 0
    );
  };

  return (
    <section
      className={styles.projectsSection}
      id="projects"
      aria-label="Our Projects"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Allocated Cards Slider Viewport */}
      <div className={styles.sliderViewport}>
        <div
          className={styles.sliderTrack}
          style={{
            width: `${totalPages * 100}%`,
            transform: `translateX(-${currentPage * (100 / totalPages)}%)`,
          }}
        >
          {projectPairs.map((pair, pageIdx) => (
            <div
              key={pageIdx}
              className={styles.slidePair}
              style={{
                width: `${100 / totalPages}%`,
                flex: `0 0 ${100 / totalPages}%`,
              }}
            >
              {pair.map((project) => {
                const globalIndex = allProjects.findIndex((p) => p.id === project.id);
                return (
                  <div
                    key={project.id}
                    className={styles.projectCard}
                    onClick={() => openLightbox(globalIndex)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Open Project ${project.id} in popup`}
                    onKeyDown={(e) => e.key === "Enter" && openLightbox(globalIndex)}
                  >
                    <div className={styles.imageWrapper}>
                      <img
                        src={project.image}
                        alt={project.alt}
                        className={styles.projectImage}
                        draggable={false}
                        loading="lazy"
                      />
                    </div>

                    {/* Hover Overlay with Expand Indicator */}
                    <div className={styles.cardOverlay}>
                      <div className={styles.expandIconCircle}>
                        <Maximize2 size={22} strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className={styles.controlsContainer}>
        <button
          className={styles.controlBtn}
          onClick={prevSlide}
          aria-label="Previous Projects"
        >
          <ArrowLeft size={20} strokeWidth={2} />
        </button>

        <span className={styles.pageIndicator}>
          {currentPage + 1} / {totalPages}
        </span>

        <button
          className={styles.controlBtn}
          onClick={nextSlide}
          aria-label="Next Projects"
        >
          <ArrowRight size={20} strokeWidth={2} />
        </button>
      </div>

      {/* LIGHTBOX POPUP MODAL */}
      {lightboxIndex !== null && (
        <div
          className={styles.lightboxBackdrop}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            className={styles.lightboxCloseBtn}
            onClick={closeLightbox}
            aria-label="Close popup"
          >
            <X size={24} />
          </button>

          {/* Prev Button */}
          <button
            className={`${styles.lightboxNavBtn} ${styles.lightboxPrev}`}
            onClick={prevLightboxImage}
            aria-label="Previous image"
          >
            <ChevronLeft size={30} />
          </button>

          {/* Modal Content */}
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={allProjects[lightboxIndex].image}
              alt={allProjects[lightboxIndex].alt}
              className={styles.lightboxImage}
              draggable={false}
            />
            <span className={styles.lightboxCounter}>
              {lightboxIndex + 1} / {allProjects.length}
            </span>
          </div>

          {/* Next Button */}
          <button
            className={`${styles.lightboxNavBtn} ${styles.lightboxNext}`}
            onClick={nextLightboxImage}
            aria-label="Next image"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      )}
    </section>
  );
}
