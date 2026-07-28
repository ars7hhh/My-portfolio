import { Suspense, useRef, useMemo, useState} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

function buildNetwork(radius, detail, connectDist) {
  const geo = new THREE.IcosahedronGeometry(radius, detail);
  const posAttr = geo.attributes.position;
  const pts = [];
  for (let i = 0; i < posAttr.count; i++) {
    pts.push(new THREE.Vector3(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i)));
  }
  const unique = [];
  pts.forEach((p) => {
    if (!unique.some((u) => u.distanceTo(p) < 0.01)) unique.push(p);
  });

  const edges = [];
  const lines = [];
  for (let i = 0; i < unique.length; i++) {
    for (let j = i + 1; j < unique.length; j++) {
      if (unique[i].distanceTo(unique[j]) < connectDist) {
        edges.push([i, j]);
        lines.push(unique[i].x, unique[i].y, unique[i].z);
        lines.push(unique[j].x, unique[j].y, unique[j].z);
      }
    }
  }
  return { nodes: unique, edges, linePositions: new Float32Array(lines) };
}

function NeuralNetwork() {
  const group = useRef();
  const nodeRefs = useRef([]);
  const { nodes, edges, linePositions } = useMemo(() => buildNetwork(1.7, 1, 1.85), []);

  const phases = useMemo(() => nodes.map(() => Math.random() * Math.PI * 2), [nodes]);
  const isSignal = useMemo(() => nodes.map((_, i) => i % 4 === 0), [nodes]);
  const colorFor = (i) => {
    if (isSignal[i]) return "#00D4FF";
    return i % 3 === 0 ? "#63A9FF" : i % 3 === 1 ? "#2F81FF" : "#8FC5FF";
  };

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    nodeRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const pulse = 1 + Math.sin(t * 1.6 + phases[i]) * 0.28;
      mesh.scale.setScalar(pulse);
    });
    if (group.current) {
      group.current.rotation.y = t * 0.06;
    }
  });

  return (
    <group ref={group}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#2F81FF" transparent opacity={0.4} />
      </lineSegments>

      {nodes.map((p, i) => (
        <mesh key={i} position={p} ref={(el) => (nodeRefs.current[i] = el)}>
          <sphereGeometry args={[isSignal[i] ? 0.05 : 0.032, 16, 16]} />
          <meshStandardMaterial
            color={colorFor(i)}
            emissive={colorFor(i)}
            emissiveIntensity={isSignal[i] ? 3 : 1.8}
            toneMapped={false}
          />
        </mesh>
      ))}

      <TravelingPulses nodes={nodes} edges={edges} />

      <mesh>
        <icosahedronGeometry args={[0.6, 0]} />
        <meshBasicMaterial color="#F5F4F0" wireframe transparent opacity={0.14} />
      </mesh>
    </group>
  );
}

function TravelingPulses({ nodes, edges }) {
  const count = 7;
  const refs = useRef([]);
  const routes = useMemo(() => {
    const picks = [];
    for (let i = 0; i < count; i++) {
      const e = edges[Math.floor(Math.random() * edges.length)];
      picks.push({
        a: nodes[e[0]],
        b: nodes[e[1]],
        speed: 0.25 + Math.random() * 0.35,
        offset: Math.random(),
      });
    }
    return picks;
  }, [nodes, edges]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    routes.forEach((r, i) => {
      const mesh = refs.current[i];
      if (!mesh) return;
      const p = (t * r.speed + r.offset) % 1;
      mesh.position.lerpVectors(r.a, r.b, p);
      mesh.material.opacity = Math.sin(p * Math.PI);
    });
  });

  return routes.map((_, i) => (
    <mesh key={i} ref={(el) => (refs.current[i] = el)}>
      <sphereGeometry args={[0.024, 8, 8]} />
      <meshBasicMaterial color="#00D4FF" transparent opacity={0.9} toneMapped={false} />
    </mesh>
  ));
}

function DriftParticles() {
  const ref = useRef();
  const count = 90;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 9;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 7;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 5 - 1;
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.015;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#8FC5FF" size={0.016} transparent opacity={0.5} />
    </points>
  );
}
function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
}
export default function HeroScene() {
  const [supported] = useState(() => hasWebGL());

  if (!supported) {
    return (
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <div
          className="w-96 h-96 rounded-full blur-[100px] opacity-40"
          style={{ background: "radial-gradient(circle, rgba(47,129,255,0.5) 0%, transparent 70%)" }}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5.4], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <NeuralNetwork />
          <DriftParticles />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.6}
            minPolarAngle={Math.PI / 2 - 0.5}
            maxPolarAngle={Math.PI / 2 + 0.5}
            enableDamping
            dampingFactor={0.06}
          />
          <EffectComposer>
            <Bloom intensity={0.7} luminanceThreshold={0.15} luminanceSmoothing={0.35} mipmapBlur radius={0.5} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
