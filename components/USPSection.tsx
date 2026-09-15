"use client";
import React, { useRef } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGsap";
import Link from "next/link";
import {
  ArrowRight,
  Lightbulb,
  Search,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/* Process flow data                                                   */
/* ------------------------------------------------------------------ */
const processSteps = [
  {
    icon: Lightbulb,
    label: "Client Vision",
    description: "You share your idea, expectations and personality.",
    accent: "from-[#C7A978]/40 via-[#D8C9B5]/30 to-transparent",
    glow: "",
  },
  {
    icon: Search,
    label: "Understanding",
    description: "We study your theme, venue, audience and budget.",
    accent: "from-[#4F918B]/30 via-[#D8C9B5]/20 to-transparent",
    glow: "",
  },
  {
    icon: Sparkles,
    label: "Creativity",
    description: "Our team develops a concept designed around you.",
    accent: "from-[#C7A978]/35 via-[#F1EADF] to-transparent",
    glow: "",
  },
  {
    icon: CheckCircle2,
    label: "Execution",
    description: "We deliver the complete experience flawlessly.",
    accent: "from-[#4F918B]/25 via-[#C7A978]/20 to-transparent",
    glow: "",
  },
];

/* ================================================================== */
/* USPSection — "Your Vision. Our Creativity."                         */
/* ================================================================== */
export default function USPSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.fromTo(
        containerRef.current.querySelectorAll(".usp-heading"),
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        containerRef.current.querySelectorAll(".process-card"),
        { y: 48, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".process-grid"),
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        containerRef.current.querySelectorAll(".usp-content"),
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".usp-body"),
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="usp"
      ref={containerRef}
      className="relative w-full bg-[#F7F3EA] overflow-hidden py-24 md:py-32 lg:py-40"
    >
      {/* ── Subtle background texture ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(41,40,37,0.2) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* ── Section Eyebrow ── */}
        <div className="usp-heading text-center mb-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#4F918B]/30 bg-[#FCFAF6] text-[#4F918B] text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F918B] animate-pulse" />
            Our USP
          </span>
        </div>

        {/* ── Heading ── */}
        <h2 className="usp-heading text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#292825] tracking-tight leading-[1.12] max-w-4xl mx-auto">
          Your Vision. Our Creativity.{" "}
          <span className="text-[#4F918B]">Complete Event Responsibility.</span>
        </h2>

        {/* ── Body Content ── */}
        <div className="usp-body mt-10 md:mt-14 max-w-3xl mx-auto text-center space-y-5">
          <p className="usp-content text-lg md:text-xl text-[#292825] font-medium">
            Every celebration is different.
          </p>
          <p className="usp-content text-base md:text-lg text-[#6F6A61] font-light leading-relaxed">
            That&apos;s why we don&apos;t believe in simply offering ready-made
            event packages.
          </p>
          <p className="usp-content text-base md:text-lg text-[#6F6A61] font-light leading-relaxed">
            We first understand your expectations, ideas, personality, theme,
            venue and budget — and then create an experience around them.
          </p>
          <p className="usp-content text-base md:text-lg text-[#6F6A61] font-light leading-relaxed">
            Whether it&apos;s an intimate family celebration, a grand wedding, a
            corporate gathering or a large-scale public event, we bring your
            vision to life with creativity and careful execution.
          </p>
        </div>

        {/* ── Process Flow: CLIENT VISION → UNDERSTANDING → CREATIVITY → EXECUTION ── */}
        <div className="process-grid mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {processSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="relative">
                {/* Connector arrow — visible between cards on lg */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-[#928B81]" />
                  </div>
                )}

                <div
                  className={`process-card relative h-full p-6 md:p-7 rounded-2xl border border-[#DED6C9] bg-[#FCFAF6] hover:border-[#C7A978]/60 transition-all duration-500 group overflow-hidden shadow-sm`}
                >
                  {/* Glow background on hover */}
                  <div
                    className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${step.accent} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700`}
                  />

                  {/* Step number */}
                  <div className="text-[10px] font-mono tracking-[0.25em] text-[#928B81] uppercase mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#F1EADF] border border-[#DED6C9] mb-5 shadow-sm`}
                  >
                    <Icon className="w-6 h-6 text-[#4F918B]" />
                  </div>

                  {/* Label */}
                  <h3 className="text-lg md:text-xl font-bold text-[#292825] tracking-tight mb-2">
                    {step.label}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#6F6A61] font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Mobile process connector (visual) ── */}
        <div className="flex sm:hidden justify-center mt-6 mb-2">
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-[#6F6A61] text-[10px] font-mono tracking-wider uppercase text-center">
            <span>Vision</span>
            <ArrowRight className="w-2.5 h-2.5 text-[#4F918B] flex-shrink-0" />
            <span>Understanding</span>
            <ArrowRight className="w-2.5 h-2.5 text-[#4F918B] flex-shrink-0" />
            <span>Creativity</span>
            <ArrowRight className="w-2.5 h-2.5 text-[#4F918B] flex-shrink-0" />
            <span>Execution</span>
          </div>
        </div>
      </div>
    </section>
  );
}
