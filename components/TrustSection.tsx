"use client";

import React, { useRef } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGsap";
import { siteContent } from "@/data/siteContent";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Building2,
  GraduationCap,
  Sparkles,
  Heart,
  ArrowRight,
  Lock,
  CheckCircle2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const industryIcons = [
  Heart,         // Life Events & Families
  Building2,     // Corporate & Enterprise
  GraduationCap, // Institutional & Medical
  Sparkles,      // Retail & Brand Experiences
];

export default function TrustSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const content = siteContent.trust;
  const verifiedBrands = content.brands?.filter(
    (b) => b.permissionVerified && b.logoUrl
  ) || [];

  useGSAP(
    () => {
      if (!containerRef.current) return;

      /* Header animation */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".trust-head-elem"),
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

      /* Cards entrance */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".trust-card"),
        { y: 35, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".trust-grid"),
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
      id="trust"
      ref={containerRef}
      className="relative w-full bg-[#FCFAF6] overflow-hidden py-20 md:py-28 border-t border-[#DED6C9]"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#C7A978]/5 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-14 md:mb-16">
          <div className="trust-head-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#4F918B]/30 bg-[#FCFAF6] text-[#4F918B] text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7A978] animate-pulse" />
            Clients &amp; Collaborations
          </div>

          <h2 className="trust-head-elem text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#292825] leading-tight">
            {content.heading}
          </h2>

          <p className="trust-head-elem text-sm md:text-base text-[#6F6A61] font-light max-w-2xl mx-auto leading-relaxed">
            {content.description || content.statement}
          </p>
        </div>

        {/* ── Brands & Sectors Display ── */}
        <div className="trust-grid">
          {verifiedBrands.length > 0 ? (
            /* Real Verified Logos Grid (when client logo files with written permission are supplied) */
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {verifiedBrands.map((brand) => (
                <div
                  key={brand.id}
                  className="trust-card p-6 rounded-2xl border border-[#DED6C9] bg-[#FCFAF6] hover:border-[#C7A978]/60 shadow-sm flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  {brand.logoUrl && (
                    <Image
                      src={brand.logoUrl}
                      alt={brand.name}
                      width={120}
                      height={48}
                      className="max-h-12 object-contain"
                    />
                  )}
                </div>
              ))}
            </div>
          ) : (
            /* Clean, CMS-Ready Sector Grid respecting client policy: "USE ONLY WITH PERMISSION" */
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                {content.industriesServed.map((industry, idx) => {
                  const Icon = industryIcons[idx] || Building2;
                  return (
                    <div
                      key={idx}
                      className="trust-card group p-6 rounded-2xl border border-[#DED6C9] bg-[#FCFAF6] hover:border-[#C7A978]/60 shadow-sm transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="p-2.5 rounded-xl bg-[#F1EADF] border border-[#DED6C9] text-[#4F918B] group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6] transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                            0{idx + 1}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-[#292825] mb-1.5 group-hover:text-[#4F918B] transition-colors">
                          {industry.name}
                        </h3>
                        <p className="text-xs text-[#6F6A61] font-light leading-relaxed">
                          {industry.desc}
                        </p>
                      </div>

                      <div className="mt-5 pt-3 border-t border-[#DED6C9] flex items-center gap-1.5 text-[10px] font-mono text-[#928B81] uppercase tracking-wider">
                        <CheckCircle2 className="w-3 h-3 text-[#4F918B]" />
                        <span>Trusted Partner</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Permission & Policy Note */}
              <div className="p-4 rounded-xl bg-[#F1EADF] border border-[#DED6C9] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div className="flex items-center gap-2 text-xs text-[#6F6A61] font-mono">
                  <ShieldCheck className="w-4 h-4 text-[#4F918B] flex-shrink-0" />
                  <span>
                    Client &amp; brand logos are published exclusively with written consent.
                  </span>
                </div>
                <Link
                  href="#contact"
                  className="text-xs font-mono text-[#4F918B] hover:text-[#4F918B]/80 uppercase tracking-wider flex items-center gap-1 flex-shrink-0"
                >
                  <span>Inquire for Corporate References</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
