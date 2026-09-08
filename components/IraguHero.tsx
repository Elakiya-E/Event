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
      className="relative flex w-full min-h-[92vh] md:min-h-screen overflow-hidden bg-[#0a0f0f]"
    >
      {/* Left Panel */}
      <div
        className="relative flex flex-col justify-center w-2/5 text-white px-8 py-8 md:px-12 md:py-10 gap-4 hero-fade-in"
        style={{ clipPath: "polygon(0 0, 95% 0, 100% 5%, 100% 100%, 0 100%)" }}
      >
        <div className="max-w-[480px] space-y-6">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-teal-400/70 text-xs uppercase tracking-wider text-teal-400 bg-black/30">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          COMPLETE EVENT PLANNING & MANAGEMENT
        </div>

        {/* Heading */}
        <h1 className="text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.12] font-serif font-bold">
          <span className="block">Helping People &amp;</span>
          <span className="block">Brands</span>
          <span className="block text-[#2dd4c8]">Create Stress‑Free</span>
          <span className="block">Events</span>
        </h1>

        {/* Description */}
        <p className="max-w-[420px] text-base text-neutral-300 leading-[1.6]">
          From customised décor to complete event execution, we take care of every detail —
          so you focus on the people, moments and memories that matter.
        </p>

        {/* CTAs */}
        <div className="flex gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-black font-bold px-5 py-3 rounded-full transition"
          >
            PLAN YOUR EVENT <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#portfolio"
            className="inline-flex items-center gap-2 border border-white/30 text-white font-bold px-5 py-3 rounded-full hover:bg-white/10 transition"
          >
            VIEW OUR WORK <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Feature items */}
        <div className="flex gap-8 pt-2">
          <div className="flex items-center gap-3">
            <Leaf className="w-5 h-5 text-[#d4af37]" />
            <div className="text-xs text-white">
              <div>Customised</div>
              <div>Décor</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-[#d4af37]" />
            <div className="text-xs text-white">
              <div>Complete</div>
              <div>Planning</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#d4af37]" />
            <div className="text-xs text-white">
              <div>Seamless</div>
              <div>Execution</div>
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="text-[10px] uppercase text-white/70 flex items-center gap-2">
          YOUR VISION. OUR CREATIVITY. COMPLETE EVENT RESPONSIBILITY.
          <span className="w-8 h-0.5 bg-[#d4af37] inline-block" />
        </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="relative w-3/5 overflow-hidden">
        {/* Gradient fade on left edge of image */}
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#0a0f0f] to-transparent pointer-events-none" />
        {/* Main image */}
        <img
          src="/images/hero1.png"
          alt="Elegant candlelit wedding event stage"
          className="w-full h-full object-cover"
        />
        {/* Gradient edges for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f0f] via-transparent to-transparent pointer-events-none" />

        {/* Top‑right script overlay */}
        <div className="absolute top-6 right-6 text-white italic font-serif text-2xl tracking-wider">
          Events People Memories
        </div>
        <div className="absolute top-12 right-6 w-16 h-0.5 bg-[#d4af37]" />

        {/* Bottom‑right small cards */}
        <div className="absolute bottom-6 right-8 flex gap-3">
          <img
            src="/images/hero2.png"
            alt="Event detail close‑up"
            className="w-32 h-32 object-cover rounded-lg border border-white/30"
          />
          <img
            src="/images/hero2.png"
            alt="Event detail close‑up"
            className="w-32 h-32 object-cover rounded-lg border border-white/30 -translate-x-4"
          />
        </div>

        {/* Badge over main image */}
        <div className="absolute bottom-8 left-8 bg-black/50 text-xs uppercase text-white px-3 py-1 rounded-md flex items-center gap-1">
          MORE THAN EVENTS
          <span className="w-4 h-0.5 bg-[#d4af37]" />
        </div>

        {/* Curved separator – overlay SVG */}
        <svg
          className="absolute left-0 top-0 h-full w-12 pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C30,20 30,80 0,100 L100,100 L100,0 Z" fill="#0a0f0f" />
        </svg>
      </div>
    </section>
  );
}
