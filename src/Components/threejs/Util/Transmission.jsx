import { MeshTransmissionMaterial } from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";

export const useTransmissionProps = () => {
  const transmissionProps = useControls("Lens", {
    backside: true,
    ior: { value: 1.54, min: 1, max: 5, step: 0.01 },
    thickness: { value: 200, min: 0, max: 200, step: 0.01 },
    chromaticAberration: { value: 1.0, min: 0, max: 1 },
    anisotropy: { value: 0, min: 0, max: 10, step: 0.01 },
    distortionScale: { value: 0, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0, min: 0, max: 1, step: 0.01 },
    side: THREE.DoubleSide,
  });

  return {
    material: (
      <MeshTransmissionMaterial
        side={THREE.DoubleSide}
        {...transmissionProps}
      />
    ),
    propsies: transmissionProps,
  };
};
