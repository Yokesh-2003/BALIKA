"use client";

import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import styles from "./ProjectsGallery.module.css";

export interface ProjectItem {
  id: number;
  src: string;
  alt: string;
  title: string;
}

const rawProjectFiles = [
  "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",
  "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg",
  "21.jpg", "23-1.jpg", "24-1.jpg", "25-1.jpg"
];

export const projectItems: ProjectItem[] = rawProjectFiles.map((file, idx) => {
  const num = String(idx + 1).padStart(2, "0");
  return {
    id: idx + 1,
    src: `/projects/${file}`,
    alt: `Balika Project ${num}`,
    title: `PROJECT ${num}`,
  };
});

export default function ProjectsGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Keyboard navigation & body scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") {
        setSelectedIndex(null);
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % projectItems.length : 0));
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev !== null ? (prev - 1 + projectItems.length) % projectItems.length : 0
        );
      }
    };

    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  const openModal = (index: number) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + projectItems.length) % projectItems.length : 0
    );
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % projectItems.length : 0
    );
  };

  const activeProject = selectedIndex !== null ? projectItems[selectedIndex] : null;

  return (
    <section className={styles.projectsSection} aria-label="Our Projects Gallery">
      <div className={styles.ambientGlow} aria-hidden="true" />
      <div className={styles.subtleGrid} aria-hidden="true" />

      <div className={styles.container}>
        {/* Header Title & Tagline */}
        <div className={styles.headerArea}>
          <div className={styles.taglineWrapper}>
            <span className={styles.tagLine} />
            <span className={styles.tagText}>ARCHITECTURAL PORTFOLIO</span>
            <span className={styles.tagLine} />
          </div>

          <h1 className={styles.mainTitle}>OUR PROJECTS</h1>

          <p className={styles.description}>
            Explore our portfolio of bespoke architectural lighting installations, from luxury residences and prestigious hospitality venues to dramatic corporate atriums.
          </p>
        </div>

        {/* Gallery Grid: 24 Project Cards */}
        <div className={styles.galleryGrid}>
          {projectItems.map((project, idx) => (
            <div
              key={project.id}
              className={styles.projectCard}
              onClick={() => openModal(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openModal(idx);
                }
              }}
              aria-label={`View ${project.title}`}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={project.src}
                  alt={project.alt}
                  className={styles.projectImage}
                  loading={idx < 6 ? "eager" : "lazy"}
                  draggable={false}
                />
              </div>

              {/* Hover Overlay */}
              <div className={styles.cardOverlay}>
                <div className={styles.expandIconWrapper} title="Open full image">
                  <Maximize2 size={18} />
                </div>

                <div className={styles.cardBottomInfo}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP / LIGHTBOX MODAL */}
      {activeProject && selectedIndex !== null && (
        <div
          className={styles.lightboxModal}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Image Preview Modal"
        >
          {/* Header with counter and close button */}
          <div className={styles.lightboxHeader} onClick={(e) => e.stopPropagation()}>
            <span className={styles.lightboxCounter}>
              PROJECT {String(selectedIndex + 1).padStart(2, "0")} / {String(projectItems.length).padStart(2, "0")}
            </span>

            <button
              className={styles.closeBtn}
              onClick={closeModal}
              aria-label="Close preview"
            >
              <X size={22} />
            </button>
          </div>

          {/* Body with Prev/Next buttons and Image */}
          <div className={styles.lightboxBody} onClick={(e) => e.stopPropagation()}>
            {/* Previous Button */}
            <button
              className={`${styles.navArrow} ${styles.prevArrow}`}
              onClick={prevImage}
              aria-label="Previous project image"
            >
              <ChevronLeft size={30} />
            </button>

            {/* Image Container */}
            <div className={styles.imageContainer}>
              <img
                key={activeProject.src}
                src={activeProject.src}
                alt={activeProject.alt}
                className={styles.fullImage}
                draggable={false}
              />
            </div>

            {/* Next Button */}
            <button
              className={`${styles.navArrow} ${styles.nextArrow}`}
              onClick={nextImage}
              aria-label="Next project image"
            >
              <ChevronRight size={30} />
            </button>
          </div>

          {/* Footer with Title and Keyboard Hints */}
          <div className={styles.lightboxFooter} onClick={(e) => e.stopPropagation()}>
            <div className={styles.lightboxTitle}>{activeProject.title}</div>
            <div className={styles.lightboxHints}>
              Press <kbd>Esc</kbd> to close &bull; Use <kbd>&larr;</kbd> <kbd>&rarr;</kbd> to browse
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
