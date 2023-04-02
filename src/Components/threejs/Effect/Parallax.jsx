import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { easing } from "maath";

const Parallax = ({ perfSucks }) => {
  useFrame((state, delta) => {
    // Animate the environment as well as the camera

    easing.damp3(
      state.camera.position,
      [
        Math.sin(state.pointer.x / 5),
        state.pointer.y,
        Math.cos(state.pointer.x / 5) * 6,
      ],
      0.5,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });

  return <></>;
};

export default Parallax;
