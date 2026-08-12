'use client';

import { Canvas } from '@react-three/fiber';
import DigitalSphere from './three/DigitalSphere';

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 55 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.5]}
      style={{ background: 'transparent' }}
    >
      <DigitalSphere />
    </Canvas>
  );
}
