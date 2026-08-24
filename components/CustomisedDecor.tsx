"use client";
import React, { useRef } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGsap";
import { siteContent } from "@/data/siteContent";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function CustomisedDecor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !imageRef.current) return;

    gsap.to(imageRef.current, {
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section
      id="customised-decor"
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] bg-black overflow-hidden flex items-center justify-center"
    >
      {/* Background Visual */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={imageRef} className="absolute inset-[-10%] w-[120%] h-[120%] flex items-center justify-center bg-neutral-900">
           {/* Elegant placeholder for missing decor photograph */}
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 z-10" />
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-black to-black z-10" />
           <div className="w-full h-full opacity-10" style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .3) 25%, rgba(255, 255, 255, .3) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .3) 75%, rgba(255, 255, 255, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .3) 25%, rgba(255, 255, 255, .3) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .3) 75%, rgba(255, 255, 255, .3) 76%, transparent 77%, transparent)', backgroundSize: '50px 50px' }} />
        </div>
      </div>

      {/* Floating Labels */}
      <div className="absolute top-12 left-6 md:left-12 z-20 flex gap-4">
        <span className="px-4 py-2 border border-white/20 text-white text-xs font-bold tracking-widest uppercase backdrop-blur-md">
          Customised Décor
        </span>
        <span className="px-4 py-2 bg-white text-black text-xs font-bold tracking-widest uppercase hidden md:inline-block">
          Designed Around You
        </span>
      </div>

      {/* Center Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight whitespace-pre-wrap">
          {siteContent.customisedDecor.heading}
        </h2>
        
        <p className="mt-8 text-xl md:text-2xl text-gray-300 font-light max-w-2xl">
          {siteContent.customisedDecor.subheading}
        </p>

        <Link
           href="#contact"
           className="mt-12 inline-flex px-8 py-4 bg-teal-500 text-black font-bold uppercase tracking-widest hover:bg-teal-400 transition-colors"
        >
          {siteContent.customisedDecor.cta}
        </Link>
      </div>
    </section>
  );
}
