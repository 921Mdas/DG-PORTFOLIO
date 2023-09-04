import { useControls, folder } from "leva";
import React, { useRef } from "react";
import { useHelper } from "@react-three/drei";
import * as THREE from "three";

const LightScene = () => {
  const directionalHelper = useRef();
  const spotHelper = useRef();
  // useHelper(directionalHelper, THREE.DirectionalLightHelper, 0.5, "#BB2124");
  // useHelper(spotHelper, THREE.SpotLightHelper, 0.5, "#ffd966");
  const { ambientLight, aColor } = useControls("light", {
    ambient: folder({
      ambientLight: { value: 1, min: 0, max: 1, step: 0.01 },
      directionalLight: { value: 0, min: 0, max: 1, step: 0.01 },
      aColor: "blue",
    }),
  });

  return (
    <>
      <ambientLight intensity={ambientLight} color={aColor} />
      <directionalLight
        ref={directionalHelper}
        intensity={0}
        color={"skyblue"}
        position={[0, 0, -3]}
      />
      <spotLight
        ref={spotHelper}
        color={"lightblue"}
        position={[0, 0, 1]}
        intensity={1}
      />
    </>
  );
};
export default LightScene;
