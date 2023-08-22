import { useControls, folder } from "leva";
import React from "react";
import { Lightformer, Environment } from "@react-three/drei";

const LightScene = () => {
  const { ambientLight, aColor } = useControls("light", {
    ambient: folder({
      ambientLight: { value: 1, min: 0, max: 1, step: 0.01 },
      directionalLight: { value: 0, min: 0, max: 1, step: 0.01 },
      aColor: "white",
    }),
  });

  return (
    <>
      <ambientLight intensity={ambientLight} color={aColor} />
    </>
  );
};
export default LightScene;
