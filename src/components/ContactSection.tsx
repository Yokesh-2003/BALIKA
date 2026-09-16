"use client";

import React, { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className={styles.contactSection} aria-label="Contact Balika">
      <div className={styles.ambientGlow} aria-hidden="true" />
      <div className={styles.subtleGrid} aria-hidden="true" />

      <div className={styles.container}>
        {/* LEFT COLUMN: GET IN TOUCH & ADDRESS & GOOGLE MAP */}
        <div className={styles.infoColumn}>
          <h2 className={styles.infoTitle}>Get in Touch</h2>

          <div className={styles.infoList}>
            {/* Address */}
            <div className={styles.infoItem}>
              <div className={styles.infoIconWrapper}>
                <MapPin size={22} />
              </div>
              <div className={styles.infoContent}>
                <span className={styles.infoLabel}>Address : </span>
                #8, Jothinagar Main road, S2 NEBULA, Ekattuthangal, Chennai-600032.
              </div>
            </div>

            {/* Email */}
            <div className={styles.infoItem}>
              <div className={styles.infoIconWrapper}>
                <Mail size={22} />
              </div>
              <div className={styles.infoContent}>
                <a href="mailto:info@balika.co.in" className={styles.infoLink}>
                  info@balika.co.in
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className={styles.infoItem}>
              <div className={styles.infoIconWrapper}>
                <Phone size={22} />
              </div>
              <div className={styles.infoContent}>
                <a href="tel:+914422251145" className={styles.infoLink}>
                  +91 44 2225 1145
                </a>
              </div>
            </div>
          </div>

          {/* GOOGLE MAP EMBED BELOW INFO AREA */}
          <div className={styles.mapWrapper}>
            <iframe
              title="Balika Office Location"
              src="https://maps.google.com/maps?q=8%2C+Jothinagar+Main+road%2C+Ekattuthangal%2C+Chennai+-+600032&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className={styles.mapIframe}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: CONTACT FORM */}
        <div className={styles.formColumn}>
          <div className={styles.formTitleWrapper}>
            <h1 className={styles.formTitle}>CONTACT</h1>
          </div>

          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.inputGrid}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className={styles.inputField}
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={styles.inputField}
                required
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className={styles.inputField}
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className={styles.inputField}
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className={styles.textareaField}
              rows={6}
              required
            />

            <button type="submit" className={styles.submitBtn}>
              SEND MESSAGE
            </button>

            {isSubmitted && (
              <div className={styles.successMessage} role="alert">
                Thank you for getting in touch! We have received your message and will respond shortly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
