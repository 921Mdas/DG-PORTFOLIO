import React from "react";
import { Text } from "@react-three/drei";
import fontCharacter from "../assets/Fonts/Inter_Bold.json";

const TextElement = props => {
  return (
    <Text {...props} font={fontCharacter}>
      <meshBasicMaterial color={"white"} />
    </Text>
  );
};

const TextHeadLine = ({ size, color, x, y }) => {
  const fontSize = size;
  const fontColor = color;
  const anchorX = x;
  const anchorY = y;
  const start = 0.7;
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789!";

  return (
    <group>
      <TextElement
        fontSize={fontSize}
        characters={characters}
        anchorX={anchorX}
        anchorY={anchorY}
        maxWidth={300}
        position={[start, 1, 0]}
        color={fontColor}
        text="I BUILD"
      />
      <TextElement
        fontSize={fontSize}
        characters={characters}
        anchorX={anchorX}
        anchorY={anchorY}
        maxWidth={300}
        position={[start, -0.5, 0]}
        color={fontColor}
        text="WEB"
      />
      <TextElement
        fontSize={fontSize}
        characters={characters}
        anchorX={anchorX}
        anchorY={anchorY}
        maxWidth={300}
        position={[start, -2, 0]}
        color={fontColor}
        text="APPS"
      />
    </group>
  );
};

export default TextHeadLine;
