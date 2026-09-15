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
    badge: "border-[#D8C9B5]/40 text-[#928B81] bg-[#D8C9B5]/20",
    dot: "bg-[#D8C9B5]",
    pill: "bg-[#F7F3EA] border-[#DED6C9] text-[#292825] hover:border-[#D8C9B5]/60",
    glow: "",
    iconColor: "text-[#928B81]",
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
      className="relative w-full bg-[#FCFAF6] overflow-hidden py-24 md:py-32"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* ── Section Header ── */}
        <div className="space-y-4 mb-12 sm:mb-16">
          <div className="cat-heading-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#4F918B]/30 bg-[#4F918B]/10 text-[#4F918B] text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F918B] animate-pulse" />
            Capabilities &amp; Scope
          </div>
          <h2 className="cat-heading-elem text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#292825] leading-tight">
            Events We Plan, Design &amp; Manage
          </h2>
          <p className="cat-heading-elem text-[#6F6A61] text-xs sm:text-sm md:text-base font-light max-w-2xl">
            From personal life milestones to corporate gatherings and large-scale public events, explore our complete event execution capabilities.
          </p>
        </div>

        {/* ── Category Navigation Tabs ── */}
        <div className="cat-heading-elem flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3 mb-8 sm:mb-12 border-b border-[#DED6C9] pb-4 sm:pb-5">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
              activeTab === "all"
                ? "bg-[#4F918B] text-[#FCFAF6] font-bold shadow-md shadow-[#4F918B]/20"
                : "border-[#DED6C9] bg-[#F7F3EA] text-[#6F6A61] hover:text-[#292825] hover:border-[#C7A978]/60"
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
                  ? "bg-[#4F918B] text-[#FCFAF6] font-bold shadow-md shadow-[#4F918B]/20"
                  : "border-[#DED6C9] bg-[#F7F3EA] text-[#6F6A61] hover:text-[#292825] hover:border-[#C7A978]/60"
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
                className={`cat-main-card relative rounded-2xl sm:rounded-3xl border border-[#DED6C9] bg-[#F7F3EA] overflow-hidden transition-all duration-500 ${theme.border} ${theme.glow}`}
              >
                {/* Background aura */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${theme.accent} opacity-40 pointer-events-none`}
                />

                {/* Card Header Bar */}
                <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-10 border-b border-[#DED6C9] flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
                  <div className="flex items-start md:items-center gap-3 sm:gap-5">
                    <span className="font-mono text-sm sm:text-base md:text-lg font-bold text-[#928B81]">
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
                      <p className="text-xs sm:text-sm md:text-base text-[#6F6A61] font-light max-w-3xl leading-relaxed mt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Actions: Expand Toggle + Plan CTA */}
                  <div className="flex items-center gap-3 self-end md:self-auto flex-shrink-0">
                    <Link
                      href="#contact"
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
                          return (
                            <div
                              key={itemIdx}
                              className="group/item relative p-5 md:p-6 rounded-2xl border border-[#DED6C9] bg-[#FCFAF6] hover:bg-[#F1EADF] hover:border-[#C7A978]/60 transition-all duration-300 flex flex-col justify-between"
                            >
                              <div>
                                <div className="flex items-center justify-between mb-4">
                                  <div
                                    className={`w-10 h-10 rounded-xl bg-[#F7F3EA] border border-[#DED6C9] flex items-center justify-center ${theme.iconColor} group-hover/item:scale-105 transition-transform`}
                                  >
                                    <ItemIcon className="w-5 h-5" />
                                  </div>
                                  <span className="font-mono text-[10px] text-[#928B81] uppercase tracking-widest">
                                    {(itemIdx + 1).toString().padStart(2, "0")}
                                  </span>
                                </div>
                                <h4 className="text-lg font-bold text-[#292825] mb-2 group-hover/item:text-[#4F918B] transition-colors">
                                  {item.title}
                                </h4>
                                <p className="text-xs md:text-sm text-[#6F6A61] font-light leading-relaxed">
                                  {item.desc}
                                </p>
                              </div>

                              <div className="mt-4 pt-3 border-t border-[#DED6C9]/60 flex items-center gap-1.5 text-[11px] text-[#928B81]">
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
                        <div className="p-5 md:p-6 rounded-2xl bg-[#FCFAF6] border border-[#DED6C9] flex items-start gap-4">
                          <div className={`mt-0.5 p-2 rounded-lg bg-[#F7F3EA] border border-[#DED6C9] ${theme.iconColor}`}>
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-xs font-mono uppercase tracking-wider text-[#6F6A61] block mb-1">
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
                            return (
                              <div
                                key={itemIdx}
                                className={`group/item flex items-center justify-between p-4 md:p-5 rounded-2xl border transition-all duration-300 ${theme.pill}`}
                              >
                                <div className="flex items-center gap-3.5">
                                  <div className={`p-2 rounded-xl bg-[#FCFAF6] border border-[#DED6C9] ${theme.iconColor}`}>
                                    <ItemIcon className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <h4 className="text-sm md:text-base font-semibold text-[#292825] group-hover/item:text-[#4F918B] transition-colors">
                                      {item}
                                    </h4>
                                    <span className="text-[10px] font-mono text-[#928B81] uppercase tracking-widest block mt-0.5">
                                      End-to-End Execution
                                    </span>
                                  </div>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-[#928B81] group-hover/item:text-[#4F918B] group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all flex-shrink-0" />
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
