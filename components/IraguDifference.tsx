"use client";

import React, { useRef } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGsap";
import { siteContent } from "@/data/siteContent";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  UserCheck,
  Lightbulb,
  SearchCheck,
  Smile,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const diffIcons = [
  Sparkles,     // 01 — CUSTOMISED APPROACH
  ShieldCheck,  // 02 — COMPLETE OWNERSHIP
  UserCheck,    // 03 — SINGLE POINT OF CONTACT
  Lightbulb,    // 04 — CREATIVE THINKING
  SearchCheck,  // 05 — ATTENTION TO DETAIL
  Smile,        // 06 — STRESS-FREE EXPERIENCE
];

const cardAccents = [
  {
    gradient: "from-[#C7A978]/18 via-[#C7A978]/6 to-transparent",
    border: "hover:border-[#C7A978]/60",
    glow: "shadow-[0_0_30px_rgba(199,169,120,0.12)]",
    iconBg: "bg-[#C7A978]/10 text-[#C7A978] border-[#C7A978]/25 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    numberColor: "text-[#928B81]",
    tag: "border-[#C7A978]/35 text-[#C7A978] bg-[#F1EADF]",
    dot: "bg-[#C7A978]",
  },
  {
    gradient: "from-[#4F918B]/14 via-[#4F918B]/5 to-transparent",
    border: "hover:border-[#4F918B]/55",
    glow: "shadow-[0_0_30px_rgba(79,145,139,0.10)]",
    iconBg: "bg-[#4F918B]/10 text-[#4F918B] border-[#4F918B]/25 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    numberColor: "text-[#928B81]",
    tag: "border-[#4F918B]/35 text-[#4F918B] bg-[#F1EADF]",
    dot: "bg-[#4F918B]",
  },
  {
    gradient: "from-[#AEBBAA]/18 via-[#AEBBAA]/6 to-transparent",
    border: "hover:border-[#AEBBAA]/60",
    glow: "shadow-[0_0_30px_rgba(174,187,170,0.12)]",
    iconBg: "bg-[#AEBBAA]/15 text-[#6F6A61] border-[#AEBBAA]/35 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    numberColor: "text-[#928B81]",
    tag: "border-[#AEBBAA]/40 text-[#6F6A61] bg-[#F1EADF]",
    dot: "bg-[#AEBBAA]",
  },
  {
    gradient: "from-[#D8C9B5]/22 via-[#D8C9B5]/9 to-transparent",
    border: "hover:border-[#D8C9B5]/70",
    glow: "shadow-[0_0_30px_rgba(216,201,181,0.14)]",
    iconBg: "bg-[#D8C9B5]/25 text-[#6F6A61] border-[#D8C9B5]/50 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    numberColor: "text-[#928B81]",
    tag: "border-[#D8C9B5]/50 text-[#6F6A61] bg-[#F7F3EA]",
    dot: "bg-[#D8C9B5]",
  },
  {
    gradient: "from-[#E8C5B8]/18 via-[#E8C5B8]/6 to-transparent",
    border: "hover:border-[#E8C5B8]/60",
    glow: "shadow-[0_0_30px_rgba(232,197,184,0.12)]",
    iconBg: "bg-[#E8C5B8]/15 text-[#6F6A61] border-[#E8C5B8]/35 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    numberColor: "text-[#928B81]",
    tag: "border-[#E8C5B8]/40 text-[#6F6A61] bg-[#F1EADF]",
    dot: "bg-[#E8C5B8]",
  },
  {
    gradient: "from-[#B8A89A]/18 via-[#B8A89A]/6 to-transparent",
    border: "hover:border-[#B8A89A]/60",
    glow: "shadow-[0_0_30px_rgba(184,168,154,0.12)]",
    iconBg: "bg-[#B8A89A]/15 text-[#6F6A61] border-[#B8A89A]/35 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    numberColor: "text-[#928B81]",
    tag: "border-[#B8A89A]/40 text-[#6F6A61] bg-[#F1EADF]",
    dot: "bg-[#B8A89A]",
  },
];

export default function IraguDifference() {
  const containerRef = useRef<HTMLDivElement>(null);
  const content = siteContent.whyIragu;

  useGSAP(
    () => {
      if (!containerRef.current) return;

      /* Header animation */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".diff-head-elem"),
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

      /* Difference cards */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".diff-card"),
        { y: 40, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".diff-grid"),
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
      id="why-iragu"
      ref={containerRef}
      className="relative w-full bg-[#F1EADF] overflow-hidden py-24 md:py-36 border-t border-[#DED6C9]"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16 md:mb-20">
          <div className="diff-head-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C7A978]/30 bg-[#F7F3EA] text-[#C7A978] text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7A978] animate-pulse" />
            Why Iragu Events
          </div>

          <h2 className="diff-head-elem text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#292825] leading-tight">
            {content.heading}
          </h2>

          <p className="diff-head-elem text-sm sm:text-base md:text-lg text-[#6F6A61] font-light max-w-xl mx-auto">
            {content.subheading}
          </p>
        </div>

        {/* ── 6 Advantage Cards Grid ── */}
        <div className="diff-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {content.differentiators.map((item, idx) => {
            const Icon = diffIcons[idx] || Sparkles;
            const accent = cardAccents[idx] || cardAccents[0];

            return (
              <div
                key={idx}
                className={`diff-card group relative p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl border border-[#DED6C9] bg-[#FCFAF6] ${accent.border} ${accent.glow} transition-all duration-400 hover:-translate-y-2 flex flex-col justify-between`}
              >
                {/* Hover Gradient Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${accent.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Top: Number + Custom Icon Box */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`font-mono text-xs font-bold tracking-widest ${accent.numberColor} uppercase px-3 py-1 rounded-full bg-[#F7F3EA] border border-[#DED6C9]`}>
                      0{idx + 1}
                    </span>
                    <div
                      className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-300 ${accent.iconBg}`}
                    >
                      <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Advantage Title */}
                  <h3 className="text-xl font-bold tracking-tight text-[#292825] group-hover:text-[#292825] mb-3 uppercase leading-snug">
                    {item.title}
                  </h3>

                  {/* Advantage Description */}
                  <p className="text-sm md:text-base text-[#6F6A61] group-hover:text-[#6F6A61] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="relative z-10 mt-8 pt-4 border-t border-[#DED6C9] flex items-center justify-between">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wider uppercase border ${accent.tag}`}>
                    {item.tag}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
                    <span className="text-[10px] font-mono text-[#928B81] uppercase tracking-widest">
                      Iragu Standard
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom Value Callout ── */}
        <div className="diff-head-elem mt-16 md:mt-20 text-center">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-3 bg-[#4F918B] hover:bg-[#3F7A75] text-[#FCFAF6] px-8 py-4 font-bold uppercase tracking-widest text-xs rounded-none transition-all duration-300 shadow-lg shadow-[#4F918B]/20"
          >
            <span>Partner With Iragu</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
