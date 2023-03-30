// external
import React, { Suspense, useState, useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
// import { Environment, Lightformer } from "@react-three/drei";
import { Perf } from "r3f-perf";
import gsap from "gsap";
import Animations from "../Animations/Animations";

// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import IslandScene from "../../Components/trash/IslandScene";
import Loader from "./Loader";
// import { useProgress, Html, OrbitControls, Stage } from "@react-three/drei";
import LightScene from "./Light/Light";
// import Images from "../../Components/trash/Image";
import Lens from "./3d cursor/Lens.tsx";
import {
  PerformanceMonitor,
  OrbitControls,
  AdaptiveDpr,
} from "@react-three/drei";
// import { useControls } from "leva";
// import GridLine from "../../Components/GridLine";
// import Background from "./Background.jsx";
import Body from "./Body.tsx";
import VFX from "./Effect/VFX.jsx";
import { Leva } from "leva";
// import { useThree } from "react-three-fiber";

// gsap.registerPlugin(ScrollTrigger);

// main scene + models
// leva can be here
// implement zustand for state management or redux toolkit

const ThreeJS = () => {
  const [perfSucks, deprecate] = useState(false);

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
      >
        {/* basic setup */}
        <color attach="background" args={["#000000"]} />
        <Perf position="bottom-left" />
        <PerformanceMonitor onDecline={() => deprecate(true)} />
        <LightScene />
        {/* <OrbitControls /> */}

        {/* main tool */}
        {/* <Lens scale={0.25} position={new THREE.Vector3(0, -0.5, 0)} /> */}

        {/* pages */}
        <Body />
        <VFX />
        <AdaptiveDpr pixelated />
        {/* <Leva /> */}
      </Canvas>
    </div>
  );
};

export default ThreeJS;
