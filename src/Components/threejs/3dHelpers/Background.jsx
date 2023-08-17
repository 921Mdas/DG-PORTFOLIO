// external imports
import React, { useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Debug, Physics, RigidBody } from "@react-three/rapier";
import { CloudMaze, Eye } from "./BgcModels.jsx";
// import Particles from "./BrunoParticles.jsx";
import {
  TextureLoader,
  Vector3,
  RepeatWrapping,
  LinearFilter,
  Euler,
} from "three";
import { useControls } from "leva";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Float, Html, useScroll } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";
// components
import CustomCursor from "../Cursors/Cursor.jsx";
// import Particles from "./Particles";
import { Blob, Cells, CylinderWall, Line } from "./BgcModels.jsx";
import VideoWrap from "./Video.jsx";
import VFX from "../Effect/BloomVFX.jsx";
import imageTexture from "../../../assets/Images/girl.png";
// import xfrag from "../Effect/Shaders/xfrag";
// import xvert from "../Effect/Shaders/xvert";
// import vertexShader from "../Effect/Shaders/xvert";
// import fragmentShader from "../Effect/Shaders/xfrag";
// import particleVertex from "../Effect/Shaders/particlevertex";
// import Experimental from "./Experimental";
import FuckYuri from "../3dHelpers/FuckYuri";
// motionpath
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

const AboutSectionItems = () => {
  const tl = useRef(null);
  const scroll = useScroll();
  const boxRef = useRef();

  useFrame((_state, _delta) => {
    tl?.current.seek(scroll.offset * tl?.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 1, ease: "power1.inOut" },
    });

    const tlx = tl.current;

    // tlx.to(boxRef.current.rotation, {
    //   x: 3,
    //   z: 10,
    //   y: Math.PI * 0.5,
    // });

    tlx
      .to(boxRef.current.position, {
        x: -2,
        y: 0,
        z: 0,
      })
      .to(boxRef.current.position, {
        x: 4,
        y: 0,
        z: 0,
      });
  }, []);
  return (
    <>
      <mesh position={[4, 0, 0]} ref={boxRef}>
        <boxGeometry />
      </mesh>
    </>
  );
};

const Background = () => {
  // *** particles
  // const props = useControls({
  //   focus: { value: 6.23, min: 3, max: 7, step: 0.01 },
  //   speed: { value: 0.3, min: 0.1, max: 100, step: 0.1 },
  //   aperture: { value: 4.7, min: 1, max: 5.6, step: 0.1 },
  //   fov: { value: 10, min: 0, max: 200 },
  //   curl: { value: 0.33, min: 0.01, max: 0.5, step: 0.01 },
  // });

  // const blob = useRef(null);
  // const blob1 = useRef(null);
  // const blob2 = useRef(null);
  // const scroll = useScroll();
  // const tl = useRef(null);
  // const webglRef = useRef();
  // const particlesRef = useRef(null);

  // const texture = new THREE.TextureLoader();
  // const ladyTexture = texture.load(imageTexture);

  // useEffect(() => {
  //   if (webglRef.current) {
  //     particlesRef.current = new Particles(webglRef.current);
  //     // Initialize the Particles instance as needed

  //     particlesRef.current?.init(imageTexture);
  //     // particlesRef.current?.addListeners(); // Add listeners here
  //   }

  //   return () => {
  //     // Cleanup when component unmounts
  //     if (particlesRef.current) {
  //       particlesRef.current?.removeListeners(); // Remove listeners here
  //       particlesRef.current?.destroy();
  //     }
  //   };
  // }, []);

  // useFrame((_state, _delta) => {
  //   tl?.current.seek(scroll.offset * tl?.current.duration());
  // });

  // useLayoutEffect(() => {
  //   tl.current = gsap.timeline({
  //     defaults: { duration: 5, ease: "power1.inOut" },
  //   });

  //   const tlx = tl.current;

  //   tlx.to(blob.current.rotation, {
  //     x: 3,
  //     z: 30,
  //     y: Math.PI * 0.5,
  //   });
  // }, []);

  return (
    <>
      <FuckYuri />
      {/* <Experimental /> */}
      {/* <Physics gravity={[0, 0, 5]}> */}
      {/* <CustomCursor /> */}
      {/* <group position={[0, 0, -0.5]} rotation={[0, 0, 5.5]}>
          <Particles {...props} position={[0, 0, 1]} />
        </group> */}
      {/* <Blob ref={blob} /> */}
      {/* <group position={[0, 0, -0.5]} rotation={[0, 0, 5.5]}>
          <Particles src={imageTexture} />
        </group> */}
      {/* 
        <mesh scale={1} position={[0, 0, 0]}>
          <sphereGeometry />
          <meshBasicMaterial toneMapped="false">
            <VideoWrap />
          </meshBasicMaterial>
        </mesh> */}
      {/* <VFX /> */}
      {/* <RigidBody colliders="ball" gravityScale={0.5}>
          <Cells />
          
        </RigidBody> */}
      {/* </Physics> */}
    </>
  );
};

export default Background;
