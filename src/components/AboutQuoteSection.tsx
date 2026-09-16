"use client";

import React from "react";
import styles from "./AboutQuoteSection.module.css";

export default function AboutQuoteSection() {
  return (
    <section className={styles.quoteSection} aria-label="Balika Philosophy and Vision">
      <div className={styles.ambientLight} aria-hidden="true" />
      <div className={styles.subtleGrid} aria-hidden="true" />

      <div className={styles.container}>
        {/* Double Red Comma / Quotation Marks Motif */}
        <div className={styles.quoteMarksWrapper} aria-hidden="true">
          <svg
            className={styles.quoteIcon}
            viewBox="0 0 76 64"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Left Quote */}
            <path d="M0 38.4V64H25.6V38.4H10.24C10.24 24.32 20.48 14.08 25.6 8.96L16.64 0C7.04 8 0 23.04 0 38.4Z" />
            {/* Right Quote */}
            <path d="M46 38.4V64H71.6V38.4H56.24C56.24 24.32 66.48 14.08 71.6 8.96L62.64 0C53.04 8 46 23.04 46 38.4Z" />
          </svg>
        </div>

        {/* Content */}
        <div className={styles.quoteContent}>
          <h1 className={styles.headline}>
            Creating spaces. Shaping experiences. <span className={styles.headlineSpan}>Through light.</span>
          </h1>

          <p className={styles.bodyText}>
            <strong>BALIKA</strong> brings together innovative lighting, refined design and technical expertise to create lighting solutions that elevate architecture. From precise architectural lighting to distinctive decorative pieces, our curated collection brings together light in all its forms to complement and enrich every space.
          </p>
        </div>

        {/* Decorative Divider */}
        <div className={styles.dividerLine} aria-hidden="true" />
      </div>
    </section>
  );
}
