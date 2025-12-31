import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

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
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <Particles count={400} />
        <FloatingOrbs />
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  );
};

export default ParticleField;