"use client";

import React, { useState, useRef } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGsap";
import { siteContent } from "@/data/siteContent";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Zap,
  Trophy,
  ArrowRight,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  X,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const content = siteContent.caseStudies;
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<any | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      /* Header entrance */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".case-head-elem"),
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

      /* Case Study Card entrance */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".case-study-card"),
        { y: 40, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".case-study-card"),
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
      id="case-studies"
      ref={containerRef}
      className="relative w-full bg-[#020202] overflow-hidden py-24 md:py-36 border-t border-neutral-800/70"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[700px] h-[350px] bg-teal-500/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[350px] bg-sky-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* ── Section Header ── */}
        <div className="max-w-3xl mb-10 sm:mb-14 md:mb-20 space-y-4">
          <div className="case-head-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/20 bg-teal-950/30 text-teal-400 text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            Case Studies
          </div>

          <h2 className="case-head-elem text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
            {content.heading}
          </h2>

          <div className="case-head-elem text-teal-400 font-mono text-xs md:text-sm tracking-[0.2em] uppercase font-semibold">
            {content.supportingLine}
          </div>

          <p className="case-head-elem text-xs sm:text-sm md:text-base text-neutral-400 font-light leading-relaxed max-w-2xl">
            {content.description}
          </p>
        </div>

        {/* ── Case Study Cards ── */}
        <div className="space-y-10 sm:space-y-16">
          {content.items.map((study, idx) => (
            <div
              key={study.id || idx}
              className="case-study-card relative rounded-2xl sm:rounded-3xl border border-neutral-800/90 bg-neutral-950/80 backdrop-blur-md overflow-hidden shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left Column: Visuals & Meta (5 cols) */}
                <div className="lg:col-span-5 relative p-4 sm:p-7 md:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-800/80 bg-neutral-900/40">
                  {/* Visual Background / Image Container */}
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-6 border border-neutral-800 bg-neutral-900">
                    <Image
                      src={study.image || "/images/hero-bg.png"}
                      alt={study.title}
                      fill
                      className="object-cover opacity-60 hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                    {/* Timeframe Pill */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-rose-950/80 border border-rose-500/40 text-rose-300 flex items-center gap-1.5 backdrop-blur-md">
                        <Clock className="w-3 h-3 text-rose-400" />
                        {study.timeframe}
                      </span>
                    </div>
                  </div>

                  {/* Title & Metadata */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-teal-400 uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5 text-teal-400" />
                      <span>{study.location}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                      {study.title}
                    </h3>

                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase">
                      <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800">
                        {study.event}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-8 mt-6 border-t border-neutral-800/60">
                    <button
                      onClick={() => setSelectedCaseStudy(study)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-black px-6 py-3.5 font-bold uppercase tracking-widest text-xs transition-colors shadow-lg shadow-teal-500/15"
                    >
                      <span>{content.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Column: The 4-Pillars Narrative (7 cols) */}
                <div className="lg:col-span-7 p-7 md:p-10 lg:p-12 flex flex-col justify-between space-y-8">
                  {/* 1. CHALLENGE */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase tracking-widest font-semibold">
                      <AlertCircle className="w-4 h-4 text-rose-400" />
                      <span>01. The Challenge</span>
                    </div>
                    <p className="text-base md:text-lg text-white font-medium">
                      {study.challenge}
                    </p>

                    {/* Requirements Checklist */}
                    {study.requirements && (
                      <div className="mt-3 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                        <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block mb-2.5">
                          Requirements Included:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {study.requirements.map((req: string, rIdx: number) => (
                            <div
                              key={rIdx}
                              className="flex items-center gap-2 text-xs md:text-sm text-neutral-300 font-light"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                              <span>{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 2. PLAN & 3. EXECUTION Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-neutral-800/60">
                    {/* The Plan */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-widest font-semibold">
                        <Lightbulb className="w-4 h-4 text-sky-400" />
                        <span>02. The Plan</span>
                      </div>
                      <p className="text-xs md:text-sm text-neutral-300 font-light leading-relaxed">
                        {study.plan}
                      </p>
                    </div>

                    {/* The Execution */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-widest font-semibold">
                        <Zap className="w-4 h-4 text-amber-400" />
                        <span>03. The Execution</span>
                      </div>
                      <p className="text-xs md:text-sm text-neutral-300 font-light leading-relaxed">
                        {study.execution}
                      </p>
                    </div>
                  </div>

                  {/* 4. RESULT & CLOSING */}
                  <div className="pt-5 border-t border-neutral-800/60 space-y-4">
                    <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-widest font-semibold">
                      <Trophy className="w-4 h-4 text-emerald-400" />
                      <span>04. The Result</span>
                    </div>
                    <p className="text-sm md:text-base text-neutral-200 font-normal leading-relaxed">
                      {study.result}
                    </p>

                    {/* Signature Closing Line */}
                    <div className="p-4 rounded-xl border border-teal-500/30 bg-teal-950/20 text-teal-300 text-sm font-medium italic">
                      &ldquo;{study.closing}&rdquo;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom Section CTA ── */}
        <div className="mt-16 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-black font-bold uppercase tracking-widest text-xs transition-colors shadow-lg shadow-teal-500/20"
          >
            <span>{content.secondaryCta}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* ── Case Study Detailed Modal ── */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl rounded-3xl border border-neutral-800 bg-neutral-950 p-6 md:p-10 shadow-2xl space-y-6 my-auto max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-teal-400 uppercase tracking-widest mb-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>{selectedCaseStudy.location}</span>
                <span>•</span>
                <span>{selectedCaseStudy.timeframe}</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-serif font-bold text-white">
                {selectedCaseStudy.title}
              </h3>
            </div>

            {/* Modal Content Sections */}
            <div className="space-y-6 text-sm md:text-base">
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <h4 className="text-xs font-mono uppercase text-rose-400 tracking-wider mb-2 font-bold">
                  The Challenge
                </h4>
                <p className="text-neutral-300 font-light mb-3">
                  {selectedCaseStudy.challenge}
                </p>
                <div className="space-y-1.5">
                  {selectedCaseStudy.requirements?.map((req: string, i: number) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                  <h4 className="text-xs font-mono uppercase text-sky-400 tracking-wider mb-2 font-bold">
                    The Plan
                  </h4>
                  <p className="text-xs md:text-sm text-neutral-300 font-light">
                    {selectedCaseStudy.plan}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                  <h4 className="text-xs font-mono uppercase text-amber-400 tracking-wider mb-2 font-bold">
                    The Execution
                  </h4>
                  <p className="text-xs md:text-sm text-neutral-300 font-light">
                    {selectedCaseStudy.execution}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-teal-950/20 border border-teal-500/30">
                <h4 className="text-xs font-mono uppercase text-emerald-400 tracking-wider mb-2 font-bold">
                  The Result
                </h4>
                <p className="text-neutral-200 text-sm font-normal mb-3">
                  {selectedCaseStudy.result}
                </p>
                <p className="text-xs md:text-sm text-teal-300 italic">
                  &ldquo;{selectedCaseStudy.closing}&rdquo;
                </p>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="px-5 py-2.5 rounded-lg border border-neutral-800 text-neutral-400 hover:text-white text-xs font-mono uppercase tracking-wider transition-colors"
              >
                Close
              </button>
              <Link
                href="#contact"
                onClick={() => setSelectedCaseStudy(null)}
                className="px-6 py-2.5 bg-teal-500 hover:bg-teal-400 text-black font-bold text-xs uppercase font-mono tracking-widest transition-colors"
              >
                Plan Your Event
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
