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
  ChevronDown,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  LayoutGrid,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/* Icon Mapping & Theming for Categories and Services                */
/* ------------------------------------------------------------------ */
const categoryTheme = {
  "life-events": {
    accent: "from-[#C7A978]/20 via-[#C7A978]/5 to-transparent",
    border: "border-[#C7A978]/30 hover:border-[#C7A978]/60",
    badge: "border-[#C7A978]/30 text-[#C7A978] bg-[#C7A978]/10",
    dot: "bg-[#C7A978]",
    pill: "bg-[#F7F3EA] border-[#DED6C9] text-[#292825] hover:border-[#C7A978]/60",
    glow: "",
    iconColor: "text-[#C7A978]",
  },
  "corporate-events": {
    accent: "from-[#4F918B]/20 via-[#4F918B]/5 to-transparent",
    border: "border-[#4F918B]/30 hover:border-[#4F918B]/60",
    badge: "border-[#4F918B]/30 text-[#4F918B] bg-[#4F918B]/10",
    dot: "bg-[#4F918B]",
    pill: "bg-[#F7F3EA] border-[#DED6C9] text-[#292825] hover:border-[#4F918B]/60",
    glow: "",
    iconColor: "text-[#4F918B]",
  },
  "institutional-public": {
    accent: "from-[#D8C9B5]/30 via-[#D8C9B5]/10 to-transparent",
    border: "border-[#D8C9B5]/40 hover:border-[#D8C9B5]/70",
    badge: "border-[#D8C9B5]/40 text-[#4A453F] bg-[#D8C9B5]/20",
    dot: "bg-[#D8C9B5]",
    pill: "bg-[#F7F3EA] border-[#DED6C9] text-[#292825] hover:border-[#D8C9B5]/60",
    glow: "",
    iconColor: "text-[#4A453F]",
  },
  "brand-experiences": {
    accent: "from-[#AEBBAA]/25 via-[#AEBBAA]/8 to-transparent",
    border: "border-[#AEBBAA]/35 hover:border-[#AEBBAA]/65",
    badge: "border-[#AEBBAA]/35 text-[#AEBBAA] bg-[#AEBBAA]/15",
    dot: "bg-[#AEBBAA]",
    pill: "bg-[#F7F3EA] border-[#DED6C9] text-[#292825] hover:border-[#AEBBAA]/60",
    glow: "",
    iconColor: "text-[#AEBBAA]",
  },
};

const itemIcons: Record<string, React.ElementType> = {
  // Life Events
  Weddings: Heart,
  Birthdays: Cake,
  "Baptism & Baby Celebrations": Baby,
  "Engagements & Anniversaries": Sparkles,
  "Family Celebrations": Users,

  // Corporate Events
  "Brand Launches": Rocket,
  "Corporate Gatherings": Building2,
  "Conferences & Seminars": Presentation,
  "Annual Celebrations": Trophy,
  "Product Launches": Package,

  // Institutional & Public
  "College & Institutional Events": GraduationCap,
  "Medical & Graduation Events": Award,
  "Government Events": Landmark,
  "Public Events": Megaphone,
  "Political Events": Flag,
  "Large-Scale Celebrations": Flame,

  // Brand Experiences
  Exhibitions: Layers,
  "Expo Stalls": Store,
  "Brand Activations": Flame,
  "Promotional Events": TrendingUp,
  "Experiential Marketing": Compass,
};

const itemPageSlugs: Record<string, string> = {
  // Life Events -> dedicated pages
  Weddings: "weddings",
  Birthdays: "birthdays",
  "Baptism & Baby Celebrations": "baptism",
  "Engagements & Anniversaries": "engagements-anniversaries",
  "Family Celebrations": "family-celebrations",

  // Corporate Events -> all use corporate page
  "Brand Launches": "corporate",
  "Corporate Gatherings": "corporate",
  "Conferences & Seminars": "corporate",
  "Annual Celebrations": "corporate",
  "Product Launches": "corporate",

  // Institutional & Public -> all use public-events page
  "College & Institutional Events": "public-events",
  "Medical & Graduation Events": "public-events",
  "Government Events": "public-events",
  "Public Events": "public-events",
  "Political Events": "public-events",
  "Large-Scale Celebrations": "public-events",

  // Brand Experiences -> all use customised-decor page (creative / design centric)
  Exhibitions: "customised-decor",
  "Expo Stalls": "customised-decor",
  "Brand Activations": "customised-decor",
  "Promotional Events": "customised-decor",
  "Experiential Marketing": "customised-decor",
};

