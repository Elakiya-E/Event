"use client";

import React, { useRef } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGsap";
import { siteContent } from "@/data/siteContent";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Building2,
  GraduationCap,
  Sparkles,
  Heart,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface CategoryShowcase {
  num: string;
  name: string;
  desc: string;
  tag: string;
  image: string;
  alt: string;
  highlights: string[];
  accentColor: string;
  accentBorder: string;
  icon: React.ComponentType<{ className?: string }>;
}

const showcaseCategories: CategoryShowcase[] = [
  {
    num: "01",
    name: "Life Events & Families",
    desc: "Weddings, milestone birthdays, baptisms & anniversaries.",
    tag: "Personal Milestones",
    image: "/images/b1.png",
    alt: "Grand wedding floral stage décor and celebration styling",
    highlights: ["Customised Floral Décor", "Ceremony & Stage Planning", "Guest Hospitality & Experience"],
    accentColor: "#C7A978",
    accentBorder: "border-[#C7A978]/40",
    icon: Heart,
  },
  {
    num: "02",
    name: "Corporate & Enterprise",
    desc: "Brand launches, conferences, annual gatherings & activations.",
    tag: "Brand & Leadership",
    image: "/images/hero2.png",
    alt: "Corporate conference stage, production, and professional event execution",
    highlights: ["Stage & Production Support", "Sound, Lighting & AV Matrix", "Executive & Stakeholder Sync"],
    accentColor: "#4F918B",
    accentBorder: "border-[#4F918B]/40",
    icon: Building2,
  },
  {
    num: "03",
    name: "Institutional & Medical",
    desc: "College festivals, graduation ceremonies & public events.",
    tag: "Large-Scale Production",
    image: "/images/img1.1.png",
    alt: "Medical college graduation ceremony Magudam 26 with 1300+ attendees",
    highlights: ["Auditorium & Arena Production", "Crowd & Entry Management", "Public Protocol Coordination"],
    accentColor: "#AEBBAA",
    accentBorder: "border-[#AEBBAA]/50",
    icon: GraduationCap,
  },
  {
    num: "04",
    name: "Retail & Brand Experiences",
    desc: "Exhibitions, expo stalls & experiential marketing.",
    tag: "Experiential Marketing",
    image: "/images/decor/photozone.png",
    alt: "Bespoke experiential photo zone and interactive retail brand activation",
    highlights: ["Customised Expo Stalls", "High-Impact Photo Zones", "Experiential Footfall Engagement"],
    accentColor: "#D8B5A8",
    accentBorder: "border-[#D8B5A8]/50",
    icon: Sparkles,
  },
];

export default function TrustSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const content = siteContent.trust;

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // 1. Header entrance animation
      if (!isReduced) {
        gsap.fromTo(
          containerRef.current.querySelectorAll(".trust-head-elem"),
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
      }

      // 2. Editorial category rows progressive reveal
      const rows = containerRef.current.querySelectorAll(".trust-editorial-row");
      if (rows.length && !isReduced) {
        rows.forEach((row) => {
          gsap.fromTo(
            row,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: {
                trigger: row,
                start: "top 82%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      id="trust"
      ref={containerRef}
      className="relative w-full bg-[#FCFAF6] overflow-hidden py-24 md:py-36 border-t border-[#DED6C9]"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#C7A978]/6 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[350px] bg-[#4F918B]/5 blur-[130px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-24">
          <div className="trust-head-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#4F918B]/30 bg-[#F7F3EA] text-[#4F918B] text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7A978] animate-pulse" />
            Clients &amp; Collaborations
          </div>

          <h2 className="trust-head-elem text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#292825] leading-tight">
            {content.heading}
          </h2>

          <p className="trust-head-elem text-base sm:text-lg text-[#6F6A61] font-light max-w-2xl mx-auto leading-relaxed">
            {content.description || content.statement}
          </p>
        </div>

        {/* ── Four Event Experiences (Editorial Showcase) ── */}
        <div className="relative space-y-20 sm:space-y-28 lg:space-y-36">
          {/* Subtle vertical connecting line visible on large screens */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-[#C7A978]/20 via-[#4F918B]/30 to-[#C7A978]/20 -translate-x-1/2 pointer-events-none" />

          {showcaseCategories.map((item, idx) => {
            const isEven = idx % 2 === 1; // Alternating layout
            const Icon = item.icon;

            return (
              <div
                key={item.num}
                className="trust-editorial-row group relative"
              >
                <div
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                  } items-center gap-8 sm:gap-12 lg:gap-16`}
                >
                  {/* Visual Column: Photograph Frame */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative rounded-3xl overflow-hidden border border-[#DED6C9] bg-[#F7F3EA] shadow-md group-hover:shadow-xl transition-all duration-500">
                      {/* Image with zoom effect */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          priority={idx === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#292825]/40 via-transparent to-transparent pointer-events-none" />
                      </div>

                      {/* Floating Meta Tag */}
                      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FCFAF6]/90 backdrop-blur-md border border-[#DED6C9] shadow-sm">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: item.accentColor }}
                        />
                        <span className="text-[10px] font-mono tracking-widest uppercase text-[#292825] font-semibold">
                          {item.tag}
                        </span>
                      </div>

                      {/* Bottom Image Caption Bar */}
                      <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-[#FCFAF6] text-xs font-mono">
                        <span className="opacity-90">Iragu Portfolio</span>
                        <div className="flex items-center gap-1.5 opacity-90">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A978]" />
                          <span>Genuine Execution</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Editorial Text Column */}
                  <div className="w-full lg:w-1/2 space-y-5 text-left">
                    {/* Header Row: Large Expressive Number + Icon */}
                    <div className="flex items-center gap-4">
                      <span className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#C7A978] tracking-tight">
                        {item.num}
                      </span>
                      <div className="h-8 w-px bg-[#DED6C9]" />
                      <div
                        className={`p-2.5 rounded-2xl bg-[#F7F3EA] border ${item.accentBorder} text-[#4F918B] transition-colors duration-300 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Category Title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#292825] tracking-tight leading-tight group-hover:text-[#4F918B] transition-colors duration-300">
                      {item.name}
                    </h3>

                    {/* Category Description */}
                    <p className="text-base sm:text-lg text-[#6F6A61] font-light leading-relaxed max-w-xl">
                      {item.desc}
                    </p>

                    {/* Animated Accent Divider */}
                    <div className="w-12 h-0.5 bg-[#C7A978]/60 group-hover:w-28 transition-all duration-500 rounded-full" />

                    {/* Capability Tags / Highlights */}
                    <div className="pt-2 flex flex-wrap gap-2">
                      {item.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-xs font-mono text-[#6F6A61] bg-[#F7F3EA] border border-[#DED6C9] group-hover:border-[#C7A978]/50 transition-colors"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Editorial Consent & Corporate Enquiry Strip ── */}
        <div className="trust-head-elem mt-24 md:mt-32 pt-10 border-t border-[#DED6C9] flex flex-col sm:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
          {/* Consent Statement */}
          <div className="flex items-center gap-3 text-xs sm:text-sm font-mono text-[#6F6A61] text-center sm:text-left">
            <div className="p-2 rounded-full bg-[#F7F3EA] border border-[#C7A978]/40 text-[#4F918B] flex-shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span>
              Client &amp; brand logos are published exclusively with written consent.
            </span>
          </div>

          {/* Corporate Reference CTA */}
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#4F918B] hover:text-[#3F7A75] transition-colors flex-shrink-0 py-2"
          >
            <span>Inquire for Corporate References</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
