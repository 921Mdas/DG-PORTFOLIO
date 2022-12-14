import { Text } from "@react-three/drei";
import fontCharacter from "../../assets/Fonts/Inter_Bold.json";

const TextElement = props => {
  return (
    <Text {...props} font={fontCharacter}>
      <meshBasicMaterial color={props.color} />
    </Text>
  );
};

const TextHeadLine = ({ size, color, x, y, text }) => {
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
        text={text}
      />
    </group>
  );
};

export default TextHeadLine;
