// external imports
import React, { Suspense, useState } from "react";
import {
  PerformanceMonitor,
  AdaptiveDpr,
  ScrollControls,
} from "@react-three/drei";
import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { Leva } from "leva";

// internal imports
import LightScene from "./Light/Light";
import useCull from "./Util/useCull";
import Background from "./3dHelpers/Background";
import Content from "./3dContent/MainSection";
import LoaderX from "./LoaderX.tsx";
import Parallax from "./Effect/Parallax";
import CameraIntroMovement from "./3dHelpers/CameraIntro.tsx";
import Landing from "./3dContent/Sections/WelcomePage.tsx";

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
  const [showLoadingPage, SetShowLoadingPage] = useState(true);

  return (
    <div
      className="canvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Canvas
        performance={{ min: 0.1 }}
        gl={{
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1,
          antialias: true,
        }}
        dpr={[1, perfSucks ? 1.5 : 2]}
        camera={{
          position: [0, 0, 8],
          fov: 25,
        }}
        shadows
        onCreated={() => setShowLoader(false)}
      >
        {showLoadingPage ? (
          <Suspense fallback={<LoaderX />}>
            <Landing SetShowLoadingPage={SetShowLoadingPage} />
            <Leva hidden={true} />
          </Suspense>
        ) : (
          <Suspense>
            <color attach="background" args={["#000000"]} />
            {/* <Perf position="bottom-left" hidden={true} /> */}
            <LightScene />
            <CameraIntroMovement />
            <ScrollControls pages={5} damping={0.2} distance={0.5}>
              <HHC perfSucks={perfSucks} />
            </ScrollControls>
            <PerformanceMonitor onDecline={() => deprecate(true)} />
            <Parallax />

            <AdaptiveDpr pixelated />
            <Leva hidden={true} />
          </Suspense>
        )}

        {showLoader && <LoaderX />}
      </Canvas>
    </div>
  );
};

const HHC = React.forwardRef(({ perfSucks }, ref) => {
  return (
    <>
      <FrustumCulledObject>
        <Background perfSucks={perfSucks} />
      </FrustumCulledObject>
      <FrustumCulledObject>
        <Content />
      </FrustumCulledObject>
    </>
  );
});

export default ThreeJS;
