"use client";

import React, { useState } from "react";
import { siteContent } from "@/data/siteContent";

export default function EventShowcase() {
  const content = siteContent.portfolio;
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProjects = activeFilter === "ALL" 
    ? content.projects 
    : content.projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="relative w-full bg-[#030303] py-32">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white whitespace-pre-wrap">
            {content.heading}
          </h2>
          
          <div className="flex flex-wrap gap-2 md:gap-4 md:max-w-md md:justify-end">
            {content.filters.map((filter, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs font-bold tracking-widest uppercase transition-colors rounded-full ${activeFilter === filter ? 'bg-teal-500 text-black' : 'text-neutral-400 hover:text-white border border-neutral-800 hover:border-teal-500/50'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredProjects.map((project, idx) => {
            // Give different heights for a masonry feel
            const heightClass = idx % 3 === 0 ? "aspect-[3/4]" : idx % 3 === 1 ? "aspect-square" : "aspect-[4/3]";
            
            return (
              <div key={idx} className={`group relative bg-neutral-900 overflow-hidden ${heightClass} break-inside-avoid flex flex-col justify-end p-8 cursor-pointer`}>
                
                {/* Elegant abstract background instead of solid grey placeholder */}
                <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center -z-10 overflow-hidden">
                  <div className="absolute w-full h-full bg-gradient-to-br from-teal-950/30 to-black/90" />
                  <div className={`w-[200%] h-[200%] opacity-[0.02] absolute`} style={{ backgroundImage: 'radial-gradient(circle at center, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-teal-400 text-xs tracking-widest uppercase mb-3 flex flex-wrap items-center gap-2">
                    <span>{project.location}</span>
                    <span className="w-1 h-1 rounded-full bg-teal-400/50"></span>
                    <span>{project.type}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">{project.name}</h3>
                  
                  <div className="overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 mt-4">
                    <p className="text-neutral-300 text-sm font-light leading-relaxed">
                      {project.servicesProvided.join(" • ")}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
