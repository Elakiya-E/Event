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

/* ------------------------------------------------------------------ */
/* 4-Stage Storytelling Methodology Stages                            */
/* ------------------------------------------------------------------ */
const storytellingStages = [
  {
    step: "01",
    title: "THE CHALLENGE",
    subtitle: "Event Constraints & Goals",
    desc: "Understanding tight timelines, venue restrictions, multi-vendor logistics, and the client's celebration vision.",
    icon: AlertCircle,
  },
  {
    step: "02",
    title: "THE PLAN",
    subtitle: "Strategy & Blueprint",
    desc: "Detailed pre-planning, production schedules, component pre-fabrication, and clear team role delegation.",
    icon: Lightbulb,
  },
  {
    step: "03",
    title: "THE EXECUTION",
    subtitle: "On-Ground Coordination",
    desc: "Mobilizing all creative, lighting, décor, and technical elements simultaneously with precision and responsibility.",
    icon: Zap,
  },
  {
    step: "04",
    title: "THE RESULT",
    subtitle: "Flawless Delivery",
    desc: "Delivering a seamless, memorable event on time and within budget so families and brands simply enjoy the moment.",
    icon: Trophy,
  },
];

export default function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const content = siteContent.caseStudies;
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<any | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const dur = prefersReduced ? 0 : 0.85;
      const stag = prefersReduced ? 0 : 0.1;

      /* Header Typography entrance */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".case-head-elem"),
        { y: prefersReduced ? 0 : 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: dur,
          stagger: stag,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      /* Right Side Photo Showcase entrance */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".case-photo-elem"),
        {
          y: prefersReduced ? 0 : 40,
          opacity: 0,
          scale: prefersReduced ? 1 : 0.96,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: prefersReduced ? 0 : 0.95,
          stagger: prefersReduced ? 0 : 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".case-photo-wrap"),
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      /* Timeline Connecting Line Progressive Draw */
      const lineElem = containerRef.current.querySelector(".case-line-anim");
      if (lineElem) {
        gsap.fromTo(
          lineElem,
          { scaleX: prefersReduced ? 1 : 0 },
          {
            scaleX: 1,
            duration: prefersReduced ? 0 : 1.2,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: containerRef.current.querySelector(".case-timeline-wrap"),
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      /* 4-Stage Milestones entrance */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".case-stage-elem"),
        { y: prefersReduced ? 0 : 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: prefersReduced ? 0 : 0.7,
          stagger: prefersReduced ? 0 : 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".case-timeline-wrap"),
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      /* Case Study Cards entrance */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".case-study-card"),
        { y: prefersReduced ? 0 : 40, opacity: 0, scale: prefersReduced ? 1 : 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: prefersReduced ? 0 : 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".case-study-cards-wrap"),
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
      className="relative w-full bg-[#FCFAF6] overflow-hidden py-16 md:py-28 border-t border-[#DED6C9]"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[700px] h-[350px] bg-[#C7A978]/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[350px] bg-[#4F918B]/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* ═══════════════════════════════════════════════════════════ */}
        {/* 1. EDITORIAL ASYMMETRIC HERO: STORY + VISUAL SHOWCASE       */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-20">
          {/* LEFT SIDE — Storytelling Typography */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Eyebrow Label */}
            <div className="case-head-elem inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#4F918B]/30 bg-[#4F918B]/10 text-[#4F918B] text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7A978] animate-pulse" />
              Case Studies
            </div>

            {/* Main Heading with Highlighted Accent */}
            <h1 className="case-head-elem text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-serif font-bold tracking-tight text-[#292825] leading-[1.12]">
              Behind Every Event
              <br />
              <span className="text-[#4F918B] italic font-normal">Is a Story</span>.
            </h1>

            {/* Fine Champagne Editorial Line */}
            <div className="case-head-elem w-20 h-[2px] bg-gradient-to-r from-[#C7A978] via-[#C7A978]/60 to-transparent" />

            {/* Supporting Statement in Uppercase Gold */}
            <div className="case-head-elem text-[#C7A978] font-mono text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold">
              The Challenge &bull; The Plan &bull; The Execution &bull; The Result
            </div>

            {/* Narrative Description */}
            <p className="case-head-elem text-base sm:text-lg text-[#6F6A61] font-light leading-relaxed max-w-xl">
              At Iragu, we believe our work should speak for itself. That&apos;s why we don&apos;t just show you photographs. We show you how we think, plan and execute.
            </p>

            {/* Supporting Brand Badge */}
            <div className="case-head-elem pt-1 flex items-center gap-2.5 text-xs sm:text-sm font-mono tracking-wider text-[#292825]">
              <span className="w-2 h-2 rounded-full bg-[#C7A978]" />
              <span className="text-[#6F6A61]">Documented Event Solutions</span>
              <span className="text-[#C7A978]">&bull;</span>
              <span className="text-[#4F918B] font-medium">Real Event Delivery</span>
            </div>
          </div>

          {/* RIGHT SIDE — Cinematic Case Study Visual (MAGUDAM '26 & SP Grand Days) */}
          <div className="lg:col-span-5 case-photo-wrap relative flex justify-center lg:justify-end">
            {/* Numbered marker */}
            <div className="case-photo-elem absolute -top-5 right-2 sm:right-6 text-[10px] sm:text-xs font-mono tracking-[0.25em] text-[#C7A978] uppercase z-20">
              01 / FEATURED STORY
            </div>

            {/* Large Featured Event Photograph (MAGUDAM '26 — Grand Production Stage) */}
            <div className="case-photo-elem group relative w-full max-w-[460px] aspect-[4/3] sm:aspect-[16/11] rounded-2xl sm:rounded-[2.5rem] overflow-hidden border-2 border-[#C7A978]/30 shadow-xl bg-[#FCFAF6]">
              <Image
                src="/images/img1.1.png"
                alt="MAGUDAM '26 — Grand Institutional Event Production"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 460px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#292825]/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Smaller Overlapping Event-Detail Photograph (SP Grand Days) */}
            <div className="case-photo-elem absolute -bottom-6 -left-3 sm:-bottom-8 sm:-left-6 w-[140px] sm:w-[180px] md:w-[210px] aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[#C7A978]/40 shadow-2xl z-20 bg-[#FCFAF6]">
              <Image
                src="/images/img1.2.png"
                alt="SP Grand Days — 2-Hour Fast-Turnaround Execution"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 140px, 210px"
              />
            </div>

            {/* Small Floating Label */}
            <div className="case-photo-elem absolute bottom-3 sm:bottom-5 right-2 sm:right-4 bg-[#FCFAF6]/95 backdrop-blur-md border border-[#DED6C9] rounded-xl px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-lg z-20">
              <p className="text-[10px] sm:text-xs font-mono tracking-[0.15em] uppercase text-[#292825] font-medium">
                REAL EVENTS. REAL EXECUTION.
              </p>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* 2. ANIMATED 4-STAGE STORYTELLING JOURNEY TIMELINE          */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="case-timeline-wrap pt-10 sm:pt-14 pb-14 sm:pb-20 border-t border-[#DED6C9]">
          {/* Timeline Sub-Eyebrow */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 sm:mb-12">
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-[#C7A978] uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F918B]" />
              <span>Our 4-Stage Execution Methodology</span>
            </div>
            <span className="text-[11px] font-mono text-[#6F6A61] uppercase tracking-wider">
              From Concept &bull; To Ground &bull; To Memory
            </span>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Animated Champagne-Gold Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-7 left-12 right-12 h-px bg-[#DED6C9] z-0">
              <div className="case-line-anim h-full bg-gradient-to-r from-[#C7A978] via-[#4F918B] to-[#C7A978] origin-left" />
            </div>

            {/* 4 Milestones Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 relative z-10">
              {storytellingStages.map((stage, sIdx) => {
                const StageIcon = stage.icon;
                return (
                  <div
                    key={sIdx}
                    className="case-stage-elem group relative p-5 sm:p-6 rounded-2xl bg-[#F7F3EA] border border-[#DED6C9] hover:border-[#C7A978] hover:bg-[#FCFAF6] transition-all duration-300 shadow-sm flex flex-col justify-between"
                  >
                    {/* Top Row: Icon + Number Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#FCFAF6] border border-[#DED6C9] group-hover:border-[#4F918B] flex items-center justify-center text-[#4F918B] group-hover:scale-105 transition-all duration-300 shadow-sm">
                        <StageIcon className="w-5 h-5 text-[#4F918B] group-hover:text-[#C7A978] transition-colors" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#C7A978] tracking-widest px-2.5 py-1 rounded-full bg-[#FCFAF6] border border-[#DED6C9]">
                        {stage.step}
                      </span>
                    </div>

                    {/* Stage Title & Subtitle */}
                    <div className="space-y-1 mb-2">
                      <h4 className="text-base sm:text-lg font-serif font-bold text-[#292825] group-hover:text-[#4F918B] transition-colors">
                        {stage.title}
                      </h4>
                      <p className="text-[11px] font-mono text-[#4F918B] uppercase tracking-wider">
                        {stage.subtitle}
                      </p>
                    </div>

                    {/* Descriptive Narrative */}
                    <p className="text-xs sm:text-sm text-[#6F6A61] font-light leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* 3. SECTION TRANSITION & IN-DEPTH CASE STUDY CARDS           */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="flex items-center justify-between pb-8 sm:pb-12 border-t border-[#DED6C9] pt-12">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#4F918B] block mb-1">
              Documented Deliverables
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#292825]">
              Featured Event Case Studies
            </h3>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#C7A978]">
            <span>Verified Results</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C7A978]" />
          </div>
        </div>

        {/* Case Study Cards Container */}
        <div className="case-study-cards-wrap space-y-10 sm:space-y-16">
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
                      sizes="(max-width: 768px) 100vw, 500px"
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
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#4F918B] hover:bg-[#437D77] text-[#FCFAF6] px-6 py-3.5 font-bold uppercase tracking-widest text-xs transition-colors shadow-sm rounded-lg"
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
                    <div className="flex items-center gap-2 text-[#4F918B] font-mono text-xs uppercase tracking-widest font-semibold">
                      <Trophy className="w-4 h-4 text-[#4F918B]" />
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
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#4F918B] hover:bg-[#437D77] text-[#FCFAF6] font-bold uppercase tracking-widest text-xs transition-colors shadow-sm rounded-lg"
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
                <h4 className="text-xs font-mono uppercase text-[#4F918B] tracking-wider mb-2 font-bold">
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
                href="/contact"
                onClick={() => setSelectedCaseStudy(null)}
                className="px-6 py-2.5 bg-[#4F918B] hover:bg-[#437D77] text-[#FCFAF6] font-bold text-xs uppercase font-mono tracking-widest transition-colors rounded-lg shadow-sm"
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
