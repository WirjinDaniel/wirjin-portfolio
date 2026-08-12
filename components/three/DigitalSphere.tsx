'use client';

import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, PointMaterial, Points } from '@react-three/drei';
import * as THREE from 'three';

function OrbitParticles() {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const count = 140;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const r = 2.6 + Math.random() * 0.5;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.06;
    ref.current.rotation.x += delta * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} frustumCulled={false}>
      <PointMaterial
        color="#4fd1ae"
        size={0.018}
        sizeAttenuation
        transparent
        opacity={0.6}
        depthWrite={false}
      />
    </Points>
  );
}

function InnerCore() {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    meshRef.current.rotation.y -= delta * 0.4;
    meshRef.current.rotation.z += delta * 0.2;
  });
  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[0.28, 0]} />
        <meshStandardMaterial
          color="#e8a23d"
          emissive="#e8a23d"
          emissiveIntensity={0.6}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
}

export default function DigitalSphere() {
  const groupRef = useRef<THREE.Group>(null!);
  const outerRef = useRef<THREE.Mesh>(null!);
  const innerRef = useRef<THREE.Mesh>(null!);
  const { mouse } = useThree();

  useFrame((_, delta) => {
    innerRef.current.rotation.y += delta * 0.18;
    innerRef.current.rotation.x += delta * 0.07;

    outerRef.current.rotation.y -= delta * 0.06;
    outerRef.current.rotation.z += delta * 0.04;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouse.x * 0.25,
      0.04
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -mouse.y * 0.12,
      0.04
    );
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.35} />
      <pointLight color="#4fd1ae" intensity={1.4} position={[3, 3, 3]} />
      <pointLight color="#e8a23d" intensity={0.5} position={[-3, -2, 2]} />

      {/* Inner solid icosahedron */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.72, 1]} />
        <meshStandardMaterial
          color="#0d2b22"
          emissive="#4fd1ae"
          emissiveIntensity={0.12}
          metalness={0.85}
          roughness={0.18}
          transparent
          opacity={0.88}
        />
      </mesh>

      {/* Outer wireframe */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[2.15, 1]} />
        <meshBasicMaterial
          color="#4fd1ae"
          wireframe
          transparent
          opacity={0.14}
        />
      </mesh>

      {/* Orbiting particles */}
      <OrbitParticles />

      {/* Floating inner core */}
      <InnerCore />
    </group>
  );
}
