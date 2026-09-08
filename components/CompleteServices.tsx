"use client";

import React, { useRef } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGsap";
import { siteContent } from "@/data/siteContent";
import Link from "next/link";
import {
  ClipboardList,
  Paintbrush,
  UtensilsCrossed,
  Camera,
  Speaker,
  Music,
  Cake,
  Users,
  Sparkles,
  CalendarCheck,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/* 10 Services configuration with icons and tailored color accents   */
/* ------------------------------------------------------------------ */
const serviceItems = [
  {
    num: "01",
    title: "Planning & Coordination",
    desc: "Understanding your requirements and creating the complete execution plan.",
    icon: ClipboardList,
    tag: "Strategy & Roadmap",
    glow: "group-hover:shadow-[0_0_30px_rgba(20,184,166,0.18)]",
    border: "hover:border-teal-500/50",
    gradient: "from-teal-500/15 via-teal-900/5 to-transparent",
    iconBg: "bg-teal-500/10 text-teal-400 border-teal-500/20 group-hover:bg-teal-500 group-hover:text-black",
    badge: "border-teal-500/30 text-teal-300 bg-teal-950/40",
    accentDot: "bg-teal-400",
  },
  {
    num: "02",
    title: "Décor & Styling",
    desc: "Customised concepts designed specifically for your event.",
    icon: Paintbrush,
    tag: "Custom Concepts",
    glow: "group-hover:shadow-[0_0_30px_rgba(244,63,94,0.18)]",
    border: "hover:border-rose-500/50",
    gradient: "from-rose-500/15 via-rose-900/5 to-transparent",
    iconBg: "bg-rose-500/10 text-rose-400 border-rose-500/20 group-hover:bg-rose-500 group-hover:text-black",
    badge: "border-rose-500/30 text-rose-300 bg-rose-950/40",
    accentDot: "bg-rose-400",
  },
  {
    num: "03",
    title: "Catering & Food",
    desc: "Menu planning, catering coordination and food arrangements.",
    icon: UtensilsCrossed,
    tag: "Menu & Hospitality",
    glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.18)]",
    border: "hover:border-amber-500/50",
    gradient: "from-amber-500/15 via-amber-900/5 to-transparent",
    iconBg: "bg-amber-500/10 text-amber-400 border-amber-500/20 group-hover:bg-amber-500 group-hover:text-black",
    badge: "border-amber-500/30 text-amber-300 bg-amber-950/40",
    accentDot: "bg-amber-400",
  },
  {
    num: "04",
    title: "Photography & Videography",
    desc: "Capturing the moments that matter.",
    icon: Camera,
    tag: "Visual Memories",
    glow: "group-hover:shadow-[0_0_30px_rgba(14,165,233,0.18)]",
    border: "hover:border-sky-500/50",
    gradient: "from-sky-500/15 via-sky-900/5 to-transparent",
    iconBg: "bg-sky-500/10 text-sky-400 border-sky-500/20 group-hover:bg-sky-500 group-hover:text-black",
    badge: "border-sky-500/30 text-sky-300 bg-sky-950/40",
    accentDot: "bg-sky-400",
  },
  {
    num: "05",
    title: "Sound & Lighting",
    desc: "Professional production, sound, lighting and technical requirements.",
    icon: Speaker,
    tag: "Audio Visual & Rigging",
    glow: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.18)]",
    border: "hover:border-violet-500/50",
    gradient: "from-violet-500/15 via-violet-900/5 to-transparent",
    iconBg: "bg-violet-500/10 text-violet-400 border-violet-500/20 group-hover:bg-violet-500 group-hover:text-black",
    badge: "border-violet-500/30 text-violet-300 bg-violet-950/40",
    accentDot: "bg-violet-400",
  },
  {
    num: "06",
    title: "Entertainment",
    desc: "DJ, artists, performances and entertainment arrangements.",
    icon: Music,
    tag: "Artists & DJ",
    glow: "group-hover:shadow-[0_0_30px_rgba(217,70,239,0.18)]",
    border: "hover:border-fuchsia-500/50",
    gradient: "from-fuchsia-500/15 via-fuchsia-900/5 to-transparent",
    iconBg: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20 group-hover:bg-fuchsia-500 group-hover:text-black",
    badge: "border-fuchsia-500/30 text-fuchsia-300 bg-fuchsia-950/40",
    accentDot: "bg-fuchsia-400",
  },
  {
    num: "07",
    title: "Cake & Desserts",
    desc: "Curated cake and dessert arrangements.",
    icon: Cake,
    tag: "Curated Treats",
    glow: "group-hover:shadow-[0_0_30px_rgba(244,63,94,0.18)]",
    border: "hover:border-pink-500/50",
    gradient: "from-pink-500/15 via-pink-900/5 to-transparent",
    iconBg: "bg-pink-500/10 text-pink-400 border-pink-500/20 group-hover:bg-pink-500 group-hover:text-black",
    badge: "border-pink-500/30 text-pink-300 bg-pink-950/40",
    accentDot: "bg-pink-400",
  },
  {
    num: "08",
    title: "Guest Management",
    desc: "Entries, seating, hospitality and guest experience.",
    icon: Users,
    tag: "Hospitality & Seating",
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.18)]",
    border: "hover:border-emerald-500/50",
    gradient: "from-emerald-500/15 via-emerald-900/5 to-transparent",
    iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-black",
    badge: "border-emerald-500/30 text-emerald-300 bg-emerald-950/40",
    accentDot: "bg-emerald-400",
  },
  {
    num: "09",
    title: "Special Effects",
    desc: "Creating memorable moments through carefully planned effects.",
    icon: Sparkles,
    tag: "FX & Wow Moments",
    glow: "group-hover:shadow-[0_0_30px_rgba(234,179,8,0.18)]",
    border: "hover:border-yellow-500/50",
    gradient: "from-yellow-500/15 via-yellow-900/5 to-transparent",
    iconBg: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20 group-hover:bg-yellow-500 group-hover:text-black",
    badge: "border-yellow-500/30 text-yellow-300 bg-yellow-950/40",
    accentDot: "bg-yellow-400",
  },
  {
    num: "10",
    title: "Event-Day Execution",
    desc: "Our team manages the details on the ground so everything comes together seamlessly.",
    icon: CalendarCheck,
    tag: "On-Ground Management",
    glow: "group-hover:shadow-[0_0_30px_rgba(20,184,166,0.18)]",
    border: "hover:border-teal-500/50",
    gradient: "from-teal-500/15 via-teal-900/5 to-transparent",
    iconBg: "bg-teal-500/10 text-teal-400 border-teal-500/20 group-hover:bg-teal-500 group-hover:text-black",
    badge: "border-teal-500/30 text-teal-300 bg-teal-950/40",
    accentDot: "bg-teal-400",
  },
];

