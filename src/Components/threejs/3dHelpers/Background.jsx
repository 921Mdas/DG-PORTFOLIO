// external imports
import React, { useRef, useLayoutEffect, useEffect, useMemo } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import ForgiveYuri from "./ForgiveYuri";
// import { Debug, Physics, RigidBody } from "@react-three/rapier";
// import { CloudMaze, Eye } from "./BgcModels.jsx";
// import Particles from "./BrunoParticles.jsx";
// import {
//   TextureLoader,
//   Vector3,
//   RepeatWrapping,
//   LinearFilter,
//   Euler,
// } from "three";
// import { useControls } from "leva";
import FBOParticles from "./FBO";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Float, Html, useScroll } from "@react-three/drei";
import { useFrame, Canvas } from "react-three-fiber";
import * as THREE from "three";
import Scene from "./FBO";
import { Hand } from "./BgcModels.jsx";
// components
import CustomCursor from "../Cursors/Cursor.jsx";
// import Particles from "./Particles";
import { Blob, Cells, CylinderWall, Line } from "./BgcModels.jsx";
// import VideoWrap from "./Video.jsx";
import VFX from "../Effect/BloomVFX.jsx";
// import imageTexture from "../../../assets/Images/girl.png";
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
  // const pointRef = useRef(null);

  // *** particles
  // const props = useControls({
  //   focus: { value: 6.23, min: 3, max: 7, step: 0.01 },
  //   speed: { value: 0.3, min: 0.1, max: 100, step: 0.1 },
  //   aperture: { value: 4.7, min: 1, max: 5.6, step: 0.1 },
  //   fov: { value: 10, min: 0, max: 200 },
  //   curl: { value: 0.33, min: 0.01, max: 0.5, step: 0.01 },
  // });
  const scroll = useScroll();

  const blob = useRef(null);
  const refHand = useRef(null);
  // const blob1 = useRef(null);
  // const blob2 = useRef(null);
  // const scroll = useScroll();
  const tl = useRef(null);
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
    tlx.to(refHand.current.rotation, {
      x: 0,
      z: 0.5,
      y: 0,
    });
  }, []);

  // const count = 2000;
  // const particlesPosition = useMemo(() => {
  //   const positions = new Float32Array(count * 3);
  //   const distance = 1;
  //   for (let i = 0; i < count; i++) {
  //     const theta = THREE.MathUtils.randFloatSpread(360);
  //     const phi = THREE.MathUtils.randFloatSpread(360);

  //     let x = distance * Math.sin(theta) * Math.cos(phi);
  //     let y = distance * Math.sin(theta) * Math.sin(phi);
  //     let z = distance * Math.cos(theta);

  //     positions.set([x, y, z], i * 3);
  //   }

  //   return positions;
  // }, [count]);

  // useFrame(state => {
  //   const { clock } = state;

  //   for (let i = 0; i < count; i++) {
  //     const i3 = i * 3;

  //     pointRef.current.geometry.attributes.position.array[i3] +=
  //       Math.sin(clock.elapsedTime + Math.random() * 10) * 0.01;
  //     pointRef.current.geometry.attributes.position.array[i3 + 1] +=
  //       Math.cos(clock.elapsedTime + Math.random() * 10) * 0.01;
  //     pointRef.current.geometry.attributes.position.array[i3 + 2] +=
  //       Math.sin(clock.elapsedTime + Math.random() * 10) * 0.01;
  //   }

  //   pointRef.current.geometry.attributes.position.needsUpdate = true;
  // });

  return (
    <>
      <group position={[0, 0, -1]}>
        <Hand
          position={[-0.1, -1.3, 0]}
          scale={1.2}
          rotation={[Math.PI * 0.5, Math.PI * 0.5, 0]}
          ref={refHand}
        />
        <Scene />
      </group>
      {/* <points ref={pointRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesPosition.length / 3}
            array={particlesPosition}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#5786F5"
          size={0.015}
          sizeAttenuation
          depthWrite={false}
        />
      </points> */}
      {/* <FuckYuri /> */}
      {/* <Experimental /> */}
      {/* <Physics gravity={[0, 0, 5]}> */}
      <CustomCursor />
      <Blob ref={blob} position={[0, 0, -10]} />
      <VFX />
      {/* </Physics> */}
      {/* <ForgiveYuri /> */}
    </>
  );
};

export default Background;
