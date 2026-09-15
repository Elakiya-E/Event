"use client";

import React, { useRef } from "react";
import { useGSAP, gsap } from "@/hooks/useGsap";
import Link from "next/link";
import { ArrowRight, Leaf, Calendar, Sparkles } from "lucide-react";

export default function IraguHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      containerRef.current.querySelectorAll(".hero-fade-in"),
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.12 }
    );
  }, { scope: containerRef });

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative flex flex-col md:flex-row w-full min-h-screen overflow-hidden bg-[#F7F3EA]"
    >
      {/* ── LEFT / BOTTOM: Content Panel ── */}
      <div className="relative flex flex-col justify-center order-2 md:order-1 w-full md:w-2/5 text-[#292825] px-6 py-10 md:px-12 md:py-14 bg-[#F1EADF] hero-fade-in">
        <div className="max-w-[480px] mx-auto md:mx-0 space-y-5">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#4F918B]/40 text-xs uppercase tracking-wider text-[#4F918B] bg-[#FCFAF6]">
            <span className="w-2 h-2 rounded-full bg-[#C7A978] animate-pulse" />
            Complete Event Planning &amp; Management
          </div>

          {/* Heading */}
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.12] font-serif font-bold">
            <span className="block">Helping People &amp;</span>
            <span className="block">Brands</span>
            <span className="block text-[#4F918B]">Create Stress‑Free</span>
            <span className="block">Events</span>
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base text-[#6F6A61] leading-[1.6]">
            From customised décor to complete event execution, we take care of every detail —
            so you focus on the people, moments and memories that matter.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#4F918B] hover:bg-[#437D77] text-[#FCFAF6] font-bold px-5 py-3 rounded-full transition text-sm"
            >
              PLAN YOUR EVENT <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex items-center gap-2 border border-[#DED6C9] text-[#292825] font-bold px-5 py-3 rounded-full hover:bg-[#F7F3EA] transition text-sm"
            >
              VIEW OUR WORK <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-5 pt-1">
            <div className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-[#C7A978]" />
              <div className="text-xs text-[#292825] leading-tight">
                <div className="font-semibold">Customised</div>
                <div>Décor</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#C7A978]" />
              <div className="text-xs text-[#292825] leading-tight">
                <div className="font-semibold">Complete</div>
                <div>Planning</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#C7A978]" />
              <div className="text-xs text-[#292825] leading-tight">
                <div className="font-semibold">Seamless</div>
                <div>Execution</div>
              </div>
            </div>
          </div>

          {/* Bottom tagline */}
          <div className="text-[10px] uppercase text-[#6F6A61] flex items-center gap-2 pt-1">
            YOUR VISION. OUR CREATIVITY. COMPLETE EVENT RESPONSIBILITY.
            <span className="w-8 h-0.5 bg-[#C7A978] inline-block" />
          </div>
        </div>
      </div>

      {/* ── RIGHT / TOP: Image Panel ── */}
      <div className="relative order-1 md:order-2 w-full md:w-3/5 h-[56vw] min-h-[260px] md:h-auto overflow-hidden">
        {/* Left-edge gradient fade (desktop only) */}
        <div className="hidden md:block absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#F1EADF] via-[#F1EADF]/60 to-transparent pointer-events-none z-10" />
        {/* Bottom gradient fade (mobile only) */}
        <div className="md:hidden absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#F1EADF] to-transparent pointer-events-none z-10" />

        {/* Main image */}
        <img
          src="/images/hero1.png"
          alt="Elegant candlelit wedding event stage"
          className="w-full h-full object-cover"
        />

        {/* Script overlay */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6 text-[#292825] italic font-serif text-lg md:text-2xl tracking-wider bg-[#FCFAF6]/80 backdrop-blur-sm px-3 py-1 rounded-md z-20">
          Events · People · Memories
        </div>
        <div className="absolute top-12 md:top-14 right-4 md:right-6 w-12 md:w-16 h-0.5 bg-[#C7A978] z-20" />

        {/* Bottom-right mini image cards (desktop only) */}
        <div className="hidden md:flex absolute bottom-6 right-8 gap-3 z-20">
          <img
            src="/images/hero2.png"
            alt="Event detail"
            className="w-28 h-28 object-cover rounded-lg border border-[#DED6C9] shadow-md"
          />
          <img
            src="/images/hero2.png"
            alt="Event detail"
            className="w-28 h-28 object-cover rounded-lg border border-[#DED6C9] shadow-md -translate-x-3"
          />
        </div>

        {/* MORE THAN EVENTS badge (desktop only) */}
        <div className="hidden md:flex absolute bottom-8 left-8 bg-[#FCFAF6]/95 border border-[#DED6C9] text-xs uppercase text-[#292825] px-3 py-1 rounded-md items-center gap-1 shadow-sm z-20">
          More Than Events
          <span className="w-4 h-0.5 bg-[#C7A978]" />
        </div>

        {/* Curved separator SVG (desktop only) */}
        <svg
          className="hidden md:block absolute left-[-1px] top-0 h-full w-12 pointer-events-none z-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C40,20 40,80 0,100 Z" fill="#F1EADF" />
        </svg>
      </div>
    </section>
  );
}
