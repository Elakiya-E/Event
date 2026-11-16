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
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface PillarItem {
  num: string;
  title: string;
  description: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
}

const pillarsData: PillarItem[] = [
  {
    num: "01",
    title: "CUSTOMISED APPROACH",
    description:
      "Your event is designed around your vision — not a standard template.",
    tag: "Tailored For You",
    icon: Sparkles,
    accentColor: "#C7A978",
    accentBg: "bg-[#C7A978]/10",
    accentBorder: "border-[#C7A978]/35",
    accentText: "text-[#C7A978]",
  },
  {
    num: "02",
    title: "COMPLETE OWNERSHIP",
    description:
      "From planning to execution, we take responsibility for the entire experience.",
    tag: "End-to-End Responsibility",
    icon: ShieldCheck,
    accentColor: "#4F918B",
    accentBg: "bg-[#4F918B]/10",
    accentBorder: "border-[#4F918B]/35",
    accentText: "text-[#4F918B]",
  },
  {
    num: "03",
    title: "SINGLE POINT OF CONTACT",
    description:
      "One trusted team coordinating the different elements of your event.",
    tag: "One Trusted Team",
    icon: UserCheck,
    accentColor: "#AEBBAA",
    accentBg: "bg-[#AEBBAA]/20",
    accentBorder: "border-[#AEBBAA]/50",
    accentText: "text-[#5B7558]",
  },
  {
    num: "04",
    title: "CREATIVE THINKING",
    description:
      "Fresh ideas and creative solutions that make every event unique.",
    tag: "Experience Driven",
    icon: Lightbulb,
    accentColor: "#D8A268",
    accentBg: "bg-[#D8A268]/15",
    accentBorder: "border-[#D8A268]/40",
    accentText: "text-[#BF8241]",
  },
  {
    num: "05",
    title: "ATTENTION TO DETAIL",
    description:
      "Every element is carefully considered to create a seamless experience.",
    tag: "Micro-Precision",
    icon: SearchCheck,
    accentColor: "#4F918B",
    accentBg: "bg-[#4F918B]/10",
    accentBorder: "border-[#4F918B]/35",
    accentText: "text-[#4F918B]",
  },
  {
    num: "06",
    title: "STRESS-FREE EXPERIENCE",
    description:
      "You enjoy your special moments while we take care of everything behind the scenes.",
    tag: "Peace of Mind",
    icon: Smile,
    accentColor: "#C7A978",
    accentBg: "bg-[#C7A978]/10",
    accentBorder: "border-[#C7A978]/35",
    accentText: "text-[#C7A978]",
  },
];

