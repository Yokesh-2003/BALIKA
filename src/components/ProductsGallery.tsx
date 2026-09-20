"use client";

import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2, ExternalLink } from "lucide-react";
import styles from "./ProductsGallery.module.css";

export interface ProductItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  url?: string;
}

const partnerData: Record<number, { title: string; url: string }> = {
  1: { title: "Endo Lighting", url: "https://www.endo-lighting.com/" },
  2: { title: "Delta Light", url: "https://deltalight.com/en" },
  3: { title: "Alurays", url: "https://alurays.de/" },
  4: { title: "Light Forms", url: "https://www.lightforms.com/" },
  5: { title: "L'Azure", url: "https://lazurelighting.com/" },
  6: { title: "Aromas del Campo", url: "https://www.aromasdelcampo.com/product/" },
  7: { title: "Terzani", url: "https://www.terzani.com/en/home" },
  8: { title: "Vistosi", url: "https://vistosi.it/?lang=en" },
  9: { title: "FontanaArte", url: "https://www.fontanaarte.com/en/?srsltid=AU7gw4WJOfjb-0nSZOKVJrgIkp5uhKoribiAI3HHcHCZ7JG_UmwDPIFm" },
  10: { title: "Faro Barcelona", url: "https://faro.es/en/" },
  11: { title: "Contardi", url: "https://contardi-italia.com/" },
  12: { title: "Il Pezzo Mancante", url: "https://www.ilpezzomancante.com/lighting" },
  13: { title: "Fabbian", url: "https://www.fabbian.com/en/" },
  14: { title: "Barovier & Toso", url: "https://www.barovier.com/en" },
  15: { title: "Tom Rossau", url: "https://tomrossau.com/" },
  16: { title: "Milan Iluminación", url: "https://www.milan-iluminacion.com/en/collections/" },
  17: { title: "Cangini & Tucci", url: "https://www.canginietucci.com/" },
  18: { title: "Les Jardins", url: "https://www.lesjardinsliving.com/?srsltid=AU7gw4U6hRzcjjiRBiSyshYEsq_Ovs9J03ZKdxBOZyX6lmzHJFcEPZpj" },
  19: { title: "Leucos", url: "https://www.leucos.com/en/" },
  20: { title: "Bover", url: "https://bover.es/us/en/" },
  21: { title: "Esperia Luci", url: "https://www.esperialuci.com/en" },
  22: { title: "Hunat", url: "https://hunat.com/" },
  23: { title: "Gallotti&Radice", url: "https://www.gallottiradice.it/" },
  24: { title: "FontanaArte", url: "https://www.fontanaarte.com/" },
  25: { title: "Axolight", url: "https://www.axolight.it/en/" },
  26: { title: "Schonbek", url: "https://schonbek.com/" },
  27: { title: "Creative Cables", url: "https://www.creative-cables.com/" },
  28: { title: "AMARA Homes", url: "https://amaraprojects.in/" },
  29: { title: "Bengaluru International Airport", url: "https://www.bengaluruairport.com/" },
  30: { title: "CEEBROS", url: "https://ceebros.com/" },
  31: { title: "Appaswamy Real Estates", url: "https://appaswamy.com/" },
  32: { title: "VR Chennai", url: "https://vrchennai.com/" },
  33: { title: "Olympia", url: "https://www.olympiagroup.in/" },
  34: { title: "VGN", url: "https://www.vgn.in/" },
  35: { title: "WORKerz", url: "https://workerz.org/" },
  36: { title: "Chaitanya – District by Design", url: "https://chaitanyafoundations.com/" },
  37: { title: "The Residency Chennai", url: "https://www.theresidency.com/hotel-chennai/" },
  38: { title: "Radisson Salem", url: "https://www.radissonhotels.com/en-us/hotels/radisson-salem" },
  39: { title: "Ford India", url: "https://www.india.ford.com/" },
  40: { title: "Language", url: "https://www.languageshoes.com/" },
  41: { title: "The Residency", url: "https://www.theresidency.com/" },
  42: { title: "Lebara", url: "https://www.lebara.com/" },
  43: { title: "Woodbriar Group", url: "http://www.woodbriargroup.com/" },
  44: { title: "Sundram Fasteners Limited", url: "https://sundram.com/" },
  45: { title: "TVS Tyres", url: "https://shop.tvsmotor.com/collections/tyres" },
  46: { title: "Rane", url: "http://www.ranegroup.com/" },
  47: { title: "SKCL", url: "https://www.skcl.co.in/" },
  48: { title: "Cochin International School", url: "https://cochins.org/" },
  49: { title: "Sri Ganapathy Sachchidananda / Avadhoota Datta Peetham", url: "https://www.dattapeetham.org/" },
  50: { title: "Eaton", url: "https://www.eaton.com/in/en-us.html" },
  51: { title: "LMW – Lakshmi Machine Works", url: "https://www.lmwglobal.com/" },
  52: { title: "NRB Industrial Bearings", url: "https://nrbindustrialbearings.com/" },
  53: { title: "Tablets (India) Limited", url: "https://www.tabletsindia.com/" },
  54: { title: "Unilever", url: "https://www.unilever.com/" },
};

