import React from "react";
import { Scroll } from "@react-three/drei";
import ParagraphHelper from "../../Util/ParagraphHelper.tsx";
import RobotoCondensed from "../../../../assets/Fonts/Rbtc.ttf";

const Logo = ({ headNum, material, _ }) => {
  return (
    <>
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
        anchorX={0}
        anchorY={0}
        font={RobotoCondensed}
        text={`MADINGU`}
        material={material}
      />
      <ParagraphHelper
        scale={headNum - 0.3}
        lineHeight={1.5}
        anchorX={0}
        anchorY={5}
        font={RobotoCondensed}
        text={`SOFTWARE DEVELOPER`}
        material={material}
      />
    </>
  );
};

export default Logo;
