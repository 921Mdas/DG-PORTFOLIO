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
import { Molecule } from "../3dHelpers/BgcModels";
import { Float } from "@react-three/drei";

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

        <group>
          <Float>
            <Molecule
              position={[-2.5, -2, 0]}
              scale={0.2}
              rotation={[Math.random(), Math.random(), Math.random()]}
            />
          </Float>

          <Float>
            <Molecule
              position={[5, -4, -10]}
              scale={0.2}
              rotation={[Math.random(), Math.random(), Math.random()]}
            />
          </Float>

          <Float
            floatIntensity={0.01}
            rotationIntensity={0.1}
            floatingRange={[0, 0.5]}
          >
            <Molecule
              position={[-1.5, -8, 3]}
              scale={0.2}
              rotation={[Math.random(), Math.random(), Math.random()]}
            />
          </Float>
        </group>
      </Scroll>
    </>
  );
};

export default ThreeText;
