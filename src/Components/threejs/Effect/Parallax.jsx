import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";

const Parallax = () => {
  const targetPosition = useRef(new THREE.Vector3());

  useFrame((state, delta) => {
    // Calculate the target position based on the pointer input.
    targetPosition.current.set(
      -Math.sin(state.pointer.x / 4) * 9,
      1.25 - state.pointer.y,
      Math.cos(state.pointer.x / 4) * 9
    );

    // Use easing to interpolate the camera position smoothly.
    const lerpFactor = 0.1; // Adjust this value to control the smoothness (lower value = smoother)
    state.camera.position.lerp(targetPosition.current, lerpFactor);

    // Make the camera look at the origin (0, 0, 0).
    state.camera.lookAt(0, 0, 0);
  });

  return <></>;
};

export default Parallax;