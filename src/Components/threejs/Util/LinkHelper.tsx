import React, { useEffect, useState, useRef } from "react";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { Vector3 } from "three";
import Rubik from "../../../assets/Fonts/RubikBold.ttf";

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

const LinkHelper: React.FC<Paragraph> = ({
  text = "Hello",
  color = "whitesmoke",
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
  const material = new THREE.MeshStandardMaterial({
    color: "whitesmoke",
  });

  const [hovered, setHovered] = useState(false);
  const ref = useRef<any>();

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = "pointer";
      ref.current.color = "#28283e";
    }
    return () => {
      document.body.style.cursor = "auto";
      ref.current.color = "whitesmoke";
    };
  }, [hovered]);

  return (
    <Text
      ref={ref}
      color={color}
      scale={scale}
      lineHeight={lineHeight}
      anchorX={anchorX}
      anchorY={anchorY}
      material={material}
      position={position}
      font={font}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={fnClick}
    >
      {text}
    </Text>
  );
};

export default LinkHelper;
