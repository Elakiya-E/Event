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
    gradient: "from-teal-500/20 to-teal-900/5",
    border: "hover:border-teal-500/50",
    glow: "shadow-[0_0_25px_rgba(20,184,166,0.15)]",
    iconBg: "bg-teal-500/10 text-teal-400 border-teal-500/20 group-hover:bg-teal-500 group-hover:text-black",
    numberColor: "text-teal-400",
    dot: "bg-teal-400",
  },
  {
    gradient: "from-sky-500/20 to-blue-900/5",
    border: "hover:border-sky-500/50",
    glow: "shadow-[0_0_25px_rgba(14,165,233,0.15)]",
    iconBg: "bg-sky-500/10 text-sky-400 border-sky-500/20 group-hover:bg-sky-500 group-hover:text-black",
    numberColor: "text-sky-400",
    dot: "bg-sky-400",
  },
  {
    gradient: "from-violet-500/20 to-purple-900/5",
    border: "hover:border-violet-500/50",
    glow: "shadow-[0_0_25px_rgba(139,92,246,0.15)]",
    iconBg: "bg-violet-500/10 text-violet-400 border-violet-500/20 group-hover:bg-violet-500 group-hover:text-black",
    numberColor: "text-violet-400",
    dot: "bg-violet-400",
  },
  {
    gradient: "from-amber-500/20 to-orange-900/5",
    border: "hover:border-amber-500/50",
    glow: "shadow-[0_0_25px_rgba(245,158,11,0.15)]",
    iconBg: "bg-amber-500/10 text-amber-400 border-amber-500/20 group-hover:bg-amber-500 group-hover:text-black",
    numberColor: "text-amber-400",
    dot: "bg-amber-400",
  },
  {
    gradient: "from-rose-500/20 to-red-900/5",
    border: "hover:border-rose-500/50",
    glow: "shadow-[0_0_25px_rgba(244,63,94,0.15)]",
    iconBg: "bg-rose-500/10 text-rose-400 border-rose-500/20 group-hover:bg-rose-500 group-hover:text-black",
    numberColor: "text-rose-400",
    dot: "bg-rose-400",
  },
  {
    gradient: "from-emerald-500/20 to-teal-900/5",
    border: "hover:border-emerald-500/50",
    glow: "shadow-[0_0_25px_rgba(16,185,129,0.15)]",
    iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-black",
    numberColor: "text-emerald-400",
    dot: "bg-emerald-400",
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
      className="relative w-full bg-[#030303] overflow-hidden py-24 md:py-32 border-t border-neutral-800/60"
    >
      {/* Subtle background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-teal-500/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-emerald-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16 md:mb-20">
          <div className="process-head-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/20 bg-teal-950/30 text-teal-400 text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            Our Systematic Approach
          </div>

          <h2 className="process-head-elem text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
            How We Work
          </h2>

          <p className="process-head-elem text-base md:text-lg text-neutral-400 font-light max-w-xl mx-auto">
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
            <div className="absolute top-1/2 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-teal-500/30 via-sky-500/30 to-violet-500/30 -translate-y-1/2 -z-0 pointer-events-none" />

            {data.steps.slice(0, 3).map((step, idx) => {
              const Icon = stepIcons[idx] || Sparkles;
              const accent = stepAccents[idx] || stepAccents[0];
              return (
                <div
                  key={step.step}
                  className={`timeline-card-desktop group relative p-7 rounded-3xl border border-neutral-800/90 bg-neutral-950/70 backdrop-blur-md ${accent.border} ${accent.glow} transition-all duration-400 hover:-translate-y-2 flex flex-col justify-between`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${accent.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <span className={`font-mono text-xs font-bold tracking-widest ${accent.numberColor} uppercase px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800`}>
                        STEP {step.step}
                      </span>
                      <div
                        className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-300 ${accent.iconBg}`}
                      >
                        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-white mb-2.5 uppercase leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-sm text-neutral-400 group-hover:text-neutral-300 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-6 pt-4 border-t border-neutral-800/60 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${accent.dot}`} />
                      <span className="text-[11px] font-mono text-neutral-500 group-hover:text-neutral-400 uppercase tracking-wider">
                        Phase {idx + 1}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-teal-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Flow Direction Indicator between rows */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-3 px-5 py-2 rounded-full border border-neutral-800 bg-neutral-900/60 text-xs font-mono text-neutral-400 uppercase tracking-widest">
              <span>Concept &amp; Planning</span>
              <ArrowRight className="w-4 h-4 text-teal-400" />
              <span className="text-teal-400">Execution &amp; Celebration</span>
            </div>
          </div>

          {/* Bottom Row: Steps 04, 05, 06 */}
          <div className="relative grid grid-cols-3 gap-6 lg:gap-8">
            {/* Connecting horizontal line */}
            <div className="absolute top-1/2 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-amber-500/30 via-rose-500/30 to-emerald-500/30 -translate-y-1/2 -z-0 pointer-events-none" />

            {data.steps.slice(3, 6).map((step, idx) => {
              const actualIdx = idx + 3;
              const Icon = stepIcons[actualIdx] || Sparkles;
              const accent = stepAccents[actualIdx] || stepAccents[0];
              return (
                <div
                  key={step.step}
                  className={`timeline-card-desktop group relative p-7 rounded-3xl border border-neutral-800/90 bg-neutral-950/70 backdrop-blur-md ${accent.border} ${accent.glow} transition-all duration-400 hover:-translate-y-2 flex flex-col justify-between`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${accent.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <span className={`font-mono text-xs font-bold tracking-widest ${accent.numberColor} uppercase px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800`}>
                        STEP {step.step}
                      </span>
                      <div
                        className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-300 ${accent.iconBg}`}
                      >
                        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-white mb-2.5 uppercase leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-sm text-neutral-400 group-hover:text-neutral-300 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-6 pt-4 border-t border-neutral-800/60 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${accent.dot}`} />
                      <span className="text-[11px] font-mono text-neutral-500 group-hover:text-neutral-400 uppercase tracking-wider">
                        Phase {actualIdx + 1}
                      </span>
                    </div>
                    {actualIdx === 5 ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-teal-400 group-hover:translate-x-1 transition-all" />
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
        <div className="timeline-mobile-wrap md:hidden relative pl-5 sm:pl-6 border-l-2 border-teal-500/30 ml-6 space-y-8 sm:space-y-10 my-8 sm:my-10">
          {data.steps.map((step, idx) => {
            const Icon = stepIcons[idx] || Sparkles;
            const accent = stepAccents[idx] || stepAccents[0];
            return (
              <div
                key={step.step}
                className="timeline-card-mobile relative"
              >
                {/* Timeline node marker on the line */}
                <div className="absolute -left-[31px] top-1.5 w-5 h-5 rounded-full bg-black border-2 border-teal-400 flex items-center justify-center shadow-[0_0_10px_rgba(20,184,166,0.5)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                </div>

                <div
                  className={`p-4 sm:p-6 rounded-2xl border border-neutral-800 bg-neutral-950/80 backdrop-blur-sm ${accent.border} ${accent.glow} transition-all`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`font-mono text-xs font-bold tracking-widest ${accent.numberColor}`}>
                      STEP {step.step}
                    </span>
                    <div className={`p-2 rounded-xl border ${accent.iconBg}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-white mb-2 uppercase">
                    {step.title}
                  </h3>

                  <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Closing Statement Banner ── */}
        <div className="process-closing-wrap mt-16 md:mt-24">
          <div className="relative p-8 md:p-12 rounded-3xl border border-neutral-800/80 bg-gradient-to-r from-neutral-950 via-neutral-900/60 to-neutral-950 backdrop-blur-md text-center max-w-3xl mx-auto overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(20,184,166,0.1),transparent)] pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <span className="process-closing-elem inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-teal-500/20 bg-teal-950/30 text-teal-400 font-mono text-[11px] uppercase tracking-widest">
                Our Promise
              </span>

              <h3 className="process-closing-elem text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight">
                {data.closing}
              </h3>

              <p className="process-closing-elem text-sm text-neutral-400 font-light max-w-xl mx-auto">
                You enjoy the celebration with your guests. We take care of every moving part from setup to pack-down.
              </p>

              <div className="process-closing-elem pt-4">
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-3 bg-teal-500 hover:bg-teal-400 text-black px-8 py-4 font-bold uppercase tracking-widest text-xs rounded-none transition-all duration-300 shadow-lg shadow-teal-500/20"
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
