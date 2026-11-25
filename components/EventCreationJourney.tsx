"use client";

import React, { useRef, useState } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGsap";
import { siteContent } from "@/data/siteContent";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ── CUSTOM VECTOR ILLUSTRATIONS FOR THE 6 STEPS ──

function VisionIllustration({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="12" y="14" width="28" height="38" rx="4" fill="#FCFAF6" stroke="#C7A978" strokeWidth="1.5" />
      <line x1="18" y1="24" x2="32" y2="24" stroke="#6F6A61" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18" y1="30" x2="34" y2="30" stroke="#6F6A61" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18" y1="36" x2="28" y2="36" stroke="#6F6A61" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="44" cy="24" r="11" fill="#FAF6F0" stroke="#4F918B" strokeWidth="1.5" />
      <path d="M41 35H47" stroke="#4F918B" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M42 38H46" stroke="#4F918B" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M44 19V23M41 22L47 22" stroke="#C7A978" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M44 8L45 11L48 12L45 13L44 16L43 13L40 12L43 11L44 8Z" fill="#C7A978" />
      <circle cx="56" cy="18" r="1.5" fill="#4F918B" />
      <circle cx="33" cy="14" r="1.5" fill="#C7A978" />
    </svg>
  );
}

function UnderstandIllustration({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="10" y="16" width="36" height="36" rx="4" fill="#FCFAF6" stroke="#AEBBAA" strokeWidth="1.5" strokeDasharray="3 3" />
      <rect x="16" y="22" width="10" height="10" rx="1.5" fill="#AEBBAA" fillOpacity="0.25" stroke="#AEBBAA" strokeWidth="1" />
      <rect x="30" y="22" width="10" height="10" rx="1.5" fill="#C7A978" fillOpacity="0.2" stroke="#C7A978" strokeWidth="1" />
      <rect x="16" y="36" width="24" height="10" rx="1.5" fill="#4F918B" fillOpacity="0.15" stroke="#4F918B" strokeWidth="1" />
      <circle cx="42" cy="30" r="12" fill="#FAF6F0" stroke="#4F918B" strokeWidth="1.75" />
      <line x1="51" y1="39" x2="58" y2="48" stroke="#4F918B" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M37 30L40 33L47 26" stroke="#C7A978" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CreateIllustration({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M32 10C19.85 10 10 19.85 10 32C10 40.5 15.2 46.8 23 48.5C24.5 48.8 25.5 47.5 25.5 46C25.5 44.8 25 43.5 25 42C25 39.8 26.8 38 29 38H34C44 38 52 30 52 20C52 14.5 43 10 32 10Z"
        fill="#FCFAF6"
        stroke="#C7A978"
        strokeWidth="1.5"
      />
      <circle cx="21" cy="22" r="3" fill="#4F918B" />
      <circle cx="31" cy="18" r="3" fill="#C7A978" />
      <circle cx="41" cy="22" r="3" fill="#AEBBAA" />
      <circle cx="21" cy="34" r="3" fill="#D8B5A8" />
      <path d="M35 48C38 43 45 40 50 38" stroke="#4F918B" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M43 42C44 39 48 38 48 38C48 38 47 42 45 43" fill="#AEBBAA" stroke="#4F918B" strokeWidth="1" />
      <path d="M39 45C39 42 42 41 42 41C42 41 41 44 40 46" fill="#C7A978" stroke="#C7A978" strokeWidth="1" />
    </svg>
  );
}

