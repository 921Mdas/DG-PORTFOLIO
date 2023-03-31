import { useControls, folder } from "leva";
import React, { useRef } from "react";

const LightScene = () => {
  const directionLightRef = useRef(null);
  const { dirIntensity, dirPosition, ambientLight, dirColor, aColor } =
    useControls("light", {
      directional: folder({
        dirIntensity: { value: 0, min: 0, max: 5, step: 0.1 },
        dirPosition: { x: 0, y: 2, z: 3 },
        dirColor: "white",
      }),
      ambient: folder({
        ambientLight: { value: 1, min: 0, max: 1, step: 0.01 },
        aColor: "white",
      }),
    });

  return (
    <>
      <ambientLight intensity={ambientLight} color={aColor} />
      <directionalLight
        ref={directionLightRef}
        position={[dirPosition.x, dirPosition.y, dirPosition.z]}
        intensity={dirIntensity}
        color={dirColor}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
        shadow-camera-near={1}
      />
    </>
  );
};
export default LightScene;
