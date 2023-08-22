import React, { forwardRef, useRef } from "react";
import { Vector3, Euler } from "three";
import { useFrame } from "react-three-fiber";
import { MathUtils } from "three";
// internal
import ParagraphHelper from "../../Util/ParagraphHelper.tsx";
import RobotoCondensed from "../../../../assets/Fonts/Rbtc.ttf";
import { useAnimation } from "../../3dHelpers/Animator";

const Logo = forwardRef(({ headNum, material }, ref) => {
  const customscaleNum = 0.2;

  const targetFontRefOne = useAnimation(
    new Vector3(0, 0, 20),
    new Euler(0, 0, 0),
    new Vector3(0, 0, 0),
    new Euler(0, 0, 0)
  );

  const targetFontRefTwo = useAnimation(
    new Vector3(0, 0, 20),
    new Euler(0, 0, 0),
    new Vector3(0, 0, 0),
    new Euler(0, 0, 0),
    1.3
  );

  const targetFontRefThree = useAnimation(
    new Vector3(0, 0, 20),
    new Euler(0, 0, 0),
    new Vector3(0, 0, 0),
    new Euler(0, 0, 0),
    1
  );

  return (
    <group position-y={1.2} scale={0.2} position-x={-2.5} position-z={0}>
      {/* Use the targetFontRefOne, targetFontRefTwo, and targetFontRefThree as refs */}
      <group ref={targetFontRefOne}>
        <ParagraphHelper
          scale={headNum + customscaleNum}
          lineHeight={1.5}
          anchorX={0.5}
          anchorY={-1.5}
          font={RobotoCondensed}
          text={`DEO`}
          material={material}
          ref={targetFontRefOne}
        />
      </group>
      <group ref={targetFontRefTwo}>
        <ParagraphHelper
          scale={headNum + customscaleNum}
          lineHeight={1.5}
          anchorX={0.5}
          anchorY={-0.6}
          ref={targetFontRefTwo}
          font={RobotoCondensed}
          text={`MADINGU`}
          material={material}
        />
      </group>
      <group ref={targetFontRefThree}>
        <ParagraphHelper
          scale={headNum + customscaleNum - 0.3}
          lineHeight={1.5}
          anchorX={1.3}
          anchorY={1.8}
          font={RobotoCondensed}
          text={`SOFTWARE DEVELOPER`}
          material={material}
        />
      </group>
    </group>
  );
});

export default Logo;
