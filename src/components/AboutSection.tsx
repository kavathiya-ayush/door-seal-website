"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Gem, Shield, Zap, Factory } from "lucide-react";
import ImageGallery from "./ImageGallery";

const materials = [
  {
    icon: Gem,
    title: "Premium Brass",
    description:
      "Grade-A brass alloy sourced and forged in our Rajkot facility. Each piece is precision-machined for a flawless satin finish that resists tarnish for decades.",
  },
  {
    icon: Shield,
    title: "Stainless Steel 304",
    description:
      "Marine-grade SS 304 for applications demanding corrosion resistance. Brushed to a premium matte finish that architects specify by name.",
  },
  {
    icon: Zap,
    title: "Hydraulic Precision",
    description:
      "German-engineered hydraulic mechanisms with 500,000+ cycle testing. Floor springs calibrated for doors up to 150kg with whisper-quiet operation.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-brand-white"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ───────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block border border-brand-slate-light px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase text-brand-slate mb-6 bg-brand-offwhite shadow-sm">
            Our Heritage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-playfair)] leading-tight mb-6 text-brand-charcoal">
            Crafted in{" "}
            <span className="text-gradient-brass">Rajkot</span>,{" "}
            Trusted Across India
          </h2>
          <p className="text-lg text-brand-slate leading-relaxed">
            From our state-of-the-art facility in Samrat Industrial Area, we
            engineer every component to outlast the buildings they protect. Three
            generations of metallurgical expertise, condensed into hardware that
            carries a{" "}
            <span className="text-brass font-semibold">lifetime guarantee</span>.
          </p>
        </motion.div>

        {/* ── Factory Story Block ──────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="clean-card rounded-3xl p-8 lg:p-12 mb-20 relative overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-offwhite border border-brand-slate-light flex items-center justify-center shadow-sm">
                  <Factory size={20} className="text-brass" />
                </div>
                <span className="text-xs font-bold tracking-[0.15em] uppercase text-brand-slate">
                  Samrat Industrial Area, Rajkot
                </span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold font-[var(--font-playfair)] text-brand-charcoal">
                Where Precision Meets{" "}
                <span className="text-gradient-brass">Tradition</span>
              </h3>
              <p className="text-brand-slate leading-relaxed">
                Our 40,000 sq. ft. manufacturing facility houses CNC machining
                centers, automated polishing lines, and a dedicated quality
                testing lab. Every batch undergoes 12-point inspection before it
                earns the Door Seal stamp.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-brand-slate-light mt-2">
                {[
                  { value: "40K", unit: "sq. ft.", label: "Facility" },
                  { value: "12", unit: "point", label: "QC Check" },
                  { value: "500K+", unit: "cycles", label: "Tested" },
                ].map((item) => (
                  <div key={item.label} className="text-center pt-2">
                    <div className="text-xl font-bold text-brand-charcoal font-[var(--font-playfair)]">
                      {item.value}
                    </div>
                    <div className="text-[10px] text-brand-slate font-bold uppercase tracking-wider mt-1">
                      {item.unit}
                    </div>
                    <div className="text-[10px] text-brand-slate-dark mt-0.5">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side — visual element */}
            <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden bg-brand-offwhite border border-brand-slate-light flex items-center justify-center shadow-inner">
              {/* Animated concentric rings representing precision */}
              <div className="relative w-48 h-48">
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full border border-brand-slate-light"
                    style={{
                      inset: `${i * 20}px`,
                    }}
                    animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                    transition={{
                      duration: 20 + i * 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div
                      className="absolute w-2 h-2 rounded-full bg-brass shadow-sm shadow-brass/50"
                      style={{ top: "-1px", left: "50%", transform: "translateX(-50%)" }}
                    />
                  </motion.div>
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-brand-white shadow-md flex items-center justify-center border border-brand-slate-light z-10">
                    <Gem size={24} className="text-brass" />
                  </div>
                </div>
              </div>

              {/* "Made in Rajkot" stamp */}
              <div className="absolute bottom-4 right-4 bg-brand-white border border-brand-slate-light shadow-sm rounded-md px-3 py-1.5">
                <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-brand-slate-dark">
                  Made in India
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Material Cards ───────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6"
        >
          {materials.map((mat) => (
            <motion.div
              key={mat.title}
              variants={itemVariants}
              whileTap={{ scale: 0.98 }}
              className="clean-card rounded-2xl p-8 relative overflow-hidden group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-offwhite border border-brand-slate-light flex items-center justify-center mb-6 group-hover:border-brass/50 transition-colors shadow-sm">
                <mat.icon size={22} className="text-brass" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-[var(--font-playfair)] text-brand-charcoal">
                {mat.title}
              </h3>
              <p className="text-sm text-brand-slate leading-relaxed">
                {mat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Integrated Gallery ─────────────────── */}
      <div className="mt-12 lg:mt-20">
        <ImageGallery />
      </div>
    </section>
  );
}
