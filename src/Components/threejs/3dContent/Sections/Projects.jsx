import React, { useMemo } from "react";
import { Scroll, Image } from "@react-three/drei";
import ParagraphHelper from "../../Util/ParagraphHelper.tsx";
import LinkHelper from "../../Util/LinkHelper.tsx";
import RobotoCondensed from "../../../../assets/Fonts/Rbtc.ttf";
import { useTransmissionProps } from "../../Util/Transmission";
import * as THREE from "three";

const initPos = 28;

const PlaneGeo = ({ newCol, newPos, size, material }) => {
  return (
    <mesh position={newPos} material={material}>
      <planeGeometry args={[size, size, 1, 1]} />
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
  mat,
}) => {
  const Over = useMemo(() => {
    const overFn = () => {
      document.body.style.cursor = "pointer";
      setTimeout(() => (document.body.style.cursor = "auto"), 100);
    };
    return overFn;
  }, []);

  const material = new THREE.MeshStandardMaterial({
    transparent: true,
    opacity: 1,
    color: "black",
    roughness: 0.5,
    metalness: 0,
    side: THREE.FrontSide,
    blending: THREE.AdditiveBlending,
    polygonOffset: true,
    polygonOffsetFactor: 1,
    envMapIntensity: 2,
  });

  return (
    <group position-x={posx} position-y={posy} position-z={posz}>
      <PlaneGeo
        newPos={[-1.5, initPos - 34, -0.1]}
        newCol={col}
        size={size}
        material={
          new THREE.MeshBasicMaterial({
            color: "black",
            opacity: 0.8,
            transparent: true,
          })
        }
      />

      <Image
        url={imgurl}
        position={[-1.5, initPos - 34, -0.2]}
        transparent
        opacity={0.2}
        scale={size}
      />
      <ParagraphHelper
        scale={codeScale + 0.03}
        lineHeight={1.5}
        anchorX={SkillAnchX - 20}
        anchorY={skillAnchY - 83}
        text={text}
        font={RobotoCondensed}
        material={mat}
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
    </group>
  );
};

const ProjectsPart = ({ material, headNum, initPos }) => {
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
  ]);

  return (
    <group position={[0, 0, -1.5]}>
      <ParagraphHelper
        scale={headNum}
        lineHeight={1.5}
        anchorX={4.6}
        anchorY={initPos - 16}
        font={RobotoCondensed}
        text={`03`}
        material={material}
      />
      {data.map((pc, i) => {
        return <ProjectCard {...pc} key={i} mat={material} />;
      })}
    </group>
  );
};

export default ProjectsPart;
