import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Hook to detect mobile devices
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      );
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

// CSS-only fallback for mobile
const MobileFallback = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
    <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
    <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-cyan-500/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }} />
  </div>
);

const Particles = ({ count = 500 }: { count?: number }) => {
  const mesh = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;
      
      // Purple to cyan gradient
      const t = Math.random();
      colors[i3] = 0.6 + t * 0.2;     // R
      colors[i3 + 1] = 0.3 + t * 0.4; // G
      colors[i3 + 2] = 0.9 - t * 0.3; // B
    }
    
    return { positions, colors };
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.y = time * 0.02;
    mesh.current.rotation.x = Math.sin(time * 0.1) * 0.1;
    
    // Subtle floating motion
    const positions = mesh.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3 + 1] += Math.sin(time + i * 0.1) * 0.001;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const FloatingOrbs = () => {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!group.current) return;
    const time = state.clock.getElapsedTime();
    group.current.rotation.y = time * 0.05;
  });

  return (
    <group ref={group}>
      {/* Primary orb */}
      <mesh position={[3, 1, -2]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial 
          color="#a855f7" 
          transparent 
          opacity={0.15}
        />
      </mesh>
      
      {/* Accent orb */}
      <mesh position={[-4, -1, -3]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial 
          color="#3b82f6" 
          transparent 
          opacity={0.1}
        />
      </mesh>
      
      {/* Small accent */}
      <mesh position={[2, -2, -1]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshBasicMaterial 
          color="#06b6d4" 
          transparent 
          opacity={0.2}
        />
      </mesh>
    </group>
  );
};

const ParticleField = () => {
  const isMobile = useIsMobile();

  // Show CSS fallback on mobile for better performance
  if (isMobile) {
    return <MobileFallback />;
  }

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]} // Reduced DPR for better performance
        style={{ background: 'transparent' }}
        gl={{ antialias: false, powerPreference: 'high-performance' }}
      >
        <Particles count={300} /> {/* Reduced particle count */}
        <FloatingOrbs />
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  );
};

export default ParticleField;