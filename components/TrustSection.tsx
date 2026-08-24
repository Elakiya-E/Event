"use client";

import { siteContent } from "@/data/siteContent";

export default function TrustSection() {
  const content = siteContent.trust;

  return (
    <section id="trust" className="w-full bg-black text-white py-24 md:py-32 flex flex-col items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          {content.heading}
        </h2>
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
          {content.statement}
        </p>
      </div>
    </section>
  );
}
