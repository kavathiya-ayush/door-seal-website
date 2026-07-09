"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  Send,
  Building2,
  ArrowRight,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Factory Address",
    value: "Samrat Industrial Area, Rajkot — 360003, Gujarat, India",
  },
  {
    icon: Phone,
    label: "Business Enquiries",
    value: "+91 98765 43210",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@doorseal.in",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Sat: 9:00 AM – 7:00 PM IST",
  },
];

export default function ContactFooter() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState({
    company: "",
    email: "",
    product: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <footer
      id="contact"
      ref={sectionRef}
      className="relative pt-24 pb-8 lg:pt-32 overflow-hidden bg-brand-white border-t border-brand-slate-light"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ───────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block border border-brand-slate-light px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase text-brand-slate mb-6 bg-brand-offwhite shadow-sm">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-playfair)] leading-tight mb-6 text-brand-charcoal">
            Let&apos;s Build{" "}
            <span className="text-gradient-brass">Together</span>
          </h2>
          <p className="text-lg text-brand-slate leading-relaxed">
            Whether you&apos;re an architect specifying hardware or a wholesaler
            seeking reliable supply, our B2B team is ready to assist.
          </p>
        </motion.div>

        {/* ── Contact Grid ─────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Left — Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleSubmit} className="clean-card rounded-3xl p-8 lg:p-10">
              <h3 className="text-xl font-bold font-[var(--font-playfair)] mb-8 flex items-center gap-3 text-brand-charcoal">
                <Building2 size={24} className="text-brass" />
                Request Bulk Quote
              </h3>

              <div className="grid gap-6">
                <div>
                  <label className="text-xs font-bold tracking-wider uppercase text-brand-slate mb-2 block">
                    Company Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.company}
                    onChange={(e) =>
                      setFormState({ ...formState, company: e.target.value })
                    }
                    placeholder="Your company name"
                    className="w-full bg-brand-offwhite border border-brand-slate-light rounded-md px-4 py-3.5 text-sm text-brand-charcoal placeholder:text-brand-slate/60 focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold tracking-wider uppercase text-brand-slate mb-2 block">
                    Business Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    placeholder="you@company.com"
                    className="w-full bg-brand-offwhite border border-brand-slate-light rounded-md px-4 py-3.5 text-sm text-brand-charcoal placeholder:text-brand-slate/60 focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold tracking-wider uppercase text-brand-slate mb-2 block">
                    Product Interest
                  </label>
                  <select
                    value={formState.product}
                    onChange={(e) =>
                      setFormState({ ...formState, product: e.target.value })
                    }
                    className="w-full bg-brand-offwhite border border-brand-slate-light rounded-md px-4 py-3.5 text-sm text-brand-charcoal focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass transition-all duration-300 cursor-pointer"
                  >
                    <option value="">Select a category...</option>
                    <option value="mortise">Mortise Locks & Handles</option>
                    <option value="floor-springs">Hydraulic Floor Springs</option>
                    <option value="aluminium">Aluminium Section Hardware</option>
                    <option value="cylinders">Door Cylinders</option>
                    <option value="custom">Custom / OEM Order</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold tracking-wider uppercase text-brand-slate mb-2 block">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder="Tell us about your requirements, quantities, and timeline..."
                    className="w-full bg-brand-offwhite border border-brand-slate-light rounded-md px-4 py-3.5 text-sm text-brand-charcoal placeholder:text-brand-slate/60 focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="btn-brass w-full py-4 rounded-md mt-4 disabled:opacity-70 group"
                >
                  <span className="flex items-center justify-center gap-2 text-sm font-semibold tracking-wide">
                    {submitted ? (
                      "✓ Inquiry Sent Successfully"
                    ) : (
                      <>
                        Send Inquiry
                        <Send
                          size={16}
                          className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300"
                        />
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </motion.div>

          {/* Right — Info + Rating */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Contact cards */}
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="clean-card rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-offwhite border border-brand-slate-light flex items-center justify-center flex-shrink-0">
                  <item.icon size={20} className="text-brass" />
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-slate mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-brand-charcoal leading-relaxed">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Google Rating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6 bg-brand-charcoal rounded-2xl p-8 shadow-xl shadow-brand-charcoal/10"
            >
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 text-center">
                  <div className="text-4xl font-bold text-brass font-[var(--font-playfair)]">
                    4.9
                  </div>
                  <div className="flex justify-center gap-0.5 mt-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        size={12}
                        className={
                          s <= 4
                            ? "text-brass fill-brass"
                            : "text-brass fill-brass/70"
                        }
                      />
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-base font-semibold text-brand-white mb-1">
                    Google Reviews
                  </p>
                  <p className="text-xs text-brand-slate-light/70 leading-relaxed">
                    Rated by architects &amp; wholesalers across India
                  </p>
                </div>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-brand-slate-dark flex items-center justify-center hover:bg-brass transition-colors duration-300"
                  aria-label="View Google reviews"
                >
                  <ArrowRight size={16} className="text-brand-white" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Bottom Bar ───────────────────────── */}
        <div className="border-t border-brand-slate-light pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-brand-charcoal flex items-center justify-center">
              <span className="text-xs font-bold text-brass">DS</span>
            </div>
            <div>
              <span className="text-sm font-bold text-brand-charcoal">
                DOOR SEAL
              </span>
              <span className="text-xs font-medium text-brand-slate ml-2">
                by Sardar Manufactures
              </span>
            </div>
          </div>

          <p className="text-xs font-medium text-brand-slate text-center">
            © {new Date().getFullYear()} Sardar Manufactures. All rights
            reserved. Made in Rajkot, India.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs font-semibold text-brand-slate hover:text-brand-charcoal transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs font-semibold text-brand-slate hover:text-brand-charcoal transition-colors duration-300"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
