import React from "react";

// Internal
import ParagraphHelper from "../../Util/ParagraphHelper.tsx";
import LinkHelper from "../../Util/LinkHelper.tsx";
import RobotoCondensed from "../../../../assets/Fonts/Rbtc.ttf";
import { Materials } from "../../MaterialsHHC/Materials";

const Contact = ({ headNum, initPos, material }) => {
  const basicMaterial = new Materials().standard2({
    color: "white",
  });

  return (
    <group position={[0.5, -6.7, 0]}>
      <ParagraphHelper
        scale={headNum - 0.27}
        lineHeight={1.5}
        anchorX={-11}
        anchorY={initPos + 27.8}
        text={`SAY HELLO`}
        font={RobotoCondensed}
        material={material}
      />
      <ParagraphHelper
        scale={headNum - 0.35}
        lineHeight={1.5}
        anchorX={-26.5}
        anchorY={initPos + 122}
        text={`rodeomads@gmail.com`}
        material={basicMaterial}
      />
      <group position={[-0.15, 0, 0]}>
        <LinkHelper
          scale={headNum - 0.35}
          lineHeight={1.5}
          anchorX={-28}
          anchorY={initPos + 125}
          material={basicMaterial}
          text={`Linkedin /`}
          fnClick={() => {
            window.open("https://www.linkedin.com/feed/", "_blank");
          }}
        />
        <LinkHelper
          scale={headNum - 0.35}
          lineHeight={1.5}
          anchorX={-33}
          anchorY={initPos + 125}
          text={`Github /`}
          material={basicMaterial}
          fnClick={() => {
            window.open("https://github.com/921Mdas", "_blank");
          }}
        />
        <LinkHelper
          scale={headNum - 0.35}
          lineHeight={1.5}
          anchorX={-37}
          anchorY={initPos + 125}
          material={basicMaterial}
          text={`Instagram`}
          fnClick={() => {
            window.open("", "_blank");
          }}
        />
      </group>
    </group>
  );
};

export default Contact;
