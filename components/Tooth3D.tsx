"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Lightformer, Sparkles, ContactShadows } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/** Procedural molar: displaced sphere crown (cusps + central fissure) and two tapered roots. */
function useCrown() {
  return useMemo(() => {
    const g = new THREE.SphereGeometry(1, 128, 128);
    const p = g.attributes.position as THREE.BufferAttribute;
    const v = new THREE.Vector3();
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i);
      let { x, y, z } = v;
      // wide, slightly boxy crown
      const boxy = 1 + 0.12 * Math.max(0, 1 - Math.abs(y) * 1.2);
      x *= 1.22 * boxy;
      z *= 1.05 * boxy;
      y *= 0.92;
      if (y > 0) {
        // four cusps + central fissure
        const cusp = Math.max(0, Math.cos(x * 2.7) * Math.cos(z * 3.1));
        y += 0.2 * cusp * (1 - Math.min(1, (x * x) / 2.2 + (z * z) / 1.8)) + 0.04;
        y -= 0.16 * Math.exp(-(x * x * 14 + z * z * 0.9)) * (y > 0.35 ? 1 : 0);
        y -= 0.12 * Math.exp(-(z * z * 14 + x * x * 0.9)) * (y > 0.35 ? 1 : 0);
      } else {
        // taper toward the neck
        const t = Math.min(1, -y / 0.9);
        x *= 1 - 0.28 * t;
        z *= 1 - 0.28 * t;
      }
      p.setXYZ(i, x, y, z);
    }
    g.computeVertexNormals();
    return g;
  }, []);
}

function Tooth() {
  const group = useRef<THREE.Group>(null);
  const crown = useCrown();
  const roots = useMemo(() => new THREE.CylinderGeometry(0.34, 0.06, 1.5, 48, 8), []);

  const mat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#fbfeff",
        roughness: 0.12,
        metalness: 0,
        clearcoat: 1,
        clearcoatRoughness: 0.06,
        sheen: 1,
        sheenColor: new THREE.Color("#a5f3fc"),
        envMapIntensity: 1.4,
      }),
    []
  );

  useFrame((state, dt) => {
    if (!group.current) return;
    const { x, y } = state.pointer;
    group.current.rotation.y += dt * 0.45;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y * 0.35, 0.05);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -x * 0.18, 0.05);
  });

  return (
    <Float speed={1.6} rotationIntensity={0.25} floatIntensity={1.1}>
      <group ref={group} scale={1.05} position={[0, 0.1, 0]}>
        <mesh geometry={crown} material={mat} />
        <mesh geometry={roots} material={mat} position={[-0.5, -1.35, 0.05]} rotation={[0.06, 0, 0.1]} />
        <mesh geometry={roots} material={mat} position={[0.5, -1.35, -0.05]} rotation={[-0.06, 0, -0.1]} />
      </group>
    </Float>
  );
}

/** Small glass "bubbles" orbiting the tooth for depth. */
function Orbs() {
  const items = useMemo(
    () =>
      Array.from({ length: 9 }, (_, i) => ({
        r: 2.3 + (i % 3) * 0.55,
        s: 0.07 + ((i * 37) % 10) / 90,
        sp: 0.25 + (i % 4) * 0.08,
        o: (i / 9) * Math.PI * 2,
        y: ((i * 53) % 10) / 5 - 1,
      })),
    []
  );
  const refs = useRef<(THREE.Mesh | null)[]>([]);
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    items.forEach((it, i) => {
      const m = refs.current[i];
      if (!m) return;
      const a = it.o + t * it.sp;
      m.position.set(Math.cos(a) * it.r, it.y + Math.sin(t * 0.8 + i) * 0.25, Math.sin(a) * it.r * 0.6);
    });
  });
  return (
    <>
      {items.map((it, i) => (
        <mesh key={i} ref={(el) => (refs.current[i] = el)}>
          <sphereGeometry args={[it.s, 24, 24]} />
          <meshPhysicalMaterial color="#a5f3fc" roughness={0.05} clearcoat={1} transmission={0.6} thickness={0.5} transparent opacity={0.85} />
        </mesh>
      ))}
    </>
  );
}

export default function Tooth3D() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.4, 6.2], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ touchAction: "pan-y" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 6, 5]} intensity={2.2} color="#ffffff" />
      <pointLight position={[-5, 1, -3]} intensity={30} color="#22d3ee" />
      <pointLight position={[4, -2, 3]} intensity={18} color="#38bdf8" />

      {/* Studio lighting built from light-formers: no external HDR download needed */}
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 4, 0, 0]}>
          <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
          <Lightformer intensity={3} rotation-y={Math.PI / 2} position={[-6, 1, -1]} scale={[10, 2, 1]} color="#a5f3fc" />
          <Lightformer intensity={3} rotation-y={-Math.PI / 2} position={[6, 1, -1]} scale={[10, 2, 1]} color="#7dd3fc" />
          <Lightformer intensity={2} position={[0, -3, 5]} scale={[8, 2, 1]} />
        </group>
      </Environment>

      <Tooth />
      <Orbs />
      <Sparkles count={70} scale={[7, 5, 4]} size={3.2} speed={0.5} color="#67e8f9" opacity={0.9} />
      <ContactShadows position={[0, -2.55, 0]} opacity={0.35} scale={8} blur={2.6} far={3} color="#0369a1" />
    </Canvas>
  );
}
