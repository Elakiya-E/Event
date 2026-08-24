"use client";

import React from "react";
import { siteContent } from "@/data/siteContent";

export default function ServicesExperience() {
  const content = siteContent.completeServices;

  return (
    <section id="services" className="relative w-full bg-[#030303] py-24 md:py-32 border-t border-neutral-900">
      <div className="w-full max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-20 text-center md:text-left">
          {siteContent.eventCategories.heading}
        </h2>
        
        <div className="mb-32">
          <div className="flex flex-col border-t border-neutral-800">
            {siteContent.eventCategories.categories.map((category, idx) => (
              <div 
                key={idx} 
                className="group relative border-b border-neutral-800 py-12 flex flex-col lg:flex-row lg:items-center justify-between overflow-hidden cursor-pointer hover:bg-neutral-900/30 transition-colors"
              >
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12 w-full lg:w-1/3">
                  <span className="text-neutral-500 font-mono tracking-widest text-sm">
                    {(idx + 1).toString().padStart(2, '0')}
                  </span>
                  <h4 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight group-hover:text-teal-400 transition-colors duration-500">
                    {category.title}
                  </h4>
                </div>
                
                <div className="relative z-10 mt-8 lg:mt-0 lg:w-2/3 pl-0 md:pl-16 lg:pl-0 flex flex-wrap gap-x-8 gap-y-4">
                  {category.items.map((item, itemIdx) => (
                    <span key={itemIdx} className="text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300 flex items-center gap-2 text-sm md:text-base">
                      <span className="w-1 h-1 rounded-full bg-teal-500/0 group-hover:bg-teal-500/50 transition-colors duration-300" />
                      {item}
                    </span>
                  ))}
                </div>

                {/* Subtle hover background effect */}
                <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-teal-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-12 text-center">
            {content.heading}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-neutral-800 border border-neutral-800">
            {content.services.map((service, idx) => (
              <div key={idx} className="bg-[#030303] p-8 flex flex-col justify-center text-center group hover:bg-neutral-900 transition-colors">
                <span className="text-sm md:text-base font-medium tracking-widest uppercase text-neutral-300 group-hover:text-teal-400 transition-colors duration-300">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-2xl md:text-4xl font-bold text-white whitespace-pre-wrap leading-relaxed inline-block border-b-2 border-teal-500 pb-2">
            {content.closing}
          </p>
        </div>
      </div>
    </section>
  );
}
