import React from "react";
import { Scroll } from "@react-three/drei";
import ParagraphHelper from "../../Util/ParagraphHelper.tsx";
import LinkHelper from "../../Util/LinkHelper.tsx";

const ContactPart = ({ headNum, initPos }) => {
  return (
    <group position-y={-0.5}>
      <Scroll>
        <ParagraphHelper
          scale={headNum - 0.3}
          lineHeight={1.5}
          anchorX={-15}
          anchorY={initPos + 45}
          text={`Say hello`}
        />
        <ParagraphHelper
          scale={headNum - 0.35}
          lineHeight={1.5}
          anchorX={-29}
          anchorY={initPos + 122}
          text={`rodeomads@gmail.com`}
        />
        <LinkHelper
          scale={headNum - 0.35}
          lineHeight={1.5}
          anchorX={-28}
          anchorY={initPos + 125}
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
          fnClick={() => {
            window.open("https://github.com/921Mdas", "_blank");
          }}
        />
        <LinkHelper
          scale={headNum - 0.35}
          lineHeight={1.5}
          anchorX={-37}
          anchorY={initPos + 125}
          text={`Instagram`}
          fnClick={() => {
            window.open("", "_blank");
          }}
        />
      </Scroll>
    </group>
  );
};

export default ContactPart;
