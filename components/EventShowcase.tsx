"use client";

import React, { useState, useRef } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGsap";
import { siteContent } from "@/data/siteContent";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Calendar,
  Users,
  ArrowRight,
  ExternalLink,
  Layers,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function EventShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const content = siteContent.portfolio;
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProjects =
    activeFilter === "ALL"
      ? content.projects
      : content.projects.filter(
          (p) =>
            p.category === activeFilter ||
            p.categoryDisplay?.toUpperCase() === activeFilter
        );

  useGSAP(
    () => {
      if (!containerRef.current) return;

      /* Header animation */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".port-head-elem"),
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

      /* Projects cards entrance */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".project-card"),
        { y: 35, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".projects-grid"),
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
      id="portfolio"
      ref={containerRef}
      className="relative w-full bg-[#F7F3EA] overflow-hidden py-24 md:py-36 border-t border-[#DED6C9]"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[#C7A978]/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-[#DED6C9]/40 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* ── Section Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-14 md:mb-20 gap-6 sm:gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="port-head-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#4F918B]/30 bg-[#FCFAF6] text-[#4F918B] text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7A978] animate-pulse" />
              Our Work &amp; Portfolio
            </div>

            <h2 className="port-head-elem text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#292825] leading-tight">
              We Don&apos;t Just Talk About Events.{" "}
              <span className="text-[#4F918B]">We Build Them.</span>
            </h2>

            <div className="port-head-elem space-y-2 text-xs sm:text-sm md:text-base text-[#6F6A61] font-light leading-relaxed">
              <p>Every event teaches us something new. Every project has a story.</p>
              <p>
                Explore some of the celebrations, experiences and events we&apos;ve
                planned, designed and executed.
              </p>
            </div>
          </div>
        </div>

        {/* ── Filter Tabs ── */}
        <div className="port-head-elem flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 mb-8 sm:mb-12 md:mb-16 border-b border-[#DED6C9] pb-4 sm:pb-6">
          {content.filters.map((filter, idx) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={idx}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-mono tracking-wider uppercase transition-all duration-300 rounded-full ${
                  isActive
                    ? "bg-[#4F918B] text-[#FCFAF6] font-bold shadow-sm"
                    : "text-[#6F6A61] hover:text-[#292825] bg-[#F7F3EA] border border-[#DED6C9] hover:border-[#C7A978]/60"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* ── Portfolio Grid ── */}
        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
              {filteredProjects.map((project, idx) => (
                <div
                  key={project.id || idx}
                  className="project-card group relative rounded-3xl border border-[#DED6C9] bg-[#FCFAF6] overflow-hidden transition-all duration-500 hover:border-[#C7A978]/60 shadow-sm flex flex-col justify-between"
                >
                  {/* Visual Header with Image / Gradient */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#FCFAF6]">
                    <Image
                      src={project.image || "/images/hero-bg.png"}
                      alt={project.name}
                      fill
                      className="object-cover opacity-90 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FCFAF6]/80 via-transparent to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase bg-[#F7F3EA]/95 border border-[#DED6C9] text-[#4F918B]">
                        {project.categoryDisplay || project.category}
                      </span>
                      {project.guestCount && (
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase bg-[#F7F3EA]/95 border border-[#DED6C9] text-[#6F6A61] flex items-center gap-1.5">
                          <Users className="w-3 h-3 text-[#4F918B]" />
                          {project.guestCount}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-7 md:p-8 flex flex-col justify-between flex-grow">
                    <div>
                      {/* Location & Type metadata */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-[#4F918B] font-mono tracking-wider uppercase mb-3">
                        {project.location && (
                          <span className="flex items-center gap-1 text-[#6F6A61]">
                            <MapPin className="w-3.5 h-3.5 text-[#4F918B]" />
                            {project.location}
                          </span>
                        )}
                        {project.type && (
                          <>
                            <span className="w-1 h-1 rounded-full bg-[#DED6C9]" />
                            <span className="text-[#4F918B]">{project.type}</span>
                          </>
                        )}
                      </div>

                      {/* Project Title */}
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#292825] mb-3 group-hover:text-[#4F918B] transition-colors">
                        {project.name}
                      </h3>

                      {/* Description */}
                      {project.description && (
                        <p className="text-sm text-[#6F6A61] font-light leading-relaxed mb-6">
                          {project.description}
                        </p>
                      )}

                      {/* Services Provided Pills */}
                      {project.servicesProvided && project.servicesProvided.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.servicesProvided.map((service, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 py-1 rounded-lg text-[11px] font-mono tracking-wider text-[#6F6A61] bg-[#F1EADF] border border-[#DED6C9]"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* View Action */}
                    <div className="pt-5 border-t border-[#DED6C9] flex items-center justify-between">
                      <Link
                        href={project.caseStudyLink || "#case-studies"}
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#4F918B] hover:text-[#437D77] transition-colors group/link"
                      >
                        <span>View Project Case Study</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </Link>

                      <span className="text-[10px] font-mono text-[#928B81] uppercase tracking-widest">
                        Verified Execution
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Elegant empty state for categories where client archives will be added */
            <div className="p-10 md:p-14 rounded-3xl border border-[#DED6C9] bg-[#FCFAF6] text-center max-w-2xl mx-auto space-y-4 shadow-sm">
              <div className="inline-flex p-3 rounded-2xl bg-[#F1EADF] border border-[#DED6C9] text-[#4F918B] mb-2">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-[#292825]">
                {activeFilter} Case Studies &amp; Galleries
              </h3>
              <p className="text-sm text-[#6F6A61] font-light leading-relaxed">
                We have executed memorable experiences in this category across South Tamil Nadu. Contact our team to view private portfolio archives and discuss custom concepts for your event.
              </p>
              <div className="pt-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#4F918B] hover:bg-[#437D77] text-[#FCFAF6] font-bold text-xs uppercase font-mono tracking-widest transition-colors"
                >
                  <span>Inquire For {activeFilter} Work</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
