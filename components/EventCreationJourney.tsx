"use client";

import React, { useRef } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGsap";
import { siteContent } from "@/data/siteContent";
import Link from "next/link";
import {
  Lightbulb,
  Search,
  Palette,
  ClipboardList,
  ShieldCheck,
  PartyPopper,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stepIcons = [
  Lightbulb,     // 01 — TELL US YOUR VISION
  Search,        // 02 — WE UNDERSTAND
  Palette,       // 03 — WE CREATE
  ClipboardList, // 04 — WE PLAN
  ShieldCheck,   // 05 — WE EXECUTE
  PartyPopper,   // 06 — YOU CELEBRATE
];

const stepAccents = [
  {
    gradient: "from-[#C7A978]/20 via-[#DED6C9]/10 to-transparent",
    border: "hover:border-[#C7A978]/50",
    glow: "shadow-sm",
    iconBg: "bg-[#C7A978]/10 text-[#C7A978] border-[#C7A978]/20 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    numberColor: "text-[#C7A978]",
    dot: "bg-[#C7A978]",
  },
  {
    gradient: "from-[#4F918B]/15 via-[#DED6C9]/10 to-transparent",
    border: "hover:border-[#4F918B]/50",
    glow: "shadow-sm",
    iconBg: "bg-[#4F918B]/10 text-[#4F918B] border-[#4F918B]/20 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    numberColor: "text-[#4F918B]",
    dot: "bg-[#4F918B]",
  },
  {
    gradient: "from-[#AEBBAA]/15 via-[#DED6C9]/10 to-transparent",
    border: "hover:border-[#AEBBAA]/50",
    glow: "shadow-sm",
    iconBg: "bg-[#AEBBAA]/10 text-[#AEBBAA] border-[#AEBBAA]/20 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    numberColor: "text-[#AEBBAA]",
    dot: "bg-[#AEBBAA]",
  },
  {
    gradient: "from-[#D8C9B5]/20 via-[#F1EADF]/10 to-transparent",
    border: "hover:border-[#D8C9B5]/60",
    glow: "shadow-sm",
    iconBg: "bg-[#D8C9B5]/20 text-[#928B81] border-[#D8C9B5]/30 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    numberColor: "text-[#928B81]",
    dot: "bg-[#D8C9B5]",
  },
  {
    gradient: "from-[#E8C5B8]/15 via-[#DED6C9]/10 to-transparent",
    border: "hover:border-[#E8C5B8]/50",
    glow: "shadow-sm",
    iconBg: "bg-[#E8C5B8]/15 text-[#C77778] border-[#E8C5B8]/25 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    numberColor: "text-[#C77778]",
    dot: "bg-[#E8C5B8]",
  },
  {
    gradient: "from-[#E5D0B5]/20 via-[#F1EADF]/10 to-transparent",
    border: "hover:border-[#E5D0B5]/60",
    glow: "shadow-sm",
    iconBg: "bg-[#E5D0B5]/20 text-[#C7A978] border-[#E5D0B5]/30 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    numberColor: "text-[#C7A978]",
    dot: "bg-[#E5D0B5]",
  },
];

export default function EventCreationJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const data = siteContent.howWeWork;

  useGSAP(
    () => {
      if (!containerRef.current) return;

      /* Header animation */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".process-head-elem"),
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

      /* Desktop process cards */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".timeline-card-desktop"),
        { y: 40, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".timeline-desktop-wrap"),
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      /* Mobile timeline nodes */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".timeline-card-mobile"),
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".timeline-mobile-wrap"),
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      /* Closing statement animation */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".process-closing-elem"),
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".process-closing-wrap"),
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative w-full bg-[#F1EADF] overflow-hidden py-24 md:py-32 border-t border-[#DED6C9]"
    >
      {/* Subtle background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#C7A978]/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#DED6C9]/40 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16 md:mb-20">
          <div className="process-head-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#4F918B]/30 bg-[#FCFAF6] text-[#4F918B] text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7A978] animate-pulse" />
            Our Systematic Approach
          </div>

          <h2 className="process-head-elem text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#292825] leading-tight">
            How We Work
          </h2>

          <p className="process-head-elem text-base md:text-lg text-[#6F6A61] font-light max-w-xl mx-auto">
            A seamless six-step journey transforming your initial thoughts into a flawless, stress-free celebration.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════════════════ */}
        {/* DESKTOP VIEW: Connected Visual Process Journey (hidden on mobile) */}
        {/* ══════════════════════════════════════════════════════════════ */}
        <div className="timeline-desktop-wrap hidden md:block">
          {/* Top Row: Steps 01, 02, 03 */}
          <div className="relative grid grid-cols-3 gap-6 lg:gap-8 mb-12">
            {/* Connecting horizontal line */}
            <div className="absolute top-1/2 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-[#C7A978]/40 via-[#DED6C9] to-[#4F918B]/30 -translate-y-1/2 -z-0 pointer-events-none" />

            {data.steps.slice(0, 3).map((step, idx) => {
              const Icon = stepIcons[idx] || Sparkles;
              const accent = stepAccents[idx] || stepAccents[0];
              return (
                <div
                  key={step.step}
                  className={`timeline-card-desktop group relative p-7 rounded-3xl border border-[#DED6C9] bg-[#FCFAF6] ${accent.border} ${accent.glow} transition-all duration-400 hover:-translate-y-2 flex flex-col justify-between`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${accent.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <span className={`font-mono text-xs font-bold tracking-widest ${accent.numberColor} uppercase px-3 py-1 rounded-full bg-[#F7F3EA] border border-[#DED6C9]`}>
                        STEP {step.step}
                      </span>
                      <div
                        className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-300 ${accent.iconBg}`}
                      >
                        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-[#292825] group-hover:text-[#292825] mb-2.5 uppercase leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-sm text-[#6F6A61] group-hover:text-[#6F6A61] font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-6 pt-4 border-t border-[#DED6C9] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${accent.dot}`} />
                      <span className="text-[11px] font-mono text-[#928B81] group-hover:text-[#6F6A61] uppercase tracking-wider">
                        Phase {idx + 1}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#928B81] group-hover:text-[#4F918B] group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Flow Direction Indicator between rows */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-3 px-5 py-2 rounded-full border border-[#DED6C9] bg-[#F7F3EA] text-xs font-mono text-[#6F6A61] uppercase tracking-widest">
              <span>Concept &amp; Planning</span>
              <ArrowRight className="w-4 h-4 text-[#4F918B]" />
              <span className="text-[#4F918B]">Execution &amp; Celebration</span>
            </div>
          </div>

          {/* Bottom Row: Steps 04, 05, 06 */}
          <div className="relative grid grid-cols-3 gap-6 lg:gap-8">
            {/* Connecting horizontal line */}
            <div className="absolute top-1/2 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-[#D8C9B5]/50 via-[#E8C5B8]/40 to-[#AEBBAA]/40 -translate-y-1/2 -z-0 pointer-events-none" />

            {data.steps.slice(3, 6).map((step, idx) => {
              const actualIdx = idx + 3;
              const Icon = stepIcons[actualIdx] || Sparkles;
              const accent = stepAccents[actualIdx] || stepAccents[0];
              return (
                <div
                  key={step.step}
                  className={`timeline-card-desktop group relative p-7 rounded-3xl border border-[#DED6C9] bg-[#FCFAF6] ${accent.border} ${accent.glow} transition-all duration-400 hover:-translate-y-2 flex flex-col justify-between`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${accent.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <span className={`font-mono text-xs font-bold tracking-widest ${accent.numberColor} uppercase px-3 py-1 rounded-full bg-[#F7F3EA] border border-[#DED6C9]`}>
                        STEP {step.step}
                      </span>
                      <div
                        className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-300 ${accent.iconBg}`}
                      >
                        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-[#292825] group-hover:text-[#292825] mb-2.5 uppercase leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-sm text-[#6F6A61] group-hover:text-[#6F6A61] font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-6 pt-4 border-t border-[#DED6C9] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${accent.dot}`} />
                      <span className="text-[11px] font-mono text-[#928B81] group-hover:text-[#6F6A61] uppercase tracking-wider">
                        Phase {actualIdx + 1}
                      </span>
                    </div>
                    {actualIdx === 5 ? (
                      <CheckCircle2 className="w-4 h-4 text-[#AEBBAA]" />
                    ) : (
                      <ArrowRight className="w-4 h-4 text-[#928B81] group-hover:text-[#4F918B] group-hover:translate-x-1 transition-all" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════ */}
        {/* MOBILE VIEW: Vertical Connected Timeline (visible on mobile)  */}
        {/* ══════════════════════════════════════════════════════════════ */}
        <div className="timeline-mobile-wrap md:hidden relative pl-5 sm:pl-6 border-l-2 border-[#C7A978]/50 ml-6 space-y-8 sm:space-y-10 my-8 sm:my-10">
          {data.steps.map((step, idx) => {
            const Icon = stepIcons[idx] || Sparkles;
            const accent = stepAccents[idx] || stepAccents[0];
            return (
              <div
                key={step.step}
                className="timeline-card-mobile relative"
              >
                {/* Timeline node marker on the line */}
                <div className="absolute -left-[31px] top-1.5 w-5 h-5 rounded-full bg-[#FCFAF6] border-2 border-[#4F918B] flex items-center justify-center">
                  <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
                </div>

                <div
                  className={`p-4 sm:p-6 rounded-2xl border border-[#DED6C9] bg-[#FCFAF6] ${accent.border} ${accent.glow} transition-all`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`font-mono text-xs font-bold tracking-widest ${accent.numberColor}`}>
                      STEP {step.step}
                    </span>
                    <div className={`p-2 rounded-xl border ${accent.iconBg}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-[#292825] mb-2 uppercase">
                    {step.title}
                  </h3>

                  <p className="text-xs md:text-sm text-[#6F6A61] font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Closing Statement Banner ── */}
        <div className="process-closing-wrap mt-16 md:mt-24">
          <div className="relative p-8 md:p-12 rounded-3xl border border-[#DED6C9] bg-gradient-to-r from-[#F7F3EA] via-[#FCFAF6] to-[#F7F3EA] text-center max-w-3xl mx-auto overflow-hidden shadow-sm">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(199,169,120,0.08),transparent)] pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <span className="process-closing-elem inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#4F918B]/30 bg-[#FCFAF6] text-[#4F918B] font-mono text-[11px] uppercase tracking-widest">
                Our Promise
              </span>

              <h3 className="process-closing-elem text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#292825] tracking-tight">
                {data.closing}
              </h3>

              <p className="process-closing-elem text-sm text-[#6F6A61] font-light max-w-xl mx-auto">
                You enjoy the celebration with your guests. We take care of every moving part from setup to pack-down.
              </p>

              <div className="process-closing-elem pt-4">
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-3 bg-[#4F918B] hover:bg-[#437D77] text-[#FCFAF6] px-8 py-4 font-bold uppercase tracking-widest text-xs rounded-none transition-all duration-300 shadow-sm"
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
