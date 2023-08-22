import React from "react";
import ParagraphHelper from "../../Util/ParagraphHelper.tsx";
import { Vector3 } from "three";

const SkillPart = ({ _headNum, initPos, _material }) => {
  const skillsArr = [
    "HTML5",
    "Css",
    " Sass",
    "Javascript",
    "Jest",
    "React",
    "React Native",
    "Redux",
    "React-Three-Fiber",
    "MongoDB",
    "PostgreSQL",
    "Django",
    "Git",
    "Rest Apis",
    "Python",
    "Svelte",
  ];

  const SpacePace = 1.5;

  return (
    <group position={[0, -2.5, 0.5]}>
      <ParagraphHelper
        scale={0.06}
        lineHeight={1.5}
        anchorX={-20}
        anchorY={(initPos + SpacePace) * 2}
        text={`${skillsArr[0]}`}
        position={new Vector3(0, 0, 0)}
      />
      <ParagraphHelper
        scale={0.06}
        lineHeight={1.5}
        anchorX={-20}
        anchorY={(initPos + SpacePace) * 2}
        text={`${skillsArr[1]}`}
        position={new Vector3(0.2, -0.05, 0.3)}
      />
      <ParagraphHelper
        scale={0.06}
        lineHeight={1.5}
        anchorX={-20}
        anchorY={(initPos + SpacePace) * 2}
        text={`${skillsArr[2]}`}
        position={new Vector3(0.1, -0.15, 0.1)}
      />
      <ParagraphHelper
        scale={0.06}
        lineHeight={1.5}
        anchorX={-20}
        anchorY={(initPos + SpacePace) * 2}
        text={`${skillsArr[3]}`}
        position={new Vector3(-0.2, -0.25, 0.3)}
      />
      <ParagraphHelper
        scale={0.08}
        lineHeight={1.5}
        anchorX={-20}
        anchorY={(initPos + SpacePace) * 2}
        text={`${skillsArr[4]}`}
        position={new Vector3(-0.1, 1, 0.2)}
      />
      <ParagraphHelper
        scale={0.08}
        lineHeight={1.5}
        anchorX={-20}
        anchorY={(initPos + SpacePace) * 2}
        text={`${skillsArr[5]}`}
        position={new Vector3(-0.6, 1.1, 0.2)}
      />
      <ParagraphHelper
        scale={0.06}
        lineHeight={1.5}
        anchorX={-20}
        anchorY={(initPos + SpacePace) * 2}
        text={`${skillsArr[6]}`}
        position={new Vector3(-0.2, -0.4, 0.2)}
      />
      <ParagraphHelper
        scale={0.06}
        lineHeight={1.5}
        anchorX={-20}
        anchorY={(initPos + SpacePace) * 2}
        text={`${skillsArr[7]}`}
        position={new Vector3(0.2, -0.3, 0.2)}
      />
      <ParagraphHelper
        scale={0.07}
        lineHeight={1.5}
        anchorX={-18}
        anchorY={(initPos + SpacePace) * 2}
        text={`${skillsArr[8]}`}
        position={new Vector3(0.1, 0, 0.2)}
      />
      <ParagraphHelper
        scale={0.06}
        lineHeight={1.5}
        anchorX={-20}
        anchorY={(initPos + SpacePace) * 2}
        text={`${skillsArr[9]}`}
        position={new Vector3(0.3, -0.4, 0.1)}
      />
      <ParagraphHelper
        scale={0.06}
        lineHeight={1.5}
        anchorX={-20}
        anchorY={(initPos + SpacePace) * 2}
        text={`${skillsArr[10]}`}
        position={new Vector3(0.5, -0.1, 0.1)}
      />
      <ParagraphHelper
        scale={0.06}
        lineHeight={1.5}
        anchorX={-20}
        anchorY={(initPos + SpacePace) * 2}
        text={`${skillsArr[11]}`}
        position={new Vector3(0.6, -0.2, 0.1)}
      />
      <ParagraphHelper
        scale={0.06}
        lineHeight={1.5}
        anchorX={-20}
        anchorY={(initPos + SpacePace) * 2}
        text={`${skillsArr[12]}`}
        position={new Vector3(0.5, -0.3, 0.1)}
      />
      <ParagraphHelper
        scale={0.06}
        lineHeight={1.5}
        anchorX={-20}
        anchorY={(initPos + SpacePace) * 2}
        text={`${skillsArr[13]}`}
        position={new Vector3(-0.1, -0.5, 0.1)}
      />

      <ParagraphHelper
        scale={0.06}
        lineHeight={1.5}
        anchorX={-20}
        anchorY={(initPos + SpacePace) * 2}
        text={`${skillsArr[14]}`}
        position={new Vector3(-0.4, -0.3, 0.1)}
      />
      <ParagraphHelper
        scale={0.06}
        lineHeight={1.5}
        anchorX={-20}
        anchorY={(initPos + SpacePace) * 2}
        text={`${skillsArr[15]}`}
        position={new Vector3(-0.4, -0.6, 0.1)}
      />
    </group>
  );
};

export default SkillPart;
