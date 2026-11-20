"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGsap";
import {
  ArrowRight,
  Sparkles,
  Palette,
  SwatchBook,
  Flower2,
  LayoutDashboard,
  DoorOpen,
  Camera,
  Gem,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/* 7 Décor Elements Data with unique photographs & diverse styling     */
/* ------------------------------------------------------------------ */
interface DecorItem {
  id: string;
  num: string;
  label: string;
  desc: string;
  image: string;
  alt: string;
  icon: React.ElementType;
  accent: string;
  accentBg: string;
  tag: string;
  widthClass: string;
  imgHeightClass: string;
  yOffsetClass: string;
  shapeClass: string;
}

const decorShowcaseItems: DecorItem[] = [
  {
    id: "theme",
    num: "01",
    label: "Theme",
    desc: "Concepts designed around your story.",
    image: "/images/decor/theme.png",
    alt: "Theme — Whimsical pastel garden birthday celebration décor",
    icon: Palette,
    accent: "#4F918B",
    accentBg: "bg-[#FCFAF6] text-[#4F918B] border-[#4F918B]/35",
    tag: "Birthday & Garden Themes",
    widthClass: "w-[280px] sm:w-[310px] lg:w-[330px]",
    imgHeightClass: "h-[340px] sm:h-[370px] lg:h-[390px]",
    yOffsetClass: "translate-y-0",
    shapeClass: "rounded-t-[140px] rounded-b-2xl",
  },
  {
    id: "colours",
    num: "02",
    label: "Colours",
    desc: "Palettes that match your personality.",
    image: "/images/decor/colours.png",
    alt: "Colours — Terracotta, dusty rose, and sage green bohemian palette",
    icon: SwatchBook,
    accent: "#D8B5A8",
    accentBg: "bg-[#FCFAF6] text-[#9A6051] border-[#D8B5A8]/40",
    tag: "Terracotta & Sage Palettes",
    widthClass: "w-[260px] sm:w-[285px] lg:w-[305px]",
    imgHeightClass: "h-[300px] sm:h-[330px] lg:h-[350px]",
    yOffsetClass: "translate-y-5 lg:translate-y-8",
    shapeClass: "rounded-3xl",
  },
  {
    id: "florals",
    num: "03",
    label: "Florals",
    desc: "Arrangements that set the mood.",
    image: "/images/decor/florals.png",
    alt: "Florals — Vibrant marigold, orchid, and botanical hanging canopy",
    icon: Flower2,
    accent: "#AEBBAA",
    accentBg: "bg-[#FCFAF6] text-[#556953] border-[#AEBBAA]/50",
    tag: "Botanical & Floral Artistry",
    widthClass: "w-[270px] sm:w-[300px] lg:w-[320px]",
    imgHeightClass: "h-[350px] sm:h-[380px] lg:h-[400px]",
    yOffsetClass: "-translate-y-2 lg:-translate-y-5",
    shapeClass: "rounded-t-2xl rounded-b-[130px]",
  },
  {
    id: "stage",
    num: "04",
    label: "Stage",
    desc: "Centrepieces that create impact.",
    image: "/images/decor/stage.png",
    alt: "Stage — Contemporary geometric curved arch celebration stage",
    icon: LayoutDashboard,
    accent: "#C7A978",
    accentBg: "bg-[#FCFAF6] text-[#C7A978] border-[#C7A978]/40",
    tag: "Contemporary Grand Stage",
    widthClass: "w-[305px] sm:w-[335px] lg:w-[355px]",
    imgHeightClass: "h-[365px] sm:h-[395px] lg:h-[420px]",
    yOffsetClass: "translate-y-1 lg:translate-y-2",
    shapeClass: "rounded-t-[160px] rounded-b-2xl",
  },
  {
    id: "entrance",
    num: "05",
    label: "Entrance",
    desc: "First impressions that wow.",
    image: "/images/decor/entrance.png",
    alt: "Entrance — Rustic wooden garden entrance arch with chiffon and lanterns",
    icon: DoorOpen,
    accent: "#C7A978",
    accentBg: "bg-[#FCFAF6] text-[#C7A978] border-[#C7A978]/50",
    tag: "Rustic & Floral Entrances",
    widthClass: "w-[260px] sm:w-[290px] lg:w-[310px]",
    imgHeightClass: "h-[310px] sm:h-[340px] lg:h-[360px]",
    yOffsetClass: "translate-y-6 lg:translate-y-9",
    shapeClass: "rounded-3xl",
  },
  {
    id: "photozones",
    num: "06",
    label: "Photo Zones",
    desc: "Backdrops made for memories.",
    image: "/images/decor/photozone.png",
    alt: "Photo Zones — Themed celebration photo booth and selfie backdrop",
    icon: Camera,
    accent: "#C8BDD8",
    accentBg: "bg-[#FCFAF6] text-[#6A5A7A] border-[#C8BDD8]/50",
    tag: "Themed Photo Backdrops",
    widthClass: "w-[280px] sm:w-[310px] lg:w-[330px]",
    imgHeightClass: "h-[340px] sm:h-[370px] lg:h-[390px]",
    yOffsetClass: "-translate-y-1 lg:-translate-y-4",
    shapeClass: "rounded-t-2xl rounded-b-[120px]",
  },
  {
    id: "details",
    num: "07",
    label: "Details",
    desc: "The little things that matter most.",
    image: "/images/decor/details.png",
    alt: "Details — Candlelit table arrangements, crystal glassware, and dining styling",
    icon: Gem,
    accent: "#4F918B",
    accentBg: "bg-[#FCFAF6] text-[#4F918B] border-[#4F918B]/35",
    tag: "Curated Table Styling",
    widthClass: "w-[260px] sm:w-[285px] lg:w-[305px]",
    imgHeightClass: "h-[300px] sm:h-[330px] lg:h-[350px]",
    yOffsetClass: "translate-y-4 lg:translate-y-7",
    shapeClass: "rounded-3xl",
  },
];

export default function CustomisedDecor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      /* Header entrance */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".decor-head-elem"),
        { y: prefersReduced ? 0 : 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: prefersReduced ? 0 : 0.85,
          stagger: prefersReduced ? 0 : 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="customised-decor"
      ref={containerRef}
      className="relative w-full bg-[#F7F3EA] overflow-hidden"
      aria-label="Customised Décor Experience"
    >
      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* 1. BRIGHT LUXURY EDITORIAL HEADER BAND                          */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className="decor-hero-band relative w-full min-h-[46vh] md:min-h-[54vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FCFAF6] via-[#F7F3EA] to-[#F7F3EA]">
        {/* Soft background ambient visual with bright luxury warmth */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div
            className="decor-bg-visual absolute inset-[-5%] w-[110%] h-[110%] bg-cover bg-center filter saturate-125"
            style={{ backgroundImage: `url('/images/hero-bg.png')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FCFAF6]/90 via-[#F7F3EA]/75 to-[#F7F3EA]" />
        </div>

        {/* Delicate pastel atmospheric light orbs */}
        <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-[#F0D7C8]/35 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-[#D8B5A8]/25 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[220px] bg-[#C7A978]/20 blur-[100px] rounded-full pointer-events-none" />

        {/* Content */}
        <div className="relative z-20 text-center px-4 sm:px-6 py-16 sm:py-20 md:py-24 max-w-5xl mx-auto">
          {/* Eyebrow badge */}
          <div className="decor-head-elem mb-4 sm:mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C7A978]/50 bg-[#FCFAF6] text-[#C7A978] text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F918B] animate-pulse" />
              Customised Décor
            </span>
          </div>

          {/* Heading in rich charcoal */}
          <h1 className="decor-head-elem text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#292825] tracking-tight leading-[1.12]">
            Your Idea. <span className="text-[#C7A978]">Your Story.</span>
            <br className="hidden sm:inline" />
            Your Celebration.
          </h1>

          {/* Subheading */}
          <p className="decor-head-elem mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-[#6F6A61] font-light tracking-wide max-w-2xl mx-auto">
            Customised Décor Designed Around You
          </p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* 2. EDITORIAL INTRODUCTION (Preserved Core Content)              */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-10 text-center pt-12 sm:pt-16 pb-6 sm:pb-10 space-y-4 sm:space-y-5">
        <p className="decor-head-elem text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#292825] leading-snug">
          We specialise in creating décor concepts that are uniquely yours.
        </p>
        <p className="decor-head-elem text-sm sm:text-base md:text-lg text-[#6F6A61] font-light leading-relaxed max-w-3xl mx-auto">
          From elegant and minimal setups to grand, immersive experiences, every
          element is thoughtfully designed to match your celebration.
        </p>

        {/* Subtle decorative pip divider */}
        <div className="decor-head-elem flex items-center justify-center gap-3 pt-2">
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#C7A978]" />
          <Sparkles className="w-4 h-4 text-[#C7A978]" />
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#C7A978]" />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* 3. CONTINUOUS FLOATING DÉCOR GALLERY                            */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className="relative w-full py-8 sm:py-12 md:py-16 overflow-hidden">
        {/* Soft edge fade masks on desktop */}
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-20 xl:w-28 bg-gradient-to-r from-[#F7F3EA] to-transparent z-20 pointer-events-none" />
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-20 xl:w-28 bg-gradient-to-l from-[#F7F3EA] to-transparent z-20 pointer-events-none" />

        {/* Ambient warm glow behind the gallery */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[360px] bg-[#F0D7C8]/25 blur-[150px] rounded-full pointer-events-none" />

        {/* 
          Continuous moving carousel track:
          - Infinite CSS marquee animation
          - Pauses on desktop hover
          - Duplicated sequence (set A & set B) for zero-gap looping
          - Mobile supports native horizontal touch-scroll
        */}
        <div
          ref={trackRef}
          className="group-marquee flex overflow-x-auto lg:overflow-x-hidden no-scrollbar px-4 sm:px-8 lg:px-0 py-8 select-none"
        >
          {/* Animated Marquee Track */}
          <div className="animate-marquee-track flex gap-6 sm:gap-8 lg:gap-10 flex-nowrap items-start">
            {/* FIRST PASS (7 Items) */}
            {decorShowcaseItems.map((item) => {
              const Icon = item.icon;
              const isSelected = activeItem === item.id;

              return (
                <div
                  key={`first-${item.id}`}
                  onMouseEnter={() => setActiveItem(item.id)}
                  onMouseLeave={() => setActiveItem(null)}
                  className={`relative flex-shrink-0 flex flex-col items-center transition-all duration-500 cursor-pointer ${item.widthClass} ${item.yOffsetClass}`}
                >
                  {/* Organic image frame (Clean photograph, zero embedded text) */}
                  <div
                    className={`relative w-full overflow-hidden border border-[#C7A978]/40 shadow-[0_12px_36px_rgba(199,169,120,0.14)] transition-all duration-700 bg-[#FCFAF6] ${item.imgHeightClass} ${item.shapeClass} ${
                      isSelected
                        ? "scale-[1.03] shadow-[0_20px_45px_rgba(79,145,139,0.22)] ring-2 ring-[#4F918B]/60"
                        : "hover:scale-[1.02] hover:border-[#4F918B]/60"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="380px"
                      className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                    />

                    {/* Minimal number badge inside top right of image */}
                    <div className="absolute top-3.5 right-3.5 z-10 pointer-events-none">
                      <span className="w-8 h-8 rounded-full bg-[#FCFAF6]/90 backdrop-blur-md border border-[#C7A978]/40 font-serif font-bold text-xs text-[#292825] flex items-center justify-center shadow-xs">
                        {item.num}
                      </span>
                    </div>
                  </div>

                  {/* LABELS & DESCRIPTIONS CLEARLY VISIBLE BELOW THE PHOTOGRAPH */}
                  <div className="mt-4 text-center px-2 space-y-1.5 w-full">
                    {/* Category Tag Badge */}
                    <div className="flex justify-center">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest border shadow-xs ${item.accentBg}`}
                      >
                        <Icon className="w-3 h-3" />
                        <span>{item.tag}</span>
                      </span>
                    </div>

                    {/* Décor Title */}
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#292825] tracking-tight">
                      {item.label}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-[#6F6A61] font-light leading-relaxed max-w-[260px] mx-auto">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* DUPLICATE PASS (for seamless infinite loop on lg+ screens) */}
            {decorShowcaseItems.map((item) => {
              const Icon = item.icon;
              const isSelected = activeItem === `${item.id}-dup`;

              return (
                <div
                  key={`second-${item.id}`}
                  onMouseEnter={() => setActiveItem(`${item.id}-dup`)}
                  onMouseLeave={() => setActiveItem(null)}
                  aria-hidden="true"
                  className={`hidden lg:flex relative flex-shrink-0 flex-col items-center transition-all duration-500 cursor-pointer ${item.widthClass} ${item.yOffsetClass}`}
                >
                  <div
                    className={`relative w-full overflow-hidden border border-[#C7A978]/40 shadow-[0_12px_36px_rgba(199,169,120,0.14)] transition-all duration-700 bg-[#FCFAF6] ${item.imgHeightClass} ${item.shapeClass} ${
                      isSelected
                        ? "scale-[1.03] shadow-[0_20px_45px_rgba(79,145,139,0.22)] ring-2 ring-[#4F918B]/60"
                        : "hover:scale-[1.02] hover:border-[#4F918B]/60"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="380px"
                      className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                    />

                    <div className="absolute top-3.5 right-3.5 z-10 pointer-events-none">
                      <span className="w-8 h-8 rounded-full bg-[#FCFAF6]/90 backdrop-blur-md border border-[#C7A978]/40 font-serif font-bold text-xs text-[#292825] flex items-center justify-center shadow-xs">
                        {item.num}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 text-center px-2 space-y-1.5 w-full">
                    <div className="flex justify-center">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest border shadow-xs ${item.accentBg}`}
                      >
                        <Icon className="w-3 h-3" />
                        <span>{item.tag}</span>
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#292825] tracking-tight">
                      {item.label}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-[#6F6A61] font-light leading-relaxed max-w-[260px] mx-auto">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile touch scroll hint */}
        <div className="lg:hidden flex items-center justify-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#C7A978] pt-3">
          <span>&larr; Swipe to explore 7 décor elements &rarr;</span>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* 4. BRAND PROMISE STATEMENT & ENQUIRY CALLOUT                    */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24 text-center space-y-6 sm:space-y-8">
        {/* Preserved Signature Brand Statement */}
        <div className="decor-head-elem space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#C7A978] font-semibold block">
            The Iragu Décor Promise
          </span>
          <p className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#292825] italic leading-snug">
            &ldquo;You tell us what you imagine.
            <br />
            <span className="text-[#4F918B]">We&apos;ll create it.</span>&rdquo;
          </p>
        </div>

        {/* Direct Action Link */}
        <div className="decor-head-elem pt-2 flex justify-center">
          <Link
            href="/contact"
            aria-label="Discuss your décor idea"
            className="group inline-flex items-center justify-center gap-3 bg-[#4F918B] hover:bg-[#3F7A75] text-[#FCFAF6] px-8 sm:px-10 py-4 font-mono font-bold uppercase tracking-widest transition-all duration-300 text-xs sm:text-sm shadow-xl shadow-[#4F918B]/20 rounded-full active:scale-95"
          >
            <span>Discuss Your Décor Idea</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Seamless Marquee Animation Styles */}
      <style jsx>{`
        @keyframes decorMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-marquee-track {
          display: flex;
          width: max-content;
          animation: decorMarquee 24s linear infinite;
          will-change: transform;
        }
        .group-marquee:hover .animate-marquee-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-track {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
