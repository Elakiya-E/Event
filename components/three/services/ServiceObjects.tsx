import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Float } from "@react-three/drei";
import { HumanSculpture } from "../human/HumanSculpture";

// Materials
const wireMat = new THREE.MeshBasicMaterial({ color: "#2dd4bf", wireframe: true, transparent: true, opacity: 0 });
const solidMat = new THREE.MeshStandardMaterial({ color: "#fdfbf7", roughness: 0.2, metalness: 0.1, transparent: true, opacity: 0 });
const accentMat = new THREE.MeshStandardMaterial({ color: "#fbbf24", roughness: 0.3, metalness: 0.8, transparent: true, opacity: 0 });
const glassMat = new THREE.MeshPhysicalMaterial({ color: "#ffffff", transmission: 0.9, opacity: 0, transparent: true, roughness: 0.1 });
const screenMat = new THREE.MeshStandardMaterial({ color: "#ffffff", emissive: "#2dd4bf", emissiveIntensity: 0.5, transparent: true, opacity: 0 });
  
// Geometries
const platformGeo = new THREE.CylinderGeometry(5, 5, 0.2, 64);
const archGeo = new THREE.TorusGeometry(3, 0.05, 16, 64, Math.PI);
const ringGeo = new THREE.TorusGeometry(2, 0.02, 16, 64);
const vaseGeo = new THREE.CylinderGeometry(0.5, 0.2, 2, 32);

