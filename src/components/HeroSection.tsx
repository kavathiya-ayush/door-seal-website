"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, Factory, Gem, ChevronDown, FileText, Download } from "lucide-react";

const stats = [
  { icon: Factory, value: "25+", label: "Years of Excellence" },
  { icon: Gem, value: "500+", label: "Product Variants" },
  { icon: Award, value: "10,000+", label: "B2B Partners" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-brand-offwhite"
    >
      {/* ── Content ────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT — Value Proposition */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex self-start"
            >
              <span className="bg-brand-white border border-brand-slate-light px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.1em] uppercase text-brand-slate-dark flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brass" />
                Est. 1998 — Rajkot, India
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold leading-[1.1] tracking-tight font-[var(--font-playfair)] text-brand-charcoal"
            >
              India&apos;s First Lock Brand Offering{" "}
              <span className="text-gradient-brass">Lifetime Guarantee</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg sm:text-xl text-brand-slate max-w-xl leading-relaxed"
            >
              Premium brass mortise handles, hydraulic floor springs &amp;
              architectural hardware — engineered for architects and wholesalers who
              demand uncompromising quality.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              {/* Primary — Request Bulk Quote */}
              <motion.a
                whileTap={{ scale: 0.96 }}
                href="#contact"
                className="btn-brass inline-flex items-center gap-2 px-8 py-4 rounded-md text-base font-semibold tracking-wide group"
              >
                Request Bulk Quote
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </motion.a>

              {/* Secondary — Download PDF Catalog */}
              <motion.a
                whileTap={{ scale: 0.96 }}
                href="#catalog"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-brand-white border border-brand-slate-light text-brand-charcoal text-base font-semibold hover:border-brass hover:text-brass transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <Download size={18} className="text-brand-slate group-hover:text-brass transition-colors" />
                View Full Catalog
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-8 pt-4 border-t border-brand-slate-light mt-4"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1 mt-4">
                  <div className="flex items-center gap-2">
                    <stat.icon size={16} className="text-brass" />
                    <span className="text-2xl sm:text-3xl font-bold text-brand-charcoal font-[var(--font-playfair)]">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-brand-slate">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Product / Catalog Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center"
          >
            {/* Abstract decorative background behind image */}
            <div className="absolute inset-0 bg-brand-slate-light/30 rounded-full blur-3xl transform scale-75" />
            
            {/* The catalog/product display card */}
            <div className="relative w-full max-w-md bg-brand-white border border-brand-slate-light rounded-2xl shadow-2xl p-6 md:p-10 z-10 rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center justify-between mb-8 border-b border-brand-slate-light pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-charcoal rounded-md flex items-center justify-center">
                    <span className="text-brass font-bold">DS</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-charcoal text-lg font-[var(--font-playfair)]">Product Catalogs</h3>
                    <p className="text-xs text-brand-slate">2026-2027 Collection</p>
                  </div>
                </div>
                <FileText className="text-brand-slate-light" size={32} />
              </div>
              
              <div className="space-y-4">
                {/* Catalog Item 1 */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-brand-offwhite border border-brand-slate-light hover:border-brass/40 transition-colors group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brass/10 flex items-center justify-center text-brass">
                      <LockIcon />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-brand-charcoal group-hover:text-brass transition-colors">Mortise Locks & Handles</p>
                      <p className="text-xs text-brand-slate">PDF • 12MB</p>
                    </div>
                  </div>
                  <Download size={16} className="text-brand-slate group-hover:text-brass" />
                </div>

                {/* Catalog Item 2 */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-brand-offwhite border border-brand-slate-light hover:border-brass/40 transition-colors group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brass/10 flex items-center justify-center text-brass">
                      <GaugeIcon />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-brand-charcoal group-hover:text-brass transition-colors">Hydraulic Floor Springs</p>
                      <p className="text-xs text-brand-slate">PDF • 8MB</p>
                    </div>
                  </div>
                  <Download size={16} className="text-brand-slate group-hover:text-brass" />
                </div>
                
                {/* Catalog Item 3 */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-brand-offwhite border border-brand-slate-light hover:border-brass/40 transition-colors group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brass/10 flex items-center justify-center text-brass">
                      <LayersIcon />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-brand-charcoal group-hover:text-brass transition-colors">Architectural Hardware</p>
                      <p className="text-xs text-brand-slate">PDF • 15MB</p>
                    </div>
                  </div>
                  <Download size={16} className="text-brand-slate group-hover:text-brass" />
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-xs text-brand-slate">Drop PDFs into the `public` folder to link them directly.</p>
              </div>
            </div>
            
            {/* Background card for depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-brand-charcoal rounded-2xl h-[90%] -rotate-3 z-0 opacity-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md border border-brass/30 rounded-2xl h-[95%] rotate-2 z-0" />
          </motion.div>
        </div>
      </div>

      {/* ── Scroll Indicator ───────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-slate">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-brass" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Minimal icon components for the catalog list
function LockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
  );
}
function GaugeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
  );
}
function LayersIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5Z"></path><path d="m2 17 10 5 10-5"></path><path d="m2 12 10 5 10-5"></path></svg>
  );
}
