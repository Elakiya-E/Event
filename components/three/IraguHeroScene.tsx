"use client";

import React, { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { HumanSculpture } from "./human/HumanSculpture";

/* eslint-disable react-hooks/purity */

interface IraguHeroSceneProps {
  sceneProgress: React.MutableRefObject<number>;
}

export default function IraguHeroScene({ sceneProgress }: IraguHeroSceneProps) {
  const { viewport } = useThree();
  
  // Refs for animation
  const leafRef = useRef<THREE.Group>(null);
  const swarmRef = useRef<THREE.InstancedMesh>(null);
  const cameraTarget = useRef(new THREE.Vector3(0, 0, 0));
  const humanRootRef = useRef<THREE.Group>(null);
  const leafAnchorRef = useRef<THREE.Group>(null);
  
  // To store the hand's world position at the moment of release
  const releasePos = useRef(new THREE.Vector3());
  const releaseQuat = useRef(new THREE.Quaternion());

  // Responsive values
  const isMobile = viewport.width < 768; // Adjust threshold based on internal units if needed, but simple boolean here
  const leafCount = isMobile ? 30 : 100;
  const particleCount = isMobile ? 500 : 1500;

  // Swarm setup
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const leafGeometry = useMemo(() => {
    // Simple stylised leaf geometry (plane slightly curved)
    const geo = new THREE.CylinderGeometry(0, 0.2, 0.6, 4, 1);
    geo.translate(0, 0.3, 0);
    geo.scale(1, 1, 0.1);
    return geo;
  }, []);
  
  const leafMaterial = useMemo(() => new THREE.MeshStandardMaterial({ 
    color: "#2dd4bf", // teal-400
    roughness: 0.4,
    metalness: 0.1,
    side: THREE.DoubleSide
  }), []);

  const swarmPositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < leafCount; i++) {
      positions.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15 - 5
        ),
        rotation: new THREE.Euler(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ),
        scale: 0.5 + Math.random() * 0.8
      });
    }
    return positions;
  }, [leafCount]);

  // Particles setup
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;
    }
    return positions;
  }, [particleCount]);

  // Animation Loop (no state updates!)
  useFrame((state) => {
    const p = sceneProgress.current;

    // 1. Camera Animation
    let targetCamZ = 8;
    let targetCamY = 0;
    
    if (p > 0.25 && p <= 0.5) {
      // 0.25 -> 0.50: Camera tracks leaf slowly
      const localP = (p - 0.25) / 0.25;
      targetCamZ = THREE.MathUtils.lerp(8, 5, localP);
      targetCamY = THREE.MathUtils.lerp(0, 1, localP);
    } else if (p > 0.5 && p <= 0.85) {
      // 0.50 -> 0.85: approach swarm
      const localP = (p - 0.5) / 0.35;
      targetCamZ = THREE.MathUtils.lerp(5, 2, localP);
      targetCamY = THREE.MathUtils.lerp(1, 2, localP);
    } else if (p > 0.85) {
      // 0.85 -> 1.0: pass through leaf field
      const localP = (p - 0.85) / 0.15;
      targetCamZ = THREE.MathUtils.lerp(2, -5, localP);
      targetCamY = THREE.MathUtils.lerp(2, 3, localP);
    }

    state.camera.position.lerp(new THREE.Vector3(0, targetCamY, targetCamZ), 0.05);
    state.camera.lookAt(cameraTarget.current);

    // 2. Main Leaf Animation
    if (leafRef.current && leafAnchorRef.current) {
      if (p <= 0.20) {
        // Leaf is firmly in the hand
        leafAnchorRef.current.getWorldPosition(leafRef.current.position);
        leafAnchorRef.current.getWorldQuaternion(leafRef.current.quaternion);
        // Store for seamless interpolation after release
        releasePos.current.copy(leafRef.current.position);
        releaseQuat.current.copy(leafRef.current.quaternion);
      } else {
        // Detaches and floats up
        let targetX = 0;
        let targetY = 2;
        let targetZ = 3;
        
        const targetQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.PI, Math.PI * 0.5, 0));

        if (p > 0.20 && p <= 0.65) {
          const localP = (p - 0.2) / 0.45;
          // Interpolate from the release position
          targetX = THREE.MathUtils.lerp(releasePos.current.x, 0, localP);
          targetY = THREE.MathUtils.lerp(releasePos.current.y, 2, localP);
          targetZ = THREE.MathUtils.lerp(releasePos.current.z, 3, localP);
          
          leafRef.current.quaternion.slerpQuaternions(releaseQuat.current, targetQuat, localP);
        } else if (p > 0.65) {
          targetX = 0;
          targetY = 2;
          targetZ = 3;
          leafRef.current.quaternion.copy(targetQuat);
        }

        leafRef.current.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.1);
      }
    }

    // 3. Leaf Swarm Animation
    if (swarmRef.current) {
      // Swarm opacity / scale based on progress (0.65 -> 0.8)
      let swarmScale = 0;
      if (p > 0.65) {
        swarmScale = Math.min((p - 0.65) / 0.15, 1);
      }
      
      const time = state.clock.getElapsedTime();
      
      swarmPositions.forEach((item, i) => {
        dummy.position.copy(item.position);
        
        // Add subtle floating motion
        dummy.position.y += Math.sin(time + i) * 0.005;
        dummy.position.x += Math.cos(time + i * 0.5) * 0.005;
        
        // Add parallax based on scroll progress
        dummy.position.z = item.position.z + (p * 5); // move towards camera

        dummy.rotation.copy(item.rotation);
        dummy.rotation.x += 0.005;
        dummy.rotation.y += 0.005;

        // Scale up gradually
        dummy.scale.setScalar(item.scale * swarmScale);
        
        dummy.updateMatrix();
        swarmRef.current!.setMatrixAt(i, dummy.matrix);
      });
      swarmRef.current.instanceMatrix.needsUpdate = true;
    }

    // 4. Human Parallax
    if (humanRootRef.current) {
      // Subtle parallax for the human figure moving down slightly as we scroll
      humanRootRef.current.position.y = THREE.MathUtils.lerp(0, -2, p);
    }
  });

  return (
    <>
      <color attach="background" args={['#050505']} />
      
      {/* Lighting setup */}
      <ambientLight intensity={0.4} color="#fdfbf7" />
      <directionalLight position={[5, 5, 2]} intensity={1.2} color="#fbbf24" /> {/* Warm gold key */}
      <spotLight position={[-5, 5, -5]} intensity={2.5} color="#2dd4bf" penumbra={1} angle={0.5} /> {/* Teal rim */}
      <pointLight position={[0, 0, 5]} intensity={0.8} color="#ffffff" /> {/* Frontal white fill to reveal ivory material */}

      {/* Atmospheric Particles */}
      <Points positions={particlesPosition} stride={3}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.3}
        />
      </Points>

      {/* Human Sculpture Group */}
      <group ref={humanRootRef}>
        <group position={[2.8, -4.2, -1.5]} scale={isMobile ? 0.8 : 1.3}>
          <HumanSculpture ref={leafAnchorRef} sceneProgress={sceneProgress} />
        </group>
      </group>

      {/* Main Single Leaf */}
      <group ref={leafRef}>
        {/* We use the Float inside the anchor, but since the leaf is in world space now, we can apply a subtle float only after it detaches, or just let it be. */}
        <mesh geometry={leafGeometry} material={leafMaterial} />
      </group>

      {/* Leaf Swarm (Instanced) */}
      <instancedMesh
        ref={swarmRef}
        args={[leafGeometry, leafMaterial, leafCount]}
        frustumCulled={false} // Prevent pop-in during camera moves
      />
    </>
  );
}
