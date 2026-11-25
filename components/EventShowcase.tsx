"use client";

import React, { useState, useEffect, useRef } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGsap";
import { siteContent } from "@/data/siteContent";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Calendar,
  Users,
  ArrowRight,
  ExternalLink,
  Layers,
  Sparkles,
  ArrowUpRight,
  Heart,
  Cake,
  Baby,
  Building2,
  GraduationCap,
  Megaphone,
  LayoutGrid,
  Play,
  Pause,
  ChevronDown,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/* Cinematic Slides (Clean Event Photography — Zero Poster Text)      */
/* ------------------------------------------------------------------ */
const cinematicSlides = [
  {
    image: "/images/hero-bg.png",
    position: "object-center",
  },
  {
    image: "/images/hero1.png",
    position: "object-center",
  },
  {
    image: "/images/hero-bg.png",
    position: "object-[center_35%]",
  },
];

/* ------------------------------------------------------------------ */
/* Category Navigation Icons                                          */
/* ------------------------------------------------------------------ */
const categoryIcons: Record<string, React.ElementType> = {
  ALL: LayoutGrid,
  WEDDINGS: Heart,
  BIRTHDAYS: Cake,
  BAPTISM: Baby,
  CORPORATE: Building2,
  INSTITUTIONAL: GraduationCap,
  PUBLIC: Megaphone,
  "BRAND ACTIVATIONS": Sparkles,
  EXHIBITIONS: Layers,
};

interface EventShowcaseProps {
  showHeroBanner?: boolean;
}

