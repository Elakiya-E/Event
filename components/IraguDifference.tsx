"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Points, PointMaterial, Float } from "@react-three/drei";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@/hooks/useGsap";

// Reusable leaf geometry
const leafGeo = new THREE.CylinderGeometry(0, 0.4, 1.2, 4, 1);
leafGeo.translate(0, 0.6, 0);
leafGeo.scale(1, 1, 0.1);
const leafMat = new THREE.MeshStandardMaterial({ 
  color: "#111111", 
  roughness: 0.1, 
  metalness: 0.8,
});

function DifferenceScene() {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Particles
  const [particles] = React.useState(() => {
    const p = new Float32Array(100 * 3);
    for (let i = 0; i < 100; i++) {
      p[i * 3] = (Math.random() - 0.5) * 10;
      p[i * 3 + 1] = (Math.random() - 0.5) * 10;
      p[i * 3 + 2] = (Math.random() - 0.5) * 5 - 2;
    }
    return p;
  });

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.02) * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[0, 0, 2]} color="#fbbf24" intensity={2} distance={10} />
      
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh geometry={leafGeo} material={leafMat} position={[0, -0.5, -2]} rotation={[0.2, Math.PI / 4, 0]} />
      </Float>

      <Points ref={pointsRef} positions={particles} stride={3}>
        <PointMaterial transparent color="#fbbf24" size={0.03} sizeAttenuation={true} depthWrite={false} opacity={0.4} />
      </Points>
    </>
  );
}

export default function IraguDifference() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion) return;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        if (textRef.current) {
          // Subtle parallax on the text
          const yOffset = (self.progress - 0.5) * 100;
          textRef.current.style.transform = `translateY(${yOffset}px)`;
        }
      }
    });
  }, { scope: containerRef, dependencies: [prefersReducedMotion] });

  return (
    <section 
      id="difference" 
      ref={containerRef}
      className="relative w-full h-[120vh] bg-[#020202] overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0">
        {!prefersReducedMotion && (
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <DifferenceScene />
          </Canvas>
        )}
      </div>
      
      {/* Soft warm gold background glow to complement the 3D light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-[#fbbf24]/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div ref={textRef} className="relative z-10 text-center px-6 max-w-4xl">
        <h2 className="text-sm md:text-base text-accent font-sans uppercase tracking-[0.2em] mb-8">
          The Iragu Difference
        </h2>
        <p className="text-4xl md:text-5xl lg:text-7xl font-serif text-white leading-tight drop-shadow-xl">
          We don&apos;t just manage events.<br />
          <span className="text-[#fbbf24] font-style-italic">We create experiences.</span>
        </p>
      </div>
    </section>
  );
}
