'use client';

import { Canvas } from '@react-three/fiber';
import BootScene from './three/BootScene';

export default function BootCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0.3, 7.5], fov: 48 }}
      gl={{ alpha: false, antialias: true }}
      dpr={[1, 1.5]}
      style={{ display: 'block', width: '100%', height: '100%' }}
    >
      <BootScene />
    </Canvas>
  );
}
