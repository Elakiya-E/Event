'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function HeroScene() {
  const prefersReducedMotion = useReducedMotion();
  const particlesRef = useRef<THREE.Points>(null);

  const particleCount = 200;
  
  // Compute positions outside of render flow
  const [geometryData] = useState(() => {
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
      scales[i] = Math.random();
    }
    return { positions, scales };
  });

  useFrame((state, delta) => {
    if (prefersReducedMotion || !particlesRef.current) return;
    
    // Slow cinematic rotation and floating
    particlesRef.current.rotation.y += delta * 0.02;
    particlesRef.current.rotation.x += delta * 0.01;
    
    // Subtle wave motion
    const positionsArray = particlesRef.current.geometry.attributes.position.array as Float32Array;
    for(let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positionsArray[i3 + 1] += Math.sin(state.clock.elapsedTime * 0.5 + positionsArray[i3]) * 0.002;
    }
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[2, 5, 2]} intensity={0.5} />
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[geometryData.positions, 3]}
            count={particleCount}
            array={geometryData.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-scale"
            args={[geometryData.scales, 1]}
            count={particleCount}
            array={geometryData.scales}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color="#d4af37"
          transparent
          opacity={0.4}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
}
