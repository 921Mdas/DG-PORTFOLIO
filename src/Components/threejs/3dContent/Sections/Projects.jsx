import React, { useMemo } from "react";
import { Scroll, Image } from "@react-three/drei";
import ParagraphHelper from "../../Util/ParagraphHelper.tsx";
import LinkHelper from "../../Util/LinkHelper.tsx";
import RobotoCondensed from "../../../../assets/Fonts/Rbtc.ttf";

const initPos = 28;

const PlaneGeo = ({ newCol, newPos, size, _ }) => {
  return (
    <mesh position={newPos}>
      <planeGeometry args={[size, size, 1, 1]} />
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
  material,
}) => {
  const Over = useMemo(() => {
    const overFn = () => {
      document.body.style.cursor = "pointer";
      setTimeout(() => (document.body.style.cursor = "auto"), 100);
    };
    return overFn;
  }, []);

  return (
    <group position-x={posx} position-y={posy} position-z={posz}>
      <PlaneGeo
        newPos={[-1.5, initPos - 34, -0.1]}
        newCol={col}
        size={size}
        material={material}
      />

      <Image
        url={imgurl}
        position={[-1.5, initPos - 34, -0.1]}
        transparent
        opacity={0.2}
        scale={size}
      />
      <ParagraphHelper
        scale={codeScale}
        lineHeight={1.5}
        anchorX={SkillAnchX - 6}
        anchorY={skillAnchY - 40}
        text={text}
        font={RobotoCondensed}
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
    <>
      <Scroll>
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
          return <ProjectCard {...pc} key={i} material={material} />;
        })}
      </Scroll>
    </>
  );
};

export default ProjectsPart;
