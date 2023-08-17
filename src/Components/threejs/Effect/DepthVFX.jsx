import React from "react";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
import { useControls } from "leva";

const DepthVFX = () => {
  const { focusRange, bokehScale, height, focalLength } = useControls("focus", {
    focusRange: 0.5,
    bokehScale: 1,
    focalLength: 2.2,
    maxBlur: Infinity,
    kernelSize: [3, 3],
    luminanceThreshold: 0.98,
    blurStrength: 4,
    showFocus: true,
    showBokeh: false,
    enabled: true,
    height: 480,
  });
  return (
    <EffectComposer>
      <DepthOfField
        target={[0, 0, 10.5]}
        focusRange={focusRange}
        bokehScale={bokehScale}
        height={height}
        focalLength={focalLength}
      />
    </EffectComposer>
  );
};

export default DepthVFX;
