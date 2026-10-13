'use client';

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

// Balanced, normalized orbit configuration
// Radii are in normalized space [0, 1] and scaled responsively based on container size
const ORBITS = [
  {
    name: 'ML',
    label: 'MACHINE LEARNING',
    radius: 0.42,
    speed: 0.26,
    tilt: [Math.PI / 4, 0.22, 0.1] as [number, number, number],
    color: '#38bdf8', // sky-400
    initialAngle: 0.2, // quadrant 1 (~3 o'clock)
  },
  {
    name: 'NLP',
    label: 'SEMANTIC RETRIEVAL',
    radius: 0.58,
    speed: 0.20,
    tilt: [-Math.PI / 4, 0.32, -0.18] as [number, number, number],
    color: '#60a5fa', // blue-400
    initialAngle: Math.PI * 0.65, // quadrant 2 (~12 o'clock)
  },
  {
    name: 'VISION',
    label: 'OBJECT LOCALIZATION',
    radius: 0.74,
    speed: 0.16,
    tilt: [0.32, Math.PI / 3.2, -0.18] as [number, number, number],
    color: '#818cf8', // indigo-400
    initialAngle: Math.PI * 1.25, // quadrant 3 (~8 o'clock)
  },
  {
    name: 'DATA',
    label: 'FEATURE ENGINEERING',
    radius: 0.90,
    speed: 0.12,
    tilt: [-0.25, -Math.PI / 4.2, 0.35] as [number, number, number],
    color: '#38bdf8', // sky-400
    initialAngle: Math.PI * 1.8, // quadrant 4 (~5 o'clock)
  },
];

// Inner orbital scene with responsive boundary projection
function OrbitalScene({
  reducedMotion,
  isInView,
}: {
  reducedMotion: boolean;
  isInView: boolean;
}) {
  const { viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const pointerRef = useRef({ x: 0, y: 0 });

  // Responsive scale factor:
  // Uses the minimum viewport dimension (width or height) to guarantee that
  // the outermost orbit (radius 0.90) and its HTML label badge will NEVER
  // extend beyond the card boundaries, leaving an abundant safe margin on all sides.
  const minDimension = Math.min(viewport.width, viewport.height);
  const safeScale = (minDimension / 2) * 0.80;

  // Handle subtle pointer parallax on desktop
  useEffect(() => {
    if (reducedMotion) return;
    const handlePointerMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      pointerRef.current = {
        x: (e.clientX / innerWidth - 0.5) * 2,
        y: -(e.clientY / innerHeight - 0.5) * 2,
      };
    };
    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('mousemove', handlePointerMove);
  }, [reducedMotion]);

  // Embedding points representing latent space vectors
  const latentPoints = useMemo(() => {
    const coords = [];
    for (let i = 0; i < 80; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 0.55 + 0.28;
      const sinPhi = Math.sin(phi);
      coords.push(
        r * sinPhi * Math.cos(theta),
        r * sinPhi * Math.sin(theta),
        r * Math.cos(phi)
      );
    }
    return new Float32Array(coords);
  }, []);

  useFrame((_, delta) => {
    if (!isInView || !groupRef.current) return;
    const speedMultiplier = reducedMotion ? 0.15 : 1.0;

    // Gentle ambient rotation of the complete orbital system
    groupRef.current.rotation.y += delta * 0.035 * speedMultiplier;

    // Rotate wireframe geodesic sphere
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y += delta * 0.12 * speedMultiplier;
      wireframeRef.current.rotation.x += delta * 0.06 * speedMultiplier;
    }

    // Counter-rotate central core
    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * 0.08 * speedMultiplier;
    }

    // Smooth pointer parallax damping (restrained to avoid tilting labels off-screen)
    if (!reducedMotion) {
      const targetRotX = pointerRef.current.y * 0.16;
      const targetRotZ = -pointerRef.current.x * 0.14;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotX,
        delta * 2.0
      );
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        targetRotZ,
        delta * 2.0
      );
    }
  });

  return (
    <group ref={groupRef} scale={safeScale}>
      {/* Central Core: High-density shaded intelligence nucleus */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.20, 32, 32]} />
        <meshStandardMaterial
          color="#030712"
          roughness={0.25}
          metalness={0.85}
          emissive="#0284c7"
          emissiveIntensity={0.35}
        />
      </mesh>

      {/* Geodesic wireframe overlay */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[0.23, 1]} />
        <meshBasicMaterial
          color="#38bdf8"
          wireframe
          transparent
          opacity={0.45}
        />
      </mesh>

      {/* Soft blue glow aura around central sphere */}
      <mesh>
        <sphereGeometry args={[0.26, 24, 24]} />
        <meshBasicMaterial
          color="#0284c7"
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* Latent space point cloud */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={latentPoints.length / 3}
            array={latentPoints}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.024}
          color="#7dd3fc"
          transparent
          opacity={0.55}
          sizeAttenuation
        />
      </points>

      {/* Orbital paths and traveling nodes */}
      {ORBITS.map((orbit) => (
        <OrbitTrack
          key={orbit.name}
          orbit={orbit}
          reducedMotion={reducedMotion}
          isInView={isInView}
        />
      ))}
    </group>
  );
}

