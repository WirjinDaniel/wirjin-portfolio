'use client';

import { useRef, useMemo, Suspense, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Stars, Float, PointMaterial, Points } from '@react-three/drei';
import EarthGlobe from './EarthGlobe';
import * as THREE from 'three';

function Platform() {
  const groupRef = useRef<THREE.Group>(null!);
  useFrame((_, delta) => {
    groupRef.current.rotation.y += delta * 0.07;
  });
  return (
    <group ref={groupRef} position={[0, -0.8, 0]}>
      {/* Outer glow ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.05, 0.026, 16, 140]} />
        <meshStandardMaterial color="#4fd1ae" emissive="#4fd1ae" emissiveIntensity={3} />
      </mesh>

      {/* Middle ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.65, 0.015, 16, 110]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={2.2}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Inner ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.25, 0.008, 16, 90]} />
        <meshStandardMaterial
          color="#4fd1ae"
          emissive="#4fd1ae"
          emissiveIntensity={1.6}
          transparent
          opacity={0.55}
        />
      </mesh>

      {/* Floor glow plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.07, 0]}>
        <circleGeometry args={[1.9, 60]} />
        <meshBasicMaterial color="#4fd1ae" transparent opacity={0.04} />
      </mesh>
    </group>
  );
}

function FloatingIcosahedron({ x, y, sc }: { x: number; y: number; sc: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    meshRef.current.rotation.y += delta * 0.3;
    meshRef.current.rotation.x += delta * 0.12;
  });
  return (
    <Float speed={1.3} floatIntensity={0.75} rotationIntensity={0}>
      <mesh ref={meshRef} position={[x, y, -0.5]} scale={sc}>
        <icosahedronGeometry args={[0.92, 0]} />
        <meshBasicMaterial color="#4fd1ae" wireframe transparent opacity={0.48} />
      </mesh>
    </Float>
  );
}

function FloatingGlobe({ x, y, sc }: { x: number; y: number; sc: number }) {
  const outerRef = useRef<THREE.Mesh>(null!);
  const dotsRef = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const count = 80;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const r = 0.92;
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    outerRef.current.rotation.y += delta * 0.13;
    outerRef.current.rotation.x += delta * 0.07;
    dotsRef.current.rotation.y -= delta * 0.19;
  });

  return (
    <Float speed={1.1} floatIntensity={0.65} rotationIntensity={0}>
      <group position={[x, y, -0.5]} scale={sc}>
        <mesh ref={outerRef}>
          <icosahedronGeometry args={[1, 2]} />
          <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.28} />
        </mesh>
        <Points ref={dotsRef} positions={positions} frustumCulled={false}>
          <PointMaterial
            color="#4fd1ae"
            size={0.034}
            sizeAttenuation
            transparent
            opacity={0.72}
            depthWrite={false}
          />
        </Points>
      </group>
    </Float>
  );
}

function OrbitalParticles() {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const count = 55;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const r = 2.0 + Math.random() * 2.8;
      const ySpread = (Math.random() - 0.5) * 2.8;
      pos[i * 3]     = Math.cos(angle) * r;
      pos[i * 3 + 1] = ySpread;
      pos[i * 3 + 2] = Math.sin(angle) * r * 0.55 - 0.5;
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.055;
  });

  return (
    <Points ref={ref} positions={positions} frustumCulled={false}>
      <PointMaterial
        color="#4fd1ae"
        size={0.022}
        sizeAttenuation
        transparent
        opacity={0.45}
        depthWrite={false}
      />
    </Points>
  );
}

function CameraAdapter() {
  const camera = useThree((s) => s.camera);
  const aspect = useThree((s) => s.viewport.aspect);

  useEffect(() => {
    const cam = camera as THREE.PerspectiveCamera;
    if (!cam.isPerspectiveCamera) return;
    const mobile = aspect < 0.85;
    cam.fov = mobile ? 60 : 48;
    cam.position.set(0, mobile ? 0.0 : 0.3, mobile ? 11.5 : 7.5);
    cam.updateProjectionMatrix();
    cam.lookAt(0, 0, 0);
  }, [camera, aspect]);

  return null;
}

function SideObjects() {
  const { viewport } = useThree();
  const mobile = viewport.aspect < 0.85;

  if (mobile) {
    // Portrait: beside the avatar circle, at globe-top level
    return (
      <>
        <FloatingIcosahedron x={-1.85} y={0.7} sc={0.48} />
        <FloatingGlobe       x={ 1.85} y={0.7} sc={0.48} />
      </>
    );
  }

  const xOff = Math.min(3.5, Math.max(2.2, (viewport.width / 2) * 0.68));
  const sc   = Math.min(1, Math.max(0.38, xOff / 3.5));
  return (
    <>
      <FloatingIcosahedron x={-xOff} y={0.3}  sc={sc} />
      <FloatingGlobe       x={ xOff} y={0.15} sc={sc} />
    </>
  );
}

export default function BootScene() {
  return (
    <>
      <CameraAdapter />
      <color attach="background" args={['#060c18']} />

      {/* Sky azul espacial + suelo oscuro: da color natural al lado de sombra */}
      <hemisphereLight args={['#0d2347', '#050d18', 0.45]} />
      {/* Sol: lado iluminado vibrante */}
      <directionalLight color="#fff8ee" intensity={1.7} position={[5, 3, 5]} />
      {/* Fill azul desde detrás: suaviza el borde día/noche */}
      <pointLight color="#1a3d7a" intensity={0.18} position={[-6, 0, -4]} />
      <pointLight color="#4fd1ae" intensity={0.28} position={[0, 5, 3]} />
      <pointLight color="#38bdf8" intensity={0.15} position={[5, 2, 0]} />

      <Stars
        radius={28}
        depth={18}
        count={1400}
        factor={2.8}
        saturation={0}
        fade
        speed={0.4}
      />

      <Platform />
      <Suspense fallback={null}>
        <EarthGlobe />
      </Suspense>
      <SideObjects />
      <OrbitalParticles />
    </>
  );
}
