import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { easing } from "maath";

const Parallax = ({ perfSucks }) => {
  useFrame((state, delta) => {
    // Animate the environment as well as the camera
    const val = 10;

    easing.damp3(
      state.camera.position,
      [
        Math.sin(state.pointer.x / val),
        state.pointer.y / val,
        Math.cos(state.pointer.x / val) * 6,
      ],
      0.3,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });

  return <></>;
};

export default Parallax;
