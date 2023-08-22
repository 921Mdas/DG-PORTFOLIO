// External imports
import React from "react";
import { useGLTF } from "@react-three/drei";

// components
import SoftwareText from "../../../assets/models/textopath.glb";
import AboutMeText from "../../../assets/models/aboutme.glb";

export const SftText = props => {
  const { nodes, materials } = useGLTF(SoftwareText);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.love.geometry}
        position={[3.143, -0.817, 1.533]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <meshBasicMaterial />
    </group>
  );
};

export const AbtMeText = props => {
  const { nodes, materials } = useGLTF(AboutMeText);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text002.geometry}
        position={[0.114, 1.028, -1.7]}
        rotation={[Math.PI / 2, 0, 0.633]}
      >
        <meshBasicMaterial />
      </mesh>
    </group>
  );
};

useGLTF.preload(SoftwareText);
useGLTF.preload(AboutMeText);
