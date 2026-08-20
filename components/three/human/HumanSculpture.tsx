"use client";

import React, { useMemo, forwardRef } from "react";
import * as THREE from "three";
import { Float } from "@react-three/drei";

export interface HumanSculptureProps {
  sceneProgress?: React.MutableRefObject<number>;
}

export const HumanSculpture = forwardRef<THREE.Group, HumanSculptureProps>(
  (props, ref) => {
    // 1. Material - Premium Matte Stone / Warm Ivory (#fdfbf7)
    // The user requested metalness 0.04 and roughness 0.35
    const stoneMat = useMemo(() => new THREE.MeshStandardMaterial({ 
      color: "#fdfbf7",
      roughness: 0.35, 
      metalness: 0.04 
    }), []);

    // 2. Geometries (Continuous sculptural silhouette)
    const abstractBodyGeo = useMemo(() => {
      const pts = [];
      // Elegant, abstract, continuous human form (Lathe profile)
      // Base
      pts.push(new THREE.Vector2(0.01, 0));
      pts.push(new THREE.Vector2(0.35, 0)); 
      
      // Flowing lower body (legs merged into a sculptural base)
      pts.push(new THREE.Vector2(0.32, 0.6));
      pts.push(new THREE.Vector2(0.36, 1.4)); // Hips
      
      // Tapered waist
      pts.push(new THREE.Vector2(0.24, 2.0));
      pts.push(new THREE.Vector2(0.22, 2.4));
      
      // Broad shoulders / chest expansion
      pts.push(new THREE.Vector2(0.34, 3.0));
      pts.push(new THREE.Vector2(0.42, 3.4));
      pts.push(new THREE.Vector2(0.3, 3.7)); // Shoulder curve towards neck
      
      // Neck
      pts.push(new THREE.Vector2(0.12, 3.8));
      pts.push(new THREE.Vector2(0.1, 4.1));
      
      // Elongated Head (Faceless abstract)
      pts.push(new THREE.Vector2(0.2, 4.3));
      pts.push(new THREE.Vector2(0.23, 4.5));
      pts.push(new THREE.Vector2(0.18, 4.8));
      pts.push(new THREE.Vector2(0.08, 5.0));
      pts.push(new THREE.Vector2(0, 5.05));
      
      const geo = new THREE.LatheGeometry(pts, 64);
      geo.computeVertexNormals();
      geo.translate(0, -2.5, 0); // Center the mesh vertically
      return geo;
    }, []);

    const abstractArmGeo = useMemo(() => {
      // Abstract sweeping curve for the arm presenting the leaf
      const points = [];
      for (let i = 0; i <= 10; i++) {
        const t = i / 10;
        const x = THREE.MathUtils.lerp(0.35, 1.2, t);
        const y = THREE.MathUtils.lerp(1.0, 0.5, t) + Math.sin(t * Math.PI) * 0.1;
        const z = THREE.MathUtils.lerp(0.1, 1.0, t);
        points.push(new THREE.Vector3(x, y, z));
      }
      const path = new THREE.CatmullRomCurve3(points);
      // Tube tapering achieved via scaling later, or just a thin elegant tube
      const geo = new THREE.TubeGeometry(path, 64, 0.06, 16, false);
      return geo;
    }, []);

    return (
      <group>
        <Float speed={1.2} rotationIntensity={0.05} floatIntensity={0.05}>
          {/* Main Body Rotation */}
          <group rotation={[0, -Math.PI / 6, 0]}>
            
            {/* The single continuous sculptural body */}
            <mesh geometry={abstractBodyGeo} material={stoneMat} castShadow receiveShadow />
            
            {/* The sweeping abstract arm */}
            <mesh geometry={abstractArmGeo} material={stoneMat} castShadow />

            {/* LEAF ANCHOR: Placed at the end of the abstract arm curve */}
            <group ref={ref} position={[1.25, 0.45, 1.1]} rotation={[Math.PI / 2, 0, 0]} />
            
          </group>
        </Float>
      </group>
    );
  }
);

HumanSculpture.displayName = "HumanSculpture";
