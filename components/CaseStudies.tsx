"use client";

import { siteContent } from "@/data/siteContent";
import Link from "next/link";

export default function CaseStudies() {
  const content = siteContent.caseStudies;

  return (
    <section id="case-studies" className="w-full bg-black text-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-16 text-center">
          {content.heading}
        </h2>
        
        <div className="space-y-24">
          {content.items.map((study, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              {/* Left Column: Visual & High-level details */}
              <div className="space-y-8">
                <div className="aspect-video bg-neutral-900 rounded-xl overflow-hidden relative flex items-center justify-center border border-neutral-800">
                  <div className="absolute w-full h-full bg-gradient-to-br from-teal-900/10 to-black" />
                  <div className="w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-5xl font-bold text-white whitespace-pre-wrap leading-tight">
                    {study.title}
                  </h3>
                  <div className="flex flex-col space-y-2 text-sm text-teal-400 font-mono tracking-widest uppercase">
                    <span>Client: {study.client}</span>
                    <span>Location: {study.location}</span>
                    <span>Event: {study.event}</span>
                  </div>
                </div>
              </div>
              
              {/* Right Column: Narrative */}
              <div className="flex flex-col justify-center space-y-12">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white">THE CHALLENGE</h4>
                  <p className="text-lg text-neutral-400 leading-relaxed">{study.challenge}</p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white">OUR APPROACH</h4>
                  <p className="text-lg text-neutral-400 leading-relaxed">{study.approach}</p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white">EXECUTION & RESULT</h4>
                  <p className="text-lg text-neutral-400 leading-relaxed">{study.execution}</p>
                  <p className="text-lg text-neutral-300 font-medium leading-relaxed italic border-l-2 border-teal-500 pl-4 mt-4">&quot;{study.result}&quot;</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <Link href="#portfolio" className="inline-block px-8 py-4 bg-teal-500 text-black font-bold uppercase tracking-widest hover:bg-teal-400 transition-colors">
            {content.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