// Individual Orbit Ring with Traveling Node & Billboarded Badge
function OrbitTrack({
  orbit,
  reducedMotion,
  isInView,
}: {
  orbit: (typeof ORBITS)[number];
  reducedMotion: boolean;
  isInView: boolean;
}) {
  const nodeRef = useRef<THREE.Group>(null);
  const angleRef = useRef(orbit.initialAngle);

  useFrame((_, delta) => {
    if (!isInView || !nodeRef.current) return;
    const speedMultiplier = reducedMotion ? 0.2 : 1.0;
    angleRef.current += delta * orbit.speed * speedMultiplier;

    const x = Math.cos(angleRef.current) * orbit.radius;
    const y = Math.sin(angleRef.current) * orbit.radius;

    nodeRef.current.position.set(x, y, 0);
  });

  return (
    <group rotation={orbit.tilt}>
      {/* Fine Orbital Ring with pristine mathematical geometry */}
      <mesh>
        <torusGeometry args={[orbit.radius, 0.0035, 8, 128]} />
        <meshBasicMaterial
          color={orbit.color}
          transparent
          opacity={0.34}
        />
      </mesh>

      {/* Traveling Technical Node */}
      <group ref={nodeRef}>
        {/* Core Glowing Bead */}
        <mesh>
          <sphereGeometry args={[0.024, 16, 16]} />
          <meshBasicMaterial color={orbit.color} />
        </mesh>
        {/* Ethereal Glow Halo */}
        <mesh>
          <sphereGeometry args={[0.055, 12, 12]} />
          <meshBasicMaterial color={orbit.color} transparent opacity={0.28} />
        </mesh>

        {/* Technical Label Badge - perfectly centered and billboarded */}
        <Html
          center
          distanceFactor={10}
          zIndexRange={[100, 0]}
          className="pointer-events-none select-none"
        >
          <div className="flex items-center justify-center">
            <span className="whitespace-nowrap rounded border border-sky-500/40 bg-[#060b14]/90 px-2 py-0.5 font-mono text-[9px] font-bold tracking-wider text-sky-200 shadow-[0_0_12px_rgba(56,189,248,0.3)] backdrop-blur-md sm:text-[10px]">
              {orbit.name}
            </span>
          </div>
        </Html>
      </group>
    </group>
  );
}

