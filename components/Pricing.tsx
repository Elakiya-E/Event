"use client";

import React, { useRef } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGsap";
import { siteContent } from "@/data/siteContent";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Sliders,
  Layers,
  FileText,
  BadgePercent,
  Calculator,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const content = siteContent.pricing;

  useGSAP(
    () => {
      if (!containerRef.current) return;

      /* Header entrance */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".pricing-head-elem"),
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

      /* Card entrance */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".pricing-card"),
        { y: 40, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".pricing-card"),
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="pricing"
      ref={containerRef}
      className="relative w-full bg-[#030303] overflow-hidden py-24 md:py-36 border-t border-neutral-800/70"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-teal-500/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-amber-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-10">
        {/* ── Section Header ── */}
        <div className="text-center space-y-4 mb-10 sm:mb-14 md:mb-16">
          <div className="pricing-head-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/20 bg-teal-950/30 text-teal-400 text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            Customised Quotations
          </div>

          <h2 className="pricing-head-elem text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
            {content.heading}
          </h2>

          <p className="pricing-head-elem text-sm sm:text-base md:text-xl text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
            {content.content}
          </p>
        </div>

        {/* ── Highlight & Quotation Factors Card ── */}
        <div className="pricing-card relative rounded-2xl sm:rounded-3xl border border-neutral-800/90 bg-neutral-950/80 backdrop-blur-md overflow-hidden p-4 sm:p-8 md:p-12 lg:p-14 shadow-2xl space-y-8 sm:space-y-10">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-amber-500/5 pointer-events-none" />

          {/* Top Highlight: Customised Décor Starting Threshold */}
          <div className="relative z-10 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-r from-neutral-900/90 via-neutral-900/60 to-neutral-900/90 border border-neutral-800/80 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-center md:text-left">
            <div className="space-y-1.5">
              <span className="text-xs font-mono text-teal-400 uppercase tracking-widest font-semibold flex items-center justify-center md:justify-start gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Décor Baseline</span>
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white">
                {content.highlight}
              </h3>
              <p className="text-[11px] sm:text-xs text-neutral-400 font-mono tracking-wide">
                *Starting price for customized décor setups • Not a fixed package price
              </p>
            </div>

            <div className="flex-shrink-0">
              <div className="px-5 py-3 rounded-xl bg-teal-950/50 border border-teal-500/30 text-teal-300 font-mono text-xs uppercase tracking-widest text-center">
                <span>100% Tailored</span>
                <span className="block text-[10px] text-teal-400/70 lowercase mt-0.5">no cookie-cutter templates</span>
              </div>
            </div>
          </div>

          {/* Quotation Factors Grid */}
          <div className="relative z-10 space-y-5">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <span className="text-xs font-mono text-neutral-300 uppercase tracking-widest font-semibold flex items-center gap-2">
                <Sliders className="w-4 h-4 text-teal-400" />
                <span>{content.factorsTitle}</span>
              </span>
              <span className="text-[10px] font-mono text-neutral-500 uppercase">
                Evaluated Per Project
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {content.factors.map((factor, idx) => (
                <div
                  key={idx}
                  className="group/factor p-3.5 rounded-xl bg-neutral-900/70 border border-neutral-800/90 hover:border-teal-500/40 transition-all duration-300 flex items-center gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-neutral-300 group-hover/factor:text-white font-medium">
                    {factor}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Content: Complete Event Planning & Budget Guidance */}
          <div className="relative z-10 pt-6 border-t border-neutral-800/80 space-y-4 text-center md:text-left">
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 space-y-2">
              {content.additionalContent.map((paragraph, pIdx) => (
                <p
                  key={pIdx}
                  className={`text-sm md:text-base leading-relaxed ${
                    pIdx === 0
                      ? "text-neutral-300 font-light"
                      : "text-white font-medium"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* CTA Action */}
          <div className="relative z-10 pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-3 bg-teal-500 hover:bg-teal-400 text-black px-9 py-4 font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-lg shadow-teal-500/20"
            >
              <span>{content.cta}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <span className="text-xs text-neutral-500 font-mono uppercase tracking-wider">
              No Obligation • Consultation &amp; Discussion
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
