"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lock, Gauge, Layers, KeyRound, ArrowRight } from "lucide-react";

const categories = [
  {
    id: "mortise-locks",
    title: "Mortise Locks",
    subtitle: "Precision-engineered security",
    description:
      "Premium brass and SS mortise handle sets with 7-pin cylinder mechanisms. Available in 15+ designer finishes for residential and commercial applications.",
    icon: Lock,
    specs: ["7-Pin Cylinder", "15+ Finishes", "EN12209 Grade"],
  },
  {
    id: "floor-springs",
    title: "Floor Springs",
    subtitle: "Hydraulic precision engineering",
    description:
      "German-engineered hydraulic floor springs for glass and wooden doors up to 150kg. Adjustable closing speed with hold-open function.",
    icon: Gauge,
    specs: ["150kg Capacity", "500K+ Cycles", "Hold-Open"],
  },
  {
    id: "aluminium-hardware",
    title: "Aluminium Section Hardware",
    subtitle: "Architectural elegance",
    description:
      "Complete hardware solutions for aluminium windows and doors. Precision die-cast fittings with anodized finishes that complement modern facades.",
    icon: Layers,
    specs: ["Die-Cast", "Anodized", "Full System"],
  },
  {
    id: "door-cylinders",
    title: "Door Cylinders",
    subtitle: "Multi-point locking solutions",
    description:
      "High-security euro-profile cylinders with anti-pick, anti-bump, and anti-drill protection. Master key systems available for commercial installations.",
    icon: KeyRound,
    specs: ["Anti-Pick", "Anti-Bump", "Master Key"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ProductGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="catalog"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-brand-offwhite"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ───────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block border border-brand-slate-light px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase text-brand-slate mb-6 bg-brand-white shadow-sm">
            B2B Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-playfair)] leading-tight mb-6 text-brand-charcoal">
            Hardware That Defines{" "}
            <span className="text-gradient-brass">Standards</span>
          </h2>
          <p className="text-lg text-brand-slate leading-relaxed">
            Four specialized categories, hundreds of variants. Every product
            backed by our{" "}
            <span className="text-brass font-semibold">lifetime guarantee</span>{" "}
            and available for bulk orders with custom branding.
          </p>
        </motion.div>

        {/* ── Product Grid ─────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 gap-6 lg:gap-8"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              variants={cardVariants}
              whileTap={{ scale: 0.98 }}
              className="clean-card rounded-3xl p-8 lg:p-10 flex flex-col group h-full cursor-pointer"
            >
              {/* Top row: icon */}
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-xl bg-brand-offwhite border border-brand-slate-light flex items-center justify-center shadow-sm group-hover:border-brass/30 transition-colors">
                  <cat.icon size={24} className="text-brass" />
                </div>
              </div>

              {/* Title & description */}
              <div className="flex-1">
                <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-slate mb-2">
                  {cat.subtitle}
                </p>
                <h3 className="text-2xl font-bold font-[var(--font-playfair)] mb-3 text-brand-charcoal group-hover:text-brass transition-colors duration-300">
                  {cat.title}
                </h3>
                <p className="text-sm text-brand-slate leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Specs chips */}
              <div className="flex flex-wrap gap-2 mt-6 mb-8">
                {cat.specs.map((spec) => (
                  <span
                    key={spec}
                    className="text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-md bg-brand-offwhite border border-brand-slate-light text-brand-slate-dark"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                whileTap={{ scale: 0.96 }}
                href="#contact"
                className="inline-flex items-center gap-2 justify-center py-3.5 w-full rounded-md font-semibold text-sm transition-all duration-300 border border-brand-slate-light bg-brand-white text-brand-charcoal hover:border-brass hover:text-brass hover:shadow-md group/btn"
              >
                Inquire Now
                <ArrowRight size={16} className="text-brand-slate group-hover/btn:text-brass transition-colors" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom note ──────────────────────── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-sm font-medium text-brand-slate mt-16"
        >
          Custom OEM branding available for orders of 500+ units.{" "}
          <a href="#contact" className="text-brass hover:text-brass-dark transition-colors underline underline-offset-4">
            Contact our B2B team
          </a>{" "}
          for specifications and pricing.
        </motion.p>
      </div>
    </section>
  );
}
