import React from "react";
import { Physics } from "@react-three/rapier";
import { Debug } from "@react-three/rapier";

// Internal
import { R3FCameraAnimatedEvents } from "../../Helper/helper";
import { MarchingCubes } from "@react-three/drei";

// 3d components
import { Island, IslandTwo, Ball, OttoStep } from "./models";

const IslandScene = () => {
  const objectDistance = 2;
  const objectOne = -objectDistance * 1.4;
  const objectTwo = -objectDistance * 1.78;
  const objectThree = -objectDistance * 5;

  return (
    <>
      <Physics gravity={[0, 2, 0]}>
        <Debug />
        <Island
          scale={0.25}
          position={[0.5, objectOne, 0]}
          rotation={[0, -0.5, 0]}
          // rotation={[0, 0.5, 0]}
        />
        <IslandTwo
          scale={0.22}
          position={[-0.7, objectTwo, 0.3]}
          rotation={[0, -0.5, 0]}
          // rotation={[0, 0.5, 0]}
        />
        <OttoStep
          scale={0.25}
          position={[-0.1, -3.43, 0.3]}
          rotation={[0, 0, 0]}
          // rotation={[0, 0.5, 0]}
        />

        {/* <Person scale={0.4} position={[0.33, -3.34, 0]} rotation={[0, 2, 0]} /> */}

        <MarchingCubes
          resolution={64}
          maxPolyCount={200000}
          enableUvs={false}
          enableColors
        >
          <meshStandardMaterial
            vertexColors
            roughness={0}
            metalness={0}
            color={"#c9d1f1"}
          />

          <Ball color="#c9d1f1" position={[-1, -1, -0.5]} />
          <Ball color="#c9d1f1" position={[-2, 1, 0.5]} />
          <Ball color="#c9d1f1" position={[2, 2, 0.5]} />
          <Ball color="#c9d1f1" position={[-2, -2, -0.5]} />
          <Ball color="#c9d1f1" position={[3, 3, 0.5]} />
          <Ball color="#c9d1f1" position={[-3, -3, -0.5]} />
        </MarchingCubes>
      </Physics>
      <R3FCameraAnimatedEvents />
    </>
  );
};

export default IslandScene;

// C9D1F1  - rock
// 74E2FF - light
