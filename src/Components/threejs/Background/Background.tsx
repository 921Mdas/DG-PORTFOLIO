import React, { useRef, useLayoutEffect } from "react";
import * as THREE from "three";
import Lens from "../3d cursor/Lens.tsx";
import Rbtc from "../../../assets/Fonts/Rbtc.ttf";
import { useControls } from "leva";
import { Particles } from "./Particles";
import { Html, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import Env from "../../../assets/models/envelope.glb";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Bulb from "../3d cursor/Bulb";

gsap.registerPlugin(MotionPathPlugin);

const HoloGram = () => {
  return (
    <group>
      <Lens
        position={new THREE.Vector3(0, 0, -5)}
        text={``}
        font={Rbtc}
        textSize={0.5}
        scale={1}
      />
    </group>
  );
};

const Thought = () => {
  const robot = useRef();
  const scroll = useScroll();
  const tl = useRef();

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 5, ease: "power1.inOut" },
    });

    const tlx = tl.current;
    tlx.to(robot.current.position, {
      motionPath: {
        path: [
          { x: -1.5, y: Math.sin(0) * 1.5, z: 0 },
          { x: 0, y: Math.sin(1) * 1.5, z: 0 },
          { x: 1, y: Math.sin(2) * 1.5, z: 0 },
          { x: 0, y: Math.sin(3) * 1.5, z: 0 },
          { x: 1.5, y: Math.sin(4) * 0.5, z: 0 },
        ],
        autoRotate: true,
      },
    });
  }, []);
  return (
    <mesh ref={robot} scale={0.05} position={[0.79, 0.4, 0]}>
      <sphereGeometry />
    </mesh>
  );
};

const Background = ({ perfSucks }) => {
  const props = useControls("particles", {
    focus: { value: 6.33, min: 3, max: 7, step: 0.01 },
    speed: { value: 8.9, min: 0.1, max: 100, step: 0.1 },
    aperture: { value: 5.5, min: 1, max: 5.6, step: 0.1 },
    fov: { value: 174, min: 0, max: 200 },
    curl: { value: 0.25, min: 0.01, max: 0.5, step: 0.01 },
  });

  return (
    <>
      <HoloGram />
      <Particles {...props} />
      <Bulb />
      <Thought />
    </>
  );
};

export default Background;
