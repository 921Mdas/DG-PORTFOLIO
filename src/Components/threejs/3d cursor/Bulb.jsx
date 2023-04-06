import React, { useRef } from "react";
import { Mesh, Vector3 } from "three";

import {
  MeshTransmissionMaterial,
  Decal,
  Instance,
  Instances,
  useGLTF,
} from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";
import TextureShape from "../Util/TextureRender.tsx";
import face from "../../../assets/models/face.glb";
import { useTransmissionProps } from "../Util/Transmission";

const Bulb = () => {
  const transmissionProps = useControls("Lenx", {
    backside: true,
    ior: { value: 1.54, min: 1, max: 5, step: 0.01 },
    thickness: { value: 200, min: 0, max: 200, step: 0.01 },
    chromaticAberration: { value: 1.0, min: 0, max: 1 },
    anisotropy: { value: 0, min: 0, max: 10, step: 0.01 },
    distortionScale: { value: 0, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0, min: 0, max: 1, step: 0.01 },
  });

  const { material, props } = useTransmissionProps();

  return (
    <mesh scale={1} position={[0.1, 1.5, -4]}>
      <sphereGeometry />
      {material}
    </mesh>
  );
};

export default Bulb;
