// react
import React, { useState, useEffect } from "react";

// three
import { DoubleSide } from "three";
import { Decal, Text } from "@react-three/drei";
import { useControls } from "leva";

// internal imports
import { Materials } from "../../MaterialsHHC/Materials";
import LandingContact from "./LandingContact";
import FuckYuri from "../../3dHelpers/FuckYuri";
import RobotoCondensedBold from "../../../../assets/Fonts/RbtcBold.ttf";
import TextureShape from "../../Util/TextureRender.tsx";

export const BubbleButton = ({ fnClick }) => {
  const config = useControls({
    backside: true,
    samples: { value: 13, min: 1, max: 32, step: 1 },
    resolution: { value: 2048, min: 64, max: 2048, step: 64 },
    transmission: { value: 0.95, min: 0, max: 1 },
    roughness: { value: 0, min: 0, max: 1, step: 0.01 },
    clearcoat: { value: 0.63, min: 0, max: 1, step: 0.01 },
    clearcoatRoughness: { value: 0.13, min: 0, max: 1, step: 0.01 },
    thickness: { value: 12.13, min: 0, max: 200, step: 0.01 },
    backsideThickness: { value: 50.66, min: 0, max: 200, step: 0.01 },
    ior: { value: 1.02, min: 1, max: 5, step: 0.01 },
    chromaticAberration: { value: 0.0, min: 0, max: 1 },
    anisotropy: { value: 2.97, min: 0, max: 10, step: 0.01 },
    distortion: { value: 0.31, min: 0, max: 1, step: 0.01 },
    distortionScale: { value: 0.58, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0.61, min: 0, max: 1, step: 0.01 },
    attenuationDistance: { value: 1.09, min: 0, max: 10, step: 0.01 },
    attenuationColor: "#ffffff",
    color: "#6f6f6f",
    toneMapped: false,
  });
  const material = new Materials();
  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = "pointer";
    }
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hovered]);

  return (
    <mesh
      onClick={() => {
        fnClick();
      }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={0.3}
    >
      <sphereGeometry />
      {material.glass(config)}
      <Decal position={[0, 0, 1]} scale={1.25}>
        <meshBasicMaterial
          transparent
          polygonOffset
          polygonOffsetFactor={-100}
          color={"whitesmoke"}
          side={DoubleSide}
          toneMapped={false}
        >
          <TextureShape
            text={">"}
            size={2.5}
            font={RobotoCondensedBold}
            color={"white"}
            fnClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </meshBasicMaterial>
      </Decal>
    </mesh>
  );
};

const WelcomeLight = () => {
  return (
    <>
      <directionalLight intensity={1} />
      <ambientLight />
    </>
  );
};

const Landing = ({ SetShowLoadingPage }) => {
  const initPos = 0;
  const headNum = 0.4;

  return (
    <group>
      <WelcomeLight />
      <BubbleButton
        fnClick={() => {
          SetShowLoadingPage(false);
        }}
      />
      <FuckYuri />
      <group position={[-2.5, 1.5, 0]}>
        <Text scale={0.07} anchorX={2} font={RobotoCondensedBold}>
          {"DEO"}
        </Text>
        <Text scale={0.07} anchorY={0.5} font={RobotoCondensedBold}>
          {"MADINGU"}
        </Text>
        <Text scale={0.07} anchorY={1.5} anchorX={2}>
          {"2023"}
        </Text>
      </group>
      <LandingContact
        material={new Materials().standard2("white")}
        headNum={headNum}
        initPos={initPos}
        font={RobotoCondensedBold}
      />
    </group>
  );
};

export default Landing;
