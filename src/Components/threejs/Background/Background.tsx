import React from "react";
import * as THREE from "three";
import Lens from "../3d cursor/Lens.tsx";
import Rbtc from "../../../assets/Fonts/Rbtc.ttf";
import { useControls } from "leva";
import { Particles } from "./Particles";

const HoloGram = () => {
  return (
    <group>
      <Lens
        position={new THREE.Vector3(0, 0, -5)}
        text={``}
        font={Rbtc}
        textSize={0.5}
        scale={1}
      />
    </group>
  );
};

const Background = ({ perfSucks }) => {
  const props = useControls("particles", {
    focus: { value: 3, min: 3, max: 7, step: 0.01 },
    speed: { value: 8.9, min: 0.1, max: 100, step: 0.1 },
    aperture: { value: 5.5, min: 1, max: 5.6, step: 0.1 },
    fov: { value: 200, min: 0, max: 200 },
    curl: { value: 0.25, min: 0.01, max: 0.5, step: 0.01 },
  });

  return (
    <>
      <HoloGram />
      <Particles {...props} />
    </>
  );
};

export default Background;
