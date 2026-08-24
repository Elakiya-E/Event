"use client";

import { siteContent } from "@/data/siteContent";

export default function Locations() {
  const content = siteContent.locations;

  return (
    <section id="locations" className="w-full bg-black text-white py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          {content.heading}
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {content.primary.map((location, idx) => (
            <span 
              key={idx}
              className="text-2xl md:text-4xl font-medium tracking-tight text-teal-400"
            >
              {location}
              {idx < content.primary.length - 1 && <span className="text-neutral-700 ml-4 md:ml-8">|</span>}
            </span>
          ))}
        </div>
        
        <p className="text-xl md:text-2xl text-neutral-400 italic">
          {content.secondary}
        </p>
      </div>
    </section>
  );
}
