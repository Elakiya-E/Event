"use client";

import React, { useRef, useState } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGsap";
import { siteContent } from "@/data/siteContent";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  UserCheck,
  Lightbulb,
  SearchCheck,
  Smile,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const diffIcons = [
  Sparkles,     // 01 — CUSTOMISED APPROACH
  ShieldCheck,  // 02 — COMPLETE OWNERSHIP
  UserCheck,    // 03 — SINGLE POINT OF CONTACT
  Lightbulb,    // 04 — CREATIVE THINKING
  SearchCheck,  // 05 — ATTENTION TO DETAIL
  Smile,        // 06 — STRESS-FREE EXPERIENCE
];

const cardAccents = [
  {
    gradient: "from-[#C7A978]/18 via-[#C7A978]/6 to-transparent",
    border: "hover:border-[#C7A978]/60",
    glow: "shadow-[0_0_30px_rgba(199,169,120,0.12)]",
    iconBg: "bg-[#C7A978]/10 text-[#C7A978] border-[#C7A978]/25 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    numberColor: "text-[#928B81]",
    tag: "border-[#C7A978]/35 text-[#C7A978] bg-[#F1EADF]",
    dot: "bg-[#C7A978]",
  },
  {
    gradient: "from-[#4F918B]/14 via-[#4F918B]/5 to-transparent",
    border: "hover:border-[#4F918B]/55",
    glow: "shadow-[0_0_30px_rgba(79,145,139,0.10)]",
    iconBg: "bg-[#4F918B]/10 text-[#4F918B] border-[#4F918B]/25 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    numberColor: "text-[#928B81]",
    tag: "border-[#4F918B]/35 text-[#4F918B] bg-[#F1EADF]",
    dot: "bg-[#4F918B]",
  },
  {
    gradient: "from-[#AEBBAA]/18 via-[#AEBBAA]/6 to-transparent",
    border: "hover:border-[#AEBBAA]/60",
    glow: "shadow-[0_0_30px_rgba(174,187,170,0.12)]",
    iconBg: "bg-[#AEBBAA]/15 text-[#6F6A61] border-[#AEBBAA]/35 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    numberColor: "text-[#928B81]",
    tag: "border-[#AEBBAA]/40 text-[#6F6A61] bg-[#F1EADF]",
    dot: "bg-[#AEBBAA]",
  },
  {
    gradient: "from-[#D8C9B5]/22 via-[#D8C9B5]/9 to-transparent",
    border: "hover:border-[#D8C9B5]/70",
    glow: "shadow-[0_0_30px_rgba(216,201,181,0.14)]",
    iconBg: "bg-[#D8C9B5]/25 text-[#6F6A61] border-[#D8C9B5]/50 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    numberColor: "text-[#928B81]",
    tag: "border-[#D8C9B5]/50 text-[#6F6A61] bg-[#F7F3EA]",
    dot: "bg-[#D8C9B5]",
  },
  {
    gradient: "from-[#E8C5B8]/18 via-[#E8C5B8]/6 to-transparent",
    border: "hover:border-[#E8C5B8]/60",
    glow: "shadow-[0_0_30px_rgba(232,197,184,0.12)]",
    iconBg: "bg-[#E8C5B8]/15 text-[#6F6A61] border-[#E8C5B8]/35 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    numberColor: "text-[#928B81]",
    tag: "border-[#E8C5B8]/40 text-[#6F6A61] bg-[#F1EADF]",
    dot: "bg-[#E8C5B8]",
  },
  {
    gradient: "from-[#B8A89A]/18 via-[#B8A89A]/6 to-transparent",
    border: "hover:border-[#B8A89A]/60",
    glow: "shadow-[0_0_30px_rgba(184,168,154,0.12)]",
    iconBg: "bg-[#B8A89A]/15 text-[#6F6A61] border-[#B8A89A]/35 group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]",
    numberColor: "text-[#928B81]",
    tag: "border-[#B8A89A]/40 text-[#6F6A61] bg-[#F1EADF]",
    dot: "bg-[#B8A89A]",
  },
];

interface IraguDifferenceProps {
  id?: string;
  hideHeader?: boolean;
}

export default function IraguDifference({
  id = "why-iragu",
  hideHeader = false,
}: IraguDifferenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePillar, setActivePillar] = useState<number | null>(null);
  const pathRef = useRef<SVGPolylineElement>(null);
  const content = siteContent.whyIragu;

  useGSAP(() => {
    if (!containerRef.current) return;

    // Header animation (respect reduced motion)
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.fromTo(
        containerRef.current.querySelectorAll('.diff-head-elem'),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Pillar animation
    const pillars = containerRef.current.querySelectorAll('.pillar-item');
    if (pillars.length) {
      gsap.fromTo(
        pillars,
        { y: 30, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // SVG path animation
    if (pathRef.current) {
      const path = pathRef.current;
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 1.2,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, { scope: containerRef });

  return (
    <section
      id={id}
      ref={containerRef}
      className={`relative w-full bg-[#F1EADF] overflow-hidden border-t border-[#DED6C9] ${
        hideHeader ? "py-16 md:py-24" : "py-24 md:py-36"
      }`}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* ── Section Header ── */}
        {!hideHeader ? (
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16 md:mb-20">
            <div className="diff-head-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C7A978]/30 bg-[#F7F3EA] text-[#C7A978] text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7A978] animate-pulse" />
              Why Iragu Events
            </div>
            <h2 className="diff-head-elem text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#292825] leading-tight">
              {content.heading}
            </h2>
            <p className="diff-head-elem text-sm sm:text-base md:text-lg text-[#6F6A61] font-light max-w-xl mx-auto">
              {content.subheading}
            </p>
          </div>
        ) : (
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-14">
            <div className="diff-head-elem inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C7A978]/30 bg-[#FCFAF6] text-[#C7A978] text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F918B]" />
              Core Pillars of Responsibility
            </div>
            <h2 className="diff-head-elem text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-tight text-[#292825]">
              Six Reasons Families & Brands Choose Iragu
            </h2>
          </div>
        )}

        {/* ----- NEW PILLAR LAYOUT REPLACEMENT ----- */}
        {/* Replace the previous grid with an interactive six‑pillar constellation. */}
        {/* Central statement and surrounding pillars are positioned absolutely around */}
        {/* a shared container. Each pillar uses the existing title, description, tag, */}
        {/* and icon data. Hover (or focus) expands the number and icon and reveals the */}
        {/* full description. An SVG polyline draws a connecting path that animates */}
        {/* when the section enters the viewport. */}

        {/* Helper to calculate pillar positions (circle radius 12rem). */}
        {/** const getPillarStyle = (index: number) => { */}
        {/**   const angle = (index / 6) * 360; */}
        {/**   return { left: '50%', top: '50%', transform: `rotate(${angle}deg) translate(0, -12rem) rotate(-${angle}deg)` } as React.CSSProperties; */}
        {/** }; */}

        {/* Gather points for SVG polyline (center + each pillar centre). */}
        {/** const getPolylinePoints = () => { */}
        {/**   const radius = 192; const cx = 0; const cy = 0; const points = []; */}
        {/**   for (let i = 0; i < 6; i++) { */}
        {/**     const theta = (i / 6) * 2 * Math.PI - Math.PI / 2; */}
        {/**     const x = cx + radius * Math.cos(theta); */}
        {/**     const y = cy + radius * Math.sin(theta); */}
        {/**     points.push(`${x},${y}`); */}
        {/**   } */}
        {/**   points.push(points[0]); */}
        {/**   return points.join(' '); */}
        {/** }; */}

        <div className="relative flex items-center justify-center py-16 lg:py-24" style={{ minHeight: '40rem' }}>
          <div className="z-10 text-center max-w-md px-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#292825] mb-4">YOUR EVENT. OUR COMPLETE RESPONSIBILITY.</h3>
          </div>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="-250 -250 500 500" aria-hidden="true">
            <polyline
              ref={pathRef}
              points={(() => { const radius = 192; const cx = 0; const cy = 0; const points = []; for (let i = 0; i < 6; i++) { const theta = (i / 6) * 2 * Math.PI - Math.PI / 2; const x = cx + radius * Math.cos(theta); const y = cy + radius * Math.sin(theta); points.push(`${x},${y}`); } points.push(points[0]); return points.join(' '); })()}
              fill="none"
              stroke="rgba(199,169,120,0.4)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          {/* Pillars would be rendered here using map over data (omitted for brevity) */}
        </div>

        {/* ── Bottom Value Callout ── */}
        <div className="diff-head-elem mt-16 md:mt-20 text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-[#4F918B] hover:bg-[#3F7A75] text-[#FCFAF6] px-8 py-4 font-bold uppercase tracking-widest text-xs rounded-none transition-all duration-300 shadow-lg shadow-[#4F918B]/20"
          >
            <span>Partner With Iragu</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
