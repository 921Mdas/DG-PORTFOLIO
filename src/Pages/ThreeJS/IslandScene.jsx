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
  SphereX,
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
        {/* <Debug /> */}
        <Tensei
          scale={0.3}
          position={[0, objectZero + 1.1, 0]}
          rotation={[1, 0, 0]}
        />
        <SphereX scale={0.05} position={[0, objectZero + 1.1, 0]} />
        <Island
          scale={0.1}
          position={[-0.2, -0.7, -0.3]}
          rotation={[0, -0.5, 0]}
        />

        <Furnace
          scale={0.05}
          position={[-0.2, -0.55, 1]}
          rotation={[0, -0.5, 0]}
        />

        <MineScene
          scale={0.05}
          position={[-0.1, -0.8, 1]}
          rotation={[0, -0.5, 0]}
        />
        <Plane scale={5} position={[0, 0, -1]} rotation={[0, 0, 0]} />
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
