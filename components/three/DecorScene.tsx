'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface DecorSceneProps {
  progress: React.MutableRefObject<number>;
}

export default function DecorScene({ progress }: DecorSceneProps) {
  // Stable refs for objects to animate without React state
  const cameraTargetRef = useRef(new THREE.Vector3(0, 0, 0));
  const platformRef = useRef<THREE.Group>(null);
  const frameGroupRef = useRef<THREE.Group>(null);
  const decorGroupRef = useRef<THREE.Group>(null);
  const detailGroupRef = useRef<THREE.Group>(null);
  
  // Lighting refs
  const ambientLightRef = useRef<THREE.AmbientLight>(null);
  const spotLightRef = useRef<THREE.SpotLight>(null);
  const pointLightRef = useRef<THREE.PointLight>(null);

  // Materials (memoized to avoid recreation)
  const materials = useMemo(() => {
    return {
      floor: new THREE.MeshStandardMaterial({ 
        color: '#050505', 
        roughness: 0.9, 
        metalness: 0.1 
      }),
      accent: new THREE.MeshStandardMaterial({ 
        color: '#d4af37', // Brand gold/accent
        roughness: 0.3, 
        metalness: 0.8 
      }),
      darkMetal: new THREE.MeshStandardMaterial({ 
        color: '#1a1a1a', 
        roughness: 0.5, 
        metalness: 0.9 
      }),
      glass: new THREE.MeshPhysicalMaterial({
        color: '#ffffff',
        roughness: 0.1,
        transmission: 0.9,
        thickness: 0.5,
      })
    };
  }, []);

  useFrame((state) => {
    const p = progress.current; // 0 to 1

    // 1. Camera Animation
    // 0.0 - 0.2: Wide establishing (Z: 15)
    // 0.2 - 0.4: Move forward (Z: 15 -> 10)
    // 0.4 - 0.6: Lateral shift (X: 0 -> -2)
    // 0.6 - 0.8: Detail emphasis (Z: 10 -> 6, Y: 2 -> 1)
    // 0.8 - 1.0: Reveal pullback (Z: 6 -> 12, X: -2 -> 0, Y: 1 -> 3)
    
    let camX = 0;
    let camY = 3;
    let camZ = 15;
    
    if (p > 0.2 && p <= 0.4) {
      const localP = (p - 0.2) / 0.2;
      camZ = THREE.MathUtils.lerp(15, 10, localP);
    } else if (p > 0.4 && p <= 0.6) {
      camZ = 10;
      const localP = (p - 0.4) / 0.2;
      camX = THREE.MathUtils.lerp(0, -2, localP);
    } else if (p > 0.6 && p <= 0.8) {
      const localP = (p - 0.6) / 0.2;
      camX = -2;
      camZ = THREE.MathUtils.lerp(10, 6, localP);
      camY = THREE.MathUtils.lerp(3, 1, localP);
    } else if (p > 0.8) {
      const localP = (p - 0.8) / 0.2;
      camX = THREE.MathUtils.lerp(-2, 0, localP);
      camZ = THREE.MathUtils.lerp(6, 12, localP);
      camY = THREE.MathUtils.lerp(1, 4, localP);
    }

    // Smoothly damp camera position
    state.camera.position.lerp(new THREE.Vector3(camX, camY, camZ), 0.05);
    
    // Look Target moves slightly down over time
    const targetY = THREE.MathUtils.lerp(1, 0, p);
    cameraTargetRef.current.lerp(new THREE.Vector3(0, targetY, 0), 0.05);
    state.camera.lookAt(cameraTargetRef.current);

    // 2. Lighting Evolution
    if (ambientLightRef.current) {
      ambientLightRef.current.intensity = THREE.MathUtils.lerp(0.1, 0.4, p);
    }
    if (spotLightRef.current) {
      // Spotlight appears at 0.2
      const spotIntensity = p > 0.2 ? THREE.MathUtils.lerp(0, 5, (p - 0.2) * 1.25) : 0;
      spotLightRef.current.intensity = Math.min(spotIntensity, 5);
    }
    if (pointLightRef.current) {
      // Point light highlights details at 0.6
      const ptIntensity = p > 0.5 ? THREE.MathUtils.lerp(0, 3, (p - 0.5) * 2) : 0;
      pointLightRef.current.intensity = Math.min(ptIntensity, 3);
    }

    // 3. Object Animations
    // Platform emerges between 0.1 and 0.3
    if (platformRef.current) {
      const platScale = p > 0.1 ? THREE.MathUtils.lerp(0, 1, Math.min((p - 0.1) * 5, 1)) : 0;
      platformRef.current.scale.lerp(new THREE.Vector3(platScale, platScale, platScale), 0.1);
    }

    // Frames emerge between 0.3 and 0.5
    if (frameGroupRef.current) {
      const frameY = p > 0.3 ? THREE.MathUtils.lerp(-5, 0, Math.min((p - 0.3) * 5, 1)) : -5;
      frameGroupRef.current.position.y = THREE.MathUtils.lerp(frameGroupRef.current.position.y, frameY, 0.1);
    }

    // Decor details emerge between 0.5 and 0.7
    if (decorGroupRef.current) {
      const decorScale = p > 0.4 ? THREE.MathUtils.lerp(0, 1, Math.min((p - 0.4) * 5, 1)) : 0;
      decorGroupRef.current.scale.lerp(new THREE.Vector3(decorScale, decorScale, decorScale), 0.1);
      // Gentle rotation for life
      decorGroupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }

    // Micro details (particles/floating geometry) at 0.6
    if (detailGroupRef.current) {
      const detailScale = p > 0.6 ? THREE.MathUtils.lerp(0, 1, Math.min((p - 0.6) * 5, 1)) : 0;
      detailGroupRef.current.scale.lerp(new THREE.Vector3(detailScale, detailScale, detailScale), 0.1);
      detailGroupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <>
      <fog attach="fog" args={['#050505', 10, 30]} />
      
      {/* Lighting */}
      <ambientLight ref={ambientLightRef} color="#ffffff" intensity={0.1} />
      <spotLight 
        ref={spotLightRef} 
        position={[5, 10, 5]} 
        angle={0.5} 
        penumbra={1} 
        intensity={0} 
        color="#ffffff" 
        castShadow 
      />
      <pointLight 
        ref={pointLightRef} 
        position={[-3, 2, -2]} 
        intensity={0} 
        color="#d4af37" 
        distance={10} 
      />

      {/* Environment */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#020202" roughness={1} />
      </mesh>

      {/* Stage 2: Concept - Platform */}
      <group ref={platformRef} scale={[0, 0, 0]}>
        {/* Main Base */}
        <mesh position={[0, 0, 0]} receiveShadow castShadow>
          <cylinderGeometry args={[5, 5, 0.2, 64]} />
          <primitive object={materials.floor} />
        </mesh>
        {/* Emissive Edge */}
        <mesh position={[0, 0.1, 0]}>
          <torusGeometry args={[5, 0.05, 16, 64]} />
          <meshStandardMaterial color="#2dd4bf" emissive="#2dd4bf" emissiveIntensity={0.5} />
        </mesh>
        {/* Secondary overlapping tier */}
        <mesh position={[2, 0.2, -2]} receiveShadow castShadow>
          <cylinderGeometry args={[3, 3, 0.2, 64]} />
          <meshStandardMaterial color="#080808" roughness={0.5} metalness={0.2} />
        </mesh>
      </group>

      {/* Stage 3: Design - Archways & Suspended Lighting */}
      <group ref={frameGroupRef} position={[0, -8, 0]}>
        {/* Large Golden Arch */}
        <mesh position={[0, 0.2, -2]} rotation={[0, 0, Math.PI]} castShadow receiveShadow>
          <torusGeometry args={[4, 0.1, 16, 64, Math.PI]} />
          <primitive object={materials.accent} />
        </mesh>
        {/* Secondary Arch */}
        <mesh position={[0, 0.2, -4]} rotation={[0, 0, Math.PI]} castShadow receiveShadow>
          <torusGeometry args={[5, 0.05, 16, 64, Math.PI]} />
          <primitive object={materials.darkMetal} />
        </mesh>
        {/* Suspended Ring Light */}
        <mesh position={[0, 5, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[3, 0.08, 16, 64]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.8} />
        </mesh>
      </group>

      {/* Stage 4: Decor elements (Stylized Sculpture / Vase) */}
      <group ref={decorGroupRef} scale={[0, 0, 0]} position={[0, 0.2, 0]}>
        <mesh position={[0, 1, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.2, 0.8, 2, 32]} />
          <primitive object={materials.darkMetal} />
        </mesh>
        {/* Floral/Abstract top */}
        <mesh position={[0, 2.5, 0]} castShadow>
          <icosahedronGeometry args={[0.8, 1]} />
          <primitive object={materials.glass} />
        </mesh>
      </group>

      {/* Stage 5: Fine details (Glowing table pieces/nodes) */}
      <group ref={detailGroupRef} scale={[0, 0, 0]} position={[2, 0.4, -2]}>
        {Array.from({ length: 3 }).map((_, i) => (
          <mesh 
            key={i} 
            position={[Math.sin(i * 2) * 1.5, i * 0.3, Math.cos(i * 2) * 1.5]}
            castShadow
          >
            <cylinderGeometry args={[0.4, 0.4, 0.05, 32]} />
            <primitive object={materials.accent} />
          </mesh>
        ))}
        {Array.from({ length: 3 }).map((_, i) => (
          <mesh 
            key={`light-${i}`} 
            position={[Math.sin(i * 2) * 1.5, i * 0.3 + 0.2, Math.cos(i * 2) * 1.5]}
          >
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={1} />
          </mesh>
        ))}
      </group>
    </>
  );
}
