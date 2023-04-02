import React from "react";
import * as THREE from "three";
import { vertexShader, fragmentShader } from "../Effect/Shaders/TextShader";

import Logo from "./Sections/Logo";
import Intro from "./Sections/Intro";
import SkillPart from "./Sections/Skills";
import ProjectsPart from "./Sections/Projects";
import ContactPart from "./Sections/Contact";

const initPos = 28;
const headNum = 0.4;

const textShaderMaterial = new THREE.ShaderMaterial({
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
  uniforms: {
    uTime: { value: 0 },
    positions: { value: 0 },
  },
});

const ThreeText = () => {
  return (
    <>
      <Logo headNum={headNum} material={textShaderMaterial} initPos={initPos} />
      <Intro
        headNum={headNum}
        material={textShaderMaterial}
        initPos={initPos}
      />
      <SkillPart
        headNum={headNum}
        material={textShaderMaterial}
        initPos={initPos}
      />
      <ProjectsPart
        headNum={headNum}
        material={textShaderMaterial}
        initPos={initPos}
      />
      <ContactPart
        headNum={headNum}
        material={textShaderMaterial}
        initPos={initPos}
      />
    </>
  );
};

export default ThreeText;
