"use client";

import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EventWorldScene from "./three/EventWorldScene";
import { useReducedMotion } from "@/hooks/useReducedMotion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function EventWorld() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneProgress = useRef(0);
  
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const wordsContainerRef = useRef<HTMLDivElement>(null);
  const word1Ref = useRef<HTMLSpanElement>(null);
  const word2Ref = useRef<HTMLSpanElement>(null);
  const word3Ref = useRef<HTMLSpanElement>(null);
  
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isReducedMotion || !containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=500%", // 500vh
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          sceneProgress.current = self.progress;
        },
      },
    });

    // 0.00 -> 0.30: Wait for leaves to clear, then reveal intro typography
    tl.to(title1Ref.current, { opacity: 1, y: 0, duration: 0.1 }, 0.2)
      .to(title2Ref.current, { opacity: 1, y: 0, duration: 0.1 }, 0.25)
      .to(title1Ref.current, { opacity: 0, y: -50, duration: 0.15 }, 0.5)
      .to(title2Ref.current, { opacity: 0, y: -50, duration: 0.15 }, 0.5);

    // 0.70 -> 0.85: Reveal event concepts
    tl.to(wordsContainerRef.current, { opacity: 1, duration: 0.05 }, 0.7)
      .to(word1Ref.current, { opacity: 1, x: 0, duration: 0.05 }, 0.7)
      .to(word2Ref.current, { opacity: 1, x: 0, duration: 0.05 }, 0.75)
      .to(word3Ref.current, { opacity: 1, x: 0, duration: 0.05 }, 0.8)
      .to(wordsContainerRef.current, { opacity: 0, duration: 0.1 }, 0.9);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isReducedMotion]);

  return (
    <section
      id="event-world"
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
            <EventWorldScene sceneProgress={sceneProgress} />
          </Canvas>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-black to-teal-950/20 flex items-center justify-center">
            <h2 className="text-4xl text-teal-400 font-bold">WE TURN IDEAS INTO EXPERIENCES</h2>
          </div>
        )}
      </div>

      {/* HTML Overlay */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 pointer-events-none">
        
        {/* Intro Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
          <h2 
            ref={title1Ref} 
            className="text-4xl md:text-6xl font-bold tracking-tighter text-teal-400 uppercase opacity-0 translate-y-12"
          >
            WE TURN IDEAS
          </h2>
          <h2 
            ref={title2Ref} 
            className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase opacity-0 translate-y-12 mt-2"
          >
            INTO EXPERIENCES
          </h2>
        </div>

        {/* Concept Words */}
        <div 
          ref={wordsContainerRef}
          className="absolute inset-0 flex items-center justify-around opacity-0 text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white uppercase px-12"
        >
          <span ref={word1Ref} className="opacity-0 -translate-x-8">PLAN</span>
          <span ref={word2Ref} className="opacity-0 -translate-x-8 text-teal-400">CREATE</span>
          <span ref={word3Ref} className="opacity-0 -translate-x-8 text-yellow-500">CELEBRATE</span>
        </div>

      </div>
    </section>
  );
}
