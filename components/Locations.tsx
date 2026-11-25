"use client";

import React, { useState, useRef } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGsap";
import { siteContent } from "@/data/siteContent";
import { tamilNaduDistricts, DistrictData } from "@/data/tamilNaduMapData";
import Link from "next/link";
import {
  MapPin,
  ArrowRight,
  Compass,
  Sparkles,
  CheckCircle2,
  Building2,
  Radio,
  Navigation,
  Info,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/* Location Detailed Metadata for Interactive Card                     */
/* ------------------------------------------------------------------ */
interface LocationMeta {
  title: string;
  badge: string;
  status: string;
  districtId: string;
  desc: string;
  highlights: string[];
  isHq?: boolean;
}

const locationMetaMap: Record<string, LocationMeta> = {
  Nagercoil: {
    title: "Nagercoil",
    badge: "Headquarters & Production Base",
    status: "Company Headquarters",
    districtId: "kanyakumari",
    desc: "Our primary creative studio, fabrication workshop, and management team are rooted in Nagercoil, coordinating celebrations across South Tamil Nadu.",
    highlights: [
      "Central creative & fabrication workshop",
      "Immediate site visits & on-ground team",
      "Full décor inventory & sound-light assets",
    ],
    isHq: true,
  },
  Kanniyakumari: {
    title: "Kanniyakumari District",
    badge: "Primary Service Coverage",
    status: "Active District Coverage",
    districtId: "kanyakumari",
    desc: "Scenic coastal celebrations, landmark auditorium receptions, intimate family gatherings, and destination beach weddings throughout Kanniyakumari.",
    highlights: [
      "Beachfront & coastal wedding setups",
      "Traditional ceremony & mandap styling",
      "Full multi-day event coordination",
    ],
  },
  Tirunelveli: {
    title: "Tirunelveli District",
    badge: "Active Service Coverage",
    status: "Active District Coverage",
    districtId: "tirunelveli",
    desc: "Grand marriage hall styling, institutional convocations, corporate annual days, and premium celebrations with comprehensive logistics.",
    highlights: [
      "Grand stage & royal mandap architecture",
      "1,000+ guest crowd management",
      "Institutional sound, truss & production",
    ],
  },
  Tenkasi: {
    title: "Tenkasi District",
    badge: "Active Service Coverage",
    status: "Active District Coverage",
    districtId: "tenkasi",
    desc: "Picturesque foothill and resort celebrations, bespoke outdoor styling, private milestone gatherings, and destination traditional rituals.",
    highlights: [
      "Resort & scenic open-air venues",
      "Intimate milestone celebrations",
      "Couture floral & entryway concepts",
    ],
  },
  Madurai: {
    title: "Madurai District",
    badge: "Active Service Coverage",
    status: "Active District Coverage",
    districtId: "madurai",
    desc: "Rich cultural weddings, heritage temple receptions, corporate leadership conclaves, and high-impact brand experiential setups.",
    highlights: [
      "Heritage wedding & temple styling",
      "Corporate leadership gatherings",
      "End-to-end transport & vendor crew",
    ],
  },
  Trichy: {
    title: "Tiruchirappalli (Trichy)",
    badge: "Active Service Coverage",
    status: "Active District Coverage",
    districtId: "tiruchirappalli",
    desc: "Central Tamil Nadu event delivery, collegiate mega-festivals, medical graduations, and large-scale public celebrations.",
    highlights: [
      "Large-scale stage & production rigging",
      "Medical & college convocation setups",
      "Full-scope event-day coordination",
    ],
  },
  Pondicherry: {
    title: "Puducherry (Pondicherry)",
    badge: "Extended Reach",
    status: "Extended Service Coverage",
    districtId: "puducherry",
    desc: "Exclusive destination weddings, French-quarter heritage banquets, and coastal celebrations executed with dedicated mobile management crews.",
    highlights: [
      "Destination coastal wedding planning",
      "Heritage villa & resort styling",
      "Turnkey production from Nagercoil base",
    ],
  },
};

export default function Locations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const content = siteContent.locations;

  // Active Selected Location
  const [selectedKey, setSelectedKey] = useState<string>("Nagercoil");

  // Hover Tooltip State
  const [hoveredInfo, setHoveredInfo] = useState<{
    name: string;
    status: string;
    isCovered: boolean;
    x: number;
    y: number;
  } | null>(null);

  const activeMeta = locationMetaMap[selectedKey] || locationMetaMap["Nagercoil"];

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const dur = prefersReduced ? 0 : 0.85;
      const stag = prefersReduced ? 0 : 0.1;

      /* Header entrance */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".loc-head-elem"),
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

      /* Map Container entrance */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".map-visual-wrap"),
        { y: prefersReduced ? 0 : 40, opacity: 0, scale: prefersReduced ? 1 : 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: prefersReduced ? 0 : 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".map-visual-wrap"),
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      /* Covered Districts Progressive Highlight */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".covered-district-path"),
        { opacity: 0.6 },
        {
          opacity: 1,
          duration: prefersReduced ? 0 : 1,
          stagger: prefersReduced ? 0 : 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".map-visual-wrap"),
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );

      /* Cities Pills entrance */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".city-pill"),
        { y: prefersReduced ? 0 : 25, opacity: 0, scale: prefersReduced ? 1 : 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: prefersReduced ? 0 : 0.6,
          stagger: prefersReduced ? 0 : 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".cities-wrap"),
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );

  // Helper to select location from district click
  const handleDistrictClick = (district: DistrictData) => {
    if (district.id === "kanyakumari") {
      setSelectedKey(district.hasHq ? "Nagercoil" : "Kanniyakumari");
    } else if (district.id === "tirunelveli") {
      setSelectedKey("Tirunelveli");
    } else if (district.id === "tenkasi") {
      setSelectedKey("Tenkasi");
    } else if (district.id === "madurai") {
      setSelectedKey("Madurai");
    } else if (district.id === "tiruchirappalli") {
      setSelectedKey("Trichy");
    }
  };

  return (
    <section
      id="locations"
      ref={containerRef}
      className="relative w-full bg-[#F7F3EA] overflow-hidden py-20 md:py-32 border-t border-[#DED6C9]"
    >
      {/* Background warm ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[750px] h-[350px] bg-[#C7A978]/6 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[550px] h-[350px] bg-[#4F918B]/6 blur-[130px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 space-y-14 sm:space-y-18 md:space-y-24">
        {/* ═══════════════════════════════════════════════════════════ */}
        {/* 1. SECTION INTRO & BALANCED TWO-COLUMN MAP LAYOUT           */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* ──────────────── LEFT SIDE: Story, Legend & Active Card ─ */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-7">
            {/* Eyebrow Label */}
            <div className="loc-head-elem inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#C7A978]/30 bg-[#FCFAF6] text-[#C7A978] text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7A978] animate-pulse" />
              Geographic Coverage
            </div>

            {/* Main Heading */}
            <h2 className="loc-head-elem text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#292825] leading-[1.15]">
              {content.heading}
            </h2>

            {/* Supporting Text */}
            <p className="loc-head-elem text-base sm:text-lg text-[#4F918B] font-medium leading-relaxed">
              {content.subheading}
            </p>

            <p className="loc-head-elem text-xs sm:text-sm md:text-base text-[#6F6A61] font-light leading-relaxed">
              From our operational headquarters in Nagercoil, our management and production teams coordinate events across Tamil Nadu with on-ground responsibility.
            </p>

            {/* Compact Coverage Legend */}
            <div className="loc-head-elem p-4 sm:p-5 rounded-2xl bg-[#FCFAF6] border border-[#DED6C9] space-y-2.5 shadow-sm">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C7A978] block font-semibold mb-1">
                Coverage Legend
              </span>

              <div className="flex items-center gap-3 text-xs font-mono text-[#292825]">
                <span className="w-3 h-3 rounded-full bg-[#C7A978] ring-2 ring-[#C7A978]/30 flex-shrink-0" />
                <span className="font-semibold">Headquarters:</span>
                <span className="text-[#6F6A61]">Nagercoil (Kanniyakumari)</span>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-[#292825]">
                <span className="w-3 h-3 rounded-full bg-[#AEBBAA] border border-[#7D8F79] flex-shrink-0" />
                <span className="font-semibold">Service Coverage:</span>
                <span className="text-[#6F6A61]">Highlighted Districts</span>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-[#292825]">
                <span className="w-3 h-3 rounded-full bg-[#4F918B] ring-2 ring-[#4F918B]/30 flex-shrink-0" />
                <span className="font-semibold">Extended Reach:</span>
                <span className="text-[#6F6A61]">Puducherry (Pondicherry)</span>
              </div>
            </div>

            {/* Active Selected Location Card */}
            <div className="loc-head-elem p-5 sm:p-6 rounded-2xl bg-[#FCFAF6] border border-[#4F918B]/40 shadow-md space-y-3.5 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#4F918B] px-2.5 py-1 rounded-full bg-[#4F918B]/10 border border-[#4F918B]/25">
                  {activeMeta.badge}
                </span>
                {activeMeta.isHq && (
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C7A978] font-bold">
                    HQ / Base
                  </span>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#292825]">
                {activeMeta.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#6F6A61] font-light leading-relaxed">
                {activeMeta.desc}
              </p>

              <div className="pt-2 border-t border-[#DED6C9]/80 space-y-1.5">
                {activeMeta.highlights.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="flex items-center gap-2 text-xs text-[#292825]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4F918B] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ──────────────── RIGHT SIDE: Large Interactive District Map ─ */}
          <div className="lg:col-span-7 map-visual-wrap relative flex flex-col items-center">
            {/* Map Frame Card */}
            <div className="relative w-full max-w-[580px] rounded-3xl border border-[#DED6C9] bg-[#FCFAF6] p-4 sm:p-7 shadow-xl overflow-hidden">
              {/* Map Title / Status Bar */}
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-[#DED6C9]/70 text-xs font-mono">
                <div className="flex items-center gap-2 text-[#292825]">
                  <Navigation className="w-3.5 h-3.5 text-[#4F918B]" />
                  <span className="uppercase tracking-wider font-semibold">
                    Tamil Nadu District Map
                  </span>
                </div>
                <div className="text-[10px] uppercase tracking-wider text-[#C7A978] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F918B] animate-pulse" />
                  <span>Interactive Map &bull; Click Districts</span>
                </div>
              </div>

              {/* SVG Map Container */}
              <div className="relative w-full aspect-[520/688] flex items-center justify-center">
                <svg
                  viewBox="0 0 520 688"
                  className="w-full h-full select-none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Subtle Drop Shadow for Active Elements */}
                    <filter
                      id="pin-shadow"
                      x="-20%"
                      y="-20%"
                      width="140%"
                      height="140%"
                    >
                      <feDropShadow
                        dx="0"
                        dy="2"
                        stdDeviation="3"
                        floodColor="#292825"
                        floodOpacity="0.25"
                      />
                    </filter>
                  </defs>

                  {/* ── 37 Tamil Nadu Districts ── */}
                  <g className="districts-layer">
                    {tamilNaduDistricts.map((district) => {
                      const isCovered = district.isCovered;
                      const isSelected =
                        activeMeta.districtId === district.id ||
                        (selectedKey === "Nagercoil" && district.id === "kanyakumari");
                      const isHovered = hoveredInfo?.name === district.name;

                      // Colors per specification:
                      // Non-covered: #F2EDE4 | Covered: #AEBBAA | Active: #4F918B | Border: #D5CABB
                      let fill = "#F2EDE4";
                      let stroke = "#D5CABB";
                      let strokeWidth = 0.8;

                      if (isCovered) {
                        fill = "#AEBBAA";
                        stroke = "#8A9B86";
                        strokeWidth = 1.1;
                      }

                      if (isSelected) {
                        fill = "#4F918B";
                        stroke = "#2A5C57";
                        strokeWidth = 1.6;
                      } else if (isHovered) {
                        fill = isCovered ? "#6AA59F" : "#E8DFD0";
                      }

                      return (
                        <path
                          key={district.id}
                          d={district.d}
                          fill={fill}
                          stroke={stroke}
                          strokeWidth={strokeWidth}
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          className={`transition-colors duration-200 cursor-pointer ${
                            isCovered ? "covered-district-path" : ""
                          }`}
                          onMouseEnter={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            setHoveredInfo({
                              name: district.name,
                              status: isCovered
                                ? district.hasHq
                                  ? "Iragu Events Headquarters"
                                  : "Iragu Events Service Area"
                                : "Available on Custom Request",
                              isCovered,
                              x: district.centroid[0],
                              y: district.centroid[1],
                            });
                          }}
                          onMouseLeave={() => setHoveredInfo(null)}
                          onClick={() => handleDistrictClick(district)}
                          aria-label={`${district.name} District`}
                        />
                      );
                    })}
                  </g>

                  {/* ── Covered District Name Labels On Map ── */}
                  <g className="labels-layer pointer-events-none select-none font-mono text-[9px] font-bold">
                    {/* Madurai */}
                    <text
                      x={243}
                      y={448}
                      textAnchor="middle"
                      fill="#292825"
                      className="tracking-wider"
                    >
                      MADURAI
                    </text>
                    {/* Trichy */}
                    <text
                      x={308}
                      y={348}
                      textAnchor="middle"
                      fill="#292825"
                      className="tracking-wider"
                    >
                      TRICHY
                    </text>
                    {/* Tirunelveli */}
                    <text
                      x={203}
                      y={586}
                      textAnchor="middle"
                      fill="#292825"
                      className="tracking-wider"
                    >
                      TIRUNELVELI
                    </text>
                    {/* Tenkasi */}
                    <text
                      x={148}
                      y={552}
                      textAnchor="middle"
                      fill="#292825"
                      className="tracking-wider"
                    >
                      TENKASI
                    </text>
                    {/* Kanniyakumari */}
                    <text
                      x={165}
                      y={632}
                      textAnchor="middle"
                      fill="#292825"
                      className="tracking-wider"
                    >
                      KANNIYAKUMARI
                    </text>
                  </g>

                  {/* ── Separate Puducherry (Pondicherry) Marker & Label ── */}
                  <g
                    className="cursor-pointer group"
                    onClick={() => setSelectedKey("Pondicherry")}
                    onMouseEnter={() =>
                      setHoveredInfo({
                        name: "Puducherry (Pondicherry)",
                        status: "Extended Service Coverage",
                        isCovered: true,
                        x: 429.2,
                        y: 215.9,
                      })
                    }
                    onMouseLeave={() => setHoveredInfo(null)}
                  >
                    {/* Outer Pulse ring */}
                    <circle
                      cx={429.2}
                      cy={215.9}
                      r={selectedKey === "Pondicherry" ? 14 : 10}
                      fill="none"
                      stroke="#4F918B"
                      strokeWidth={1.5}
                      className="animate-pulse"
                      opacity={0.6}
                    />
                    {/* Core Marker */}
                    <circle
                      cx={429.2}
                      cy={215.9}
                      r={5}
                      fill={selectedKey === "Pondicherry" ? "#4F918B" : "#C7A978"}
                      stroke="#FCFAF6"
                      strokeWidth={2}
                      filter="url(#pin-shadow)"
                    />
                    {/* Text Label */}
                    <text
                      x={438}
                      y={219}
                      textAnchor="start"
                      fontSize={8.5}
                      fontWeight="bold"
                      fill="#292825"
                      className="font-mono tracking-wider select-none"
                    >
                      Puducherry
                    </text>
                  </g>

                  {/* ── Distinctive Nagercoil Headquarters Marker (Within Kanniyakumari) ── */}
                  <g
                    className="cursor-pointer group"
                    onClick={() => setSelectedKey("Nagercoil")}
                    onMouseEnter={() =>
                      setHoveredInfo({
                        name: "Nagercoil — Headquarters",
                        status: "Company Base & Central Studio",
                        isCovered: true,
                        x: 164.8,
                        y: 647,
                      })
                    }
                    onMouseLeave={() => setHoveredInfo(null)}
                  >
                    {/* Animated Pulsing Ring */}
                    <circle
                      cx={164.8}
                      cy={647}
                      r={16}
                      fill="none"
                      stroke="#C7A978"
                      strokeWidth={1.8}
                      className="animate-ping origin-center"
                      opacity={0.4}
                    />
                    {/* Outer Halo */}
                    <circle
                      cx={164.8}
                      cy={647}
                      r={10}
                      fill="#C7A978"
                      opacity={0.25}
                    />
                    {/* Gold Core Marker */}
                    <circle
                      cx={164.8}
                      cy={647}
                      r={6}
                      fill="#C7A978"
                      stroke="#FCFAF6"
                      strokeWidth={2.2}
                      filter="url(#pin-shadow)"
                    />
                    {/* HQ Label */}
                    <text
                      x={164.8}
                      y={667}
                      textAnchor="middle"
                      fontSize={9}
                      fontWeight="bold"
                      fill="#292825"
                      className="font-mono tracking-widest select-none"
                    >
                      ★ NAGERCOIL (HQ)
                    </text>
                  </g>

                  {/* ── Interactive On-Map Tooltip ── */}
                  {hoveredInfo && (
                    <g
                      transform={`translate(${Math.min(
                        Math.max(hoveredInfo.x - 70, 10),
                        380
                      )}, ${Math.max(hoveredInfo.y - 45, 15)})`}
                      className="pointer-events-none transition-all duration-150"
                    >
                      <rect
                        width={140}
                        height={34}
                        rx={6}
                        fill="#FCFAF6"
                        stroke="#C7A978"
                        strokeWidth={1}
                        filter="url(#pin-shadow)"
                      />
                      <text
                        x={70}
                        y={14}
                        textAnchor="middle"
                        fontSize={8.5}
                        fontWeight="bold"
                        fill="#292825"
                        className="font-mono"
                      >
                        {hoveredInfo.name}
                      </text>
                      <text
                        x={70}
                        y={26}
                        textAnchor="middle"
                        fontSize={7.5}
                        fill={hoveredInfo.isCovered ? "#4F918B" : "#6F6A61"}
                        className="font-mono"
                      >
                        {hoveredInfo.status}
                      </text>
                    </g>
                  )}
                </svg>
              </div>

              {/* Map Footer Note */}
              <div className="pt-3 border-t border-[#DED6C9]/70 flex items-center justify-between text-[11px] font-mono text-[#6F6A61]">
                <span>Tamil Nadu State District Delineation</span>
                <span className="text-[#4F918B] font-semibold">Survey Verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* 2. REFINED CLICKABLE LOCATION SELECTOR PILLS                */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="space-y-4">
          <div className="text-center">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C7A978] block">
              Direct Location Selection
            </span>
            <p className="text-xs sm:text-sm text-[#6F6A61] font-light">
              Click any covered region to highlight its boundary and details on the map
            </p>
          </div>

          <div className="cities-wrap flex flex-wrap justify-center items-center gap-2.5 sm:gap-3.5 max-w-4xl mx-auto pt-1">
            {content.cities.map((city) => {
              const isHq = city.toLowerCase() === "nagercoil";
              const isSelected = selectedKey.toLowerCase() === city.toLowerCase();

              return (
                <button
                  key={city}
                  onClick={() => setSelectedKey(city)}
                  className={`city-pill group relative px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border transition-all duration-300 flex items-center gap-2.5 shadow-sm text-left ${
                    isSelected
                      ? "bg-[#4F918B] text-[#FCFAF6] border-[#4F918B] shadow-md shadow-[#4F918B]/20 scale-105"
                      : isHq
                      ? "bg-[#FCFAF6] border-[#C7A978] text-[#292825] hover:border-[#4F918B]"
                      : "bg-[#FCFAF6] border-[#DED6C9] text-[#292825] hover:border-[#C7A978]"
                  }`}
                >
                  <MapPin
                    className={`w-4 h-4 transition-colors ${
                      isSelected
                        ? "text-[#FCFAF6]"
                        : isHq
                        ? "text-[#C7A978]"
                        : "text-[#6F6A61] group-hover:text-[#4F918B]"
                    }`}
                  />
                  <span
                    className={`text-sm sm:text-base font-medium tracking-wide transition-colors ${
                      isSelected ? "text-[#FCFAF6]" : "text-[#292825]"
                    }`}
                  >
                    {city}
                  </span>

                  {isHq && (
                    <span
                      className={`text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-md ${
                        isSelected
                          ? "bg-[#FCFAF6] text-[#4F918B] font-bold"
                          : "bg-[#C7A978]/15 border border-[#C7A978]/40 text-[#C7A978]"
                      }`}
                    >
                      HQ
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* 3. EXTENDED REACH & CLOSING STATEMENT CARD                  */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="pt-2">
          <div className="relative p-7 sm:p-10 md:p-12 rounded-3xl border border-[#DED6C9] bg-gradient-to-br from-[#FCFAF6] via-[#F7F3EA] to-[#FCFAF6] max-w-4xl mx-auto overflow-hidden shadow-lg space-y-4 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4F918B]/5 via-transparent to-[#C7A978]/5 pointer-events-none" />

            <div className="relative z-10 space-y-3">
              <div className="inline-flex items-center gap-2 text-[#4F918B] font-mono text-xs uppercase tracking-widest">
                <Compass className="w-4 h-4" />
                <span>Extended Reach &bull; Beyond Borders</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#292825] tracking-tight">
                {content.closing}
              </h3>

              <p className="text-sm sm:text-base md:text-lg text-[#6F6A61] font-light leading-relaxed max-w-xl mx-auto">
                {content.additionalLine}
              </p>

              <div className="pt-3 flex items-center justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-[#4F918B] hover:bg-[#3d7a75] text-[#FCFAF6] px-8 py-4 font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-md rounded-lg"
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
