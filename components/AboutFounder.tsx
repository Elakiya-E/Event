"use client";

import { siteContent } from "@/data/siteContent";

export default function AboutFounder() {
  const content = siteContent.about;

  return (
    <section id="about" className="w-full bg-[#050505] text-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div className="aspect-[3/4] bg-neutral-900 rounded-xl overflow-hidden relative flex items-center justify-center border border-neutral-800">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-teal-900/10" />
          <div className="w-64 h-64 border border-white/5 rounded-full absolute -top-10 -right-10 opacity-20" />
          <div className="w-[150%] h-[150%] opacity-10 absolute" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px' }} />
        </div>

        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            {content.heading}
          </h2>
          
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
            {content.content}
          </p>
          
          <div className="pt-8 border-t border-neutral-800">
            <h3 className="text-2xl font-bold text-teal-400">{content.founder}</h3>
            <p className="text-neutral-500 uppercase tracking-widest mt-1 text-sm">{content.title}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
