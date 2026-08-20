"use client";

import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import DecorScene from "./three/decor/DecorScene";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const DECOR_STAGES = [
  { id: "SPACE", text: "Every detail begins with a blank space.", range: [0.0, 0.2] },
  { id: "ARCHITECTURE", text: "Building the physical structure.", range: [0.2, 0.4] },
  { id: "DECORATION", text: "Layering floral and design elements.", range: [0.4, 0.6] },
  { id: "LIGHT & COLOR", text: "Painting with atmosphere and illumination.", range: [0.6, 0.8] },
  { id: "EXPERIENCE", text: "A completely customised environment.", range: [0.8, 1.0] },
];

export default function CustomisedDecor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneProgress = useRef(0);
  const textContainerRef = useRef<HTMLDivElement>(null);
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

          if (textContainerRef.current) {
            const p = self.progress;
            
            let currentStageIdx = 0;
            for (let i = 0; i < DECOR_STAGES.length; i++) {
              if (p >= DECOR_STAGES[i].range[0] && p < DECOR_STAGES[i].range[1]) {
                currentStageIdx = i;
                break;
              }
            }
            if (p >= 1) currentStageIdx = DECOR_STAGES.length - 1;
            
            const stage = DECOR_STAGES[currentStageIdx];
            
            const rangeStart = stage.range[0];
            const rangeEnd = stage.range[1];
            const stageLength = rangeEnd - rangeStart;
            const localP = (p - rangeStart) / stageLength;
            
            let opacity = 1;
            let yOffset = 0;
            
            if (localP < 0.2) {
              opacity = localP / 0.2;
              yOffset = 10 * (1 - (localP / 0.2));
            } else if (localP > 0.8) {
              opacity = 1 - ((localP - 0.8) / 0.2);
              yOffset = -10 * ((localP - 0.8) / 0.2);
            }

            textContainerRef.current.style.opacity = opacity.toString();
            textContainerRef.current.style.transform = `translateY(${yOffset}px)`;
            
            const titleEl = textContainerRef.current.querySelector('h3');
            const descEl = textContainerRef.current.querySelector('p');
            if (titleEl && titleEl.textContent !== stage.id) titleEl.textContent = stage.id;
            if (descEl && descEl.textContent !== stage.text) descEl.textContent = stage.text;
          }
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [isReducedMotion]);

  return (
    <section id="decor" ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden border-t border-border/10">
      <div className="absolute inset-0 z-0">
        {!isReducedMotion ? (
          <Canvas camera={{ position: [0, 2, 8], fov: 45 }} dpr={[1, 2]}>
            <DecorScene sceneProgress={sceneProgress} />
          </Canvas>
        ) : (
          <div className="flex flex-col items-center justify-center h-full space-y-12 px-6">
            <h2 className="text-3xl text-accent font-serif tracking-widest">CUSTOMISED DÉCOR</h2>
            {DECOR_STAGES.map(stage => (
              <div key={stage.id} className="text-center">
                <h3 className="text-xl text-white font-bold">{stage.id}</h3>
                <p className="text-gray-400 mt-2">{stage.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {!isReducedMotion && (
        <div className="relative z-10 w-full h-full flex flex-col justify-end pb-24 px-6 md:px-24 pointer-events-none">
          <h2 className="text-sm text-accent font-mono tracking-[0.2em] mb-4 uppercase">Customised Décor</h2>
          <div ref={textContainerRef} className="max-w-2xl">
            <h3 className="text-3xl md:text-5xl font-serif text-white uppercase drop-shadow-lg">
              SPACE
            </h3>
            <p className="mt-2 text-xl md:text-2xl text-gray-300 drop-shadow-md">
              Every detail begins with a blank space.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
