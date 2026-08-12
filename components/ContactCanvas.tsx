'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointMaterial, Points } from '@react-three/drei';
import * as THREE from 'three';

function AmbientOrb() {
  const innerRef = useRef<THREE.Mesh>(null!);
  const outerRef = useRef<THREE.Mesh>(null!);
  const pointsRef = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const count = 100;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const r = 2.2 + Math.random() * 0.4;
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    innerRef.current.rotation.y += delta * 0.09;
    innerRef.current.rotation.x += delta * 0.04;
    outerRef.current.rotation.y -= delta * 0.04;
    outerRef.current.rotation.z += delta * 0.025;
    pointsRef.current.rotation.y += delta * 0.045;
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight color="#4fd1ae" intensity={1.2} position={[3, 3, 3]} />
      <pointLight color="#e8a23d" intensity={0.4} position={[-2, -2, 2]} />

      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.65, 1]} />
        <meshStandardMaterial
          color="#0d2b22"
          emissive="#4fd1ae"
          emissiveIntensity={0.1}
          metalness={0.85}
          roughness={0.2}
          transparent
          opacity={0.72}
        />
      </mesh>

      <mesh ref={outerRef}>
        <icosahedronGeometry args={[2.05, 1]} />
        <meshBasicMaterial color="#4fd1ae" wireframe transparent opacity={0.1} />
      </mesh>

      <Points ref={pointsRef} positions={positions} frustumCulled={false}>
        <PointMaterial
          color="#4fd1ae"
          size={0.016}
          sizeAttenuation
          transparent
          opacity={0.5}
          depthWrite={false}
        />
      </Points>
    </>
  );
}

export default function ContactCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 55 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.5]}
      style={{ background: 'transparent' }}
    >
      <AmbientOrb />
    </Canvas>
  );
}
