"use client";

import React, { useRef } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGsap";
import { siteContent } from "@/data/siteContent";
import Link from "next/link";
import {
  ClipboardList,
  Clock,
  UserCheck,
  ShieldAlert,
  Sparkles,
  ArrowRight,
  HelpCircle,
  CheckCircle2,
  Compass,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const questionIcons = [
  ClipboardList, // 01 — What needs to happen?
  Clock,         // 02 — When should it happen?
  UserCheck,     // 03 — Who needs to handle it?
  ShieldAlert,   // 04 — What could go wrong?
  Sparkles,      // 05 — How do we make it better?
];

const questionAccents = [
  {
    gradient: "from-teal-500/15 via-teal-900/5 to-transparent",
    border: "hover:border-teal-500/50",
    glow: "shadow-[0_0_30px_rgba(20,184,166,0.15)]",
    iconBg: "bg-teal-500/10 text-teal-400 border-teal-500/20 group-hover:bg-teal-500 group-hover:text-black",
    numberColor: "text-teal-400",
    tag: "text-teal-300 border-teal-500/30 bg-teal-950/40",
  },
  {
    gradient: "from-sky-500/15 via-blue-900/5 to-transparent",
    border: "hover:border-sky-500/50",
    glow: "shadow-[0_0_30px_rgba(14,165,233,0.15)]",
    iconBg: "bg-sky-500/10 text-sky-400 border-sky-500/20 group-hover:bg-sky-500 group-hover:text-black",
    numberColor: "text-sky-400",
    tag: "text-sky-300 border-sky-500/30 bg-sky-950/40",
  },
  {
    gradient: "from-violet-500/15 via-purple-900/5 to-transparent",
    border: "hover:border-violet-500/50",
    glow: "shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    iconBg: "bg-violet-500/10 text-violet-400 border-violet-500/20 group-hover:bg-violet-500 group-hover:text-black",
    numberColor: "text-violet-400",
    tag: "text-violet-300 border-violet-500/30 bg-violet-950/40",
  },
  {
    gradient: "from-amber-500/15 via-orange-900/5 to-transparent",
    border: "hover:border-amber-500/50",
    glow: "shadow-[0_0_30px_rgba(245,158,11,0.15)]",
    iconBg: "bg-amber-500/10 text-amber-400 border-amber-500/20 group-hover:bg-amber-500 group-hover:text-black",
    numberColor: "text-amber-400",
    tag: "text-amber-300 border-amber-500/30 bg-amber-950/40",
  },
  {
    gradient: "from-rose-500/15 via-pink-900/5 to-transparent",
    border: "hover:border-rose-500/50",
    glow: "shadow-[0_0_30px_rgba(244,63,94,0.15)]",
    iconBg: "bg-rose-500/10 text-rose-400 border-rose-500/20 group-hover:bg-rose-500 group-hover:text-black",
    numberColor: "text-rose-400",
    tag: "text-rose-300 border-rose-500/30 bg-rose-950/40",
  },
];

export default function OurApproach() {
  const containerRef = useRef<HTMLDivElement>(null);
  const content = siteContent.approach;

  useGSAP(
    () => {
      if (!containerRef.current) return;

      /* Left col animation */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".approach-left-elem"),
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

      /* Right question cards */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".question-card"),
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".questions-list"),
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      /* Closing banner */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".approach-closing-elem"),
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".approach-closing-wrap"),
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="approach"
      ref={containerRef}
      className="relative w-full bg-[#030303] overflow-hidden py-24 md:py-36 border-t border-neutral-800/70"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[700px] h-[350px] bg-teal-500/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-sky-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* ── Main Two-Column Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6 lg:sticky lg:top-32">
            <div className="approach-left-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/20 bg-teal-950/30 text-teal-400 text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              Our Approach
            </div>

            <h2 className="approach-left-elem text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
              {content.heading}
            </h2>

            <p className="approach-left-elem text-base sm:text-lg md:text-xl text-teal-400 font-medium leading-relaxed">
              {content.subheading}
            </p>

            <div className="approach-left-elem p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 space-y-3">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block">
                The Iragu Mindset
              </span>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                Planning, preparation, and total responsibility. We address every contingency before the doors open, so you experience pure celebration.
              </p>
            </div>

            <div className="approach-left-elem pt-2">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 bg-teal-500 hover:bg-teal-400 text-black px-7 py-3.5 font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-lg shadow-teal-500/20"
              >
                <span>Discuss Your Event</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: 5 Planning Questions (7 cols) */}
          <div className="lg:col-span-7 space-y-4 questions-list">
            <div className="mb-6 flex items-center justify-between pb-3 border-b border-neutral-800/80">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-teal-400" />
                <span>Five Core Questions We Plan For</span>
              </span>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                Precision Framework
              </span>
            </div>

            {content.questions.map((q, idx) => {
              const Icon = questionIcons[idx] || HelpCircle;
              const accent = questionAccents[idx] || questionAccents[0];

              return (
                <div
                  key={idx}
                  className={`question-card group relative p-6 md:p-7 rounded-2xl border border-neutral-800/80 bg-neutral-950/70 backdrop-blur-md ${accent.border} ${accent.glow} transition-all duration-300 hover:translate-x-1.5 flex items-start justify-between gap-5`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${accent.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`}
                  />

                  <div className="relative z-10 flex items-start gap-4 md:gap-5 flex-grow">
                    {/* Number Badge */}
                    <span className={`font-mono text-sm font-bold tracking-widest ${accent.numberColor} mt-1 flex-shrink-0`}>
                      {q.num}
                    </span>

                    {/* Question Content */}
                    <div className="space-y-1.5">
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-white transition-colors">
                        {q.question}
                      </h3>
                      <p className="text-xs md:text-sm text-neutral-400 group-hover:text-neutral-300 font-light transition-colors">
                        {q.focus}
                      </p>
                    </div>
                  </div>

                  {/* Icon Box */}
                  <div
                    className={`relative z-10 w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${accent.iconBg}`}
                  >
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Closing Content Banner ── */}
        <div className="approach-closing-wrap mt-16 md:mt-24">
          <div className="relative p-8 md:p-12 rounded-3xl border border-neutral-800/80 bg-gradient-to-r from-neutral-950 via-neutral-900/70 to-neutral-950 backdrop-blur-md text-center max-w-4xl mx-auto overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(20,184,166,0.1),transparent)] pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <span className="approach-closing-elem inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-teal-500/20 bg-teal-950/30 text-teal-400 font-mono text-[11px] uppercase tracking-widest">
                Our Standard
              </span>

              <h3 className="approach-closing-elem text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight">
                {content.closingHead}
              </h3>

              <p className="approach-closing-elem text-base md:text-lg text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
                {content.closingBody}
              </p>

              <div className="approach-closing-elem pt-2 flex items-center justify-center gap-2 text-xs font-mono text-teal-400 tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                <span>{siteContent.brand.signature}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
