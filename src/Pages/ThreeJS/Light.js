import { useControls, folder } from "leva";
import React, { useRef } from "react";
import { useHelper } from "@react-three/drei";
import * as THREE from "three";

const LightScene = () => {
  const directionLightRef = useRef(null);
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

  return (
    <>
      <ambientLight intensity={ambientLight} />
      <directionalLight
        ref={directionLightRef}
        position={[dirPosition.x, dirPosition.y, dirPosition.z]}
        intensity={dirIntensity}
        color={dirColor}
      />
      <pointLight
        position={[dirPosition.x, dirPosition.y, dirPosition.z]}
        intensity={dirIntensity}
        color={dirColor}
      />
    </>
  );
};
export default LightScene;
