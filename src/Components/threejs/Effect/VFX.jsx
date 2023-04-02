import React from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useControls } from "leva";

const VFX = () => {
  const {
    intensity,
    luminanceSmoothing,
    luminanceThreshold,
    radius,
    width,
    height,
  } = useControls("bloom", {
    intensity: { value: 0.55, min: 0, max: 1, step: 0.01 },
    luminanceTheightreshold: { value: 0, min: 0, max: 1, step: 0.01 },
    luminanceSmoothing: { value: 0.02, min: 0, max: 1, step: 0.01 },
    radius: { value: 0.79, min: 0, max: 1, step: 0.01 },
    width: { value: 1, min: -10, max: 10, step: 0.1 },
    height: { value: 1, min: -10, max: 10, step: 0.1 },
  });

  return (
    <EffectComposer>
      <Bloom
        mipmapBlur
        intensity={intensity}
        luminanceThreshold={luminanceThreshold}
        luminanceSmoothing={luminanceSmoothing}
        radius={radius}
        width={width}
        height={height}
      />
    </EffectComposer>
  );
};

export default VFX;
