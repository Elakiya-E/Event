"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface StageProps {
  sceneProgress: React.MutableRefObject<number>;
}

// Decorative moving lights representing execution
const executeLightGeo = new THREE.SphereGeometry(0.1, 16, 16);
const executeLightMat = new THREE.MeshBasicMaterial({ color: "#2dd4bf", transparent: true, opacity: 0 });

export default function ExecutionElements({ sceneProgress }: StageProps) {
  const groupRef = useRef<THREE.Group>(null);
  const lightsRef = useRef<THREE.Group>(null);

  useFrame(() => {
    const p = sceneProgress.current;
    if (!groupRef.current) return;

    if (p > 0.60 && p <= 1.0) {
      groupRef.current.visible = true;
      const fadeP = THREE.MathUtils.clamp((p - 0.60) / 0.08, 0, 1);
      executeLightMat.opacity = fadeP;

      if (lightsRef.current) {
        // High energy rotation during execute phase
        lightsRef.current.rotation.y = p * Math.PI * 10;
        lightsRef.current.position.y = Math.sin(p * Math.PI * 8) * 0.5 + 2;
      }
    } else {
      groupRef.current.visible = false;
    }
  });

  return (
    <group ref={groupRef} visible={false}>
      <group ref={lightsRef} position={[0, 2, -2]}>
        <mesh geometry={executeLightGeo} material={executeLightMat} position={[2, 0, 0]} />
        <mesh geometry={executeLightGeo} material={executeLightMat} position={[-2, 0, 0]} />
        <mesh geometry={executeLightGeo} material={executeLightMat} position={[0, 0, 2]} />
        <mesh geometry={executeLightGeo} material={executeLightMat} position={[0, 0, -2]} />
      </group>
    </group>
  );
}
