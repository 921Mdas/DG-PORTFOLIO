import React from "react";
import { Scroll } from "@react-three/drei";
import ParagraphHelper from "../../Util/ParagraphHelper.tsx";
import RobotoCondensed from "../../../../assets/Fonts/Rbtc.ttf";

const Intro = ({ headNum, material, initPos }) => {
  return (
    <>
      <Scroll>
        <ParagraphHelper
          scale={headNum}
          lineHeight={1.5}
          anchorX={4.6}
          anchorY={initPos - 24}
          font={RobotoCondensed}
          text={`01`}
          material={material}
        />
        <ParagraphHelper
          scale={0.06}
          lineHeight={1.5}
          anchorX={30}
          anchorY={initPos + 8}
          text={`I'm a software developer${"\n"}passionate about learning and${"\n"}building unique experiences with${"\n"}future technologies.
        ${"\n"} I thrive on the satisfaction${"\n"} of impressing myself and reaching${"\n"} for the unusual.`}
        />
      </Scroll>
    </>
  );
};

export default Intro;
