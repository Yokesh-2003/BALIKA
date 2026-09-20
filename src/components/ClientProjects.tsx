"use client";

import React, { useState, useMemo } from "react";
import { 
  Home, 
  Hotel, 
  GraduationCap, 
  Briefcase, 
  ShoppingBag, 
  Sparkles,
  Layers
} from "lucide-react";
import styles from "./ClientProjects.module.css";

interface ProjectCategory {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  items: string[];
}

const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    id: "residences",
    title: "High-End Residences",
    badge: "Private Estates & Luxury Penthouses",
    subtitle: "Distinguished private residences, celebrity villas, penthouses, and bespoke architectural homes",
    icon: Home,
    items: [
      "VGN Anusha Residence",
      "Ampa Palaniappan Residence, Chennai",
      "Pothys Residence, Boat Club Road, Chennai",
      "Kanish Residence, Anna Nagar",
      "Venkat Villa, Erode",
      "Sathya Moorthy Residence, Nungambakkam",
      "Tarapore Residence, Chetpet",
      "Virenkar Residence, Goa",
      "Tafe’s Residence, Chennai",
      "Sunil Reddy Residence, Uthandi, Chennai",
      "Shell House, Coimbatore",
      "King Fisher Towers – Vaishnavi Builder’s Residence, Bangalore",
      "Vaishnavi Terrace – Penthouse, Bangalore",
      "Aldous Residence, OMR",
      "Priya Anand Residence, Chennai",
      "Narasus Coffee – Srudeep Villa, Salem",
      "LMW Owner’s Residence, Coimbatore",
      "Wood Briar Group Owners’ Residence",
      "Kumaresh Residence, Namakkal",
      "Dr Kumaresan Residence, Madurai",
      "Dr Ramesh Residence, Kattuputhur",
      "Sangeetha & Rajendran Residence, OMR",
      "PR Sundar Residence, Azure",
      "Arya Residence, Azure",
      "Senthil Residence, TVH Quadrant",
      "Ramaniyam Residence, Chennai",
      "Charles Martin Residence, Chennai",
      "Jaganathan, Kodaikanal",
      "Dr. Asif Baig Residence, Chennai",
      "Actor Ajith, Injambakkam Residence",
      "Actor Ajith, Thiruvanmiyur Residence",
      "GV Prakash Residence",
      "Actor Jayam Ravi Residence, Chennai",
      "TVH Quadrant",
      "Music Director Anirudh Residence",
      "Trisha Residence",
      "Renuka Praveen Residence",
      "Mrs Meera Chari Residence – PSG Chennai",
      "Producer Mahendran Residence, Olympia Goodwood",
      "Nalli Residence, Olympia Goodwood",
      "Ms Malini Parthasarathy – The Hindu Residence",
      "Vishal Jain Residence, Boat Club Road, Chennai",
      "Sunil Ralan Residence",
      "Chandini Residence",
      "A.L. Vijay Residence",
      "RK Salai – Mr Murali Residence",
    ],
  },
  {
    id: "hospitality",
    title: "Hospitality",
    badge: "5-Star Hotels & Leisure Destinations",
    subtitle: "World-class hotels, heritage retreats, luxury resorts, and high-profile hospitality suites",
    icon: Hotel,
    items: [
      "The Residency Towers, Chennai",
      "The Residency Towers, Coimbatore",
      "The Residency, Karur",
      "The Residency Annex",
      "The Residency Signature",
      "Pullman, Chennai",
      "Radisson Salem",
      "RKR – The Residency, Pondicherry",
      "Poppy Towers, Coimbatore",
      "Midnight Sun, Chennai",
      "GRT Radisson, Chennai",
      "Elba Trading Company, Chennai",
    ],
  },
  {
    id: "institutes",
    title: "Institutes",
    badge: "Academic Campuses & Research",
    subtitle: "International schools, educational institutions, wellness centres, and research academies",
    icon: GraduationCap,
    items: [
      "TI School, Chennai",
      "Shradha Childrens Academy",
      "Alpha School",
      "CIK International School, Cochin",
      "SIB – The Quest",
      "Akshar Arbol International School",
      "Auroville Institute of Integral Health, Auroville",
      "GRT School, Ashok Nagar",
      "Zion School, Tambaram",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Projects",
    badge: "Corporate Headquarters & Campuses",
    subtitle: "Leading corporate headquarters, modern coworking hubs, industrial tech centers, and architectural façades",
    icon: Briefcase,
    items: [
      "Lakshmi Machine Works",
      "Chennai Super Kings, Adyar",
      "Metallic Bellows Corporate Office",
      "NILPETER Corporate Office, Chennai",
      "JCT Group of Companies",
      "Lebara Digital, Chennai",
      "TVS Tyres – TVS Chakra Corporate Office",
      "Sundaram Fasteners Ltd – Corporate Office",
      "WorkEZ – SMT, OMR, Chennai",
      "WorkEZ – Hansa, Mount Road",
      "WorkEZ – Willow Square, Guindy",
      "Appaswamy Real Estates Corporate Office, Chennai",
      "Vastrakala, Head Office, Chennai",
      "Rane Corporate Office",
      "Ford, OMR",
      "SKCL – Façade Lights",
      "Ocean Bay – Façade Lights",
      "Hindusthan Times, Mussoorie",
      "Global Health Care Partners, Chennai",
      "Tablets India, Hosur",
      "Genau Extrusions Pvt Ltd",
      "Ceebros, Guindy",
      "Vijay Cinematographer Office, Chennai",
      "Eaton",
    ],
  },
  {
    id: "retail-public",
    title: "Retail & Public Spaces",
    badge: "Luxury Boutiques, Flagships & Airports",
    subtitle: "High-end retail flagships, luxury brand showrooms, international terminals, and landmark public spaces",
    icon: ShoppingBag,
    items: [
      "Ahilya Stores, Coimbatore",
      "Navneetha Textiles, Trichy",
      "Sri Lakshmi Jewelers, Alandur",
      "SNQS International, Chennai",
      "Swans Ind Showroom, Chennai",
      "Sri Kannika Parameshwari Stores, Villupuram",
      "Language Showroom – EA Mall, Chennai",
      "Language Showroom – Lulu Mall, Bangalore",
      "Language Showroom – Lulu Mall, Cochin",
      "Luxury Derma Clinic, Chennai",
      "Naushad Ali Boutique, Pondicherry",
      "JJ Jewelers, Chennai",
      "BIAL, T2 International Airport",
      "VR Mall, Chennai",
      "SGS Ashram – Nathamandapa",
      "Olympia Cyberspace",
    ],
  },
];

