"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SECTIONS = [
  { id: "hero", label: "01 / HERO" },
  { id: "event-world", label: "02 / EVENT WORLD" },
  { id: "creation", label: "03 / CREATION" },
  { id: "difference", label: "04 / DIFFERENCE" },
  { id: "decor", label: "05 / DÉCOR" },
  { id: "showcase", label: "06 / PORTFOLIO" },
  { id: "services", label: "07 / SERVICES" },
];

export default function ScrollIndicator() {
  const indicatorRef = useRef<HTMLDivElement>(null);
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isReducedMotion) return;

    // We don't want to create new ScrollTriggers if they're not needed,
    // but tracking current section across the entire page is easiest with a global scroll event or ScrollTrigger instances per section.
    // However, since we want to avoid duplicate heavy triggers, we can just hook into window scroll and calculate bounds, 
    // or use lightweight ScrollTriggers on each section.

    const triggers: ScrollTrigger[] = [];

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) {
        const st = ScrollTrigger.create({
          trigger: el,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive && indicatorRef.current) {
              // Direct DOM mutation
              if (indicatorRef.current.textContent !== section.label) {
                indicatorRef.current.textContent = section.label;
              }
            }
          }
        });
        triggers.push(st);
      }
    });

    return () => {
      triggers.forEach(t => t.kill());
    };
  }, [isReducedMotion]);

  if (isReducedMotion) return null;

  return (
    <div className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-50 mix-blend-difference pointer-events-none hidden md:block">
      <div 
        ref={indicatorRef} 
        className="text-white font-mono text-xs tracking-[0.2em] uppercase origin-right rotate-90 translate-x-1/2 whitespace-nowrap opacity-50"
      >
        01 / HERO
      </div>
    </div>
  );
}
