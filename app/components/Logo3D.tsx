'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Float } from '@react-three/drei';
import { Suspense } from 'react';

interface Logo3DProps {
  modelPath: string;
  autoRotate?: boolean;
  scale?: number;
  position?: [number, number, number];
  enableZoom?: boolean;
  className?: string;
}

function Model({ modelPath, scale = 1, position = [0, 0, 0] }: { modelPath: string; scale: number; position: [number, number, number] }) {
  const { scene } = useGLTF(modelPath);

  return (
    <Float speed={2} rotationIntensity={0} floatIntensity={1}>
      <primitive object={scene} scale={scale} position={position} />
    </Float>
  );
}

export default function Logo3D({ modelPath, autoRotate = true, scale = 1, position = [0, 0, 0], enableZoom = true, className = '' }: Logo3DProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ background: 'transparent' }}>
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF6B2C" />

          {/* 3D Model */}
          <Model modelPath={modelPath} scale={scale} position={position} />

          {/* Environment lighting for realistic reflections */}
          <Environment preset="studio" />

          {/* Controls */}
          <OrbitControls autoRotate={autoRotate} autoRotateSpeed={2} enableZoom={enableZoom} enablePan={false} minDistance={2} maxDistance={10} />
        </Suspense>
      </Canvas>
    </div>
  );
}
