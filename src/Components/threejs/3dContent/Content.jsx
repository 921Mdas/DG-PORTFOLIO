import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { vertexShader, fragmentShader } from "../Effect/Shaders/TextShader";

import Logo from "./Sections/Logo";
import Intro from "./Sections/Intro";
import SkillPart from "./Sections/Skills";
import ProjectsPart from "./Sections/Projects";
import ContactPart from "./Sections/Contact";
import { useFrame } from "react-three-fiber";
import { Scroll } from "@react-three/drei";

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
      <Scroll>
        <group position={[0, 0, 0]}>
          <Logo
            headNum={headNum}
            material={textShaderMaterial}
            initPos={initPos}
          />
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
        </group>
      </Scroll>
      <ContactPart
        headNum={headNum}
        material={textShaderMaterial}
        initPos={initPos}
      />
    </>
  );
};

export default ThreeText;
