"use client";

import React, { useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import {
  pageConfigs,
  getAllEventPageSlugs,
  getEventPageConfig,
  type EventPageConfig,
} from "@/data/eventPages";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGsap";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Phone,
  MessageCircle,
  Calendar,
  MapPin,
  Users,
  Heart,
  Layers,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  Banner ornament renderer — compact, non-intrusive corner accents  */
/* ------------------------------------------------------------------ */
function BannerOrnament({
  config,
}: {
  config: EventPageConfig;
}) {
  const accent = config.accentColor.replace("text-[", "").replace("]", "");
  switch (config.bannerOrnament) {
    case "wedding-arch":
      return (
        <svg
          className="absolute right-0 bottom-0 w-[42%] max-w-[420px] h-[82%] pointer-events-none opacity-60"
          viewBox="0 0 400 480"
          preserveAspectRatio="xMaxYMax slice"
          fill="none"
        >
          <defs>
            <linearGradient id="arch-w2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={accent} stopOpacity="0.6" />
              <stop offset="100%" stopColor={accent} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M40 480 V240 Q40 80 200 80 Q360 80 360 240 V480"
            stroke="url(#arch-w2)"
            strokeWidth="1.6"
            fill="none"
          />
          <path
            d="M80 480 V250 Q80 120 200 120 Q320 120 320 250 V480"
            stroke={accent}
            strokeOpacity="0.22"
            strokeWidth="1"
            fill="none"
            strokeDasharray="3 5"
          />
          {[0, 1, 2, 3, 4].map((i) => (
            <circle
              key={i}
              cx={100 + i * 50}
              cy={170 - Math.sin(i) * 14}
              r="2.2"
              fill={accent}
              opacity={0.55}
            />
          ))}
        </svg>
      );
    case "birthday-confetti":
      return (
        <svg
          className="absolute right-0 top-0 w-[46%] max-w-[520px] h-full pointer-events-none opacity-65"
          viewBox="0 0 500 480"
          preserveAspectRatio="xMaxYMid slice"
          fill="none"
        >
          {Array.from({ length: 32 }).map((_, i) => {
            const x = (i * 73) % 500;
            const y = (i * 47) % 480;
            const r = 1.8 + (i % 3);
            const op = 0.32 + ((i % 5) / 14);
            const t = i % 3;
            if (t === 0) {
              return (
                <circle key={i} cx={x} cy={y} r={r} fill={accent} opacity={op} />
              );
            }
            if (t === 1) {
              return (
                <rect
                  key={i}
                  x={x}
                  y={y}
                  width={r * 2}
                  height={r * 2}
                  fill={accent}
                  opacity={op}
                  transform={`rotate(${i * 13} ${x + r} ${y + r})`}
                />
              );
            }
            return (
              <polygon
                key={i}
                points={`${x},${y - r} ${x + r},${y + r * 0.8} ${x - r},${y + r * 0.8}`}
                fill={accent}
                opacity={op}
              />
            );
          })}
        </svg>
      );
    case "baby-moon":
      return (
        <svg
          className="absolute right-[6%] top-6 w-[190px] h-[190px] pointer-events-none opacity-65"
          viewBox="0 0 200 200"
          fill="none"
        >
          <defs>
            <radialGradient id="babyM2" cx="0.35" cy="0.35" r="0.8">
              <stop offset="0%" stopColor={accent} stopOpacity="0.55" />
              <stop offset="100%" stopColor={accent} stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="url(#babyM2)" />
          <circle
            cx="100"
            cy="100"
            r="80"
            stroke={accent}
            strokeOpacity="0.28"
            strokeWidth="1"
            fill="none"
          />
          {[24, 46, 68].map((r, i) => (
            <circle
              key={r}
              cx="100"
              cy="100"
              r={r}
              stroke={accent}
              strokeOpacity={0.15 - i * 0.03}
              strokeDasharray="2 3"
              fill="none"
            />
          ))}
          <circle cx="100" cy="100" r="46" fill={accent} opacity="0.07" />
        </svg>
      );
    case "anniversary-bands":
      return (
        <svg
          className="absolute right-6 bottom-4 w-[280px] h-[280px] pointer-events-none opacity-55"
          viewBox="0 0 500 500"
          fill="none"
        >
          <g transform="translate(250 250)">
            {[0, 1, 2].map((i) => (
              <g key={i}>
                <circle
                  cx={i * 32}
                  cy={0}
                  r={80 - i * 10}
                  stroke={accent}
                  strokeOpacity={0.55 - i * 0.14}
                  strokeWidth={1.8 - i * 0.35}
                  fill="none"
                />
                <circle
                  cx={i * 32}
                  cy={0}
                  r={52 - i * 8}
                  stroke={accent}
                  strokeOpacity={0.22 - i * 0.06}
                  strokeDasharray="2 4"
                  fill="none"
                />
              </g>
            ))}
          </g>
        </svg>
      );
    case "family-tree":
      return (
        <svg
          className="absolute left-[4%] bottom-0 w-[300px] h-[76%] pointer-events-none opacity-45"
          viewBox="0 0 300 440"
          fill="none"
        >
          <path
            d="M150 440 V300"
            stroke={accent}
            strokeOpacity="0.6"
            strokeWidth="1.5"
          />
          <path
            d="M150 300 Q124 274 70 254 M150 300 Q176 266 238 244 M150 268 Q122 242 96 212 M150 268 Q180 234 216 202 M150 234 Q126 208 150 162"
            stroke={accent}
            strokeOpacity="0.4"
            strokeWidth="1.1"
            fill="none"
          />
          {[
            [70, 254, 14],
            [238, 244, 16],
            [96, 212, 12],
            [216, 202, 14],
            [150, 162, 20],
            [150, 108, 26],
            [54, 294, 10],
          ].map(([x, y, r], i) => (
            <circle
              key={i}
              cx={x as number}
              cy={y as number}
              r={r as number}
              fill={accent}
              opacity={0.12 + (i % 3) * 0.04}
              stroke={accent}
              strokeOpacity={0.32}
              strokeWidth="0.9"
            />
          ))}
        </svg>
      );
    case "corporate-grid":
      return (
        <svg
          className="absolute right-0 top-0 w-[48%] max-w-[560px] h-full pointer-events-none opacity-[0.26]"
          viewBox="0 0 600 480"
          preserveAspectRatio="xMaxYMid slice"
          fill="none"
        >
          <defs>
            <pattern id="grid-c2" width="50" height="50" patternUnits="userSpaceOnUse">
              <path
                d="M 50 0 L 0 0 0 50"
                stroke={accent}
                strokeOpacity="0.36"
                strokeWidth="0.55"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-c2)" />
        </svg>
      );
    case "stadium-arches":
      return (
        <svg
          className="absolute bottom-0 left-0 w-full h-[62%] pointer-events-none opacity-50"
          viewBox="0 0 800 300"
          preserveAspectRatio="none"
          fill="none"
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
            const w = 90;
            const x = 40 + i * w + (800 - 9 * w - 80) / 2;
            const hBase = 180;
            const h = hBase - Math.abs(i - 4) * 12;
            return (
              <path
                key={i}
                d={`M${x} 300 V${h + 44} Q${x} ${h} ${x + w / 2} ${h} Q${x + w} ${h} ${x + w} ${h + 44} V300`}
                stroke={accent}
                strokeOpacity={0.34 - Math.abs(i - 4) * 0.03}
                strokeWidth="1.1"
                fill={accent}
                fillOpacity={0.01 + (8 - Math.abs(i - 4)) * 0.003}
              />
            );
          })}
        </svg>
      );
    case "blueprint-grid":
      return (
        <svg
          className="absolute right-0 bottom-0 w-[52%] max-w-[600px] h-[86%] pointer-events-none opacity-[0.32]"
          viewBox="0 0 600 500"
          preserveAspectRatio="xMaxYMax slice"
          fill="none"
        >
          <defs>
            <pattern id="grid-b2" width="38" height="38" patternUnits="userSpaceOnUse">
              <path
                d="M 38 0 L 0 0 0 38"
                stroke={accent}
                strokeOpacity="0.4"
                strokeWidth="0.55"
                fill="none"
              />
              <circle cx="19" cy="19" r="0.9" fill={accent} fillOpacity="0.55" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-b2)" />
          <g stroke={accent} strokeOpacity="0.5" strokeWidth="0.9">
            <line x1="60" y1="70" x2="540" y2="70" strokeDasharray="2 3" />
            <line x1="60" y1="62" x2="60" y2="78" />
            <line x1="540" y1="62" x2="540" y2="78" />
          </g>
        </svg>
      );
    default:
      return null;
  }
}

