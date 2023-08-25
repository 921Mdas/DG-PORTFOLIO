import React, { forwardRef, useEffect, useRef } from "react";
import { Vector3, Euler } from "three";
import { useFrame } from "react-three-fiber";
import { MathUtils } from "three";
// internal
import ParagraphHelper from "../../Util/ParagraphHelper.tsx";
import RobotoCondensed from "../../../../assets/Fonts/Rbtc.ttf";
import { useAnimation } from "../../3dHelpers/Animator";
import { Float } from "@react-three/drei";

const Logo = forwardRef(({ headNum, material }, ref) => {
  const customscaleNum = 0.2;

  // const targetFontRefOne = useAnimation(
  //   new Vector3(0, 0, 20),
  //   new Euler(0, 0, 0),
  //   new Vector3(0, 0, 0),
  //   new Euler(0, 0, 0)
  // );

  // const targetFontRefTwo = useAnimation(
  //   new Vector3(0, 0, 20),
  //   new Euler(0, 0, 0),
  //   new Vector3(0, 0, 0),
  //   new Euler(0, 0, 0),
  //   1.3
  // );

  // const targetFontRefThree = useAnimation(
  //   new Vector3(0, 0, 20),
  //   new Euler(0, 0, 0),
  //   new Vector3(0, 0, 0),
  //   new Euler(0, 0, 0),
  //   1
  // );

  return (
    <group position-y={1.2} scale={0.2} position-x={-2.5} position-z={0}>
      {/* Use the targetFontRefOne, targetFontRefTwo, and targetFontRefThree as refs */}
      <Float
        speed={3} // Animation speed, defaults to 1
        rotationIntensity={1.5} // XYZ rotation intensity, defaults to 1
        floatIntensity={2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[0, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <group>
          <ParagraphHelper
            scale={headNum + customscaleNum}
            lineHeight={1.5}
            anchorX={1.5}
            anchorY={-1.5}
            font={RobotoCondensed}
            text={`DEO`}
            material={material}
          />
        </group>
        <group>
          <ParagraphHelper
            scale={headNum + customscaleNum}
            lineHeight={1.5}
            anchorX={1.5}
            anchorY={-0.6}
            font={RobotoCondensed}
            text={`MADINGU`}
            material={material}
          />
        </group>
      </Float>
      <group>
        <Float
          speed={5} // Animation speed, defaults to 1
          rotationIntensity={1.5} // XYZ rotation intensity, defaults to 1
          floatIntensity={2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[0, 0.1]}
        >
          <ParagraphHelper
            scale={headNum + customscaleNum + 0.3}
            lineHeight={1.5}
            anchorX={1.6}
            anchorY={-0.95}
            font={RobotoCondensed}
            text={`+`}
            material={material}
          />
        </Float>
      </group>
      <group>
        <ParagraphHelper
          scale={headNum + customscaleNum - 0.3}
          lineHeight={1.5}
          anchorX={3}
          anchorY={2.8}
          font={RobotoCondensed}
          text={`< SOFTWARE DEVELOPER />`}
          rotation={[0, -0.2, 0]}
        />
      </group>
    </group>
  );
});

export default Logo;
