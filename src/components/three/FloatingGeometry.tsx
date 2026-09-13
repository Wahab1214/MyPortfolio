import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Small floating geometric shapes used as ambient decoration in 3D scenes.
 */
export default function FloatingGeometry() {
  const groupRef = useRef<THREE.Group>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const octaRef = useRef<THREE.Mesh>(null);
  const icosaRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.3;
      torusRef.current.rotation.y = t * 0.2;
    }
    if (octaRef.current) {
      octaRef.current.rotation.x = -t * 0.2;
      octaRef.current.rotation.z = t * 0.15;
    }
    if (icosaRef.current) {
      icosaRef.current.rotation.y = t * 0.25;
      icosaRef.current.rotation.z = -t * 0.1;
    }
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={torusRef} position={[3.5, 1.5, -2]}>
        <torusGeometry args={[0.3, 0.1, 16, 32]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.5}
          wireframe
        />
      </mesh>
      <mesh ref={octaRef} position={[-3.8, -1.2, -1]}>
        <octahedronGeometry args={[0.35, 0]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.4}
          wireframe
        />
      </mesh>
      <mesh ref={icosaRef} position={[3, -1.8, -3]}>
        <icosahedronGeometry args={[0.28, 0]} />
        <meshStandardMaterial
          color="#2dffd6"
          emissive="#2dffd6"
          emissiveIntensity={0.4}
          wireframe
        />
      </mesh>
    </group>
  );
}