export const productItems: ProductItem[] = Array.from({ length: 54 }, (_, idx) => {
  const num = idx + 1;
  const numStr = String(num).padStart(2, "0");
  const partner = partnerData[num];
  return {
    id: num,
    src: `/products/${num}.png`,
    alt: partner ? `${partner.title} - Balika Partner` : `Balika Partner ${numStr}`,
    title: partner ? partner.title : `PARTNER ${numStr}`,
    url: partner ? partner.url : undefined,
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
        {/* Intro Showcase: Two Images on Left, Narrative Text on Right */}
        <div className={styles.introShowcase}>
          {/* Left: Two Staggered Images from Welcome to Balika */}
          <div className={styles.introImagesCol}>
            <div className={styles.introImageWrapperStaggered}>
              <img
                src="/about-1.jpg"
                alt="Balika modern suspended pendant luminaires"
                className={styles.introImg}
                loading="eager"
              />
            </div>
            <div className={styles.introImageWrapper}>
              <img
                src="/about-2.jpg"
                alt="Balika architectural dome luminaires in modern atrium"
                className={styles.introImg}
                loading="eager"
              />
            </div>
          </div>

          {/* Right: Narrative Content */}
          <div className={styles.introTextCol}>
            <div className={styles.introTagline}>
              <span className={styles.tagLine} />
              <span className={styles.tagText}>GLOBAL COLLABORATION</span>
            </div>

            <h2 className={styles.introHeading}>
              BALIKA WORKS CLOSELY WITH A GROUP OF LEADING COMPANIES IN THE LIGHTING INDUSTRY.
            </h2>

            <div className={styles.introDescription}>
              <p>
                The products represented are based on their unique beauty and non-contestable quality. Besides achieving maximum visual impact, these products are mainly made of natural materials and use the latest technology.
              </p>
              <p>
                They provide high lumen output and yet achieve excellent light quality. With minimal light degradation over the stated lifespan, these leading designs are recognized as outstanding energy-saving and eco-friendly luminaires.
              </p>
              <p className={styles.introInvite}>
                We invite you to explore our following international brand partners.
              </p>
            </div>
          </div>
        </div>

        {/* Section Transition Divider */}
        <div className={styles.introDivider} aria-hidden="true" />

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

        {/* Gallery Grid: All 54 Partner Images */}
        <div className={styles.galleryGrid}>
          {productItems.map((product, idx) => (
            <div
              key={product.id}
              className={styles.productCard}
              onClick={() => {
                if (product.url) {
                  window.open(product.url, "_blank", "noopener,noreferrer");
                } else {
                  openModal(idx);
                }
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  if (product.url) {
                    window.open(product.url, "_blank", "noopener,noreferrer");
                  } else {
                    openModal(idx);
                  }
                }
              }}
              aria-label={`Partner: ${product.title}`}
            >
              {/* Quick Preview Button */}
              <button
                type="button"
                className={styles.previewBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  openModal(idx);
                }}
                aria-label={`Enlarge ${product.title} logo`}
                title="View enlarged logo"
              >
                <Maximize2 size={16} />
              </button>

              {/* Logo Area */}
              <div className={styles.imageWrapper}>
                <img
                  src={product.src}
                  alt={product.alt}
                  className={styles.productImage}
                  loading={idx < 9 ? "eager" : "lazy"}
                  draggable={false}
                />
              </div>

              {/* Visit Button Below Image */}
              <div className={styles.cardActionArea}>
                {product.url ? (
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.visitButton}
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Visit ${product.title} official website`}
                  >
                    <span>Visit Website</span>
                    <ExternalLink size={14} className={styles.visitIcon} />
                  </a>
                ) : (
                  <span className={styles.comingSoonBadge}>
                    <span>Coming Soon</span>
                  </span>
                )}
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
              {activeProduct.title} &bull; {String(selectedIndex + 1).padStart(2, "0")} / {String(productItems.length).padStart(2, "0")}
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

          {/* Footer with Title, Visit Button, and Keyboard Hints */}
          <div className={styles.lightboxFooter} onClick={(e) => e.stopPropagation()}>
            <div className={styles.lightboxTitleWrapper}>
              <span className={styles.lightboxTitle}>{activeProduct.title}</span>
              {activeProduct.url && (
                <a
                  href={activeProduct.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.modalVisitBtn}
                >
                  <span>Visit Official Site</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
            <div className={styles.lightboxHints}>
              Press <kbd>Esc</kbd> to close &bull; Use <kbd>&larr;</kbd> <kbd>&rarr;</kbd> to navigate
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
