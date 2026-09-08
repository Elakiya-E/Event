"use client";

import React, { useRef } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGsap";
import { siteContent } from "@/data/siteContent";
import Link from "next/link";
import { MapPin, ArrowRight, Compass, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Locations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const content = siteContent.locations;

  useGSAP(
    () => {
      if (!containerRef.current) return;

      /* Header entrance */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".loc-head-elem"),
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

      /* Cities pills entrance */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".city-pill"),
        { y: 25, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".cities-wrap"),
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      /* Closing card entrance */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".loc-closing-card"),
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".loc-closing-card"),
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
      id="locations"
      ref={containerRef}
      className="relative w-full bg-[#030303] overflow-hidden py-24 md:py-36 border-t border-neutral-800/70"
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-teal-500/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-sky-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-10 text-center space-y-10 sm:space-y-12">
        {/* ── Section Header ── */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="loc-head-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/20 bg-teal-950/30 text-teal-400 text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            Geographic Coverage
          </div>

          <h2 className="loc-head-elem text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
            {content.heading}
          </h2>

          <p className="loc-head-elem text-sm sm:text-base md:text-xl text-teal-400 font-medium max-w-xl mx-auto">
            {content.subheading}
          </p>
        </div>

        {/* ── 7 Confirmed Cities Grid ── */}
        <div className="cities-wrap flex flex-wrap justify-center items-center gap-2.5 sm:gap-3.5 md:gap-4 max-w-4xl mx-auto pt-2">
          {content.cities.map((city, idx) => {
            const isHq = city.toLowerCase() === "nagercoil";
            return (
              <div
                key={city}
                className={`city-pill group relative px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl border bg-neutral-950/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 flex items-center gap-2.5 sm:gap-3 shadow-lg ${
                  isHq
                    ? "border-teal-500/50 hover:border-teal-400 shadow-[0_0_25px_rgba(20,184,166,0.15)]"
                    : "border-neutral-800/90 hover:border-teal-500/40 hover:shadow-[0_0_20px_rgba(20,184,166,0.1)]"
                }`}
              >
                <MapPin
                  className={`w-4 h-4 transition-colors ${
                    isHq
                      ? "text-teal-400"
                      : "text-neutral-500 group-hover:text-teal-400"
                  }`}
                />
                <span className="text-base md:text-lg font-medium text-white tracking-wide group-hover:text-teal-300 transition-colors">
                  {city}
                </span>

                {isHq && (
                  <span className="text-[10px] font-mono uppercase tracking-widest text-teal-300 bg-teal-950/70 border border-teal-500/40 px-2 py-0.5 rounded-md">
                    Base / HQ
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Closing Statement Card ── */}
        <div className="loc-closing-card pt-6">
          <div className="relative p-8 md:p-12 rounded-3xl border border-neutral-800/90 bg-gradient-to-br from-neutral-950/90 via-neutral-900/60 to-neutral-950/90 backdrop-blur-md max-w-3xl mx-auto overflow-hidden shadow-2xl space-y-4">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-sky-500/5 pointer-events-none" />

            <div className="relative z-10 space-y-3">
              <div className="inline-flex items-center gap-2 text-teal-400 font-mono text-xs uppercase tracking-widest">
                <Compass className="w-4 h-4" />
                <span>Extended Reach</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                {content.closing}
              </h3>

              <p className="text-base md:text-lg text-neutral-300 font-light leading-relaxed max-w-xl mx-auto">
                {content.additionalLine}
              </p>

              <div className="pt-4 flex items-center justify-center">
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-3 bg-teal-500 hover:bg-teal-400 text-black px-8 py-4 font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-lg shadow-teal-500/20"
                >
                  <span>Plan Your Event in Your City</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
