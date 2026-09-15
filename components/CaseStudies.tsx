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
      className="relative w-full bg-[#FCFAF6] overflow-hidden py-24 md:py-36 border-t border-[#DED6C9]"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[700px] h-[350px] bg-[#C7A978]/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[350px] bg-[#DED6C9]/30 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* ── Section Header ── */}
        <div className="max-w-3xl mb-10 sm:mb-14 md:mb-20 space-y-4">
          <div className="case-head-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#4F918B]/30 bg-[#FCFAF6] text-[#4F918B] text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7A978] animate-pulse" />
            Case Studies
          </div>

          <h2 className="case-head-elem text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#292825] leading-tight">
            {content.heading}
          </h2>

          <div className="case-head-elem text-[#C7A978] font-mono text-xs md:text-sm tracking-[0.2em] uppercase font-semibold">
            {content.supportingLine}
          </div>

          <p className="case-head-elem text-xs sm:text-sm md:text-base text-[#6F6A61] font-light leading-relaxed max-w-2xl">
            {content.description}
          </p>
        </div>

        {/* ── Case Study Cards ── */}
        <div className="space-y-10 sm:space-y-16">
          {content.items.map((study, idx) => (
            <div
              key={study.id || idx}
              className="case-study-card relative rounded-2xl sm:rounded-3xl border border-[#DED6C9] bg-[#F7F3EA] overflow-hidden shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left Column: Visuals & Meta (5 cols) */}
                <div className="lg:col-span-5 relative p-4 sm:p-7 md:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#DED6C9] bg-[#F1EADF]">
                  {/* Visual Background / Image Container */}
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-6 border border-[#DED6C9] bg-[#FCFAF6]">
                    <Image
                      src={study.image || "/images/hero-bg.png"}
                      alt={study.title}
                      fill
                      className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FCFAF6]/30 via-transparent to-transparent" />

                    {/* Timeframe Pill */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-[#FCFAF6] border border-[#C7A978]/50 text-[#6F6A61] flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-[#C7A978]" />
                        {study.timeframe}
                      </span>
                    </div>
                  </div>

                  {/* Title & Metadata */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#4F918B] uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5 text-[#4F918B]" />
                      <span>{study.location}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#292825] leading-tight">
                      {study.title}
                    </h3>

                    <div className="flex items-center gap-2 text-xs font-mono text-[#6F6A61] uppercase">
                      <span className="px-2.5 py-1 rounded-md bg-[#FCFAF6] border border-[#DED6C9]">
                        {study.event}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-8 mt-6 border-t border-[#DED6C9]">
                    <button
                      onClick={() => setSelectedCaseStudy(study)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#4F918B] hover:bg-[#437D77] text-[#FCFAF6] px-6 py-3.5 font-bold uppercase tracking-widest text-xs transition-colors shadow-sm"
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
                    <div className="flex items-center gap-2 text-[#C7A978] font-mono text-xs uppercase tracking-widest font-semibold">
                      <AlertCircle className="w-4 h-4 text-[#C7A978]" />
                      <span>01. The Challenge</span>
                    </div>
                    <p className="text-base md:text-lg text-[#292825] font-medium">
                      {study.challenge}
                    </p>

                    {/* Requirements Checklist */}
                    {study.requirements && (
                      <div className="mt-3 p-4 rounded-xl bg-[#FCFAF6] border border-[#DED6C9]">
                        <span className="text-[11px] font-mono text-[#6F6A61] uppercase tracking-wider block mb-2.5">
                          Requirements Included:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {study.requirements.map((req: string, rIdx: number) => (
                            <div
                              key={rIdx}
                              className="flex items-center gap-2 text-xs md:text-sm text-[#6F6A61] font-light"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#4F918B] flex-shrink-0" />
                              <span>{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 2. PLAN & 3. EXECUTION Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#DED6C9]">
                    {/* The Plan */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[#4F918B] font-mono text-xs uppercase tracking-widest font-semibold">
                        <Lightbulb className="w-4 h-4 text-[#4F918B]" />
                        <span>02. The Plan</span>
                      </div>
                      <p className="text-xs md:text-sm text-[#6F6A61] font-light leading-relaxed">
                        {study.plan}
                      </p>
                    </div>

                    {/* The Execution */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[#C7A978] font-mono text-xs uppercase tracking-widest font-semibold">
                        <Zap className="w-4 h-4 text-[#C7A978]" />
                        <span>03. The Execution</span>
                      </div>
                      <p className="text-xs md:text-sm text-[#6F6A61] font-light leading-relaxed">
                        {study.execution}
                      </p>
                    </div>
                  </div>

                  {/* 4. RESULT & CLOSING */}
                  <div className="pt-5 border-t border-[#DED6C9] space-y-4">
                    <div className="flex items-center gap-2 text-[#AEBBAA] font-mono text-xs uppercase tracking-widest font-semibold">
                      <Trophy className="w-4 h-4 text-[#AEBBAA]" />
                      <span>04. The Result</span>
                    </div>
                    <p className="text-sm md:text-base text-[#292825] font-normal leading-relaxed">
                      {study.result}
                    </p>

                    {/* Signature Closing Line */}
                    <div className="p-4 rounded-xl border border-[#C7A978]/50 bg-[#F1EADF] text-[#4F918B] text-sm font-medium italic">
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
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#4F918B] hover:bg-[#437D77] text-[#FCFAF6] font-bold uppercase tracking-widest text-xs transition-colors shadow-sm"
          >
            <span>{content.secondaryCta}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* ── Case Study Detailed Modal ── */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-3xl rounded-3xl border border-[#DED6C9] bg-[#FCFAF6] p-6 md:p-10 shadow-2xl space-y-6 my-auto max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#F7F3EA] border border-[#DED6C9] text-[#6F6A61] hover:text-[#292825] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#4F918B] uppercase tracking-widest mb-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>{selectedCaseStudy.location}</span>
                <span>•</span>
                <span>{selectedCaseStudy.timeframe}</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-serif font-bold text-[#292825]">
                {selectedCaseStudy.title}
              </h3>
            </div>

            {/* Modal Content Sections */}
            <div className="space-y-6 text-sm md:text-base">
              <div className="p-4 rounded-xl bg-[#F7F3EA] border border-[#DED6C9]">
                <h4 className="text-xs font-mono uppercase text-[#C7A978] tracking-wider mb-2 font-bold">
                  The Challenge
                </h4>
                <p className="text-[#6F6A61] font-light mb-3">
                  {selectedCaseStudy.challenge}
                </p>
                <div className="space-y-1.5">
                  {selectedCaseStudy.requirements?.map((req: string, i: number) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#6F6A61]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4F918B]" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#F7F3EA] border border-[#DED6C9]">
                  <h4 className="text-xs font-mono uppercase text-[#4F918B] tracking-wider mb-2 font-bold">
                    The Plan
                  </h4>
                  <p className="text-xs md:text-sm text-[#6F6A61] font-light">
                    {selectedCaseStudy.plan}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F3EA] border border-[#DED6C9]">
                  <h4 className="text-xs font-mono uppercase text-[#C7A978] tracking-wider mb-2 font-bold">
                    The Execution
                  </h4>
                  <p className="text-xs md:text-sm text-[#6F6A61] font-light">
                    {selectedCaseStudy.execution}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F1EADF] border border-[#C7A978]/50">
                <h4 className="text-xs font-mono uppercase text-[#AEBBAA] tracking-wider mb-2 font-bold">
                  The Result
                </h4>
                <p className="text-[#292825] text-sm font-normal mb-3">
                  {selectedCaseStudy.result}
                </p>
                <p className="text-xs md:text-sm text-[#4F918B] italic">
                  &ldquo;{selectedCaseStudy.closing}&rdquo;
                </p>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="px-5 py-2.5 rounded-lg border border-[#DED6C9] text-[#6F6A61] hover:text-[#292825] text-xs font-mono uppercase tracking-wider transition-colors"
              >
                Close
              </button>
              <Link
                href="#contact"
                onClick={() => setSelectedCaseStudy(null)}
                className="px-6 py-2.5 bg-[#4F918B] hover:bg-[#437D77] text-[#FCFAF6] font-bold text-xs uppercase font-mono tracking-widest transition-colors"
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
