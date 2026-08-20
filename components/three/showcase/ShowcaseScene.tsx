"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Float, Points, PointMaterial } from "@react-three/drei";

interface ShowcaseSceneProps {
  sceneProgress: React.MutableRefObject<number>;
}

// Re-use some geometry from Decor to match the visual handoff
const archGeo = new THREE.BoxGeometry(1, 1, 1);
const decorGeo = new THREE.TorusGeometry(1, 0.05, 16, 100);

export default function ShowcaseScene({ sceneProgress }: ShowcaseSceneProps) {
  const transitionGroupRef = useRef<THREE.Group>(null);
  const transitionMatRef = useRef<THREE.MeshStandardMaterial>(null);
  
  // Gallery Refs
  const galleryRef = useRef<THREE.Group>(null);
  const img1Ref = useRef<THREE.Group>(null);
  const img2Ref = useRef<THREE.Group>(null);
  const img3Ref = useRef<THREE.Group>(null);

  // Particles
  const [particles] = React.useState(() => {
    const p = new Float32Array(300 * 3);
    for (let i = 0; i < 300; i++) {
      p[i * 3] = (Math.random() - 0.5) * 20;
      p[i * 3 + 1] = (Math.random() - 0.5) * 20;
      p[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return p;
  });

  // Placeholder Gallery Materials (Dark sleek gradients created via shaders would be overkill for now, 
  // standard materials with subtle colors work to emulate a sleek studio presentation)
  const imgMat1 = useMemo(() => new THREE.MeshStandardMaterial({ color: "#1a2322", roughness: 0.2 }), []);
  const imgMat2 = useMemo(() => new THREE.MeshStandardMaterial({ color: "#2d2015", roughness: 0.2 }), []);
  const imgMat3 = useMemo(() => new THREE.MeshStandardMaterial({ color: "#111827", roughness: 0.2 }), []);
  const planeGeo = useMemo(() => new THREE.PlaneGeometry(16, 9), []); // 16:9 aspect ratio

  // Add a thin border frame for elegance
  const frameGeo = useMemo(() => new THREE.PlaneGeometry(16.2, 9.2), []);
  const frameMat = useMemo(() => new THREE.MeshStandardMaterial({ color: "#d4af37", roughness: 0.2, metalness: 0.9, transparent: true, opacity: 0.5 }), []);

  useFrame((state) => {
    const p = sceneProgress.current;

    // 1. Camera Animation
    let camY = 2;
    let camZ = 8;
    
    if (p < 0.2) {
      camY = THREE.MathUtils.lerp(2, 0, p / 0.2);
      camZ = THREE.MathUtils.lerp(8, 15, p / 0.2);
    } else {
      camY = 0;
      camZ = 15;
    }
    state.camera.position.lerp(new THREE.Vector3(0, camY, camZ), 0.1);
    state.camera.lookAt(0, 0, 0);

    // 2. Transition Decor Geometry
    if (transitionGroupRef.current && transitionMatRef.current) {
      if (p < 0.2) {
        transitionMatRef.current.opacity = 1 - (p / 0.2);
        transitionMatRef.current.wireframe = p > 0.05;
        transitionGroupRef.current.position.y = -2 + (p * 5);
      } else {
        transitionMatRef.current.opacity = 0;
      }
    }

    // 3. Gallery Scroll Logic
    const animateCard = (ref: React.RefObject<THREE.Group | null>, start: number, duration: number) => {
      if (!ref.current) return;
      if (p < start) {
        ref.current.position.y = -20;
      } else if (p > start + duration) {
        ref.current.position.y = 20;
      } else {
        const activeP = (p - start) / duration;
        // Ease in out
        const easeP = activeP < 0.5 ? 2 * activeP * activeP : 1 - Math.pow(-2 * activeP + 2, 2) / 2;
        ref.current.position.y = THREE.MathUtils.lerp(-15, 15, easeP);
        ref.current.rotation.x = THREE.MathUtils.lerp(0.1, -0.1, activeP);
        ref.current.rotation.y = Math.sin(activeP * Math.PI) * 0.05; // slight yaw
      }
    };

    // Note the cast: img1Ref etc are now groups, but we originally typed them as Meshes. Let's fix that below.
    animateCard(img1Ref, 0.20, 0.25);
    animateCard(img2Ref, 0.45, 0.30);
    animateCard(img3Ref, 0.75, 0.25);
  });

  return (
    <>
      <color attach="background" args={['#030303']} />
      
      {/* Lighting setup */}
      <ambientLight intensity={0.2} color="#ffffff" />
      <directionalLight position={[5, 10, 5]} intensity={1} color="#fbbf24" />
      <spotLight position={[-5, 5, 10]} intensity={2} color="#2dd4bf" penumbra={1} angle={0.8} />
      <pointLight position={[0, 0, 5]} intensity={0.5} color="#ffffff" />

      {/* Atmospheric Particles */}
      <Points positions={particles} stride={3}>
        <PointMaterial transparent color="#d4af37" size={0.04} sizeAttenuation={true} depthWrite={false} opacity={0.4} />
      </Points>

      {/* Decor Handoff Transition Group */}
      <group ref={transitionGroupRef} position={[0, -2, -2]}>
        <mesh geometry={archGeo} scale={[6, 0.5, 3]} position={[0, -0.75, 0]}>
          <meshStandardMaterial ref={transitionMatRef} color="#fbbf24" transparent opacity={1} />
        </mesh>
      </group>

      {/* Gallery Presentation */}
      <group ref={galleryRef} position={[0, 0, -2]}>
        <Float speed={1.5} floatIntensity={0.3} rotationIntensity={0.1}>
          <group ref={img1Ref} position={[0, -20, 0]}>
            <mesh geometry={frameGeo} material={frameMat} position={[0, 0, -0.05]} />
            <mesh geometry={planeGeo} material={imgMat1} />
          </group>
        </Float>
        <Float speed={1.5} floatIntensity={0.3} rotationIntensity={0.1}>
          <group ref={img2Ref} position={[0, -20, -1]}>
            <mesh geometry={frameGeo} material={frameMat} position={[0, 0, -0.05]} />
            <mesh geometry={planeGeo} material={imgMat2} />
          </group>
        </Float>
        <Float speed={1.5} floatIntensity={0.3} rotationIntensity={0.1}>
          <group ref={img3Ref} position={[0, -20, -2]}>
            <mesh geometry={frameGeo} material={frameMat} position={[0, 0, -0.05]} />
            <mesh geometry={planeGeo} material={imgMat3} />
          </group>
        </Float>
      </group>
    </>
  );
}
