"use client";

import React, { useState, useRef } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGsap";
import { siteContent } from "@/data/siteContent";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function FAQ() {
  const containerRef = useRef<HTMLDivElement>(null);
  const content = siteContent.faq;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx((current) => (current === idx ? null : idx));
  };

  useGSAP(
    () => {
      if (!containerRef.current) return;

      /* Header animation */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".faq-head-elem"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      /* Accordion rows entrance */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".faq-item-card"),
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".faq-list"),
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );

  // SEO JSON-LD FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      ref={containerRef}
      className="relative w-full bg-[#030303] overflow-hidden py-24 md:py-36 border-t border-neutral-800/70"
    >
      {/* Inject SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[750px] h-[350px] bg-teal-500/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[350px] bg-sky-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-10">
        {/* ── Section Header ── */}
        <div className="text-center space-y-4 mb-10 sm:mb-14 md:mb-18">
          <div className="faq-head-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/20 bg-teal-950/30 text-teal-400 text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            Clear Answers
          </div>

          <h2 className="faq-head-elem text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
            {content.heading}
          </h2>

          <p className="faq-head-elem text-xs sm:text-sm md:text-base text-neutral-400 font-light max-w-xl mx-auto leading-relaxed">
            Everything you need to know about our end-to-end event planning, customised décor, and execution across South Tamil Nadu.
          </p>
        </div>

        {/* ── Accessible Accordion List ── */}
        <div className="faq-list space-y-3 sm:space-y-3.5">
          {content.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            const itemId = `faq-panel-${idx}`;
            const headerId = `faq-header-${idx}`;

            return (
              <div
                key={idx}
                className={`faq-item-card rounded-xl sm:rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-teal-500/50 bg-neutral-950/90 shadow-[0_0_25px_rgba(20,184,166,0.12)]"
                    : "border-neutral-800/80 bg-neutral-950/60 hover:border-neutral-700/90"
                }`}
              >
                <h3>
                  <button
                    id={headerId}
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    aria-controls={itemId}
                    className="w-full p-4 sm:p-5 md:p-6 text-left flex items-center justify-between gap-3 sm:gap-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3.5 md:gap-4">
                      <span
                        className={`font-mono text-[11px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md transition-colors ${
                          isOpen
                            ? "bg-teal-500 text-black font-bold"
                            : "bg-neutral-900 text-neutral-400 border border-neutral-800"
                        }`}
                      >
                        {(idx + 1).toString().padStart(2, "0")}
                      </span>
                      <span
                        className={`text-sm sm:text-base md:text-lg font-medium transition-colors ${
                          isOpen
                            ? "text-white font-semibold"
                            : "text-neutral-200 hover:text-white"
                        }`}
                      >
                        {item.question}
                      </span>
                    </div>

                    <div
                      className={`p-2 rounded-xl border flex-shrink-0 transition-colors ${
                        isOpen
                          ? "bg-teal-950/60 border-teal-500/40 text-teal-400"
                          : "bg-neutral-900 border-neutral-800 text-neutral-400"
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={itemId}
                      role="region"
                      aria-labelledby={headerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 pt-1 md:px-6 md:pb-7 text-sm md:text-base text-neutral-300 font-light leading-relaxed border-t border-neutral-800/60">
                        <div className="pl-0 md:pl-11 pt-2">{item.answer}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* ── Additional Inquiries Banner ── */}
        <div className="faq-head-elem mt-14 text-center">
          <div className="p-6 md:p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="text-base font-bold text-white mb-1">
                Have a specific question about your event?
              </h4>
              <p className="text-xs md:text-sm text-neutral-400 font-light">
                Our team is ready to understand your requirements and clarify any details.
              </p>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-400 text-black font-bold text-xs uppercase font-mono tracking-widest transition-colors flex-shrink-0 shadow-md shadow-teal-500/15"
            >
              <span>Ask Our Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
