import React, { forwardRef, Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useGLTF,
  Stage,
  Preload,
  PresentationControls,
  OrbitControls,
  Stars,
} from "@react-three/drei";
import Objet3DD from "../general components/Object3DD";
import gsap from "gsap";

function Visite({ props }, ref) {
  return (
    
    <section className="h-screen flex flex-col items-center" ref={ref}>
      <Canvas
        style={{
          position: "absolute",
          height: "100vh",
          background: "transparent",
        }}
        frameloop="demand"
        camera={{
          position: [7.66, 0.24, -1.66],
          rotation: [-2.75, 1.33, 2.76],
          fov: [100],
        }}
      >
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableDamping
          dampingFactor={0.2}
          autoRotate={false}
          rotateSpeed={-0.5}
        />
        <Suspense fallback={null}>
          <Preload all />
          <Objet3DD />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default forwardRef(Visite);