export default function ClientProjects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Total projects count across all categories
  const totalProjectsCount = useMemo(() => {
    return PROJECT_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);
  }, []);

  // Filtered categories based on selected tab
  const filteredCategories = useMemo(() => {
    if (selectedCategory === "all") {
      return PROJECT_CATEGORIES;
    }
    return PROJECT_CATEGORIES.filter((cat) => cat.id === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className={styles.sectionWrapper} aria-label="Selected Projects & Esteemed Clients Directory">
      {/* Background Ambience */}
      <div className={styles.bgAmbient} />
      <div className={styles.bgPattern} />

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <Sparkles size={14} className={styles.goldIcon} />
            <span>ESTEEMED CLIENTS & INSTALLATIONS</span>
          </div>
          <h2 className={styles.mainTitle}>
            LANDMARK PROJECTS & PRIVATE COMMISSIONS
          </h2>
          <p className={styles.subtitle}>
            A distinguished directory of bespoke architectural lighting commissions engineered for
            iconic private residences, luxury hospitality, premier institutions, corporate headquarters,
            and signature public landmarks.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className={styles.filterBar}>
          <div className={styles.categoryTabs} role="tablist" aria-label="Project Categories">
            <button
              role="tab"
              aria-selected={selectedCategory === "all"}
              className={`${styles.tabBtn} ${selectedCategory === "all" ? styles.tabBtnActive : ""}`}
              onClick={() => setSelectedCategory("all")}
            >
              <Layers size={15} />
              <span>All Categories</span>
              <span className={styles.tabCount}>{totalProjectsCount}</span>
            </button>

            {PROJECT_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ""}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <Icon size={15} />
                  <span>{cat.title}</span>
                  <span className={styles.tabCount}>{cat.items.length}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Categorized Flow */}
        <div className={styles.categoriesContainer}>
          {filteredCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
                <article key={category.id} className={styles.categoryCard}>
                  {/* Category Header */}
                  <div className={styles.categoryHeader}>
                    <div className={styles.categoryHeaderLeft}>
                      <div className={styles.categoryIconBadge}>
                        <CategoryIcon size={20} />
                      </div>
                      <div>
                        <div className={styles.categoryBadgeRow}>
                          <h3 className={styles.categoryTitle}>{category.title}</h3>
                          <span className={styles.categoryItemCount}>
                            {category.items.length} {category.items.length === 1 ? "Project" : "Projects"}
                          </span>
                        </div>
                        <p className={styles.categorySubtitle}>{category.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Bullet-Separated Text Showcase */}
                  <div className={styles.textWall}>
                    {category.items.map((item, index) => (
                      <React.Fragment key={`${category.id}-${index}`}>
                        <span className={styles.projectPill}>
                          {item}
                        </span>
                        {index < category.items.length - 1 && (
                          <span className={styles.goldBullet} aria-hidden="true">
                            •
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </article>
              );
            })}
        </div>
      </div>
    </section>
  );
}
