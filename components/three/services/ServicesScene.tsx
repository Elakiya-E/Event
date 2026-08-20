"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import ServiceEnvironment from "./ServiceEnvironment";
import ServiceObjects from "./ServiceObjects";
import ServiceParticles from "./ServiceParticles";

interface ServicesSceneProps {
  sceneProgress: React.MutableRefObject<number>;
}

export default function ServicesScene({ sceneProgress }: ServicesSceneProps) {
  const cameraTarget = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state) => {
    const p = sceneProgress.current;

    // Camera logic
    // 0.0 - 0.12: Intro
    // 0.12 - 0.90: Moves through environments
    // 0.90 - 1.00: Pulls completely backward
    
    let camX = 0;
    let camY = 2;
    let camZ = 8;
    
    if (p < 0.12) {
      camZ = 8;
    } else if (p >= 0.12 && p < 0.9) {
      // Slow push in
      const localP = (p - 0.12) / 0.78;
      camZ = THREE.MathUtils.lerp(8, 2, localP);
      camY = THREE.MathUtils.lerp(2, 1, localP);
      camX = Math.sin(localP * Math.PI) * 2; // subtle panning
      cameraTarget.current.set(0, 1, -2);
    } else if (p >= 0.9) {
      // Fast pull out to reveal everything
      const localP = (p - 0.9) / 0.1;
      camZ = THREE.MathUtils.lerp(2, 20, localP);
      camY = THREE.MathUtils.lerp(1, 5, localP);
      camX = THREE.MathUtils.lerp(camX, 0, localP);
      cameraTarget.current.set(0, 0, 0);
    }

    state.camera.position.lerp(new THREE.Vector3(camX, camY, camZ), 0.1);
    state.camera.lookAt(cameraTarget.current);
  });

  return (
    <>
      <ServiceEnvironment sceneProgress={sceneProgress} />
      <ServiceObjects sceneProgress={sceneProgress} />
      <ServiceParticles sceneProgress={sceneProgress} />
    </>
  );
}
