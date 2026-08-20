"use client";

import React, { useRef, useMemo, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

interface EventWorldSceneProps {
  sceneProgress: React.MutableRefObject<number>;
}

// Module-scoped geometry and material for the instanced mesh (avoids react-hooks/immutability lint errors)
const leafGeometry = new THREE.CylinderGeometry(0, 0.2, 0.6, 4, 1);
leafGeometry.translate(0, 0.3, 0);
leafGeometry.scale(1, 1, 0.1);

const leafMaterial = new THREE.MeshStandardMaterial({ 
  color: "#2dd4bf", 
  roughness: 0.4,
  metalness: 0.1,
  side: THREE.DoubleSide,
  transparent: true
});

export default function EventWorldScene({ sceneProgress }: EventWorldSceneProps) {
  const { viewport, size } = useThree();
  
  // Refs for animation
  const cameraTarget = useRef(new THREE.Vector3(0, 0, 5));
  const swarmRef = useRef<THREE.InstancedMesh>(null);
  const environmentRef = useRef<THREE.Group>(null);
  const ringsRef = useRef<THREE.Group>(null);
  const framesRef = useRef<THREE.Group>(null);

  // Responsive values
  const isMobile = viewport.width < 768;
  const leafCount = isMobile ? 50 : 200; 
  const particleCount = isMobile ? 150 : 400;

  const dummy = useMemo(() => new THREE.Object3D(), []);

  const [swarmPositions] = useState(() => {
    const positions = [];
    for (let i = 0; i < leafCount; i++) {
      positions.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 10 - 2 // Positioned around camera start
        ),
        rotation: new THREE.Euler(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ),
        scale: 1 + Math.random() * 2
      });
    }
    return positions;
  });

  const [particlesPosition] = useState(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20 + 5;
    }
    return positions;
  });

  // Architectural frame data
  const frameData = useMemo(() => {
    const frames = [];
    for (let i = 0; i < 5; i++) {
      frames.push({
        position: new THREE.Vector3(0, 0, i * 4 - 8),
        scale: new THREE.Vector3(10 + i * 2, 8 + i * 2, 0.1),
      });
    }
    return frames;
  }, []);

  useFrame((state) => {
    const p = sceneProgress.current;

    // 1. Camera Animation
    // Keep the camera relatively stable. Move mostly on Z to enter the scene.
    let targetCamZ = -5;
    let targetCamY = 3;
    let targetCamX = 0;
    
    if (p <= 0.15) {
      targetCamZ = -5;
      targetCamY = 3;
    } else if (p > 0.15 && p <= 0.5) {
      const localP = (p - 0.15) / 0.35;
      targetCamZ = THREE.MathUtils.lerp(-5, 0, localP);
      targetCamY = THREE.MathUtils.lerp(3, 1.5, localP);
    } else if (p > 0.5 && p <= 0.85) {
      const localP = (p - 0.5) / 0.35;
      targetCamZ = THREE.MathUtils.lerp(0, 1, localP);
      targetCamY = THREE.MathUtils.lerp(1.5, 1, localP);
      targetCamX = THREE.MathUtils.lerp(0, -0.5, localP); // Subtle orbit
    } else if (p > 0.85) {
      const localP = (p - 0.85) / 0.15;
      targetCamZ = THREE.MathUtils.lerp(1, 3, localP);
      targetCamX = THREE.MathUtils.lerp(-0.5, 0, localP);
      targetCamY = THREE.MathUtils.lerp(1, 0, localP);
    }

    state.camera.position.lerp(new THREE.Vector3(targetCamX, targetCamY, targetCamZ), 0.05);
    
    // Look Target stays focused on the environment's Z-depth
    cameraTarget.current.x = THREE.MathUtils.lerp(0, isMobile ? 0 : 1, p);
    cameraTarget.current.y = THREE.MathUtils.lerp(0, isMobile ? -1 : 0, p);
    cameraTarget.current.z = THREE.MathUtils.lerp(0, 5, p * 2);
    state.camera.lookAt(cameraTarget.current);

    // 2. Leaf Swarm clearing
    if (swarmRef.current) {
      let opacity = 1;
      if (p > 0.1) {
        opacity = Math.max(1 - (p - 0.1) / 0.15, 0);
      }
      leafMaterial.opacity = opacity;
      
      swarmPositions.forEach((item, i) => {
        dummy.position.copy(item.position);
        if (p > 0.05) {
          dummy.position.x += Math.sign(item.position.x) * p * 15;
          dummy.position.y += Math.sign(item.position.y) * p * 15;
          dummy.position.z += p * 10; 
        }
        dummy.rotation.copy(item.rotation);
        dummy.scale.setScalar(item.scale);
        dummy.updateMatrix();
        swarmRef.current!.setMatrixAt(i, dummy.matrix);
      });
      swarmRef.current.instanceMatrix.needsUpdate = true;
    }

    // 3. Environment Animation
    if (environmentRef.current) {
      // Drift up slightly to feel alive
      const driftY = THREE.MathUtils.lerp(-0.5, 0.2, Math.min(p * 3, 1));
      environmentRef.current.position.y = (isMobile ? -1.5 : 0) + driftY;
    }
    
    if (ringsRef.current) {
      ringsRef.current.rotation.z = p * Math.PI * 0.5;
      ringsRef.current.rotation.x = THREE.MathUtils.lerp(Math.PI / 2, Math.PI / 2.5, p);
    }

    if (framesRef.current) {
      framesRef.current.children.forEach((frame, i) => {
        const frameP = Math.max(0, p - (i * 0.1));
        frame.position.z = frameData[i].position.z + (frameP * 2);
      });
    }
  });

  // Responsive composition
  const isTablet = size.width >= 768 && size.width < 1024;
  const envX = isMobile ? 0 : (isTablet ? 1.5 : 2.2);

  return (
    <>
      <color attach="background" args={['#030303']} />
      
      <ambientLight intensity={0.1} color="#ffffff" />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#fbbf24" />
      <spotLight position={[-10, 10, 0]} intensity={3} color="#2dd4bf" penumbra={1} angle={0.8} />
      <pointLight position={[0, 2, 5]} intensity={0.5} color="#e2e8f0" />

      <Points positions={particlesPosition} stride={3}>
        <PointMaterial transparent color="#d9a928" size={0.06} sizeAttenuation={true} depthWrite={false} opacity={0.3} />
      </Points>

      <instancedMesh ref={swarmRef} args={[leafGeometry, leafMaterial, leafCount]} frustumCulled={false} />

      {/* Main Event World Group */}
      <group ref={environmentRef} position={[envX, 0, 5]} scale={isMobile ? 0.8 : 1.1}>
        
        {/* Abstract Floating Frames */}
        <group ref={framesRef}>
          {frameData.map((data, i) => (
            <mesh key={i} position={data.position}>
              {/* Scaled down to match new focal element size */}
              <boxGeometry args={[data.scale.x * 0.4, data.scale.y * 0.4, data.scale.z]} />
              <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.05 + (i * 0.02)} />
            </mesh>
          ))}
        </group>

        {/* Core Luminous Rings (Scaled down to fit 40-50% height) */}
        <group ref={ringsRef} position={[0, 0, 0]}>
          <mesh>
            <torusGeometry args={[0.7, 0.015, 32, 100]} />
            <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.8} />
          </mesh>
          <mesh rotation={[0.1, 0.1, 0]}>
            <torusGeometry args={[0.9, 0.01, 32, 100]} />
            <meshStandardMaterial color="#2dd4bf" emissive="#2dd4bf" emissiveIntensity={0.5} />
          </mesh>
          <mesh rotation={[-0.1, -0.1, 0]}>
            <torusGeometry args={[1.1, 0.02, 32, 100]} />
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.2} transparent opacity={0.5} />
          </mesh>
        </group>

        {/* Central Monolith */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.1, 64]} />
          <meshStandardMaterial color="#0a0a0a" roughness={0.1} metalness={0.9} />
        </mesh>
        
        {/* Soft volumetric glow under monolith */}
        <mesh position={[0, -0.1, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[3, 3]} />
          <meshBasicMaterial color="#2dd4bf" transparent opacity={0.05} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>

      </group>
    </>
  );
}
