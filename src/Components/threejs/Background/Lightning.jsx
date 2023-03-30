import { useGLTF } from "@react-three/drei";
import lightning from "../../../assets/models/lightning.glb";

export function Lightning(props) {
  const { nodes, materials } = useGLTF(lightning);
  return (
    <group {...props} dispose={null} position={[0, -0.3, 0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.001}>
          <group
            position={[34.51, -75.24, 59.71]}
            rotation={[3.01, -0.14, 2.94]}
            scale={1.27}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.th_bolt001_lighiting_0.geometry}
              material={materials.lighiting}
            />
          </group>
        </group>
      </group>
    </group>
  );
}
export function Lightning02(props) {
  const { nodes, materials } = useGLTF(lightning);
  return (
    <group {...props} dispose={null} position={[0, 0.7, -0.1]}>
      <group rotation={[-Math.PI / 2, 1, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.001}>
          <group
            position={[689.95, 36.55, 59.65]}
            rotation={[3.02, -0.15, 2.97]}
            scale={[-0.99, 0.99, 0.99]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.th_bolt000_lighiting_0.geometry}
              material={materials.lighiting}
            />
          </group>
        </group>
      </group>
    </group>
  );
}
