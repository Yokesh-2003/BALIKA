"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./AboutSection.module.css";

const aboutImages = [
  { src: "/about-1.jpg", alt: "Balika modern interior track lighting" },
  { src: "/about-2.jpg", alt: "Balika architectural wall sconces" },
  { src: "/about-3.jpg", alt: "Balika suspended atrium pendant lights" },
  { src: "/about-4.jpg", alt: "Balika linear copper cluster luminaires" },
];

export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className={styles.aboutSection} id="about" aria-label="About Balika">
      {/* Unique Architectural Background Accents */}
      <div className={styles.ambientGlow} aria-hidden="true" />
      <div className={styles.blueprintGrid} aria-hidden="true" />
      
      {/* Decorative Architectural Luminaire Wireframe (Right Side Motif) */}
      <div className={styles.luminaireMotif} aria-hidden="true">
        <svg viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ceiling canopy */}
          <rect x="180" y="0" width="80" height="12" rx="4" fill="#c49a6c" opacity="0.4" />
          {/* Suspension wires */}
          <line x1="200" y1="12" x2="160" y2="280" stroke="#b08d57" strokeWidth="1.5" opacity="0.35" />
          <line x1="240" y1="12" x2="280" y2="280" stroke="#b08d57" strokeWidth="1.5" opacity="0.35" />
          <line x1="220" y1="12" x2="220" y2="400" stroke="#b08d57" strokeWidth="1.5" opacity="0.3" />
          {/* Upper ring fixture */}
          <ellipse cx="220" cy="280" rx="90" ry="24" stroke="#c49a6c" strokeWidth="3" opacity="0.5" />
          <ellipse cx="220" cy="280" rx="86" ry="22" stroke="#dfba8a" strokeWidth="1" opacity="0.6" />
          {/* Middle arched canopy */}
          <path d="M150 280 Q220 180 290 280" stroke="#b08d57" strokeWidth="2" opacity="0.4" fill="none" />
          {/* Lower concentric halo ring */}
          <ellipse cx="220" cy="420" rx="140" ry="34" stroke="#c49a6c" strokeWidth="3.5" opacity="0.45" />
          <ellipse cx="220" cy="420" rx="135" ry="32" stroke="#dfba8a" strokeWidth="1.2" opacity="0.65" />
          {/* Warm radiating light gradient circles */}
          <circle cx="220" cy="280" r="60" fill="url(#warmGlow)" opacity="0.18" />
          <circle cx="220" cy="420" r="90" fill="url(#warmGlow)" opacity="0.14" />
          <defs>
            <radialGradient id="warmGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f5d7a6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#c49a6c" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className={styles.contentContainer}>
        {/* Left: 2x2 Image Showcase Grid */}
        <div className={styles.imageGrid}>
          {aboutImages.map((img, idx) => (
            <div key={idx} className={styles.imageCard}>
              <img
                src={img.src}
                alt={img.alt}
                className={styles.image}
                loading="lazy"
                draggable={false}
              />
              <div className={styles.imageOverlay} />
            </div>
          ))}
        </div>

        {/* Right: Narrative Story */}
        <div className={styles.textContainer}>
          <div className={styles.headerTag}>
            <span className={styles.tagLine} />
            <span className={styles.tagText}>ABOUT OUR PHILOSOPHY</span>
          </div>

          <h2 className={styles.mainTitle}>WELCOME TO BALIKA</h2>

          <h3 className={styles.subHeadline}>
            OUR COMPANY COMPRISES A TEAM OF HIGHLY DEDICATED & ENERGETIC INDIVIDUALS WHO FORM THE BACKBONE OF BALIKA.
          </h3>

          <div className={styles.bodyParagraphs}>
            <p className={styles.paragraph}>
              With their strong work ethics, and methodical way of working, they have aided in taking BALIKA to greater heights.
            </p>
            <p className={styles.paragraph}>
              We&apos;re very selective when it comes to choosing the BRANDS we work with and represent.
            </p>
            <p className={styles.paragraph}>
              Our channel partners come as a blessing as they continue to support us in our endeavors.
            </p>

            {isExpanded && (
              <div className={styles.expandedContent}>
                <p className={styles.paragraph}>
                  Balika curates state-of-the-art illumination systems from prestigious international manufacturers, bridging the gap between imaginative architectural vision and flawless technical execution.
                </p>
                <p className={styles.paragraph}>
                  From bespoke double-height atrium chandeliers to minimalist commercial tracks and museum-grade glare-free optics, every luminaire is hand-picked for durability, aesthetic purity, and light comfort.
                </p>
              </div>
            )}
          </div>

          <div className={styles.actionRow}>
            <button
              className={styles.readMoreBtn}
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
            >
              <span>{isExpanded ? "SHOW LESS" : "READ MORE"}</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`${styles.btnIcon} ${isExpanded ? styles.iconRotated : ""}`}
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </button>

            <Link href="#contact" className={styles.secondaryLink}>
              Get In Touch &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
