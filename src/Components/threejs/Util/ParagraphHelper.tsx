import React, { useEffect, useState, useRef } from "react";
import { Text, useScroll } from "@react-three/drei";
import * as THREE from "three";
import { Vector3 } from "three";
import Rubik from "../../../assets/Fonts/RubikBold.ttf";
import { useThree } from "react-three-fiber";
import { useFrame } from "react-three-fiber";
interface Paragraph {
  text: string;
  color: string;
  scale: number;
  lineHeight: number;
  anchorX: 'number | "center" | "left" | "right"';
  anchorY: 'number | "center" | "left" | "right"';
  position: Vector3;
  font?: any;
  fnOver?: () => any;
  fnOut?: () => any;
  fnClick?: () => any;
}

const ParagraphHelper: React.FC<Paragraph> = ({
  text = "Hello",
  color = "",
  scale = 0.5,
  lineHeight = 1,
  anchorX = 0,
  anchorY = 0,
  position = new Vector3(0, 0, 0),
  font = "",
  fnOver,
  fnOut,
  fnClick,
}) => {
  const data = useScroll();
  const { width, height } = useThree(state => state.viewport);
  const grp = useRef();

  useFrame(() => {
    // if (grp.current) grp.current.scale.z = 1 + data.range(0, 1 / 3) / 3;
    // console.log(grp.current);
    // data.offset
  });
  const material = new THREE.MeshStandardMaterial({
    color: "red",
    toneMapped: true,
    blending: THREE.AdditiveBlending,
  });

  return (
    <Text
      color={color}
      scale={scale}
      lineHeight={lineHeight}
      anchorX={anchorX}
      anchorY={anchorY}
      material={material}
      position={position}
      font={font}
      onClick={fnClick}
      ref={grp}
    >
      {text}
    </Text>
  );
};

export default ParagraphHelper;
