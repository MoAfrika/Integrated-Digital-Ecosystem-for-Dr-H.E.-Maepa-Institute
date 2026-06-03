import { Environment, Html, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";

function SolarRays() {
  return (
    <group>
      {Array.from({ length: 10 }).map((_, index) => {
        const angle = (index / 10) * Math.PI * 2;
        return (
          <mesh
            key={angle}
            position={[Math.cos(angle) * 2.8, Math.sin(angle) * 1.5 + 0.1, -0.25]}
            rotation={[0, 0, angle]}
          >
            <boxGeometry args={[0.44, 0.035, 0.035]} />
            <meshStandardMaterial color="#f2c86b" emissive="#573b06" emissiveIntensity={0.25} />
          </mesh>
        );
      })}
    </group>
  );
}

function PanelFrame() {
  return (
    <group>
      <mesh position={[0, 0, -0.05]}>
        <boxGeometry args={[3.55, 1.95, 0.12]} />
        <meshStandardMaterial color="#d9a441" metalness={0.45} roughness={0.28} />
      </mesh>
      <mesh position={[0, 0, 0.03]}>
        <boxGeometry args={[3.25, 1.62, 0.09]} />
        <meshStandardMaterial color="#0b2244" metalness={0.25} roughness={0.18} />
      </mesh>
      {[-0.8, 0, 0.8].map((x) => (
        <mesh key={x} position={[x, 0, 0.11]}>
          <boxGeometry args={[0.025, 1.62, 0.04]} />
          <meshStandardMaterial color="#6bb6ff" emissive="#123f73" emissiveIntensity={0.45} />
        </mesh>
      ))}
      {[-0.4, 0.4].map((y) => (
        <mesh key={y} position={[0, y, 0.12]}>
          <boxGeometry args={[3.25, 0.025, 0.04]} />
          <meshStandardMaterial color="#6bb6ff" emissive="#123f73" emissiveIntensity={0.45} />
        </mesh>
      ))}
      <mesh position={[0, -1.3, -0.08]} rotation={[0.15, 0, 0]}>
        <cylinderGeometry args={[0.045, 0.045, 1.1, 24]} />
        <meshStandardMaterial color="#d9a441" metalness={0.5} roughness={0.3} />
      </mesh>
      <mesh position={[0, -1.88, -0.06]}>
        <boxGeometry args={[1.4, 0.1, 0.1]} />
        <meshStandardMaterial color="#d9a441" metalness={0.5} roughness={0.3} />
      </mesh>
    </group>
  );
}

function SolarModel() {
  const ref = useRef(null);
  const { scene } = useGLTF("/models/solar-panel.gltf");

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.55) * 0.45;
      ref.current.rotation.x = -0.28 + Math.sin(state.clock.elapsedTime * 0.35) * 0.08;
    }
  });

  return (
    <group ref={ref} position={[0.4, 0, 0]} scale={1.05}>
      <primitive object={scene} scale={1.1} position={[0, 0, 0.18]} />
      <PanelFrame />
      <SolarRays />
    </group>
  );
}

function SceneFallback() {
  return (
    <Html center>
      <div className="canvas-loading">Loading 3D ecosystem...</div>
    </Html>
  );
}

export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 0.2, 5.4], fov: 42 }} dpr={[1, 1.8]}>
      <color attach="background" args={["#07182f"]} />
      <ambientLight intensity={0.8} />
      <directionalLight position={[4, 5, 4]} intensity={2.2} />
      <pointLight position={[-3, -2, 3]} intensity={0.9} color="#f2c86b" />
      <Suspense fallback={<SceneFallback />}>
        <SolarModel />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.55} />
    </Canvas>
  );
}

useGLTF.preload("/models/solar-panel.gltf");
