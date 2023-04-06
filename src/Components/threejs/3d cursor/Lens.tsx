import React, { useRef } from "react";
import { Mesh, Vector3 } from "three";

import {
  MeshTransmissionMaterial,
  Decal,
  Instance,
  Instances,
  useGLTF,
  Environment,
} from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";
import TextureShape from "../Util/TextureRender.tsx";
import face from "../../../assets/models/face.glb";
import { useTransmissionProps } from "../Util/Transmission";

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

const Lens: React.FC<LensProps> = (
  {
    scale = 1,
    position = new Vector3(0, 0, 0),
    text = "Hi!",
    textSize = 1,
    font = "",
  },
  props
) => {
  const lensRef = useRef<Mesh>(null);
  const { nodes, materials } = useGLTF(face);
  const transmissionProps = useControls("Lens", {
    backside: true,
    ior: { value: 1.54, min: 1, max: 5, step: 0.01 },
    thickness: { value: 200, min: 0, max: 200, step: 0.01 },
    chromaticAberration: { value: 1.0, min: 0, max: 1 },
    anisotropy: { value: 0, min: 0, max: 10, step: 0.01 },
    distortionScale: { value: 0, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0, min: 0, max: 1, step: 0.01 },
  });

  const { material, propsies } = useTransmissionProps();

  const glassMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(1, 1, 1), // Set color to white
    metalness: 0.3, // Set metalness to 1 for a reflective effect
    roughness: 0.1, // Set roughness to 0.1 for a slightly rough surface
    transparent: true, // Set transparent to true to allow for transparency
    opacity: 1, // Set opacity to 0.5 to make the material semi-transparent
  });

  return (
    <>
      <group>
        <directionalLight intensity={2} color={"white"} />
        <mesh scale={scale} position={position} ref={lensRef} renderOrder={2}>
          <group
            {...props}
            dispose={null}
            scale={0.02}
            position={[8, 0.4, 0]}
            rotation={[0, 0.6, 0]}
          >
            <group rotation={[1.96, 1.34, 2.53]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_2.geometry}
                material={glassMaterial}
              />

              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_3.geometry}
                material={glassMaterial}
              />

              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4.geometry}
                material={glassMaterial}
              />

              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_5.geometry}
                material={glassMaterial}
              />

              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_6.geometry}
                material={glassMaterial}
              />

              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_7.geometry}
                material={glassMaterial}
              />
            </group>
          </group>
          {material}
          {/* <Decal position={[0, 0, 1]} rotation={0} scale={1.25}>
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
        </Decal> */}
        </mesh>
      </group>
    </>
  );
};

export default Lens;
