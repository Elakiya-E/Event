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
    const stoneMat = useMemo(() => new THREE.MeshStandardMaterial({ 
      color: "#fdfbf7",
      roughness: 0.25, 
      metalness: 0.05 
    }), []);

    // 2. Geometries (Using LatheGeometry for smooth organic sculptural forms)
    const torsoGeo = useMemo(() => {
      const pts = [];
      pts.push(new THREE.Vector2(0, 0));       // crotch center
      pts.push(new THREE.Vector2(0.48, 0));    // hips base
      pts.push(new THREE.Vector2(0.55, 0.4));  // full hips
      pts.push(new THREE.Vector2(0.4, 1.0));   // waist taper
      pts.push(new THREE.Vector2(0.38, 1.4));  // upper waist
      pts.push(new THREE.Vector2(0.55, 2.0));  // chest expansion
      pts.push(new THREE.Vector2(0.7, 2.4));   // broad shoulders
      pts.push(new THREE.Vector2(0.2, 2.6));   // shoulder slope to neck
      pts.push(new THREE.Vector2(0, 2.6));     // neck base center
      const geo = new THREE.LatheGeometry(pts, 64);
      geo.computeVertexNormals();
      return geo;
    }, []);

    const legGeo = useMemo(() => {
      const pts = [];
      pts.push(new THREE.Vector2(0, 0));       // ankle center
      pts.push(new THREE.Vector2(0.08, 0));    // ankle
      pts.push(new THREE.Vector2(0.12, 0.2));  // lower calf
      pts.push(new THREE.Vector2(0.18, 0.8));  // full calf
      pts.push(new THREE.Vector2(0.14, 1.2));  // knee taper
      pts.push(new THREE.Vector2(0.22, 1.7));  // lower thigh
      pts.push(new THREE.Vector2(0.28, 2.4));  // upper thigh
      pts.push(new THREE.Vector2(0, 2.4));     // thigh center
      const geo = new THREE.LatheGeometry(pts, 64);
      geo.translate(0, -2.4, 0); // Origin at top of thigh (hip joint)
      geo.computeVertexNormals();
      return geo;
    }, []);

    const footGeo = useMemo(() => {
      const geo = new THREE.SphereGeometry(0.12, 32, 32);
      geo.scale(1, 0.6, 2.2);
      geo.translate(0, -0.05, 0.1); 
      return geo;
    }, []);

    const upperArmGeo = useMemo(() => {
      const pts = [];
      pts.push(new THREE.Vector2(0, 0));       // elbow center
      pts.push(new THREE.Vector2(0.09, 0));    // elbow base
      pts.push(new THREE.Vector2(0.14, 0.6));  // bicep
      pts.push(new THREE.Vector2(0.16, 1.2));  // shoulder
      pts.push(new THREE.Vector2(0, 1.2));     // shoulder center
      const geo = new THREE.LatheGeometry(pts, 32);
      geo.translate(0, -1.2, 0); // Origin at shoulder
      geo.computeVertexNormals();
      return geo;
    }, []);

    const lowerArmGeo = useMemo(() => {
      const pts = [];
      pts.push(new THREE.Vector2(0, 0));       // wrist center
      pts.push(new THREE.Vector2(0.06, 0));    // wrist
      pts.push(new THREE.Vector2(0.12, 0.7));  // forearm
      pts.push(new THREE.Vector2(0.09, 1.1));  // elbow taper
      pts.push(new THREE.Vector2(0, 1.1));     // elbow center
      const geo = new THREE.LatheGeometry(pts, 32);
      geo.translate(0, -1.1, 0); // Origin at elbow
      geo.computeVertexNormals();
      return geo;
    }, []);

    const headGeo = useMemo(() => {
      const geo = new THREE.SphereGeometry(0.28, 64, 64);
      geo.scale(1, 1.45, 1.15); // Elongated, sculptural
      return geo;
    }, []);

    const neckGeo = useMemo(() => {
      const pts = [];
      pts.push(new THREE.Vector2(0, 0));
      pts.push(new THREE.Vector2(0.14, 0));
      pts.push(new THREE.Vector2(0.12, 0.4));
      pts.push(new THREE.Vector2(0, 0.4));
      const geo = new THREE.LatheGeometry(pts, 32);
      geo.computeVertexNormals();
      return geo;
    }, []);

    // Abstract Sculptural Hand
    const palmGeo = useMemo(() => {
      const geo = new THREE.SphereGeometry(0.1, 32, 32);
      geo.scale(1, 1.1, 0.35);
      geo.translate(0, -0.1, 0); // Origin at wrist
      return geo;
    }, []);

    const fingerGeo = useMemo(() => {
      const pts = [];
      pts.push(new THREE.Vector2(0, 0));
      pts.push(new THREE.Vector2(0.015, 0)); // tip
      pts.push(new THREE.Vector2(0.025, 0.25)); // base
      pts.push(new THREE.Vector2(0, 0.25));
      const geo = new THREE.LatheGeometry(pts, 16);
      geo.translate(0, -0.25, 0); // Origin at knuckle
      geo.computeVertexNormals();
      return geo;
    }, []);

    return (
      <group>
        <Float speed={1.2} rotationIntensity={0.05} floatIntensity={0.05}>
          {/* Main Body Rotation (Slightly turned towards the leaf) */}
          <group rotation={[0, -Math.PI / 6, 0]}>
            
            {/* 
              CONTRAPPOSTO POSE
              Elevate so feet are at y=0. Legs are 2.4 units long.
            */}
            <group position={[0, 2.4, 0]}> 
              
              {/* --- LOWER BODY --- */}
              <group rotation={[0, 0, 0.08]}> {/* Hip tilt (Left hip higher) */}
                
                {/* Left Leg (Weight-bearing, straight) */}
                <group position={[-0.28, 0, 0]} rotation={[0, 0, -0.05]}>
                  <mesh geometry={legGeo} material={stoneMat} />
                  <mesh geometry={footGeo} material={stoneMat} position={[0, -2.4, 0]} rotation={[-0.05, 0, 0]} />
                </group>

                {/* Right Leg (Relaxed, bent slightly forward and out) */}
                <group position={[0.28, -0.1, 0.2]} rotation={[0.15, 0.2, 0.05]}>
                  <mesh geometry={legGeo} material={stoneMat} />
                  {/* Foot adjusted to rest on ground */}
                  <mesh geometry={footGeo} material={stoneMat} position={[0, -2.4, 0]} rotation={[-0.15, -0.2, 0]} />
                </group>
              </group>

              {/* --- UPPER BODY --- */}
              <group rotation={[0, 0, -0.05]}> {/* Spine curve compensating for hips */}
                
                {/* Torso */}
                <mesh geometry={torsoGeo} material={stoneMat} position={[0, -0.2, 0]} />

                {/* Neck & Head */}
                <group position={[0, 2.3, 0]} rotation={[0.05, -0.2, 0.05]}>
                  <mesh geometry={neckGeo} material={stoneMat} />
                  <mesh geometry={headGeo} material={stoneMat} position={[0, 0.6, 0.05]} />
                </group>

                {/* Left Arm (Relaxed) */}
                <group position={[-0.65, 2.2, 0]} rotation={[0.1, 0, 0.15]}>
                  <mesh geometry={upperArmGeo} material={stoneMat} />
                  <group position={[0, -1.2, 0]} rotation={[-0.1, 0, 0.05]}>
                    <mesh geometry={lowerArmGeo} material={stoneMat} />
                    <mesh geometry={palmGeo} material={stoneMat} position={[0, -1.1, 0]} rotation={[0, 0.5, 0]} />
                  </group>
                </group>

                {/* Right Arm (Reaching forward, palm up to present the leaf) */}
                <group position={[0.65, 2.2, 0]} rotation={[0.8, -0.2, -0.3]}>
                  <mesh geometry={upperArmGeo} material={stoneMat} />
                  {/* Forearm bent forward, palm rotated to face UP */}
                  <group position={[0, -1.2, 0]} rotation={[1.0, 0.5, -0.2]}>
                    <mesh geometry={lowerArmGeo} material={stoneMat} />
                    
                    {/* Hand */}
                    <group position={[0, -1.1, 0]} rotation={[-Math.PI / 2 + 0.2, 0, 0]}>
                      {/* Palm */}
                      <mesh geometry={palmGeo} material={stoneMat} />
                      
                      {/* Fingers grouped to curl naturally */}
                      <group position={[0, -0.2, 0.05]} rotation={[0.2, 0, 0]}>
                        <mesh geometry={fingerGeo} material={stoneMat} position={[-0.04, 0, 0]} rotation={[0, 0, 0.1]} />
                        <mesh geometry={fingerGeo} material={stoneMat} position={[0, 0, 0]} />
                        <mesh geometry={fingerGeo} material={stoneMat} position={[0.04, 0, 0]} rotation={[0, 0, -0.1]} />
                        {/* Thumb */}
                        <mesh geometry={fingerGeo} material={stoneMat} position={[-0.08, 0.1, 0.05]} rotation={[-0.4, 0.4, -0.6]} scale={[1, 0.7, 1]} />
                      </group>

                      {/* LEAF ANCHOR: Exactly positioned in the center of the upward-facing palm */}
                      {/* Rotation makes the leaf lay flat in the palm */}
                      <group ref={ref} position={[0, -0.1, 0.12]} rotation={[Math.PI / 2, 0, 0]} />
                    </group>
                  </group>
                </group>

              </group>

            </group>
          </group>
        </Float>
      </group>
    );
  }
);

HumanSculpture.displayName = "HumanSculpture";
