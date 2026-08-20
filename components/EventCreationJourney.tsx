"use client";

import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CreationScene from "./three/event-creation/CreationScene";
import { useReducedMotion } from "@/hooks/useReducedMotion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STAGES = [
  { id: "IDEA", title: "EVERY EVENT STARTS WITH AN IDEA.", range: [0.00, 0.12] },
  { id: "PLAN", title: "Understanding your vision, audience and goals.", range: [0.12, 0.30] },
  { id: "DESIGN", title: "Turning an idea into a memorable environment.", range: [0.30, 0.48] },
  { id: "COORDINATE", title: "Bringing every detail together at the right time.", range: [0.48, 0.68] },
  { id: "EXECUTE", title: "From planning to flawless execution.", range: [0.68, 0.85] },
  { id: "CELEBRATE", title: "YOU ENJOY THE MOMENT. WE HANDLE THE REST.", range: [0.85, 1.00] }
];

export default function EventCreationJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneProgress = useRef(0);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const progressIndicatorRef = useRef<HTMLDivElement>(null);
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isReducedMotion || !containerRef.current) return;

    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=500%", // 500vh
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          sceneProgress.current = self.progress;
          
          // Update typography via DOM to avoid React re-renders during scroll
          if (textContainerRef.current && progressIndicatorRef.current) {
            const p = self.progress;
            
            // Find current stage
            let currentStageIdx = 0;
            for (let i = 0; i < STAGES.length; i++) {
              if (p >= STAGES[i].range[0] && p < STAGES[i].range[1]) {
                currentStageIdx = i;
                break;
              }
            }
            if (p >= 1) currentStageIdx = STAGES.length - 1;
            
            const stage = STAGES[currentStageIdx];
            
            // Calculate local progress within the stage for opacity/y-movement
            const rangeStart = stage.range[0];
            const rangeEnd = stage.range[1];
            const stageLength = rangeEnd - rangeStart;
            const localP = (p - rangeStart) / stageLength;
            
            // Fade in/out logic (fade in first 20%, fade out last 20%)
            let opacity = 1;
            let yOffset = 0;
            
            if (localP < 0.2) {
              opacity = localP / 0.2;
              yOffset = 20 * (1 - (localP / 0.2)); // move up from 20px
            } else if (localP > 0.8) {
              opacity = 1 - ((localP - 0.8) / 0.2);
              yOffset = -20 * ((localP - 0.8) / 0.2); // move up to -20px
            }

            textContainerRef.current.style.opacity = opacity.toString();
            textContainerRef.current.style.transform = `translateY(${yOffset}px)`;
            
            // Update Text Content efficiently
            const titleEl = textContainerRef.current.querySelector('h3');
            const descEl = textContainerRef.current.querySelector('p');
            if (titleEl && titleEl.textContent !== stage.id) titleEl.textContent = stage.id;
            if (descEl && descEl.textContent !== stage.title) descEl.textContent = stage.title;
            
            // Update Progress Indicator
            const indicatorText = `0${currentStageIdx + 1} / 06`;
            if (progressIndicatorRef.current.textContent !== indicatorText) {
              progressIndicatorRef.current.textContent = indicatorText;
            }
          }
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isReducedMotion]);

  return (
    <section
      id="creation"
      ref={containerRef}
      className="relative w-full h-screen bg-black overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        {!isReducedMotion ? (
          <Canvas
            camera={{ position: [0, 0, 8], fov: 45 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: false }}
          >
            <CreationScene sceneProgress={sceneProgress} />
          </Canvas>
        ) : (
          <div className="absolute inset-0 bg-black overflow-y-auto pt-24 px-6 pb-24 space-y-24">
            {STAGES.map((stage, idx) => (
              <div key={stage.id} className="text-center">
                <span className="text-teal-400 font-mono text-sm tracking-widest mb-4 block">0{idx + 1} / 06</span>
                <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase mb-6">{stage.id}</h3>
                <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto">{stage.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* HTML Overlay (Hidden if reduced motion since we render static list above) */}
      {!isReducedMotion && (
        <div className="relative z-10 w-full h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 pointer-events-none">
          <div className="absolute bottom-12 left-6 md:left-12 lg:left-24">
            <div 
              ref={progressIndicatorRef} 
              className="text-teal-400 font-mono text-sm tracking-widest mb-4"
            >
              01 / 06
            </div>
          </div>
          
          <div 
            ref={textContainerRef}
            className="max-w-2xl"
          >
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-teal-400 uppercase drop-shadow-lg">
              IDEA
            </h3>
            <p className="mt-6 text-2xl md:text-3xl text-white font-light drop-shadow-md">
              EVERY EVENT STARTS WITH AN IDEA.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
