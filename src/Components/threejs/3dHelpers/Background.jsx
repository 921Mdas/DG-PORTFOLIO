// external imports
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { useFrame } from "react-three-fiber";
import { useScroll } from "@react-three/drei";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// internal imports
import Scene from "./FBO";
import CustomCursor from "../Cursors/Cursor.jsx";
import { Blob } from "./BgcModels.jsx";
import VFX from "../Effect/BloomVFX.jsx";

// motionpath
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

const Background = () => {
  const scroll = useScroll();

  const blob = useRef(null);

  const tl = useRef(null);

  useFrame((_state, _delta) => {
    tl?.current.seek(scroll.offset * tl?.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 5, ease: "power1.inOut" },
    });

    const tlx = tl.current;

    tlx.to(blob.current.rotation, {
      x: 3,
      z: 30,
      y: Math.PI * 0.5,
    });
  }, []);

  return (
    <>
      <group position={[0, 0, -1]}>
        <Scene />
      </group>
      <CustomCursor />
      <Blob ref={blob} position={[0, 0, -10]} />
      <VFX />
    </>
  );
};

export default Background;
