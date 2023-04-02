import React, { Suspense, useState } from "react";
import { ScrollControls } from "@react-three/drei";
import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import LightScene from "./Light/Light";
import useCull from "./Util/useCull";
import { PerformanceMonitor, AdaptiveDpr } from "@react-three/drei";
import VFX from "./Effect/VFX.jsx";
import { Leva } from "leva";
import Background from "./Background/Background.tsx";
import Content from "./3dContent/Content";
import LoaderX from "./LoaderX.tsx";
import Parallax from "./Effect/Parallax";

const FrustumCulledObject = ({ children }) => {
  const { camera } = useThree();
  const frustum = useCull();

  return (
    <group frustumCulled={false}>
      <frustum args={[camera]} frustumCulled={false} />
      <group frustumCulled={false} visible={frustum}>
        {children}
      </group>
    </group>
  );
};

const ThreeJS = () => {
  const [perfSucks, deprecate] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  return (
    <div className="canvas">
      <Canvas
        performance={{ min: 0.1 }}
        gl={{
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1,
          antialias: true,
        }}
        dpr={[1, perfSucks ? 1.5 : 2]}
        camera={{
          position: [0, 0, 6],
          fov: 25,
        }}
        shadows
        onCreated={() => setShowLoader(false)}
      >
        <Parallax perfSucks={perfSucks} />
        <Suspense fallback={<LoaderX />}>
          <color attach="background" args={["#000000"]} />
          <Perf position="bottom-left" hidden={true} />
          <LightScene />
          <ScrollControls pages={4} damping={0.2} distance={0.5}>
            <FrustumCulledObject>
              <Background perfSucks={perfSucks} />
            </FrustumCulledObject>
            <FrustumCulledObject>
              <Content />
            </FrustumCulledObject>
          </ScrollControls>
          <VFX />
          <PerformanceMonitor onDecline={() => deprecate(true)} />
          <AdaptiveDpr pixelated />
          <Leva hidden={true} />
        </Suspense>
        {showLoader && <LoaderX />}
      </Canvas>
    </div>
  );
};

export default ThreeJS;
