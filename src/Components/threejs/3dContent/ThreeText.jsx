import React, { useRef } from "react";
import inter_v12 from "../../../assets/Fonts/inter-v12700.ttf";
import TextHeadLine from "../Util/TextHelper.tsx";
import { Scroll, Text, Image, useScroll } from "@react-three/drei";
import ParagraphHelper from "../Util/ParagraphHelper.tsx";
import LinkHelper from "../Util/LinkHelper.tsx";
import Cursor from "../3d cursor/Cursor3d.tsx";
import Skill from "../../Skills/Skill.tsx";
import RobotoCondensed from "../../../assets/Fonts/Rbtc.ttf";
import RobotoReg from "../../../assets/Fonts/Rbtr.ttf";
import { Vector3 } from "three";
import { useThree } from "react-three-fiber";
import { useFrame } from "react-three-fiber";
import { useInView } from "react-intersection-observer";
import { Particles } from "./Particles";

import "../Util/simulationMaterial";

const initPos = 28;
const targetPos = initPos - 34;
const headNum = 0.4;

const Logo = () => {
  return (
    <>
      <ParagraphHelper
        scale={headNum - 0.32}
        lineHeight={1.5}
        anchorX={28}
        anchorY={initPos - 43.2}
        font={RobotoCondensed}
        text={`deomadingu`}
      />
      <ParagraphHelper
        scale={headNum - 0.36}
        lineHeight={1.5}
        anchorX={56}
        anchorY={initPos - 55.9}
        font={RobotoCondensed}
        text={`SOFTWARE DEVELOPER`}
      />
    </>
  );
};

const Intro = () => {
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
        />
        <ParagraphHelper
          scale={0.06}
          lineHeight={1.5}
          anchorX={30}
          anchorY={initPos + 8}
          text={`I'm a software developer${"\n"}who is passionate about learning and${"\n"}building unique experiences.
        ${"\n"} I thrive on the satisfaction${"\n"} of impressing myself and reaching${"\n"} for the unusual.`}
        />
      </Scroll>
    </>
  );
};

const SkillPart = () => {
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
  ];

  return (
    <>
      <Scroll>
        <ParagraphHelper
          scale={headNum}
          lineHeight={1.5}
          anchorX={-2.8}
          anchorY={initPos - 20.5}
          font={RobotoCondensed}
          text={`02`}
        />

        <ParagraphHelper
          scale={0.06}
          lineHeight={1.5}
          anchorX={-20}
          anchorY={(initPos + 1.5) * 2}
          text={`${skillsArr[0]}`}
          position={new Vector3(0, 0, 0)}
        />
        <ParagraphHelper
          scale={0.06}
          lineHeight={1.5}
          anchorX={-20}
          anchorY={(initPos + 1.5) * 2}
          text={`${skillsArr[1]}`}
          position={new Vector3(0.2, -0.05, 0.3)}
        />
        <ParagraphHelper
          scale={0.06}
          lineHeight={1.5}
          anchorX={-20}
          anchorY={(initPos + 1.5) * 2}
          text={`${skillsArr[2]}`}
          position={new Vector3(0.1, -0.15, 0.1)}
        />
        <ParagraphHelper
          scale={0.06}
          lineHeight={1.5}
          anchorX={-20}
          anchorY={(initPos + 1.5) * 2}
          text={`${skillsArr[3]}`}
          position={new Vector3(-0.2, -0.25, 0.3)}
        />
        <ParagraphHelper
          scale={0.08}
          lineHeight={1.5}
          anchorX={-20}
          anchorY={(initPos + 1.5) * 2}
          text={`${skillsArr[4]}`}
          position={new Vector3(-0.1, 1, 0.2)}
        />
        <ParagraphHelper
          scale={0.08}
          lineHeight={1.5}
          anchorX={-20}
          anchorY={(initPos + 1.5) * 2}
          text={`${skillsArr[5]}`}
          position={new Vector3(-0.6, 1.1, 0.2)}
        />
        <ParagraphHelper
          scale={0.06}
          lineHeight={1.5}
          anchorX={-20}
          anchorY={(initPos + 1.5) * 2}
          text={`${skillsArr[6]}`}
          position={new Vector3(-0.2, -0.4, 0.2)}
        />
        <ParagraphHelper
          scale={0.06}
          lineHeight={1.5}
          anchorX={-20}
          anchorY={(initPos + 1.5) * 2}
          text={`${skillsArr[7]}`}
          position={new Vector3(0.2, -0.3, 0.2)}
        />
        <ParagraphHelper
          scale={0.07}
          lineHeight={1.5}
          anchorX={-20}
          anchorY={(initPos + 1.5) * 2}
          text={`${skillsArr[8]}`}
          position={new Vector3(0.1, 0.1, 0.2)}
        />
        <ParagraphHelper
          scale={0.06}
          lineHeight={1.5}
          anchorX={-20}
          anchorY={(initPos + 1.5) * 2}
          text={`${skillsArr[9]}`}
          position={new Vector3(0.3, -0.4, 0.1)}
        />
        <ParagraphHelper
          scale={0.06}
          lineHeight={1.5}
          anchorX={-20}
          anchorY={(initPos + 1.5) * 2}
          text={`${skillsArr[10]}`}
          position={new Vector3(0.5, -0.1, 0.1)}
        />
        <ParagraphHelper
          scale={0.06}
          lineHeight={1.5}
          anchorX={-20}
          anchorY={(initPos + 1.5) * 2}
          text={`${skillsArr[11]}`}
          position={new Vector3(0.6, -0.2, 0.1)}
        />
        <ParagraphHelper
          scale={0.06}
          lineHeight={1.5}
          anchorX={-20}
          anchorY={(initPos + 1.5) * 2}
          text={`${skillsArr[12]}`}
          position={new Vector3(0.5, -0.3, 0.1)}
        />
        <ParagraphHelper
          scale={0.06}
          lineHeight={1.5}
          anchorX={-20}
          anchorY={(initPos + 1.5) * 2}
          text={`${skillsArr[13]}`}
          position={new Vector3(-0.1, -0.5, 0.1)}
        />

        <ParagraphHelper
          scale={0.06}
          lineHeight={1.5}
          anchorX={-20}
          anchorY={(initPos + 1.5) * 2}
          text={`${skillsArr[14]}`}
          position={new Vector3(-0.4, -0.3, 0.1)}
        />
      </Scroll>
    </>
  );
};

