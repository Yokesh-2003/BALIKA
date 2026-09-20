"use client";

import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import styles from "./ProductsGallery.module.css";

export interface ProductItem {
  id: number;
  src: string;
  alt: string;
  title: string;
}

export const productItems: ProductItem[] = Array.from({ length: 54 }, (_, idx) => {
  const num = idx + 1;
  const numStr = String(num).padStart(2, "0");
  return {
    id: num,
    src: `/products/${num}.png`,
    alt: `Balika Product ${numStr}`,
    title: `PRODUCT ${numStr}`,
  };
});

export default function ProductsGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Keyboard navigation & body scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") {
        setSelectedIndex(null);
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % productItems.length : 0));
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev !== null ? (prev - 1 + productItems.length) % productItems.length : 0
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
      prev !== null ? (prev - 1 + productItems.length) % productItems.length : 0
    );
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % productItems.length : 0
    );
  };

  const activeProduct = selectedIndex !== null ? productItems[selectedIndex] : null;

  return (
    <section className={styles.productsSection} aria-label="Balika Products Collection">
      {/* Background Decorative Gradient Elements */}
      <div className={styles.ambientGlow} aria-hidden="true" />
      <div className={styles.subtleGrid} aria-hidden="true" />

      <div className={styles.container}>
        {/* Page Header: Title "OUR PARTNERS" */}
        <div className={styles.headerArea}>
          <div className={styles.taglineWrapper}>
            <span className={styles.tagLine} />
            <span className={styles.tagText}>CURATED ARCHITECTURAL COLLECTION</span>
            <span className={styles.tagLine} />
          </div>

          <h1 className={styles.mainTitle}>OUR PARTNERS</h1>

          <p className={styles.description}>
            Discover our curated portfolio of world-class architectural luminaires, premium designer fixtures, and bespoke lighting systems engineered for exceptional spaces.
          </p>
        </div>

        {/* Gallery Grid: All 54 Product Images */}
        <div className={styles.galleryGrid}>
          {productItems.map((product, idx) => (
            <div
              key={product.id}
              className={styles.productCard}
              onClick={() => openModal(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openModal(idx);
                }
              }}
              aria-label={`View ${product.title}`}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={product.src}
                  alt={product.alt}
                  className={styles.productImage}
                  loading={idx < 9 ? "eager" : "lazy"}
                  draggable={false}
                />
              </div>

              {/* Hover Overlay with Expand Icon */}
              <div className={styles.cardOverlay}>
                <div className={styles.expandIconWrapper} title="View full image">
                  <Maximize2 size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP / LIGHTBOX MODAL */}
      {activeProduct && selectedIndex !== null && (
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
              PRODUCT {String(selectedIndex + 1).padStart(2, "0")} / {String(productItems.length).padStart(2, "0")}
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
              aria-label="Previous product image"
            >
              <ChevronLeft size={30} />
            </button>

            {/* Image Container */}
            <div className={styles.imageContainer}>
              <div className={styles.modalImageCard}>
                <img
                  key={activeProduct.src}
                  src={activeProduct.src}
                  alt={activeProduct.alt}
                  className={styles.fullImage}
                  draggable={false}
                />
              </div>
            </div>

            {/* Next Button */}
            <button
              className={`${styles.navArrow} ${styles.nextArrow}`}
              onClick={nextImage}
              aria-label="Next product image"
            >
              <ChevronRight size={30} />
            </button>
          </div>

          {/* Footer with Title and Keyboard Hints */}
          <div className={styles.lightboxFooter} onClick={(e) => e.stopPropagation()}>
            <div className={styles.lightboxTitle}>{activeProduct.title}</div>
            <div className={styles.lightboxHints}>
              Press <kbd>Esc</kbd> to close &bull; Use <kbd>&larr;</kbd> <kbd>&rarr;</kbd> to navigate
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
