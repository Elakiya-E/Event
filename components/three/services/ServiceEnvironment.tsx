import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ServiceEnvironment({ sceneProgress }: { sceneProgress: React.MutableRefObject<number> }) {
  const dirLightRef = useRef<THREE.DirectionalLight>(null);
  const spotLightRef = useRef<THREE.SpotLight>(null);
  
  useFrame(() => {
    const p = sceneProgress.current;
    
    if (dirLightRef.current && spotLightRef.current) {
      // Base: 0.0 - 0.77 (Standard lighting)
      // Celebration: > 0.77 (Warm, vibrant)
      if (p > 0.77) {
        const localP = THREE.MathUtils.clamp((p - 0.77) / 0.13, 0, 1);
        dirLightRef.current.intensity = THREE.MathUtils.lerp(1, 2.5, localP);
        spotLightRef.current.intensity = THREE.MathUtils.lerp(1.5, 3, localP);
        dirLightRef.current.color.setHex(0xffaa00); // warmer
      } else {
        dirLightRef.current.intensity = 1.5;
        spotLightRef.current.intensity = 2;
        dirLightRef.current.color.setHex(0xfbbf24); // #fbbf24 standard warm gold
      }
    }
  });

  return (
    <>
      <color attach="background" args={['#030303']} />
      <ambientLight intensity={0.2} color="#ffffff" />
      <directionalLight ref={dirLightRef} position={[5, 10, 5]} intensity={1.5} color="#fbbf24" />
      <spotLight ref={spotLightRef} position={[-5, 5, 10]} intensity={2} color="#2dd4bf" penumbra={1} angle={0.8} />
      <pointLight position={[0, -2, 2]} intensity={0.5} color="#e2e8f0" />
    </>
  );
}
