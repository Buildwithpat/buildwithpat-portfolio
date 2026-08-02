"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import type { Group } from "three";
import * as THREE from "three";
import { useTheme } from "@/components/providers/ThemeProvider";

function DepthLayers() {
  const { theme } = useTheme();
  const near = useRef<Group>(null);
  const mid = useRef<Group>(null);
  const far = useRef<Group>(null);

  useFrame((state) => {
    const { pointer, clock } = state;
    const t = clock.getElapsedTime();

    if (near.current) {
      near.current.rotation.y += (pointer.x * 0.26 - near.current.rotation.y) * 0.04;
      near.current.rotation.x += (-pointer.y * 0.18 - near.current.rotation.x) * 0.04;
      near.current.position.y = Math.sin(t * 0.25) * 0.12;
    }
    if (mid.current) {
      mid.current.rotation.y += (pointer.x * 0.14 - mid.current.rotation.y) * 0.025;
      mid.current.rotation.x += (-pointer.y * 0.09 - mid.current.rotation.x) * 0.025;
    }
    if (far.current) {
      far.current.rotation.y += (pointer.x * 0.06 - far.current.rotation.y) * 0.015;
    }
  });

  const isDark = theme === "dark";
  const primary = isDark ? "#f2c48a" : "#b97a3c";
  const secondary = isDark ? "#8ab4f2" : "#5a86c9";

  return (
    <>
      <group ref={far} position={[0, 0, -3]}>
        <Sparkles
          count={70}
          scale={[13, 8, 6]}
          size={1.6}
          speed={0.12}
          color={secondary}
          opacity={isDark ? 0.28 : 0.18}
        />
      </group>

      <group ref={mid}>
        <Sparkles
          count={110}
          scale={[10, 6, 6]}
          size={2.4}
          speed={0.22}
          color={primary}
          opacity={isDark ? 0.5 : 0.3}
        />
      </group>

      <group ref={near} position={[0, 0, 1.5]}>
        <Sparkles
          count={36}
          scale={[7, 4.5, 4]}
          size={4.2}
          speed={0.3}
          color={primary}
          opacity={isDark ? 0.6 : 0.36}
        />
      </group>
    </>
  );
}

function FogSync() {
  const { theme } = useTheme();
  useFrame(({ scene }) => {
    const target = theme === "dark" ? 0x000000 : 0xfcf9f4;
    if (!scene.fog) {
      scene.fog = new THREE.Fog(target, 6, 13);
    } else if (scene.fog instanceof THREE.Fog) {
      scene.fog.color.lerp(new THREE.Color(target), 0.05);
    }
  });
  return null;
}

export function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.7} />
      <pointLight position={[4, 3, 5]} intensity={30} color="#f2c48a" />
      <FogSync />
      <DepthLayers />
    </Canvas>
  );
}
