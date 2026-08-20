"use client";

import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import ServicesScene from "./three/services/ServicesScene";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SERVICES_DATA = [
  { id: "intro", title: "WHAT WE CREATE", sub: "SERVICES" },
  { id: "planning", title: "EVENT PLANNING", sub: "From the first idea to the final guest leaving, every detail has a place." },
  { id: "design", title: "EVENT DESIGN", sub: "Crafting physical spaces that tell your unique story." },
  { id: "decor", title: "DECOR & STYLING", sub: "Expressive touches that elevate the atmosphere." },
  { id: "management", title: "EVENT MANAGEMENT", sub: "Seamless execution orchestrated by our expert team." },
  { id: "corporate", title: "CORPORATE EVENTS", sub: "Sophisticated modern environments for professional milestones." },
  { id: "celebration", title: "WEDDINGS & CELEBRATIONS", sub: "Vibrant and joyful moments brought to life." },
  { id: "outro", title: "ONE IDEA.\nMANY WAYS TO CELEBRATE.", sub: "EXPLORE OUR SERVICES ↓" }
];

export default function ServicesExperience() {
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
            
            // Logic for active service
            // 0.0 - 0.12: Intro
            // 0.12 - 0.25: Planning
            // 0.25 - 0.38: Design
            // 0.38 - 0.51: Decor
            // 0.51 - 0.64: Management
            // 0.64 - 0.77: Corporate
            // 0.77 - 0.90: Celebration
            // 0.90 - 1.00: Outro
            
            let activeIdx = 0;
            if (p > 0.12 && p <= 0.25) activeIdx = 1;
            else if (p > 0.25 && p <= 0.38) activeIdx = 2;
            else if (p > 0.38 && p <= 0.51) activeIdx = 3;
            else if (p > 0.51 && p <= 0.64) activeIdx = 4;
            else if (p > 0.64 && p <= 0.77) activeIdx = 5;
            else if (p > 0.77 && p <= 0.90) activeIdx = 6;
            else if (p > 0.90) activeIdx = 7;

            // Fade logic (fade out at the edges of segments)
            const segmentSize = 0.13;
            const localP = activeIdx === 7 ? (p - 0.9) / 0.1 : (p - (activeIdx * segmentSize)) / segmentSize;
            
            // Fade in first 20%, fade out last 20%
            let opacity = 1;
            if (localP < 0.2) opacity = localP / 0.2;
            else if (localP > 0.8) opacity = 1 - ((localP - 0.8) / 0.2);

            uiContainerRef.current.style.opacity = opacity.toString();
            
            const data = SERVICES_DATA[activeIdx];
            const titleEl = uiContainerRef.current.querySelector('.service-title');
            const subEl = uiContainerRef.current.querySelector('.service-sub');
            
            if (titleEl && titleEl.textContent !== data.title) {
              // Handle newlines
              titleEl.innerHTML = data.title.replace(/\n/g, '<br/>');
            }
            if (subEl && subEl.textContent !== data.sub) {
              subEl.textContent = data.sub;
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
    <section id="services" ref={containerRef} className="relative w-full h-screen bg-[#030303] overflow-hidden">
      <div className="absolute inset-0 z-0">
        {!isReducedMotion ? (
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
            <ServicesScene sceneProgress={sceneProgress} />
          </Canvas>
        ) : (
          <div className="flex flex-col items-center justify-center h-full overflow-y-auto space-y-16 px-6 py-24 bg-[#030303]">
            <h2 className="text-3xl text-accent font-serif tracking-widest uppercase">Services</h2>
            {SERVICES_DATA.slice(1, 7).map(item => (
              <div key={item.id} className="text-center">
                <h3 className="text-4xl text-white font-serif uppercase mb-2">{item.title}</h3>
                <p className="text-gray-400 font-mono text-sm tracking-widest">{item.sub}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {!isReducedMotion && (
        <div 
          ref={uiContainerRef} 
          className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center pointer-events-none opacity-0 will-change-opacity"
        >
          <div className="max-w-4xl px-6">
            <h4 className="service-sub text-accent font-mono text-xs tracking-[0.3em] uppercase mb-4 drop-shadow-md">
              SERVICES
            </h4>
            <h3 className="service-title text-4xl md:text-6xl lg:text-7xl font-serif text-white uppercase drop-shadow-xl">
              WHAT WE CREATE
            </h3>
          </div>
        </div>
      )}
    </section>
  );
}
