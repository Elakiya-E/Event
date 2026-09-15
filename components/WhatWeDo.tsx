"use client";

import { siteContent } from "@/data/siteContent";

export default function WhatWeDo() {
  const content = siteContent.whatWeDo;

  return (
    <section id="services" className="w-full bg-[#F1EADF] py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-[#DED6C9]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5 space-y-4">
          <span className="text-[#4F918B] font-mono text-xs tracking-widest uppercase">
            {content.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#292825] leading-tight">
            {content.heading}
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#C7A978]">
            {content.subheading}
          </h3>
          <div className="pt-4 sm:pt-6">
            <div className="inline-block p-3 sm:p-4 rounded-lg bg-[#FCFAF6] border border-[#DED6C9]">
              <p className="text-xs sm:text-sm font-semibold text-[#292825] tracking-wide uppercase">
                {siteContent.brand.signature}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-sm sm:text-base md:text-lg text-[#6F6A61] font-light leading-relaxed">
          <p className="text-lg sm:text-xl md:text-2xl font-normal text-[#292825]">
            {content.intro}
          </p>
          <div className="space-y-4 whitespace-pre-wrap text-[#6F6A61]">
            {content.body}
          </div>
          <div className="pt-4 border-l-2 border-[#C7A978] pl-4">
            <p className="text-base sm:text-lg md:text-xl font-medium text-[#4F918B] italic">
              &quot;{content.highlight}&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
