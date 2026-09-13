import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * A rotating sphere of particles that subtly reacts to mouse movement.
 * Uses a custom shader for a glowing, depth-aware point cloud.
 */
export default function ParticleSphere() {
  const pointsRef = useRef<THREE.Points>(null);
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const { size } = useThree();

  // Generate points distributed on a sphere surface
  const { positions, colors, sizes } = useMemo(() => {
    const count = 2500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const radius = 2.4;

    const c1 = new THREE.Color('#00d4ff');
    const c2 = new THREE.Color('#a855f7');
    const c3 = new THREE.Color('#2dffd6');

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius * (1 + (Math.random() - 0.5) * 0.15);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const t = Math.random();
      const col = t < 0.33 ? c1 : t < 0.66 ? c2 : c3;
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;

      sizes[i] = Math.random() * 0.04 + 0.015;
    }
    return { positions, colors, sizes };
  }, []);

  // Vertex shader with mouse parallax and pulse
  const vertexShader = useMemo(
    () => `
      attribute float size;
      varying vec3 vColor;
      uniform float uTime;
      uniform vec2 uMouse;
      void main() {
        vColor = color;
        vec3 pos = position;
        float pulse = sin(uTime * 0.5 + pos.x * 2.0) * 0.05;
        pos *= 1.0 + pulse;
        pos.x += uMouse.x * 0.2;
        pos.y += uMouse.y * 0.2;
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = size * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    [],
  );

  const fragmentShader = useMemo(
    () => `
      varying vec3 vColor;
      void main() {
        float d = distance(gl_PointCoord, vec2(0.5));
        if (d > 0.5) discard;
        float alpha = smoothstep(0.5, 0.0, d);
        gl_FragColor = vec4(vColor, alpha * 0.85);
      }
    `,
    [],
  );

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
    }),
    [],
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    uniforms.uTime.value = t;

    // Smooth mouse follow
    mouse.current.x += (state.pointer.x - mouse.current.x) * 0.05;
    mouse.current.y += (state.pointer.y - mouse.current.y) * 0.05;
    uniforms.uMouse.value.set(mouse.current.x, mouse.current.y);

    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.15;
      pointsRef.current.rotation.x = t * 0.08;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y = mouse.current.x * 0.3;
      groupRef.current.rotation.x = -mouse.current.y * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={sizes.length}
            array={sizes}
            itemSize={1}
          />
        </bufferGeometry>
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          vertexColors
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Inner wireframe sphere for depth */}
      <mesh>
        <sphereGeometry args={[1.6, 32, 32]} />
        <meshBasicMaterial
          color="#00d4ff"
          wireframe
          transparent
          opacity={0.06}
        />
      </mesh>

      {/* Core glow */}
      <mesh scale={0.4}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#0c1124" transparent opacity={0.8} />
      </mesh>
    </group>
  );
}