export default function ServiceObjects({ sceneProgress }: { sceneProgress: React.MutableRefObject<number> }) {
  // Groups
  const planningGroupRef = useRef<THREE.Group>(null);
  const designGroupRef = useRef<THREE.Group>(null);
  const decorGroupRef = useRef<THREE.Group>(null);
  const managementGroupRef = useRef<THREE.Group>(null);
  const corporateGroupRef = useRef<THREE.Group>(null);
  const celebrationGroupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const p = sceneProgress.current;
    const time = state.clock.getElapsedTime();

    const getCumulativeAlpha = (start: number) => {
      if (p < start) return 0;
      if (p > 0.90) return 1 - ((p - 0.90) / 0.1);
      const local = (p - start) / 0.05;
      return THREE.MathUtils.clamp(local, 0, 1);
    };

    // Update Opacities
    const planA = getCumulativeAlpha(0.12);
    wireMat.opacity = planA * 0.3;
    
    const designA = getCumulativeAlpha(0.25);
    solidMat.opacity = designA;
    
    const decorA = getCumulativeAlpha(0.38);
    accentMat.opacity = decorA;
    glassMat.opacity = decorA;
    
    const corpA = getCumulativeAlpha(0.64);
    screenMat.opacity = corpA * 0.8;

    // Planning: Rotating wireframe platform
    if (planningGroupRef.current) {
      planningGroupRef.current.position.y = THREE.MathUtils.lerp(-5, -1, THREE.MathUtils.clamp((p - 0.12) / 0.13, 0, 1));
      planningGroupRef.current.rotation.y = time * 0.1;
    }

    // Design: Solid architectural arches emerging
    if (designGroupRef.current) {
      designGroupRef.current.scale.setScalar(THREE.MathUtils.lerp(0.01, 1, THREE.MathUtils.clamp((p - 0.25) / 0.13, 0, 1)));
      designGroupRef.current.position.y = THREE.MathUtils.lerp(-2, 0, THREE.MathUtils.clamp((p - 0.25) / 0.13, 0, 1));
    }

    // Decor: Elegant centerpieces
    if (decorGroupRef.current) {
      decorGroupRef.current.position.y = THREE.MathUtils.lerp(-2, 1, THREE.MathUtils.clamp((p - 0.38) / 0.13, 0, 1));
      decorGroupRef.current.rotation.y = time * -0.2;
    }

    // Management: Human figures organizing the space
    if (managementGroupRef.current) {
      const alpha = getCumulativeAlpha(0.51);
      managementGroupRef.current.visible = alpha > 0;
      if (alpha > 0) {
         managementGroupRef.current.scale.setScalar(THREE.MathUtils.lerp(0.01, 0.8, alpha));
         managementGroupRef.current.position.x = THREE.MathUtils.lerp(-5, -2.5, THREE.MathUtils.clamp((p - 0.51) / 0.13, 0, 1));
         managementGroupRef.current.position.y = THREE.MathUtils.lerp(-2, -0.5, THREE.MathUtils.clamp((p - 0.51) / 0.13, 0, 1));
      }
    }

    // Corporate: Modern displays
    if (corporateGroupRef.current) {
      corporateGroupRef.current.position.z = THREE.MathUtils.lerp(-10, -3, THREE.MathUtils.clamp((p - 0.64) / 0.13, 0, 1));
      corporateGroupRef.current.position.y = THREE.MathUtils.lerp(-5, 2, THREE.MathUtils.clamp((p - 0.64) / 0.13, 0, 1));
    }

    // Celebration: Grand finale
    if (celebrationGroupRef.current) {
      celebrationGroupRef.current.visible = p > 0.77 && p < 1;
      const alpha = getCumulativeAlpha(0.77);
      celebrationGroupRef.current.scale.setScalar(THREE.MathUtils.lerp(0.01, 1, alpha));
      celebrationGroupRef.current.rotation.z = time * 0.1;
    }
  });

  return (
    <group>
      {/* PLANNING: Blueprint lines */}
      <group ref={planningGroupRef}>
        <mesh geometry={platformGeo} material={wireMat} />
        <mesh geometry={platformGeo} material={wireMat} position={[0, 1, 0]} scale={[0.8, 1, 0.8]} />
      </group>

      {/* DESIGN: Solid Forms */}
      <group ref={designGroupRef}>
        <mesh geometry={platformGeo} material={solidMat} position={[0, -0.9, 0]} />
        <mesh geometry={archGeo} material={solidMat} position={[0, -0.8, 0]} />
        <mesh geometry={archGeo} material={solidMat} position={[0, -0.8, 0]} rotation={[0, Math.PI / 2, 0]} />
      </group>

      {/* DECOR: Elegant centerpieces */}
      <group ref={decorGroupRef}>
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
          <mesh geometry={vaseGeo} material={accentMat} />
          <mesh geometry={ringGeo} material={glassMat} rotation={[Math.PI / 2, 0, 0]} position={[0, 1, 0]} />
          <mesh geometry={ringGeo} material={accentMat} rotation={[0, 0, 0]} scale={[0.5, 0.5, 0.5]} position={[0, 1, 0]} />
        </Float>
      </group>

      {/* MANAGEMENT: Human Sculptures moving around */}
      <group ref={managementGroupRef}>
        <HumanSculpture sceneProgress={{ current: 0 }} />
      </group>

      {/* CORPORATE: Modern sleek floating screens */}
      <group ref={corporateGroupRef}>
        <mesh material={screenMat} position={[-3, 0, -2]} rotation={[0, 0.5, 0]}>
          <planeGeometry args={[4, 2.5]} />
        </mesh>
        <mesh material={screenMat} position={[3, 1, -4]} rotation={[0, -0.5, 0]}>
          <planeGeometry args={[5, 3]} />
        </mesh>
        <mesh material={screenMat} position={[0, -1, 1]} rotation={[-Math.PI / 4, 0, 0]}>
          <planeGeometry args={[3, 2]} />
        </mesh>
      </group>

      {/* CELEBRATION: Golden Rings */}
      <group ref={celebrationGroupRef} position={[0, 1, -2]}>
        <mesh geometry={ringGeo} material={accentMat} scale={[3, 3, 3]} rotation={[Math.PI / 4, 0, 0]} />
        <mesh geometry={ringGeo} material={accentMat} scale={[3.5, 3.5, 3.5]} rotation={[-Math.PI / 4, Math.PI / 2, 0]} />
      </group>
    </group>
  );
}
