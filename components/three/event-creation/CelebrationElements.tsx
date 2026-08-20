"use client";

import React, { useRef, useMemo, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface StageProps {
  sceneProgress: React.MutableRefObject<number>;
}

// Reusable falling leaves for the celebration
const leafGeo = new THREE.CylinderGeometry(0, 0.1, 0.3, 4, 1);
leafGeo.translate(0, 0.15, 0);
leafGeo.scale(1, 1, 0.1);
const leafMat = new THREE.MeshStandardMaterial({ color: "#fbbf24", roughness: 0.3, side: THREE.DoubleSide, transparent: true, opacity: 0 });

export default function CelebrationElements({ sceneProgress }: StageProps) {
  const { viewport } = useThree();
  const leafCount = viewport.width < 768 ? 20 : 50;
  
  const groupRef = useRef<THREE.Group>(null);
  const swarmRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const [swarmData] = useState(() => {
    const data = [];
    for (let i = 0; i < leafCount; i++) {
      data.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 15,
          Math.random() * 10 + 5, // Start high
          (Math.random() - 0.5) * 10 - 2
        ),
        rotation: new THREE.Euler(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ),
        speed: Math.random() * 0.05 + 0.02,
        wobbleSpeed: Math.random() * 2 + 1
      });
    }
    return data;
  });

  useFrame((state) => {
    const p = sceneProgress.current;
    if (!groupRef.current) return;

    if (p > 0.85) {
      groupRef.current.visible = true;
      const fadeP = THREE.MathUtils.clamp((p - 0.85) / 0.1, 0, 1);
      
      // We directly mutate the material opacity for performance
      leafMat.opacity = fadeP * 0.8;

      if (swarmRef.current) {
        const time = state.clock.getElapsedTime();
        
        swarmData.forEach((item, i) => {
          dummy.position.copy(item.position);
          
          // Fall downwards
          dummy.position.y -= (time * item.speed * 10) % 15;
          if (dummy.position.y < -2) {
             dummy.position.y += 15; // Reset to top
          }
          
          // Wobble
          dummy.position.x += Math.sin(time * item.wobbleSpeed) * 0.05;
          dummy.position.z += Math.cos(time * item.wobbleSpeed) * 0.05;

          // Rotate
          dummy.rotation.copy(item.rotation);
          dummy.rotation.x += 0.02;
          dummy.rotation.y += 0.02;
          
          dummy.updateMatrix();
          swarmRef.current!.setMatrixAt(i, dummy.matrix);
        });
        swarmRef.current.instanceMatrix.needsUpdate = true;
      }
    } else {
      groupRef.current.visible = false;
    }
  });

  return (
    <group ref={groupRef} visible={false}>
      <instancedMesh
        ref={swarmRef}
        args={[leafGeo, leafMat, leafCount]}
        frustumCulled={false}
      />
    </group>
  );
}
