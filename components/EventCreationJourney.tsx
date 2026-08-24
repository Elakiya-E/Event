"use client";

import React, { useRef } from "react";
import { useGSAP, gsap } from "@/hooks/useGsap";
import { siteContent } from "@/data/siteContent";

export default function EventCreationJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const steps = siteContent.howWeWork.steps;

  useGSAP(() => {
    if (!containerRef.current || !stepsContainerRef.current) return;
    
    // Only apply horizontal scroll on desktop
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 1024px)", () => {
      const container = stepsContainerRef.current;
      if (!container) return;
      
      const totalWidth = container.scrollWidth;
      const viewportWidth = window.innerWidth;
      
      gsap.to(container, {
        x: -(totalWidth - viewportWidth + 100), // 100px padding
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${totalWidth}`,
        }
      });
    });

    return () => {
      mm.revert();
    };
  }, { scope: containerRef });

  return (
    <section
      id="creation"
      ref={containerRef}
      className="relative w-full bg-[#020202] py-24 lg:py-0 lg:h-screen lg:flex lg:flex-col lg:justify-center overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-6 mb-16 lg:mb-24 lg:absolute lg:top-24 lg:left-0 lg:right-0 z-10 pointer-events-none">
        <h2 className="text-sm md:text-base font-bold tracking-widest text-teal-500 uppercase">
          {siteContent.howWeWork.heading}
        </h2>
      </div>
      
      {/* Mobile: Vertical, Desktop: Horizontal */}
      <div 
        ref={stepsContainerRef}
        className="flex flex-col lg:flex-row gap-16 lg:gap-32 px-6 lg:pl-10 lg:pr-32 w-full lg:w-max"
      >
        {steps.map((step, idx) => (
          <div 
            key={idx} 
            className="flex flex-col lg:w-[400px] lg:shrink-0 relative"
          >
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-6 left-12 right-[-128px] h-px bg-neutral-800 -z-10" />
            <div className="lg:hidden absolute left-[23px] top-12 bottom-[-64px] w-px bg-neutral-800 -z-10" />

            <div className="flex items-start lg:flex-col gap-6 lg:gap-12">
              <div className="w-12 h-12 rounded-full bg-[#050505] border border-teal-500/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(20,184,166,0.1)]">
                <span className="text-teal-400 font-mono text-sm tracking-widest">
                  0{idx + 1}
                </span>
              </div>
              
              <div className="pt-2 lg:pt-0">
                <h3 className="text-3xl font-bold tracking-tight text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-neutral-400 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
