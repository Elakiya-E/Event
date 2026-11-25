"use client";

import React, { useRef, useState } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGsap";
import { siteContent } from "@/data/siteContent";
import Link from "next/link";
import {
  CalendarCheck2,
  Flower2,
  UtensilsCrossed,
  Camera,
  Volume2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/* 5 Primary Core Services with bespoke line-art visual compositions   */
/* ------------------------------------------------------------------ */
interface ServiceStep {
  num: string;
  title: string;
  desc: string;
  category: string;
  icon: React.ElementType;
  accent: string;
}

const planningJourneySteps: ServiceStep[] = [
  {
    num: "01",
    title: "Planning & Coordination",
    desc: "Understanding your requirements and creating the complete execution plan.",
    category: "Strategy & Roadmap",
    icon: CalendarCheck2,
    accent: "#4F918B",
  },
  {
    num: "02",
    title: "Décor & Styling",
    desc: "Customised concepts designed specifically for your event.",
    category: "Bespoke Concepts",
    icon: Flower2,
    accent: "#C7A978",
  },
  {
    num: "03",
    title: "Catering & Food",
    desc: "Menu planning, catering coordination and food arrangements.",
    category: "Curated Hospitality",
    icon: UtensilsCrossed,
    accent: "#4F918B",
  },
  {
    num: "04",
    title: "Photography & Videography",
    desc: "Capturing the moments that matter.",
    category: "Visual Memories",
    icon: Camera,
    accent: "#C7A978",
  },
  {
    num: "05",
    title: "Sound & Lighting",
    desc: "Professional production, sound, lighting and technical requirements.",
    category: "Audio Visual Rigging",
    icon: Volume2,
    accent: "#4F918B",
  },
];

export default function CompleteServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const content = siteContent.completeServices;
  const [activeHover, setActiveHover] = useState<number | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReduced) {
        gsap.set(
          containerRef.current.querySelectorAll(
            ".journey-head-elem, .journey-step-elem, .timeline-line-fill, .journey-trust-elem"
          ),
          { opacity: 1, y: 0, scale: 1, scaleX: 1, scaleY: 1 }
        );
        return;
      }

      /* 1. Header reveal */
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

      /* 2. Timeline connecting line draw (desktop horizontal) */
      const hLine = containerRef.current.querySelector(".h-timeline-line");
      if (hLine) {
        gsap.fromTo(
          hLine,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: containerRef.current.querySelector(".journey-container"),
              start: "top 78%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      /* 3. Timeline connecting line draw (mobile vertical) */
      const vLine = containerRef.current.querySelector(".v-timeline-line");
      if (vLine) {
        gsap.fromTo(
          vLine,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.2,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: containerRef.current.querySelector(".v-journey-container"),
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      /* 4. Sequential reveal of the 5 services */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".journey-step-elem"),
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".journey-container"),
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      /* 5. Trust footer banner reveal */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".journey-trust-elem"),
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".journey-trust-wrap"),
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
      id="services"
      ref={containerRef}
      className="relative w-full bg-[#F7F3EA] overflow-hidden py-20 sm:py-28 md:py-36 border-t border-[#DED6C9]"
      aria-label="Complete Event Planning Journey"
    >
      {/* Background warm ambient glow & subtle editorial texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-[#C7A978]/6 blur-[140px] rounded-full" />
        <div className="absolute bottom-12 right-12 w-[480px] h-[300px] bg-[#4F918B]/6 blur-[120px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(41,40,37,0.3) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 space-y-16 sm:space-y-20 md:space-y-24">
        {/* ═══════════════════════════════════════════════════════════ */}
        {/* 1. SECTION HEADER (Enhanced Typography & Visual Hierarchy)  */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-5">
          {/* Eyebrow Label */}
          <div className="journey-head-elem inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4F918B]/35 bg-[#FCFAF6] text-[#4F918B] text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7A978] animate-pulse" />
            Complete Event Planning
          </div>

          {/* Main Heading */}
          <h2 className="journey-head-elem text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#292825] leading-[1.12]">
            One Team.{" "}
            <span className="text-[#4F918B] italic font-normal">
              Every Detail
            </span>
            .
          </h2>

          {/* Supporting Headline */}
          <p className="journey-head-elem text-base sm:text-lg md:text-xl text-[#C7A978] font-serif font-medium leading-snug">
            {content.subheading}
          </p>

          {/* Description */}
          <p className="journey-head-elem text-xs sm:text-sm md:text-base text-[#6F6A61] font-light max-w-2xl mx-auto leading-relaxed">
            {content.intro}
          </p>

          {/* Subtle connecting downward stem */}
          <div className="journey-head-elem pt-3 flex items-center justify-center">
            <div className="w-[1.5px] h-8 bg-gradient-to-b from-[#C7A978] to-transparent" />
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* 2. DESKTOP & TABLET: HORIZONTAL CONNECTED TIMELINE JOURNEY  */}
        {/* (Strictly NO BOXES / NO CARDS / Pure Editorial Flow)        */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="hidden lg:block journey-container relative max-w-7xl mx-auto pt-6">
          {/* Flowing horizontal connecting line running through the icons */}
          <div className="absolute top-[102px] left-[10%] right-[10%] h-[1.5px] z-0 pointer-events-none">
            {/* Base guide track */}
            <div className="w-full h-full bg-[#DED6C9]/80" />
            {/* Animated champagne-gold & teal line fill */}
            <div className="h-timeline-line absolute inset-0 bg-gradient-to-r from-[#C7A978] via-[#4F918B] to-[#C7A978] origin-left" />
          </div>

          {/* 5-Column Open Editorial Grid */}
          <div className="grid grid-cols-5 gap-6 xl:gap-8 relative z-10">
            {planningJourneySteps.map((step, idx) => {
              const Icon = step.icon;
              const isHovered = activeHover === idx;

              return (
                <div
                  key={step.num}
                  onMouseEnter={() => setActiveHover(idx)}
                  onMouseLeave={() => setActiveHover(null)}
                  className="journey-step-elem group flex flex-col items-center text-center cursor-default transition-transform duration-300"
                >
                  {/* Oversized Editorial Number */}
                  <div className="mb-3">
                    <span
                      className={`font-serif font-bold text-4xl xl:text-5xl tracking-tight transition-colors duration-300 ${
                        isHovered
                          ? "text-[#4F918B]"
                          : "text-[#C7A978]/60 group-hover:text-[#C7A978]"
                      }`}
                    >
                      {step.num}
                    </span>
                  </div>

                  {/* Icon & Milestone Marker on Timeline */}
                  <div className="relative mb-6 flex flex-col items-center">
                    {/* Floating Line-Art Icon Circle */}
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isHovered
                          ? "scale-110 text-[#4F918B]"
                          : "text-[#292825] group-hover:text-[#4F918B]"
                      }`}
                    >
                      <Icon className="w-7 h-7 stroke-[1.5] transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    {/* Timeline Node Ring & Pin */}
                    <div className="relative mt-1 flex items-center justify-center">
                      {/* Pulse halo on hover */}
                      <span
                        className={`absolute w-7 h-7 rounded-full bg-[#C7A978]/30 transition-all duration-300 ${
                          isHovered ? "scale-150 opacity-100" : "scale-100 opacity-0"
                        }`}
                      />
                      {/* Central Node Pin */}
                      <div
                        className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                          isHovered
                            ? "bg-[#4F918B] border-[#FCFAF6] scale-125"
                            : "bg-[#FCFAF6] border-[#C7A978]"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Micro Category Tag */}
                  <div className="mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#C7A978] font-semibold">
                      {step.category}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3
                    className={`text-lg xl:text-xl font-serif font-bold tracking-tight text-[#292825] mb-2 leading-snug transition-colors duration-300 ${
                      isHovered ? "text-[#4F918B]" : "group-hover:text-[#4F918B]"
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Subtle Separator Pip */}
                  <div className="w-6 h-px bg-[#DED6C9] my-2 transition-all duration-300 group-hover:w-12 group-hover:bg-[#C7A978]" />

                  {/* Service Description */}
                  <p className="text-xs xl:text-[13px] text-[#6F6A61] font-light leading-relaxed max-w-[210px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* 3. TABLET: ADAPTED TWO-ROW CONNECTED FLOW (md to lg)        */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="hidden md:block lg:hidden relative max-w-2xl mx-auto pt-4">
          <div className="grid grid-cols-2 gap-x-12 gap-y-14 relative">
            {planningJourneySteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="journey-step-elem flex flex-col items-center text-center group cursor-default"
                >
                  <span className="font-serif font-bold text-4xl text-[#C7A978]/60 group-hover:text-[#4F918B] transition-colors mb-2">
                    {step.num}
                  </span>
                  <div className="w-12 h-12 flex items-center justify-center text-[#292825] group-hover:text-[#4F918B] transition-colors mb-2">
                    <Icon className="w-6 h-6 stroke-[1.6]" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C7A978] font-semibold mb-1">
                    {step.category}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-[#292825] group-hover:text-[#4F918B] transition-colors mb-2">
                    {step.title}
                  </h3>
                  <div className="w-8 h-px bg-[#DED6C9] mb-2" />
                  <p className="text-xs text-[#6F6A61] font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* 4. MOBILE: CONTINUOUS VERTICAL TIMELINE JOURNEY (< md)       */}
        {/* (Vertical guide line along the left, zero cards/boxes)      */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="md:hidden v-journey-container relative max-w-md mx-auto pl-6 sm:pl-8">
          {/* Left Vertical Timeline Spine */}
          <div className="absolute left-[18px] sm:left-[22px] top-4 bottom-8 w-[1.5px] bg-[#DED6C9] z-0">
            <div className="v-timeline-line absolute inset-0 bg-gradient-to-b from-[#C7A978] via-[#4F918B] to-[#C7A978] origin-top" />
          </div>

          <div className="space-y-10 relative z-10">
            {planningJourneySteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="journey-step-elem flex items-start gap-4 sm:gap-5 group cursor-default"
                >
                  {/* Left Node Anchor with Icon */}
                  <div className="relative flex-shrink-0 flex flex-col items-center">
                    {/* Node Dot on Timeline */}
                    <div className="w-3.5 h-3.5 rounded-full bg-[#FCFAF6] border-2 border-[#C7A978] group-hover:bg-[#4F918B] group-hover:border-[#FCFAF6] transition-colors shadow-2xs mt-1" />
                    {/* Mini Icon Below Dot */}
                    <div className="mt-2 text-[#4F918B] group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4 stroke-[1.6]" />
                    </div>
                  </div>

                  {/* Right Content Stream (Open, Unboxed) */}
                  <div className="flex-1 pt-0.5 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-serif font-bold text-xl text-[#C7A978]">
                        {step.num}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-[#C7A978]/60" />
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#C7A978]">
                        {step.category}
                      </span>
                    </div>

                    <h3 className="text-base font-serif font-bold text-[#292825] group-hover:text-[#4F918B] transition-colors leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-xs text-[#6F6A61] font-light leading-relaxed pt-0.5">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* 5. OPEN REFINED CLOSING TRUST STATEMENT (Unboxed)           */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="journey-trust-wrap pt-8 sm:pt-12 border-t border-[#DED6C9]/80 text-center max-w-3xl mx-auto space-y-4">
          <div className="journey-trust-elem inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#4F918B]">
            <ShieldCheck className="w-4 h-4" />
            <span>Single Point of Contact &bull; Complete Event Responsibility</span>
          </div>

          <h4 className="journey-trust-elem text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#292825] leading-snug">
            You don&apos;t need to coordinate multiple vendors.
          </h4>

          <p className="journey-trust-elem text-xs sm:text-sm md:text-base text-[#6F6A61] font-light leading-relaxed max-w-xl mx-auto">
            From the initial idea to the final moment on the day, our team takes complete responsibility for planning, coordinating and executing every detail.
          </p>

          <div className="journey-trust-elem pt-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-[#4F918B] hover:bg-[#3e7670] text-[#FCFAF6] font-mono font-bold uppercase tracking-widest text-xs rounded-full transition-all duration-300 shadow-md shadow-[#4F918B]/15 active:scale-95"
            >
              <span>Plan Your Event</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