// Static Fallback SVG with centered, proportional geometry
export function StaticOrbitalFallback() {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center p-4 select-none"
      aria-label="Scientific AI Orbital Visualization"
    >
      <svg
        viewBox="0 0 500 500"
        className="h-full w-full max-h-[420px] max-w-[420px] text-sky-400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ambient background glow */}
        <circle cx="250" cy="250" r="140" fill="#0284c7" fillOpacity="0.06" />

        {/* Central Sphere Core */}
        <circle
          cx="250"
          cy="250"
          r="38"
          fill="#030712"
          stroke="#38bdf8"
          strokeWidth="1.5"
        />
        <circle cx="250" cy="250" r="28" fill="#0284c7" fillOpacity="0.3" />
        {/* Geodesic facets */}
        <polygon
          points="250,215 282,235 282,265 250,285 218,265 218,235"
          stroke="#38bdf8"
          strokeWidth="1"
          strokeOpacity="0.45"
          fill="none"
        />
        <text
          x="250"
          y="253"
          textAnchor="middle"
          fill="#e0f2fe"
          fontSize="10"
          fontFamily="monospace"
          fontWeight="bold"
          letterSpacing="0.05em"
        >
          AI CORE
        </text>

        {/* Proportional, Centered Orbit Ellipses */}
        <ellipse
          cx="250"
          cy="250"
          rx="75"
          ry="38"
          stroke="#38bdf8"
          strokeWidth="1.2"
          strokeDasharray="4 4"
          opacity="0.45"
          transform="rotate(35 250 250)"
        />
        <ellipse
          cx="250"
          cy="250"
          rx="115"
          ry="54"
          stroke="#60a5fa"
          strokeWidth="1.2"
          strokeDasharray="4 4"
          opacity="0.4"
          transform="rotate(-35 250 250)"
        />
        <ellipse
          cx="250"
          cy="250"
          rx="155"
          ry="70"
          stroke="#818cf8"
          strokeWidth="1.2"
          strokeDasharray="4 4"
          opacity="0.38"
          transform="rotate(45 250 250)"
        />
        <ellipse
          cx="250"
          cy="250"
          rx="190"
          ry="84"
          stroke="#38bdf8"
          strokeWidth="1.2"
          strokeDasharray="4 4"
          opacity="0.35"
          transform="rotate(-20 250 250)"
        />

        {/* Orbiting Node Badges - Well inside coordinates */}
        {/* ML - Quadrant 1 (Top-Right) */}
        <g transform="translate(305, 215)">
          <circle cx="0" cy="0" r="4" fill="#38bdf8" />
          <rect
            x="-18"
            y="-10"
            width="36"
            height="20"
            rx="4"
            fill="#060b14"
            stroke="#38bdf8"
            strokeWidth="1"
          />
          <text
            x="0"
            y="4"
            textAnchor="middle"
            fill="#7dd3fc"
            fontSize="10"
            fontFamily="monospace"
            fontWeight="bold"
          >
            ML
          </text>
        </g>

        {/* NLP - Quadrant 2 (Top-Left) */}
        <g transform="translate(180, 195)">
          <circle cx="0" cy="0" r="4" fill="#60a5fa" />
          <rect
            x="-20"
            y="-10"
            width="40"
            height="20"
            rx="4"
            fill="#060b14"
            stroke="#60a5fa"
            strokeWidth="1"
          />
          <text
            x="0"
            y="4"
            textAnchor="middle"
            fill="#93c5fd"
            fontSize="10"
            fontFamily="monospace"
            fontWeight="bold"
          >
            NLP
          </text>
        </g>

        {/* VISION - Quadrant 3 (Bottom-Left) - Generous clearance from left edge */}
        <g transform="translate(155, 315)">
          <circle cx="0" cy="0" r="4" fill="#818cf8" />
          <rect
            x="-26"
            y="-10"
            width="52"
            height="20"
            rx="4"
            fill="#060b14"
            stroke="#818cf8"
            strokeWidth="1"
          />
          <text
            x="0"
            y="4"
            textAnchor="middle"
            fill="#c7d2fe"
            fontSize="9"
            fontFamily="monospace"
            fontWeight="bold"
          >
            VISION
          </text>
        </g>

        {/* DATA - Quadrant 4 (Bottom-Right) - Generous clearance from right edge */}
        <g transform="translate(345, 305)">
          <circle cx="0" cy="0" r="4" fill="#38bdf8" />
          <rect
            x="-22"
            y="-10"
            width="44"
            height="20"
            rx="4"
            fill="#060b14"
            stroke="#38bdf8"
            strokeWidth="1"
          />
          <text
            x="0"
            y="4"
            textAnchor="middle"
            fill="#7dd3fc"
            fontSize="10"
            fontFamily="monospace"
            fontWeight="bold"
          >
            DATA
          </text>
        </g>
      </svg>
    </div>
  );
}

export default function AiOrbitalCenterpiece() {
  const [hasMounted, setHasMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [webGlSupported, setWebGlSupported] = useState(true);
  const [isInView, setIsInView] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHasMounted(true);

    if (typeof window !== 'undefined') {
      // Check reduced motion preference
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReducedMotion(mediaQuery.matches);
      const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
      mediaQuery.addEventListener('change', listener);

      // Check WebGL availability
      try {
        const canvas = document.createElement('canvas');
        const gl =
          canvas.getContext('webgl') ||
          canvas.getContext('experimental-webgl');
        if (!gl) setWebGlSupported(false);
      } catch {
        setWebGlSupported(false);
      }

      // Intersection observer to pause decorative animation when off-screen
      let observer: IntersectionObserver | null = null;
      if (containerRef.current) {
        observer = new IntersectionObserver(
          ([entry]) => {
            setIsInView(entry.isIntersecting);
          },
          { threshold: 0.05 }
        );
        observer.observe(containerRef.current);
      }

      return () => {
        mediaQuery.removeEventListener('change', listener);
        if (observer) observer.disconnect();
      };
    }
  }, []);

  if (!hasMounted || !webGlSupported) {
    return <StaticOrbitalFallback />;
  }

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full select-none overflow-hidden"
    >
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance',
        }}
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <ambientLight intensity={0.8} />
        <pointLight
          position={[0, 0, 0]}
          intensity={1.8}
          color="#38bdf8"
          distance={5}
        />
        <directionalLight position={[4, 5, 4]} intensity={0.8} color="#93c5fd" />
        <directionalLight position={[-4, -3, -2]} intensity={0.3} color="#1e3a8a" />
        <OrbitalScene reducedMotion={reducedMotion} isInView={isInView} />
      </Canvas>
    </div>
  );
}
