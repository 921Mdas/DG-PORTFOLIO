import React, { useEffect, useState } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  useProgress,
  Html,
  Environment,
  Float,
  Sparkles,
  Text,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useThree } from "react-three-fiber";

// basics

// models
import { Branch } from "./ThreeComponents";
import Apple from "./shaders/BlobShader";
import { Debug, Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import { useMemo } from "react";

const Scene = () => {
  const [mouseMoveCoords, setMouseMoveCoords] = useState({});
  const width = window.innerWidth;
  const height = window.innerHeight;
  const { camera } = useThree();

  useEffect(() => {
    window.addEventListener("scroll", e => {
      console.log(window.scrollY);
    });

    window.addEventListener("mousemove", e => {
      if (!e) return;
      const { clientX, clientY } = e;
      let ratioWidth = clientX / width;
      let ratioHeight = clientY / height;

      camera.position.x += (ratioWidth - camera.position.x) * 0.1;
      camera.position.y += (ratioHeight - camera.position.y) * 0.1;
    });

    return () => {
      window.removeEventListener("scroll", window);
      window.removeEventListener("mousemove", window);
    };
  }, []);

  return (
    <Float floatingRange={[0, 0.2]} rotationIntensity={0.2} floatIntensity={3}>
      <Physics gravity={[0, -5, 0]}>
        <Debug />
        <Branch scale={0.5} position={[-4, 0, 0.7]} />
        <Apple scale={0.01} position={[-2, 0.75, 1.05]} />
      </Physics>
    </Float>
  );
};

const ThreeJS = ({ handleWork, handleAbout, handleContact, rotateWork }) => {
  return (
    <div className="canvas">
      <Canvas
        flat
        dpr={[1, 2]}
        camera={{ position: [0, 0, 6], fov: 75, near: 0.1, far: 1000 }}
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
        <Environment preset="forest" />
        <Scene />
        <Sparkles
          count={200}
          scale={[5, 2, 3]}
          position={[-3, 2, 1]}
          color={"#fcba03"}
        />
      </Canvas>
    </div>
  );
};

export default ThreeJS;

const LoadingBooth = () => {
  const { progress } = useProgress();
  return <Html>{progress} % Loaded</Html>;
};
