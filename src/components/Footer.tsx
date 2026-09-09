"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Sun,
} from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact" aria-label="Site Footer">
      {/* Subtle decorative watermark pattern inspired by Photo 2 */}
      <div className={styles.decorativeWatermark} aria-hidden="true">
        <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="100" r="40" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="200" cy="100" r="70" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="200" cy="100" r="105" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="200" cy="100" r="145" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="200" cy="100" r="190" stroke="currentColor" strokeWidth="1.5" />
          <path d="M200 0 V200 M100 100 H300 M130 30 L270 170 M130 170 L270 30" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </div>

      <div className={styles.footerContainer}>
        {/* Column 1: Logo & Social Media Icons */}
        <div className={styles.brandCol}>
          <div className={styles.logoWrapper}>
            <img
              src="/logo-white.png"
              alt="Balika"
              className={styles.logoImage}
              draggable={false}
            />
          </div>

          <div className={styles.socialRow}>
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="Facebook"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/?text=Hello%20Balika%20Lighting"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.4 1.02 2.57.13.17 1.76 2.68 4.26 3.76.6.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Our Products */}
        <div className={styles.navCol}>
          <div className={styles.titleWrapper}>
            <h4 className={styles.colTitle}>Our Products</h4>
          </div>
          <ul className={styles.linkList}>
            <li>
              <Link href="#suspended" className={styles.navLink}>
                Suspended Lighting
              </Link>
            </li>
            <li>
              <Link href="#surface" className={styles.navLink}>
                Surface Mounted
              </Link>
            </li>
            <li>
              <Link href="#wall" className={styles.navLink}>
                Wall Luminaires
              </Link>
            </li>
            <li>
              <Link href="#table" className={styles.navLink}>
                Table & Accent
              </Link>
            </li>
            <li>
              <Link href="#projects" className={styles.navLink}>
                Architectural Track
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className={styles.navCol}>
          <div className={styles.titleWrapper}>
            <h4 className={styles.colTitle}>Quick Links</h4>
          </div>
          <ul className={styles.linkList}>
            <li>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className={styles.navLink}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="#products" className={styles.navLink}>
                Products
              </Link>
            </li>
            <li>
              <Link href="#projects" className={styles.navLink}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className={styles.navLink}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info (Photo 1 content styled with Photo 2 layout) */}
        <div className={styles.contactCol}>
          <div className={styles.titleWrapper}>
            <h4 className={styles.colTitle}>Contact Info</h4>
          </div>
          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <Mail size={18} className={styles.contactIcon} />
              <a href="mailto:info@balika.co.in" className={styles.contactLink}>
                info@balika.co.in
              </a>
            </div>

            <div className={styles.contactItem}>
              <MapPin size={18} className={styles.contactIcon} />
              <span>
                #8, Jothinagar Main road, S2 NEBULA, Ekattuthangal, Chennai - 600032.
              </span>
            </div>

            <div className={styles.contactItem}>
              <Phone size={18} className={styles.contactIcon} />
              <a href="tel:+914422251145" className={styles.contactLink}>
                +91 44 2225 1145
              </a>
            </div>

            <div className={styles.contactItem}>
              <Clock size={18} className={styles.contactIcon} />
              <span>Office Hours: 9:30 AM - 6:30 PM</span>
            </div>

            <div className={styles.contactItem}>
              <Sun size={18} className={styles.contactIcon} />
              <span>Sunday Holiday</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Powered by yuyonix */}
      <div className={styles.bottomBar}>
        <p className={styles.copyrightText}>
          Copyright © {new Date().getFullYear()} Balika, All Rights Reserved.{" "}
          <span className={styles.poweredBy}>Powered by yuyonix</span>
        </p>
      </div>
    </footer>
  );
}