export default function EventShowcase({ showHeroBanner = true }: EventShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const content = siteContent.portfolio;
  const [activeFilter, setActiveFilter] = useState("ALL");

  // Cinematic Banner Slideshow State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-advance slideshow
  useEffect(() => {
    if (!isPlaying) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % cinematicSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const filteredProjects =
    activeFilter === "ALL"
      ? content.projects
      : content.projects.filter(
          (p) =>
            p.category === activeFilter ||
            p.categoryDisplay?.toUpperCase() === activeFilter
        );

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const dur = prefersReduced ? 0 : 0.85;
      const stag = prefersReduced ? 0 : 0.1;

      /* Cinematic Banner entrance */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".cinematic-banner-elem"),
        { y: prefersReduced ? 0 : 35, opacity: 0 },
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

      /* Projects cards entrance */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".project-card"),
        { y: prefersReduced ? 0 : 35, opacity: 0, scale: prefersReduced ? 1 : 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: prefersReduced ? 0 : 0.6,
          stagger: prefersReduced ? 0 : 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".projects-grid"),
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="portfolio"
      ref={containerRef}
      className="relative w-full bg-[#F7F3EA] overflow-hidden py-16 md:py-24 border-t border-[#DED6C9]"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[#C7A978]/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-[#4F918B]/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* ═══════════════════════════════════════════════════════════ */}
        {/* 1. CINEMATIC EVENT BANNER (Optional / Dedicated Page)        */}
        {/* ═══════════════════════════════════════════════════════════ */}
        {showHeroBanner ? (
          <div className="cinematic-banner-elem relative w-full min-h-[460px] sm:min-h-[500px] md:min-h-[520px] lg:h-[540px] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#C7A978]/30 shadow-2xl bg-[#1A1816] mb-8 sm:mb-12">
            {/* Slides Background Images — 100% Clean Event Photography */}
            {cinematicSlides.map((slide, sIdx) => {
              const isActive = currentSlide === sIdx;
              return (
                <div
                  key={sIdx}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt="Iragu Events — Bespoke Event Stage & Floral Production"
                    fill
                    priority={sIdx === 0}
                    className={`object-cover ${slide.position} transition-transform duration-7000 ease-out ${
                      isActive ? "scale-105" : "scale-100"
                    }`}
                    sizes="(max-width: 1280px) 100vw, 1280px"
                  />
                </div>
              );
            })}

            {/* Subtle Warm Charcoal Gradient behind text area only */}
            <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#1A1816]/85 via-[#1A1816]/40 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-32 sm:h-40 z-20 bg-gradient-to-t from-[#1A1816]/75 via-[#1A1816]/20 to-transparent pointer-events-none" />

            {/* Banner Content Container */}
            <div className="relative z-30 h-full flex flex-col justify-between p-6 sm:p-9 md:p-12 lg:p-14">
              {/* Top: Eyebrow Label (Clean, uncrowded) */}
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C7A978]/40 bg-[#1A1816]/70 backdrop-blur-md text-[#C7A978] text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C7A978] animate-pulse" />
                  Our Work &amp; Portfolio
                </div>
              </div>

              {/* Middle: Clear Content Hierarchy with Ample Breathing Room */}
              <div className="my-auto py-3 sm:py-5 max-w-3xl space-y-3.5 sm:space-y-4">
                {/* 1. Main Heading: Two clearly separated lines */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-serif font-bold tracking-tight text-[#FCFAF6] leading-[1.2] sm:leading-[1.22]">
                  <span className="block">We Don&apos;t Just Talk About Events.</span>
                  <span className="block mt-2 sm:mt-2.5 md:mt-3 text-[#C7A978] italic font-serif">
                    We Build Them.
                  </span>
                </h1>

                {/* 2 & 3. Supporting & Secondary Descriptions */}
                <div className="space-y-1 text-xs sm:text-sm md:text-base text-[#FCFAF6]/90 font-light leading-relaxed max-w-2xl">
                  <p>Every event teaches us something new. Every project has a story.</p>
                  <p className="text-[#FCFAF6]/70">
                    Explore the celebrations, experiences and events we&apos;ve planned, designed and executed.
                  </p>
                </div>

                {/* 4. Small Event Highlights */}
                <div className="pt-1.5 flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono text-[#C7A978]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F918B]" />
                  <span>Weddings</span>
                  <span className="text-white/30">&bull;</span>
                  <span>Milestone Celebrations</span>
                  <span className="text-white/30">&bull;</span>
                  <span>Corporate Gatherings</span>
                  <span className="text-white/30">&bull;</span>
                  <span>Public Production</span>
                </div>
              </div>

              {/* Bottom Controls Bar: Slide Indicators + Center Scroll Hint + Pause/Play */}
              <div className="pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between gap-4 mt-auto">
                {/* Slide Indicators */}
                <div className="flex items-center gap-2">
                  {cinematicSlides.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setCurrentSlide(dotIdx)}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentSlide === dotIdx
                          ? "w-8 bg-[#C7A978]"
                          : "w-2 bg-white/30 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>

                {/* Center Scroll Hint */}
                <div className="hidden md:flex items-center gap-2 text-[11px] font-mono text-white/60 uppercase tracking-widest">
                  <span>Explore Projects Below</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#C7A978] animate-bounce" />
                </div>

                {/* Pause / Play Button */}
                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white/80 hover:text-white hover:border-[#C7A978] text-[11px] font-mono tracking-wider transition-colors"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3 h-3 text-[#C7A978]" />
                      <span className="hidden sm:inline">Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-[#C7A978]" />
                      <span className="hidden sm:inline">Play</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Homepage Section Header: Clean Editorial Intro for Our Work */
          <div className="cinematic-banner-elem text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C7A978]/40 bg-[#FCFAF6] text-[#C7A978] text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7A978] animate-pulse" />
              Our Work &amp; Portfolio
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#292825] leading-tight">
              Real Events.{" "}
              <span className="text-[#4F918B] italic font-normal">Real Execution</span>.
            </h2>

            <p className="text-sm md:text-base text-[#6F6A61] font-light max-w-2xl mx-auto leading-relaxed">
              Explore the celebrations, bespoke stages, and immersive event productions we&apos;ve brought to life across South Tamil Nadu.
            </p>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* 2. EDITORIAL STATEMENT DIVIDER                              */}
        {/* ═══════════════════════════════════════════════════════════ */}
        {showHeroBanner && (
          <div className="cinematic-banner-elem py-4 sm:py-6 flex items-center justify-center gap-3 sm:gap-6 text-center">
            <div className="w-10 sm:w-20 h-px bg-gradient-to-r from-transparent to-[#C7A978]/60" />
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.22em] text-[#C7A978] font-semibold">
              Real Events &bull; Real Moments &bull; Thoughtfully Created
            </span>
            <div className="w-10 sm:w-20 h-px bg-gradient-to-l from-transparent to-[#C7A978]/60" />
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* 3. REFINED EDITORIAL CATEGORY NAVIGATION                   */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="cinematic-banner-elem relative border-y border-[#DED6C9] py-3 sm:py-4 mb-10 sm:mb-16 bg-[#FCFAF6]/90 backdrop-blur-sm">
          <div className="overflow-x-auto no-scrollbar scroll-smooth flex items-center gap-3 sm:gap-5 md:gap-6 px-1">
            {content.filters.map((filter, idx) => {
              const isActive = activeFilter === filter;
              const FilterIcon = categoryIcons[filter] || Sparkles;

              return (
                <React.Fragment key={idx}>
                  <button
                    onClick={() => setActiveFilter(filter)}
                    className={`group relative flex items-center gap-2 pb-2 pt-1 text-xs sm:text-sm font-mono tracking-wider uppercase transition-all duration-300 flex-shrink-0 ${
                      isActive
                        ? "text-[#4F918B] font-bold"
                        : "text-[#6F6A61] hover:text-[#292825] font-medium"
                    }`}
                  >
                    <FilterIcon
                      className={`w-3.5 h-3.5 transition-colors ${
                        isActive
                          ? "text-[#4F918B]"
                          : "text-[#C7A978] group-hover:text-[#4F918B]"
                      }`}
                    />
                    <span>{filter}</span>

                    {/* Animated Underline */}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4F918B] rounded-full" />
                    )}
                  </button>

                  {idx < content.filters.length - 1 && (
                    <span className="hidden md:inline-block w-px h-3.5 bg-[#DED6C9] flex-shrink-0" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* 4. PORTFOLIO GRID                                           */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
              {filteredProjects.map((project, idx) => (
                <div
                  key={project.id || idx}
                  className="project-card group relative rounded-3xl border border-[#DED6C9] bg-[#FCFAF6] overflow-hidden transition-all duration-500 hover:border-[#C7A978]/60 shadow-sm flex flex-col justify-between"
                >
                  {/* Visual Header with Image / Gradient */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#FCFAF6]">
                    <Image
                      src={project.image || "/images/hero-bg.png"}
                      alt={project.name}
                      fill
                      className="object-cover opacity-90 group-hover:scale-105 transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FCFAF6]/80 via-transparent to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase bg-[#F7F3EA]/95 border border-[#DED6C9] text-[#4F918B]">
                        {project.categoryDisplay || project.category}
                      </span>
                      {project.guestCount && (
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase bg-[#F7F3EA]/95 border border-[#DED6C9] text-[#292825] flex items-center gap-1.5">
                          <Users className="w-3 h-3 text-[#4F918B]" />
                          {project.guestCount}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-7 md:p-8 flex flex-col justify-between flex-grow">
                    <div>
                      {/* Location & Type metadata */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-[#4F918B] font-mono tracking-wider uppercase mb-3">
                        {project.location && (
                          <span className="flex items-center gap-1 text-[#292825]">
                            <MapPin className="w-3.5 h-3.5 text-[#4F918B]" />
                            {project.location}
                          </span>
                        )}
                        {project.type && (
                          <>
                            <span className="w-1 h-1 rounded-full bg-[#DED6C9]" />
                            <span className="text-[#4F918B]">{project.type}</span>
                          </>
                        )}
                      </div>

                      {/* Project Title */}
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#292825] mb-3 group-hover:text-[#4F918B] transition-colors">
                        {project.name}
                      </h3>

                      {/* Description */}
                      {project.description && (
                        <p className="text-sm text-[#292825] font-light leading-relaxed mb-6">
                          {project.description}
                        </p>
                      )}

                      {/* Services Provided Pills */}
                      {project.servicesProvided && project.servicesProvided.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.servicesProvided.map((service, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 py-1 rounded-lg text-[11px] font-mono tracking-wider text-[#292825] bg-[#F1EADF] border border-[#DED6C9]"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* View Action */}
                    <div className="pt-5 border-t border-[#DED6C9] flex items-center justify-between">
                      <Link
                        href={project.caseStudyLink || "/case-studies"}
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#4F918B] hover:text-[#437D77] transition-colors group/link"
                      >
                        <span>View Project Case Study</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </Link>

                      <span className="text-[10px] font-mono text-[#4A453F] uppercase tracking-widest">
                        Verified Execution
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Elegant empty state for categories where client archives will be added */
            <div className="p-10 md:p-14 rounded-3xl border border-[#DED6C9] bg-[#FCFAF6] text-center max-w-2xl mx-auto space-y-4 shadow-sm">
              <div className="inline-flex p-3 rounded-2xl bg-[#F1EADF] border border-[#DED6C9] text-[#4F918B] mb-2">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-[#292825]">
                {activeFilter} Case Studies &amp; Galleries
              </h3>
              <p className="text-sm text-[#292825] font-light leading-relaxed">
                We have executed memorable experiences in this category across South Tamil Nadu. Contact our team to view private portfolio archives and discuss custom concepts for your event.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#4F918B] hover:bg-[#437D77] text-[#FCFAF6] font-bold text-xs uppercase font-mono tracking-widest transition-colors rounded-lg shadow-sm"
                >
                  <span>Inquire For {activeFilter} Work</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
