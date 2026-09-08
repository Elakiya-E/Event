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
    gradient: "from-teal-500/15 via-teal-900/5 to-transparent",
    border: "hover:border-teal-500/50",
    glow: "shadow-[0_0_30px_rgba(20,184,166,0.15)]",
    iconBg: "bg-teal-500/10 text-teal-400 border-teal-500/20 group-hover:bg-teal-500 group-hover:text-black",
    numberColor: "text-teal-400",
    tag: "border-teal-500/30 text-teal-300 bg-teal-950/40",
    dot: "bg-teal-400",
  },
  {
    gradient: "from-sky-500/15 via-blue-900/5 to-transparent",
    border: "hover:border-sky-500/50",
    glow: "shadow-[0_0_30px_rgba(14,165,233,0.15)]",
    iconBg: "bg-sky-500/10 text-sky-400 border-sky-500/20 group-hover:bg-sky-500 group-hover:text-black",
    numberColor: "text-sky-400",
    tag: "border-sky-500/30 text-sky-300 bg-sky-950/40",
    dot: "bg-sky-400",
  },
  {
    gradient: "from-violet-500/15 via-purple-900/5 to-transparent",
    border: "hover:border-violet-500/50",
    glow: "shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    iconBg: "bg-violet-500/10 text-violet-400 border-violet-500/20 group-hover:bg-violet-500 group-hover:text-black",
    numberColor: "text-violet-400",
    tag: "border-violet-500/30 text-violet-300 bg-violet-950/40",
    dot: "bg-violet-400",
  },
  {
    gradient: "from-amber-500/15 via-orange-900/5 to-transparent",
    border: "hover:border-amber-500/50",
    glow: "shadow-[0_0_30px_rgba(245,158,11,0.15)]",
    iconBg: "bg-amber-500/10 text-amber-400 border-amber-500/20 group-hover:bg-amber-500 group-hover:text-black",
    numberColor: "text-amber-400",
    tag: "border-amber-500/30 text-amber-300 bg-amber-950/40",
    dot: "bg-amber-400",
  },
  {
    gradient: "from-rose-500/15 via-red-900/5 to-transparent",
    border: "hover:border-rose-500/50",
    glow: "shadow-[0_0_30px_rgba(244,63,94,0.15)]",
    iconBg: "bg-rose-500/10 text-rose-400 border-rose-500/20 group-hover:bg-rose-500 group-hover:text-black",
    numberColor: "text-rose-400",
    tag: "border-rose-500/30 text-rose-300 bg-rose-950/40",
    dot: "bg-rose-400",
  },
  {
    gradient: "from-emerald-500/15 via-teal-900/5 to-transparent",
    border: "hover:border-emerald-500/50",
    glow: "shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-black",
    numberColor: "text-emerald-400",
    tag: "border-emerald-500/30 text-emerald-300 bg-emerald-950/40",
    dot: "bg-emerald-400",
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
      className="relative w-full bg-[#040404] overflow-hidden py-24 md:py-36 border-t border-neutral-800/70"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[300px] bg-teal-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[300px] bg-teal-900/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16 md:mb-20">
          <div className="diff-head-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/20 bg-teal-950/30 text-teal-400 text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            Why Iragu Events
          </div>

          <h2 className="diff-head-elem text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
            {content.heading}
          </h2>

          <p className="diff-head-elem text-sm sm:text-base md:text-lg text-neutral-400 font-light max-w-xl mx-auto">
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
                className={`diff-card group relative p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl border border-neutral-800/90 bg-neutral-950/70 backdrop-blur-md ${accent.border} ${accent.glow} transition-all duration-400 hover:-translate-y-2 flex flex-col justify-between`}
              >
                {/* Hover Gradient Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${accent.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Top: Number + Custom Icon Box */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`font-mono text-xs font-bold tracking-widest ${accent.numberColor} uppercase px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-800`}>
                      0{idx + 1}
                    </span>
                    <div
                      className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-300 ${accent.iconBg}`}
                    >
                      <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Advantage Title */}
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-white mb-3 uppercase leading-snug">
                    {item.title}
                  </h3>

                  {/* Advantage Description */}
                  <p className="text-sm md:text-base text-neutral-400 group-hover:text-neutral-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="relative z-10 mt-8 pt-4 border-t border-neutral-800/60 flex items-center justify-between">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wider uppercase border ${accent.tag}`}>
                    {item.tag}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
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
            className="group inline-flex items-center gap-3 bg-teal-500 hover:bg-teal-400 text-black px-8 py-4 font-bold uppercase tracking-widest text-xs rounded-none transition-all duration-300 shadow-lg shadow-teal-500/20"
          >
            <span>Partner With Iragu</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