export default function CompleteServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const content = siteContent.completeServices;

  useGSAP(
    () => {
      if (!containerRef.current) return;

      /* Header animation */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".svc-head-elem"),
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

      /* Service cards stagger */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".service-card"),
        { y: 35, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".service-grid"),
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      /* Banner animation */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".svc-banner-elem"),
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".svc-banner"),
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
      id="services"
      ref={containerRef}
      className="relative w-full bg-[#030303] overflow-hidden py-24 md:py-32 border-t border-neutral-800/60"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-teal-900/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="svc-head-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/20 bg-teal-950/30 text-teal-400 text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            Complete Event Planning
          </div>

          <h2 className="svc-head-elem text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
            {content.heading}
          </h2>

          <p className="svc-head-elem text-lg md:text-xl text-teal-400 font-medium">
            {content.subheading}
          </p>

          <p className="svc-head-elem text-sm md:text-base text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
            {content.intro}
          </p>
        </div>

        {/* ── 10 Service Cards Grid ── */}
        <div className="service-grid mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5">
          {serviceItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`service-card group relative p-6 rounded-2xl border border-neutral-800/80 bg-neutral-950/60 backdrop-blur-md ${item.border} ${item.glow} transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between`}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Card Top: Number + Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-semibold tracking-widest text-neutral-500 group-hover:text-neutral-400 transition-colors">
                      {item.num}
                    </span>
                    <div
                      className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all duration-300 ${item.iconBg}`}
                    >
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs md:text-sm text-neutral-400 group-hover:text-neutral-300 font-light leading-relaxed flex-grow">
                    {item.desc}
                  </p>

                  {/* Card Footer: Tag + Accent indicator */}
                  <div className="mt-5 pt-3 border-t border-neutral-800/60 flex items-center justify-between text-[11px]">
                    <span
                      className={`px-2 py-0.5 rounded-md font-mono text-[10px] tracking-wider uppercase border ${item.badge} transition-colors`}
                    >
                      {item.tag}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${item.accentDot} opacity-40 group-hover:opacity-100 transition-opacity`}
                      />
                      <span className="text-neutral-500 group-hover:text-neutral-300 font-mono text-[10px] uppercase tracking-wider transition-colors">
                        Included
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Single Point of Contact / Closing Trust Banner ── */}
        <div className="svc-banner mt-16 md:mt-20">
          <div className="relative p-8 md:p-10 rounded-2xl border border-neutral-800/80 bg-neutral-900/40 backdrop-blur-md overflow-hidden max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-transparent to-teal-500/10 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="space-y-2 max-w-xl">
                <div className="svc-banner-elem flex items-center justify-center md:justify-start gap-2 text-teal-400 font-mono text-xs uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  <span>Single Point of Contact • Zero Stress</span>
                </div>
                <h4 className="svc-banner-elem text-xl md:text-2xl font-serif font-bold text-white leading-snug">
                  You don&apos;t need to coordinate multiple vendors.
                </h4>
                <p className="svc-banner-elem text-sm text-neutral-300 font-light leading-relaxed">
                  We take complete responsibility for your entire event — from initial idea to flawless execution on the day.
                </p>
              </div>

              <div className="svc-banner-elem flex-shrink-0">
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-black px-7 py-3.5 font-bold uppercase tracking-widest text-xs rounded-none transition-all duration-300 shadow-lg shadow-teal-500/20"
                >
                  <span>Plan Your Event</span>
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
