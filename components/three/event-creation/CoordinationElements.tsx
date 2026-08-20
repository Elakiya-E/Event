"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Float } from "@react-three/drei";

interface StageProps {
  sceneProgress: React.MutableRefObject<number>;
}

// Reusable abstract human figure
const humanBodyGeo = new THREE.CapsuleGeometry(0.3, 1, 4, 16);
const humanHeadGeo = new THREE.SphereGeometry(0.25, 32, 32);
const humanMat = new THREE.MeshStandardMaterial({ color: "#f8fafc", roughness: 0.2, metalness: 0.1, transparent: true, opacity: 0 });

export default function CoordinationElements({ sceneProgress }: StageProps) {
  const groupRef = useRef<THREE.Group>(null);
  
  // Ref for the figures so we can animate them
  const figure1Ref = useRef<THREE.Group>(null);
  const figure2Ref = useRef<THREE.Group>(null);

  useFrame(() => {
    const p = sceneProgress.current;
    if (!groupRef.current) return;

    if (p > 0.45 && p <= 1.0) {
      groupRef.current.visible = true;
      const buildP = THREE.MathUtils.clamp((p - 0.45) / 0.1, 0, 1);
      humanMat.opacity = buildP;

      // Figures move dynamically during the Coordination and Execution phases
      if (figure1Ref.current && figure2Ref.current) {
        // Figure 1 moves around arranging things
        figure1Ref.current.position.x = Math.sin(p * Math.PI * 4) * 2;
        figure1Ref.current.position.z = Math.cos(p * Math.PI * 4) * 2;
        figure1Ref.current.rotation.y = p * Math.PI * 4;

        // Figure 2 moves across the stage
        figure2Ref.current.position.x = Math.cos(p * Math.PI * 3) * 3;
        figure2Ref.current.position.z = -1;
      }
    } else {
      groupRef.current.visible = false;
    }
  });

  return (
    <group ref={groupRef} visible={false}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
        <group ref={figure1Ref} position={[2, 0.8, 1]}>
          <mesh geometry={humanBodyGeo} material={humanMat} position={[0, 0, 0]} />
          <mesh geometry={humanHeadGeo} material={humanMat} position={[0, 1, 0]} />
        </group>
      </Float>
      
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
        <group ref={figure2Ref} position={[-2, 1.3, -1]}>
          <mesh geometry={humanBodyGeo} material={humanMat} position={[0, 0, 0]} />
          <mesh geometry={humanHeadGeo} material={humanMat} position={[0, 1, 0]} />
        </group>
      </Float>
    </group>
  );
}
