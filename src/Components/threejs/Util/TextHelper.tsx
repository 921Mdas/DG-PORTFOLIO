import { Text } from "@react-three/drei";
import { Vector3, Color } from "react-three-fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { useControls } from "leva";
import inter_v12 from "../../../assets/Fonts/Inter_Bold.json";

type TextEl = {
  font?: any;
  fontSize?: number;
  characters?: string;
  anchorX?: number | "center" | "left" | "right";
  anchorY?:
    | number
    | "bottom"
    | "top"
    | "middle"
    | "top-baseline"
    | "bottom-baseline";
  maxWidth?: number;
  position?: Vector3;
  color?: Color;
  text?: string;
  letterSpacing?: number;
  lineHeight?: number;
  fontWeight?: string | number;
  style: object;
  glass: boolean;
};

const TextElement: React.FC<TextEl> = props => {
  const transmissionProps = useControls("main text", {
    backside: true,
    ior: { value: 1.2, min: 1, max: 5, step: 0.01 },
    thickness: { value: 1.5, min: 0, max: 200, step: 0.01 },
    chromaticAberration: { value: 0.04, min: 0, max: 1 },
    anisotropy: { value: 0.1, min: 0, max: 10, step: 0.01 },
    distortionScale: { value: 0, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0, min: 0, max: 1, step: 0.01 },
  });
  return (
    <Text {...props}>
      {props.glass ? (
        <MeshTransmissionMaterial {...transmissionProps} />
      ) : (
        <meshBasicMaterial color={props.color} toneMapped={false} />
      )}
    </Text>
  );
};

const TextHeadLine: React.FC<TextEl> = ({
  fontSize,
  color,
  anchorX,
  anchorY,
  text,
  letterSpacing,
  fontWeight,
  font = { inter_v12 },
  position = [0.7, 1, 0],
  style,
  glass = false,
}) => {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789!";

  return (
    <>
      <TextElement
        fontSize={fontSize}
        characters={characters}
        anchorX={anchorX}
        anchorY={anchorY}
        maxWidth={300}
        position={position}
        color={color}
        text={text}
        font={font}
        letterSpacing={letterSpacing}
        fontWeight={fontWeight}
        style={style}
        glass={glass}
      />
    </>
  );
};

export default TextHeadLine;
