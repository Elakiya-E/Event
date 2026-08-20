"use client";

import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import ShowcaseScene from "./three/showcase/ShowcaseScene";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SHOWCASE_DATA = [
  { id: "AURA", title: "THE AURA GALA", location: "Metropolis Museum", scale: "1,200 Guests" },
  { id: "NOVA", title: "PROJECT NOVA", location: "Industrial Pier 4", scale: "800 Guests" },
  { id: "ECHO", title: "ECHO SUMMIT", location: "Botanical Glasshouse", scale: "450 Guests" },
];

export default function EventShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneProgress = useRef(0);
  const uiContainerRef = useRef<HTMLDivElement>(null);
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isReducedMotion || !containerRef.current) return;

    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=500%",
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          sceneProgress.current = self.progress;

          if (uiContainerRef.current) {
            const p = self.progress;
            
            // UI fading logic
            // 0.0 - 0.2: Transition from Decor
            // 0.2 - 0.4: Event 1 (AURA)
            // 0.5 - 0.7: Event 2 (NOVA)
            // 0.8 - 1.0: Event 3 (ECHO)
            
            let activeIdx = -1;
            let opacity = 0;
            
            if (p > 0.2 && p < 0.45) {
              activeIdx = 0;
              opacity = Math.sin(((p - 0.2) / 0.25) * Math.PI);
            } else if (p > 0.45 && p < 0.75) {
              activeIdx = 1;
              opacity = Math.sin(((p - 0.45) / 0.3) * Math.PI);
            } else if (p > 0.75) {
              activeIdx = 2;
              opacity = Math.sin(((p - 0.75) / 0.25) * Math.PI);
            }

            uiContainerRef.current.style.opacity = opacity.toString();
            
            if (activeIdx >= 0) {
              const data = SHOWCASE_DATA[activeIdx];
              const titleEl = uiContainerRef.current.querySelector('.showcase-title');
              const detailsEl = uiContainerRef.current.querySelector('.showcase-details');
              
              if (titleEl && titleEl.textContent !== data.title) titleEl.textContent = data.title;
              if (detailsEl && detailsEl.textContent !== `${data.location} // ${data.scale}`) {
                detailsEl.textContent = `${data.location} // ${data.scale}`;
              }
            }
          }
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [isReducedMotion]);

  return (
    <section id="showcase" ref={containerRef} className="relative w-full h-screen bg-[#030303] overflow-hidden">
      <div className="absolute inset-0 z-0">
        {!isReducedMotion ? (
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
            <ShowcaseScene sceneProgress={sceneProgress} />
          </Canvas>
        ) : (
          <div className="flex flex-col items-center justify-center h-full space-y-16 px-6 py-24 bg-[#030303]">
            <h2 className="text-3xl text-accent font-serif tracking-widest uppercase">Portfolio</h2>
            {SHOWCASE_DATA.map(item => (
              <div key={item.id} className="text-center">
                <h3 className="text-4xl text-white font-serif uppercase mb-2">{item.title}</h3>
                <p className="text-gray-400 font-mono text-sm tracking-widest">{item.location} {"//"} {item.scale}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {!isReducedMotion && (
        <div 
          ref={uiContainerRef} 
          className="absolute inset-0 z-10 flex flex-col justify-end pb-24 px-6 md:px-24 pointer-events-none opacity-0 will-change-opacity transition-opacity duration-300"
        >
          <div className="max-w-3xl">
            <h4 className="text-accent font-mono text-xs tracking-[0.3em] uppercase mb-4">Featured Experience</h4>
            <h3 className="showcase-title text-4xl md:text-6xl lg:text-7xl font-serif text-white uppercase drop-shadow-xl mb-4">
              TITLE
            </h3>
            <p className="showcase-details text-sm md:text-base text-gray-300 font-sans tracking-widest uppercase drop-shadow-md border-l border-accent/50 pl-4">
              LOCATION // SCALE
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
