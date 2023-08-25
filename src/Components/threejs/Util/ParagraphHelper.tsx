import React, { useEffect, useRef } from "react";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { MeshStandardMaterial, ShaderMaterial, Vector3, Euler } from "three";

interface Paragraph {
  text: string;
  color: string;
  scale: number;
  lineHeight: number;
  anchorX?: number | "center" | "left" | "right";
  anchorY?:
    | number
    | "bottom"
    | "top"
    | "middle"
    | "top-baseline"
    | "bottom-baseline";
  position: Vector3;
  rotation: Euler;
  font?: any;
  fnOver?: () => any;
  fnOut?: () => any;
  fnClick?: () => any;
  material: ShaderMaterial | MeshStandardMaterial;
}

// generate paragraphs and text
const ParagraphHelper: React.FC<Paragraph> = ({
  text = "Hello",
  scale = 0.5,
  lineHeight = 1,
  anchorX = 0,
  anchorY = 0,
  position = new Vector3(0, 0, 0),
  rotation = new Euler(0, 0, 0),
  font = "",
  fnClick,
  material,
}) => {
  const textRef = useRef<any>();

  // send position count attributes to the Text element
  useEffect(() => {
    if (!textRef.current) return;
    const count = textRef.current?.geometry.attributes.position.count;
    const randomCountArray = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      randomCountArray[i] = Math.random();
    }
    textRef.current.geometry.setAttribute(
      "aRandom",
      new THREE.BufferAttribute(randomCountArray, 1)
    );
  }, []);

  // const textShaderMaterial = new THREE.ShaderMaterial({
  //   vertexShader: vertexShader,
  //   fragmentShader: fragmentShader,
  //   uniforms: {
  //     uTime: { value: 0 },
  //     positions: { value: 0 },
  //   },
  // });

  // const textStandardMaterial = new THREE.MeshStandardMaterial({
  //   color: "whitesmoke",
  //   toneMapped: true,
  //   blending: THREE.AdditiveBlending,
  // });

  // chooses the shader or standard material based on isShade
  // const isShaderMaterial = shade ? textShaderMaterial : textStandardMaterial;

  return (
    <Text
      scale={scale}
      lineHeight={lineHeight}
      anchorX={anchorX}
      anchorY={anchorY}
      position={position}
      font={font}
      onClick={fnClick}
      ref={textRef}
      material={material}
      rotation={rotation}
    >
      {text}
    </Text>
  );
};

export default ParagraphHelper;