const PlaneGeo = ({ newCol, newPos, size }) => {
  return (
    <mesh position={newPos}>
      <planeGeometry args={[size, size, 2, 2]} />
      <meshStandardMaterial color={newCol} flatShading={true} />
    </mesh>
  );
};

const ProjectCard = ({
  size,
  col,
  posx,
  posy,
  posz,
  imgurl,
  anchSize,
  anchorX,
  anchorY,
  title,
  skills,
  skillScale,
  SkillAnchX,
  skillAnchY,
  codeUrl,
  viewUrl,
  codeScale,
  codeAnchX,
  codeAnchY,
  viewScale,
  viewAnchX,
  viewAnchY,
}) => {
  const Over = () => {
    document.body.style.cursor = "pointer";
    return (document.body.style.cursor = "auto");
  };
  return (
    <group position-x={posx} position-y={posy} position-z={posz}>
      <PlaneGeo newPos={[-1.5, initPos - 34, 0]} newCol={col} size={size} />

      <Image
        url={imgurl}
        position={[-1.5, initPos - 34, 0]}
        transparent
        opacity={0.2}
        scale={size}
      />
      <ParagraphHelper
        scale={headNum - anchSize}
        lineHeight={1.5}
        anchorX={anchorX}
        anchorY={anchorY}
        font={RobotoCondensed}
        text={title}
      />
      <ParagraphHelper
        scale={skillScale}
        lineHeight={1.5}
        anchorX={SkillAnchX}
        anchorY={skillAnchY}
        text={skills}
      />
      <LinkHelper
        scale={codeScale}
        lineHeight={1.5}
        anchorX={codeAnchX}
        anchorY={codeAnchY}
        text={`CODE`}
        fnOver={() => Over()}
        fnClick={() => {
          window.open(`${codeUrl}`, "_blank");
        }}
      />
      <LinkHelper
        scale={viewScale}
        lineHeight={1.5}
        anchorX={viewAnchX}
        anchorY={viewAnchY}
        text={`VIEW`}
        fnClick={() => {
          window.open(`${viewUrl}`, "_blank");
        }}
      />
    </group>
  );
};

