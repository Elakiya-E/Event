"use client";

import React, { useState, useRef } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGsap";
import { siteContent } from "@/data/siteContent";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Cake,
  Baby,
  Sparkles,
  Users,
  Rocket,
  Building2,
  Presentation,
  Trophy,
  Package,
  GraduationCap,
  Award,
  Landmark,
  Megaphone,
  Flag,
  Flame,
  Layers,
  Store,
  Compass,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  Phone,
  ShieldCheck,
  CheckCircle2,
  CalendarCheck2,
  Camera,
  UtensilsCrossed,
  Volume2,
  UserCheck,
  Flower2,
  Clock,
  Sparkle,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ─── 4 Category Navigation Specifications ─── */
interface CategoryNavConfig {
  id: string;
  num: string;
  title: string;
  tagline: string;
  icon: React.ElementType;
  palette: {
    primary: string;
    secondary: string;
    lightBg: string;
    border: string;
    tagBg: string;
  };
}

const categoryNavConfig: CategoryNavConfig[] = [
  {
    id: "life-events",
    num: "01",
    title: "LIFE EVENTS",
    tagline: "Weddings, Birthdays & Family",
    icon: Heart,
    palette: {
      primary: "#D8B5A8", // Dusty Rose
      secondary: "#C7A978", // Champagne Gold
      lightBg: "bg-[#F7EFE9]",
      border: "border-[#D8B5A8]/50",
      tagBg: "bg-[#D8B5A8]/15 text-[#9E6554]",
    },
  },
  {
    id: "corporate-events",
    num: "02",
    title: "CORPORATE EVENTS",
    tagline: "Conferences, Summits & Launches",
    icon: Building2,
    palette: {
      primary: "#4F918B", // Muted Teal
      secondary: "#E8DFD0", // Warm Beige
      lightBg: "bg-[#EBF3F2]",
      border: "border-[#4F918B]/50",
      tagBg: "bg-[#4F918B]/15 text-[#326964]",
    },
  },
  {
    id: "institutional-public",
    num: "03",
    title: "INSTITUTIONAL & PUBLIC",
    tagline: "Graduations, Festivals & Scales",
    icon: Landmark,
    palette: {
      primary: "#AEBBAA", // Sage Green
      secondary: "#BC806B", // Terracotta
      lightBg: "bg-[#F2F5F0]",
      border: "border-[#AEBBAA]/50",
      tagBg: "bg-[#AEBBAA]/20 text-[#4D6546]",
    },
  },
  {
    id: "brand-experiences",
    num: "04",
    title: "BRAND EXPERIENCES",
    tagline: "Exhibitions, Stalls & Pop-ups",
    icon: Layers,
    palette: {
      primary: "#C8BDD8", // Soft Lavender
      secondary: "#C6D8DF", // Pale Blue
      lightBg: "bg-[#F4F1F7]",
      border: "border-[#C8BDD8]/50",
      tagBg: "bg-[#C8BDD8]/20 text-[#6C5685]",
    },
  },
];

/* ─── 8-Step "More Than Just Décor" Connected Journey Sequence ─── */
interface JourneyStage {
  step: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  accent: string;
  tag: string;
  previewImage?: string;
}

const managementSteps: JourneyStage[] = [
  {
    step: "01",
    title: "Event Planning",
    desc: "Understanding vision, timeline, budget & run-of-show roadmap.",
    icon: CalendarCheck2,
    accent: "#C7A978", // Champagne Gold
    tag: "Blueprint & Roadmap",
  },
  {
    step: "02",
    title: "Venue Preparation",
    desc: "Layout mapping, zoning, electrical rigging & site clearance.",
    icon: Store,
    accent: "#4F918B", // Muted Teal
    tag: "Site Architecture",
  },
  {
    step: "03",
    title: "Décor & Styling",
    desc: "Themes, customized backdrops, stagecraft & floral artistry.",
    icon: Flower2,
    accent: "#D8B5A8", // Dusty Rose
    tag: "Aesthetic Identity",
    previewImage: "/images/hero2.png",
  },
  {
    step: "04",
    title: "Catering Arrangements",
    desc: "Menu tasting, live food counters & seamless buffet protocol.",
    icon: UtensilsCrossed,
    accent: "#BC806B", // Terracotta
    tag: "Hospitality Protocol",
    previewImage: "/images/b4.png",
  },
  {
    step: "05",
    title: "Photography & Video",
    desc: "Cinematic drone coverage, candid highlights & live telecast.",
    icon: Camera,
    accent: "#C8BDD8", // Soft Lavender
    tag: "Visual Memory",
    previewImage: "/images/hero1.png",
  },
  {
    step: "06",
    title: "Sound & Lighting",
    desc: "Acoustic calibration, mood washes & dynamic stage lighting.",
    icon: Volume2,
    accent: "#4F918B", // Muted Teal
    tag: "Audio-Visual Precision",
  },
  {
    step: "07",
    title: "Guest Management",
    desc: "VIP assistance, hospitality desks, entries & valet coordination.",
    icon: UserCheck,
    accent: "#AEBBAA", // Sage Green
    tag: "Seamless Experience",
  },
  {
    step: "08",
    title: "Final Event Execution",
    desc: "On-ground floor management, cues & immediate troubleshooting.",
    icon: ShieldCheck,
    accent: "#C7A978", // Warm Gold
    tag: "Showtime Stewardship",
    previewImage: "/images/b1.png",
  },
];

