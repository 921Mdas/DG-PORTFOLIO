import React from "react";
import { Scroll } from "@react-three/drei";
import ParagraphHelper from "../../Util/ParagraphHelper.tsx";
import RobotoCondensed from "../../../../assets/Fonts/Rbtc.ttf";
import * as THREE from "three";

const Logo = ({ headNum, material, _ }) => {
  const meshBasic = new THREE.MeshBasicMaterial({ toneMapped: false });
  return (
    <group position-y={0.5}>
      <ParagraphHelper
        scale={headNum}
        lineHeight={1.5}
        anchorX={0}
        anchorY={-0.9}
        font={RobotoCondensed}
        text={`DEO`}
        material={material}
      />
      <ParagraphHelper
        scale={headNum}
        lineHeight={1.5}
        anchorX={-0.6}
        anchorY={0}
        font={RobotoCondensed}
        text={`MADINGU`}
        material={material}
      />
      <ParagraphHelper
        scale={headNum - 0.3}
        lineHeight={1.5}
        anchorX={-5.5}
        anchorY={5}
        font={RobotoCondensed}
        text={`SOFTWARE DEVELOPER`}
      />
    </group>
  );
};

export default Logo;
