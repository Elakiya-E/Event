"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Float } from "@react-three/drei";

interface DecorSceneProps {
  sceneProgress: React.MutableRefObject<number>;
}

const venueGeo = new THREE.PlaneGeometry(20, 20);
const venueMat = new THREE.MeshStandardMaterial({ color: "#0a0a0a", roughness: 0.9 });

const archGeo = new THREE.BoxGeometry(1, 1, 1);
const archMat = new THREE.MeshStandardMaterial({ color: "#111111", roughness: 0.2, metalness: 0.8, transparent: true, opacity: 0 });

const decorGeo = new THREE.TorusGeometry(1, 0.05, 16, 100);
const decorMat = new THREE.MeshStandardMaterial({ color: "#fbbf24", roughness: 0.4, transparent: true, opacity: 0 });

const leafGeo = new THREE.CylinderGeometry(0, 0.2, 0.6, 4, 1);
leafGeo.translate(0, 0.3, 0);
leafGeo.scale(1, 1, 0.1);
const leafMat = new THREE.MeshStandardMaterial({ color: "#2dd4bf", emissive: "#2dd4bf", emissiveIntensity: 0.2, transparent: true, opacity: 0 });

export default function DecorScene({ sceneProgress }: DecorSceneProps) {
  const archGroupRef = useRef<THREE.Group>(null);
  const decorGroupRef = useRef<THREE.Group>(null);
  const lightsGroupRef = useRef<THREE.Group>(null);
  const leavesRef = useRef<THREE.Group>(null);

  const mainLightRef = useRef<THREE.DirectionalLight>(null);
  const accentLight1Ref = useRef<THREE.SpotLight>(null);
  const accentLight2Ref = useRef<THREE.SpotLight>(null);

  useFrame(() => {
    const p = sceneProgress.current;

    // 0.20 -> 0.40 ARCHITECTURE
    if (p > 0.2) {
      const archP = THREE.MathUtils.clamp((p - 0.2) / 0.2, 0, 1);
      archMat.opacity = archP;
      if (archGroupRef.current) {
        archGroupRef.current.position.y = THREE.MathUtils.lerp(-2, 0, archP);
      }
    } else {
      archMat.opacity = 0;
    }

    // 0.40 -> 0.60 DECORATION
    if (p > 0.4) {
      const decorP = THREE.MathUtils.clamp((p - 0.4) / 0.2, 0, 1);
      decorMat.opacity = decorP;
      if (decorGroupRef.current) {
        decorGroupRef.current.scale.setScalar(THREE.MathUtils.lerp(0.5, 1, decorP));
        decorGroupRef.current.rotation.y = decorP * Math.PI;
      }
    } else {
      decorMat.opacity = 0;
    }

    // 0.60 -> 0.80 LIGHT + COLOR
    if (p > 0.6) {
      const lightP = THREE.MathUtils.clamp((p - 0.6) / 0.2, 0, 1);
      if (mainLightRef.current) mainLightRef.current.intensity = THREE.MathUtils.lerp(0.2, 2, lightP);
      if (accentLight1Ref.current) accentLight1Ref.current.intensity = THREE.MathUtils.lerp(0, 4, lightP);
      if (accentLight2Ref.current) accentLight2Ref.current.intensity = THREE.MathUtils.lerp(0, 3, lightP);
    } else {
      if (mainLightRef.current) mainLightRef.current.intensity = 0.2;
      if (accentLight1Ref.current) accentLight1Ref.current.intensity = 0;
      if (accentLight2Ref.current) accentLight2Ref.current.intensity = 0;
    }

    // 0.80 -> 1.00 COMPLETE EVENT
    if (p > 0.8) {
      const leafP = THREE.MathUtils.clamp((p - 0.8) / 0.2, 0, 1);
      leafMat.opacity = leafP;
      if (leavesRef.current) {
        leavesRef.current.position.y = THREE.MathUtils.lerp(2, 0, leafP);
      }
    } else {
      leafMat.opacity = 0;
    }
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      
      <group ref={lightsGroupRef}>
        <directionalLight ref={mainLightRef} position={[5, 10, 5]} color="#ffffff" intensity={0.2} />
        <spotLight ref={accentLight1Ref} position={[-5, 5, 0]} color="#fbbf24" angle={0.5} penumbra={0.5} intensity={0} />
        <spotLight ref={accentLight2Ref} position={[5, 5, -2]} color="#2dd4bf" angle={0.8} penumbra={0.8} intensity={0} />
      </group>

      <mesh geometry={venueGeo} material={venueMat} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} />

      <group ref={archGroupRef} position={[0, -2, -2]}>
        <mesh geometry={archGeo} material={archMat} scale={[6, 0.5, 3]} position={[0, -0.75, 0]} />
        <mesh geometry={archGeo} material={archMat} scale={[0.5, 4, 0.5]} position={[-2.75, 1.5, -1.25]} />
        <mesh geometry={archGeo} material={archMat} scale={[0.5, 4, 0.5]} position={[2.75, 1.5, -1.25]} />
      </group>

      <group ref={decorGroupRef} position={[0, 1, -1]}>
        <mesh geometry={decorGeo} material={decorMat} rotation={[Math.PI / 2, 0, 0]} scale={2} />
        <mesh geometry={decorGeo} material={decorMat} rotation={[Math.PI / 4, Math.PI / 4, 0]} scale={1.5} />
      </group>

      <group ref={leavesRef} position={[0, 2, 0]}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh geometry={leafGeo} material={leafMat} position={[-2, 1, 1]} rotation={[0.2, 0.5, 0]} />
        </Float>
        <Float speed={2.5} rotationIntensity={0.8} floatIntensity={0.8}>
          <mesh geometry={leafGeo} material={leafMat} position={[2, 0.5, 0]} rotation={[-0.2, -0.5, 0.2]} />
        </Float>
      </group>
    </>
  );
}
