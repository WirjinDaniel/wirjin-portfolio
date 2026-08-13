'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

const GLOBE_RADIUS = 1.9;
const CLOUDS_ALT   = 0.004;
const GLOBE_SPEED  = (Math.PI * 2) / 20;
const CLOUDS_SPEED = (Math.PI * 2) / 28;

export default function EarthGlobe() {
  const earthRef  = useRef<THREE.Mesh>(null!);
  const cloudsRef = useRef<THREE.Mesh>(null!);

  const [earthTex, cloudsTex] = useTexture([
    '/earth-blue-marble.jpg',
    '/clouds.png',
  ]);

  earthTex.colorSpace      = THREE.SRGBColorSpace;
  earthTex.anisotropy      = 16;
  earthTex.minFilter       = THREE.LinearMipmapLinearFilter;
  earthTex.magFilter       = THREE.LinearFilter;
  earthTex.generateMipmaps = true;

  cloudsTex.anisotropy      = 16;
  cloudsTex.minFilter       = THREE.LinearMipmapLinearFilter;
  cloudsTex.magFilter       = THREE.LinearFilter;
  cloudsTex.generateMipmaps = true;

  useFrame((_, delta) => {
    if (earthRef.current)  earthRef.current.rotation.y  += delta * GLOBE_SPEED;
    if (cloudsRef.current) cloudsRef.current.rotation.y -= delta * CLOUDS_SPEED;
  });

  return (
    <group position={[0, -0.8, 0]}>
      <mesh ref={earthRef} rotation={[THREE.MathUtils.degToRad(-30), 1.1, 0]}>
        <sphereGeometry args={[GLOBE_RADIUS, 96, 96]} />
        <meshStandardMaterial
          map={earthTex}
          roughness={0.78}
          metalness={0.0}
        />
      </mesh>

      <mesh ref={cloudsRef}>
        <sphereGeometry args={[GLOBE_RADIUS * (1 + CLOUDS_ALT), 75, 75]} />
        <meshBasicMaterial
          color="#ffffff"
          alphaMap={cloudsTex}
          transparent
          opacity={0.08}
          depthWrite={false}
        />
      </mesh>

      {/* Atmospheric haze — blue scatter */}
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS * 1.035, 32, 32]} />
        <meshBasicMaterial color="#1a5fa8" transparent opacity={0.11} side={THREE.BackSide} />
      </mesh>

      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS * 1.07, 32, 32]} />
        <meshBasicMaterial color="#2a6fbe" transparent opacity={0.05} side={THREE.BackSide} />
      </mesh>

      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS * 1.12, 32, 32]} />
        <meshBasicMaterial color="#4080cc" transparent opacity={0.018} side={THREE.BackSide} />
      </mesh>
    </group>
  );
}
