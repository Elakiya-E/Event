"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP, gsap } from "@/hooks/useGsap";
import { ArrowDown, Sparkles } from "lucide-react";

export default function WhyIraguHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReduced) {
        gsap.set(
          containerRef.current.querySelectorAll(
            ".why-hero-text, .why-hero-photo-main, .why-hero-photo-sub, .why-hero-badge"
          ),
          { opacity: 1, y: 0, scale: 1 }
        );
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Text elements stagger in
      tl.fromTo(
        containerRef.current.querySelectorAll(".why-hero-text"),
        { y: 32, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.12 }
      );

      // 2. Large main portrait photo reveals with gentle lift
      tl.fromTo(
        containerRef.current.querySelectorAll(".why-hero-photo-main"),
        { opacity: 0, scale: 0.95, y: 24 },
        { opacity: 1, scale: 1, y: 0, duration: 0.9 },
        "-=0.6"
      );

      // 3. Smaller overlapping photo floats into position
      tl.fromTo(
        containerRef.current.querySelectorAll(".why-hero-photo-sub"),
        { opacity: 0, x: -20, y: 20 },
        { opacity: 1, x: 0, y: 0, duration: 0.8, ease: "back.out(1.2)" },
        "-=0.5"
      );

      // 4. Floating brand statement badge appears with slight delay
      tl.fromTo(
        containerRef.current.querySelectorAll(".why-hero-badge"),
        { opacity: 0, scale: 0.9, y: 15 },
        { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: "power2.out" },
        "-=0.3"
      );
    },
    { scope: containerRef }
  );

  const handleScrollToCards = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("why-features");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#F7F3EA] overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-20 md:pb-28 border-b border-[#DED6C9]"
      aria-label="Why Iragu Events Hero"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[350px] bg-[#C7A978]/8 blur-[130px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-[#4F918B]/8 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ═══════════════════════════════════════════════════════════ */}
          {/* LEFT SIDE — Brand storytelling                              */}
          {/* ═══════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            {/* Small eyebrow label */}
            <div className="why-hero-text">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C7A978]/40 bg-[#FCFAF6] text-[#C7A978] text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4F918B] animate-pulse" />
                THE IRAGU DIFFERENCE
              </span>
            </div>

            {/* Main Heading: Large, elegant & visually expressive */}
            <h1 className="why-hero-text text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.6rem] font-serif font-bold text-[#292825] tracking-tight leading-[1.12]">
              Not Just Events.
              <br />
              <span className="text-[#4F918B] italic font-normal">
                Experiences{" "}
              </span>
              <span className="text-[#C7A978] underline decoration-[#C7A978]/40 decoration-2 underline-offset-8">
                You Can Trust.
              </span>
            </h1>

            {/* Supporting description */}
            <p className="why-hero-text text-sm sm:text-base md:text-lg text-[#6F6A61] font-light leading-relaxed max-w-xl">
              Every unforgettable event begins with a team that understands your
              vision, takes complete responsibility, and brings every detail
              together with creativity and care.
            </p>

            {/* Fine editorial accent rule */}
            <div className="why-hero-text w-24 h-[1.5px] bg-gradient-to-r from-[#C7A978] via-[#4F918B]/60 to-transparent" />

            {/* Minimal CTA with smooth scroll down */}
            <div className="why-hero-text pt-2">
              <a
                href="#why-features"
                onClick={handleScrollToCards}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-[#DED6C9] bg-[#FCFAF6] hover:border-[#4F918B] hover:bg-[#FCFAF6] text-[#292825] hover:text-[#4F918B] transition-all duration-300 text-xs sm:text-sm font-mono uppercase tracking-wider shadow-sm active:scale-95"
              >
                <span className="font-semibold">Discover Our Difference</span>
                <span className="w-7 h-7 rounded-full bg-[#F1EADF] group-hover:bg-[#4F918B] text-[#4F918B] group-hover:text-[#FCFAF6] flex items-center justify-center transition-all duration-300">
                  <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
                </span>
              </a>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* RIGHT SIDE — Premium layered visual composition             */}
          {/* ═══════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end pt-4 sm:pt-6 lg:pt-0">
            {/* Container for layered compositions */}
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[480px]">
              {/* Background ambient fine gold border frame offset */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-full h-full rounded-3xl border border-[#C7A978]/30 pointer-events-none hidden sm:block" />

              {/* 1. Large portrait-oriented event photograph */}
              <div className="why-hero-photo-main relative aspect-[4/5] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DED6C9] bg-[#FCFAF6] shadow-2xl">
                <Image
                  src="/images/hero1.png"
                  alt="Iragu Events — Bespoke Event Stage Decoration"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 480px"
                />
                {/* Subtle warm gradient overlay at base */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1816]/50 via-transparent to-transparent pointer-events-none" />

                {/* Corner editorial badge */}
                <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCFAF6]/90 backdrop-blur-sm border border-[#DED6C9] text-[10px] font-mono tracking-wider text-[#292825] uppercase shadow-xs">
                  <Sparkles className="w-3 h-3 text-[#C7A978]" />
                  <span>Real Event Production</span>
                </div>
              </div>

              {/* 2. Smaller overlapping event photograph */}
              <div className="why-hero-photo-sub absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 w-40 sm:w-52 aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[#FCFAF6] shadow-2xl ring-1 ring-[#C7A978]/40 z-20 bg-[#FCFAF6]">
                <Image
                  src="/images/img1.2.png"
                  alt="Behind the scenes coordination and event execution"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 160px, 208px"
                />
                <div className="absolute bottom-2 left-2 right-2 px-2 py-1 bg-[#FCFAF6]/95 backdrop-blur-xs rounded-md text-[9px] font-mono tracking-wider text-[#292825] uppercase text-center font-semibold border border-[#DED6C9] shadow-2xs">
                  Coordination &amp; Flow
                </div>
              </div>

              {/* 3. Small floating text element badge */}
              <div className="why-hero-badge absolute -top-4 -left-2 sm:-top-5 sm:-left-6 z-20 max-w-[210px] sm:max-w-[230px] p-3 sm:p-3.5 rounded-2xl bg-[#FCFAF6]/95 backdrop-blur-md border border-[#C7A978]/50 shadow-xl space-y-1">
                <div className="flex items-center gap-1.5 text-[9px] font-mono text-[#C7A978] tracking-widest uppercase font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F918B]" />
                  The Iragu Standard
                </div>
                <p className="text-[10px] sm:text-[11px] font-serif font-bold text-[#292825] leading-snug tracking-wide">
                  ONE VISION.
                  <br />
                  ONE TRUSTED TEAM.
                  <br />
                  <span className="text-[#4F918B]">COMPLETE RESPONSIBILITY.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

