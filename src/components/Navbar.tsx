"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import MapModal from "./MapModal";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Our Craft", href: "#about" },
  { label: "Catalog", href: "#catalog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── Top Info Bar ───────────────────────── */}
      <div className="absolute top-0 left-0 right-0 z-[60] h-10 flex items-center justify-center gap-6 bg-brand-charcoal text-xs text-brand-offwhite">
        <span className="flex items-center gap-1.5">
          <Phone size={12} className="text-brass" />
          +91 79903 14577
        </span>
        <span className="hidden sm:flex items-center gap-1.5">
          <Mail size={12} className="text-brass" />
          info@doorseal.in
        </span>
        <button 
          onClick={() => setIsMapOpen(true)}
          className="hidden lg:flex items-center gap-1.5 hover:text-brass transition-colors cursor-pointer"
        >
          <MapPin size={12} className="text-brass" />
          Samrat Industrial Area, Rajkot
        </button>
      </div>

      {/* ── Main Navbar (Sticky) ───────────────────────── */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`sticky top-0 z-50 mt-10 transition-colors duration-300 ${
          scrolled
            ? "bg-brand-white/95 backdrop-blur-md shadow-sm border-b border-brand-slate-light"
            : "bg-brand-white border-b border-brand-slate-light"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-lg bg-brand-charcoal flex items-center justify-center">
                <span className="font-bold text-brass text-lg">DS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-wider text-brand-charcoal">
                  DOOR SEAL
                </span>
                <span className="text-[10px] tracking-[0.2em] text-brand-slate uppercase -mt-0.5">
                  Sardar Manufactures
                </span>
              </div>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-brand-slate-dark hover:text-brass transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.a
                whileTap={{ scale: 0.96 }}
                href="#contact"
                className="btn-brass inline-flex items-center gap-2 px-6 py-2.5 rounded-md text-sm font-semibold tracking-wide"
              >
                Request Quote
              </motion.a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-brand-charcoal hover:text-brass transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Menu ───────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-brand-white/80 backdrop-blur-xl flex flex-col items-center justify-center gap-8 pt-20"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileTap={{ scale: 0.96 }}
                transition={{ delay: i * 0.1 + 0.1, duration: 0.4 }}
                className="text-2xl font-semibold text-brand-charcoal hover:text-brass transition-colors duration-300 tracking-wider"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileTap={{ scale: 0.96 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-4 btn-brass px-8 py-3 rounded-md font-semibold tracking-wide"
            >
              Request Quote
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <MapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
    </>
  );
}
