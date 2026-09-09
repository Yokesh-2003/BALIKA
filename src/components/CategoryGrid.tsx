"use client";

import React from "react";
import styles from "./CategoryGrid.module.css";

interface CategoryItem {
  id: string;
  title: string;
  image: string;
}

const categories: CategoryItem[] = [
  {
    id: "suspended",
    title: "SUSPENDED",
    image: "/suspended-light.jpg",
  },
  {
    id: "surface",
    title: "SURFACE",
    image: "/surface.jpg",
  },
  {
    id: "wall",
    title: "WALL",
    image: "/wall.jpg",
  },
  {
    id: "table",
    title: "TABLE",
    image: "/table.jpg",
  },
];

export default function CategoryGrid() {
  return (
    <section className={styles.categorySection} id="products" aria-label="Lighting Categories">
      <div className={styles.gridContainer}>
        {categories.map((item) => (
          <div
            key={item.id}
            className={styles.categoryCol}
          >
            {/* Background Category Image */}
            <img
              src={item.image}
              alt={item.title}
              className={styles.categoryImage}
              draggable={false}
              loading="lazy"
            />

            {/* Contrast Overlay */}
            <div className={styles.overlay} />

            {/* Category Title */}
            <div className={styles.titleWrapper}>
              <h2 className={styles.categoryTitle}>{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
