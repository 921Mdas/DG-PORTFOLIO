import React from "react";
import {
  EffectComposer,
  Bloom,
  Vignette,
  GodRays,
} from "@react-three/postprocessing";
import { BlendFunction, GlitchEffect, BloomEffect } from "postprocessing";
import { GlitchMode } from "postprocessing";
import { Vector2 } from "three";
import { useThree } from "react-three-fiber";
import * as THREE from "three";
import { useControls, folder } from "leva";

const VFX = () => {
  const {
    viewport: { width, height },
  } = useThree();

  const {
    intensity,
    luminanceSmoothing,
    luminanceThreshold,
    radius,
    bok,
    foclen,
    w,
    h,
  } = useControls("bloom", {
    intensity: { value: 0.35, min: 0, max: 1, step: 0.01 },
    luminanceThreshold: { value: 0, min: 0, max: 1, step: 0.01 },
    luminanceSmoothing: { value: 0.02, min: 0, max: 1, step: 0.01 },
    radius: { value: 0.79, min: 0, max: 1, step: 0.01 },
    bok: { value: 8, min: 0, max: 18, step: 0.1 },
    foclen: { value: 0.1, min: 0, max: 1, step: 0.01 },
    w: { value: 1, min: -10, max: 10, step: 0.1 },
    h: { value: 1, min: -10, max: 10, step: 0.1 },
  });

  return (
    <EffectComposer>
      <Bloom
        mipmapBlur
        intensity={intensity}
        luminanceThreshold={luminanceThreshold}
        luminanceSmoothing={luminanceSmoothing}
        radius={radius}
      />
    </EffectComposer>
  );
};

export default VFX;
