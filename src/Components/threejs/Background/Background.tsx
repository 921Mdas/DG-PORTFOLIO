import React, { useRef } from "react";
import { LayerMaterial, Color, Depth, Fresnel } from "lamina";
import * as THREE from "three";
import { useControls } from "leva";
import {
  useGLTF,
  Environment,
  MeshTransmissionMaterial,
  Stars,
  Decal,
  Float,
} from "@react-three/drei";
import TextureShape from "../Util/TextureRender.tsx";
import { useFrame } from "react-three-fiber";
import model from "../../../assets/models/human2.glb";
import ground from "../../../assets/models/land.glb";
import magma from "../../../assets/models/lightning.glb";
import computer from "../../../assets/models/computer.glb";
import heart from "../../../assets/models/golem_heart.glb";
import { Lightning, Lightning02 } from "./Lightning";

const Heart = () => {
  const { nodes, scene } = useGLTF(heart);
  const heartRef = useRef();
  useFrame(({ clock }) => {
    const scale = 1 + 0.05 * Math.sin(clock.elapsedTime * 2);
    heartRef.current?.scale.set(scale * 0.005, scale * 0.005, scale * 0.005);
  });
  return <primitive ref={heartRef} object={scene} position={[0.2, -0.3, 0]} />;
};

const BackModel = () => {
  const { nodes } = useGLTF(model);

  const humanRef = useRef();

  const transmissionProps = useControls("model", {
    backside: true,
    ior: { value: 0.28, min: 1, max: 5, step: 0.01 },
    thickness: { value: 200, min: 0, max: 200, step: 0.01 },
    chromaticAberration: { value: 0.28, min: 0, max: 1 },
    anisotropy: { value: 4.35, min: 0, max: 10, step: 0.01 },
    distortionScale: { value: 0.22, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0.5, min: 0, max: 1, step: 0.01 },
  });

  return (
    <group position={[0, -0.5, 0]}>
      <Float
        speed={1}
        rotationIntensity={0.1} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.2} // Up/down float intensity, works like a multiplier
        floatingRange={[0, 0.8]} // Range of y-axis values the object will
      >
        <mesh position={[0, -4.5, 0]} ref={humanRef}>
          <primitive object={nodes.human} scale={0.3}>
            <MeshTransmissionMaterial
              {...transmissionProps}
              envMapIntensity={5}
            />
          </primitive>
        </mesh>
        <Heart />
        <Lightning />
        <Lightning02 />
      </Float>
    </group>
  );
};

const Computer = ({
  scale = 1,
  rotation = [0, 0, 0],
  position = [0, 0, 0],
}) => {
  const { nodes, material, scene } = useGLTF(computer);

  return (
    <primitive
      object={scene}
      scale={scale}
      rotation={rotation}
      position={position}
    />
  );
};

const Background = () => {
  return (
    <>
      {/* <Environment
        near={1}
        far={1000}
        resolution={256}
        files={[
          "./px.png",
          "./nx.png",
          "./py.png",
          "./ny.png",
          "./pz.png",
          "./nz.png",
        ]}
      /> */}
    </>
  );
};

export default Background;
