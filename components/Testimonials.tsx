"use client";

import React, { useRef } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGsap";
import { siteContent } from "@/data/siteContent";
import Link from "next/link";
import Image from "next/image";
import {
  Quote,
  MapPin,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  MessageSquareHeart,
  Clock,
  CheckCircle2,
  Lock,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export interface TestimonialItem {
  id: string;
  clientName: string;
  eventType: string;
  location: string;
  testimonial: string;
  clientPhoto?: string;
  permissionStatus: "verified" | "pending" | "published";
}

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const content = siteContent.testimonials;
  const reviews = content.reviews as TestimonialItem[];

  useGSAP(
    () => {
      if (!containerRef.current) return;

      /* Header animation */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".test-head-elem"),
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

      /* Card entrance */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".test-card"),
        { y: 35, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".test-wrap"),
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
      id="testimonials"
      ref={containerRef}
      className="relative w-full bg-[#FCFAF6] overflow-hidden py-24 md:py-36 border-t border-[#DED6C9]/70"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#4F918B]/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[350px] bg-[#C7A978]/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16 md:mb-20">
          <div className="test-head-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C7A978]/30 bg-[#F1EADF] text-[#C7A978] text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7A978] animate-pulse" />
            Client Reviews &amp; Trust
          </div>

          <h2 className="test-head-elem text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#292825] leading-tight">
            {content.heading}
          </h2>

          <p className="test-head-elem text-xs sm:text-sm md:text-base text-[#6F6A61] font-light max-w-2xl mx-auto leading-relaxed">
            {content.subheading}
          </p>
        </div>

        {/* ── Testimonials Container ── */}
        <div className="test-wrap">
          {reviews.length > 0 ? (
            /* Active verified review grid (when real client testimonials are added) */
            <div className="space-y-10 sm:space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
                {reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="test-card group relative p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl border border-[#DED6C9] bg-[#F7F3EA] backdrop-blur-md flex flex-col justify-between hover:border-[#C7A978]/60 transition-all duration-300"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Quote className="w-8 h-8 text-[#4F918B]/40 group-hover:text-[#4F918B] transition-colors" />
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#F1EADF] border border-[#C7A978]/50 text-[#C7A978]">
                          {rev.permissionStatus}
                        </span>
                      </div>

                      <p className="text-sm md:text-base text-[#292825] font-light leading-relaxed italic">
                        &ldquo;{rev.testimonial}&rdquo;
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#DED6C9] flex items-center gap-4">
                      {rev.clientPhoto ? (
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#DED6C9]">
                          <Image
                            src={rev.clientPhoto}
                            alt={rev.clientName}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-[#F1EADF] border border-[#DED6C9] flex items-center justify-center text-[#4F918B] font-bold font-mono text-sm">
                          {rev.clientName.slice(0, 2).toUpperCase()}
                        </div>
                      )}

                      <div>
                        <h4 className="text-base font-bold text-[#292825]">
                          {rev.clientName}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-[#6F6A61] font-mono">
                          <span>{rev.eventType}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-[#4F918B]" />
                            {rev.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center pt-6">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#4F918B] hover:bg-[#3d7a75] text-[#FCFAF6] font-bold text-xs uppercase font-mono tracking-widest transition-colors shadow-lg shadow-[#4F918B]/15"
                >
                  <span>{content.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ) : (
            /* CMS-Ready Structure visually marked as awaiting genuine client reviews */
            <div className="test-card relative p-4 sm:p-8 md:p-12 lg:p-16 rounded-2xl sm:rounded-3xl border border-[#DED6C9] bg-[#F7F3EA]/80 backdrop-blur-md max-w-4xl mx-auto overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4F918B]/5 via-transparent to-[#4F918B]/5 pointer-events-none" />

              <div className="relative z-10 text-center space-y-6 sm:space-y-8">
                {/* Status Indicator */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1EADF] border border-[#DED6C9] text-[#6F6A61] text-[11px] sm:text-xs font-mono uppercase tracking-widest">
                  <Clock className="w-3.5 h-3.5 text-[#4F918B]" />
                  <span>Verified Client Feedback Module</span>
                </div>

                <div className="space-y-2 sm:space-y-3 max-w-2xl mx-auto">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#292825]">
                    Genuine Client Reviews
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-[#6F6A61] font-light leading-relaxed">
                    At Iragu Events, we uphold complete integrity in our client relations. Verified client reviews and event testimonials from our celebrations across South Tamil Nadu are curated with direct client consent and will be updated here.
                  </p>
                </div>

                {/* CMS Ready Schema Preview Grid */}
                <div className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-[#F1EADF]/60 border border-[#DED6C9] text-left space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DED6C9] pb-3">
                    <span className="text-xs font-mono text-[#4F918B] uppercase tracking-widest flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4" />
                      <span>CMS Review Schema Fields</span>
                    </span>
                    <span className="text-[10px] font-mono text-[#928B81] uppercase">
                      Client-Consent Verified
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
                    {[
                      { label: "Client Name", desc: "Verified host or brand" },
                      { label: "Event Type", desc: "Wedding, Birthday, Corporate..." },
                      { label: "Location", desc: "Nagercoil, Trivandrum, etc." },
                      { label: "Testimonial", desc: "Genuine client review text" },
                      { label: "Client Photo", desc: "Optional approved photo" },
                      { label: "Permission Status", desc: "Explicit consent verified" },
                    ].map((field, fIdx) => (
                      <div
                        key={fIdx}
                        className="p-3 rounded-xl bg-[#FCFAF6] border border-[#DED6C9]/80 space-y-1"
                      >
                        <div className="text-xs font-bold text-[#292825] flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#4F918B]" />
                          <span>{field.label}</span>
                        </div>
                        <div className="text-[11px] text-[#6F6A61] font-light">
                          {field.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="#contact"
                    className="group inline-flex items-center gap-3 bg-[#4F918B] hover:bg-[#3d7a75] text-[#FCFAF6] px-8 py-4 font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-lg shadow-[#4F918B]/20"
                  >
                    <span>{content.cta}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-none border border-[#DED6C9] hover:border-[#C7A978]/60 text-[#6F6A61] hover:text-[#292825] font-mono text-xs uppercase tracking-widest transition-colors"
                  >
                    <span>Share Event Experience</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
