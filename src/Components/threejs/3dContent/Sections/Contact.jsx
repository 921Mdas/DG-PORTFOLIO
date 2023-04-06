import React from "react";
import { Scroll } from "@react-three/drei";
import ParagraphHelper from "../../Util/ParagraphHelper.tsx";
import LinkHelper from "../../Util/LinkHelper.tsx";
import RobotoCondensed from "../../../../assets/Fonts/Rbtc.ttf";
import * as THREE from "three";

const ContactPart = ({ headNum, initPos, material }) => {
  const mat = new THREE.MeshBasicMaterial({ color: "black" });
  return (
    <group position={[-1.65, 3.5, 0]}>
      <ParagraphHelper
        scale={headNum - 0.27}
        lineHeight={1.5}
        anchorX={-11}
        anchorY={initPos + 27.8}
        text={`SAY HELLO`}
        font={RobotoCondensed}
        material={mat}
      />
      <ParagraphHelper
        scale={headNum - 0.35}
        lineHeight={1.5}
        anchorX={-29}
        anchorY={initPos + 122}
        text={`rodeomads@gmail.com`}
        material={mat}
      />
      <LinkHelper
        scale={headNum - 0.35}
        lineHeight={1.5}
        anchorX={-28}
        anchorY={initPos + 125}
        material={mat}
        color="black"
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
        color="black"
        material={mat}
        fnClick={() => {
          window.open("https://github.com/921Mdas", "_blank");
        }}
      />
      <LinkHelper
        scale={headNum - 0.35}
        lineHeight={1.5}
        anchorX={-37}
        anchorY={initPos + 125}
        material={mat}
        color="black"
        text={`Instagram`}
        fnClick={() => {
          window.open("", "_blank");
        }}
      />
    </group>
  );
};

export default ContactPart;
