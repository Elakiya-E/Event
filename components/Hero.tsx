'use client';

import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { useGSAP, ScrollTrigger, gsap } from '@/hooks/useGsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Canvas } from '@react-three/fiber';

// Dynamically load Three.js scene for performance
const HeroScene = dynamic(() => import('./three/HeroScene'), { ssr: false });

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  
  // Parallax layers
  const bgRef = useRef<HTMLDivElement>(null);
  const canvasLayerRef = useRef<HTMLDivElement>(null);
  const contentLayerRef = useRef<HTMLDivElement>(null);
  
  // Typography lines
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const atmosphericGlowRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion) return;

    const tl = ScrollTrigger.create({
      trigger: stageRef.current,
      start: 'top top',
      end: '+=150%', // scroll distance for the cinematic effect
      pin: true,
      animation: gsap.timeline()
        // Parallax Layers
        .to(bgRef.current, { y: '5%', ease: 'none', duration: 1 }, 0)
        .to(canvasLayerRef.current, { y: '15%', ease: 'none', duration: 1 }, 0)
        .to(contentLayerRef.current, { y: '25%', ease: 'none', duration: 1 }, 0)
        
        // Splitting headline animation (staggered & different rates)
        .to(line1Ref.current, { y: -30, opacity: 0, ease: 'power1.inOut', duration: 0.6 }, 0.1)
        .to(line2Ref.current, { y: -45, opacity: 0, ease: 'power1.inOut', duration: 0.7 }, 0.15)
        .to(line3Ref.current, { y: -15, opacity: 0, ease: 'power1.inOut', duration: 0.8 }, 0.2)
        
        // Subtext and CTAs transition out
        .to(subtextRef.current, { opacity: 0, y: -20, ease: 'none', duration: 0.5 }, 0.1)
        .to(ctaRef.current, { opacity: 0, y: -20, ease: 'none', duration: 0.5 }, 0.2)
        
        // Cinematic Viewport Shrinking & Rounding
        .to(viewportRef.current, { 
          borderRadius: '40px', 
          scale: 0.94,
          ease: 'power1.inOut', 
          duration: 1 
        }, 0)
        
        // Dark Atmospheric Reveal
        .to(atmosphericGlowRef.current, { opacity: 1, duration: 1, ease: 'power1.inOut' }, 0),
        
      scrub: 1, // smooth scrubbing
    });

    return () => {
      tl.kill();
    };
  }, { scope: stageRef, dependencies: [prefersReducedMotion] });

  return (
    <div id="hero" ref={stageRef} className="relative w-full h-screen bg-black overflow-hidden">
      
      {/* Background atmosphere revealed behind the cinematic viewport */}
      <div 
        ref={atmosphericGlowRef}
        className="absolute inset-0 z-0 opacity-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#111] via-[#050505] to-black"
      />
      
      <div 
        ref={viewportRef} 
        className="absolute inset-0 w-full h-full bg-[#050505] overflow-hidden transform-origin-center will-change-transform z-10"
      >
        {/* Layer 1: Atmospheric Background */}
        <div ref={bgRef} className="absolute inset-0 w-full h-full will-change-transform">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-10" />
        </div>
        
        {/* Layer 2: 3D / Particles */}
        <div ref={canvasLayerRef} className="absolute inset-0 z-0 will-change-transform">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
            <HeroScene />
          </Canvas>
        </div>

        {/* Layer 3: Typography & UI */}
        <div 
          ref={contentLayerRef} 
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 will-change-transform"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold uppercase tracking-tight max-w-4xl leading-[1.15] mb-6 text-foreground flex flex-col items-center">
            <span ref={line1Ref} className="block will-change-transform">HELPING PEOPLE &</span>
            <span ref={line2Ref} className="block will-change-transform">BRANDS CREATE</span>
            <span ref={line3Ref} className="block will-change-transform">STRESS-FREE EVENTS</span>
          </h1>
          
          <p 
            ref={subtextRef}
            className="text-lg md:text-xl text-muted font-sans mb-10 will-change-transform"
          >
            Complete Event Planning & Management
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 will-change-transform">
            <button className="bg-accent text-black font-semibold px-8 py-4 rounded-full uppercase tracking-wider hover:bg-white transition-colors">
              Plan My Event
            </button>
            <button className="border border-border text-foreground px-8 py-4 rounded-full uppercase tracking-wider hover:bg-white/10 transition-colors">
              View Our Work
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs uppercase tracking-widest font-sans">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </div>
    </div>
  );
}
