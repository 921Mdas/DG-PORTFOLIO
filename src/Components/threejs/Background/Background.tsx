import React, { useRef, useLayoutEffect } from "react";
import * as THREE from "three";
import Lens from "../3d cursor/Lens.tsx";
import Rbtc from "../../../assets/Fonts/Rbtc.ttf";
import { useControls } from "leva";
import { Particles } from "./Particles";
import { useScroll } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import gsap from "gsap";

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

const Background = ({ perfSucks }) => {
  const props = useControls("particles", {
    focus: { value: 3, min: 3, max: 7, step: 0.01 },
    speed: { value: 8.9, min: 0.1, max: 100, step: 0.1 },
    aperture: { value: 5.5, min: 1, max: 5.6, step: 0.1 },
    fov: { value: 200, min: 0, max: 200 },
    curl: { value: 0.25, min: 0.01, max: 0.5, step: 0.01 },
  });

  const robot = useRef();
  const scroll = useScroll();
  const tl = useRef();

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut" },
    });

    tl.current
      .to(robot.current.rotation, { y: -1 }, 2)
      .to(robot.current.position, { x: 1 }, 2)

      .to(robot.current.rotation, { y: 1 }, 6)
      .to(robot.current.position, { x: -1 }, 6)

      .to(robot.current.rotation, { y: 0 }, 11)
      .to(robot.current.rotation, { x: 1 }, 11)
      .to(robot.current.position, { x: 0 }, 11)

      .to(robot.current.rotation, { y: 0 }, 13)
      .to(robot.current.rotation, { x: -1 }, 13)
      .to(robot.current.position, { x: 0 }, 13)

      .to(robot.current.rotation, { y: 0 }, 16)
      .to(robot.current.rotation, { x: 0 }, 16)
      .to(robot.current.position, { x: 0 }, 16)

      .to(robot.current.rotation, { y: 0 }, 20)
      .to(robot.current.rotation, { x: 0 }, 20)
      .to(robot.current.position, { x: 0 }, 20);
  }, []);

  return (
    <>
      <HoloGram />
      <Particles {...props} />
      <mesh ref={robot}>
        <boxGeometry />
      </mesh>
    </>
  );
};

export default Background;
