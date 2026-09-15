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
      className="relative w-full bg-[#F1EADF] overflow-hidden py-24 md:py-36 border-t border-[#DED6C9]/70"
    >
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-10 text-center space-y-10 sm:space-y-12">
        {/* ── Section Header ── */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="loc-head-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C7A978]/30 bg-[#FCFAF6] text-[#C7A978] text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7A978] animate-pulse" />
            Geographic Coverage
          </div>

          <h2 className="loc-head-elem text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#292825] leading-tight">
            {content.heading}
          </h2>

          <p className="loc-head-elem text-sm sm:text-base md:text-xl text-[#4F918B] font-medium max-w-xl mx-auto">
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
                className={`city-pill group relative px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl border bg-[#FCFAF6] transition-all duration-300 hover:-translate-y-1 flex items-center gap-2.5 sm:gap-3 shadow-sm ${
                  isHq
                    ? "border-[#4F918B]/50 hover:border-[#3d7a75] shadow-[0_0_25px_rgba(199,169,120,0.15)]"
                    : "border-[#DED6C9] hover:border-[#C7A978]/60 hover:shadow-sm"
                }`}
              >
                <MapPin
                  className={`w-4 h-4 transition-colors ${
                    isHq
                      ? "text-[#4F918B]"
                      : "text-[#928B81] group-hover:text-[#4F918B]"
                  }`}
                />
                <span className="text-base md:text-lg font-medium text-[#292825] tracking-wide group-hover:text-[#4F918B] transition-colors">
                  {city}
                </span>

                {isHq && (
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#4F918B] bg-[#F7F3EA] border border-[#4F918B]/50 px-2 py-0.5 rounded-md">
                    Base / HQ
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Closing Statement Card ── */}
        <div className="loc-closing-card pt-6">
          <div className="relative p-8 md:p-12 rounded-3xl border border-[#DED6C9] bg-gradient-to-br from-[#F7F3EA] via-[#FCFAF6] to-[#F7F3EA] backdrop-blur-md max-w-3xl mx-auto overflow-hidden shadow-2xl space-y-4">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4F918B]/5 via-transparent to-[#C7A978]/5 pointer-events-none" />

            <div className="relative z-10 space-y-3">
              <div className="inline-flex items-center gap-2 text-[#4F918B] font-mono text-xs uppercase tracking-widest">
                <Compass className="w-4 h-4" />
                <span>Extended Reach</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#292825] tracking-tight">
                {content.closing}
              </h3>

              <p className="text-base md:text-lg text-[#6F6A61] font-light leading-relaxed max-w-xl mx-auto">
                {content.additionalLine}
              </p>

              <div className="pt-4 flex items-center justify-center">
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-3 bg-[#4F918B] hover:bg-[#3d7a75] text-[#FCFAF6] px-8 py-4 font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-lg shadow-[#4F918B]/20"
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
