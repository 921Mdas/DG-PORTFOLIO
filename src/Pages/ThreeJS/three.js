// external
import React, { Suspense } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { Perf } from "r3f-perf";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import IslandScene from "./IslandScene";
import Loader from "./Loader";
import { useProgress, Html, OrbitControls } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

// main scene + models

const ThreeJS = () => {
  return (
    <div className="canvas">
      <Canvas
        flat
        dpr={[1, 2]}
        camera={{ position: [0, 0, 3], fov: 25, rotation: [-0.3, 0, 0] }}
        shadows
        gl={{
          physicallyCorrectLights: true,
          outputEncoding: THREE.sRGBEncoding,
          toneMapping: THREE.ACESFilmicToneMapping,
          antialias: true,
        }}
        outputEncoding={THREE.sRGBEncoding}
        sRGB={true}
      >
        <Perf position="bottom-left" />
        {/* <OrbitControls enableZoom={false} /> */}
        <Environment background>
          <Lightformer
            position={[0, 0, 10]}
            scale={10}
            intensity={2}
            color={"#05b4ff"}
            form={"ring"}
          />
        </Environment>
        <IslandScene />
      </Canvas>
    </div>
  );
};

export default ThreeJS;
