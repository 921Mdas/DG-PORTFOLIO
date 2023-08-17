import React, { useMemo } from "react";
import * as THREE from "three";

// internal
import ParagraphHelper from "../../Util/ParagraphHelper.tsx";
import LinkHelper from "../../Util/LinkHelper.tsx";
import RobotoCondensed from "../../../../assets/Fonts/Rbtc.ttf";
import { ProjectLens } from "../../3dHelpers/BgcModels";
import { Materials } from "../../MaterialsHHC/Materials";

const ProjectCard = ({
  text,
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
  position,
  spherePos,
  textPos,
  titlePosX,
  titlePosY,
}) => {
  const Over = useMemo(() => {
    const overFn = () => {
      document.body.style.cursor = "pointer";
      setTimeout(() => (document.body.style.cursor = "auto"), 100);
    };
    return overFn;
  }, []);

  const material = new Materials().standard2({
    transparent: true,
    opacity: 1,
    color: "white",
    roughness: 0.5,
    metalness: 0,
    side: THREE.FrontSide,
    blending: THREE.AdditiveBlending,
    polygonOffset: true,
    polygonOffsetFactor: 1,
    envMapIntensity: 2,
  });

  return (
    <group position={position}>
      <group position={textPos}>
        <ParagraphHelper
          scale={codeScale + 0.03}
          lineHeight={1.5}
          anchorX={titlePosX}
          anchorY={titlePosY}
          text={text}
          font={RobotoCondensed}
          material={material}
        />
        <ParagraphHelper
          scale={skillScale}
          lineHeight={1.5}
          anchorX={SkillAnchX}
          anchorY={skillAnchY - 2}
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
          font={RobotoCondensed}
        />
        <LinkHelper
          scale={viewScale}
          lineHeight={1.5}
          anchorX={viewAnchX}
          anchorY={viewAnchY}
          text={`VIEW`}
          font={RobotoCondensed}
          fnClick={() => {
            window.open(`${viewUrl}`, "_blank");
          }}
        />
        <mesh position={spherePos} scale={0.4} rotation={[Math.PI * 0.5, 0, 0]}>
          <ProjectLens />
        </mesh>
      </group>
    </group>
  );
};

const Projects = ({ _material, headNum, initPos }) => {
  const size = 0.6;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = useMemo(() => [
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
      imgurl: "/broom.jpeg",
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
    {
      posx: 0.1,
      posy: -0.7,
      posz: 0.5,
      col: "orangered",
      size: size,
      imgurl: "/broom.jpeg",
      anchSize: headNum - 0.34,
      anchorX: 31,
      anchorY: initPos + 68,
      text: "SALESPIPE",
      skillScale: headNum - 0.36,
      SkillAnchX: 42.5,
      skillAnchY: initPos + 127,
      skills: `SVELTE / EXPRESS / MDB `,
      codeScale: headNum - 0.35,
      codeAnchX: 33,
      codeAnchY: initPos + 92,
      viewScale: headNum - 0.35,
      viewAnchX: 29.5,
      viewAnchY: initPos + 92,
      codeUrl: "https://github.com/921Mdas/NeTrack",
      viewUrl: "https://csto.onrender.com/",
    },
  ]);

  return (
    <group position={[2.5, -3, -1.5]}>
      <ProjectCard
        {...data[0]}
        position={[0, 0, 3]}
        spherePos={[-1.4, initPos - 34, -0.5]}
        textPos={[0, 0, 0]}
        titlePosX={20.85}
        titlePosY={72}
      />
      <ProjectCard
        {...data[1]}
        position={[0, 0, 0]}
        spherePos={[-1.5, initPos - 34, -0.5]}
        textPos={[-1, 0, 3]}
        titlePosY={72}
        titlePosX={21}
      />
      <ProjectCard
        {...data[2]}
        position={[0, 0, 0]}
        spherePos={[-1.59, initPos - 34, -0.5]}
        textPos={[-2, 0, 3]}
        titlePosY={72}
        titlePosX={21}
      />
      <ProjectCard
        {...data[3]}
        position={[0, 0, 0]}
        spherePos={[-1.5, initPos - 34, -0.5]}
        textPos={[-1, -1, 3]}
        titlePosY={72}
        titlePosX={21.5}
      />
      <ProjectCard
        {...data[4]}
        position={[0, 0, 0]}
        spherePos={[-1.6, initPos - 34.05, -0.5]}
        textPos={[-2, -1, 3]}
        titlePosY={72}
        titlePosX={21.5}
      />
    </group>
  );
};

export default Projects;
