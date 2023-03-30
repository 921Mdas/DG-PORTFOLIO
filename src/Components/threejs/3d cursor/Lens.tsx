import React, { useRef } from "react";
import { Mesh, MeshStandardMaterial, Vector3 } from "three";
import { useFrame } from "react-three-fiber";
import { easing } from "maath";
import {
  MeshTransmissionMaterial,
  Decal,
  Instance,
  Instances,
} from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";
import TextureShape from "../Util/TextureRender.tsx";

interface LensProps {
  color?: string;
  scale?: Vector3;
  position: Vector3;
  text: string;
  textSize: number;
  font?: any;
}

const LensInstance = props => {
  return (
    <group {...props}>
      <Instance />
    </group>
  );
};

export const LensesInstances = () => {
  return (
    <Instances>
      <sphereGeometry />
      <meshBasicMaterial />
      {Array.from({ length: 4 }).map((l, idx) => (
        <LensInstance position={[0 + idx, 0, 0]} scale={idx} />
      ))}
    </Instances>
  );
};

const Lens: React.FC<LensProps> = ({
  scale = 1,
  position = new Vector3(0, 0, 0),
  text = "Hi!",
  textSize = 1,
  font = "",
}) => {
  const lensRef = useRef<Mesh>(null);

  const transmissionProps = useControls("Lens", {
    backside: true,
    ior: { value: 1.24, min: 1, max: 5, step: 0.01 },
    thickness: { value: 131, min: 0, max: 200, step: 0.01 },
    chromaticAberration: { value: 1.0, min: 0, max: 1 },
    anisotropy: { value: 7.02, min: 0, max: 10, step: 0.01 },
    distortionScale: { value: 0.4, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0.85, min: 0, max: 1, step: 0.01 },
  });

  return (
    <group>
      <mesh scale={scale} position={position} ref={lensRef} renderOrder={1}>
        <sphereGeometry />

        <MeshTransmissionMaterial
          side={THREE.DoubleSide}
          {...transmissionProps}
        />

        <Decal position={[0, 0, 1]} rotation={0} scale={1.25}>
          <meshBasicMaterial
            transparent
            polygonOffset
            polygonOffsetFactor={-100}
            color={"whitesmoke"}
            side={THREE.DoubleSide}
            toneMapped={false}
          >
            <TextureShape text={text} size={textSize} font={font} />
          </meshBasicMaterial>
        </Decal>
      </mesh>
    </group>
  );
};

export default Lens;
