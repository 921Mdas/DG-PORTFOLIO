import { useControls, folder } from "leva";
import React, { useRef, useEffect } from "react";
import { useHelper } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

const LightScene = () => {
  const directionLightRef = useRef(null);
  const ref = useRef();
  useHelper(directionLightRef, THREE.DirectionalLightHelper, 1);
  const { dirIntensity, dirPosition, ambientLight, dirColor } = useControls(
    "light",
    {
      directional: folder({
        dirIntensity: { value: 5, min: 0, max: 5, step: 0.1 },
        dirPosition: { x: 0, y: 0, z: 0 },
        dirColor: "#ff0303",
      }),
      ambient: folder({
        ambientLight: { value: 0.11, min: 0, max: 1, step: 0.01 },
      }),
    }
  );

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".welcome_section",
      toggleActions: "play none none none",
      scrub: 2,
      start: "center top",
      end: "bottom top",
      markers: false,
    },
  });

  useEffect(() => {
    tl.to(ref?.current?.position, { duration: 5, x: 1 }, "+=0.2").to(
      ref?.current?.position,
      { duration: 5, x: -1 },
      "+=0.2"
    );
  }, [tl]);

  return (
    <>
      {/* <ambientLight intensity={ambientLight} /> */}
      <directionalLight
        ref={directionLightRef}
        position={[dirPosition.x, dirPosition.y, dirPosition.z]}
        intensity={dirIntensity}
        color={dirColor}
        ref={ref}
      />
      {/* <pointLight
        position={[dirPosition.x, dirPosition.y, dirPosition.z]}
        intensity={dirIntensity}
        color={dirColor}
        ref={ref}
      /> */}
    </>
  );
};
export default LightScene;
