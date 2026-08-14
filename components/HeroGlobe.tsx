'use client';

import { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import EarthGlobe from './three/EarthGlobe';
import * as THREE from 'three';

function CameraAdapter() {
  const { camera, viewport } = useThree();
  const mobile = viewport.aspect < 0.85;

  useEffect(() => {
    const cam = camera as THREE.PerspectiveCamera;
    if (!cam.isPerspectiveCamera) return;
    cam.fov      = mobile ? 55 : 50;
    cam.position.set(0, mobile ? -0.2 : 0.3, mobile ? 11 : 7);
    cam.updateProjectionMatrix();
    cam.lookAt(0, 0, 0);
  }, [camera, mobile]);

  return null;
}

function Scene() {
  return (
    <>
      <CameraAdapter />
      <ambientLight intensity={0.12} />
      <directionalLight color="#fff5e0" intensity={2.0} position={[5, 3, 5]} />
      <pointLight color="#1a3060" intensity={0.5} position={[-6, -1, -4]} />
      <Stars radius={28} depth={14} count={800} factor={2.4} saturation={0} fade speed={0.3} />
      <Suspense fallback={null}>
        <EarthGlobe />
      </Suspense>
    </>
  );
}

export default function HeroGlobe() {
  return (
    <Canvas
      camera={{ position: [0, 0.3, 7], fov: 50 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.5]}
      style={{ background: 'transparent' }}
    >
      <Scene />
    </Canvas>
  );
}