export default function ServicesPageContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [activeJourneyStage, setActiveJourneyStage] = useState<number | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const isReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (isReduced) return;

      /* 1. Hero text reveal */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".svc-hero-text"),
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
        }
      );

      /* 2. Hero photo collage entrance */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".svc-hero-photo"),
        { y: 40, opacity: 0, scale: 0.94 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.15,
        }
      );

      /* 3. Category nav items entrance */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".svc-nav-pill"),
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".svc-nav-bar"),
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      /* 4. Desktop Horizontal Journey Connecting Line Progressive Draw */
      const hLine = containerRef.current.querySelector(".journey-h-track");
      if (hLine) {
        const len = (hLine as SVGPathElement).getTotalLength?.() || 1160;
        gsap.set(hLine, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(hLine, {
          strokeDashoffset: 0,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".journey-h-wrap"),
            start: "top 78%",
            toggleActions: "play none none none",
          },
        });
      }

      /* 5. Desktop Horizontal Journey Nodes Sequence */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".journey-stage-node"),
        { y: 30, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".journey-h-wrap"),
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      /* 6. Mobile Vertical Journey Items Sequence */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".journey-v-item"),
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".journey-v-wrap"),
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      /* 7. Journey Completion Beacon Reveal */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".journey-completion-elem"),
        { y: 25, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".journey-completion-beacon"),
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      /* 8. Closing CTA section reveal */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".svc-cta-content"),
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".svc-closing-cta"),
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );

  const activeNav = categoryNavConfig[activeCategory];

  return (
    <div ref={containerRef} className="w-full bg-[#F7F3EA] text-[#292825]">
      {/* ════════════════════════════════════════════════════ */}
      {/* 1. ASYMMETRIC EDITORIAL HERO SECTION                 */}
      {/* ════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#FCFAF6] overflow-hidden border-b border-[#DED6C9]">
        {/* Ambient atmospheric glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[650px] h-[380px] bg-[#C7A978]/7 blur-[140px] rounded-full" />
          <div className="absolute bottom-10 left-1/4 w-[500px] h-[320px] bg-[#4F918B]/6 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-14 sm:py-20 md:py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* ── LEFT: Expressive Editorial Typography & CTAs ── */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eyebrow Label */}
              <div className="svc-hero-text inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#C7A978]/40 bg-[#C7A978]/10 text-[#C7A978] text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7A978] animate-pulse" />
                CAPABILITIES &amp; SCOPE
              </div>

              {/* Main Heading with Teal & Champagne Highlights */}
              <h1 className="svc-hero-text text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[3.9rem] font-serif font-bold tracking-tight text-[#292825] leading-[1.12]">
                Events We Plan,
                <br />
                <span className="text-[#4F918B] italic font-normal">
                  Design
                </span>{" "}
                <span className="text-[#292825]">&amp;</span>{" "}
                <span className="text-[#C7A978] italic font-normal">
                  Manage
                </span>
                .
              </h1>

              {/* Fine Champagne Editorial Rule */}
              <div className="svc-hero-text w-20 h-[2px] bg-gradient-to-r from-[#C7A978] via-[#4F918B]/60 to-transparent" />

              {/* Supporting Content */}
              <p className="svc-hero-text text-base sm:text-lg text-[#6F6A61] leading-relaxed max-w-xl font-light">
                From personal life milestones to corporate gatherings and
                large-scale public events, explore our complete event execution
                capabilities.
              </p>

              {/* Brand Statement with Elegant Typography */}
              <div className="svc-hero-text pt-1">
                <div className="inline-flex flex-wrap items-center gap-2.5 px-4 py-2 rounded-xl border border-[#DED6C9] bg-[#F7F3EA]/80 text-xs sm:text-sm font-mono tracking-wider text-[#292825] shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#4F918B]" />
                  <span className="font-bold">One Team.</span>
                  <span className="text-[#6F6A61]">Every Detail.</span>
                  <span className="text-[#C7A978] font-semibold">
                    Complete Event Responsibility.
                  </span>
                </div>
              </div>

              {/* Two Clear CTA Links */}
              <div className="svc-hero-text flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#category-showcase"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#4F918B] hover:bg-[#3F7A75] text-[#FCFAF6] font-mono font-bold uppercase tracking-widest text-[11px] sm:text-xs transition-all duration-300 shadow-lg shadow-[#4F918B]/15 active:scale-95"
                >
                  <span>EXPLORE OUR SERVICES</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 border border-[#C7A978]/60 bg-transparent hover:bg-[#C7A978]/10 text-[#292825] font-mono font-bold uppercase tracking-widest text-[11px] sm:text-xs transition-all duration-300 active:scale-95"
                >
                  <span>PLAN YOUR EVENT</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* ── RIGHT: Dynamic 4-Photo Collage (4 Distinct Event Types) ── */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full max-w-[520px] h-[460px] sm:h-[500px]">
                {/* 1. Large Primary Photo: Wedding & Gala Setup */}
                <div className="svc-hero-photo absolute top-0 left-0 w-[58%] h-[68%] rounded-[2rem] overflow-hidden border-2 border-[#C7A978]/40 shadow-xl bg-[#F1EADF] z-10">
                  <Image
                    src="/images/hero1.png"
                    alt="Premium wedding stage setup by Iragu Events"
                    fill
                    priority
                    className="object-cover"
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#292825]/45 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 bg-[#FCFAF6]/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[9px] font-mono uppercase tracking-wider text-[#9E6554] font-bold">
                    Weddings &amp; Galas
                  </span>
                </div>

                {/* 2. Top-Right: Corporate Conference & Brand Launch */}
                <div className="svc-hero-photo absolute top-4 right-0 w-[45%] h-[48%] rounded-2xl overflow-hidden border-2 border-[#4F918B]/40 shadow-xl bg-[#292825] z-20">
                  <Image
                    src="/images/img1.1.png"
                    alt="Corporate conference stage by Iragu Events"
                    fill
                    className="object-cover"
                    sizes="240px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#292825]/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 bg-[#FCFAF6]/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[9px] font-mono uppercase tracking-wider text-[#326964] font-bold">
                    Corporate Summits
                  </span>
                </div>

                {/* 3. Bottom-Left: Colourful Birthday & Family Party */}
                <div className="svc-hero-photo absolute bottom-2 left-6 w-[44%] h-[40%] rounded-2xl overflow-hidden border-2 border-[#BC806B]/40 shadow-xl bg-[#F1EADF] z-30">
                  <Image
                    src="/images/img1.2.png"
                    alt="Vibrant birthday party setup with balloon styling"
                    fill
                    className="object-cover"
                    sizes="230px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#292825]/40 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 bg-[#FCFAF6]/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider text-[#BC806B] font-bold">
                    Life Celebrations
                  </span>
                </div>

                {/* 4. Bottom-Right: Large Institutional / Public Event */}
                <div className="svc-hero-photo absolute bottom-0 right-2 w-[50%] h-[44%] rounded-2xl overflow-hidden border-2 border-[#AEBBAA]/40 shadow-xl bg-[#E8DFD0] z-20">
                  <Image
                    src="/images/b3.png"
                    alt="Institutional ceremony and auditorium scale"
                    fill
                    className="object-cover"
                    sizes="260px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#292825]/45 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 bg-[#FCFAF6]/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider text-[#4D6546] font-bold">
                    Public Scale
                  </span>
                </div>

                {/* Subtle Floating Label Center Badge */}
                <div className="svc-hero-photo absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FCFAF6]/95 backdrop-blur-md border border-[#DED6C9] rounded-xl px-4 py-2.5 shadow-2xl z-40 text-center">
                  <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#292825] font-bold flex items-center gap-1.5 justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4F918B]" />
                    COMPLETE EVENT STUDIO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════ */}
      {/* 2. REFINED INTERACTIVE CATEGORY SELECTOR             */}
      {/* ════════════════════════════════════════════════════ */}
      <section
        id="category-showcase"
        className="svc-nav-bar relative w-full bg-[#F7F3EA] border-b border-[#DED6C9] sticky top-20 z-30 backdrop-blur-md bg-[#F7F3EA]/95 shadow-xs"
      >
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-3.5 sm:py-4">
          {/* Desktop Category Selector (Balanced 4-Column Row, Zero Scrollbar, Zero Clipping) */}
          <div className="svc-nav-pill hidden md:grid grid-cols-4 gap-0 divide-x divide-[#DED6C9]">
            {categoryNavConfig.map((cat, idx) => {
              const IconComp = cat.icon;
              const isActive = activeCategory === idx;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(idx)}
                  className={`group relative flex flex-col items-center text-center px-4 py-3 transition-all duration-300 ${
                    isActive ? "bg-[#FCFAF6]/80" : "hover:bg-[#FCFAF6]/40"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="font-serif text-2xl lg:text-3xl font-bold tracking-tight transition-colors duration-300"
                      style={{
                        color: isActive ? cat.palette.primary : "#928B81",
                      }}
                    >
                      {cat.num}
                    </span>
                    <IconComp
                      className="w-4 h-4 transition-colors duration-300"
                      style={{
                        color: isActive ? cat.palette.primary : "#928B81",
                      }}
                    />
                  </div>

                  <h3
                    className={`text-xs font-mono tracking-[0.16em] uppercase transition-colors duration-300 ${
                      isActive
                        ? "text-[#292825] font-bold"
                        : "text-[#6F6A61] group-hover:text-[#292825]"
                    }`}
                  >
                    {cat.title}
                  </h3>

                  <p className="text-[10px] text-[#928B81] font-light hidden lg:block mt-0.5">
                    {cat.tagline}
                  </p>

                  {/* Animated Active Indicator */}
                  <div
                    className={`absolute bottom-0 left-1/4 right-1/4 h-[2.5px] rounded-full transition-all duration-300 ${
                      isActive
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0 group-hover:opacity-40 group-hover:scale-x-75"
                    }`}
                    style={{ backgroundColor: cat.palette.primary }}
                  />
                </button>
              );
            })}
          </div>

          {/* Mobile Touch-Friendly Category Selector */}
          <div className="svc-nav-pill md:hidden grid grid-cols-2 gap-2.5">
            {categoryNavConfig.map((cat, idx) => {
              const IconComp = cat.icon;
              const isActive = activeCategory === idx;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(idx)}
                  className={`relative flex items-center gap-2.5 px-3 py-2.5 rounded-xl border transition-all duration-300 text-left ${
                    isActive
                      ? "border-[#4F918B] bg-[#FCFAF6] shadow-xs"
                      : "border-[#DED6C9] bg-[#F7F3EA] text-[#6F6A61]"
                  }`}
                >
                  <span
                    className="font-serif text-base font-bold"
                    style={{
                      color: isActive ? cat.palette.primary : "#928B81",
                    }}
                  >
                    {cat.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`text-[10px] font-mono tracking-wider uppercase truncate ${
                        isActive ? "text-[#292825] font-bold" : "text-[#6F6A61]"
                      }`}
                    >
                      {cat.title}
                    </h3>
                  </div>
                  {isActive && (
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: cat.palette.primary }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════ */}
      {/* 3. FOUR DISTINCT VISUAL SERVICE SHOWCASES            */}
      {/* ════════════════════════════════════════════════════ */}

      {/* ─── CATEGORY 01: LIFE EVENTS (Warm Editorial Collage, Dusty Rose & Champagne) ─── */}
      {activeCategory === 0 && (
        <section className="relative w-full bg-[#FCFAF6] py-14 sm:py-20 md:py-24 border-b border-[#DED6C9] transition-opacity duration-500">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 space-y-12">
            {/* Category Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#D8B5A8]/40">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D8B5A8]/50 bg-[#F7EFE9] text-[#9E6554] text-[10px] font-mono tracking-[0.2em] uppercase">
                  Category 01 &bull; Personal Milestones &bull; Dusty Rose &amp; Champagne
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#292825] tracking-tight">
                  Life Events &amp; Family Celebrations
                </h2>
                <p className="text-sm sm:text-base text-[#6F6A61] font-light leading-relaxed">
                  From intimate family ceremonies to milestone celebrations, we
                  curate warmth, elegance, and memories designed uniquely around
                  your story.
                </p>
              </div>

              <Link
                href="/contact"
                className="self-start md:self-auto inline-flex items-center gap-2 px-6 py-3 bg-[#4F918B] hover:bg-[#3F7A75] text-[#FCFAF6] font-mono font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Plan A Celebration</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Asymmetric Editorial Collage Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
              {/* Featured Left Showcase: Weddings */}
              <div className="lg:col-span-7 group rounded-3xl border border-[#D8B5A8]/50 bg-[#F7EFE9]/40 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src="/images/hero1.png"
                    alt="Weddings by Iragu Events"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#292825]/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-[#FCFAF6]/95 backdrop-blur-sm px-3 py-1 rounded-full border border-[#D8B5A8] text-[10px] font-mono uppercase tracking-wider text-[#9E6554] font-bold">
                    Featured Life Milestone
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-[#FCFAF6]">
                    <span className="font-mono text-xs text-[#C7A978] tracking-widest block mb-1">
                      01 / 05
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold">
                      Weddings
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <p className="text-sm sm:text-base text-[#6F6A61] font-light leading-relaxed">
                    From intimate traditional ceremonies to grand celebrations,
                    we manage concept design, bespoke mandap styling, guest
                    hospitality, and complete execution so you can cherish the moment.
                  </p>
                  <div className="pt-3 flex items-center justify-between border-t border-[#DED6C9]">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#9E6554] font-semibold">
                      Bespoke Décor &bull; Complete Coordination
                    </span>
                    <Link
                      href="/events/weddings"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#4F918B] hover:text-[#292825] transition-colors"
                    >
                      <span>Explore Weddings</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Side: 4 Staggered Life Event Cards */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {[
                  {
                    title: "Birthdays",
                    slug: "birthdays",
                    desc: "Creative, themed celebrations designed around the person you are celebrating.",
                    num: "02",
                    tag: "Themed & Vibrant",
                    icon: Cake,
                    img: "/images/img1.2.png",
                  },
                  {
                    title: "Baptism & Baby Celebrations",
                    slug: "baptism",
                    desc: "Elegant and meaningful pastel setups designed to welcome life's precious milestones.",
                    num: "03",
                    tag: "Pastel & Floral",
                    icon: Baby,
                    img: "/images/hero2.png",
                  },
                  {
                    title: "Engagements & Anniversaries",
                    slug: "engagements-anniversaries",
                    desc: "Beautiful romantic experiences created around your story and relationship.",
                    num: "04",
                    tag: "Story Driven",
                    icon: Sparkles,
                    img: "/images/b4.png",
                  },
                  {
                    title: "Family Celebrations",
                    slug: "family-celebrations",
                    desc: "Because every milestone family moment deserves to be celebrated effortlessly.",
                    num: "05",
                    tag: "Warm Hospitality",
                    icon: Users,
                    img: "/images/b5.png",
                  },
                ].map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <Link
                      key={item.num}
                      href={`/events/${item.slug}`}
                      className="group/card block p-4 sm:p-5 rounded-2xl border border-[#D8B5A8]/40 bg-[#F7EFE9]/30 hover:bg-[#F7EFE9] hover:border-[#D8B5A8] transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 rounded-lg bg-[#FCFAF6] border border-[#D8B5A8]/50 text-[#9E6554] group-hover/card:scale-105 transition-transform">
                            <ItemIcon className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-mono tracking-widest text-[#928B81]">
                            {item.num}
                          </span>
                        </div>
                        <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-[#D8B5A8]/40 bg-[#FCFAF6] text-[#9E6554]">
                          {item.tag}
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-serif font-bold text-[#292825] group-hover/card:text-[#4F918B] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#6F6A61] font-light leading-relaxed mt-1">
                        {item.desc}
                      </p>

                      <div className="mt-3 pt-2 border-t border-[#DED6C9]/40 flex items-center justify-between text-[11px] font-mono text-[#928B81]">
                        <span>View Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#4F918B] group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-transform" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── CATEGORY 02: CORPORATE EVENTS (Structured & Contemporary, Muted Teal) ─── */}
      {activeCategory === 1 && (
        <section className="relative w-full bg-[#FCFAF6] py-14 sm:py-20 md:py-24 border-b border-[#DED6C9] transition-opacity duration-500">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 space-y-12">
            {/* Category Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#4F918B]/30">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#4F918B]/40 bg-[#EBF3F2] text-[#326964] text-[10px] font-mono tracking-[0.2em] uppercase">
                  Category 02 &bull; Enterprise &amp; Brands &bull; Muted Teal &amp; Charcoal
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#292825] tracking-tight">
                  Corporate Events &amp; Business Summits
                </h2>
                <p className="text-sm sm:text-base text-[#6F6A61] font-light leading-relaxed">
                  Professional, engaging experiences designed for leadership,
                  stakeholders, and enterprise teams — supported by precise AV,
                  stage rigging, and run-of-show discipline.
                </p>
              </div>

              <Link
                href="/contact"
                className="self-start md:self-auto inline-flex items-center gap-2 px-6 py-3 bg-[#4F918B] hover:bg-[#3F7A75] text-[#FCFAF6] font-mono font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Request Corporate Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Executive Wide Stagecraft Visual */}
            <div className="relative w-full aspect-[21/9] sm:aspect-[24/9] rounded-3xl overflow-hidden border border-[#DED6C9] shadow-lg bg-[#292825]">
              <Image
                src="/images/img1.1.png"
                alt="Corporate conference stage by Iragu Events"
                fill
                className="object-cover opacity-85"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#292825]/90 via-[#292825]/45 to-transparent" />
              <div className="absolute inset-0 p-6 sm:p-10 md:p-12 flex flex-col justify-between text-[#FCFAF6] max-w-xl">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#4F918B] font-bold">
                  Corporate Production Standard
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold leading-tight">
                    Auditorium Staging, Live AV &amp; Delegate Management
                  </h3>
                  <p className="text-xs sm:text-sm text-[#FCFAF6]/80 font-light mt-2 hidden sm:block">
                    High-definition LED screens, keynote acoustics, attendee
                    credentials, and strict timeline execution.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono tracking-wider text-[#C7A978]">
                  <span>&bull; AV &amp; Lighting Rigging</span>
                  <span>&bull; Executive Protocol</span>
                  <span>&bull; Seamless Transitions</span>
                </div>
              </div>
            </div>

            {/* 5 Structured Corporate Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: "Brand Launches",
                  desc: "Create a powerful first impression for your brand with impactful stage presence and media coordination.",
                  num: "01",
                  icon: Rocket,
                },
                {
                  title: "Corporate Gatherings",
                  desc: "Professional, engaging experiences for teams, leadership summits, and business stakeholders.",
                  num: "02",
                  icon: Building2,
                },
                {
                  title: "Conferences & Seminars",
                  desc: "Complete planning and production support, sound, projection, acoustics, and delegate seating.",
                  num: "03",
                  icon: Presentation,
                },
                {
                  title: "Annual Celebrations",
                  desc: "Bring your team together with memorable annual gatherings, awards, and entertainment.",
                  num: "04",
                  icon: Trophy,
                },
                {
                  title: "Product Launches",
                  desc: "Turn your product launch into an experience people remember with bespoke unveiling stages.",
                  num: "05",
                  icon: Package,
                },
              ].map((item) => {
                const ItemIcon = item.icon;
                return (
                  <Link
                    key={item.num}
                    href="/events/corporate"
                    className="group/card block p-6 rounded-2xl border border-[#4F918B]/30 bg-[#EBF3F2]/40 hover:bg-[#EBF3F2] hover:border-[#4F918B] transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2.5 rounded-xl bg-[#FCFAF6] border border-[#DED6C9] text-[#4F918B] group-hover/card:scale-105 transition-transform">
                          <ItemIcon className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-xs text-[#928B81]">
                          {item.num}
                        </span>
                      </div>
                      <h4 className="text-lg font-serif font-bold text-[#292825] group-hover/card:text-[#4F918B] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#6F6A61] font-light leading-relaxed mt-2">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-[#DED6C9]/60 flex items-center justify-between text-xs font-mono text-[#928B81]">
                      <span className="text-[#4F918B] font-semibold">
                        Enterprise Scope
                      </span>
                      <span className="inline-flex items-center gap-1 group-hover/card:text-[#4F918B] transition-colors">
                        <span>Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ─── CATEGORY 03: INSTITUTIONAL & PUBLIC EVENTS (Sage Green & Terracotta) ─── */}
      {activeCategory === 2 && (
        <section className="relative w-full bg-[#FCFAF6] py-14 sm:py-20 md:py-24 border-b border-[#DED6C9] transition-opacity duration-500">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 space-y-12">
            {/* Category Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#AEBBAA]/40">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#AEBBAA]/50 bg-[#F2F5F0] text-[#4D6546] text-[10px] font-mono tracking-[0.2em] uppercase">
                  Category 03 &bull; Scale &amp; Production &bull; Sage Green &amp; Terracotta
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#292825] tracking-tight">
                  Institutional &amp; Public Events
                </h2>
                <p className="text-sm sm:text-base text-[#6F6A61] font-light leading-relaxed">
                  From planning and production to on-ground execution, we are
                  equipped to manage large-scale events with high attendance and
                  strict protocols.
                </p>
              </div>

              <Link
                href="/contact"
                className="self-start md:self-auto inline-flex items-center gap-2 px-6 py-3 bg-[#4F918B] hover:bg-[#3F7A75] text-[#FCFAF6] font-mono font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Discuss Public Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Scale Visual Composition */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Photo: Public Scale Stage Visual */}
              <div className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#DED6C9] shadow-lg bg-[#E8DFD0]">
                <Image
                  src="/images/b3.png"
                  alt="Large scale public event production by Iragu Events"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#292825]/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-[#FCFAF6]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#BC806B] block">
                    Large-Scale Execution
                  </span>
                  <h4 className="text-xl font-serif font-bold">
                    Auditorium Seating, Sound Riggings &amp; Public Protocols
                  </h4>
                </div>
              </div>

              {/* Right Capabilities List */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "College & Institutional Events",
                    desc: "Cultural festivals, symposiums, convocations, and inter-college assemblies.",
                    icon: GraduationCap,
                    tag: "Campus Festivals",
                  },
                  {
                    title: "Medical & Graduation Events",
                    desc: "Graduation ceremonies, CME conferences, and hospital milestones with decorum.",
                    icon: Award,
                    tag: "Solemn Protocol",
                  },
                  {
                    title: "Government Events",
                    desc: "Inaugurations, state functions, and public exhibitions adhering to protocol.",
                    icon: Landmark,
                    tag: "Official Protocol",
                  },
                  {
                    title: "Public & Large Celebrations",
                    desc: "Zoning, wide audio coverage, barricades, crowd safety, and stage riggings.",
                    icon: Megaphone,
                    tag: "Mass Coordination",
                  },
                ].map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <Link
                      key={idx}
                      href="/events/public-events"
                      className="group/card block p-5 rounded-2xl border border-[#AEBBAA]/40 bg-[#F2F5F0]/50 hover:bg-[#F2F5F0] hover:border-[#AEBBAA] transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="p-2 rounded-lg bg-[#FCFAF6] border border-[#AEBBAA]/50 text-[#4D6546] group-hover/card:scale-105 transition-transform">
                          <ItemIcon className="w-4 h-4" />
                        </div>
                        <span className="text-[9px] font-mono uppercase tracking-wider text-[#BC806B] bg-[#FCFAF6] px-2 py-0.5 rounded border border-[#BC806B]/30 font-semibold">
                          {item.tag}
                        </span>
                      </div>
                      <h4 className="text-base font-serif font-bold text-[#292825] group-hover/card:text-[#4F918B] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#6F6A61] font-light leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── CATEGORY 04: BRAND EXPERIENCES (Soft Lavender & Pale Blue) ─── */}
      {activeCategory === 3 && (
        <section className="relative w-full bg-[#FCFAF6] py-14 sm:py-20 md:py-24 border-b border-[#DED6C9] transition-opacity duration-500">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 space-y-12">
            {/* Category Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#C8BDD8]/40">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C8BDD8]/50 bg-[#F4F1F7] text-[#6C5685] text-[10px] font-mono tracking-[0.2em] uppercase">
                  Category 04 &bull; Experiential Marketing &bull; Lavender &amp; Soft Blue
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#292825] tracking-tight">
                  Brand Experiences &amp; Creative Activations
                </h2>
                <p className="text-sm sm:text-base text-[#6F6A61] font-light leading-relaxed">
                  We help brands create physical and sensory experiences that
                  attract attention, engage consumers, and leave an enduring
                  impression.
                </p>
              </div>

              <Link
                href="/contact"
                className="self-start md:self-auto inline-flex items-center gap-2 px-6 py-3 bg-[#4F918B] hover:bg-[#3F7A75] text-[#FCFAF6] font-mono font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Plan Brand Experience</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Contemporary Visual Gallery with Asymmetric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Exhibitions & Expo Stalls",
                  desc: "Custom-built exhibition stalls, modern modular structures, display lighting, and visitor interaction points.",
                  img: "/images/b2.png",
                  icon: Store,
                  tag: "Bespoke Booths",
                },
                {
                  title: "Brand Activations & Pop-Ups",
                  desc: "Experiential marketing installations, mall activations, street showcases, and product engagement touchpoints.",
                  img: "/images/b4.png",
                  icon: Flame,
                  tag: "High Engagement",
                },
                {
                  title: "Experiential Marketing",
                  desc: "Creative photo zones, interactive branded setups, sensory design, and immersive spatial storytelling.",
                  img: "/images/hero2.png",
                  icon: Compass,
                  tag: "Spatial Design",
                },
              ].map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <Link
                    key={idx}
                    href="/events/customised-decor"
                    className="group/card block rounded-3xl border border-[#C8BDD8]/50 bg-[#F4F1F7]/40 overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative w-full aspect-[16/11] overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#292825]/50 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4 bg-[#FCFAF6]/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[9px] font-mono uppercase tracking-wider text-[#6C5685] font-bold">
                        {item.tag}
                      </div>
                    </div>

                    <div className="p-6 space-y-2">
                      <div className="flex items-center gap-2 text-[#6C5685]">
                        <ItemIcon className="w-4 h-4" />
                        <span className="text-[10px] font-mono tracking-wider uppercase font-semibold">
                          Creative Experience
                        </span>
                      </div>
                      <h4 className="text-xl font-serif font-bold text-[#292825] group-hover/card:text-[#4F918B] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#6F6A61] font-light leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="pt-3 flex items-center justify-between text-xs font-mono text-[#4F918B]">
                        <span>Explore Concepts</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/card:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════ */}
      {/* 4. THE EVENT JOURNEY EXPERIENCE                      */}
      {/* (Horizontal connected journey on desktop, vertical   */}
      {/* timeline on mobile, ending in completion beacon)     */}
      {/* ════════════════════════════════════════════════════ */}
      <section className="journey-section relative w-full bg-[#F1EADF] overflow-hidden py-18 sm:py-24 md:py-32 border-b border-[#DED6C9]">
        {/* Warm Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#C7A978]/9 blur-[140px] rounded-full" />
          <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-[#4F918B]/6 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 space-y-14">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#4F918B]/35 bg-[#4F918B]/10 text-[#4F918B] text-[11px] font-mono tracking-[0.2em] uppercase shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#4F918B]" />
              <span>END-TO-END EVENT STEWARDSHIP</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif font-bold text-[#292825] tracking-tight leading-[1.14]">
              More Than Just Décor.
              <br />
              <span className="text-[#4F918B] italic font-normal">
                We Manage Every Moment.
              </span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#6F6A61] font-light leading-relaxed max-w-2xl mx-auto">
              From planning and coordination to catering, photography, production
              and event-day execution, one team brings every detail together.
            </p>

            {/* Continuous Journey Milestone Indicator */}
            <div className="pt-2 flex items-center justify-center gap-2 text-[10px] sm:text-xs font-mono tracking-widest uppercase text-[#928B81]">
              <span className="text-[#C7A978] font-bold">01 Event Planning</span>
              <span>&rarr;</span>
              <span className="hidden sm:inline">02 Prep &rarr; 03 Styling &rarr; 04 Catering &rarr; 05 Photo &rarr; 06 AV &rarr; 07 Guests &rarr;</span>
              <span className="text-[#4F918B] font-bold">08 Final Execution</span>
            </div>
          </div>

          {/* ─── DESKTOP: Continuous Horizontal Event Journey (lg and up) ─── */}
          <div className="journey-h-wrap hidden lg:block relative w-full pt-4 pb-8">
            {/* Horizontal Flowing Sinuous SVG Path */}
            <svg
              className="absolute inset-x-0 top-[256px] w-full h-[32px] pointer-events-none z-10"
              viewBox="0 0 1200 32"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="journeyHGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C7A978" />
                  <stop offset="25%" stopColor="#4F918B" />
                  <stop offset="50%" stopColor="#D8B5A8" />
                  <stop offset="75%" stopColor="#BC806B" />
                  <stop offset="100%" stopColor="#C7A978" />
                </linearGradient>
              </defs>
              {/* Subtle guide track */}
              <path
                d="M 40,16 Q 180,6 320,16 T 600,16 T 880,16 T 1160,16"
                fill="none"
                stroke="#DED6C9"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              {/* Progressive animated gradient line */}
              <path
                className="journey-h-track"
                d="M 40,16 Q 180,6 320,16 T 600,16 T 880,16 T 1160,16"
                fill="none"
                stroke="url(#journeyHGrad)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>

            {/* 8-Column Continuous Alternating Composition */}
            <div className="grid grid-cols-8 gap-3 relative h-[560px]">
              {managementSteps.map((stepItem, idx) => {
                const StepIcon = stepItem.icon;
                const isEven = idx % 2 === 1; // 0, 2, 4, 6 (Odd numbered stages 01, 03, 05, 07) vs 1, 3, 5, 7 (Even stages 02, 04, 06, 08)
                const isActive = activeJourneyStage === idx;

                return (
                  <div
                    key={stepItem.step}
                    className="journey-stage-node relative h-[560px] flex flex-col items-center group/node cursor-pointer"
                    onMouseEnter={() => setActiveJourneyStage(idx)}
                    onMouseLeave={() => setActiveJourneyStage(null)}
                    onClick={() => setActiveJourneyStage(idx)}
                  >
                    {/* ── TOP SECTION (For Stages 01, 03, 05, 07) ── */}
                    {!isEven ? (
                      <div
                        className={`absolute top-0 inset-x-0 h-[240px] flex flex-col justify-end items-center text-center pb-3 px-1 transition-all duration-300 ${
                          isActive ? "scale-105" : ""
                        }`}
                      >
                        {/* Micro Phase Tag */}
                        <span
                          className="text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full border mb-1.5 bg-[#FCFAF6]/90 transition-colors"
                          style={{
                            borderColor: `${stepItem.accent}55`,
                            color: stepItem.accent,
                          }}
                        >
                          {stepItem.tag}
                        </span>

                        {/* Large Stage Number */}
                        <span
                          className="font-serif text-3xl font-bold tracking-tight transition-colors duration-300"
                          style={{
                            color: isActive ? stepItem.accent : "#928B81",
                          }}
                        >
                          {stepItem.step}
                        </span>

                        {/* Stage Title */}
                        <h3 className="text-sm font-serif font-bold text-[#292825] group-hover/node:text-[#4F918B] transition-colors leading-snug mt-0.5">
                          {stepItem.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[11px] text-[#6F6A61] font-light leading-snug mt-1 max-w-[135px]">
                          {stepItem.desc}
                        </p>

                        {/* Genuine Event Photo Preview (for selected stages) */}
                        {stepItem.previewImage && (
                          <div className="relative w-16 h-11 rounded-lg overflow-hidden border border-[#DED6C9] shadow-xs mt-2 transition-transform duration-300 group-hover/node:scale-110">
                            <Image
                              src={stepItem.previewImage}
                              alt={stepItem.title}
                              fill
                              className="object-cover"
                              sizes="64px"
                            />
                          </div>
                        )}

                        {/* Vertical Stem pointing down to node */}
                        <div
                          className="w-[1.5px] h-5 mt-2 transition-all duration-300"
                          style={{
                            backgroundColor: isActive ? stepItem.accent : "#DED6C9",
                          }}
                        />
                      </div>
                    ) : null}

                    {/* ── CENTRAL MILESTONE CIRCLE MARKER (Baseline y = 260px) ── */}
                    <div className="absolute top-[260px] -translate-y-1/2 left-1/2 -translate-x-1/2 z-20">
                      {/* Pulse Ring Halo */}
                      <span
                        className={`absolute -inset-2 rounded-full transition-all duration-300 ${
                          isActive
                            ? "scale-125 opacity-100"
                            : "scale-100 opacity-0 group-hover/node:opacity-40"
                        }`}
                        style={{ backgroundColor: `${stepItem.accent}35` }}
                      />

                      {/* Core Milestone Button */}
                      <div
                        className={`w-12 h-12 rounded-full border-2 transition-all duration-300 flex items-center justify-center shadow-md bg-[#FCFAF6] ${
                          isActive ? "scale-115 shadow-lg" : "group-hover/node:scale-105"
                        }`}
                        style={{
                          borderColor: stepItem.accent,
                          color: isActive ? "#FCFAF6" : stepItem.accent,
                          backgroundColor: isActive ? stepItem.accent : "#FCFAF6",
                        }}
                      >
                        <StepIcon className="w-5 h-5 stroke-[1.8]" />
                      </div>
                    </div>

                    {/* ── BOTTOM SECTION (For Stages 02, 04, 06, 08) ── */}
                    {isEven ? (
                      <div
                        className={`absolute top-[284px] inset-x-0 h-[250px] flex flex-col justify-start items-center text-center pt-3 px-1 transition-all duration-300 ${
                          isActive ? "scale-105" : ""
                        }`}
                      >
                        {/* Vertical Stem pointing up from node */}
                        <div
                          className="w-[1.5px] h-5 mb-2 transition-all duration-300"
                          style={{
                            backgroundColor: isActive ? stepItem.accent : "#DED6C9",
                          }}
                        />

                        {/* Micro Phase Tag */}
                        <span
                          className="text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full border mb-1 bg-[#FCFAF6]/90 transition-colors"
                          style={{
                            borderColor: `${stepItem.accent}55`,
                            color: stepItem.accent,
                          }}
                        >
                          {stepItem.tag}
                        </span>

                        {/* Large Stage Number */}
                        <span
                          className="font-serif text-3xl font-bold tracking-tight transition-colors duration-300"
                          style={{
                            color: isActive ? stepItem.accent : "#928B81",
                          }}
                        >
                          {stepItem.step}
                        </span>

                        {/* Stage Title */}
                        <h3 className="text-sm font-serif font-bold text-[#292825] group-hover/node:text-[#4F918B] transition-colors leading-snug mt-0.5">
                          {stepItem.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[11px] text-[#6F6A61] font-light leading-snug mt-1 max-w-[135px]">
                          {stepItem.desc}
                        </p>

                        {/* Genuine Event Photo Preview (for selected stages) */}
                        {stepItem.previewImage && (
                          <div className="relative w-16 h-11 rounded-lg overflow-hidden border border-[#DED6C9] shadow-xs mt-2 transition-transform duration-300 group-hover/node:scale-110">
                            <Image
                              src={stepItem.previewImage}
                              alt={stepItem.title}
                              fill
                              className="object-cover"
                              sizes="64px"
                            />
                          </div>
                        )}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ─── MOBILE & TABLET: Vertical Connected Timeline (below lg) ─── */}
          <div className="journey-v-wrap lg:hidden relative pl-8 sm:pl-12 max-w-lg mx-auto space-y-10 sm:space-y-12 pt-4">
            {/* Left Continuous Vertical Spine Line */}
            <div className="absolute left-[19px] sm:left-[23px] top-4 bottom-6 w-[2px] bg-gradient-to-b from-[#C7A978] via-[#4F918B] to-[#C7A978]" />

            {managementSteps.map((stepItem, idx) => {
              const StepIcon = stepItem.icon;
              return (
                <div
                  key={`v-${stepItem.step}`}
                  className="journey-v-item relative group/v flex items-start gap-4"
                >
                  {/* Left Milestone Marker along the line */}
                  <div
                    className="absolute -left-[35px] sm:-left-[43px] top-1 w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 bg-[#FCFAF6] flex items-center justify-center shadow-md transition-transform group-hover/v:scale-110 z-10"
                    style={{
                      borderColor: stepItem.accent,
                      color: stepItem.accent,
                    }}
                  >
                    <StepIcon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" />
                  </div>

                  {/* Right Content Stream */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <span
                        className="font-serif text-xl sm:text-2xl font-bold"
                        style={{ color: stepItem.accent }}
                      >
                        {stepItem.step}
                      </span>
                      <span
                        className="text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full border bg-[#FCFAF6]"
                        style={{
                          borderColor: `${stepItem.accent}55`,
                          color: stepItem.accent,
                        }}
                      >
                        {stepItem.tag}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-serif font-bold text-[#292825] group-hover/v:text-[#4F918B] transition-colors leading-snug">
                      {stepItem.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#6F6A61] font-light leading-relaxed">
                      {stepItem.desc}
                    </p>

                    {/* Photo preview on mobile if present */}
                    {stepItem.previewImage && (
                      <div className="relative w-24 h-16 rounded-xl overflow-hidden border border-[#DED6C9] shadow-sm mt-2">
                        <Image
                          src={stepItem.previewImage}
                          alt={stepItem.title}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ─── STRONG VISUAL ENDING: Completion Beacon Emblem ─── */}
          <div className="journey-completion-beacon pt-12 sm:pt-16 max-w-2xl mx-auto text-center space-y-4 border-t border-[#DED6C9]/80">
            {/* Distinctive Animated Circular Completion Emblem */}
            <div className="journey-completion-elem relative w-20 h-20 mx-auto flex items-center justify-center">
              {/* Dual Concentric Spinning Dashed Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#C7A978] animate-[spin_24s_linear_infinite]" />
              <div className="absolute inset-2 rounded-full border border-dashed border-[#4F918B] animate-[spin_16s_linear_infinite_reverse]" />
              {/* Center Shield Beacon */}
              <div className="w-12 h-12 rounded-full bg-[#FCFAF6] border-2 border-[#C7A978] flex items-center justify-center shadow-lg text-[#4F918B]">
                <ShieldCheck className="w-6 h-6 text-[#4F918B]" />
              </div>
            </div>

            <div className="journey-completion-elem inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C7A978]/40 bg-[#FCFAF6] text-[#C7A978] text-[10px] font-mono tracking-[0.2em] uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C7A978]" />
              <span>JOURNEY COMPLETED &bull; COMPLETE RESPONSIBILITY</span>
            </div>

            <h3 className="journey-completion-elem text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#292825] tracking-tight">
              Every Detail. One Responsible Team.
            </h3>

            <p className="journey-completion-elem text-sm sm:text-base text-[#6F6A61] font-light leading-relaxed max-w-lg mx-auto">
              From the first conversation to the final guest departure, we bring
              every part of your event together.
            </p>

            {/* Complete Roadmap Flow Bar */}
            <div className="journey-completion-elem pt-2 flex flex-wrap items-center justify-center gap-2 text-[10px] font-mono text-[#928B81]">
              <span>01 Plan</span>
              <span>&rarr;</span>
              <span>02 Prep</span>
              <span>&rarr;</span>
              <span>03 Style</span>
              <span>&rarr;</span>
              <span>04 Cater</span>
              <span>&rarr;</span>
              <span>05 Capture</span>
              <span>&rarr;</span>
              <span>06 AV</span>
              <span>&rarr;</span>
              <span>07 Guests</span>
              <span>&rarr;</span>
              <span className="text-[#4F918B] font-bold">08 Execute</span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════ */}
      {/* 5. COMPLETE EVENT MANAGEMENT VISUAL STATEMENT        */}
      {/* ════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#E8DFD0] overflow-hidden py-16 sm:py-24 md:py-30 border-b border-[#DED6C9]">
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Wide Cinematic Photograph */}
            <div className="lg:col-span-6 relative aspect-[16/11] rounded-3xl overflow-hidden border-2 border-[#DED6C9] shadow-xl bg-[#F7F3EA]">
              <Image
                src="/images/b4.png"
                alt="From the first idea to the final celebration — Iragu Events journey"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#292825]/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 bg-[#FCFAF6]/95 backdrop-blur-md border border-[#DED6C9] rounded-xl px-4 py-2.5 shadow-md flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#4F918B]" />
                <span className="text-[10px] font-mono tracking-[0.16em] uppercase text-[#292825] font-semibold">
                  Complete Event Responsibility
                </span>
              </div>
            </div>

            {/* Right: Brand Statement Typography */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#4F918B]/30 bg-[#4F918B]/10 text-[#4F918B] text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4F918B]" />
                OUR CORE PROMISE
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-serif font-bold text-[#292825] tracking-tight leading-[1.14]">
                From the First Idea
                <br />
                <span className="text-[#4F918B] italic font-normal">
                  to the Final Celebration.
                </span>
              </h2>

              <div className="w-16 h-[2px] bg-gradient-to-r from-[#C7A978] to-transparent" />

              <p className="text-sm sm:text-base md:text-lg text-[#6F6A61] font-light leading-relaxed">
                One team brings every detail together — planning, creativity,
                coordination and complete event execution.
              </p>

              <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                {[
                  { step: "01", label: "Planning" },
                  { step: "02", label: "Creativity" },
                  { step: "03", label: "Coordination" },
                  { step: "04", label: "Execution" },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="p-3 rounded-xl border border-[#DED6C9] bg-[#FCFAF6] text-center"
                  >
                    <span className="text-[10px] text-[#C7A978] block font-bold">
                      {item.step}
                    </span>
                    <span className="text-[#292825] font-semibold">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════ */}
      {/* 6. PREMIUM CLOSING CALL-TO-ACTION SECTION            */}
      {/* ════════════════════════════════════════════════════ */}
      <section className="svc-closing-cta relative w-full bg-[#FCFAF6] overflow-hidden py-18 sm:py-24 md:py-32">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-[700px] h-[350px] bg-[#C7A978]/6 blur-[140px] rounded-full" />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Action Block */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="svc-cta-content inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C7A978]/40 bg-[#F1EADF]/70 text-[#C7A978] text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#C7A978]" />
                <span>START YOUR EVENT JOURNEY</span>
              </div>

              <h2 className="svc-cta-content text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#292825] tracking-tight leading-[1.12]">
                Let&apos;s Plan Something
                <br />
                <span className="text-[#4F918B] italic font-normal">
                  Meaningful.
                </span>
              </h2>

              <p className="svc-cta-content text-sm sm:text-base md:text-lg text-[#6F6A61] font-light leading-relaxed max-w-md mx-auto lg:mx-0">
                Tell us what you are imagining. We&apos;ll help bring it to life.
              </p>

              <div className="svc-cta-content flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/contact"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#4F918B] hover:bg-[#3F7A75] text-[#FCFAF6] font-mono font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-xl shadow-[#4F918B]/15 active:scale-95"
                >
                  <span>PLAN YOUR EVENT</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="tel:+919042429868"
                  className="group inline-flex items-center gap-2.5 px-5 py-4 text-xs font-mono font-bold text-[#292825] hover:text-[#4F918B] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#4F918B]" />
                  <span className="tracking-wider">+91 90424 29868</span>
                </a>
              </div>
            </div>

            {/* Right Relevant Event Photograph */}
            <div className="lg:col-span-5 svc-cta-content relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#DED6C9] shadow-xl bg-[#F1EADF] hidden sm:block">
              <Image
                src="/images/b1.png"
                alt="Iragu Events — creating meaningful memories"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#292825]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
