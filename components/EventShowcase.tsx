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
      className="relative w-full bg-[#030303] overflow-hidden py-24 md:py-36 border-t border-neutral-800/70"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-teal-500/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-teal-900/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* ── Section Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-14 md:mb-20 gap-6 sm:gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="port-head-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/20 bg-teal-950/30 text-teal-400 text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              Our Work &amp; Portfolio
            </div>

            <h2 className="port-head-elem text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
              We Don&apos;t Just Talk About Events.{" "}
              <span className="text-teal-400">We Build Them.</span>
            </h2>

            <div className="port-head-elem space-y-2 text-xs sm:text-sm md:text-base text-neutral-400 font-light leading-relaxed">
              <p>Every event teaches us something new. Every project has a story.</p>
              <p>
                Explore some of the celebrations, experiences and events we&apos;ve
                planned, designed and executed.
              </p>
            </div>
          </div>
        </div>

        {/* ── Filter Tabs ── */}
        <div className="port-head-elem flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 mb-8 sm:mb-12 md:mb-16 border-b border-neutral-800/80 pb-4 sm:pb-6">
          {content.filters.map((filter, idx) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={idx}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-mono tracking-wider uppercase transition-all duration-300 rounded-full ${
                  isActive
                    ? "bg-teal-500 text-black font-bold shadow-md shadow-teal-500/20"
                    : "text-neutral-400 hover:text-white bg-neutral-950/60 border border-neutral-800 hover:border-teal-500/40"
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
                  className="project-card group relative rounded-3xl border border-neutral-800/90 bg-neutral-950/80 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-teal-500/50 hover:shadow-[0_0_40px_rgba(20,184,166,0.15)] flex flex-col justify-between"
                >
                  {/* Visual Header with Image / Gradient */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
                    <Image
                      src={project.image || "/images/hero-bg.png"}
                      alt={project.name}
                      fill
                      className="object-cover opacity-50 group-hover:scale-105 group-hover:opacity-75 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase bg-black/70 backdrop-blur-md border border-teal-500/30 text-teal-300">
                        {project.categoryDisplay || project.category}
                      </span>
                      {project.guestCount && (
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase bg-black/70 backdrop-blur-md border border-neutral-700/60 text-neutral-300 flex items-center gap-1.5">
                          <Users className="w-3 h-3 text-teal-400" />
                          {project.guestCount}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-7 md:p-8 flex flex-col justify-between flex-grow">
                    <div>
                      {/* Location & Type metadata */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-teal-400 font-mono tracking-wider uppercase mb-3">
                        {project.location && (
                          <span className="flex items-center gap-1 text-neutral-300">
                            <MapPin className="w-3.5 h-3.5 text-teal-400" />
                            {project.location}
                          </span>
                        )}
                        {project.type && (
                          <>
                            <span className="w-1 h-1 rounded-full bg-neutral-600" />
                            <span className="text-teal-400">{project.type}</span>
                          </>
                        )}
                      </div>

                      {/* Project Title */}
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">
                        {project.name}
                      </h3>

                      {/* Description */}
                      {project.description && (
                        <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
                          {project.description}
                        </p>
                      )}

                      {/* Services Provided Pills */}
                      {project.servicesProvided && project.servicesProvided.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.servicesProvided.map((service, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 py-1 rounded-lg text-[11px] font-mono tracking-wider text-neutral-400 bg-neutral-900 border border-neutral-800"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* View Action */}
                    <div className="pt-5 border-t border-neutral-800/80 flex items-center justify-between">
                      <Link
                        href={project.caseStudyLink || "#case-studies"}
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-teal-400 hover:text-teal-300 transition-colors group/link"
                      >
                        <span>View Project Case Study</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </Link>

                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                        Verified Execution
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Elegant empty state for categories where client archives will be added */
            <div className="p-10 md:p-14 rounded-3xl border border-neutral-800/80 bg-neutral-950/60 backdrop-blur-md text-center max-w-2xl mx-auto space-y-4">
              <div className="inline-flex p-3 rounded-2xl bg-neutral-900 border border-neutral-800 text-teal-400 mb-2">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-white">
                {activeFilter} Case Studies &amp; Galleries
              </h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                We have executed memorable experiences in this category across South Tamil Nadu. Contact our team to view private portfolio archives and discuss custom concepts for your event.
              </p>
              <div className="pt-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-400 text-black font-bold text-xs uppercase font-mono tracking-widest transition-colors"
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