// SVG Connection paths for desktop layout (viewBox 0 0 1100 680)
// Center of hexagon is at (550, 340).
// Left side pillars (0, 1, 2) connect from right edge of pillar to left vertices of hexagon.
// Right side pillars (3, 4, 5) connect from left edge of pillar to right vertices of hexagon.
const desktopSvgPaths = [
  {
    // 01: Top Left -> Top Left of Hexagon
    d: "M 320,110 C 400,110 460,200 480,260",
    start: { x: 320, y: 110 },
    end: { x: 480, y: 260 },
  },
  {
    // 02: Mid Left -> Mid Left of Hexagon
    d: "M 330,340 C 400,340 435,340 460,340",
    start: { x: 330, y: 340 },
    end: { x: 460, y: 340 },
  },
  {
    // 03: Bottom Left -> Bottom Left of Hexagon
    d: "M 320,570 C 400,570 460,480 480,420",
    start: { x: 320, y: 570 },
    end: { x: 480, y: 420 },
  },
  {
    // 04: Top Right -> Top Right of Hexagon
    d: "M 780,110 C 700,110 640,200 620,260",
    start: { x: 780, y: 110 },
    end: { x: 620, y: 260 },
  },
  {
    // 05: Mid Right -> Mid Right of Hexagon
    d: "M 770,340 C 700,340 665,340 640,340",
    start: { x: 770, y: 340 },
    end: { x: 640, y: 340 },
  },
  {
    // 06: Bottom Right -> Bottom Right of Hexagon
    d: "M 780,570 C 700,570 640,480 620,420",
    start: { x: 780, y: 570 },
    end: { x: 620, y: 420 },
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
  const content = siteContent.whyIragu;

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const isReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // 1. Header animations
      if (!isReducedMotion) {
        gsap.fromTo(
          containerRef.current.querySelectorAll(".diff-head-elem"),
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
      }

      // 2. Central hexagon float and subtle orbit ring rotation
      if (!isReducedMotion) {
        gsap.to(".central-hexagon-wrapper", {
          y: -10,
          duration: 3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });

        gsap.to(".central-orbit-ring", {
          rotation: 360,
          transformOrigin: "center center",
          duration: 45,
          ease: "none",
          repeat: -1,
        });
      }

      // 3. SVG Connecting lines progressive draw animation
      const paths = containerRef.current.querySelectorAll<SVGPathElement>(
        ".connecting-path-desktop"
      );
      if (paths.length && !isReducedMotion) {
        paths.forEach((path) => {
          const len = path.getTotalLength();
          gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
        });

        gsap.to(paths, {
          strokeDashoffset: 0,
          duration: 1.4,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".pillars-constellation"),
            start: "top 78%",
            toggleActions: "play none none none",
          },
        });
      }

      // 4. Sequential pillar reveal
      const pillars = containerRef.current.querySelectorAll(".pillar-node");
      if (pillars.length && !isReducedMotion) {
        gsap.fromTo(
          pillars,
          { y: 35, opacity: 0, scale: 0.94 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.75,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current.querySelector(".pillars-constellation"),
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      id={id}
      ref={containerRef}
      className={`relative w-full bg-[#F1EADF] overflow-hidden border-t border-[#DED6C9] ${
        hideHeader ? "py-16 md:py-24" : "py-24 md:py-36"
      }`}
    >
      {/* Decorative ambient background gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C7A978]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-[#4F918B]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* ── Section Header ── */}
        {!hideHeader ? (
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-18 md:mb-20">
            <div className="diff-head-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C7A978]/30 bg-[#F7F3EA] text-[#C7A978] text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase shadow-sm">
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
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
            <div className="diff-head-elem inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C7A978]/30 bg-[#FCFAF6] text-[#C7A978] text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F918B]" />
              Core Pillars of Responsibility
            </div>
            <h2 className="diff-head-elem text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-tight text-[#292825]">
              Six Reasons Families & Brands Choose Iragu
            </h2>
          </div>
        )}

        {/* ── DESKTOP INTERACTIVE COMPOSITION (lg and up) ── */}
        <div className="pillars-constellation hidden lg:block relative w-full max-w-6xl mx-auto h-[680px] my-4">
          {/* Connecting SVG Path Overlay */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 1100 680"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="goldGlowGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#C7A978" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#4F918B" stopOpacity="0.85" />
              </linearGradient>
            </defs>

            {desktopSvgPaths.map((item, index) => {
              const isHovered = activePillar === index;
              return (
                <g key={`path-group-${index}`}>
                  {/* Subtle connection glow path */}
                  <path
                    d={item.d}
                    stroke={
                      isHovered
                        ? pillarsData[index].accentColor
                        : "rgba(199,169,120,0.3)"
                    }
                    strokeWidth={isHovered ? "2.75" : "1.5"}
                    strokeDasharray={isHovered ? "none" : "4 4"}
                    strokeLinecap="round"
                    className="connecting-path-desktop transition-all duration-300"
                  />

                  {/* Start Marker at Pillar edge */}
                  <circle
                    cx={item.start.x}
                    cy={item.start.y}
                    r={isHovered ? "5" : "3.5"}
                    fill={isHovered ? pillarsData[index].accentColor : "#C7A978"}
                    className="transition-all duration-300"
                  />

                  {/* End Marker at Hexagon vertex */}
                  <circle
                    cx={item.end.x}
                    cy={item.end.y}
                    r={isHovered ? "5" : "3.5"}
                    fill={isHovered ? pillarsData[index].accentColor : "#4F918B"}
                    className="transition-all duration-300"
                  />
                </g>
              );
            })}
          </svg>

          {/* ── Central Hexagon Visual (Anchor) ── */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 central-hexagon-wrapper">
            <div className="relative w-[300px] h-[340px] flex items-center justify-center">
              {/* Outer decorative orbit ring */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none central-orbit-ring"
                viewBox="0 0 300 340"
              >
                <circle
                  cx="150"
                  cy="170"
                  r="138"
                  fill="none"
                  stroke="#C7A978"
                  strokeOpacity="0.3"
                  strokeWidth="1.2"
                  strokeDasharray="6 6"
                />
                <circle
                  cx="150"
                  cy="32"
                  r="3.5"
                  fill="#C7A978"
                  stroke="#FCFAF6"
                  strokeWidth="1"
                />
                <circle
                  cx="150"
                  cy="308"
                  r="3.5"
                  fill="#4F918B"
                  stroke="#FCFAF6"
                  strokeWidth="1"
                />
              </svg>

              {/* Hexagon Body */}
              <svg
                className="absolute inset-0 w-full h-full drop-shadow-[0_12px_32px_rgba(41,40,37,0.08)]"
                viewBox="0 0 300 340"
              >
                <polygon
                  points="150,20 270,89 270,251 150,320 30,251 30,89"
                  fill="#FAF6F0"
                  stroke="#C7A978"
                  strokeWidth="1.5"
                  className="transition-all duration-500 hover:stroke-[#4F918B]"
                />
                <polygon
                  points="150,28 262,93 262,247 150,312 38,247 38,93"
                  fill="none"
                  stroke="#C7A978"
                  strokeOpacity="0.25"
                  strokeWidth="1"
                />
              </svg>

              {/* Central Hexagon Content */}
              <div className="relative z-10 text-center px-6 max-w-[240px]">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-[#C7A978]/30 bg-[#F1EADF] text-[9px] font-mono tracking-[0.2em] uppercase text-[#928B81] mb-2.5">
                  <span className="w-1 h-1 rounded-full bg-[#C7A978]" />
                  Core Promise
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#292825] leading-snug tracking-tight">
                  YOUR EVENT.
                  <span className="block text-[#4F918B] font-semibold mt-0.5">
                    OUR COMPLETE
                  </span>
                  RESPONSIBILITY.
                </h3>
                <div className="w-8 h-0.5 bg-[#C7A978]/70 mx-auto mt-3 rounded-full" />
                <p className="text-[11px] font-mono tracking-widest text-[#928B81] uppercase mt-2">
                  Iragu Standard
                </p>
              </div>
            </div>
          </div>

          {/* ── 3 Left Reasons (01, 02, 03) ── */}
          {/* Top Left: 01 */}
          <div
            className="absolute left-0 top-[30px] w-[310px] z-20 pillar-node text-right transition-all duration-300"
            onMouseEnter={() => setActivePillar(0)}
            onMouseLeave={() => setActivePillar(null)}
            onFocus={() => setActivePillar(0)}
            onBlur={() => setActivePillar(null)}
            tabIndex={0}
            role="button"
            aria-label="Pillar 01: Customised Approach"
          >
            <PillarCardContent
              item={pillarsData[0]}
              align="right"
              isActive={activePillar === 0}
            />
          </div>

          {/* Mid Left: 02 */}
          <div
            className="absolute left-0 top-[260px] w-[320px] z-20 pillar-node text-right transition-all duration-300"
            onMouseEnter={() => setActivePillar(1)}
            onMouseLeave={() => setActivePillar(null)}
            onFocus={() => setActivePillar(1)}
            onBlur={() => setActivePillar(null)}
            tabIndex={0}
            role="button"
            aria-label="Pillar 02: Complete Ownership"
          >
            <PillarCardContent
              item={pillarsData[1]}
              align="right"
              isActive={activePillar === 1}
            />
          </div>

          {/* Bottom Left: 03 */}
          <div
            className="absolute left-0 top-[490px] w-[310px] z-20 pillar-node text-right transition-all duration-300"
            onMouseEnter={() => setActivePillar(2)}
            onMouseLeave={() => setActivePillar(null)}
            onFocus={() => setActivePillar(2)}
            onBlur={() => setActivePillar(null)}
            tabIndex={0}
            role="button"
            aria-label="Pillar 03: Single Point of Contact"
          >
            <PillarCardContent
              item={pillarsData[2]}
              align="right"
              isActive={activePillar === 2}
            />
          </div>

          {/* ── 3 Right Reasons (04, 05, 06) ── */}
          {/* Top Right: 04 */}
          <div
            className="absolute right-0 top-[30px] w-[310px] z-20 pillar-node text-left transition-all duration-300"
            onMouseEnter={() => setActivePillar(3)}
            onMouseLeave={() => setActivePillar(null)}
            onFocus={() => setActivePillar(3)}
            onBlur={() => setActivePillar(null)}
            tabIndex={0}
            role="button"
            aria-label="Pillar 04: Creative Thinking"
          >
            <PillarCardContent
              item={pillarsData[3]}
              align="left"
              isActive={activePillar === 3}
            />
          </div>

          {/* Mid Right: 05 */}
          <div
            className="absolute right-0 top-[260px] w-[320px] z-20 pillar-node text-left transition-all duration-300"
            onMouseEnter={() => setActivePillar(4)}
            onMouseLeave={() => setActivePillar(null)}
            onFocus={() => setActivePillar(4)}
            onBlur={() => setActivePillar(null)}
            tabIndex={0}
            role="button"
            aria-label="Pillar 05: Attention to Detail"
          >
            <PillarCardContent
              item={pillarsData[4]}
              align="left"
              isActive={activePillar === 4}
            />
          </div>

          {/* Bottom Right: 06 */}
          <div
            className="absolute right-0 top-[490px] w-[310px] z-20 pillar-node text-left transition-all duration-300"
            onMouseEnter={() => setActivePillar(5)}
            onMouseLeave={() => setActivePillar(null)}
            onFocus={() => setActivePillar(5)}
            onBlur={() => setActivePillar(null)}
            tabIndex={0}
            role="button"
            aria-label="Pillar 06: Stress-Free Experience"
          >
            <PillarCardContent
              item={pillarsData[5]}
              align="left"
              isActive={activePillar === 5}
            />
          </div>
        </div>

        {/* ── RESPONSIVE MOBILE & TABLET LAYOUT (< lg) ── */}
        <div className="lg:hidden w-full max-w-2xl mx-auto space-y-12">
          {/* Central Hexagon on Mobile */}
          <div className="flex justify-center central-hexagon-wrapper">
            <div className="relative w-[280px] h-[310px] flex items-center justify-center">
              <svg
                className="absolute inset-0 w-full h-full drop-shadow-md"
                viewBox="0 0 300 340"
              >
                <polygon
                  points="150,20 270,89 270,251 150,320 30,251 30,89"
                  fill="#FAF6F0"
                  stroke="#C7A978"
                  strokeWidth="1.5"
                />
                <polygon
                  points="150,28 262,93 262,247 150,312 38,247 38,93"
                  fill="none"
                  stroke="#C7A978"
                  strokeOpacity="0.2"
                  strokeWidth="1"
                />
              </svg>
              <div className="relative z-10 text-center px-4 max-w-[220px]">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-[#C7A978]/30 bg-[#F1EADF] text-[9px] font-mono tracking-[0.2em] uppercase text-[#928B81] mb-2">
                  <span className="w-1 h-1 rounded-full bg-[#C7A978]" />
                  Core Promise
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#292825] leading-snug">
                  YOUR EVENT.
                  <span className="block text-[#4F918B] font-semibold mt-0.5">
                    OUR COMPLETE
                  </span>
                  RESPONSIBILITY.
                </h3>
                <div className="w-8 h-0.5 bg-[#C7A978]/70 mx-auto mt-2.5 rounded-full" />
              </div>
            </div>
          </div>

          {/* Vertical Connected Timeline of Six Pillars */}
          <div className="relative pl-6 sm:pl-8 border-l-2 border-[#C7A978]/30 space-y-10 sm:space-y-12 ml-4 sm:ml-8">
            {pillarsData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={`mobile-pillar-${index}`}
                  className="pillar-node relative group"
                >
                  {/* Timeline node marker */}
                  <span
                    className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-[#FAF6F0] border-2 border-[#C7A978] flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:border-[#4F918B] transition-transform"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C7A978] group-hover:bg-[#4F918B]" />
                  </span>

                  <div className="space-y-2">
                    {/* Header Row */}
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold tracking-widest text-[#928B81]">
                        {item.num}
                      </span>
                      <div
                        className={`p-1.5 rounded-full ${item.accentBg} ${item.accentText}`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span
                        className={`px-2 py-0.5 text-[10px] font-mono tracking-wider uppercase rounded border ${item.accentBorder} ${item.accentText} bg-[#FAF6F0]`}
                      >
                        {item.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-base sm:text-lg font-serif font-bold text-[#292825] tracking-tight group-hover:text-[#4F918B] transition-colors">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-[#6F6A61] leading-relaxed max-w-lg font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Bottom Call To Action ── */}
        <div className="diff-head-elem mt-16 md:mt-24 text-center">
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

// ── Reusable Component for Open Layout Pillar Node on Desktop ──
function PillarCardContent({
  item,
  align,
  isActive,
}: {
  item: PillarItem;
  align: "left" | "right";
  isActive: boolean;
}) {
  const IconComponent = item.icon;

  return (
    <div
      className={`group cursor-pointer select-none transition-all duration-300 ${
        isActive ? "scale-[1.02]" : "opacity-95"
      }`}
    >
      {/* Top Meta Line: Number + Icon + Tag */}
      <div
        className={`flex items-center gap-2.5 mb-2.5 ${
          align === "right" ? "justify-end" : "justify-start"
        }`}
      >
        {align === "left" && (
          <span
            className={`text-sm font-mono font-bold tracking-wider transition-all duration-300 ${
              isActive ? "text-[#292825] font-extrabold" : "text-[#928B81]"
            }`}
          >
            {item.num}
          </span>
        )}

        <div
          className={`p-2 rounded-full border transition-transform duration-300 ${
            item.accentBg
          } ${item.accentBorder} ${item.accentText} ${
            isActive ? "scale-110 shadow-sm" : ""
          }`}
        >
          <IconComponent className="w-4 h-4" />
        </div>

        <span
          className={`px-2 py-0.5 text-[9px] font-mono tracking-wider uppercase rounded border ${item.accentBorder} ${item.accentText} bg-[#FAF6F0]`}
        >
          {item.tag}
        </span>

        {align === "right" && (
          <span
            className={`text-sm font-mono font-bold tracking-wider transition-all duration-300 ${
              isActive ? "text-[#292825] font-extrabold" : "text-[#928B81]"
            }`}
          >
            {item.num}
          </span>
        )}
      </div>

      {/* Heading */}
      <h4
        className={`text-base font-serif font-bold tracking-tight text-[#292825] transition-colors duration-300 ${
          isActive ? "text-[#4F918B]" : ""
        }`}
      >
        {item.title}
      </h4>

      {/* Description (clean open layout without box or border) */}
      <p
        className={`text-xs md:text-[13px] leading-relaxed text-[#6F6A61] mt-1.5 transition-all duration-300 font-light ${
          isActive ? "text-[#292825]" : ""
        }`}
      >
        {item.description}
      </p>
    </div>
  );
}
