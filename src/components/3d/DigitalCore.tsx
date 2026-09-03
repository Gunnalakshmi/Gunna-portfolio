import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sparkles, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { QualityLevel } from '../../hooks/use3DQuality';

interface DigitalCoreProps {
  quality: QualityLevel;
  mousePos: { x: number; y: number };
}

export const DigitalCore: React.FC<DigitalCoreProps> = ({ quality, mousePos }) => {
  const outerGroupRef = useRef<THREE.Group>(null!);
  const innerCoreRef = useRef<THREE.Mesh>(null!);
  const ring1Ref = useRef<THREE.Mesh>(null!);
  const ring2Ref = useRef<THREE.Mesh>(null!);
  const wireframeRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    const targetX = mousePos.x * 0.5;
    const targetY = mousePos.y * 0.5;

    if (outerGroupRef.current) {
      // Smooth Lerp rotation reacting to mouse tracking
      outerGroupRef.current.rotation.y = THREE.MathUtils.lerp(outerGroupRef.current.rotation.y, targetX, 0.05);
      outerGroupRef.current.rotation.x = THREE.MathUtils.lerp(outerGroupRef.current.rotation.x, -targetY, 0.05);
    }

    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y += delta * 0.4;
      innerCoreRef.current.rotation.z += delta * 0.2;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.6;
      ring1Ref.current.rotation.y += delta * 0.3;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.5;
      ring2Ref.current.rotation.z += delta * 0.4;
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.y -= delta * 0.3;
    }
  });

  const particleCount = quality === 'high' ? 90 : 35;

  return (
    <group ref={outerGroupRef}>
      {/* Dynamic Physically-Based Lights */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00f3ff" castShadow />
      <pointLight position={[-10, -10, -5]} intensity={2} color="#7928ca" />
      <pointLight position={[5, -5, 5]} intensity={1} color="#38bdf8" />

      {/* Floating Organic Digital Core Assembly */}
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
        {/* Central Icosahedron Glass/Metallic Object */}
        <mesh ref={innerCoreRef} scale={1.8}>
          <icosahedronGeometry args={[1, 1]} />
          {quality === 'high' ? (
            <MeshTransmissionMaterial
              backside
              samples={4}
              thickness={0.6}
              roughness={0.15}
              clearcoat={1}
              clearcoatRoughness={0.1}
              transmission={0.9}
              ior={1.4}
              chromaticAberration={0.06}
              distortion={0.3}
              distortionScale={0.3}
              temporalDistortion={0.1}
              color="#00f3ff"
            />
          ) : (
            <meshStandardMaterial
              color="#00f3ff"
              metalness={0.9}
              roughness={0.1}
              wireframe={false}
              emissive="#004466"
              emissiveIntensity={0.5}
            />
          )}
        </mesh>

        {/* Inner Glowing Wireframe Geo */}
        <mesh ref={wireframeRef} scale={2.05}>
          <icosahedronGeometry args={[1, 2]} />
          <meshBasicMaterial color="#00f3ff" wireframe opacity={0.35} transparent />
        </mesh>

        {/* Outer Metallic Orbital Ring 1 */}
        <mesh ref={ring1Ref} scale={2.8}>
          <torusGeometry args={[1, 0.02, 16, 100]} />
          <meshStandardMaterial color="#7928ca" metalness={0.95} roughness={0.1} emissive="#3b0764" emissiveIntensity={0.6} />
        </mesh>

        {/* Outer Metallic Orbital Ring 2 */}
        <mesh ref={ring2Ref} scale={3.4}>
          <torusGeometry args={[1, 0.015, 16, 100]} />
          <meshStandardMaterial color="#00f3ff" metalness={0.9} roughness={0.2} emissive="#003344" emissiveIntensity={0.4} />
        </mesh>

        {/* Orbiting Satellite Data Nodes */}
        {[...Array(6)].map((_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          const radius = 3.9;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          return (
            <mesh key={i} position={[x, (i % 2 === 0 ? 0.6 : -0.6), z]} scale={0.12}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color={i % 2 === 0 ? '#00f3ff' : '#a855f7'} metalness={0.8} roughness={0.2} />
            </mesh>
          );
        })}
      </Float>

      {/* Atmospheric Starfield / Particle Cloud */}
      <Sparkles
        count={particleCount}
        scale={[12, 12, 12]}
        size={quality === 'high' ? 3 : 2}
        speed={0.4}
        opacity={0.6}
        color="#00f3ff"
      />
      <Sparkles
        count={Math.floor(particleCount / 2)}
        scale={[14, 14, 14]}
        size={4}
        speed={0.2}
        opacity={0.4}
        color="#7928ca"
      />
    </group>
  );
};
