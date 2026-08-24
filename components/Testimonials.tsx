"use client";

import { siteContent } from "@/data/siteContent";

export default function Testimonials() {
  const content = siteContent.testimonials;

  return (
    <section id="testimonials" className="w-full bg-[#050505] text-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-16 whitespace-pre-wrap text-white">
          {content.heading}
        </h2>
        
        {content.reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.reviews.map((review: { text: string, author: string }, idx: number) => (
              <div key={idx} className="bg-neutral-900 p-8 rounded-xl text-left flex flex-col space-y-4">
                <div className="text-yellow-500 text-xl">⭐⭐⭐⭐⭐</div>
                <p className="text-neutral-300 italic flex-grow">&quot;{review.text}&quot;</p>
                <p className="font-bold text-teal-400 mt-4">- {review.author}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-24 border border-neutral-800 rounded-xl bg-neutral-900/50 flex items-center justify-center">
            <p className="text-xl text-neutral-500 font-mono tracking-widest uppercase">
              [{content.placeholder}]
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
