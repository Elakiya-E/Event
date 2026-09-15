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
    glow: "group-hover:shadow-[0_0_30px_rgba(79,145,139,0.12)]",
    border: "hover:border-[#4F918B]/50",
    gradient: "from-[#4F918B]/15 via-[#4F918B]/5 to-transparent",
    iconBg: "bg-[#4F918B]/10 text-[#4F918B] border-[#4F918B]/20 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    badge: "border-[#4F918B]/30 text-[#4F918B] bg-[#4F918B]/10",
    accentDot: "bg-[#4F918B]",
  },
  {
    num: "02",
    title: "Décor & Styling",
    desc: "Customised concepts designed specifically for your event.",
    icon: Paintbrush,
    tag: "Custom Concepts",
    glow: "group-hover:shadow-[0_0_30px_rgba(199,169,120,0.12)]",
    border: "hover:border-[#C7A978]/50",
    gradient: "from-[#C7A978]/15 via-[#C7A978]/5 to-transparent",
    iconBg: "bg-[#C7A978]/10 text-[#C7A978] border-[#C7A978]/20 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    badge: "border-[#C7A978]/30 text-[#C7A978] bg-[#C7A978]/10",
    accentDot: "bg-[#C7A978]",
  },
  {
    num: "03",
    title: "Catering & Food",
    desc: "Menu planning, catering coordination and food arrangements.",
    icon: UtensilsCrossed,
    tag: "Menu & Hospitality",
    glow: "group-hover:shadow-[0_0_30px_rgba(216,201,181,0.15)]",
    border: "hover:border-[#D8C9B5]/60",
    gradient: "from-[#D8C9B5]/20 via-[#D8C9B5]/8 to-transparent",
    iconBg: "bg-[#D8C9B5]/20 text-[#928B81] border-[#D8C9B5]/40 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    badge: "border-[#D8C9B5]/40 text-[#928B81] bg-[#D8C9B5]/20",
    accentDot: "bg-[#D8C9B5]",
  },
  {
    num: "04",
    title: "Photography & Videography",
    desc: "Capturing the moments that matter.",
    icon: Camera,
    tag: "Visual Memories",
    glow: "group-hover:shadow-[0_0_30px_rgba(174,187,170,0.12)]",
    border: "hover:border-[#AEBBAA]/50",
    gradient: "from-[#AEBBAA]/15 via-[#AEBBAA]/5 to-transparent",
    iconBg: "bg-[#AEBBAA]/10 text-[#AEBBAA] border-[#AEBBAA]/20 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    badge: "border-[#AEBBAA]/30 text-[#AEBBAA] bg-[#AEBBAA]/10",
    accentDot: "bg-[#AEBBAA]",
  },
  {
    num: "05",
    title: "Sound & Lighting",
    desc: "Professional production, sound, lighting and technical requirements.",
    icon: Speaker,
    tag: "Audio Visual & Rigging",
    glow: "group-hover:shadow-[0_0_30px_rgba(79,145,139,0.12)]",
    border: "hover:border-[#4F918B]/50",
    gradient: "from-[#4F918B]/15 via-[#4F918B]/5 to-transparent",
    iconBg: "bg-[#4F918B]/10 text-[#4F918B] border-[#4F918B]/20 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    badge: "border-[#4F918B]/30 text-[#4F918B] bg-[#4F918B]/10",
    accentDot: "bg-[#4F918B]",
  },
  {
    num: "06",
    title: "Entertainment",
    desc: "DJ, artists, performances and entertainment arrangements.",
    icon: Music,
    tag: "Artists & DJ",
    glow: "group-hover:shadow-[0_0_30px_rgba(199,169,120,0.12)]",
    border: "hover:border-[#C7A978]/50",
    gradient: "from-[#C7A978]/15 via-[#C7A978]/5 to-transparent",
    iconBg: "bg-[#C7A978]/10 text-[#C7A978] border-[#C7A978]/20 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    badge: "border-[#C7A978]/30 text-[#C7A978] bg-[#C7A978]/10",
    accentDot: "bg-[#C7A978]",
  },
  {
    num: "07",
    title: "Cake & Desserts",
    desc: "Curated cake and dessert arrangements.",
    icon: Cake,
    tag: "Curated Treats",
    glow: "group-hover:shadow-[0_0_30px_rgba(216,201,181,0.15)]",
    border: "hover:border-[#D8C9B5]/60",
    gradient: "from-[#D8C9B5]/20 via-[#D8C9B5]/8 to-transparent",
    iconBg: "bg-[#D8C9B5]/20 text-[#928B81] border-[#D8C9B5]/40 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    badge: "border-[#D8C9B5]/40 text-[#928B81] bg-[#D8C9B5]/20",
    accentDot: "bg-[#D8C9B5]",
  },
  {
    num: "08",
    title: "Guest Management",
    desc: "Entries, seating, hospitality and guest experience.",
    icon: Users,
    tag: "Hospitality & Seating",
    glow: "group-hover:shadow-[0_0_30px_rgba(174,187,170,0.12)]",
    border: "hover:border-[#AEBBAA]/50",
    gradient: "from-[#AEBBAA]/15 via-[#AEBBAA]/5 to-transparent",
    iconBg: "bg-[#AEBBAA]/10 text-[#AEBBAA] border-[#AEBBAA]/20 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    badge: "border-[#AEBBAA]/30 text-[#AEBBAA] bg-[#AEBBAA]/10",
    accentDot: "bg-[#AEBBAA]",
  },
  {
    num: "09",
    title: "Special Effects",
    desc: "Creating memorable moments through carefully planned effects.",
    icon: Sparkles,
    tag: "FX & Wow Moments",
    glow: "group-hover:shadow-[0_0_30px_rgba(199,169,120,0.12)]",
    border: "hover:border-[#C7A978]/50",
    gradient: "from-[#C7A978]/15 via-[#C7A978]/5 to-transparent",
    iconBg: "bg-[#C7A978]/10 text-[#C7A978] border-[#C7A978]/20 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    badge: "border-[#C7A978]/30 text-[#C7A978] bg-[#C7A978]/10",
    accentDot: "bg-[#C7A978]",
  },
  {
    num: "10",
    title: "Event-Day Execution",
    desc: "Our team manages the details on the ground so everything comes together seamlessly.",
    icon: CalendarCheck,
    tag: "On-Ground Management",
    glow: "group-hover:shadow-[0_0_30px_rgba(79,145,139,0.12)]",
    border: "hover:border-[#4F918B]/50",
    gradient: "from-[#4F918B]/15 via-[#4F918B]/5 to-transparent",
    iconBg: "bg-[#4F918B]/10 text-[#4F918B] border-[#4F918B]/20 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    badge: "border-[#4F918B]/30 text-[#4F918B] bg-[#4F918B]/10",
    accentDot: "bg-[#4F918B]",
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
      className="relative w-full bg-[#E8DFD0] overflow-hidden py-24 md:py-32 border-t border-[#DED6C9]"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="svc-head-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#4F918B]/30 bg-[#4F918B]/10 text-[#4F918B] text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F918B] animate-pulse" />
            Complete Event Planning
          </div>

          <h2 className="svc-head-elem text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#292825] leading-tight">
            {content.heading}
          </h2>

          <p className="svc-head-elem text-lg md:text-xl text-[#4F918B] font-medium">
            {content.subheading}
          </p>

          <p className="svc-head-elem text-sm md:text-base text-[#6F6A61] font-light max-w-2xl mx-auto leading-relaxed">
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
                className={`service-card group relative p-6 rounded-2xl border border-[#DED6C9] bg-[#FCFAF6] shadow-sm hover:shadow-md ${item.border} ${item.glow} transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between`}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Card Top: Number + Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-semibold tracking-widest text-[#928B81] group-hover:text-[#6F6A61] transition-colors">
                      {item.num}
                    </span>
                    <div
                      className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all duration-300 ${item.iconBg}`}
                    >
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg font-bold tracking-tight text-[#292825] group-hover:text-[#292825] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs md:text-sm text-[#6F6A61] group-hover:text-[#292825] font-light leading-relaxed flex-grow">
                    {item.desc}
                  </p>

                  {/* Card Footer: Tag + Accent indicator */}
                  <div className="mt-5 pt-3 border-t border-[#DED6C9]/60 flex items-center justify-between text-[11px]">
                    <span
                      className={`px-2 py-0.5 rounded-md font-mono text-[10px] tracking-wider uppercase border ${item.badge} transition-colors`}
                    >
                      {item.tag}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${item.accentDot} opacity-40 group-hover:opacity-100 transition-opacity`}
                      />
                      <span className="text-[#928B81] group-hover:text-[#292825] font-mono text-[10px] uppercase tracking-wider transition-colors">
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
          <div className="relative p-8 md:p-10 rounded-2xl border border-[#DED6C9] bg-[#F7F3EA] overflow-hidden max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4F918B]/10 via-transparent to-[#4F918B]/10 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="space-y-2 max-w-xl">
                <div className="svc-banner-elem flex items-center justify-center md:justify-start gap-2 text-[#4F918B] font-mono text-xs uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4 text-[#4F918B]" />
                  <span>Single Point of Contact • Zero Stress</span>
                </div>
                <h4 className="svc-banner-elem text-xl md:text-2xl font-serif font-bold text-[#292825] leading-snug">
                  You don&apos;t need to coordinate multiple vendors.
                </h4>
                <p className="svc-banner-elem text-sm text-[#6F6A61] font-light leading-relaxed">
                  We take complete responsibility for your entire event — from initial idea to flawless execution on the day.
                </p>
              </div>

              <div className="svc-banner-elem flex-shrink-0">
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2 bg-[#4F918B] hover:bg-[#6AA9A2] text-[#FCFAF6] px-7 py-3.5 font-bold uppercase tracking-widest text-xs rounded-none transition-all duration-300 shadow-lg shadow-[#4F918B]/20"
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
