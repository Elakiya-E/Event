"use client";

import { siteContent } from "@/data/siteContent";
import Link from "next/link";

export default function FinalCTA() {
  const content = siteContent.cta;

  return (
    <section id="contact" className="w-full bg-teal-500 text-black py-24 md:py-40 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-teal-900">
          {content.heading}
        </h3>
        
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight whitespace-pre-wrap leading-tight">
          {content.subheading}
        </h2>
        
        <p className="text-xl md:text-2xl text-teal-950 max-w-2xl mx-auto">
          {content.body}
        </p>
        
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="#contact" className="inline-block px-10 py-5 bg-black text-white font-bold uppercase tracking-widest text-lg hover:bg-neutral-800 transition-colors w-full sm:w-auto">
            {content.button}
          </Link>
        </div>

        <div className="pt-16 flex flex-wrap justify-center gap-8 text-teal-950 font-bold tracking-widest uppercase">
          {content.contactLinks.map((link, idx) => (
            <a key={idx} href="#" className="hover:text-black transition-colors">
              {link.type}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
