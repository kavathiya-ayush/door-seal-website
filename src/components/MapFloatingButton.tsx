"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X } from "lucide-react";
import MapModal from "./MapModal";

export default function MapFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Show tooltip after 6 seconds
    const timer = setTimeout(() => setShowTooltip(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-brand-charcoal rounded-xl p-4 max-w-[200px] shadow-lg shadow-brand-charcoal/20 relative"
            >
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute top-2 right-2 w-5 h-5 rounded-full bg-brand-white/10 flex items-center justify-center hover:bg-brand-white/20 transition-colors"
                aria-label="Close tooltip"
              >
                <X size={12} className="text-white" />
              </button>
              <p className="text-xs font-medium text-brand-white leading-relaxed pr-4">
                📍 Factory Location & Map
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Map FAB */}
        <motion.button
          onClick={() => setIsMapOpen(true)}
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 1.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative group w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-brand-slate-dark/30 cursor-pointer"
          aria-label="Open Map"
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-brass/40 animate-ping" style={{ animationDuration: '3s' }} />
          {/* Background */}
          <span className="absolute inset-0 rounded-full bg-brand-charcoal transition-transform duration-300 group-hover:bg-brand-slate-dark" />
          {/* Icon */}
          <MapPin
            size={24}
            className="relative text-brass"
          />
        </motion.button>
      </div>

      <MapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
    </>
  );
}