export default function EventCategories() {
  const containerRef = useRef<HTMLDivElement>(null);
  const categories = siteContent.eventCategories.categories;

  // Active filter tab ('all' or category id)
  const [activeTab, setActiveTab] = useState<string>("all");

  // Track expanded state for categories (all open by default for scanning, but toggleable)
  const [expandedCats, setExpandedCats] = useState<Record<string, boolean>>({
    "life-events": true,
    "corporate-events": true,
    "institutional-public": true,
    "brand-experiences": true,
  });

  const toggleCategory = (id: string) => {
    setExpandedCats((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const dur = prefersReduced ? 0 : 0.85;
      const stag = prefersReduced ? 0 : 0.1;

      /* Hero Typography Entrance */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".cat-hero-elem"),
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

      /* Hero Photo Showcase Entrance */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".cat-photo-elem"),
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
            trigger: containerRef.current.querySelector(".cat-photo-wrap"),
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      /* Category card entrance */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".cat-main-card"),
        { y: prefersReduced ? 0 : 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: prefersReduced ? 0 : 0.75,
          stagger: prefersReduced ? 0 : 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".cat-cards-container"),
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );

  const filteredCategories =
    activeTab === "all"
      ? categories
      : categories.filter((c) => c.id === activeTab);

  return (
    <section
      id="capabilities"
      ref={containerRef}
      className="relative w-full bg-[#FCFAF6] overflow-hidden py-20 md:py-28"
    >
      {/* Background warm ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[700px] h-[350px] bg-[#C7A978]/5 blur-[140px] rounded-full" />
        <div className="absolute top-1/2 right-10 w-[500px] h-[350px] bg-[#4F918B]/5 blur-[130px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* ── Section Hero: Editorial 2-Column Composition ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-12 sm:mb-16">
          {/* LEFT SIDE — Typography & Brand Message */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Eyebrow Label */}
            <div className="cat-hero-elem inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#C7A978]/30 bg-[#C7A978]/10 text-[#C7A978] text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7A978] animate-pulse" />
              Capabilities &amp; Scope
            </div>

            {/* Main Heading with italic accents */}
            <h1 className="cat-hero-elem text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-serif font-bold tracking-tight text-[#292825] leading-[1.12]">
              Events We Plan,
              <br />
              <span className="text-[#4F918B] italic font-normal">Design</span>{" "}
              <span className="text-[#292825]">&amp;</span>{" "}
              <span className="text-[#C7A978] italic font-normal">Manage</span>.
            </h1>

            {/* Fine champagne editorial line */}
            <div className="cat-hero-elem w-20 h-[2px] bg-gradient-to-r from-[#C7A978] via-[#C7A978]/60 to-transparent" />

            {/* Supporting Description */}
            <p className="cat-hero-elem text-base sm:text-lg text-[#6F6A61] leading-relaxed max-w-xl font-light">
              From personal life milestones to corporate gatherings and large-scale public events, explore our complete event execution capabilities.
            </p>

            {/* Supporting Brand Statement */}
            <div className="cat-hero-elem pt-1 flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono tracking-wider text-[#292825]">
              <span className="w-2 h-2 rounded-full bg-[#4F918B]" />
              <span className="font-semibold text-[#292825]">One Team.</span>
              <span className="text-[#6F6A61]">Every Detail.</span>
              <span className="text-[#C7A978] font-medium">Complete Event Responsibility.</span>
            </div>
          </div>

          {/* RIGHT SIDE — Visual Event Showcase */}
          <div className="lg:col-span-5 cat-photo-wrap relative flex justify-center lg:justify-end">
            {/* Numbered marker */}
            <div className="cat-photo-elem absolute -top-5 right-2 sm:right-6 text-[10px] sm:text-xs font-mono tracking-[0.25em] text-[#C7A978] uppercase z-20">
              01 / OUR CAPABILITIES
            </div>

            {/* Main landscape event photograph — banner image (b1.png) */}
            <div className="cat-photo-elem relative w-full max-w-[460px] aspect-[4/3] sm:aspect-[16/11] rounded-2xl sm:rounded-[2.5rem] overflow-hidden border-2 border-[#C7A978]/30 shadow-xl bg-[#FCFAF6]">
              <Image
                src="/images/b1.png"
                alt="Iragu Events — Stage & Celebration Design"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 460px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#292825]/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Smaller overlapping detail photograph */}
            <div className="cat-photo-elem absolute -bottom-6 -left-3 sm:-bottom-8 sm:-left-6 w-[140px] sm:w-[180px] md:w-[210px] aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[#C7A978]/40 shadow-2xl z-20 bg-[#FCFAF6]">
              <Image
                src="/images/hero2.png"
                alt="Event styling & floral detail"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 140px, 210px"
              />
            </div>

            {/* Small floating caption badge */}
            <div className="cat-photo-elem absolute bottom-3 sm:bottom-5 right-2 sm:right-4 bg-[#FCFAF6]/95 backdrop-blur-md border border-[#DED6C9] rounded-xl px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-lg z-20">
              <p className="text-[10px] sm:text-xs font-mono tracking-[0.15em] uppercase text-[#292825] font-medium">
                CREATING EXPERIENCES, NOT JUST EVENTS.
              </p>
            </div>
          </div>
        </div>

        {/* ── Category Navigation: Editorial Horizontal Rail ── */}
        <div className="relative border-y border-[#DED6C9] py-3.5 sm:py-4 mb-10 sm:mb-14 bg-[#FCFAF6]/80 backdrop-blur-sm">
          <div className="overflow-x-auto no-scrollbar scroll-smooth flex items-center gap-3 sm:gap-6 md:gap-8 px-1">
            {/* All Categories Button */}
            <button
              onClick={() => setActiveTab("all")}
              className={`group relative flex items-center gap-2.5 pb-2 pt-1 text-xs sm:text-sm font-mono tracking-wider uppercase transition-all duration-300 flex-shrink-0 ${
                activeTab === "all"
                  ? "text-[#4F918B] font-bold"
                  : "text-[#6F6A61] hover:text-[#292825] font-medium"
              }`}
            >
              <LayoutGrid
                className={`w-3.5 h-3.5 transition-colors ${
                  activeTab === "all" ? "text-[#4F918B]" : "text-[#C7A978] group-hover:text-[#4F918B]"
                }`}
              />
              <span>All Categories (04)</span>
              {activeTab === "all" && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4F918B] rounded-full" />
              )}
            </button>

            {/* Separator */}
            <span className="hidden sm:inline-block w-px h-4 bg-[#DED6C9] flex-shrink-0" />

            {/* 4 Category Tabs */}
            {categories.map((cat, idx) => {
              const TabIcon =
                cat.id === "life-events"
                  ? Heart
                  : cat.id === "corporate-events"
                  ? Building2
                  : cat.id === "institutional-public"
                  ? Landmark
                  : Layers;
              const isActive = activeTab === cat.id;
              const numberStr = (idx + 1).toString().padStart(2, "0");

              return (
                <React.Fragment key={cat.id}>
                  <button
                    onClick={() => setActiveTab(cat.id)}
                    className={`group relative flex items-center gap-2.5 pb-2 pt-1 text-xs sm:text-sm font-mono tracking-wider uppercase transition-all duration-300 flex-shrink-0 ${
                      isActive
                        ? "text-[#4F918B] font-bold"
                        : "text-[#6F6A61] hover:text-[#292825] font-medium"
                    }`}
                  >
                    <TabIcon
                      className={`w-3.5 h-3.5 transition-colors ${
                        isActive ? "text-[#4F918B]" : "text-[#C7A978] group-hover:text-[#4F918B]"
                      }`}
                    />
                    <span className={isActive ? "text-[#4F918B]" : "text-[#C7A978] group-hover:text-[#4F918B]"}>
                      {numberStr}.
                    </span>
                    <span>{cat.title}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4F918B] rounded-full" />
                    )}
                  </button>

                  {idx < categories.length - 1 && (
                    <span className="hidden sm:inline-block w-px h-4 bg-[#DED6C9] flex-shrink-0" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* ── 4 Major Categories Container ── */}
        <div className="cat-cards-container flex flex-col space-y-6 sm:space-y-10">
          {filteredCategories.map((category) => {
            const theme =
              categoryTheme[category.id as keyof typeof categoryTheme] ||
              categoryTheme["life-events"];
            const isExpanded = expandedCats[category.id] ?? true;
            const originalIndex = categories.findIndex((c) => c.id === category.id);

            return (
              <div
                key={category.id}
                className={`cat-main-card relative rounded-2xl sm:rounded-3xl border border-[#DED6C9] bg-[#F7F3EA] overflow-hidden transition-all duration-500 ${theme.border} ${theme.glow}`}
              >
                {/* Background aura */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${theme.accent} opacity-40 pointer-events-none`}
                />

                {/* Card Header Bar */}
                <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-10 border-b border-[#DED6C9] flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
                  <div className="flex items-start md:items-center gap-3 sm:gap-5">
                    <span className="font-mono text-sm sm:text-base md:text-lg font-bold text-[#4A453F]">
                      {(originalIndex + 1).toString().padStart(2, "0")}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#292825] tracking-tight">
                          {category.title}
                        </h3>
                        <span
                          className={`hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-widest uppercase border ${theme.badge}`}
                        >
                          Category 0{originalIndex + 1}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm md:text-base text-[#292825] font-light max-w-3xl leading-relaxed mt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Actions: Expand Toggle + Plan CTA */}
                  <div className="flex items-center gap-3 self-end md:self-auto flex-shrink-0">
                    <Link
                      href="/contact"
                      className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FCFAF6] border border-[#DED6C9] text-xs font-mono uppercase tracking-wider text-[#292825] hover:text-[#4F918B] hover:border-[#4F918B]/40 transition-colors"
                    >
                      <span>Discuss</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FCFAF6] border border-[#DED6C9] text-xs font-mono tracking-wider uppercase text-[#292825] hover:text-[#4F918B] hover:border-[#4F918B]/40 transition-colors"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? "Collapse" : "Explore"}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Expandable Category Content */}
                {isExpanded && (
                  <div className="relative z-10 p-6 md:p-8 lg:p-10 transition-all duration-300">
                    {/* If category has dedicated item descriptions (Categories 1 & 2) */}
                    {category.itemsWithDesc && category.itemsWithDesc.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                        {category.itemsWithDesc.map((item, itemIdx) => {
                          const ItemIcon = itemIcons[item.title] || Sparkles;
                          const pageSlug =
                            itemPageSlugs[item.title] ||
                            (category.id === "corporate-events"
                              ? "corporate"
                              : category.id === "institutional-public"
                                ? "public-events"
                                : category.id === "brand-experiences"
                                  ? "customised-decor"
                                  : "weddings");
                          const href = `/events/${pageSlug}`;
                          return (
                            <Link
                              key={itemIdx}
                              href={href}
                              className="group/link block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F918B] rounded-2xl"
                            >
                              <div className="relative h-full p-5 md:p-6 rounded-2xl border border-[#DED6C9] bg-[#FCFAF6] hover:bg-[#F1EADF] hover:border-[#C7A978]/60 transition-all duration-300 flex flex-col justify-between">
                                <div>
                                  <div className="flex items-center justify-between mb-4">
                                    <div
                                      className={`w-10 h-10 rounded-xl bg-[#F7F3EA] border border-[#DED6C9] flex items-center justify-center ${theme.iconColor} group-hover/link:scale-105 transition-transform`}
                                    >
                                      <ItemIcon className="w-5 h-5" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <span className="font-mono text-[10px] text-[#4A453F] uppercase tracking-widest">
                                        {(itemIdx + 1).toString().padStart(2, "0")}
                                      </span>
                                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-[#DED6C9] bg-[#F7F3EA] text-[#4A453F] group-hover/link:border-[#4F918B] group-hover/link:text-[#4F918B] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all">
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                      </span>
                                    </div>
                                  </div>
                                  <h4 className="text-lg font-bold text-[#292825] mb-2 group-hover/link:text-[#4F918B] transition-colors">
                                    {item.title}
                                  </h4>
                                  <p className="text-xs md:text-sm text-[#292825] font-light leading-relaxed">
                                    {item.desc}
                                  </p>
                                </div>

                                <div className="mt-4 pt-3 border-t border-[#DED6C9]/60 flex items-center justify-between text-[11px] text-[#4A453F]">
                                  <div className="flex items-center gap-1.5">
                                    <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`} />
                                    <span className="font-mono uppercase tracking-wider text-[10px]">
                                      Full Service Management
                                    </span>
                                  </div>
                                  <span className="font-mono uppercase tracking-wider text-[10px] text-[#292825] group-hover/link:text-[#4F918B] transition-colors">
                                    View →
                                  </span>
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    ) : (
                      /* For Categories 3 & 4 (Institutional & Public Events, Brand Experiences) */
                      <div className="space-y-6">
                        {/* Highlighted Banner with Client Description */}
                        <div className="p-5 md:p-6 rounded-2xl bg-[#FCFAF6] border border-[#DED6C9] flex items-start gap-4">
                          <div className={`mt-0.5 p-2 rounded-lg bg-[#F7F3EA] border border-[#DED6C9] ${theme.iconColor}`}>
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-xs font-mono uppercase tracking-wider text-[#292825] block mb-1">
                              Execution Capability &amp; Scale
                            </span>
                            <p className="text-sm md:text-base text-[#292825] font-normal leading-relaxed">
                              {category.description}
                            </p>
                          </div>
                        </div>

                        {/* Formats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 md:gap-4">
                          {category.items.map((item, itemIdx) => {
                            const ItemIcon = itemIcons[item] || Sparkles;
                            const pageSlug =
                              itemPageSlugs[item] ||
                              (category.id === "corporate-events"
                                ? "corporate"
                                : category.id === "institutional-public"
                                  ? "public-events"
                                  : category.id === "brand-experiences"
                                    ? "customised-decor"
                                    : "weddings");
                            const href = `/events/${pageSlug}`;
                            return (
                              <Link
                                key={itemIdx}
                                href={href}
                                className="group/link block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F918B] rounded-2xl"
                              >
                                <div
                                  className={`w-full flex items-center justify-between p-4 md:p-5 rounded-2xl border transition-all duration-300 ${theme.pill}`}
                                >
                                  <div className="flex items-center gap-3.5">
                                    <div className={`p-2 rounded-xl bg-[#FCFAF6] border border-[#DED6C9] ${theme.iconColor} group-hover/link:scale-105 transition-transform`}>
                                      <ItemIcon className="w-4 h-4" />
                                    </div>
                                    <div>
                                      <h4 className="text-sm md:text-base font-semibold text-[#292825] group-hover/link:text-[#4F918B] transition-colors">
                                        {item}
                                      </h4>
                                      <span className="text-[10px] font-mono text-[#4A453F] uppercase tracking-widest block mt-0.5">
                                        End-to-End Execution
                                      </span>
                                    </div>
                                  </div>
                                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#DED6C9] bg-[#FCFAF6] text-[#4A453F] group-hover/link:border-[#4F918B] group-hover/link:text-[#4F918B] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all flex-shrink-0">
                                    <ArrowUpRight className="w-4 h-4" />
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
