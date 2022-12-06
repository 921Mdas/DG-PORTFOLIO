import React from "react";
import { Physics } from "@react-three/rapier";
import { Debug } from "@react-three/rapier";

// Internal
import { R3FCameraAnimatedEvents } from "../../Helper/helper";
import { MarchingCubes, Sparkles } from "@react-three/drei";

// 3d components
import {
  Island,
  IslandTwo,
  Ball,
  OttoStep,
  IntroScene,
  MineScene,
  Firstep,
  Furnace,
  Foundation,
  Tunnel,
  Tensei,
  Plane,
} from "./models";

const IslandScene = () => {
  const objectDistance = 2;
  const objectZero = -objectDistance;
  const objectOne = -objectDistance * 1.4;
  const objectTwo = -objectDistance * 1.78;
  const objectThree = -objectDistance * 2.05;
  const objectFour = -objectDistance * 2.4;
  const objectFive = -objectDistance * 3.05;

  return (
    <>
      <Physics gravity={[0, 0, 0]}>
        <Debug />
        <Tensei
          scale={0.3}
          position={[-0.5, objectZero + 1.1, 0]}
          rotation={[1, 0, 0]}
        />
        <Island
          scale={0.25}
          position={[0.5, objectOne, 0]}
          rotation={[0, -0.5, 0]}
        />
        <MineScene
          scale={0.1}
          position={[0.35, objectThree + 0.2, 1]}
          rotation={[0, -1.0, 0]}
        />

        <Furnace
          scale={0.1}
          position={[-0.5, objectThree + 0.55, 1]}
          rotation={[0, -0.9, 0]}
        />

        <Foundation
          scale={0.1}
          position={[0, objectThree + 0.2, 1]}
          rotation={[0, -0.9, 0]}
        />

        {/* <Sparkles
          count={20}
          speed={0.2}
          position={[0.7, objectThree, 0]}
          scale={[0.1, 0.1, 0.3]}
        /> */}

        {/* <IslandTwo
          scale={0.22}
          position={[-0.5, objectTwo, 0.3]}
          rotation={[0, 0, 0]}
          // rotation={[0, 0.5, 0]}
        /> */}

        <OttoStep
          scale={0.25}
          position={[-0.1, -3.43, 0.3]}
          rotation={[0, 0, 0]}
          // rotation={[0, 0.5, 0]}
        />

        {/* <Person scale={0.4} position={[0.33, -3.34, 0]} rotation={[0, 2, 0]} /> */}

        {/* <MarchingCubes
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
        </MarchingCubes> */}
      </Physics>
      <R3FCameraAnimatedEvents />
    </>
  );
};

export default IslandScene;

// C9D1F1  - rock
// 74E2FF - light
// FF9D00 - wood
// cell fracture
