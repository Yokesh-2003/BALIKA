"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Architectural Lighting", href: "#suspended" },
    { label: "Decorative Luminaires", href: "#surface" },
    { label: "Commercial & Office", href: "#wall" },
    { label: "Projects & Portfolio", href: "#projects" },
    { label: "About Balika", href: "#about" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
        id="main-navbar"
      >
        {/* Left: Hamburger Menu */}
        <button
          className={styles.menuBtn}
          onClick={() => setIsDrawerOpen(true)}
          aria-label="Toggle navigation menu"
          id="nav-menu-toggle"
        >
          <div className={styles.menuLines}>
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
          </div>
          <span className={styles.menuLabel}>MENU</span>
        </button>

        {/* Center: Brand Logo */}
        <Link href="/" className={styles.logoLink} aria-label="Balika Home">
          <div className={styles.logoWrapper}>
            <img
              src="/logo-white.png"
              alt="balika"
              className={`${styles.logoImage} ${!isScrolled ? styles.visible : ""}`}
              id="brand-logo-white"
            />
            <img
              src="/logo-dark.png"
              alt="balika"
              className={`${styles.logoImage} ${isScrolled ? styles.visible : ""}`}
              id="brand-logo-dark"
            />
          </div>
        </Link>
      </header>

      {/* Drawer Overlay */}
      <div
        className={`${styles.drawerBackdrop} ${isDrawerOpen ? styles.open : ""}`}
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Side Menu Drawer */}
      <aside
        className={`${styles.drawer} ${isDrawerOpen ? styles.open : ""}`}
        aria-label="Mobile Navigation"
      >
        <div className={styles.drawerHeader}>
          <img
            src="/logo-dark.png"
            alt="balika"
            className={styles.drawerLogo}
          />
          <button
            className={styles.closeBtn}
            onClick={() => setIsDrawerOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className={styles.drawerNav}>
          {navLinks.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={styles.drawerLink}
              onClick={() => setIsDrawerOpen(false)}
            >
              <span>{item.label}</span>
              <ArrowRight size={18} opacity={0.6} />
            </Link>
          ))}
        </nav>

        <div className={styles.drawerFooter}>
          <p className={styles.drawerContact}>Balika Architectural Lighting</p>
          <p>Inspiring creative minds with state-of-the-art illumination.</p>
          <p>© {new Date().getFullYear()} Balika. All rights reserved.</p>
        </div>
      </aside>
    </>
  );
}
