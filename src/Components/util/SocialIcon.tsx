import React from "react";
import { Vector3 } from "three";
import TextureShape from "../Components/TextureRender.tsx";

interface Social {
  scale: Vector3;
}

const SocialIcon: React.FC<Social> = () => {
  const scaleValue = 0.1;
  const positionX = 0.2;
  const groupPositionY = 0.3;

  return (
    <>
      <group position={[0, -groupPositionY, 0]}>
        <mesh
          position={[positionX, 0, 0]}
          scale={[scaleValue, scaleValue, scaleValue]}
        >
          <boxGeometry />
        </mesh>
        <mesh position={[0, 0, 0]} scale={[scaleValue, scaleValue, scaleValue]}>
          <boxGeometry />
          <meshStandardMaterial color="red">
            <TextureShape text={"in"} />
          </meshStandardMaterial>
        </mesh>
        <mesh
          position={[-positionX, 0, 0]}
          scale={[scaleValue, scaleValue, scaleValue]}
        >
          <boxGeometry />
        </mesh>
      </group>
      <mesh position={[0, -0.5, 0]} rotation={[Math.PI, 0, 0]}>
        <boxGeometry args={[1, 0.1, 1]} />
        <meshBasicMaterial transparent opacity={0.9} />
      </mesh>
    </>
  );
};

export default SocialIcon;
