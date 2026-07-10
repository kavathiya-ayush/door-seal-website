"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin } from "lucide-react";

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MapModal({ isOpen, onClose }: MapModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-charcoal/90 backdrop-blur-xl p-4 sm:p-8"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label="Close Map"
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-brand-white/10 hover:bg-brand-white/20 flex items-center justify-center transition-colors"
          >
            <X size={24} className="text-white" />
          </button>
          
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-brand-white rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-brand-slate-light/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-brand-slate-light flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-offwhite flex items-center justify-center">
                <MapPin size={20} className="text-brass" />
              </div>
              <div>
                <h3 className="font-bold text-brand-charcoal text-lg">Sardar Manufactures</h3>
                <p className="text-sm text-brand-slate">Samrat Industrial Area, Rajkot</p>
              </div>
            </div>

            {/* Responsive Map iframe */}
            <div className="w-full aspect-video bg-brand-offwhite relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118163.3921369977!2d70.64267239726559!3d22.255022899999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca89ecd82c8f%3A0x1106a070045c0a69!2sSardar%20manufacture%20(Door%20Seal)!5e0!3m2!1sen!2sin!4v1783659054520!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location for Sardar Manufactures"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
