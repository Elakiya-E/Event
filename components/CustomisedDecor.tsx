"use client";
import React, { useRef } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGsap";
import Link from "next/link";
import {
  ArrowRight,
  Palette,
  SwatchBook,
  Flower2,
  LayoutDashboard,
  DoorOpen,
  Camera,
  Gem,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/* Décor element data — visual keyword grid                            */
/* ------------------------------------------------------------------ */
const decorElements = [
  {
    icon: Palette,
    label: "Theme",
    desc: "Concepts designed around your story",
    gradient: "from-rose-500/20 to-pink-600/20",
    border: "border-rose-500/20",
    iconColor: "text-rose-400",
  },
  {
    icon: SwatchBook,
    label: "Colours",
    desc: "Palettes that match your personality",
    gradient: "from-amber-500/20 to-orange-600/20",
    border: "border-amber-500/20",
    iconColor: "text-amber-400",
  },
  {
    icon: Flower2,
    label: "Florals",
    desc: "Arrangements that set the mood",
    gradient: "from-pink-500/20 to-fuchsia-600/20",
    border: "border-pink-500/20",
    iconColor: "text-pink-400",
  },
  {
    icon: LayoutDashboard,
    label: "Stage",
    desc: "Centrepieces that create impact",
    gradient: "from-violet-500/20 to-purple-600/20",
    border: "border-violet-500/20",
    iconColor: "text-violet-400",
  },
  {
    icon: DoorOpen,
    label: "Entrance",
    desc: "First impressions that wow",
    gradient: "from-teal-500/20 to-emerald-600/20",
    border: "border-teal-500/20",
    iconColor: "text-teal-400",
  },
  {
    icon: Camera,
    label: "Photo Zones",
    desc: "Backdrops made for memories",
    gradient: "from-sky-500/20 to-blue-600/20",
    border: "border-sky-500/20",
    iconColor: "text-sky-400",
  },
  {
    icon: Gem,
    label: "Details",
    desc: "The little things that matter most",
    gradient: "from-yellow-500/20 to-amber-600/20",
    border: "border-yellow-500/20",
    iconColor: "text-yellow-400",
  },
];

/* ================================================================== */
/* CustomisedDecor — Décor Portfolio Section                            */
/* ================================================================== */
export default function CustomisedDecor() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      /* Heading fade-in */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".decor-anim"),
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

      /* Element cards stagger */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".decor-card"),
        { y: 40, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".decor-grid"),
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      /* Parallax on the background visual */
      const bgVisual = containerRef.current.querySelector(".decor-bg-visual");
      if (bgVisual) {
        gsap.fromTo(
          bgVisual,
          { scale: 1.08 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      id="customised-decor"
      ref={containerRef}
      className="relative w-full bg-black overflow-hidden"
    >
      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* FULL-WIDTH CINEMATIC HEADER BAND                               */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className="relative w-full min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background — real project hero image with cinematic overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="decor-bg-visual absolute inset-[-5%] w-[110%] h-[110%] bg-cover bg-center"
            style={{ backgroundImage: `url('/images/hero-bg.png')` }}
          />
          {/* Multi-layer gradient for depth + text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-10" />
          {/* Warm accent glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(244,114,182,0.07),transparent)] z-10" />
        </div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 sm:px-6 py-14 sm:py-20 md:py-28 max-w-5xl mx-auto">
          {/* Eyebrow */}
          <div className="decor-anim mb-4 sm:mb-5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-pink-500/20 bg-pink-950/20 text-pink-300 text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              Customised Décor
            </span>
          </div>

          {/* Heading */}
          <h2 className="decor-anim text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.1]">
            Your Idea.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-amber-300">
              Your Story.
            </span>
            <br className="hidden sm:inline" />
            Your Celebration.
          </h2>

          {/* Subheading */}
          <p className="decor-anim mt-4 sm:mt-6 text-base sm:text-lg md:text-2xl text-neutral-200 font-light tracking-wide">
            Customised Décor Designed Around You
          </p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CONTENT + ELEMENT GRID                                         */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 md:py-24">
        {/* Intro content — centred, elegant */}
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-5 mb-12 sm:mb-16 md:mb-20">
          <p className="decor-anim text-base sm:text-lg md:text-xl text-white font-medium leading-relaxed">
            We specialise in creating décor concepts that are uniquely yours.
          </p>
          <p className="decor-anim text-sm sm:text-base md:text-lg text-neutral-300 font-light leading-relaxed">
            From elegant and minimal setups to grand, immersive experiences,
            every element is thoughtfully designed to match your celebration.
          </p>
        </div>

        {/* ── Décor Elements Grid ── */}
        <div className="decor-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {decorElements.map((el) => {
            const Icon = el.icon;
            return (
              <div
                key={el.label}
                className={`decor-card group relative p-4 sm:p-5 md:p-6 rounded-2xl border ${el.border} bg-neutral-950/60 backdrop-blur-md hover:bg-neutral-900/60 transition-all duration-500 overflow-hidden cursor-default`}
              >
                {/* Hover glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${el.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-3 sm:mb-4">
                    <div
                      className={`inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-neutral-800/80 group-hover:bg-neutral-800 transition-colors duration-300`}
                    >
                      <Icon
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${el.iconColor} group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                  </div>

                  {/* Label */}
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-white tracking-tight mb-1">
                    {el.label}
                  </h3>

                  {/* Description */}
                  <p className="text-[11px] sm:text-xs md:text-sm text-neutral-400 group-hover:text-neutral-300 font-light leading-relaxed transition-colors duration-300">
                    {el.desc}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Special closing card spanning remaining space */}
          <div className="decor-card col-span-2 sm:col-span-3 lg:col-span-1 relative p-5 md:p-6 rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-950/30 to-neutral-950/60 backdrop-blur-md flex flex-col justify-center items-center text-center overflow-hidden group hover:border-teal-500/40 transition-all duration-500 cursor-default">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(13,148,136,0.06),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <p className="text-sm sm:text-base md:text-lg text-teal-300 font-medium italic leading-relaxed">
                &ldquo;You tell us what you imagine.
                <br />
                We&apos;ll create it.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="decor-anim mt-12 sm:mt-14 md:mt-16 flex justify-center">
          <Link
            href="#contact"
            aria-label="Discuss your décor idea"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-400 hover:to-rose-400 text-white px-7 sm:px-9 py-4 font-bold uppercase tracking-widest transition-all duration-300 text-xs md:text-sm shadow-lg shadow-pink-500/15 rounded-sm"
          >
            Discuss Your Décor Idea
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