interface EventDetailPageProps {
  slug: string;
}

export default function EventDetailPage({ slug }: EventDetailPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const config = pageConfigs[slug];
  const footer = siteContent.footer;
  const services = siteContent.completeServices;

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const q = gsap.utils.selector(containerRef.current);

      gsap.fromTo(
        q(".ed-hero-elem"),
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        q(".ed-sec-elem"),
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".ed-sec-trigger"),
            start: "top 82%",
          },
        }
      );

      gsap.fromTo(
        q(".ed-card-elem"),
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".ed-cards-grid"),
            start: "top 86%",
          },
        }
      );

      gsap.fromTo(
        q(".ed-cta-elem"),
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".ed-cta-wrap"),
            start: "top 86%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  const PageIcon = config?.icon;

  const primaryTitleFirst = config
    ? config.title.split(" ")[0]
    : "";
  const primaryTitleRest = config
    ? config.title.split(" ").slice(1).join(" ")
    : "";

  const heroStats = useMemo(
    () => [
      { icon: Calendar, label: "Timeline Planning" },
      { icon: Users, label: "Guest Coordination" },
      { icon: MapPin, label: "Venue Support" },
      { icon: Sparkles, label: "Creative Design" },
    ],
    []
  );

  if (!config) {
    return (
      <main className="min-h-screen bg-[#FCFAF6] flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-serif font-bold text-[#292825]">
            Event Not Found
          </h1>
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#4F918B] text-[#FCFAF6] font-mono text-xs uppercase tracking-widest"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Services
          </Link>
        </div>
      </main>
    );
  }

  /* ---------------------------------------------------------------- */
  /*  Hero — single unified tight layout, compact 62vh, no panels     */
  /* ---------------------------------------------------------------- */
  const renderHero = () => {
    if (config.heroImage) {
      return (
        <section className="relative w-full pt-20 bg-[#F7F3EA]">
          <Image
            src={config.heroImage}
            alt={config.title}
            width={1920}
            height={1080}
            className="w-full h-auto block"
            priority
          />
        </section>
      );
    }

    const padX = "w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10";
    const padY = "py-10 sm:py-11 md:py-12";
    return (
      <section
        className={`relative w-full min-h-[62vh] max-h-[64vh] flex items-center ${config.heroBg} overflow-hidden`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${config.heroGradient} opacity-[0.07] pointer-events-none`}
        />
        <div
          className="absolute top-[22%] left-[10%] w-[340px] h-[340px] rounded-full blur-[110px] opacity-[0.14] pointer-events-none"
          style={{ background: config.accentBg }}
        />
        <BannerOrnament config={config} />

        <div className={`relative z-10 ${padX} ${padY} w-full`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="max-w-xl">
              {/* Back link + category */}
            <div className="space-y-3">
              <Link
                href="/#services"
                className={`ed-hero-elem inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] ${config.accentColor} hover:opacity-70 transition-opacity`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to All Services</span>
              </Link>

              <div className="ed-hero-elem flex flex-wrap items-center gap-3">
                <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-[0.2em] uppercase border ${config.accentBorder} ${config.accentBg} ${config.accentColor}`}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "currentColor" }} />
                  {config.category}
                </span>
                <div className={`p-2.5 rounded-2xl border ${config.accentBorder} ${config.accentBg} ${config.accentColor}`}>
                  <PageIcon className="w-4.5 h-4.5" />
                </div>
              </div>
            </div>

            {/* Headline */}
            <h1
              className="ed-hero-elem mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.02] tracking-tight text-[#FCFAF6]"
            >
              <span className="block">{primaryTitleFirst}</span>
              {primaryTitleRest && (
                <span className={`block italic ${config.accentColor}`}>
                  {primaryTitleRest}
                </span>
              )}
            </h1>

            {/* Tagline */}
            <p
              className={`ed-hero-elem mt-3 text-sm sm:text-base md:text-lg font-light font-serif italic max-w-2xl text-[#DED6C9]/80`}
            >
              &ldquo;{config.tagline}&rdquo;
            </p>

            {/* Stats strip */}
            <div
              className={`ed-hero-elem mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-3xl pt-4 border-t border-white/10`}
            >
              {heroStats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="flex items-center gap-2.5">
                    <div
                      className={`p-2 rounded-xl border ${config.accentBorder} ${config.accentBg} ${config.accentColor} flex-shrink-0`}
                    >
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.18em] text-[#DED6C9]/70 leading-snug">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="ed-hero-elem mt-5 sm:mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3.5">
              <a
                href={`${footer.socialLinks.whatsapp.url}?text=Hello%20Iragu%20Events%2C%20I%20would%20like%20to%20discuss%20${encodeURIComponent(config.title)}%20planning.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.8 sm:py-3 font-mono font-bold text-[11px] sm:text-xs uppercase tracking-[0.2em] transition-all active:scale-95 shadow-lg ${config.accentBg} ${config.accentColor} ${config.accentBorder} border hover:brightness-110`}
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Plan on WhatsApp</span>
              </a>
              <a
                href={`tel:${footer.contactInfo.phoneRaw}`}
                className="inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.8 sm:py-3 font-mono font-bold text-[11px] sm:text-xs uppercase tracking-[0.2em] bg-transparent text-[#FCFAF6] border border-white/20 hover:border-white/40 transition-all active:scale-95"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {footer.contactInfo.phone}</span>
              </a>
            </div>
          </div>
          
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-b from-transparent to-[#FCFAF6] pointer-events-none" />
      </section>
    );
  };

  return (
    <main
      ref={containerRef}
      className="relative w-full min-h-screen overflow-x-hidden bg-[#FCFAF6]"
    >
      {/* ═══════════════ 1. HERO SECTION ═══════════════ */}
      {renderHero()}

      {/* ═══════════════ 2. INTRO & HIGHLIGHTS ═══════════════ */}
      <section className="relative w-full bg-[#FCFAF6] py-10 sm:py-12 md:py-14 ed-sec-trigger">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left: Intro */}
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
              <div className="ed-sec-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DED6C9] bg-[#F7F3EA] text-[#292825] text-[11px] font-mono tracking-[0.2em] uppercase">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${config.accentBg.replace("/10", "").replace("bg-", "bg-[") + "]"}`}
                  style={{
                    background: config.accentColor.startsWith("text-")
                      ? "currentColor"
                      : undefined,
                  }}
                />
                About This Service
              </div>

              <h2 className="ed-sec-elem text-xl sm:text-2xl md:text-3xl font-serif font-bold tracking-tight text-[#292825] leading-[1.1]">
                Thoughtfully planned,{" "}
                <span className={`italic ${config.accentColor}`}>beautifully</span>{" "}
                executed.
              </h2>

              <p className="ed-sec-elem text-[#292825] text-sm md:text-[15px] font-light leading-relaxed">
                {config.description}
              </p>

              <div className="ed-sec-elem">
                <a
                  href="#contact-enquiry"
                  className={`inline-flex items-center gap-2 px-5 py-2.8 rounded-xl font-mono font-bold text-[11px] sm:text-xs uppercase tracking-[0.2em] ${config.accentBg} ${config.accentColor} ${config.accentBorder} border hover:brightness-105 transition-all active:scale-95`}
                >
                  <span>Discuss Your {primaryTitleFirst}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right: Highlights */}
            <div className="lg:col-span-7">
              <div className="ed-cards-grid grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {config.highlights.map((hl, i) => (
                  <div
                    key={i}
                    className={`ed-card-elem group/h group relative p-3.5 sm:p-4 md:p-5 rounded-2xl border transition-all duration-300 bg-[#F7F3EA] border-[#DED6C9] hover:bg-white hover:shadow-md hover:-translate-y-0.5 ${config.accentBorder.replace("hover:", "hover:border-")}`}
                  >
                    <div className="flex items-start gap-3 sm:gap-3.5">
                      <div
                        className={`p-2.5 rounded-xl border ${config.accentBorder} ${config.accentBg} ${config.accentColor} flex-shrink-0 group-hover/h:scale-105 transition-transform`}
                      >
                        <CheckCircle2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono tracking-[0.2em] text-[#4A453F] uppercase block mb-1.5">
                          {(i + 1).toString().padStart(2, "0")} • Feature
                        </span>
                        <p className="text-sm md:text-[15px] font-medium text-[#292825] leading-relaxed group-hover/h:text-[#4F918B] transition-colors">
                          {hl}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 3. WHAT'S INCLUDED / SERVICES ═══════════════ */}
      <section className="relative w-full py-10 sm:py-12 md:py-14 bg-[#F7F3EA] border-y border-[#DED6C9] overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${config.heroGradient} opacity-[0.05] pointer-events-none`}
        />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="max-w-3xl mb-8 sm:mb-10">
            <div className="ed-sec-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DED6C9] bg-[#FCFAF6] text-[#292825] text-[11px] font-mono tracking-[0.2em] uppercase mb-4">
              <Sparkles className="w-3 h-3" />
              What We Handle
            </div>
            <h2 className="ed-sec-elem text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-[#292825] leading-[1.1]">
              Everything included in your{" "}
              <span className={`italic ${config.accentColor}`}>
                {primaryTitleFirst}
              </span>{" "}
              planning.
            </h2>
          </div>

          <div className="ed-cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {config.services.map((svc, i) => (
              <div
                key={i}
                className="ed-card-elem group/svc relative p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-[#DED6C9] bg-[#FCFAF6] hover:bg-white hover:border-[#C7A978]/40 transition-all duration-300 flex flex-col gap-3.5 hover:shadow-[0_16px_48px_-20px_rgba(41,40,37,0.15)] hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`p-2.5 rounded-2xl border ${config.accentBorder} ${config.accentBg} ${config.accentColor} group-hover/svc:scale-110 transition-transform duration-300`}
                  >
                    <PageIcon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#4A453F]">
                    0{i + 1}
                  </span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#292825] mb-1.5 group-hover/svc:text-[#4F918B] transition-colors">
                    {svc}
                  </h4>
                  <p className="text-xs md:text-sm text-[#292825] font-light leading-relaxed">
                    Complete planning, vendor coordination and on-ground execution handled end-to-end by our dedicated team.
                  </p>
                </div>
                <div className="pt-3 mt-auto border-t border-[#DED6C9]/60 flex items-center gap-1.5">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${config.accentBg.replace("/10", "").replace("bg-", "bg-[") + "]"}`}
                  />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#4A453F]">
                    End-to-End Responsibility
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ 4. IDEAL FOR + COMPLETE SERVICES ═══════════════ */}
      <section className="relative w-full py-10 sm:py-12 md:py-14 bg-[#FCFAF6]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 items-start">
            {/* Ideal For */}
            <div className="lg:col-span-2 space-y-5">
              <div>
                <div className="ed-sec-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DED6C9] bg-[#F7F3EA] text-[#292825] text-[11px] font-mono tracking-[0.2em] uppercase mb-4">
                  <Heart className="w-3 h-3" />
                  Ideal For
                </div>
                <h3 className="ed-sec-elem text-xl sm:text-2xl md:text-3xl font-serif font-bold tracking-tight text-[#292825] leading-[1.15] mb-4">
                  Is this{" "}
                  <span className={`italic ${config.accentColor}`}>your</span>{" "}
                  kind of event?
                </h3>
              </div>
              <div className="ed-cards-grid space-y-2 sm:space-y-2.5">
                {config.idealFor.map((item, i) => (
                  <div
                    key={i}
                    className={`ed-card-elem group/if flex items-center justify-between p-3 sm:p-3.5 rounded-2xl border border-[#DED6C9] bg-[#F7F3EA] hover:bg-white ${config.accentBorder.replace("hover:", "hover:border-")} transition-all duration-300`}
                  >
                    <div className="flex items-center gap-3 sm:gap-3.5">
                      <div
                        className={`p-2 rounded-xl border ${config.accentBorder} ${config.accentBg} ${config.accentColor}`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <span className="text-sm md:text-[15px] font-medium text-[#292825]">
                        {item}
                      </span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4A453F] group-hover/if:translate-x-1 group-hover/if:text-[#4F918B] transition-all" />
                  </div>
                ))}
              </div>
            </div>

            {/* Complete Event Planning Services */}
            <div className="lg:col-span-3 space-y-5">
              <div>
                <div className="ed-sec-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DED6C9] bg-[#F7F3EA] text-[#292825] text-[11px] font-mono tracking-[0.2em] uppercase mb-4">
                  <Layers className="w-3 h-3" />
                  Additional Capabilities
                </div>
                <h3 className="ed-sec-elem text-xl sm:text-2xl md:text-3xl font-serif font-bold tracking-tight text-[#292825] leading-[1.15]">
                  Plus, every other detail{" "}
                  <span className={`italic ${config.accentColor}`}>
                    under one roof
                  </span>
                  .
                </h3>
                <p className="ed-sec-elem mt-3 text-[#292825] text-sm md:text-[15px] font-light leading-relaxed max-w-xl">
                  {services.intro}
                </p>
              </div>

              <div className="ed-cards-grid grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 md:gap-3">
                {services.services.map((s, i) => (
                  <div
                    key={i}
                    className="ed-card-elem group/add flex items-center gap-3 p-3 sm:p-3.5 rounded-xl border border-[#DED6C9] bg-[#F7F3EA]/60 hover:bg-white hover:border-[#4F918B]/30 transition-all duration-300"
                  >
                    <span
                      className={`w-6 h-6 rounded-lg border ${config.accentBorder} ${config.accentBg} ${config.accentColor} flex items-center justify-center flex-shrink-0 text-[10px] font-mono font-bold`}
                    >
                      {i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm font-semibold text-[#292825] group-hover/add:text-[#4F918B] transition-colors truncate">
                        {s.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 5. FINAL CTA / ENQUIRY ═══════════════ */}
      <section
        id="contact-enquiry"
        className={`relative w-full py-12 sm:py-14 md:py-18 ${config.heroBg} overflow-hidden ed-cta-wrap`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${config.heroGradient} opacity-[0.08] pointer-events-none`}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-[360px] h-[360px] rounded-full blur-[130px] opacity-15 pointer-events-none"
          style={{ background: config.accentBg }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full blur-[120px] opacity-10 pointer-events-none"
          style={{ background: "#C7A978" }}
        />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-10 text-center">
          <div className="ed-cta-elem inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-[#DED6C9]/70 text-[11px] font-mono tracking-[0.2em] uppercase mb-5">
            <Sparkles className="w-3 h-3" />
            Let's Start Planning
          </div>

          <h2 className="ed-cta-elem text-xl sm:text-2xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-[#FCFAF6] leading-[1.05] mb-4 sm:mb-5">
            Planning a{" "}
            <span className={`italic ${config.accentColor}`}>
              {primaryTitleFirst}
            </span>
            ?<br />
            <span className="text-[#DED6C9]/70 font-light">
              Tell us your vision.
            </span>
          </h2>

          <p className="ed-cta-elem text-sm md:text-base text-[#DED6C9]/60 font-light max-w-2xl mx-auto mb-7 sm:mb-8 leading-relaxed">
            Share what you have in mind — your venue, date, guest count and budget. Our team will get back with a clear plan and a customised quote.
          </p>

          <div className="ed-cta-elem flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3.5 max-w-3xl mx-auto">
            <a
              href={`${footer.socialLinks.whatsapp.url}?text=Hello%20Iragu%20Events%2C%20I%20would%20like%20to%20plan%20a%20${encodeURIComponent(config.title)}%20event.`}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 font-mono font-bold text-[11px] sm:text-xs uppercase tracking-[0.2em] ${config.accentBg} ${config.accentColor} ${config.accentBorder} border hover:brightness-110 transition-all active:scale-95 shadow-2xl`}
            >
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Plan on WhatsApp</span>
            </a>
            <a
              href={`tel:${footer.contactInfo.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 font-mono font-bold text-[11px] sm:text-xs uppercase tracking-[0.2em] bg-[#FCFAF6] text-[#292825] hover:bg-white transition-all active:scale-95 shadow-xl"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Call {footer.contactInfo.phone}</span>
            </a>
          </div>

          <div className="ed-cta-elem mt-10 pt-6 border-t border-white/10 max-w-2xl mx-auto">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#DED6C9]/40 mb-2.5">
              Based in {footer.contactInfo.location} • Serving South Tamil Nadu &amp; Beyond
            </p>
            <Link
              href="/#services"
              className={`inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] ${config.accentColor} hover:opacity-70 transition-opacity`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Explore All Event Services</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
