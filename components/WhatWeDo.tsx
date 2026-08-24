"use client";

import { siteContent } from "@/data/siteContent";

export default function WhatWeDo() {
  const content = siteContent.whatWeDo;

  return (
    <section id="what-we-do" className="w-full bg-[#050505] text-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            {content.heading}
          </h2>
          <h3 className="text-2xl md:text-3xl font-medium text-teal-400">
            {content.subheading}
          </h3>
        </div>
        <div className="space-y-6 text-lg text-neutral-300 leading-relaxed whitespace-pre-wrap">
          {content.body}
        </div>
      </div>
    </section>
  );
}
