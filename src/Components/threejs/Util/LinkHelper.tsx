import React, { useEffect, useState, useRef } from "react";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { Vector3 } from "three";

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
  font?: any;
  fnOver?: () => any;
  fnOut?: () => any;
  fnClick?: () => any;
  material: any;
}

const LinkHelper: React.FC<Paragraph> = ({
  text = "Hello",
  color = "grey",
  scale = 0.5,
  lineHeight = 1,
  anchorX = 0,
  anchorY = 0,
  position = new Vector3(0, 0, 0),
  font = "",
  fnOver,
  fnOut,
  fnClick,
  material = new THREE.MeshStandardMaterial({
    color: "white",
  }),
}) => {
  const ref = useRef<any>();
  const [hovered, setHovered] = useState<boolean>(false);
  // const material = new THREE.MeshStandardMaterial({
  //   color: "whitesmoke",
  // });

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = "pointer";
    }
    return () => {
      document.body.style.cursor = "auto";
      // eslint-disable-next-line react-hooks/exhaustive-deps
      // ref.current.color = "white";
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
