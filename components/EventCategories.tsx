"use client";

import React, { useState, useRef } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGsap";
import { siteContent } from "@/data/siteContent";
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
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/* Icon Mapping & Theming for Categories and Services                */
/* ------------------------------------------------------------------ */
const categoryTheme = {
  "life-events": {
    accent: "from-rose-500/20 via-pink-900/10 to-transparent",
    border: "border-rose-500/30 hover:border-rose-500/60",
    badge: "border-rose-500/30 text-rose-300 bg-rose-950/40",
    dot: "bg-rose-400",
    pill: "bg-rose-950/30 border-rose-500/20 text-rose-200 hover:border-rose-500/50",
    glow: "shadow-[0_0_40px_rgba(244,63,94,0.12)]",
    iconColor: "text-rose-400",
  },
  "corporate-events": {
    accent: "from-teal-500/20 via-cyan-900/10 to-transparent",
    border: "border-teal-500/30 hover:border-teal-500/60",
    badge: "border-teal-500/30 text-teal-300 bg-teal-950/40",
    dot: "bg-teal-400",
    pill: "bg-teal-950/30 border-teal-500/20 text-teal-200 hover:border-teal-500/50",
    glow: "shadow-[0_0_40px_rgba(20,184,166,0.12)]",
    iconColor: "text-teal-400",
  },
  "institutional-public": {
    accent: "from-amber-500/20 via-orange-900/10 to-transparent",
    border: "border-amber-500/30 hover:border-amber-500/60",
    badge: "border-amber-500/30 text-amber-300 bg-amber-950/40",
    dot: "bg-amber-400",
    pill: "bg-amber-950/30 border-amber-500/20 text-amber-200 hover:border-amber-500/50",
    glow: "shadow-[0_0_40px_rgba(245,158,11,0.12)]",
    iconColor: "text-amber-400",
  },
  "brand-experiences": {
    accent: "from-purple-500/20 via-fuchsia-900/10 to-transparent",
    border: "border-purple-500/30 hover:border-purple-500/60",
    badge: "border-purple-500/30 text-purple-300 bg-purple-950/40",
    dot: "bg-purple-400",
    pill: "bg-purple-950/30 border-purple-500/20 text-purple-200 hover:border-purple-500/50",
    glow: "shadow-[0_0_40px_rgba(168,85,247,0.12)]",
    iconColor: "text-purple-400",
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

      /* Heading entrance */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".cat-heading-elem"),
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );

      /* Category card entrance */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".cat-main-card"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".cat-cards-container"),
            start: "top 82%",
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
      className="relative w-full bg-[#030303] overflow-hidden py-24 md:py-32"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-teal-500/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-rose-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* ── Section Header ── */}
        <div className="space-y-4 mb-12 sm:mb-16">
          <div className="cat-heading-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/20 bg-teal-950/30 text-teal-400 text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            Capabilities &amp; Scope
          </div>
          <h2 className="cat-heading-elem text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
            Events We Plan, Design &amp; Manage
          </h2>
          <p className="cat-heading-elem text-neutral-400 text-xs sm:text-sm md:text-base font-light max-w-2xl">
            From personal life milestones to corporate gatherings and large-scale public events, explore our complete event execution capabilities.
          </p>
        </div>

        {/* ── Category Navigation Tabs ── */}
        <div className="cat-heading-elem flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3 mb-8 sm:mb-12 border-b border-neutral-800/80 pb-4 sm:pb-5">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
              activeTab === "all"
                ? "bg-teal-500 text-black font-bold shadow-md shadow-teal-500/20"
                : "bg-neutral-900/60 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800"
            }`}
          >
            All Categories (04)
          </button>
          {categories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-teal-500 text-black font-bold shadow-md shadow-teal-500/20"
                  : "bg-neutral-900/60 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800"
              }`}
            >
              0{idx + 1}. {cat.title}
            </button>
          ))}
        </div>

        {/* ── 4 Major Categories Container ── */}
        <div className="cat-cards-container flex flex-col space-y-6 sm:space-y-10">
          {filteredCategories.map((category, idx) => {
            const theme =
              categoryTheme[category.id as keyof typeof categoryTheme] ||
              categoryTheme["life-events"];
            const isExpanded = expandedCats[category.id] ?? true;
            const originalIndex = categories.findIndex((c) => c.id === category.id);

            return (
              <div
                key={category.id}
                className={`cat-main-card relative rounded-2xl sm:rounded-3xl border border-neutral-800/90 bg-neutral-950/70 backdrop-blur-md overflow-hidden transition-all duration-500 ${theme.border} ${theme.glow}`}
              >
                {/* Background aura */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${theme.accent} opacity-40 pointer-events-none`}
                />

                {/* Card Header Bar */}
                <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-10 border-b border-neutral-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
                  <div className="flex items-start md:items-center gap-3 sm:gap-5">
                    <span className="font-mono text-sm sm:text-base md:text-lg font-bold text-neutral-500">
                      {(originalIndex + 1).toString().padStart(2, "0")}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
                          {category.title}
                        </h3>
                        <span
                          className={`hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-widest uppercase border ${theme.badge}`}
                        >
                          Category 0{originalIndex + 1}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm md:text-base text-neutral-400 font-light max-w-3xl leading-relaxed mt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Actions: Expand Toggle + Plan CTA */}
                  <div className="flex items-center gap-3 self-end md:self-auto flex-shrink-0">
                    <Link
                      href="#contact"
                      className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-700/60 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-teal-400 hover:border-teal-500/40 transition-colors"
                    >
                      <span>Discuss</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900/90 border border-neutral-800 text-xs font-mono tracking-wider uppercase text-neutral-300 hover:text-white transition-colors"
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
                          return (
                            <div
                              key={itemIdx}
                              className="group/item relative p-5 md:p-6 rounded-2xl border border-neutral-800/80 bg-neutral-900/40 hover:bg-neutral-900/70 hover:border-neutral-700/80 transition-all duration-300 flex flex-col justify-between"
                            >
                              <div>
                                <div className="flex items-center justify-between mb-4">
                                  <div
                                    className={`w-10 h-10 rounded-xl bg-neutral-800/80 border border-neutral-700/50 flex items-center justify-center ${theme.iconColor} group-hover/item:scale-105 transition-transform`}
                                  >
                                    <ItemIcon className="w-5 h-5" />
                                  </div>
                                  <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                                    {(itemIdx + 1).toString().padStart(2, "0")}
                                  </span>
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2 group-hover/item:text-teal-300 transition-colors">
                                  {item.title}
                                </h4>
                                <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
                                  {item.desc}
                                </p>
                              </div>

                              <div className="mt-4 pt-3 border-t border-neutral-800/50 flex items-center gap-1.5 text-[11px] text-neutral-500">
                                <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`} />
                                <span className="font-mono uppercase tracking-wider text-[10px]">
                                  Full Service Management
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      /* For Categories 3 & 4 (Institutional & Public Events, Brand Experiences) */
                      <div className="space-y-6">
                        {/* Highlighted Banner with Client Description */}
                        <div className="p-5 md:p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 flex items-start gap-4">
                          <div className={`mt-0.5 p-2 rounded-lg bg-neutral-800 ${theme.iconColor}`}>
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                              Execution Capability &amp; Scale
                            </span>
                            <p className="text-sm md:text-base text-neutral-200 font-normal leading-relaxed">
                              {category.description}
                            </p>
                          </div>
                        </div>

                        {/* Formats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 md:gap-4">
                          {category.items.map((item, itemIdx) => {
                            const ItemIcon = itemIcons[item] || Sparkles;
                            return (
                              <div
                                key={itemIdx}
                                className={`group/item flex items-center justify-between p-4 md:p-5 rounded-2xl border transition-all duration-300 ${theme.pill}`}
                              >
                                <div className="flex items-center gap-3.5">
                                  <div className={`p-2 rounded-xl bg-neutral-900/80 border border-neutral-800 ${theme.iconColor}`}>
                                    <ItemIcon className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <h4 className="text-sm md:text-base font-semibold text-white group-hover/item:text-teal-300 transition-colors">
                                      {item}
                                    </h4>
                                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mt-0.5">
                                      End-to-End Execution
                                    </span>
                                  </div>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover/item:text-teal-400 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all flex-shrink-0" />
                              </div>
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
