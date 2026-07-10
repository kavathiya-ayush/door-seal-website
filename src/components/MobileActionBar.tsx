"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import MapModal from "./MapModal";
import { WhatsAppIcon } from "./WhatsAppIcon";

const WHATSAPP_NUMBER = "917990314577";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello! I'm interested in Door Seal wholesale pricing."
);

export default function MobileActionBar() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-0 left-0 right-0 z-[60] md:hidden p-3 bg-brand-charcoal/90 backdrop-blur-xl border-t border-brand-slate-light/20 pb-[calc(0.75rem+env(safe-area-inset-bottom))]"
          >
            <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto">
              {/* Location Button */}
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => setIsMapOpen(true)}
                className="w-full flex items-center justify-center gap-2 bg-brand-white/10 hover:bg-brand-white/20 text-brand-white py-3.5 rounded-xl font-bold tracking-wide border border-brand-white/10"
              >
                <MapPin size={18} />
                Location
              </motion.button>

              {/* WhatsApp Button */}
              <motion.a
                whileTap={{ scale: 0.96 }}
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded-xl font-bold tracking-wide shadow-lg shadow-green-600/20"
              >
                <WhatsAppIcon size={20} />
                WhatsApp
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <MapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
    </>
  );
}
