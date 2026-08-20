"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface StageProps {
  sceneProgress: React.MutableRefObject<number>;
}

const stageGeo = new THREE.BoxGeometry(1, 1, 1);
const stageMat = new THREE.MeshStandardMaterial({ color: "#0f172a", roughness: 0.1, metalness: 0.8, transparent: true, opacity: 0 });

const decorGeo = new THREE.TorusGeometry(1, 0.02, 16, 100);
const decorMat = new THREE.MeshStandardMaterial({ color: "#fbbf24", emissive: "#fbbf24", emissiveIntensity: 0.2, transparent: true, opacity: 0 });

export default function DesignElements({ sceneProgress }: StageProps) {
  const groupRef = useRef<THREE.Group>(null);
  const stageRef = useRef<THREE.Mesh>(null);
  const decorRef = useRef<THREE.Group>(null);

  useFrame(() => {
    const p = sceneProgress.current;
    if (!groupRef.current) return;

    // Starts appearing as Plan fades out (0.35 -> 0.48)
    if (p > 0.35 && p <= 1.0) {
      groupRef.current.visible = true;
      const buildP = THREE.MathUtils.clamp((p - 0.35) / 0.13, 0, 1);
      
      stageMat.opacity = buildP;
      decorMat.opacity = buildP;

      // Real geometry scales up out of the wireframe markers
      if (stageRef.current) {
        stageRef.current.scale.set(4, 1 * buildP, 2);
        stageRef.current.position.y = THREE.MathUtils.lerp(-1, 0.5, buildP);
      }

      if (decorRef.current) {
        decorRef.current.scale.setScalar(buildP * 2);
        decorRef.current.position.y = THREE.MathUtils.lerp(0, 3, buildP);
        decorRef.current.rotation.y = p * Math.PI; // Keeps slowly rotating through rest of sequence
      }
    } else {
      groupRef.current.visible = false;
    }
  });

  return (
    <group ref={groupRef} visible={false}>
      {/* Physical Stage */}
      <mesh ref={stageRef} geometry={stageGeo} material={stageMat} position={[0, 0, -2]} />
      
      {/* Architectural Decor */}
      <group ref={decorRef} position={[0, 3, -2]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={decorGeo} material={decorMat} />
        <mesh geometry={decorGeo} material={decorMat} scale={1.2} rotation={[0, Math.PI / 4, 0]} />
      </group>
    </group>
  );
}