const ProjectsPart = () => {
  const size = 0.6;

  const data = [
    {
      posx: 1,
      posy: 0.4,
      posz: 1,
      col: "#6c1eff",
      size: size,
      imgurl: "/headphones.jpeg",
      anchSize: headNum - 0.34,
      anchorX: 31,
      anchorY: initPos + 68,
      text: "BANALEO",
      skillScale: headNum - 0.36,
      SkillAnchX: 43.5,
      skillAnchY: initPos + 127,
      skills: `REACT / MONGODB / AWS `,
      codeScale: headNum - 0.35,
      codeAnchX: 33,
      codeAnchY: initPos + 92,
      viewScale: headNum - 0.35,
      viewAnchX: 29.5,
      viewAnchY: initPos + 92,
      codeUrl: "https://github.com/921Mdas/Bana-Leo-BNLmusic-",
      viewUrl: "https://banaleo.onrender.com/",
    },
    {
      posx: 0,
      posy: 0,
      posz: 0,
      col: "#448f33",
      size: size,
      imgurl: "/bool.jpeg",
      anchSize: headNum - 0.34,
      anchorX: 31,
      anchorY: initPos + 68,
      text: "BOOLFORGE",
      skillScale: headNum - 0.36,
      SkillAnchX: 42.5,
      skillAnchY: initPos + 127,
      skills: `REACT / REDUX / JEST `,
      codeScale: headNum - 0.35,
      codeAnchX: 33,
      codeAnchY: initPos + 92,
      viewScale: headNum - 0.35,
      viewAnchX: 29.5,
      viewAnchY: initPos + 92,
      codeUrl: "https://github.com/921Mdas/DBoolean",
      viewUrl: "https://boolforge.netlify.app/",
    },
    {
      posx: 0.8,
      posy: -0.3,
      posz: 0.5,
      col: "red",
      size: size,
      imgurl: "/audiov.jpeg",
      anchSize: headNum - 0.34,
      anchorX: 31,
      anchorY: initPos + 68,
      text: "AUDIOVIEW",
      skillScale: headNum - 0.36,
      SkillAnchX: 43,
      skillAnchY: initPos + 127,
      skills: `REACT / R3F / ZUSTAND`,
      codeScale: headNum - 0.35,
      codeAnchX: 33,
      codeAnchY: initPos + 92,
      viewScale: headNum - 0.35,
      viewAnchX: 29.5,
      viewAnchY: initPos + 92,
      codeUrl: "https://github.com/921Mdas/DBoolean",
      viewUrl: "https://rodeomads01.netlify.app/",
    },
    {
      posx: 0.1,
      posy: -0.7,
      posz: 0.5,
      col: "orangered",
      size: size,
      imgurl: "/headphones.jpeg",
      anchSize: headNum - 0.34,
      anchorX: 31,
      anchorY: initPos + 68,
      text: "CSV CLEANER",
      skillScale: headNum - 0.36,
      SkillAnchX: 42.5,
      skillAnchY: initPos + 127,
      skills: `REACT / SASS / JEST`,
      codeScale: headNum - 0.35,
      codeAnchX: 33,
      codeAnchY: initPos + 92,
      viewScale: headNum - 0.35,
      viewAnchX: 29.5,
      viewAnchY: initPos + 92,
      codeUrl: "https://github.com/921Mdas/CleanReader",
      viewUrl: "https://cleanreader.netlify.app/",
    },
  ];

  return (
    <>
      <Scroll>
        <ParagraphHelper
          scale={headNum}
          lineHeight={1.5}
          anchorX={4.6}
          anchorY={initPos - 16}
          font={RobotoCondensed}
          text={`03`}
        />
        {data.map((pc, i) => {
          return <ProjectCard {...pc} key={i} />;
        })}
      </Scroll>
    </>
  );
};

const ContactPart = () => {
  return (
    <group position-y={-0.7}>
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
      <Particles focus={5.1} speed={100} aperture={1.8} fov={50} curl={0.25} />
    </group>
  );
};

const ThreeText = () => {
  return (
    <>
      <Logo />
      <Intro />
      <SkillPart />
      <ProjectsPart />
      <ContactPart />
    </>
  );
};

export default ThreeText;
