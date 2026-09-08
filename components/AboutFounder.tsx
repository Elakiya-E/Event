"use client";

import React, { useRef } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGsap";
import { siteContent } from "@/data/siteContent";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  MapPin,
  Quote,
  Sparkles,
  HeartHandshake,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutFounder() {
  const containerRef = useRef<HTMLDivElement>(null);
  const about = siteContent.about;
  const founder = siteContent.founder;

  useGSAP(
    () => {
      if (!containerRef.current) return;

      /* Header animation */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".about-head-elem"),
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

      /* Story cards animation */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".about-story-card"),
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".about-story-wrap"),
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      /* Founder card animation */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".founder-elem"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".founder-card"),
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full bg-[#030303] overflow-hidden py-24 md:py-36 border-t border-neutral-800/70"
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-teal-500/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-sky-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 space-y-14 sm:space-y-20 md:space-y-28">
        {/* ═══════════════════════════════════════════════════════════ */}
        {/* SECTION A: About Iragu Story & Philosophy                   */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left: Heading & Subheading */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5 lg:sticky lg:top-32">
            <div className="about-head-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/20 bg-teal-950/30 text-teal-400 text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              About Iragu Events
            </div>

            <h2 className="about-head-elem text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
              {about.heading}
            </h2>

            <p className="about-head-elem text-base sm:text-lg md:text-xl text-teal-400 font-medium leading-relaxed">
              {about.subheading}
            </p>

            <div className="about-head-elem pt-2">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-2">
                Brand Signature
              </span>
              <p className="text-sm font-mono text-neutral-300">
                {siteContent.brand.signature}
              </p>
            </div>
          </div>

          {/* Right: Narrative Story Cards */}
          <div className="lg:col-span-7 space-y-6 about-story-wrap">
            {/* Card 1: The Challenge */}
            <div className="about-story-card p-7 md:p-8 rounded-3xl border border-neutral-800/80 bg-neutral-950/70 backdrop-blur-md space-y-4">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-white">
                Planning an event can be overwhelming.
              </h3>

              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Multiple Vendors",
                  "Multiple Phone Calls",
                  "Multiple Decisions",
                  "Tight Timelines",
                  "Unexpected Challenges",
                ].map((challenge, cIdx) => (
                  <span
                    key={cIdx}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono text-rose-300 bg-rose-950/30 border border-rose-500/20 flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                    {challenge}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 2: The Solution */}
            <div className="about-story-card p-7 md:p-8 rounded-3xl border border-neutral-800/80 bg-neutral-950/70 backdrop-blur-md space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-teal-400 uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span>Our Solution</span>
              </div>

              <h3 className="text-xl md:text-2xl font-serif font-bold text-white">
                Iragu Events was built to simplify that experience.
              </h3>

              <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed">
                We bring planning, creativity, coordination and execution together under one roof — giving people and brands a trusted partner they can rely on.
              </p>
            </div>

            {/* Card 3: The North Star Goal */}
            <div className="about-story-card p-7 md:p-8 rounded-3xl border border-teal-500/30 bg-gradient-to-br from-teal-950/30 via-neutral-950/80 to-neutral-950 space-y-3 shadow-xl">
              <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block font-semibold">
                Today, we continue to build Iragu with one goal:
              </span>

              <p className="text-lg md:text-xl font-serif font-bold text-white leading-relaxed">
                To help people and brands create meaningful, memorable and stress-free events.
              </p>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* SECTION B: Meet the Founder                                 */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="founder-card relative rounded-2xl sm:rounded-3xl border border-neutral-800/90 bg-neutral-950/80 backdrop-blur-md overflow-hidden p-5 sm:p-8 md:p-12 lg:p-16 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-teal-500/5 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
            {/* Founder Profile Badge (4 cols) */}
            <div className="founder-elem lg:col-span-4 aspect-[4/5] bg-neutral-900/90 rounded-2xl overflow-hidden relative flex flex-col justify-between p-5 sm:p-7 border border-neutral-800 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-neutral-950/80 to-teal-950/30 pointer-events-none" />
              <div className="w-56 h-56 border border-teal-500/15 rounded-full absolute -top-10 -right-10 pointer-events-none" />

              {/* Top Monogram / Brand Emblem */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 font-serif font-bold text-2xl shadow-inner">
                  BG
                </div>
                <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest px-3 py-1 rounded-full bg-teal-950/60 border border-teal-500/30">
                  Leadership
                </span>
              </div>

              {/* Bottom Identity Block */}
              <div className="relative z-10 space-y-1.5 pt-12">
                <h4 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-wide">
                  {founder.name}
                </h4>
                <p className="text-xs font-mono text-teal-400 tracking-wider">
                  {founder.role}
                </p>
                <div className="pt-3 flex items-center gap-2 text-xs text-neutral-400 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-teal-400" />
                  <span>{siteContent.brand.contact.location}</span>
                </div>
              </div>
            </div>

            {/* Founder Message & Vision (8 cols) */}
            <div className="founder-elem lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-teal-500/20 bg-teal-950/30 text-teal-400 font-mono text-[11px] uppercase tracking-widest">
                <Quote className="w-3.5 h-3.5" />
                <span>Founder Message</span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
                {founder.heading}
              </h3>

              {/* The Client's 3-Paragraph Founder Message */}
              <div className="space-y-4 border-l-2 border-teal-400/80 pl-6 py-1 bg-neutral-900/30 rounded-r-2xl p-5">
                {founder.paragraphs?.map((para, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-base md:text-lg lg:text-xl text-neutral-200 font-light leading-relaxed"
                  >
                    &ldquo;{para}&rdquo;
                  </p>
                ))}
              </div>

              {/* Founder Closing Line */}
              <div className="pt-2 flex items-center gap-2 text-teal-400 font-serif text-lg font-medium">
                <Sparkles className="w-4 h-4 text-teal-400" />
                <span>{founder.closing}</span>
              </div>

              {/* CTA Action */}
              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-3 bg-teal-500 hover:bg-teal-400 text-black px-8 py-4 font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-lg shadow-teal-500/20"
                >
                  <span>{founder.cta}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <span className="text-xs text-neutral-400 font-mono tracking-wider uppercase">
                  Single Point of Contact • Complete Responsibility
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
