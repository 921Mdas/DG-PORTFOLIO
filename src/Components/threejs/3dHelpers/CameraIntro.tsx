// import React, { useLayoutEffect, useState } from "react";
// import { useFrame, useThree } from "react-three-fiber";
// import { Vector3, Euler, MathUtils } from "three";

// const CameraIntroMovement = () => {
//   const { camera } = useThree();

//   //   how to move a camera smoothly as an intro
//   const [smoothedCameraPosition] = useState(() => new Vector3(0, 0, 0));
//   const [smoothedCameraRotation] = useState(() => new Euler(0, 0, 0));

//   useFrame((_state, delta) => {
//     const initialCameraPosition = new Vector3(0, 0, 20);
//     const initialCameraRotation = new Euler(0, 0, 0);

//     const finalCameraPosition = new Vector3(0, 0, 7);
//     const finalCameraRotation = new Euler(0, 0, 0);

//     initialCameraPosition.copy(finalCameraPosition);
//     initialCameraRotation.copy(finalCameraRotation);

//     smoothedCameraPosition.lerp(initialCameraPosition, 1 * delta);
//     smoothedCameraRotation.y = MathUtils.lerp(
//       smoothedCameraRotation.y,
//       initialCameraRotation.y,
//       1 * delta
//     );
//     camera.position.copy(smoothedCameraPosition);
//     camera.rotation.copy(smoothedCameraRotation);
//   });

//   return null;
// };

// export default CameraIntroMovement;

import React, { useLayoutEffect, useState } from "react";
import { useFrame, useThree } from "react-three-fiber";
import { Vector3, Euler, MathUtils } from "three";

const CameraIntroMovement = () => {
  const { camera } = useThree();

  // Initial and final camera positions and rotations
  const initialCameraPosition = new Vector3(0, 0, 50); // Change this to the initial position you want
  const initialCameraRotation = new Euler(0, 0, 0); // Change this to the initial rotation you want

  const finalCameraPosition = new Vector3(0, 0, 8); // Change this to the final position you want
  const finalCameraRotation = new Euler(0, 0, 0); // Change this to the final rotation you want

  //   Smoothed camera position and rotation
  const [smoothedCameraPosition] = useState(() =>
    initialCameraPosition.clone()
  );
  const [smoothedCameraRotation] = useState(() =>
    initialCameraRotation.clone()
  );

  useFrame((_state, delta) => {
    smoothedCameraPosition.lerp(finalCameraPosition, 5.5 * delta); // Adjust the interpolation speed with the factor (0.5 here)
    smoothedCameraRotation.y = MathUtils.lerp(
      smoothedCameraRotation.y,
      finalCameraRotation.y,
      5.5 * delta // Adjust the interpolation speed with the factor (0.5 here)
    );
    camera.position.copy(smoothedCameraPosition);
    camera.rotation.copy(smoothedCameraRotation);
  });

  return null;
};

export default CameraIntroMovement;
