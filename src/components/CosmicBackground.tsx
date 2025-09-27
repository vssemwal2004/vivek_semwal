import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import cosmicBg from '@/assets/cosmic-bg.jpg';
import { TrendingFogEffects, LaserBeamEffects, EnhancedParticles, HolographicOverlay } from './TrendingEffects';

// Starfield component
function Starfield() {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random stars
  const [positions] = useState(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
    }
    return positions;
  });

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.0001;
      ref.current.rotation.y = state.clock.elapsedTime * 0.0002;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={2}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

// Floating geometric shapes
function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 2;
    }
  });

  return (
    <mesh ref={meshRef} position={[10, 0, -10]}>
      <dodecahedronGeometry args={[3, 0]} />
      <meshStandardMaterial 
        color="#8b5cf6" 
        transparent 
        opacity={0.3}
        wireframe 
      />
    </mesh>
  );
}

// Particle effects
function ParticleSystem() {
  const ref = useRef<THREE.Points>(null);
  
  const [positions] = useState(() => {
    const positions = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200;
    }
    return positions;
  });

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#c084fc"
        size={1.5}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

// Main 3D Scene
function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#8b5cf6" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#00ffff" />
      
      <Starfield />
      <FloatingGeometry />
      <ParticleSystem />
    </>
  );
}

// Lens flare effects
function LensFlares() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="lens-flare absolute top-20 left-20 w-32 h-32 bg-lens-flare1/20 rounded-full blur-xl animate-lens-flare" />
      <div className="lens-flare absolute top-40 right-32 w-24 h-24 bg-lens-flare2/15 rounded-full blur-lg animate-lens-flare" style={{ animationDelay: '1s' }} />
      <div className="lens-flare absolute bottom-32 left-40 w-16 h-16 bg-lens-flare3/10 rounded-full blur-md animate-lens-flare" style={{ animationDelay: '2s' }} />
    </div>
  );
}

// Cosmic fog effect
function CosmicFog() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="cosmic-fog absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      <div className="cosmic-fog absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '10s' }} />
    </div>
  );
}

// Main Cosmic Background Component
export default function CosmicBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Static cosmic background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cosmicBg})` }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-cosmic-gradient opacity-80" />
      
      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 50], fov: 60 }}>
        <Scene3D />
      </Canvas>
      
      {/* Enhanced Effects */}
      <TrendingFogEffects />
      <LaserBeamEffects />
      <EnhancedParticles />
      <HolographicOverlay />
      
      {/* Lens flares */}
      <LensFlares />
      
      {/* Cosmic fog */}
      <CosmicFog />
    </div>
  );
}
