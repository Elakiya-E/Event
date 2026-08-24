"use client";

import React, { useRef, useState, useEffect } from "react";
import { useGSAP, gsap } from "@/hooks/useGsap";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { motion, AnimatePresence } from "framer-motion";

// Cinematic transition images
// Using the same image twice allows the subtle Ken Burns scale animation to seamlessly crossfade and loop.
const IMAGES = [
  "/images/hero-bg.png",
  "/images/hero-bg.png"
];

export default function IraguHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Background slideshow logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 7000); // 7 seconds per slide
    return () => clearInterval(timer);
  }, []);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    // Subtle entry animation for content
    gsap.fromTo(containerRef.current.querySelectorAll('.animate-in'), 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out", delay: 0.2 }
    );
  }, { scope: containerRef });

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)] mt-20 md:mt-24 bg-black overflow-hidden flex flex-col justify-center"
    >
      {/* Cinematic Slideshow Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.035 }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 8.5, ease: [0.22, 1, 0.36, 1] } 
            }}
            className="absolute inset-0 w-full h-full bg-cover bg-right"
            style={{ backgroundImage: `url(${IMAGES[currentIndex]})` }}
          />
        </AnimatePresence>
        
        {/* Strong black gradient from LEFT to RIGHT for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent w-full z-10 hidden md:block" />
        
        {/* Mobile stronger overlay for readability */}
        <div className="absolute inset-0 bg-black/70 md:hidden z-10" />
      </div>
      
      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex flex-col justify-center py-12 md:py-0">
        {/* Desktop: left 42% constraints */}
        <div className="w-full lg:w-[42%]">
          
          <h1 className="font-serif text-3xl md:text-4xl lg:text-[3.25rem] font-medium tracking-tight text-white leading-[1.0] animate-in">
            Helping People & Brands <br />
            <span className="text-teal-500">Create Stress-Free</span> Events
          </h1>
          
          <p className="mt-6 text-sm md:text-base text-neutral-200 font-light animate-in leading-relaxed max-w-[560px]">
            {siteContent.hero.supportingStatement}
          </p>

          <div className="mt-6 border-l-2 border-teal-500 pl-5 animate-in max-w-[560px]">
            <p className="text-[10px] md:text-xs text-neutral-300 font-semibold tracking-[0.15em] uppercase leading-relaxed">
              We&apos;re not just event decorators.<br />
              We&apos;re your complete event partner.<br />
              <span className="text-teal-500">Your Vision. Our Creativity.</span><br />
              Complete Event Responsibility.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-center animate-in">
            <Link
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-black px-8 py-4 font-bold uppercase tracking-widest transition-colors duration-300 text-sm"
            >
              {siteContent.hero.ctaPrimary}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="#portfolio"
              className="group relative inline-flex items-center justify-center gap-2 border border-neutral-500 hover:border-white text-white px-8 py-4 font-bold uppercase tracking-widest transition-colors duration-300 text-sm"
            >
              {siteContent.hero.ctaSecondary}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}
