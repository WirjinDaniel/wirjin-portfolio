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

  const [earthTex, cloudsTex, bumpTex] = useTexture([
    '/earth-blue-marble.jpg',
    '/clouds.png',
    '/earth-topology.png',
  ]);

  earthTex.colorSpace      = THREE.SRGBColorSpace;
  earthTex.anisotropy      = 16;
  earthTex.minFilter       = THREE.LinearMipmapLinearFilter;
  earthTex.magFilter       = THREE.LinearFilter;
  earthTex.generateMipmaps = true;

  bumpTex.anisotropy      = 16;
  bumpTex.minFilter       = THREE.LinearMipmapLinearFilter;
  bumpTex.magFilter       = THREE.LinearFilter;
  bumpTex.generateMipmaps = true;

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
        <meshPhongMaterial
          map={earthTex}
          bumpMap={bumpTex}
          bumpScale={0.7}
          specular={new THREE.Color('#4488bb')}
          shininess={35}
        />
      </mesh>

      <mesh ref={cloudsRef}>
        <sphereGeometry args={[GLOBE_RADIUS * (1 + CLOUDS_ALT), 75, 75]} />
        <meshPhongMaterial
          map={cloudsTex}
          transparent
          opacity={0.8}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Atmospheric haze — blue scatter layers */}
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS * 1.018, 64, 64]} />
        <meshBasicMaterial color="#1a3a6a" transparent opacity={0.18} side={THREE.BackSide} />
      </mesh>
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS * 1.04, 48, 48]} />
        <meshBasicMaterial color="#1f4f99" transparent opacity={0.12} side={THREE.BackSide} />
      </mesh>
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS * 1.07, 32, 32]} />
        <meshBasicMaterial color="#2a5fb0" transparent opacity={0.07} side={THREE.BackSide} />
      </mesh>
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS * 1.11, 32, 32]} />
        <meshBasicMaterial color="#3a70c0" transparent opacity={0.03} side={THREE.BackSide} />
      </mesh>
    </group>
  );
}
