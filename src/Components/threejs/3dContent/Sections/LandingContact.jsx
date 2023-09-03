import React from "react";

// Internal
import ParagraphHelper from "../../Util/ParagraphHelper.tsx";
import LinkHelper from "../../Util/LinkHelper.tsx";
import { Materials } from "../../MaterialsHHC/Materials";

const LandingContact = ({ headNum, initPos, _material, font }) => {
  const basicMaterial = new Materials().standard2({
    color: "white",
  });

  return (
    <group position={[0.3, -1.5, 0]} scale={1.2}>
      <ParagraphHelper
        scale={headNum - 0.34}
        lineHeight={1.5}
        anchorX={-24}
        anchorY={initPos - 2}
        text={`rodeomads@gmail.com`}
        material={basicMaterial}
        font={font}
      />
      <LinkHelper
        scale={headNum - 0.35}
        lineHeight={1.5}
        anchorX={-28}
        anchorY={initPos}
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
        anchorY={initPos}
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
        anchorY={initPos}
        material={basicMaterial}
        text={`Instagram`}
        fnClick={() => {
          window.open("", "_blank");
        }}
      />
    </group>
  );
};

export default LandingContact;
