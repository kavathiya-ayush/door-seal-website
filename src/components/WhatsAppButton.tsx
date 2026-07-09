"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const WHATSAPP_NUMBER = "919876543210"; // Replace with actual number
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello! I'm interested in Door Seal products. Could you share your B2B catalog and pricing?"
);

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Show tooltip after 5 seconds
    const timer = setTimeout(() => setShowTooltip(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-brand-white rounded-xl p-4 max-w-[240px] border border-brand-slate-light shadow-lg relative"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 w-5 h-5 rounded-full bg-brand-offwhite flex items-center justify-center hover:bg-brand-slate-light transition-colors"
              aria-label="Close tooltip"
            >
              <X size={12} className="text-brand-slate-dark" />
            </button>
            <p className="text-xs font-medium text-brand-charcoal leading-relaxed pr-4">
              👋 Need a quick quote? Chat with our B2B team on WhatsApp!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp FAB */}
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative group w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-green-600/30"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-500/30 animate-ping" />
        {/* Background */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] transition-transform duration-300" />
        {/* Icon */}
        <MessageCircle
          size={28}
          className="relative text-white fill-white"
        />
      </motion.a>
    </div>
  );
}
