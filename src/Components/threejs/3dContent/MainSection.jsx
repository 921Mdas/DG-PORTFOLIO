import React, { useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import { vertexShader, fragmentShader } from "../../../glsl/TextShader";
import { useFrame } from "react-three-fiber";
import Logo from "./Sections/Headline";
import About from "./Sections/About";
import SkillPart from "./Sections/Skills";
import ProjectsPart from "./Sections/Projects";
import Contact from "./Sections/Contact";
import { Scroll } from "@react-three/drei";
import { gsap } from "gsap";
import { useScroll } from "@react-three/drei";

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
        <group position={[0, 0, 0.5]}>
          <Logo
            headNum={headNum}
            material={textShaderMaterial}
            initPos={initPos}
          />
          <About
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
          <Contact
            headNum={headNum}
            material={textShaderMaterial}
            initPos={initPos}
          />
        </group>
      </Scroll>
    </>
  );
};

export default ThreeText;
