'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function ScrollProgress() {
  const prefersReducedMotion = useReducedMotion();
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;
    
    // Use the global gsap instance registered in useGsap, or register just to be safe
    gsap.registerPlugin(ScrollTrigger);

    const st = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      animation: gsap.fromTo(
        progressLineRef.current,
        { scaleY: 0 },
        { scaleY: 1, ease: 'none' }
      ),
      scrub: true,
    });

    return () => {
      st.kill();
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-center gap-4 opacity-50 mix-blend-difference pointer-events-none">
      <span className="text-[10px] font-sans tracking-widest text-white rotate-180" style={{ writingMode: 'vertical-rl' }}>SCROLL</span>
      <div className="w-[1px] h-24 bg-white/20 relative origin-top">
        <div ref={progressLineRef} className="absolute top-0 left-0 w-full h-full bg-white origin-top scale-y-0" />
      </div>
    </div>
  );
}
