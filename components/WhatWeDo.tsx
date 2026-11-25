"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGsap";
import { siteContent } from "@/data/siteContent";
import {
  Compass,
  Palette,
  Sliders,
  ShieldCheck,
  Sparkles,
  ChevronRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/* Core Values: What Iragu Brings Together                            */
/* ------------------------------------------------------------------ */
const coreValues = [
  {
    step: "01",
    title: "UNDERSTAND YOUR VISION",
    subtitle: "Your Story, Goals & Budget",
    icon: Compass,
  },
  {
    step: "02",
    title: "CREATE YOUR EXPERIENCE",
    subtitle: "Bespoke Décor & Concept",
    icon: Palette,
  },
  {
    step: "03",
    title: "COORDINATE EVERY DETAIL",
    subtitle: "Vendors, Flow & Logistics",
    icon: Sliders,
  },
  {
    step: "04",
    title: "DELIVER WITH RESPONSIBILITY",
    subtitle: "On-Ground Flawless Execution",
    icon: ShieldCheck,
  },
];

/* ================================================================== */
/* WhatWeDo — Brand Introduction & Storytelling Experience           */
/* ================================================================== */
interface WhatWeDoProps {
  showCoreValueJourney?: boolean;
}

export default function WhatWeDo({ showCoreValueJourney = true }: WhatWeDoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const content = siteContent.whatWeDo;

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        gsap.set(
          containerRef.current.querySelectorAll(
            ".brand-statement, .brand-photo-main, .brand-photo-detail, .brand-philosophy, .brand-pull-quote, .journey-line, .journey-step"
          ),
          { opacity: 1, y: 0, scale: 1, x: 0 }
        );
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 76%",
          toggleActions: "play none none none",
        },
      });

      // 1. Left: Brand statement reveal
      tl.fromTo(
        containerRef.current.querySelectorAll(".brand-statement"),
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
        }
      );

      // 2. Center: Main photograph fade & slight lift into place
      tl.fromTo(
        containerRef.current.querySelectorAll(".brand-photo-main"),
        { opacity: 0, scale: 0.95, y: 24 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
        },
        "-=0.6"
      );

      // 3. Center: Overlapping detail photo moves slightly into position
      tl.fromTo(
        containerRef.current.querySelectorAll(".brand-photo-detail"),
        { opacity: 0, x: 20, y: 20 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.25)",
        },
        "-=0.5"
      );

      // 4. Right: Philosophy text & pull quote reveal
      tl.fromTo(
        containerRef.current.querySelectorAll(
          ".brand-philosophy, .brand-pull-quote"
        ),
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.6"
      );

      // 5. Core value journey line draws progressively on scroll
      tl.fromTo(
        containerRef.current.querySelectorAll(".journey-line"),
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1.05,
          ease: "power2.inOut",
          transformOrigin: "left center",
        },
        "-=0.3"
      );

      // 6. Core value items stagger in
      tl.fromTo(
        containerRef.current.querySelectorAll(".journey-step"),
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.65"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative w-full bg-[#F7F3EA] py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-[#DED6C9] overflow-hidden"
      aria-label="Iragu Events Brand Introduction"
    >
      {/* ── Background Subtle Editorial Texture & Watermark ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(41,40,37,0.22) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Soft atmospheric ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-[#C7A978]/5 blur-[130px] rounded-full" />
      </div>

      {/* Oversized editorial section numbering watermark */}
      <div
        className="absolute top-6 right-6 lg:right-16 text-[130px] sm:text-[180px] lg:text-[220px] font-serif font-black text-[#C7A978]/[0.08] select-none pointer-events-none leading-none z-0"
        aria-hidden="true"
      >
        01
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ── 1. Asymmetric Editorial Three-Layer Composition ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* ── LEFT: Brand Statement ── */}
          <div className="lg:col-span-4 space-y-6">
            {/* Small elegant label */}
            <div className="brand-statement">
              <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#C7A978]/40 bg-[#FCFAF6] text-[#C7A978] text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7A978] animate-pulse" />
                THE IRAGU DIFFERENCE · 01
              </span>
            </div>

            {/* Main Heading with Oversized Typography & Balanced Breaks */}
            <div className="brand-statement space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-serif font-bold text-[#292825] leading-[1.1] tracking-tight">
                <span className="block">We&apos;re Not Just</span>
                <span className="block text-[#6F6A61] font-light italic">
                  Event Decorators.
                </span>
              </h2>

              {/* Emphasized Statement with Champagne Accent */}
              <div className="pt-2">
                <p className="text-xl sm:text-2xl lg:text-[1.65rem] font-serif font-bold text-[#292825] leading-snug">
                  We&apos;re Your{" "}
                  <span className="text-[#4F918B] underline decoration-[#C7A978]/60 decoration-2 underline-offset-6">
                    Complete Event Partner.
                  </span>
                </p>
              </div>
            </div>

            {/* Contextual Description */}
            <p className="brand-statement text-sm sm:text-base text-[#6F6A61] font-light leading-relaxed">
              From customised décor to end-to-end event execution, we take care
              of every single detail under one roof — so you can be fully
              present with the people who matter most.
            </p>

            {/* Signature Brand Seal */}
            <div className="brand-statement pt-2">
              <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-[#FCFAF6] border border-[#DED6C9] shadow-xs">
                <Sparkles className="w-4 h-4 text-[#C7A978] flex-shrink-0" />
                <p className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-[#292825] uppercase">
                  {siteContent.brand.signature}
                </p>
              </div>
            </div>
          </div>

          {/* ── CENTER: Visual Storytelling (Editorial Image Composition) ── */}
          <div className="lg:col-span-4 relative flex items-center justify-center my-6 lg:my-0">
            {/* Main photograph: Large organic arch frame */}
            <div className="brand-photo-main relative w-full max-w-[340px] sm:max-w-[370px] lg:max-w-[390px] h-[440px] sm:h-[490px] lg:h-[530px] rounded-t-[170px] sm:rounded-t-[190px] rounded-b-3xl overflow-hidden border-2 border-[#C7A978]/40 shadow-2xl bg-[#E8DFD0] z-10">
              <Image
                src="/images/hero1.png"
                alt="Elegant candlelit event stage by Iragu Events"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 390px"
              />

              {/* Thin champagne-gold decorative inner arch accent */}
              <div className="absolute inset-2.5 rounded-t-[158px] sm:rounded-t-[178px] rounded-b-[20px] border border-[#C7A978]/35 pointer-events-none" />

              {/* Gentle bottom gradient fade */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#292825]/40 to-transparent pointer-events-none" />
            </div>

            {/* Smaller overlapping detail photograph (Floral & décor styling) */}
            <div className="brand-photo-detail absolute -bottom-6 -right-2 sm:-right-6 lg:-right-8 w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-2xl overflow-hidden border-2 border-[#FCFAF6] shadow-2xl ring-1 ring-[#C7A978]/50 z-20 group">
              <Image
                src="/images/hero2.png"
                alt="Close-up event floral styling detail by Iragu Events"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="192px"
              />
              {/* Subtle floating detail label badge */}
              <div className="absolute bottom-2 left-2 right-2 px-2 py-1 bg-[#FCFAF6]/90 backdrop-blur-xs rounded-md text-[9px] font-mono tracking-wider text-[#292825] uppercase text-center border border-[#DED6C9]/70 font-semibold shadow-xs">
                Décor &amp; Floral Detail
              </div>
            </div>

            {/* Floating subtle caption badge */}
            <div className="brand-photo-main absolute -top-4 left-2 sm:-left-4 z-20">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCFAF6]/95 backdrop-blur-md border border-[#C7A978]/60 text-[10px] sm:text-[11px] font-mono tracking-wider text-[#292825] shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#4F918B] animate-pulse" />
                <span>Every Detail. One Responsible Team.</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Brand Philosophy ── */}
          <div className="lg:col-span-4 space-y-6 lg:pl-2">
            <div className="brand-philosophy space-y-3">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#C7A978] uppercase font-bold block">
                OUR PHILOSOPHY
              </span>
              <p className="text-xl sm:text-2xl font-serif text-[#292825] leading-snug font-normal">
                {content.intro}
              </p>
            </div>

            <p className="brand-philosophy text-sm sm:text-base text-[#6F6A61] font-light leading-relaxed">
              It takes thoughtful planning, creative ideas, the right people,
              precise coordination and flawless execution.
            </p>

            <p className="brand-philosophy text-sm sm:text-base text-[#6F6A61] font-light leading-relaxed">
              At Iragu Events, we bring all of this together under one roof. From
              your first initial idea to the final celebratory moments, our team
              takes complete responsibility.
            </p>

            {/* Elegant Pull Quote with Thin Champagne Vertical Line */}
            <div className="brand-pull-quote pt-2">
              <div className="border-l-2 border-[#C7A978] pl-5 py-3.5 bg-[#FCFAF6]/70 rounded-r-2xl border-y border-r border-[#DED6C9]/40 shadow-xs">
                <p className="text-base sm:text-lg lg:text-xl font-serif font-medium text-[#292825] italic leading-relaxed">
                  &ldquo;{content.highlight}&rdquo;
                </p>
                <span className="block mt-2.5 text-[10px] font-mono tracking-widest text-[#4F918B] uppercase font-bold">
                  — The Iragu Promise
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── 2. Distinctive Core Value Element: Flowing Horizontal Journey (Optional) ── */}
        {showCoreValueJourney && (
          <div className="mt-20 sm:mt-24 lg:mt-32 pt-12 border-t border-[#DED6C9]/80 relative">
            {/* Eyebrow Label */}
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C7A978]/40 bg-[#FCFAF6] text-[#C7A978] text-[10px] sm:text-xs font-mono tracking-[0.25em] uppercase shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4F918B]" />
                What Iragu Brings Together
              </span>
            </div>

            {/* Desktop & Tablet: Connected Horizontal Timeline */}
            <div className="hidden md:block relative max-w-5xl mx-auto px-4">
              {/* Delicate flowing champagne connecting line */}
              <div className="absolute top-5 left-[12.5%] right-[12.5%] h-[1.5px] z-0 pointer-events-none">
                <div className="w-full h-full bg-[#DED6C9]" />
                <div className="journey-line absolute inset-0 bg-gradient-to-r from-[#C7A978] via-[#C7A978] to-[#4F918B]" />

                {/* Directional chevron beads at 25%, 50%, 75% */}
                <div className="absolute left-[25%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#FCFAF6] border border-[#C7A978] flex items-center justify-center shadow-2xs">
                  <ChevronRight className="w-2.5 h-2.5 text-[#C7A978]" />
                </div>
                <div className="absolute left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#FCFAF6] border border-[#C7A978] flex items-center justify-center shadow-2xs">
                  <ChevronRight className="w-2.5 h-2.5 text-[#C7A978]" />
                </div>
                <div className="absolute left-[75%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#FCFAF6] border border-[#4F918B] flex items-center justify-center shadow-2xs">
                  <ChevronRight className="w-2.5 h-2.5 text-[#4F918B]" />
                </div>
              </div>

              {/* 4 Flowing Stages Grid */}
              <div className="grid grid-cols-4 gap-6 relative z-10">
                {coreValues.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.step}
                      className="journey-step flex flex-col items-center text-center group cursor-default"
                    >
                      {/* Small elegant line icon inside circle */}
                      <div className="w-10 h-10 rounded-full border border-[#C7A978]/60 bg-[#FCFAF6] flex items-center justify-center text-[#4F918B] shadow-xs group-hover:border-[#4F918B] group-hover:scale-110 group-hover:shadow-sm transition-all duration-300">
                        <Icon className="w-4 h-4 text-[#4F918B] group-hover:text-[#292825] transition-colors" />
                      </div>

                      {/* Vertical connecting micro-stem */}
                      <div className="w-[1px] h-3 bg-[#DED6C9] mt-2 mb-1" />

                      {/* Step Number */}
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#C7A978] uppercase mb-1">
                        {item.step}
                      </span>

                      {/* Title */}
                      <h4 className="text-xs lg:text-[13px] font-serif font-bold text-[#292825] tracking-wider uppercase leading-snug group-hover:text-[#4F918B] transition-colors">
                        {item.title}
                      </h4>

                      {/* Subtitle */}
                      <p className="text-[11px] text-[#6F6A61] font-light mt-1">
                        {item.subtitle}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile: Continuous Vertical Flowing Journey */}
            <div className="md:hidden relative max-w-sm mx-auto pl-4">
              {/* Continuous delicate vertical champagne line */}
              <div className="absolute left-[27px] top-4 bottom-6 w-[1.5px] bg-gradient-to-b from-[#C7A978] via-[#C7A978] to-[#4F918B] z-0" />

              <div className="space-y-6 relative z-10">
                {coreValues.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.step}
                      className="journey-step flex items-start gap-4"
                    >
                      {/* Small icon circle */}
                      <div className="w-8 h-8 rounded-full border border-[#C7A978] bg-[#FCFAF6] flex items-center justify-center text-[#4F918B] flex-shrink-0 shadow-xs">
                        <Icon className="w-3.5 h-3.5 text-[#4F918B]" />
                      </div>

                      {/* Step Content */}
                      <div className="pt-0.5">
                        <span className="text-[9px] font-mono font-bold tracking-widest text-[#C7A978] uppercase block">
                          {item.step}
                        </span>
                        <h4 className="text-xs font-serif font-bold text-[#292825] tracking-wider uppercase">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-[#6F6A61] font-light mt-0.5">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
