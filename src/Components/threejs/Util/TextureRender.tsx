import React, { useRef } from "react";
import { RenderTexture, Text, PerspectiveCamera } from "@react-three/drei";

interface TextShape {
  text: string;
  size: number;
  font?: any;
}

const TextureShape: React.FC<TextShape> = ({ text, size = 1, font = "" }) => {
  const textRef = useRef();

  return (
    <>
      <RenderTexture attach="map" anisotropy={16}>
        <PerspectiveCamera
          makeDefault
          manual
          aspect={1 / 1}
          position={[0, 0, 5]}
        />
        {/* <color attach="background" args={["#35c19f"]} /> */}
        <Text
          fontSize={size}
          color="#35c19f"
          ref={textRef}
          rotation={[0, Math.PI, 0]}
          font={font}
        >
          {text}
        </Text>
      </RenderTexture>
    </>
  );
};

export default TextureShape;
