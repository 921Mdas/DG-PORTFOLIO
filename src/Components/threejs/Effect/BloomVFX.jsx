import React, { useState } from "react";
import { EffectComposer, Bloom, GodRays } from "@react-three/postprocessing";
import { useControls } from "leva";
import * as THREE from "three";

const VFX = () => {
  const material = new THREE.MeshBasicMaterial({ color: "white" });
  const {
    intensity,
    luminanceSmoothing,
    luminanceThreshold,
    radius,
    width,
    height,
  } = useControls("bloom", {
    intensity: { value: 0.1, min: 0, max: 1, step: 0.01 },
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
        levels={9}
        intensity={1.5}
        luminanceThreshold={1}
        luminanceSmoothing={1}
      />
    </EffectComposer>
  );
};

export default VFX;
