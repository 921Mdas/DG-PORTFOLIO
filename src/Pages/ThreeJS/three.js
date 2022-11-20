// external
import React, { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useProgress,
  Html,
  Environment,
  Float,
  Sparkles,
  MarchingCubes,
  MarchingCube,
  Text,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import gsap from "gsap";

// Internal
import { Branch } from "./ThreeComponents";
import Apple from "./shaders/BlobShader";
import { R3FCameraAnimatedEvents } from "../../Helper/helper";
import { RigidBody, Physics, Debug, BallCollider } from "@react-three/rapier";
import Shader from "./shaders/Shader";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Ball = ({ color, ...props }) => {
  // subtract is how much foam we get around balls
  // strength is how big the balls are
  // ball colliders are physical representation and args how big they are
  // make it a sensor type
  const vec = new THREE.Vector3();

  const api = useRef();
  const bulb = useRef();
  const { camera } = useThree();

  useFrame((state, delta) => {
    const coords = api.current?.translation();
    let x = coords?.x + 0.5;
    let y = coords?.y + 0.1;
    let z = coords?.z;

    api.current.applyImpulse(
      vec
        .copy({ x, y, z })
        .normalize()
        .multiplyScalar(delta * -0.05)
    );
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".headline_text",
      toggleActions: "play none none none",
      scrub: 2,
      start: "top 25%",
      end: "bottom 30%",
      markers: true,
    },
  });

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.to(bulb.current?.position, {
        duration: 3,
        x: Math.random() * 3,
      }).to(bulb.current.position, {
        duration: 2,
        z: 3,
      });

      return () => ctx.revert();
    }, [tl]);
  });

  return (
    <>
      <RigidBody
        ref={api}
        colliders={false}
        {...props}
        linearDamping={2}
        angularDamping={0.95}
      >
        <MarchingCube strength={0.5} subtract={6} color={color} ref={bulb} />
        <BallCollider args={[0.1]} type="dynamic" />
      </RigidBody>
    </>
  );
};

// main scene + models
const Scene = () => {
  // marchingcubes resolution is about how round they look
  // maxpolycounts is how many triangles and marchingcube will form
  // enable colors so the marchingcubes accept color
  // testing gsap

  return (
    <>
      <Physics gravity={[0, 2, 0]}>
        <Debug />
        <MarchingCubes
          resolution={64}
          maxPolyCount={200000}
          enableUvs={false}
          enableColors
        >
          <meshStandardMaterial vertexColors roughness={0} metalness={1} />
          <Ball color="#7EC8E3" position={[-1, -1, -0.5]} />
          <Ball color="lightblue" position={[-2, 1, 0.5]} />
          <Ball color="#338BA8" position={[2, 2, 0.5]} />
          <Ball color="orange" position={[-2, -2, -0.5]} />
          <Ball color="white" position={[3, 3, 0.5]} />
          <Ball color="#000C66" position={[-3, -3, -0.5]} />
        </MarchingCubes>
        <Text fontSize={0.25} color={"#7c86a2"} position={[-0.5, -0.05, 0]}>
          I'M
          <meshBasicMaterial side={THREE.DoubleSide} />
        </Text>
      </Physics>
      <R3FCameraAnimatedEvents />
      {/* <MarchingCubes></MarchingCubes> */}
      {/* <Physics>
        <Debug />

        <Float
          floatingRange={[0, 0.2]}
          rotationIntensity={0.2}
          floatIntensity={3}
        >
          <Branch scale={0.5} position={[-5, 0, 0.7]} />
          <Apple scale={0.01} position={[-3, 0.75, 1.05]} />
          <RigidBody
            colliders="hull"
            position={[-2, 1.2, 1.05]}
            gravityScale={0.3}
          >
            <Apple scale={0.01} />
          </RigidBody>
        </Float>
      </Physics> */}
      {/* <R3FCameraAnimatedEvents /> */}
    </>
  );
};

const ThreeJS = ({ handleWork, handleAbout, handleContact, rotateWork }) => {
  return (
    <div className="canvas">
      <Canvas
        flat
        dpr={[1, 2]}
        camera={{ position: [0, 0, 3], fov: 25 }}
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
        <Environment preset="night" />
        <Scene />
        {/* <Sparkles
          count={200}
          scale={[5, 2, 3]}
          position={[-3, 2, 1]}
          color={"#fcba03"}
        /> */}
      </Canvas>
    </div>
  );
};

export default ThreeJS;

const LoadingBooth = () => {
  const { progress } = useProgress();
  return <Html>{progress} % Loaded</Html>;
};
