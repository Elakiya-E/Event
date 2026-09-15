"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGsap";
import { ArrowRight, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const data = siteContent.finalCta;

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.fromTo(
        containerRef.current.querySelectorAll(".final-cta-elem"),
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );

  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      e.preventDefault();
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
      const firstInput = formElement.querySelector<HTMLInputElement>("input#\\:r0\\:-name, input[name='name']");
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 600);
      }
    }
  };

  return (
    <section
      id="planning"
      ref={containerRef}
      className="relative w-full bg-[#E8DFD0] py-16 sm:py-28 md:py-36 px-4 sm:px-6 border-t border-[#DED6C9] overflow-hidden"
      aria-labelledby="final-cta-title"
    >
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[600px] sm:w-[850px] h-[350px] bg-[#C7A978]/5 blur-[140px] rounded-full opacity-70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 md:space-y-10">
        <div className="final-cta-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C7A978]/30 bg-[#F1EADF]/70 text-[#C7A978] text-[11px] sm:text-xs md:text-sm font-mono tracking-[0.2em] uppercase">
          <Sparkles className="w-3.5 h-3.5 text-[#C7A978]" />
          <span>{data.heading}</span>
        </div>

        <h2
          id="final-cta-title"
          className="final-cta-elem text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-[#292825] leading-[1.12]"
        >
          {data.mainHeading}
        </h2>

        <p className="final-cta-elem max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#6F6A61] font-light leading-relaxed">
          {data.description}
        </p>

        <div className="final-cta-elem pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#contact-form"
            onClick={handleScrollToForm}
            aria-label="Start planning your event with Iragu Events"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#4F918B] hover:bg-[#437D77] text-[#FCFAF6] font-bold uppercase tracking-widest text-xs sm:text-sm transition-all duration-300 shadow-xl shadow-[#4F918B]/15 active:scale-95"
          >
            <span>{data.cta}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
