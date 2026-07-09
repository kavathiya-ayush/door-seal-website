"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ArrowRight, ArrowLeft } from "lucide-react";

// Placeholder images - the user will replace these with actual paths later
const galleryImages = [
  { id: 1, src: "/images/placeholder-1.jpg", alt: "Premium Brass Mortise Lock" },
  { id: 2, src: "/images/placeholder-2.jpg", alt: "Hydraulic Floor Spring Installation" },
  { id: 3, src: "/images/placeholder-3.jpg", alt: "Aluminium Door Hardware Finish" },
  { id: 4, src: "/images/placeholder-4.jpg", alt: "Architectural Hardware Detail" },
  { id: 5, src: "/images/placeholder-5.jpg", alt: "High Security Door Cylinder" },
  { id: 6, src: "/images/placeholder-6.jpg", alt: "Luxury Door Handle Finish" },
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full py-12 lg:py-16">
      {/* ── Section Header ───────────────────── */}
      <div className="mb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold font-[var(--font-playfair)] text-brand-charcoal mb-3">
            The <span className="text-gradient-brass">Gallery</span>
          </h3>
          <p className="text-sm text-brand-slate max-w-xl leading-relaxed">
            A closer look at the uncompromising quality and finishes of our hardware. 
            Swipe to explore the collection.
          </p>
        </div>
        <div className="hidden md:flex gap-2 text-brand-slate">
          <ArrowLeft size={20} className="opacity-50" />
          <span className="text-xs font-semibold uppercase tracking-wider">Drag to scroll</span>
          <ArrowRight size={20} className="opacity-50" />
        </div>
      </div>

      {/* ── Horizontal Scroll Gallery ────────── */}
      {/* We use a full-bleed container with padding on the left to align with the grid */}
      <div className="w-full overflow-hidden">
        <motion.div 
          className="flex gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 cursor-grab active:cursor-grabbing overflow-x-auto pb-8 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {galleryImages.map((img) => (
            <motion.div
              key={img.id}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedImage(img.src)}
              className="relative flex-none w-[280px] sm:w-[340px] md:w-[400px] aspect-[4/3] bg-brand-offwhite border border-brand-slate-light rounded-2xl overflow-hidden snap-center sm:snap-start group"
            >
              {/* Fallback pattern when image is missing */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#0F172A 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-brand-slate/50 group-hover:text-brass transition-colors z-0">
                <ZoomIn size={40} className="mb-2 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                <span className="text-[10px] font-semibold tracking-wider uppercase">View Image</span>
                <span className="text-[9px] mt-2 opacity-40">{img.src}</span>
              </div>
              
              {/* If you use next/image with valid paths, it goes here */}
              {/* <Image src={img.src} alt={img.alt} fill className="object-cover" /> */}
              
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Lightbox Overlay ─────────────────── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-charcoal/90 backdrop-blur-xl p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-brand-white/10 hover:bg-brand-white/20 flex items-center justify-center transition-colors"
            >
              <X size={24} className="text-white" />
            </button>
            
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-video sm:aspect-[4/3] bg-brand-white rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center border border-brand-slate-light/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center text-brand-slate">
                <ZoomIn size={64} className="mx-auto mb-4 text-brand-slate-light" />
                <p className="text-xl font-bold text-brand-charcoal">Image Placeholder</p>
                <p className="mt-2 text-sm">Replace <code className="bg-brand-offwhite px-2 py-1 rounded">{selectedImage}</code> with your actual image.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
