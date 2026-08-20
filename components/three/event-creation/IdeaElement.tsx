"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";


interface StageProps {
  sceneProgress: React.MutableRefObject<number>;
}

const coreGeo = new THREE.IcosahedronGeometry(0.8, 1);
const coreMat = new THREE.MeshStandardMaterial({ 
  color: "#fdfbf7", 
  emissive: "#2dd4bf", 
  emissiveIntensity: 0.8, 
  wireframe: true,
  transparent: true 
});
const innerGeo = new THREE.IcosahedronGeometry(0.5, 0);
const innerMat = new THREE.MeshStandardMaterial({
  color: "#fbbf24",
  emissive: "#fbbf24",
  emissiveIntensity: 1,
  transparent: true
});

export default function IdeaElement({ sceneProgress }: StageProps) {
  const coreRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const p = sceneProgress.current;
    if (!coreRef.current || !innerRef.current) return;

    // 0.00 -> 0.15 (Idea)
    if (p <= 0.15) {
      coreRef.current.visible = true;
      innerRef.current.visible = true;
      
      const localP = Math.min(p / 0.12, 1);
      
      // Floating and pulsing
      const time = state.clock.getElapsedTime();
      coreRef.current.position.y = Math.sin(time * 2) * 0.1 + 1;
      innerRef.current.position.y = Math.sin(time * 2) * 0.1 + 1;
      
      coreRef.current.rotation.y = time * 0.5;
      coreRef.current.rotation.x = time * 0.3;
      
      innerRef.current.rotation.y = -time * 0.4;
      
      // Starts small, grows, pulses
      const scale = THREE.MathUtils.lerp(0.1, 1.2, localP) + Math.sin(time * 4) * 0.05;
      coreRef.current.scale.setScalar(scale);
      innerRef.current.scale.setScalar(scale);
      
      coreMat.opacity = localP;
      innerMat.opacity = localP;
    } 
    // 0.15 -> 0.20 (Fades as planning grid takes over)
    else if (p > 0.15 && p < 0.20) {
      const fadeP = (p - 0.15) / 0.05;
      coreMat.opacity = 1 - fadeP;
      innerMat.opacity = 1 - fadeP;
      
      // Expand quickly before fading
      const scale = 1.2 + fadeP * 2;
      coreRef.current.scale.setScalar(scale);
      innerRef.current.scale.setScalar(scale);
    } else {
      coreRef.current.visible = false;
      innerRef.current.visible = false;
    }
  });

  return (
    <group>
      <mesh ref={coreRef} geometry={coreGeo} material={coreMat} />
      <mesh ref={innerRef} geometry={innerGeo} material={innerMat} />
    </group>
  );
}
