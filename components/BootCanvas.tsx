'use client';

import { Canvas } from '@react-three/fiber';
import BootScene from './three/BootScene';

export default function BootCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 1.8, 7.2], fov: 52 }}
      gl={{ alpha: false, antialias: true }}
      dpr={[1, 1.5]}
      style={{ display: 'block' }}
    >
      <BootScene />
    </Canvas>
  );
}
