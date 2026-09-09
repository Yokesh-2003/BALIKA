"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "HOME", href: "#", id: "home" },
  { label: "ABOUT US", href: "#about", id: "about" },
  { label: "PRODUCTS", href: "#products", id: "products" },
  { label: "PROJECTS", href: "#projects", id: "projects" },
  { label: "CONTACT US", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPos = window.scrollY + 220;
      const aboutEl = document.getElementById("about");
      const productsEl = document.getElementById("products");
      const projectsEl = document.getElementById("projects");
      const contactEl = document.getElementById("contact");

      if (contactEl && scrollPos >= contactEl.offsetTop) {
        setActiveItem("contact");
      } else if (projectsEl && scrollPos >= projectsEl.offsetTop) {
        setActiveItem("projects");
      } else if (productsEl && scrollPos >= productsEl.offsetTop) {
        setActiveItem("products");
      } else if (aboutEl && scrollPos >= aboutEl.offsetTop) {
        setActiveItem("about");
      } else {
        setActiveItem("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock scroll when mobile drawer is open
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

  // Handle escape key for drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    setActiveItem(id);
    setIsDrawerOpen(false);
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
        id="main-navbar"
      >
        {/* Mobile Left: Hamburger Menu Button (hidden on PC) */}
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

        {/* Brand Logo (Left on PC, Centered on Mobile) */}
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

        {/* PC Desktop Navigation Links (Outside on PC, hidden on Mobile) */}
        <nav className={styles.desktopNav} aria-label="Desktop Navigation">
          {navLinks.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href, item.id)}
              className={`${styles.desktopNavLink} ${activeItem === item.id ? styles.active : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`${styles.drawerBackdrop} ${isDrawerOpen ? styles.open : ""}`}
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Mobile Side Menu Drawer (Kept as it is for mobile) */}
      <aside
        className={`${styles.drawer} ${isDrawerOpen ? styles.open : ""}`}
        aria-label="Mobile Navigation"
      >
        <div className={styles.drawerHeader}>
          <button
            className={styles.closeBtn}
            onClick={() => setIsDrawerOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className={styles.drawerNav}>
          {navLinks.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={styles.drawerLink}
              onClick={(e) => handleLinkClick(e, item.href, item.id)}
            >
              <span>{item.label}</span>
              <ArrowRight size={18} opacity={0.6} />
            </Link>
          ))}
        </nav>

        <div className={styles.drawerFooter}>
          <p>© {new Date().getFullYear()} Balika. All rights reserved. Powered by yuyonix</p>
        </div>
      </aside>
    </>
  );
}
