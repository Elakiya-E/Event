"use client";

import React from "react";
import { siteContent } from "@/data/siteContent";

export default function IraguDifference() {
  const content = siteContent.whyIragu;

  return (
    <section 
      id="why-iragu" 
      className="relative w-full bg-[#050505] overflow-hidden py-24 md:py-40 border-t border-neutral-900"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-20 text-center md:text-left">
          {content.heading}
        </h2>
        
        <div className="flex flex-col border-t border-neutral-800">
          {content.differentiators.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative border-b border-neutral-800 py-12 flex flex-col md:flex-row md:items-center justify-between overflow-hidden cursor-pointer"
            >
              {/* Number and Title */}
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12 w-full md:w-1/2">
                <span className="text-neutral-500 font-mono tracking-widest text-sm md:text-base transition-colors group-hover:text-teal-400">
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
                <h3 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-tight group-hover:text-teal-400 transition-colors duration-500 transform group-hover:translate-x-4">
                  {item.title}
                </h3>
              </div>
              
              {/* Description */}
              <div className="relative z-10 mt-6 md:mt-0 w-full md:w-1/2 md:pl-12">
                <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed group-hover:text-white transition-colors duration-300">
                  {item.description}
                </p>
              </div>

              {/* Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-900/0 via-teal-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
