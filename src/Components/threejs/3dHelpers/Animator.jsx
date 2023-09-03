import { useFrame } from "react-three-fiber";
import { useRef } from "react";
import { MathUtils } from "three";

export const useAnimation = (
  startPos,
  startRot,
  endPos,
  endRot,
  speed = 1.5
) => {
  const ref = useRef(null);

  const initialFontPosition = startPos.clone();
  const initialFontRotation = startRot.clone();
  const finalFontPosition = endPos.clone();
  const finalFontRotation = endRot.clone();

  useFrame((_state, delta) => {
    initialFontPosition.lerp(finalFontPosition, speed * delta);
    initialFontRotation.x = MathUtils.lerp(
      initialFontRotation.x,
      finalFontRotation.x,
      speed * delta
    );
    initialFontRotation.y = MathUtils.lerp(
      initialFontRotation.y,
      finalFontRotation.y,
      speed * delta
    );
    initialFontRotation.z = MathUtils.lerp(
      initialFontRotation.z,
      finalFontRotation.z,
      speed * delta
    );

    ref.current.position.copy(initialFontPosition);
    ref.current.rotation.copy(initialFontRotation);
  });

  return ref;
};
