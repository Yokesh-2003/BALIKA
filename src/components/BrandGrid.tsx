"use client";

import React from "react";
import styles from "./BrandGrid.module.css";

const baseBrands = [
  {
    id: "xal",
    image: "/pro-1.png",
    alt: "XAL Lighting",
  },
  {
    id: "wever-ducre",
    image: "/pro-2.png",
    alt: "Wever & Ducre Lighting",
  },
  {
    id: "axolight",
    image: "/pro-3.png",
    alt: "Axolight",
  },
  {
    id: "unilamp",
    image: "/pro-4.png",
    alt: "Unilamp",
  },
];

// Repeat brands to build seamless infinite scrolling track
const marqueeBrands = [
  ...baseBrands,
  ...baseBrands,
  ...baseBrands,
  ...baseBrands,
  ...baseBrands,
  ...baseBrands,
];

export default function BrandGrid() {
  return (
    <section className={styles.brandSection} aria-label="Partner Brands">
      <div className={styles.marqueeTrack}>
        {marqueeBrands.map((brand, idx) => (
          <div key={`${brand.id}-${idx}`} className={styles.brandItem}>
            <div className={styles.imageWrapper}>
              <img
                src={brand.image}
                alt={brand.alt}
                className={styles.brandImg}
                draggable={false}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
