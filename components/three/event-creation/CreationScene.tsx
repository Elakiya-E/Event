"use client";

import React, { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Points, PointMaterial } from "@react-three/drei";

import IdeaElement from "./IdeaElement";
import PlanningElements from "./PlanningElements";
import DesignElements from "./DesignElements";
import CoordinationElements from "./CoordinationElements";
import ExecutionElements from "./ExecutionElements";
import CelebrationElements from "./CelebrationElements";

interface CreationSceneProps {
  sceneProgress: React.MutableRefObject<number>;
}

export default function CreationScene({ sceneProgress }: CreationSceneProps) {
  const { viewport } = useThree();
  const isMobile = viewport.width < 768;
  const particleCount = isMobile ? 200 : 500;
  
  const cameraTarget = useRef(new THREE.Vector3(0, 0, 0));
  const lightsGroupRef = useRef<THREE.Group>(null);
  
  // Lighting references for direct mutation
  const ideaLightRef = useRef<THREE.PointLight>(null);
  const planLightRef = useRef<THREE.AmbientLight>(null);
  const designSpotRef = useRef<THREE.SpotLight>(null);
  const executeLightRef = useRef<THREE.DirectionalLight>(null);
  const extraSpotRef = useRef<THREE.SpotLight>(null);

  // Particles
  const [particlesPosition] = useState(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return positions;
  });

  useFrame((state) => {
    const p = sceneProgress.current;

    // 1. CAMERA JOURNEY
    let targetCamX = -1;
    let targetCamY = 1; 
    let targetCamZ = 3; 
    
    if (p <= 0.12) {
      // 0.00 -> 0.12 (Idea): Camera moves closer to center leaf
      const localP = p / 0.12;
      targetCamZ = THREE.MathUtils.lerp(5, 2, localP);
      targetCamY = THREE.MathUtils.lerp(2, 0, localP);
      targetCamX = THREE.MathUtils.lerp(0, -1, localP);
    } else if (p > 0.12 && p <= 0.3) {
      // 0.12 -> 0.30 (Plan): Travel through layout
      const localP = (p - 0.12) / 0.18;
      targetCamZ = THREE.MathUtils.lerp(2, 0, localP);
      targetCamY = THREE.MathUtils.lerp(0, 1.5, localP);
      targetCamX = THREE.MathUtils.lerp(-1, -2.5, localP);
    } else if (p > 0.3 && p <= 0.48) {
      // 0.30 -> 0.48 (Design): Move around design elements
      const localP = (p - 0.3) / 0.18;
      targetCamZ = THREE.MathUtils.lerp(0, -2, localP);
      targetCamY = THREE.MathUtils.lerp(1.5, 0.5, localP);
      targetCamX = THREE.MathUtils.lerp(-2.5, -1, localP);
    } else if (p > 0.48 && p <= 0.68) {
      // 0.48 -> 0.68 (Coordinate): Follow coordination
      const localP = (p - 0.48) / 0.2;
      targetCamZ = THREE.MathUtils.lerp(-2, -1, localP);
      targetCamY = THREE.MathUtils.lerp(0.5, 1.5, localP);
      targetCamX = THREE.MathUtils.lerp(-1, 0.5, localP);
    } else if (p > 0.68 && p <= 0.85) {
      // 0.68 -> 0.85 (Execute): Dynamic sweeping move
      const localP = (p - 0.68) / 0.17;
      targetCamZ = THREE.MathUtils.lerp(-1, 1, localP);
      targetCamY = THREE.MathUtils.lerp(1.5, 2.5, localP);
      targetCamX = THREE.MathUtils.lerp(0.5, -2, localP);
    } else if (p > 0.85) {
      // 0.85 -> 1.0 (Celebrate): Pull backward to wide cinematic
      const localP = (p - 0.85) / 0.15;
      targetCamZ = THREE.MathUtils.lerp(1, 4, localP); 
      targetCamY = THREE.MathUtils.lerp(2.5, 1, localP);
      targetCamX = THREE.MathUtils.lerp(-2, -1, localP);
    }

    state.camera.position.lerp(new THREE.Vector3(targetCamX, targetCamY, targetCamZ), 0.05);
    
    // Look to the left of the actual object (which is at x=2.5) to keep it framed on the right
    cameraTarget.current.lerp(new THREE.Vector3(-0.5, -1, -5), 0.05);
    state.camera.lookAt(cameraTarget.current);

    // 2. LIGHTING JOURNEY
    const globalDim = p > 0.95 ? Math.max(0, 1 - (p - 0.95) / 0.05) : 1;

    if (ideaLightRef.current) ideaLightRef.current.intensity = (p <= 0.15 ? 2 : Math.max(0, 2 - (p - 0.15) * 10)) * globalDim;
    if (planLightRef.current) planLightRef.current.intensity = (p > 0.1 ? THREE.MathUtils.lerp(0.1, 0.6, (p - 0.1) * 2) : 0.1) * globalDim;
    if (designSpotRef.current) designSpotRef.current.intensity = (p > 0.3 ? THREE.MathUtils.lerp(0, 4, (p - 0.3) * 3) : 0) * globalDim;
    if (executeLightRef.current) executeLightRef.current.intensity = (p > 0.6 ? THREE.MathUtils.lerp(0, 3, (p - 0.6) * 3) : 0) * globalDim;
    if (extraSpotRef.current) extraSpotRef.current.intensity = (p > 0.8 ? 2 : 0) * globalDim;

  });

  return (
    <>
      <color attach="background" args={['#030303']} />
      
      {/* Dynamic Lighting System */}
      <group ref={lightsGroupRef}>
        <pointLight ref={ideaLightRef} position={[2.5, 0, -5]} color="#2dd4bf" intensity={2} distance={15} />
        <ambientLight ref={planLightRef} color="#ffffff" intensity={0.1} />
        <spotLight ref={designSpotRef} position={[-2, 8, -2]} color="#fbbf24" angle={0.8} penumbra={1} intensity={0} castShadow />
        <directionalLight ref={executeLightRef} position={[5, 10, -5]} color="#ffffff" intensity={0} />
        <spotLight ref={extraSpotRef} position={[5, 10, -2]} color="#2dd4bf" angle={0.6} penumbra={0.5} intensity={0} />
      </group>

      {/* Atmospheric Particles */}
      <Points positions={particlesPosition} stride={3}>
        <PointMaterial
          transparent
          color="#d9a928"
          size={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.3}
        />
      </Points>

      {/* Transformation Elements */}
      <group position={[2.5, -1.5, -5]} scale={isMobile ? 0.7 : 1.2}>
        <IdeaElement sceneProgress={sceneProgress} />
        <PlanningElements sceneProgress={sceneProgress} />
        <DesignElements sceneProgress={sceneProgress} />
        <CoordinationElements sceneProgress={sceneProgress} />
        <ExecutionElements sceneProgress={sceneProgress} />
        <CelebrationElements sceneProgress={sceneProgress} />
      </group>
    </>
  );
}
