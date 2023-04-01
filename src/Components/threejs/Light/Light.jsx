import { useControls, folder } from "leva";
import React from "react";

const LightScene = () => {
  const { ambientLight, aColor } = useControls("light", {
    ambient: folder({
      ambientLight: { value: 1, min: 0, max: 1, step: 0.01 },
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