function PlanIllustration({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="12" y="14" width="34" height="38" rx="4" fill="#FCFAF6" stroke="#4F918B" strokeWidth="1.5" />
      <path d="M12 24H46" stroke="#4F918B" strokeWidth="1.5" />
      <line x1="20" y1="10" x2="20" y2="15" stroke="#C7A978" strokeWidth="2" strokeLinecap="round" />
      <line x1="38" y1="10" x2="38" y2="15" stroke="#C7A978" strokeWidth="2" strokeLinecap="round" />
      <circle cx="20" cy="31" r="2" fill="#4F918B" />
      <circle cx="29" cy="31" r="2" fill="#AEBBAA" />
      <circle cx="38" cy="31" r="2" fill="#C7A978" />
      <circle cx="20" cy="40" r="2" fill="#C7A978" />
      <circle cx="29" cy="40" r="2" fill="#4F918B" />
      <circle cx="46" cy="42" r="11" fill="#FAF6F0" stroke="#C7A978" strokeWidth="1.75" />
      <polyline points="46,36 46,42 50,44" stroke="#4F918B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ExecuteIllustration({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 12L28 36" stroke="#C7A978" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M52 12L36 36" stroke="#C7A978" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M14 48L20 40H44L50 48H14Z" fill="#FCFAF6" stroke="#4F918B" strokeWidth="1.5" />
      <path
        d="M32 18L44 23V31C44 38 38 43 32 46C26 43 20 38 20 31V23L32 18Z"
        fill="#FAF6F0"
        stroke="#4F918B"
        strokeWidth="1.5"
      />
      <path d="M28 31L31 34L37 27" stroke="#C7A978" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CelebrateIllustration({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M22 18L26 34C26.5 36 28 37 30 37V48H24M30 48H34" stroke="#C7A978" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 18H34L30 34C29.5 35 28 35 27 34L22 18Z" fill="#FAF6F0" />
      <path d="M42 18L38 34C37.5 36 36 37 34 37V48H40M34 48H30" stroke="#4F918B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 24H32L30 32C29 33 27 33 26 32L24 24Z" fill="#C7A978" fillOpacity="0.35" />
      <path d="M40 24H32L34 32C35 33 37 33 38 32L40 24Z" fill="#4F918B" fillOpacity="0.3" />
      <path d="M32 8L33.5 12L37.5 13.5L33.5 15L32 19L30.5 15L26.5 13.5L30.5 12L32 8Z" fill="#C7A978" />
      <circle cx="16" cy="14" r="1.5" fill="#4F918B" />
      <circle cx="48" cy="14" r="1.5" fill="#C7A978" />
      <circle cx="46" cy="28" r="1" fill="#AEBBAA" />
      <circle cx="18" cy="28" r="1" fill="#C7A978" />
      <path d="M30 16C31 14 33 14 34 16" stroke="#C7A978" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

const stepIllustrations = [
  VisionIllustration,
  UnderstandIllustration,
  CreateIllustration,
  PlanIllustration,
  ExecuteIllustration,
  CelebrateIllustration,
];

const stepMeta = [
  { phase: "Phase 01", label: "Consultation", color: "#C7A978", tagBg: "bg-[#C7A978]/10 text-[#C7A978] border-[#C7A978]/30" },
  { phase: "Phase 02", label: "Discovery", color: "#4F918B", tagBg: "bg-[#4F918B]/10 text-[#4F918B] border-[#4F918B]/30" },
  { phase: "Phase 03", label: "Design Concept", color: "#AEBBAA", tagBg: "bg-[#AEBBAA]/20 text-[#5B7558] border-[#AEBBAA]/40" },
  { phase: "Phase 04", label: "Production Plan", color: "#D8B5A8", tagBg: "bg-[#D8B5A8]/20 text-[#9E6554] border-[#D8B5A8]/40" },
  { phase: "Phase 05", label: "Event Execution", color: "#4F918B", tagBg: "bg-[#4F918B]/10 text-[#4F918B] border-[#4F918B]/30" },
  { phase: "Phase 06", label: "Pure Celebration", color: "#C7A978", tagBg: "bg-[#C7A978]/15 text-[#C7A978] border-[#C7A978]/40" },
];

export default function EventCreationJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const data = siteContent.howWeWork;

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // 1. Header reveal
      if (!isReduced) {
        gsap.fromTo(
          containerRef.current.querySelectorAll(".journey-head-elem"),
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
      }

      // 2. Timeline SVG progressive stroke draw
      if (pathRef.current && !isReduced) {
        const len = pathRef.current.getTotalLength();
        gsap.set(pathRef.current, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(pathRef.current, {
          strokeDashoffset: 0,
          duration: 1.8,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".timeline-flow-wrap"),
            start: "top 78%",
            toggleActions: "play none none none",
          },
        });
      }

      // 3. Step Nodes sequential reveal
      const nodes = containerRef.current.querySelectorAll(".journey-step-node");
      if (nodes.length && !isReduced) {
        gsap.fromTo(
          nodes,
          { y: 35, opacity: 0, scale: 0.94 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current.querySelector(".timeline-flow-wrap"),
              start: "top 78%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 4. Promise section reveal
      const promiseElems = containerRef.current.querySelectorAll(".promise-elem");
      if (promiseElems.length && !isReduced) {
        gsap.fromTo(
          promiseElems,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current.querySelector(".promise-section-wrap"),
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative w-full bg-[#F1EADF] overflow-hidden py-24 md:py-36 border-t border-[#DED6C9]"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[950px] h-[450px] bg-[#C7A978]/6 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[350px] bg-[#4F918B]/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-20">
          <div className="journey-head-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#4F918B]/30 bg-[#FCFAF6] text-[#4F918B] text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7A978] animate-pulse" />
            The Iragu Event Journey
          </div>

          <h2 className="journey-head-elem text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#292825] leading-tight">
            How We Work
          </h2>

          <p className="journey-head-elem text-base md:text-lg text-[#6F6A61] font-light max-w-2xl mx-auto leading-relaxed">
            A seamless six-step journey transforming your initial thoughts into a flawless, stress-free celebration.
          </p>
        </div>

        {/* ── Integrated Flow Transition Badge ── */}
        <div className="journey-head-elem flex items-center justify-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#C7A978]/40 bg-[#FCFAF6] shadow-sm text-xs font-mono tracking-widest text-[#6F6A61] uppercase">
            <span className="font-semibold text-[#292825]">Concept &amp; Planning</span>
            <span className="flex items-center text-[#4F918B]">
              <span className="w-6 h-px bg-[#4F918B]/50" />
              <ArrowRight className="w-3.5 h-3.5 ml-0.5 animate-pulse" />
            </span>
            <span className="text-[#4F918B] font-semibold">Execution &amp; Celebration</span>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════════════ */}
        {/* DESKTOP LAYOUT: Continuous Flowing Timeline (Alternating Top / Bottom)    */}
        {/* ══════════════════════════════════════════════════════════════════════════ */}
        <div className="timeline-flow-wrap hidden lg:block relative w-full my-6">
          {/* Continuous Flowing Horizontal SVG Line */}
          <div className="relative w-full h-[580px]">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
              viewBox="0 0 1200 580"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="journeyTimelineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C7A978" stopOpacity="0.4" />
                  <stop offset="45%" stopColor="#4F918B" stopOpacity="0.7" />
                  <stop offset="70%" stopColor="#AEBBAA" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#C7A978" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              {/* Main horizontal line running along y=290 */}
              <path
                ref={pathRef}
                d="M 60,290 L 1140,290"
                stroke="url(#journeyTimelineGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Vertical stems connecting timeline to steps */}
              {/* Step 01 (x=100, top: y=250 to y=290) */}
              <line x1="100" y1="240" x2="100" y2="290" stroke={activeStep === 0 ? "#C7A978" : "rgba(199,169,120,0.4)"} strokeWidth={activeStep === 0 ? "2.5" : "1.5"} strokeDasharray="3 3" />
              {/* Step 02 (x=300, bottom: y=290 to y=340) */}
              <line x1="300" y1="290" x2="300" y2="340" stroke={activeStep === 1 ? "#4F918B" : "rgba(79,145,139,0.4)"} strokeWidth={activeStep === 1 ? "2.5" : "1.5"} strokeDasharray="3 3" />
              {/* Step 03 (x=500, top: y=240 to y=290) */}
              <line x1="500" y1="240" x2="500" y2="290" stroke={activeStep === 2 ? "#AEBBAA" : "rgba(174,187,170,0.4)"} strokeWidth={activeStep === 2 ? "2.5" : "1.5"} strokeDasharray="3 3" />
              {/* Step 04 (x=700, bottom: y=290 to y=340) */}
              <line x1="700" y1="290" x2="700" y2="340" stroke={activeStep === 3 ? "#D8B5A8" : "rgba(216,181,168,0.4)"} strokeWidth={activeStep === 3 ? "2.5" : "1.5"} strokeDasharray="3 3" />
              {/* Step 05 (x=900, top: y=240 to y=290) */}
              <line x1="900" y1="240" x2="900" y2="290" stroke={activeStep === 4 ? "#4F918B" : "rgba(79,145,139,0.4)"} strokeWidth={activeStep === 4 ? "2.5" : "1.5"} strokeDasharray="3 3" />
              {/* Step 06 (x=1100, bottom: y=290 to y=340) */}
              <line x1="1100" y1="290" x2="1100" y2="340" stroke={activeStep === 5 ? "#C7A978" : "rgba(199,169,120,0.5)"} strokeWidth={activeStep === 5 ? "2.5" : "1.5"} strokeDasharray="3 3" />

              {/* Node markers on the central line */}
              {[100, 300, 500, 700, 900, 1100].map((x, idx) => {
                const isHovered = activeStep === idx;
                const isFinal = idx === 5;
                return (
                  <g key={`timeline-node-${idx}`}>
                    {/* Outer halo */}
                    <circle
                      cx={x}
                      cy="290"
                      r={isHovered ? "18" : isFinal ? "14" : "10"}
                      fill={isFinal ? "rgba(199,169,120,0.18)" : "rgba(252,250,246,0.9)"}
                      stroke={isHovered ? stepMeta[idx].color : isFinal ? "#C7A978" : "rgba(199,169,120,0.5)"}
                      strokeWidth={isHovered ? "2" : "1.5"}
                      className="transition-all duration-300"
                    />
                    {/* Inner core dot */}
                    <circle
                      cx={x}
                      cy="290"
                      r={isHovered ? "5" : isFinal ? "4.5" : "3.5"}
                      fill={stepMeta[idx].color}
                      className="transition-all duration-300"
                    />
                  </g>
                );
              })}
            </svg>

            {/* 6 Step Cards positioned alternating above and below */}
            <div className="absolute inset-0 grid grid-cols-6 gap-4 xl:gap-6 z-20">
              {data.steps.map((step, idx) => {
                const IllustrationComponent = stepIllustrations[idx];
                const meta = stepMeta[idx];
                const isTop = idx % 2 === 0; // 0, 2, 4 are top; 1, 3, 5 are bottom
                const isHovered = activeStep === idx;
                const isFinal = idx === 5;

                return (
                  <div
                    key={step.step}
                    className={`journey-step-node relative flex flex-col justify-between ${
                      isTop ? "pb-4" : "pt-4"
                    }`}
                    style={{ gridColumnStart: idx + 1 }}
                    onMouseEnter={() => setActiveStep(idx)}
                    onMouseLeave={() => setActiveStep(null)}
                    onFocus={() => setActiveStep(idx)}
                    onBlur={() => setActiveStep(null)}
                    tabIndex={0}
                    role="button"
                    aria-label={`Step ${step.step}: ${step.title}`}
                  >
                    {/* Top Step Content (for idx 0, 2, 4) */}
                    {isTop ? (
                      <div
                        className={`h-[240px] flex flex-col justify-end text-center p-4 rounded-2xl transition-all duration-300 ${
                          isHovered
                            ? "bg-[#FCFAF6] shadow-[0_10px_30px_rgba(41,40,37,0.06)] border border-[#C7A978]/30 -translate-y-2"
                            : "bg-[#FCFAF6]/60 border border-[#DED6C9]/60 hover:bg-[#FCFAF6]"
                        }`}
                      >
                        {/* Illustration & Number */}
                        <div className="flex items-center justify-between mb-2 px-1">
                          <span
                            className={`text-2xl xl:text-3xl font-serif font-bold transition-all duration-300 ${
                              isHovered ? "text-[#292825] scale-110" : "text-[#928B81]"
                            }`}
                          >
                            {step.step}
                          </span>
                          <div className="p-1 rounded-xl bg-[#FAF6F0] transition-transform duration-300 group-hover:scale-105">
                            <IllustrationComponent className="w-10 h-10" />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xs xl:text-sm font-serif font-bold text-[#292825] tracking-tight uppercase leading-snug mb-1.5">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[11px] xl:text-xs text-[#6F6A61] leading-relaxed font-light line-clamp-3">
                          {step.description}
                        </p>

                        {/* Tag */}
                        <div className="mt-2.5">
                          <span className={`inline-block px-2 py-0.5 text-[9px] font-mono tracking-wider uppercase rounded border ${meta.tagBg}`}>
                            {meta.label}
                          </span>
                        </div>
                      </div>
                    ) : (
                      // Empty spacer for the top half
                      <div className="h-[250px]" />
                    )}

                    {/* Bottom Step Content (for idx 1, 3, 5) */}
                    {!isTop ? (
                      <div
                        className={`h-[240px] flex flex-col justify-start text-center p-4 rounded-2xl transition-all duration-300 ${
                          isFinal
                            ? isHovered
                              ? "bg-[#FAF6F0] shadow-[0_12px_36px_rgba(199,169,120,0.16)] border-2 border-[#C7A978] translate-y-2"
                              : "bg-[#FAF6F0]/80 border-2 border-[#C7A978]/60 shadow-sm"
                            : isHovered
                            ? "bg-[#FCFAF6] shadow-[0_10px_30px_rgba(41,40,37,0.06)] border border-[#C7A978]/30 translate-y-2"
                            : "bg-[#FCFAF6]/60 border border-[#DED6C9]/60 hover:bg-[#FCFAF6]"
                        }`}
                      >
                        {/* Tag at top of lower card */}
                        <div className="mb-2">
                          <span className={`inline-block px-2 py-0.5 text-[9px] font-mono tracking-wider uppercase rounded border ${meta.tagBg}`}>
                            {isFinal ? "★ Completion" : meta.label}
                          </span>
                        </div>

                        {/* Illustration & Number */}
                        <div className="flex items-center justify-between mb-2 px-1">
                          <span
                            className={`text-2xl xl:text-3xl font-serif font-bold transition-all duration-300 ${
                              isHovered ? "text-[#292825] scale-110" : "text-[#928B81]"
                            }`}
                          >
                            {step.step}
                          </span>
                          <div className="p-1 rounded-xl bg-[#FAF6F0] transition-transform duration-300 group-hover:scale-105">
                            <IllustrationComponent className="w-10 h-10" />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xs xl:text-sm font-serif font-bold text-[#292825] tracking-tight uppercase leading-snug mb-1.5">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[11px] xl:text-xs text-[#6F6A61] leading-relaxed font-light line-clamp-3">
                          {step.description}
                        </p>
                      </div>
                    ) : (
                      // Empty spacer for the bottom half
                      <div className="h-[250px]" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════════════ */}
        {/* TABLET LAYOUT (md to lg): Staggered Connected Grid                         */}
        {/* ══════════════════════════════════════════════════════════════════════════ */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6 my-8 relative">
          {data.steps.map((step, idx) => {
            const IllustrationComponent = stepIllustrations[idx];
            const meta = stepMeta[idx];
            const isFinal = idx === 5;

            return (
              <div
                key={`tablet-step-${step.step}`}
                className={`journey-step-node p-6 rounded-3xl border transition-all duration-300 ${
                  isFinal
                    ? "bg-[#FAF6F0] border-2 border-[#C7A978] shadow-md"
                    : "bg-[#FCFAF6] border-[#DED6C9] hover:border-[#C7A978]/60 shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-serif font-bold text-[#C7A978]">
                      {step.step}
                    </span>
                    <span className={`px-2.5 py-0.5 text-[10px] font-mono tracking-wider uppercase rounded border ${meta.tagBg}`}>
                      {meta.label}
                    </span>
                  </div>
                  <div className="p-2 rounded-2xl bg-[#F7F3EA] border border-[#DED6C9]">
                    <IllustrationComponent className="w-9 h-9" />
                  </div>
                </div>

                <h3 className="text-lg font-serif font-bold text-[#292825] uppercase tracking-tight mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-[#6F6A61] leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ══════════════════════════════════════════════════════════════════════════ */}
        {/* MOBILE LAYOUT (< md): Clean Connected Vertical Timeline                    */}
        {/* ══════════════════════════════════════════════════════════════════════════ */}
        <div className="md:hidden relative pl-6 border-l-2 border-[#C7A978]/40 space-y-10 ml-4 my-8">
          {data.steps.map((step, idx) => {
            const IllustrationComponent = stepIllustrations[idx];
            const meta = stepMeta[idx];
            const isFinal = idx === 5;

            return (
              <div
                key={`mobile-step-${step.step}`}
                className="journey-step-node relative group"
              >
                {/* Node pin on the vertical line */}
                <span
                  className={`absolute -left-[33px] top-1.5 w-5 h-5 rounded-full flex items-center justify-center transition-transform ${
                    isFinal
                      ? "bg-[#C7A978] border-2 border-[#FCFAF6] shadow-sm scale-110"
                      : "bg-[#FCFAF6] border-2 border-[#4F918B]"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isFinal ? "bg-[#FCFAF6]" : "bg-[#4F918B]"
                    }`}
                  />
                </span>

                {/* Card Container */}
                <div
                  className={`p-5 rounded-2xl border transition-all ${
                    isFinal
                      ? "bg-[#FAF6F0] border-2 border-[#C7A978]/80 shadow-md"
                      : "bg-[#FCFAF6] border-[#DED6C9] shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl font-serif font-bold text-[#C7A978]">
                        {step.step}
                      </span>
                      <span className={`px-2 py-0.5 text-[9px] font-mono tracking-wider uppercase rounded border ${meta.tagBg}`}>
                        {meta.label}
                      </span>
                    </div>
                    <div className="p-1.5 rounded-xl bg-[#FAF6F0] border border-[#DED6C9]/60">
                      <IllustrationComponent className="w-8 h-8" />
                    </div>
                  </div>

                  <h3 className="text-base font-serif font-bold text-[#292825] uppercase tracking-tight mb-1.5">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6F6A61] leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ══════════════════════════════════════════════════════════════════════════ */}
        {/* ── REDESIGNED "OUR PROMISE" SECTION ──                                    */}
        {/* ══════════════════════════════════════════════════════════════════════════ */}
        <div className="promise-section-wrap mt-20 md:mt-32 max-w-5xl mx-auto">
          <div className="relative p-8 sm:p-12 md:p-16 rounded-3xl border border-[#C7A978]/35 bg-gradient-to-b from-[#FAF6F0] to-[#F7F3EA] text-center overflow-hidden shadow-sm">
            {/* Subtle decorative background orbit */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
                <circle cx="400" cy="200" r="280" stroke="#C7A978" strokeWidth="0.75" strokeDasharray="8 8" />
                <circle cx="400" cy="200" r="180" stroke="#4F918B" strokeWidth="0.5" strokeOpacity="0.3" />
              </svg>
            </div>

            <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
              {/* Eyebrow */}
              <div className="promise-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C7A978]/40 bg-[#FCFAF6] text-[#C7A978] text-[10px] sm:text-xs font-mono tracking-[0.25em] uppercase font-semibold shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4F918B]" />
                OUR PROMISE
              </div>

              {/* Editorial Statement */}
              <h3 className="promise-elem text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#292825] leading-tight">
                <span className="text-[#4F918B]">Simple for you.</span><br />
                <span className="text-[#292825] font-light">Detailed</span>{" "}
                <span className="text-[#C7A978] italic font-serif">behind the scenes.</span>
              </h3>

              {/* Supporting description */}
              <p className="promise-elem text-sm sm:text-base md:text-lg text-[#6F6A61] font-light max-w-2xl mx-auto leading-relaxed">
                You enjoy your special celebration with your family, friends, guests or customers.
                Our team orchestrates every single moving part behind the scenes — from planning and vendor coordination to stage production and event-day execution.
              </p>

              {/* Behind the scenes orchestrator visual indicator */}
              <div className="promise-elem pt-3 pb-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-mono text-[#6F6A61]">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6F0] border border-[#DED6C9]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4F918B]" />
                  <span>Single Point of Contact</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6F0] border border-[#DED6C9]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A978]" />
                  <span>100% Vendor Coordination</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6F0] border border-[#DED6C9]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#AEBBAA]" />
                  <span>Zero Stress for You</span>
                </div>
              </div>

              {/* Call to action button */}
              <div className="promise-elem pt-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-[#4F918B] hover:bg-[#3F7A75] text-[#FCFAF6] px-8 py-4 font-bold uppercase tracking-widest text-xs rounded-none transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span>Start Your Event Journey</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
