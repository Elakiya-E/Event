"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface StageProps {
  sceneProgress: React.MutableRefObject<number>;
}

const gridGeo = new THREE.PlaneGeometry(20, 20, 20, 20);
const gridMat = new THREE.MeshBasicMaterial({ color: "#2dd4bf", wireframe: true, transparent: true, opacity: 0 });

const nodeGeo = new THREE.SphereGeometry(0.1, 16, 16);
const nodeMat = new THREE.MeshStandardMaterial({ color: "#fbbf24", emissive: "#fbbf24", emissiveIntensity: 1, transparent: true, opacity: 0 });

export default function PlanningElements({ sceneProgress }: StageProps) {
  const groupRef = useRef<THREE.Group>(null);
  const gridRef = useRef<THREE.Mesh>(null);
  const nodesRef = useRef<THREE.Group>(null);

  const nodePositions = useMemo(() => {
    // Generate a fixed pseudo-random sequence to satisfy purity
    const pos = [];
    const seed = [0.1, 0.4, 0.9, 0.2, 0.7, 0.3, 0.8, 0.6, 0.5, 0.15, 0.85, 0.25, 0.75, 0.35, 0.65, 0.45, 0.55, 0.05, 0.95, 0.12, 0.88, 0.22, 0.78, 0.33, 0.67, 0.44, 0.56, 0.08, 0.92, 0.18];
    for(let i=0; i<15; i++) {
      pos.push(new THREE.Vector3((seed[i*2] - 0.5) * 8, 0, (seed[i*2+1] - 0.5) * 8));
    }
    return pos;
  }, []);

  useFrame((state) => {
    const p = sceneProgress.current;
    if (!groupRef.current) return;

    // 0.12 -> 0.40 (Plan)
    if (p > 0.12 && p <= 0.40) {
      groupRef.current.visible = true;
      const localP = THREE.MathUtils.clamp((p - 0.12) / 0.18, 0, 1); // Full in at 0.30
      
      gridMat.opacity = localP * 0.15; 
      nodeMat.opacity = localP * 0.8;
      
      const time = state.clock.getElapsedTime();
      
      if (gridRef.current) {
        gridRef.current.position.y = THREE.MathUtils.lerp(-5, -2, localP);
        gridRef.current.rotation.z = time * 0.05;
      }

      if (nodesRef.current) {
        nodesRef.current.children.forEach((node, i) => {
          node.position.y = -2 + Math.sin(time * 2 + i) * 0.5 * localP;
          // Nodes fly out from center
          node.position.x = THREE.MathUtils.lerp(0, nodePositions[i].x, localP);
          node.position.z = THREE.MathUtils.lerp(0, nodePositions[i].z, localP);
        });
      }
    } 
    // 0.40 -> 0.48 (Transform into Design)
    else if (p > 0.40 && p <= 0.48) {
      const fadeP = (p - 0.40) / 0.08;
      gridMat.opacity = (1 - fadeP) * 0.15;
      nodeMat.opacity = (1 - fadeP) * 0.8;
    } else {
      groupRef.current.visible = false;
    }
  });

  return (
    <group ref={groupRef} visible={false}>
      {/* Floor Grid Network */}
      <mesh ref={gridRef} geometry={gridGeo} material={gridMat} rotation={[-Math.PI / 2, 0, 0]} />
      
      {/* Network Nodes */}
      <group ref={nodesRef}>
        {nodePositions.map((pos: THREE.Vector3, i: number) => (
          <mesh key={i} geometry={nodeGeo} material={nodeMat} />
        ))}
      </group>
    </group>
  );
}
