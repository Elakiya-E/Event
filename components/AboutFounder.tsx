"use client";

import React, { useRef } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGsap";
import { siteContent } from "@/data/siteContent";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  MapPin,
  Quote,
  Sparkles,
  HeartHandshake,
  Phone,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutFounder() {
  const containerRef = useRef<HTMLDivElement>(null);
  const about = siteContent.about;
  const founder = siteContent.founder;

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const dur = prefersReduced ? 0 : 0.8;
      const stag = prefersReduced ? 0 : 0.1;

      /* Header / brand story animation */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".about-head-elem"),
        { y: prefersReduced ? 0 : 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: dur,
          stagger: stag,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      /* Photo composition animation */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".about-photo-elem"),
        { y: prefersReduced ? 0 : 40, opacity: 0, scale: prefersReduced ? 1 : 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: prefersReduced ? 0 : 1,
          stagger: prefersReduced ? 0 : 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".about-photo-wrap"),
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      /* Story cards animation */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".about-story-card"),
        { y: prefersReduced ? 0 : 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: prefersReduced ? 0 : 0.7,
          stagger: prefersReduced ? 0 : 0.12,
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
        { y: prefersReduced ? 0 : 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: dur,
          stagger: stag,
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

  const challenges = [
    "Multiple Vendors",
    "Multiple Phone Calls",
    "Multiple Decisions",
    "Tight Timelines",
    "Unexpected Challenges",
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full bg-[#F7F3EA] overflow-hidden py-20 md:py-28 border-t border-[#DED6C9]"
    >
      {/* Background warm ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[#C7A978]/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-[#4F918B]/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 space-y-16 sm:space-y-20 md:space-y-28">
        {/* ═══════════════════════════════════════════════════════════ */}
        {/* SECTION A: About Iragu Story & Philosophy                 */}
        {/* ═══════════════════════════════════════════════════════════ */}

        {/* --- Row 1: Asymmetric Editorial Hero — Brand Story + Visual Storytelling Composition --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT — Brand Story */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Label */}
            <div className="about-head-elem inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#C7A978]/40 bg-[#C7A978]/10 text-[#C7A978] text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7A978] animate-pulse" />
              ABOUT IRAGU EVENTS
            </div>

            {/* Main Heading with Teal & Champagne Highlights */}
            <h1 className="about-head-elem text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] font-serif font-bold tracking-tight text-[#292825] leading-[1.12]">
              We Started With
              <br />a <span className="text-[#4F918B] italic font-normal">Simple</span>{" "}
              <span className="text-[#C7A978] italic font-normal">Belief</span>.
            </h1>

            {/* Supporting Heading */}
            <p className="about-head-elem text-lg sm:text-xl md:text-2xl font-serif text-[#4F918B] font-semibold leading-snug">
              Events Should Be Enjoyed — Not Stressfully Managed.
            </p>

            {/* Fine Champagne / Teal Gradient Rule */}
            <div className="about-head-elem w-20 h-[2px] bg-gradient-to-r from-[#C7A978] via-[#4F918B]/60 to-transparent" />

            {/* Description with Comfortable Line Spacing */}
            <p className="about-head-elem text-base sm:text-lg text-[#6F6A61] font-light leading-relaxed max-w-xl">
              We bring planning, creativity, coordination and execution together
              under one roof — giving people and brands a trusted partner they
              can rely on.
            </p>

            {/* Brand Signature with Elegant Script / Italic Typography */}
            <div className="about-head-elem pt-1 pl-4 border-l-2 border-[#C7A978]/60 space-y-1">
              <span className="text-[10px] font-mono text-[#C7A978] uppercase tracking-[0.22em] font-bold block">
                Brand Signature
              </span>
              <p className="text-base sm:text-lg font-serif italic text-[#292825] leading-snug">
                &ldquo;Your Vision. Our Creativity. Complete Event Responsibility.&rdquo;
              </p>
            </div>

            {/* Two Action CTAs */}
            <div className="about-head-elem flex flex-wrap items-center gap-3.5 pt-3">
              <a
                href="#the-story"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#4F918B] hover:bg-[#3F7A75] text-[#FCFAF6] font-mono font-bold uppercase tracking-widest text-[11px] sm:text-xs transition-all duration-300 shadow-lg shadow-[#4F918B]/15 active:scale-95"
              >
                <span>EXPLORE OUR STORY</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 border border-[#C7A978]/60 bg-transparent hover:bg-[#C7A978]/10 text-[#292825] font-mono font-bold uppercase tracking-widest text-[11px] sm:text-xs transition-all duration-300 active:scale-95"
              >
                <span>PLAN YOUR EVENT</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* RIGHT — Visual Storytelling Composition (4 Separate Event Photographs) */}
          <div className="lg:col-span-6 about-photo-wrap relative flex flex-col justify-center">
            {/* Storytelling Element Header: 01 / THE IRAGU STORY */}
            <div className="about-photo-elem flex items-center justify-between pb-3 border-b border-[#DED6C9]/80 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4F918B]" />
                <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#C7A978] uppercase font-bold">
                  01 / THE IRAGU STORY
                </span>
              </div>
              <span className="text-xs font-serif italic text-[#6F6A61] hidden sm:inline-block">
                &ldquo;Every Celebration Has a Story.&rdquo;
              </span>
            </div>

            {/* Dynamic Asymmetric 4-Photo Collage */}
            <div className="relative w-full max-w-[540px] h-[460px] sm:h-[500px] mx-auto lg:mx-0">
              {/* 1. Large Primary Photograph: Beautiful Event Venue / Celebration Setup */}
              <div className="about-photo-elem group/photo absolute top-0 left-0 w-[58%] h-[68%] rounded-[2rem] overflow-hidden border-2 border-[#C7A978]/35 shadow-xl bg-[#F1EADF] z-10">
                <Image
                  src="/images/hero1.png"
                  alt="Celebration venue and stage setup by Iragu Events"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover/photo:scale-105"
                  sizes="(max-width: 768px) 300px, 340px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#292825]/45 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 bg-[#FCFAF6]/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[9px] font-mono uppercase tracking-wider text-[#9E6554] font-bold">
                  Celebration Stagecraft
                </span>
              </div>

              {/* 2. Overlapping Top-Right: Behind-The-Scenes Cultural & Event Coordination */}
              <div className="about-photo-elem group/photo absolute top-4 right-0 w-[45%] h-[48%] rounded-2xl overflow-hidden border-2 border-[#4F918B]/35 shadow-xl bg-[#F1EADF] z-20">
                <Image
                  src="/images/b5.png"
                  alt="Traditional event coordination by Iragu Events"
                  fill
                  className="object-cover transition-transform duration-700 group-hover/photo:scale-105"
                  sizes="(max-width: 768px) 220px, 250px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#292825]/50 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 bg-[#FCFAF6]/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[9px] font-mono uppercase tracking-wider text-[#326964] font-bold">
                  Cultural Coordination
                </span>
              </div>

              {/* 3. Overlapping Bottom-Left: Close-Up Creative Décor & Table Styling */}
              <div className="about-photo-elem group/photo absolute bottom-2 left-6 w-[44%] h-[40%] rounded-2xl overflow-hidden border-2 border-[#D8B5A8]/40 shadow-xl bg-[#FCFAF6] z-30">
                <Image
                  src="/images/hero2.png"
                  alt="Creative décor and floral styling detail"
                  fill
                  className="object-cover transition-transform duration-700 group-hover/photo:scale-105"
                  sizes="(max-width: 768px) 210px, 230px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#292825]/40 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-2.5 left-2.5 bg-[#FCFAF6]/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider text-[#9E6554] font-bold">
                  Bespoke Styling
                </span>
              </div>

              {/* 4. Overlapping Bottom-Right: Complete Celebration with Guests / Festive Atmosphere */}
              <div className="about-photo-elem group/photo absolute bottom-0 right-2 w-[48%] h-[44%] rounded-2xl overflow-hidden border-2 border-[#AEBBAA]/40 shadow-xl bg-[#E8DFD0] z-20">
                <Image
                  src="/images/img1.2.png"
                  alt="Joyful celebration atmosphere by Iragu Events"
                  fill
                  className="object-cover transition-transform duration-700 group-hover/photo:scale-105"
                  sizes="(max-width: 768px) 240px, 260px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#292825]/45 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-2.5 left-2.5 bg-[#FCFAF6]/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider text-[#4D6546] font-bold">
                  Festive Atmosphere
                </span>
              </div>

              {/* Meaningful Storytelling Central Floating Element */}
              <div className="about-photo-elem absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FCFAF6]/95 backdrop-blur-md border border-[#DED6C9] rounded-xl px-4 py-2.5 shadow-2xl z-40 text-center whitespace-nowrap">
                <div className="flex items-center gap-2 justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-[#C7A978]" />
                  <p className="text-xs font-serif italic text-[#292825]">
                    Every Celebration Has a Story.
                  </p>
                </div>
              </div>

              {/* Subtle Decorative Champagne-Gold Marker Lines */}
              <div className="absolute -top-4 right-1/4 w-[1.5px] h-8 bg-[#C7A978]/40 hidden lg:block" />
              <div className="absolute top-1/2 -left-6 w-8 h-[1.5px] bg-[#C7A978]/50 hidden lg:block" />
            </div>
          </div>
        </div>

        {/* --- Row 2: Challenge / Solution / Philosophy Cards --- */}
        <div id="the-story" className="about-story-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: The Challenge */}
          <div className="about-story-card p-7 md:p-8 rounded-2xl border border-[#DED6C9] bg-[#FCFAF6] space-y-4">
            <span className="text-[11px] font-mono text-[#C7A978] uppercase tracking-[0.2em] block font-semibold">
              The Challenge
            </span>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-[#292825]">
              Planning an event can be overwhelming.
            </h3>

            <div className="flex flex-wrap gap-2 pt-1">
              {challenges.map((challenge, cIdx) => (
                <span
                  key={cIdx}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono text-[#6F6A61] bg-[#E8DFD0]/50 border border-[#DED6C9] flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C7A978]" />
                  {challenge}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: The Solution */}
          <div className="about-story-card p-7 md:p-8 rounded-2xl border border-[#DED6C9] bg-[#FCFAF6] space-y-4">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono text-[#4F918B] uppercase tracking-[0.2em]">
              <ShieldCheck className="w-4 h-4 text-[#4F918B]" />
              <span className="font-semibold">Our Solution</span>
            </div>

            <h3 className="text-xl md:text-2xl font-serif font-bold text-[#292825]">
              Iragu Events was built to simplify that experience.
            </h3>

            <p className="text-sm md:text-base text-[#6F6A61] leading-relaxed">
              We bring planning, creativity, coordination and execution together
              under one roof — giving people and brands a trusted partner they
              can rely on.
            </p>

            {/* Champagne divider */}
            <div className="w-12 h-px bg-[#C7A978]/40" />
          </div>

          {/* Card 3: The North Star / Philosophy */}
          <div className="about-story-card relative p-7 md:p-8 rounded-2xl border border-[#C7A978]/25 bg-gradient-to-br from-[#FCFAF6] via-[#F7F3EA] to-[#FCFAF6] space-y-4 md:col-span-2 lg:col-span-1">
            {/* Champagne accent line */}
            <div className="absolute left-0 top-8 bottom-8 w-[3px] rounded-full bg-gradient-to-b from-[#C7A978]/60 via-[#C7A978]/30 to-transparent" />

            <div className="pl-4">
              <span className="text-[11px] font-mono text-[#C7A978] uppercase tracking-[0.2em] block font-semibold">
                Our North Star
              </span>

              <p className="text-xs font-mono text-[#6F6A61] mt-3 uppercase tracking-wider">
                Today, we continue to build Iragu with one goal:
              </p>

              <p className="text-lg md:text-xl font-serif font-bold text-[#292825] leading-relaxed mt-3">
                &ldquo;To help people and brands create meaningful, memorable
                and stress-free events.&rdquo;
              </p>

              <div className="mt-4 flex items-center gap-2 text-[#4F918B]">
                <HeartHandshake className="w-4 h-4" />
                <span className="text-xs font-mono tracking-wider uppercase">
                  Complete Event Responsibility
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* SECTION B: Meet the Founder                               */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="founder-card relative rounded-2xl sm:rounded-3xl border border-[#DED6C9] bg-[#FCFAF6] overflow-hidden p-5 sm:p-8 md:p-12 lg:p-16 shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-[#C7A978]/5 via-transparent to-[#4F918B]/5 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
            {/* Founder Profile Badge (4 cols) */}
            <div className="founder-elem lg:col-span-4 aspect-[4/5] bg-[#E8DFD0]/50 rounded-2xl overflow-hidden relative flex flex-col justify-between p-5 sm:p-7 border border-[#DED6C9] shadow-md">
              <div className="absolute inset-0 bg-gradient-to-t from-[#292825]/10 via-[#F7F3EA]/50 to-[#C7A978]/8 pointer-events-none" />
              <div className="w-56 h-56 border border-[#C7A978]/15 rounded-full absolute -top-10 -right-10 pointer-events-none" />

              {/* Top Monogram / Brand Emblem */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#4F918B]/10 border border-[#4F918B]/25 flex items-center justify-center text-[#4F918B] font-serif font-bold text-2xl shadow-inner">
                  BG
                </div>
                <span className="text-[10px] font-mono text-[#C7A978] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C7A978]/10 border border-[#C7A978]/25">
                  Leadership
                </span>
              </div>

              {/* Bottom Identity Block */}
              <div className="relative z-10 space-y-1.5 pt-12">
                <h4 className="text-2xl md:text-3xl font-serif font-bold text-[#292825] tracking-wide">
                  {founder.name}
                </h4>
                <p className="text-xs font-mono text-[#4F918B] tracking-wider">
                  {founder.role}
                </p>
                <div className="pt-3 flex items-center gap-2 text-xs text-[#6F6A61] font-mono">
                  <MapPin className="w-3.5 h-3.5 text-[#4F918B]" />
                  <span>{siteContent.brand.contact.location}</span>
                </div>
              </div>
            </div>

            {/* Founder Message & Vision (8 cols) */}
            <div className="founder-elem lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C7A978]/25 bg-[#C7A978]/8 text-[#C7A978] font-mono text-[11px] uppercase tracking-widest">
                <Quote className="w-3.5 h-3.5" />
                <span>Founder Message</span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#292825] tracking-tight">
                {founder.heading}
              </h3>

              {/* The Client's 3-Paragraph Founder Message */}
              <div className="space-y-4 border-l-2 border-[#C7A978]/60 pl-6 py-1 bg-[#E8DFD0]/20 rounded-r-2xl p-5">
                {founder.paragraphs?.map((para, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-base md:text-lg lg:text-xl text-[#6F6A61] font-light leading-relaxed"
                  >
                    &ldquo;{para}&rdquo;
                  </p>
                ))}
              </div>

              {/* Founder Closing Line */}
              <div className="pt-2 flex items-center gap-2 text-[#4F918B] font-serif text-lg font-medium">
                <Sparkles className="w-4 h-4 text-[#C7A978]" />
                <span>{founder.closing}</span>
              </div>

              {/* CTA Action */}
              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-[#4F918B] hover:bg-[#3d7a75] text-[#FCFAF6] px-8 py-4 font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-md rounded-lg"
                >
                  <span>{founder.cta}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <span className="text-xs text-[#6F6A61] font-mono tracking-wider uppercase">
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
