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
    gradient: "from-[#C7A978]/15 via-[#C7A978]/5 to-transparent",
    border: "hover:border-[#C7A978]/60",
    glow: "shadow-[0_0_30px_rgba(199,169,120,0.12)]",
    iconBg: "bg-[#C7A978]/10 text-[#C7A978] border-[#C7A978]/25 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    numberColor: "text-[#928B81]",
    tag: "text-[#C7A978] border-[#C7A978]/30 bg-[#F1EADF]",
  },
  {
    gradient: "from-[#4F918B]/12 via-[#4F918B]/4 to-transparent",
    border: "hover:border-[#4F918B]/50",
    glow: "shadow-[0_0_30px_rgba(79,145,139,0.10)]",
    iconBg: "bg-[#4F918B]/10 text-[#4F918B] border-[#4F918B]/25 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    numberColor: "text-[#928B81]",
    tag: "text-[#4F918B] border-[#4F918B]/30 bg-[#F1EADF]",
  },
  {
    gradient: "from-[#AEBBAA]/15 via-[#AEBBAA]/5 to-transparent",
    border: "hover:border-[#AEBBAA]/60",
    glow: "shadow-[0_0_30px_rgba(174,187,170,0.12)]",
    iconBg: "bg-[#AEBBAA]/15 text-[#6F6A61] border-[#AEBBAA]/35 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    numberColor: "text-[#928B81]",
    tag: "text-[#6F6A61] border-[#AEBBAA]/40 bg-[#F1EADF]",
  },
  {
    gradient: "from-[#D8C9B5]/20 via-[#D8C9B5]/8 to-transparent",
    border: "hover:border-[#D8C9B5]/70",
    glow: "shadow-[0_0_30px_rgba(216,201,181,0.14)]",
    iconBg: "bg-[#D8C9B5]/25 text-[#6F6A61] border-[#D8C9B5]/50 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    numberColor: "text-[#928B81]",
    tag: "text-[#6F6A61] border-[#D8C9B5]/50 bg-[#F7F3EA]",
  },
  {
    gradient: "from-[#E8C5B8]/15 via-[#E8C5B8]/5 to-transparent",
    border: "hover:border-[#E8C5B8]/60",
    glow: "shadow-[0_0_30px_rgba(232,197,184,0.12)]",
    iconBg: "bg-[#E8C5B8]/15 text-[#6F6A61] border-[#E8C5B8]/35 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    numberColor: "text-[#928B81]",
    tag: "text-[#6F6A61] border-[#E8C5B8]/40 bg-[#F1EADF]",
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
      className="relative w-full bg-[#F7F3EA] overflow-hidden py-24 md:py-36 border-t border-[#DED6C9]"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* ── Main Two-Column Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6 lg:sticky lg:top-32">
            <div className="approach-left-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C7A978]/30 bg-[#F1EADF] text-[#C7A978] text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7A978] animate-pulse" />
              Our Approach
            </div>

            <h2 className="approach-left-elem text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#292825] leading-tight">
              {content.heading}
            </h2>

            <p className="approach-left-elem text-base sm:text-lg md:text-xl text-[#C7A978] font-medium leading-relaxed">
              {content.subheading}
            </p>

            <div className="approach-left-elem p-6 rounded-2xl bg-[#F1EADF] border border-[#DED6C9] space-y-3">
              <span className="text-xs font-mono text-[#928B81] uppercase tracking-widest block">
                The Iragu Mindset
              </span>
              <p className="text-sm text-[#6F6A61] font-light leading-relaxed">
                Planning, preparation, and total responsibility. We address every contingency before the doors open, so you experience pure celebration.
              </p>
            </div>

            <div className="approach-left-elem pt-2">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 bg-[#4F918B] hover:bg-[#3F7A75] text-[#FCFAF6] px-7 py-3.5 font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-lg shadow-[#4F918B]/20"
              >
                <span>Discuss Your Event</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: 5 Planning Questions (7 cols) */}
          <div className="lg:col-span-7 space-y-4 questions-list">
            <div className="mb-6 flex items-center justify-between pb-3 border-b border-[#DED6C9]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#6F6A61] flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#4F918B]" />
                <span>Five Core Questions We Plan For</span>
              </span>
              <span className="text-[10px] font-mono text-[#928B81] uppercase tracking-wider">
                Precision Framework
              </span>
            </div>

            {content.questions.map((q, idx) => {
              const Icon = questionIcons[idx] || HelpCircle;
              const accent = questionAccents[idx] || questionAccents[0];

              return (
                <div
                  key={idx}
                  className={`question-card group relative p-6 md:p-7 rounded-2xl border border-[#DED6C9] bg-[#FCFAF6] ${accent.border} ${accent.glow} transition-all duration-300 hover:translate-x-1.5 flex items-start justify-between gap-5`}
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
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#292825] group-hover:text-[#292825] transition-colors">
                        {q.question}
                      </h3>
                      <p className="text-xs md:text-sm text-[#6F6A61] group-hover:text-[#6F6A61] font-light transition-colors">
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
          <div className="relative p-8 md:p-12 rounded-3xl border border-[#DED6C9] bg-[#F1EADF] text-center max-w-4xl mx-auto overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(199,169,120,0.12),transparent)] pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <span className="approach-closing-elem inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C7A978]/30 bg-[#F7F3EA] text-[#C7A978] font-mono text-[11px] uppercase tracking-widest">
                Our Standard
              </span>

              <h3 className="approach-closing-elem text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#292825] tracking-tight">
                {content.closingHead}
              </h3>

              <p className="approach-closing-elem text-base md:text-lg text-[#6F6A61] font-light max-w-2xl mx-auto leading-relaxed">
                {content.closingBody}
              </p>

              <div className="approach-closing-elem pt-2 flex items-center justify-center gap-2 text-xs font-mono text-[#C7A978] tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7A978]" />
                <span>{siteContent.brand.signature}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
