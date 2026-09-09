"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./PreviewSection.module.css";

const categories = [
  {
    title: "Suspended Wire Systems",
    tag: "Minimalist Geometry",
    desc: "Sculpted mesh forms creating intricate light and shadow dynamics.",
    image: "/slider1.jpg",
  },
  {
    title: "Cascade Chandeliers",
    tag: "Grand Atriums",
    desc: "Delicate golden chain cascades illuminating expansive double-height volumes.",
    image: "/slider2.jpg",
  },
  {
    title: "Linear Cylindrical Glass",
    tag: "Refined Living",
    desc: "Crystal glass precision engineered for warm, glare-free dining and meeting spaces.",
    image: "/slider3.jpg",
  },
  {
    title: "Halo Rings & Wall Discs",
    tag: "Sculptural Accents",
    desc: "Harmonious bronze concentric rings delivering indirect architectural glow.",
    image: "/slider4.jpg",
  },
];

export default function PreviewSection() {
  return (
    <section className={styles.previewSection} id="collections">
      <div className={styles.sectionHeader}>
        <span className={styles.categoryTag}>Architectural Luminaires</span>
        <h2 className={styles.sectionTitle}>Crafted For Extraordinary Spaces</h2>
        <p className={styles.sectionDesc}>
          Explore Balika’s comprehensive range of lighting systems designed to harmonize with visionary interior architecture.
        </p>
      </div>

      <div className={styles.cardsGrid}>
        {categories.map((cat, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src={cat.image}
                alt={cat.title}
                className={styles.cardImg}
              />
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardTag}>{cat.tag}</span>
              <h3 className={styles.cardTitle}>{cat.title}</h3>
              <p className={styles.cardText}>{cat.desc}</p>
              <Link href="#contact" className={styles.cardLink}>
                <span>View Collection</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Atmospheric Material Palette preview as in flairillume screenshot */}
      <div className={styles.swatchesBanner}>
        <div className={styles.swatch} style={{ backgroundColor: "#2b4c48" }} title="Emerald Slate" />
        <div className={styles.swatch} style={{ backgroundColor: "#41655e" }} title="Nordic Forest" />
        <div className={styles.swatch} style={{ backgroundColor: "#b59975" }} title="Warm Champagne" />
        <div className={styles.swatch} style={{ backgroundColor: "#c5ab8d" }} title="Brushed Brass" />
        <div className={styles.swatch} style={{ backgroundColor: "#9c8069" }} title="Muted Terracotta" />
        <div className={styles.swatch} style={{ backgroundColor: "#2a2a2c" }} title="Obsidian Matte" />
      </div>
    </section>
  );
}
