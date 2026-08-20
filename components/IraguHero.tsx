"use client";

import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IraguHeroScene from "./three/IraguHeroScene";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function IraguHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneProgress = useRef(0);
  const textRef1 = useRef<HTMLHeadingElement>(null);
  const textRef2 = useRef<HTMLHeadingElement>(null);
  const textRef3 = useRef<HTMLHeadingElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isReducedMotion || !containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%",
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          sceneProgress.current = self.progress;
        },
      },
    });

    // Typography animations
    tl.to(textRef1.current, { y: -50, opacity: 0, duration: 0.2 }, 0.2)
      .to(textRef2.current, { y: -50, opacity: 0, duration: 0.2 }, 0.4)
      .to(textRef3.current, { y: -50, opacity: 0, duration: 0.2 }, 0.6)
      .to(textContainerRef.current, { opacity: 0, duration: 0.2 }, 0.8);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isReducedMotion]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full h-screen bg-[#050505] overflow-hidden pt-24"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        {!isReducedMotion ? (
          <Canvas
            camera={{ position: [0, 0, 8], fov: 45 }}
            dpr={[1, 2]} // Support higher pixel density for retina displays, capped at 2 for performance
            gl={{ antialias: true, alpha: false }}
          >
            <IraguHeroScene sceneProgress={sceneProgress} />
          </Canvas>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-teal-950/20" />
        )}
      </div>

      {/* HTML Overlay */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 pointer-events-none">
        <div ref={textContainerRef} className="max-w-3xl pointer-events-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white uppercase leading-[0.9]">
            <span ref={textRef1} className="block overflow-hidden">
              WE CREATE
            </span>
            <span ref={textRef2} className="block overflow-hidden text-teal-400">
              EXPERIENCES
            </span>
            <span ref={textRef3} className="block overflow-hidden">
              THAT STAY
            </span>
          </h1>
          
          <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-xl font-light">
            From ideas to unforgettable celebrations, we plan, design and execute
            events that leave lasting impressions.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <Link
              href="#plan"
              className="group relative inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              PLAN YOUR EVENT
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="#work"
              className="text-white hover:text-teal-400 font-medium tracking-wide transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-teal-400 after:origin-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300"
            >
              EXPLORE OUR WORK
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
