"use client";

import React from "react";
import Link from "next/link";
import styles from "./ContactBanner.module.css";

export default function ContactBanner() {
  return (
    <section className={styles.bannerSection} aria-label="Get in Touch Call to Action">
      <div className={styles.bannerContainer}>
        {/* Left: Heading & Description */}
        <div className={styles.textContent}>
          <h2 className={styles.title}>GET IN TOUCH</h2>
          <p className={styles.description}>
            If you have any idea or concepts to enhance your space, we would like to hear from you.
            <br />
            We offer virtual consultations by request.
          </p>
        </div>

        {/* Right: Contact Button */}
        <div className={styles.actionWrapper}>
          <Link href="#contact" className={styles.contactBtn}>
            CONTACT US
          </Link>
        </div>
      </div>
    </section>
  );
}
