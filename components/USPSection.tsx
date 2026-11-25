"use client";

import React, { useRef } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGsap";
import {
  Heart,
  Search,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/* Visual Journey Process Data                                        */
/* ------------------------------------------------------------------ */
interface JourneyStage {
  step: string;
  label: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  bgTone: string;
  borderTone: string;
  glowTone: string;
}

const journeyStages: JourneyStage[] = [
  {
    step: "01",
    label: "CLIENT VISION",
    tagline: "The Spark & Dreams",
    description:
      "Understand the client's vision, expectations, personality and celebration goals.",
    icon: Heart,
    accentColor: "#C7A978",
    bgTone: "bg-[#FCFAF6]/90",
    borderTone: "border-[#C7A978]/30 hover:border-[#C7A978]/70",
    glowTone: "from-[#C7A978]/15 via-transparent to-transparent",
  },
  {
    step: "02",
    label: "UNDERSTANDING",
    tagline: "Requirements & Scope",
    description:
      "We understand the event requirements, venue, theme, expectations and budget.",
    icon: Search,
    accentColor: "#4F918B",
    bgTone: "bg-[#FBF8F2]/90",
    borderTone: "border-[#4F918B]/30 hover:border-[#4F918B]/70",
    glowTone: "from-[#4F918B]/15 via-transparent to-transparent",
  },
  {
    step: "03",
    label: "CREATIVITY",
    tagline: "Bespoke Concept & Décor",
    description:
      "We transform the ideas into a customised event concept with creative décor and thoughtful planning.",
    icon: Sparkles,
    accentColor: "#C7A978",
    bgTone: "bg-[#FCFAF6]/90",
    borderTone: "border-[#C7A978]/30 hover:border-[#C7A978]/70",
    glowTone: "from-[#C7A978]/15 via-transparent to-transparent",
  },
  {
    step: "04",
    label: "EXECUTION",
    tagline: "Flawless Delivery",
    description:
      "Our team coordinates every detail and delivers the event with complete responsibility.",
    icon: CheckCircle2,
    accentColor: "#4F918B",
    bgTone: "bg-[#F7FAF9]/90",
    borderTone: "border-[#4F918B]/35 hover:border-[#4F918B]/80",
    glowTone: "from-[#4F918B]/20 via-transparent to-transparent",
  },
];

/* ================================================================== */
/* USPSection — "Your Vision. Our Creativity." Flowchart Journey     */
/* ================================================================== */
export default function USPSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        gsap.set(
          containerRef.current.querySelectorAll(
            ".usp-heading, .usp-content, .flow-stage-node, .flow-track-line, .mobile-flow-line, .usp-completion, .curved-wave"
          ),
          { opacity: 1, y: 0, scale: 1 }
        );
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });

      // 1. Heading & intro text reveal
      tl.fromTo(
        containerRef.current.querySelectorAll(".usp-heading, .usp-content"),
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.08,
          ease: "power3.out",
        }
      );

      // 2. Timeline connecting line draw (desktop horizontal)
      tl.fromTo(
        containerRef.current.querySelectorAll(".flow-track-line"),
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1.1,
          ease: "power2.inOut",
          transformOrigin: "left center",
        },
        "-=0.4"
      );

      // 3. Ambient curved flow wave fade-in
      tl.fromTo(
        containerRef.current.querySelectorAll(".curved-wave"),
        { opacity: 0, strokeDashoffset: 100 },
        {
          opacity: 0.35,
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "power1.out",
        },
        "<"
      );

      // 4. Mobile continuous vertical line draw
      tl.fromTo(
        containerRef.current.querySelectorAll(".mobile-flow-line"),
        { scaleY: 0, opacity: 0 },
        {
          scaleY: 1,
          opacity: 1,
          duration: 1.1,
          ease: "power2.inOut",
          transformOrigin: "top center",
        },
        "<"
      );

      // 5. Milestone nodes pop sequentially
      tl.fromTo(
        containerRef.current.querySelectorAll(".flow-stage-node"),
        { y: 28, opacity: 0, scale: 0.92 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.75,
          stagger: 0.15,
          ease: "back.out(1.35)",
        },
        "-=0.8"
      );

      // 6. Completion element reveal
      tl.fromTo(
        containerRef.current.querySelectorAll(".usp-completion"),
        { y: 24, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.75,
          ease: "power3.out",
        },
        "-=0.25"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="usp"
      ref={containerRef}
      className="relative w-full bg-[#F7F3EA] overflow-hidden py-20 sm:py-28 md:py-36 lg:py-40 border-t border-[#DED6C9]"
      aria-label="How We Work: From Vision to Execution"
    >
      {/* ── Subtle background texture ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(41,40,37,0.25) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Soft atmospheric gradient highlights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#C7A978]/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* ── 1. Section Eyebrow ── */}
        <div className="usp-heading text-center mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4F918B]/35 bg-[#FCFAF6] text-[#4F918B] text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F918B] animate-pulse" />
            The Iragu Journey
          </span>
        </div>

        {/* ── Section Heading (Editorial Typography) ── */}
        <h2 className="usp-heading text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#292825] tracking-tight leading-[1.12] max-w-4xl mx-auto">
          Your Vision. Our Creativity.{" "}
          <span className="text-[#4F918B] font-serif">
            Complete Event Responsibility.
          </span>
        </h2>

        {/* ── Supporting Editorial Statement ── */}
        <div className="mt-6 md:mt-8 max-w-2xl mx-auto text-center space-y-2.5">
          <p className="usp-content text-base sm:text-lg md:text-xl font-serif text-[#292825] font-medium leading-relaxed">
            Every celebration is different. That&apos;s why we don&apos;t
            believe in a simple one-size-fits-all package.
          </p>
          <p className="usp-content text-xs sm:text-sm md:text-base text-[#6F6A61] font-light leading-relaxed">
            We first understand your expectations, ideas, personality, theme,
            venue and budget — and then create a bespoke experience with
            thoughtful planning and complete execution.
          </p>
        </div>

        {/* ── 3. Desktop & Tablet: Horizontal Flowchart Timeline (Visible md+) ── */}
        <div className="hidden md:block relative mt-16 lg:mt-24">
          {/* Subtle curved connecting wave path behind the timeline */}
          <div className="absolute top-0 left-0 right-0 h-28 pointer-events-none overflow-visible z-0">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1000 100"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M 125 50 C 205 16, 295 84, 375 50 C 455 16, 545 84, 625 50 C 705 16, 795 84, 875 50"
                stroke="#C7A978"
                strokeWidth="1.75"
                strokeDasharray="4 6"
                className="curved-wave"
              />
            </svg>
          </div>

          {/* Main Champagne-Gold Connecting Line (Through Milestone Centers) */}
          <div className="absolute top-10 lg:top-12 -translate-y-1/2 left-[12.5%] right-[12.5%] h-[2px] z-0 pointer-events-none">
            {/* Base guide track */}
            <div className="w-full h-full bg-[#DED6C9]/70" />
            {/* Animated champagne-gold line */}
            <div className="flow-track-line absolute inset-0 bg-gradient-to-r from-[#C7A978] via-[#C7A978] to-[#4F918B]" />

            {/* Small directional arrow indicators between milestones */}
            {/* Midpoint 1 → 2 (at 25% of total width) */}
            <div className="absolute left-[25%] top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 rounded-full bg-[#FCFAF6] border border-[#C7A978]/60 shadow-xs z-10">
              <ChevronRight className="w-3 h-3 text-[#C7A978]" />
            </div>

            {/* Midpoint 2 → 3 (at 50% of total width) */}
            <div className="absolute left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 rounded-full bg-[#FCFAF6] border border-[#C7A978]/60 shadow-xs z-10">
              <ChevronRight className="w-3 h-3 text-[#C7A978]" />
            </div>

            {/* Midpoint 3 → 4 (at 75% of total width) */}
            <div className="absolute left-[75%] top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 rounded-full bg-[#FCFAF6] border border-[#4F918B]/60 shadow-xs z-10">
              <ChevronRight className="w-3 h-3 text-[#4F918B]" />
            </div>
          </div>

          {/* 4-Stage Connected Milestones Grid */}
          <div className="relative z-10 grid grid-cols-4 gap-4 lg:gap-8">
            {journeyStages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.step}
                  className="flow-stage-node flex flex-col items-center group cursor-default"
                >
                  {/* Milestone Circle */}
                  <div className="relative flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 rounded-full border-2 border-[#C7A978]/70 bg-[#FCFAF6] shadow-[0_8px_24px_rgba(199,169,120,0.12)] group-hover:border-[#4F918B] group-hover:shadow-[0_12px_28px_rgba(79,145,139,0.18)] group-hover:scale-105 transition-all duration-300">
                    {/* Inner subtle decorative ring */}
                    <div className="absolute inset-1.5 rounded-full border border-[#DED6C9]/80 group-hover:border-[#4F918B]/30 transition-colors" />

                    {/* Step Number Badge */}
                    <div className="absolute -top-2.5 px-2.5 py-0.5 rounded-full bg-[#C7A978] text-[#FCFAF6] font-mono text-[10px] font-bold tracking-wider shadow-xs group-hover:bg-[#4F918B] transition-colors">
                      {stage.step}
                    </div>

                    {/* Stage Line Icon */}
                    <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-[#4F918B] group-hover:scale-110 group-hover:text-[#292825] transition-all duration-300 flex-shrink-0" />

                    {/* Stage 04 Completion check badge */}
                    {idx === 3 && (
                      <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4F918B] opacity-40" />
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-[#4F918B] items-center justify-center text-[9px] text-[#FCFAF6] font-bold">
                          ✓
                        </span>
                      </span>
                    )}
                  </div>

                  {/* Vertical stem connecting milestone circle to editorial content */}
                  <div className="w-[1.5px] h-5 bg-gradient-to-b from-[#C7A978]/60 to-[#DED6C9] mt-3 mb-2" />

                  {/* Stage Editorial Details (Subtle unique background treatments) */}
                  <div
                    className={`w-full text-center px-3.5 py-4 lg:p-5 rounded-2xl border ${stage.borderTone} ${stage.bgTone} transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md relative overflow-hidden`}
                  >
                    {/* Ambient subtle glow gradient corner */}
                    <div
                      className={`absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-br ${stage.glowTone} pointer-events-none`}
                    />

                    {/* Step & Stage Label */}
                    <div className="text-[10px] lg:text-[11px] font-mono font-bold tracking-[0.2em] text-[#C7A978] group-hover:text-[#4F918B] transition-colors uppercase mb-1">
                      {stage.step} — {stage.label}
                    </div>

                    {/* Stage Sub-title */}
                    <h3 className="text-base lg:text-lg font-serif font-bold text-[#292825] tracking-tight mb-2 leading-snug">
                      {stage.tagline}
                    </h3>

                    {/* Exact Stage Description */}
                    <p className="text-xs lg:text-[13px] text-[#6F6A61] font-light leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── 4. Mobile: Vertical Connected Journey (Visible < md) ── */}
        <div className="md:hidden relative max-w-md mx-auto mt-12 pl-3 sm:pl-5">
          {/* Continuous vertical timeline gold line */}
          <div className="absolute left-[29px] sm:left-[33px] top-6 bottom-8 w-[2px] bg-[#DED6C9] z-0">
            {/* Animated progress gold line */}
            <div className="mobile-flow-line absolute inset-0 bg-gradient-to-b from-[#C7A978] via-[#C7A978] to-[#4F918B]" />
          </div>

          <div className="space-y-7 relative z-10">
            {journeyStages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.step}
                  className="flow-stage-node flex items-start gap-4 sm:gap-5 group"
                >
                  {/* Left: Milestone Circle */}
                  <div className="relative flex-shrink-0 w-13 h-13 sm:w-15 sm:h-15 w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-full border-2 border-[#C7A978] bg-[#FCFAF6] shadow-sm flex items-center justify-center z-10 group-hover:border-[#4F918B] transition-colors">
                    {/* Inner ring */}
                    <div className="absolute inset-1 rounded-full border border-[#DED6C9]" />

                    {/* Step number badge */}
                    <span className="absolute -top-2 px-1.5 py-0.2 rounded-full bg-[#C7A978] text-[#FCFAF6] font-mono text-[9px] font-bold group-hover:bg-[#4F918B] transition-colors">
                      {stage.step}
                    </span>

                    {/* Icon */}
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#4F918B] group-hover:scale-110 transition-transform" />

                    {/* Downward indicator between mobile steps */}
                    {idx < journeyStages.length - 1 && (
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#FCFAF6] border border-[#C7A978] flex items-center justify-center z-20 shadow-2xs">
                        <ChevronDown className="w-2.5 h-2.5 text-[#C7A978]" />
                      </div>
                    )}
                  </div>

                  {/* Right: Stage Content */}
                  <div
                    className={`flex-1 p-4 rounded-xl border ${stage.borderTone} ${stage.bgTone} shadow-xs`}
                  >
                    <div className="text-[10px] font-mono font-bold tracking-widest text-[#C7A978] uppercase mb-0.5">
                      {stage.step} — {stage.label}
                    </div>
                    <h3 className="text-sm sm:text-base font-serif font-bold text-[#292825] mb-1.5 leading-snug">
                      {stage.tagline}
                    </h3>
                    <p className="text-xs text-[#6F6A61] font-light leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── 5. End of Journey Refined Completion Element ── */}
        <div className="usp-completion mt-14 sm:mt-18 md:mt-22 max-w-xl mx-auto text-center relative px-2">
          {/* Vertical connecting champagne-gold stem */}
          <div className="w-[1.5px] h-7 bg-gradient-to-b from-[#C7A978] to-[#4F918B] mx-auto mb-4" />

          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl border border-[#C7A978]/40 bg-[#FCFAF6] shadow-[0_6px_24px_rgba(199,169,120,0.12)] relative overflow-hidden group">
            {/* Subtle radiant surface aura */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#C7A978]/10 via-[#FCFAF6] to-[#4F918B]/10 opacity-70 pointer-events-none" />

            {/* Celebration-inspired emblem */}
            <div className="relative w-10 h-10 rounded-full bg-[#F1EADF] border border-[#C7A978] flex items-center justify-center shadow-xs flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-[#C7A978]" />
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#4F918B] border border-[#FCFAF6] flex items-center justify-center text-[8px] text-white font-bold">
                ✓
              </span>
            </div>

            <div className="relative text-center sm:text-left">
              <div className="text-[9px] sm:text-[10px] font-mono tracking-[0.25em] text-[#C7A978] uppercase font-bold">
                The Celebration
              </div>
              <h4 className="text-xs sm:text-sm md:text-base font-serif font-bold text-[#292825] tracking-wider uppercase">
                YOUR EVENT. BEAUTIFULLY EXECUTED.
              </h4>
            </div>

            <div className="hidden sm:flex items-center text-[#4F918B] pl-2 border-l border-[#DED6C9]">
              <CheckCircle2 className="w-4 h-4 text-[#4F918B]" />
            </div>
          </div>

          <p className="mt-3.5 text-xs sm:text-sm text-[#6F6A61] font-light max-w-md mx-auto leading-relaxed">
            One team. One point of contact. Complete responsibility from the
            first concept to the final applause.
          </p>
        </div>
      </div>
    </section>
  );
}
