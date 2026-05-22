"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function AnimatedOrb() {
  const orbRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      orbRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Sphere ref={orbRef} args={[1, 64, 64]} scale={2.2}>
      <MeshDistortMaterial
        color="#8B5CF6"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
        wireframe={true}
      />
    </Sphere>
  );
}

export default function ThreeOrb() {
  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} intensity={2} color="#06B6D4" />
        <directionalLight position={[-2, -2, 5]} intensity={2} color="#8B5CF6" />
        <AnimatedOrb />
      </Canvas>
    </div>
  );
}
