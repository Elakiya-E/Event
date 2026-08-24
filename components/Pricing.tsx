"use client";

import { siteContent } from "@/data/siteContent";
import Link from "next/link";

export default function Pricing() {
  const content = siteContent.pricing;

  return (
    <section id="pricing" className="w-full bg-black text-white py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white whitespace-pre-wrap">
          {content.heading}
        </h2>
        
        <div className="py-12 border-y border-neutral-800">
          <p className="text-2xl md:text-4xl font-bold text-teal-400 whitespace-pre-wrap leading-relaxed">
            {content.startingFrom}
          </p>
        </div>
        
        <div className="space-y-6 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto text-left">
          <p className="pl-4 border-l-2 border-neutral-800">{content.body1}</p>
          <p className="pl-4 border-l-2 border-neutral-800">{content.body2}</p>
        </div>
        
        <div className="pt-12">
          <Link href="#contact" className="inline-block px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors">
            {content.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
