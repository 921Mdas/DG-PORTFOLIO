import { useControls } from "leva";
import React, { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { DirectionalLightHelper, PointLightHelper } from "three";

const LightScene = () => {
  const directionRef = useRef(null);
  const pointRef = useRef(null);
  useHelper(directionRef, DirectionalLightHelper, "green");
  useHelper(pointRef, PointLightHelper, "blue");
  return (
    <>
      {/* <pointLight color={"#FF5733"} /> */}
      {/* <spotLight
        color={"#FF5733"}
        intensity={3.5}
        angle={0.6}
        penumbra={0.5}
        position={[3, 2, 0]}
        castShadow
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      /> */}
    </>
  );
};
export default LightScene;
