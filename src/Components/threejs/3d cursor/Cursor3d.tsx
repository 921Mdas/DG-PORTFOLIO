import React, { useRef } from "react";
import { Mesh, Vector3 } from "three";
import { useFrame } from "react-three-fiber";
import { easing } from "maath";
import { MeshTransmissionMaterial, Decal } from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";
import TextureShape from "../Util/TextureRender.tsx";
import { useThree } from "@react-three/fiber";

interface CursorProps {
  color?: string;
  scale?: Vector3;
  position: Vector3;
  text: string;
  textSize: number;
}

const Cursor: React.FC<CursorProps> = ({
  scale = 0.3,
  position = new Vector3(0, 0, 0),
  text = "",
  textSize = 1,
}) => {
  const lensRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    const viewport = state.viewport.getCurrentViewport(
      state.camera,
      [0, 0, 15]
    );

    easing.damp3(
      lensRef.current.position,
      [
        (state.pointer.x * viewport.width) / 4,
        (state.pointer.y * viewport.height) / 4,
        0.05,
      ],
      0.3,
      delta
    );
  });

  const transmissionProps = useControls("Cursor", {
    backside: false,
    ior: { value: 1.16, min: 1, max: 5, step: 0.01 },
    thickness: { value: 40, min: 0, max: 200, step: 0.01 },
    chromaticAberration: { value: 0.84, min: 0, max: 1 },
    anisotropy: { value: 2.11, min: 0, max: 10, step: 0.01 },
    distortionScale: { value: 0.58, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 1, min: 0, max: 1, step: 0.01 },
  });

  return (
    <>
      <mesh scale={scale} position={position} ref={lensRef} renderOrder={1}>
        <sphereGeometry args={[1, 16, 8]} />
        <MeshTransmissionMaterial
          side={THREE.DoubleSide}
          {...transmissionProps}
        />
        <Decal position={[0, 0, 0.5]} rotation={0} scale={1.25}>
          <meshBasicMaterial
            transparent
            polygonOffset
            polygonOffsetFactor={-100}
            color={[2, 0.5, 10]}
            side={THREE.DoubleSide}
            toneMapped={false}
          >
            <TextureShape text={text} size={textSize} />
          </meshBasicMaterial>
        </Decal>
      </mesh>
    </>
  );
};

export default Cursor;
