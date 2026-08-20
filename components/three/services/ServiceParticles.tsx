import React from "react";
import * as THREE from "three";
import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function ServiceParticles({ sceneProgress }: { sceneProgress: React.MutableRefObject<number> }) {
  const [particles] = React.useState(() => {
    const p = new Float32Array(300 * 3);
    for (let i = 0; i < 300; i++) {
      p[i * 3] = (Math.random() - 0.5) * 30;
      p[i * 3 + 1] = (Math.random() - 0.5) * 30;
      p[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return p;
  });

  const ref = React.useRef<THREE.Points>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      
      const p = sceneProgress.current;
      // In Celebration phase (>0.77), we can tint or brighten particles
      // PointMaterial color is static here, but we can scale opacity based on progress
      const mat = ref.current.material as THREE.Material;
      if (p > 0.77) {
        mat.opacity = 0.8;
      } else {
        mat.opacity = 0.3;
      }
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3}>
      <PointMaterial transparent color="#ffffff" size={0.05} sizeAttenuation={true} depthWrite={false} opacity={0.3} />
    </Points>
  );
}
