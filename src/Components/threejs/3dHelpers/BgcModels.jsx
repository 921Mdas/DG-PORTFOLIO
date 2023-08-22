// External imports
import React, {
  useRef,
  useLayoutEffect,
  useEffect,
  useMemo,
  forwardRef,
} from "react";
import * as THREE from "three";
import { useControls } from "leva";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "react-three-fiber";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Debug, Physics, RigidBody } from "@react-three/rapier";
import { MathUtils, MeshStandardMaterial } from "three";
import deo from "../../../assets/models/deo.glb";
import Lens from "../../../assets/models/tfolens.glb";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { Materials } from "../MaterialsHHC/Materials";
import { Instance, Instances } from "@react-three/drei";
import cloudsmaze from "../../../assets/models/cloudsmaze.glb";
import VideoWrap from "./Video";

// Internal imports
import Rbtc from "../../../assets/Fonts/Rbtc.ttf";

// Components

// Models
import Steps from "../../../assets/models/steps.glb";
import cloud from "../../../assets/models/cloud.glb";
import bust from "../../../assets/models/bust.glb";
import SftCurve from "../../../assets/models/softwaretextcurve.glb";
import EyeBall from "../../../assets/models/robotic.glb";
import ComputerRoom from "../../../assets/models/computers.glb";
import BlobFrag from "../../../glsl/blobfrag";
import BlobVert from "../../../glsl/blobvert";
import { Stars } from "@react-three/drei";
// Glb models
export const Foundation = props => {
  const { nodes, materials } = useGLTF(bust);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[0, 1.84, 0]}
        scale={[1, 3.17, 1]}
      />
    </group>
  );
};

export const Rock = props => {
  const { scene } = useGLTF(Steps);
  return <primitive object={scene} {...props} />;
};

export const CustomCloud = props => {
  const { nodes, materials } = useGLTF(cloud);
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.79, 0, -5.26]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Plane001_08_-_Default_0"].geometry}
              material={materials["08_-_Default"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

export const SftwareTextCurve = props => {
  const { nodes, materials } = useGLTF(SftCurve);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve003.geometry}
        position={[3.829, -1.682, 2.402]}
        rotation={[Math.PI / 2, 1.055, -1.558]}
      >
        <meshBasicMaterial wireframe />
      </mesh>
    </group>
  );
};

// export const Computers = props => {
//   const { nodes, materials } = useGLTF(ComputerRoom);
//   return (
//     <group {...props} dispose={null}>
//       <group position={[-2.731, 0.629, -0.522]} rotation={[0, 1.087, 0]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_212.geometry}
//           material={materials.Texture}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_213.geometry}
//           material={materials.Screen}
//         />
//       </group>
//       <group position={[-1.43, 2.496, -1.8]} rotation={[0, 1.002, 0]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_209.geometry}
//           material={materials.Texture}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_210.geometry}
//           material={materials.Screen}
//         />
//       </group>
//       <group
//         position={[-3.417, 3.056, 1.303]}
//         rotation={[0, 1.222, 0]}
//         scale={0.9}
//       >
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_221.geometry}
//           material={materials.Texture}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_222.geometry}
//           material={materials.Screen}
//         />
//       </group>
//       <group position={[0.27, 1.529, -2.613]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_206.geometry}
//           material={materials.Texture}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_207.geometry}
//           material={materials.Screen}
//         />
//       </group>
//       <group
//         position={[3.11, 2.145, -0.18]}
//         rotation={[0, -0.793, 0]}
//         scale={0.81}
//       >
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_218.geometry}
//           material={materials.Texture}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_219.geometry}
//           material={materials.Screen}
//         />
//       </group>
//       <group position={[1.845, 0.377, -1.771]} rotation={[0, -Math.PI / 9, 0]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_215.geometry}
//           material={materials.Texture}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_216.geometry}
//           material={materials.Screen}
//         />
//       </group>
//       <group position={[-3.899, 4.287, -2.642]} rotation={[0, 0.539, 0]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_224.geometry}
//           material={materials.Texture}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_225.geometry}
//           material={materials.Screen}
//         />
//       </group>
//       <group
//         position={[0.955, 4.282, -4.203]}
//         rotation={[0.003, -0.647, 0.003]}
//       >
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_227.geometry}
//           material={materials.Texture}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_228.geometry}
//           material={materials.Screen}
//         />
//       </group>
//       <group position={[4.683, 4.29, -1.558]} rotation={[0, -Math.PI / 3, 0]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_230.geometry}
//           material={materials.Texture}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_231.geometry}
//           material={materials.Screen}
//         />
//       </group>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_4.geometry}
//         material={materials.Texture}
//         position={[0.165, 0.794, -1.972]}
//         rotation={[-0.544, 0.929, -1.119]}
//         scale={0.5}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_6.geometry}
//         material={materials.Texture}
//         position={[-2.793, 0.27, 1.816]}
//         rotation={[-1.44, 1.219, 1.432]}
//         scale={0.5}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_8.geometry}
//         material={materials.Texture}
//         position={[-5.603, 4.615, -0.027]}
//         rotation={[-1.955, 0.163, 1.202]}
//         scale={0.5}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_10.geometry}
//         material={materials.Texture}
//         position={[2.621, 1.985, -2.473]}
//         rotation={[-0.419, -0.704, -1.851]}
//         scale={0.5}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_12.geometry}
//         material={materials.Texture}
//         position={[4.598, 3.459, 1.19]}
//         rotation={[-1.236, -0.719, 0.48]}
//         scale={0.5}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_16.geometry}
//         material={materials.Texture}
//         position={[0.63, 0, -3]}
//         rotation={[0, 0.17, 0]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_20.geometry}
//         material={materials.Texture}
//         position={[-2.36, 0.32, -2.018]}
//         rotation={[0, 0.534, -Math.PI / 2]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_24.geometry}
//         material={materials.Texture}
//         position={[-2.424, 0.938, -2.247]}
//         rotation={[0, 0.136, Math.PI / 2]}
//         scale={-1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_32.geometry}
//         material={materials.Texture}
//         position={[-3.528, 0, 0.586]}
//         rotation={[Math.PI, -1.085, Math.PI]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_36.geometry}
//         material={materials.Texture}
//         position={[-3.528, 1.528, 0.586]}
//         rotation={[0, 0.911, 0]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_40.geometry}
//         material={materials.Texture}
//         position={[3.423, 0, 0.005]}
//         rotation={[-Math.PI, 1.127, -Math.PI]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_48.geometry}
//         material={materials.Texture}
//         position={[4.086, 2.183, 2.41]}
//         rotation={[0, -1.548, 1.571]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_52.geometry}
//         material={materials.Texture}
//         position={[4.314, 1.565, 2.343]}
//         rotation={[0, -1.149, -Math.PI / 2]}
//         scale={-1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_58.geometry}
//         material={materials.Texture}
//         position={[-3.79, 0, 1.656]}
//         rotation={[Math.PI, -1.393, 0]}
//         scale={-1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_60.geometry}
//         material={materials.Texture}
//         position={[-3.79, 1.528, 1.656]}
//         rotation={[0, 1.218, -Math.PI]}
//         scale={-1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_62.geometry}
//         material={materials.Texture}
//         position={[-3.693, 0, 2.585]}
//         rotation={[0, -1.568, 0]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_64.geometry}
//         material={materials.Texture}
//         position={[-5.36, 2.183, 0.811]}
//         rotation={[0, 0.772, Math.PI / 2]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_68.geometry}
//         material={materials.Texture}
//         position={[-5.564, 1.565, 0.69]}
//         rotation={[0, 1.171, -Math.PI / 2]}
//         scale={-1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_72.geometry}
//         material={materials.Texture}
//         position={[-5.474, 2.794, 0.745]}
//         rotation={[Math.PI, -1.155, Math.PI / 2]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_76.geometry}
//         material={materials.Texture}
//         position={[-5.289, 3.412, 0.894]}
//         rotation={[Math.PI, -0.757, -Math.PI / 2]}
//         scale={-1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_80.geometry}
//         material={materials.Texture}
//         position={[-5.283, 0, -2.328]}
//         rotation={[0, 0.755, 0]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_84.geometry}
//         material={materials.Texture}
//         position={[-5.486, 0, -1.385]}
//         rotation={[Math.PI, -0.985, Math.PI]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_88.geometry}
//         material={materials.Texture}
//         position={[-3.012, 0, -3.79]}
//         rotation={[0, 0.597, 0]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_92.geometry}
//         material={materials.Texture}
//         position={[-2.082, 0, -4.324]}
//         rotation={[Math.PI, -0.597, Math.PI]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_94.geometry}
//         material={materials.Texture}
//         position={[-1.016, 0, -4.489]}
//         rotation={[0, 0.308, 0]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_98.geometry}
//         material={materials.Texture}
//         position={[-5.315, 1.833, -1.412]}
//         rotation={[0, 1.062, Math.PI / 2]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_100.geometry}
//         material={materials.Texture}
//         position={[-4.181, 1.833, -3.064]}
//         rotation={[-Math.PI, -0.465, -Math.PI / 2]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_102.geometry}
//         material={materials.Texture}
//         position={[-1.758, 1.833, -3.605]}
//         rotation={[0, -1.165, Math.PI / 2]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_104.geometry}
//         material={materials.Texture}
//         position={[-0.254, 1.833, -5.542]}
//         rotation={[0, 1.553, 1.571]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_108.geometry}
//         material={materials.Texture}
//         position={[-5.283, 2.143, -2.328]}
//         rotation={[Math.PI, -0.755, Math.PI]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_112.geometry}
//         material={materials.Texture}
//         position={[-5.486, 2.143, -1.385]}
//         rotation={[0, 0.985, 0]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_116.geometry}
//         material={materials.Texture}
//         position={[-3.012, 2.143, -3.79]}
//         rotation={[Math.PI, -0.597, Math.PI]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_120.geometry}
//         material={materials.Texture}
//         position={[-2.082, 2.143, -4.324]}
//         rotation={[0, 0.597, 0]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_122.geometry}
//         material={materials.Texture}
//         position={[-1.016, 2.143, -4.489]}
//         rotation={[Math.PI, -0.308, Math.PI]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_126.geometry}
//         material={materials.Texture}
//         position={[-5.315, 3.976, -1.412]}
//         rotation={[0, 1.062, Math.PI / 2]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_128.geometry}
//         material={materials.Texture}
//         position={[-4.181, 3.976, -3.064]}
//         rotation={[-Math.PI, -0.465, -Math.PI / 2]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_130.geometry}
//         material={materials.Texture}
//         position={[-1.173, 3.976, -4.449]}
//         rotation={[0, 0.168, Math.PI / 2]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_132.geometry}
//         material={materials.Texture}
//         position={[-0.941, 3.976, -4.664]}
//         rotation={[Math.PI, 0.018, -Math.PI / 2]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_140.geometry}
//         material={materials.Texture}
//         position={[5.531, 2.183, 0.174]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_144.geometry}
//         material={materials.Texture}
//         position={[5.736, 1.565, 0.053]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_148.geometry}
//         material={materials.Texture}
//         position={[5.646, 2.794, 0.107]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_152.geometry}
//         material={materials.Texture}
//         position={[5.461, 3.412, 0.256]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_156.geometry}
//         material={materials.Texture}
//         position={[4.856, 0, -2.541]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_160.geometry}
//         material={materials.Texture}
//         position={[5.059, 0, -1.597]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_164.geometry}
//         material={materials.Texture}
//         position={[2.585, 0, -4.002]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_168.geometry}
//         material={materials.Texture}
//         position={[1.655, 0, -4.536]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_170.geometry}
//         material={materials.Texture}
//         position={[0.59, 0, -4.701]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_172.geometry}
//         material={materials.Texture}
//         position={[4.888, 1.833, -1.624]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_174.geometry}
//         material={materials.Texture}
//         position={[3.754, 1.833, -3.277]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_176.geometry}
//         material={materials.Texture}
//         position={[1.332, 1.833, -3.817]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_180.geometry}
//         material={materials.Texture}
//         position={[4.856, 2.143, -2.541]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_184.geometry}
//         material={materials.Texture}
//         position={[5.059, 2.143, -1.597]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_188.geometry}
//         material={materials.Texture}
//         position={[2.585, 2.143, -4.002]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_192.geometry}
//         material={materials.Texture}
//         position={[1.655, 2.143, -4.536]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_194.geometry}
//         material={materials.Texture}
//         position={[0.59, 2.143, -4.701]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_196.geometry}
//         material={materials.Texture}
//         position={[4.888, 3.976, -1.624]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_198.geometry}
//         material={materials.Texture}
//         position={[3.754, 3.976, -3.277]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_200.geometry}
//         material={materials.Texture}
//         position={[0.746, 3.976, -4.662]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_18.geometry}
//         material={materials.Texture}
//         position={[-0.186, 0, -2.962]}
//         rotation={[0, -0.064, 0]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_22.geometry}
//         material={materials.Texture}
//         position={[-2.288, 1.56, -2.263]}
//         rotation={[0, -0.012, -Math.PI / 2]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_26.geometry}
//         material={materials.Texture}
//         position={[-2.195, 2.188, -1.867]}
//         rotation={[0, 0.512, Math.PI / 2]}
//         scale={-1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_34.geometry}
//         material={materials.Texture}
//         position={[-2.896, 0.3, -1.466]}
//         rotation={[Math.PI, -1.347, Math.PI / 2]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_42.geometry}
//         material={materials.Texture}
//         position={[3.224, 0, -0.804]}
//         rotation={[0, -1.324, 0]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_44.geometry}
//         material={materials.Texture}
//         position={[3.53, 1.834, 0.44]}
//         rotation={[-Math.PI, 1.324, Math.PI / 2]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_50.geometry}
//         material={materials.Texture}
//         position={[4.255, 0.943, 2.219]}
//         rotation={[0, -1.002, Math.PI / 2]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_54.geometry}
//         material={materials.Texture}
//         position={[3.87, 0.315, 2.35]}
//         rotation={[0, -1.526, -1.571]}
//         scale={-1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_66.geometry}
//         material={materials.Texture}
//         position={[-5.614, 0.943, 0.817]}
//         rotation={[0, 1.318, 1.571]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_70.geometry}
//         material={materials.Texture}
//         position={[-5.257, 0.315, 1.01]}
//         rotation={[0, 0.795, -Math.PI / 2]}
//         scale={-1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_74.geometry}
//         material={materials.Texture}
//         position={[-5.39, 4.034, 0.986]}
//         rotation={[Math.PI, -0.609, Math.PI / 2]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_78.geometry}
//         material={materials.Texture}
//         position={[-5.696, 4.662, 0.718]}
//         rotation={[Math.PI, -1.133, -Math.PI / 2]}
//         scale={-1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_82.geometry}
//         material={materials.Texture}
//         position={[-5.952, 0, -0.641]}
//         rotation={[0, 0.953, 0]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_86.geometry}
//         material={materials.Texture}
//         position={[-4.476, 0, -2.749]}
//         rotation={[Math.PI, -0.568, Math.PI]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_90.geometry}
//         material={materials.Texture}
//         position={[-3.716, 0, -2.886]}
//         rotation={[0, 0.644, 0]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_96.geometry}
//         material={materials.Texture}
//         position={[-0.084, 0, -5.026]}
//         rotation={[Math.PI, -0.039, Math.PI]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_106.geometry}
//         material={materials.Texture}
//         position={[-4.194, 1.836, -2.768]}
//         rotation={[Math.PI, -0.655, -Math.PI / 2]}
//         scale={-1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_110.geometry}
//         material={materials.Texture}
//         position={[-5.952, 2.143, -0.641]}
//         rotation={[Math.PI, -0.953, Math.PI]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_114.geometry}
//         material={materials.Texture}
//         position={[-4.476, 2.143, -2.749]}
//         rotation={[0, 0.568, 0]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_118.geometry}
//         material={materials.Texture}
//         position={[-3.727, 2.143, -3.1]}
//         rotation={[Math.PI, -0.644, Math.PI]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_124.geometry}
//         material={materials.Texture}
//         position={[-0.084, 2.143, -5.026]}
//         rotation={[0, 0.039, 0]}
//         scale={1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_134.geometry}
//         material={materials.Texture}
//         position={[-4.194, 3.979, -2.768]}
//         rotation={[Math.PI, -0.655, -Math.PI / 2]}
//         scale={-1.52}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_142.geometry}
//         material={materials.Texture}
//         position={[5.786, 0.943, 0.18]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_146.geometry}
//         material={materials.Texture}
//         position={[5.428, 0.315, 0.373]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_150.geometry}
//         material={materials.Texture}
//         position={[5.562, 4.034, 0.348]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_154.geometry}
//         material={materials.Texture}
//         position={[5.868, 4.662, 0.081]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_158.geometry}
//         material={materials.Texture}
//         position={[5.525, 0, -0.854]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_162.geometry}
//         material={materials.Texture}
//         position={[4.05, 0, -2.962]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_166.geometry}
//         material={materials.Texture}
//         position={[3.289, 0, -3.098]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_178.geometry}
//         material={materials.Texture}
//         position={[3.767, 1.836, -2.98]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_182.geometry}
//         material={materials.Texture}
//         position={[5.525, 2.143, -0.854]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_186.geometry}
//         material={materials.Texture}
//         position={[4.05, 2.143, -2.962]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_190.geometry}
//         material={materials.Texture}
//         position={[3.3, 2.143, -3.312]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_202.geometry}
//         material={materials.Texture}
//         position={[3.767, 3.979, -2.98]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_28.geometry}
//         material={materials.Texture}
//         position={[0.353, 2.352, -3.336]}
//         rotation={[-0.255, 0, 0]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_30.geometry}
//         material={materials.Texture}
//         position={[0.183, 2.801, -2.854]}
//         rotation={[0.093, 0.146, -0.014]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_38.geometry}
//         material={materials.Texture}
//         position={[1.895, 0, -1.944]}
//         rotation={[0, -0.436, 0]}
//         scale={[1.5, 1, 1.5]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_46.geometry}
//         material={materials.Texture}
//         position={[1.862, 1.61, -1.807]}
//         rotation={[0, -Math.PI / 3, 0]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_56.geometry}
//         material={materials.Texture}
//         position={[3.954, 2.491, 1.607]}
//         rotation={[0, -Math.PI / 3, 0]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_136.geometry}
//         material={materials.Texture}
//         position={[-1.095, 4.291, -4.434]}
//         rotation={[0, 0.357, 0]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_138.geometry}
//         material={materials.Texture}
//         position={[-5.246, 4.291, -1.466]}
//         rotation={[0, 1.246, 0]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_204.geometry}
//         material={materials.Texture}
//         position={[3.198, 4.291, -3.092]}
//         rotation={[-Math.PI, 0.563, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Sphere.geometry}
//         material={materials.led}
//         position={[-0.408, 1.095, -2.212]}
//         scale={0.009}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Sphere001.geometry}
//         material={materials.led}
//         position={[0.588, 1.323, -2.222]}
//         scale={0.009}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Sphere002.geometry}
//         material={materials.led}
//         position={[1.772, 1.909, -1.165]}
//         scale={0.009}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Sphere003.geometry}
//         material={materials.led}
//         position={[2.438, 1.096, -0.786]}
//         scale={0.009}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Sphere004.geometry}
//         material={materials.led}
//         position={[4.868, 3.799, -0.097]}
//         scale={0.009}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Sphere005.geometry}
//         material={materials.led}
//         position={[1.93, 3.795, -3.69]}
//         scale={0.009}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Sphere006.geometry}
//         material={materials.led}
//         position={[-2.346, 3.799, -3.479]}
//         scale={0.009}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Sphere007.geometry}
//         material={materials.led}
//         position={[-4.706, 4.589, -1.812]}
//         scale={0.009}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Sphere008.geometry}
//         material={materials.led}
//         position={[-3.032, 2.853, 1.195]}
//         scale={0.009}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Sphere009.geometry}
//         material={materials.led}
//         position={[-1.206, 1.731, -1.489]}
//         scale={0.009}
//       />
//     </group>
//   );
// };

// Geometries
export const CustomPlane = ({ args, position, rotation, color }) => {
  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={args} />;
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  );
};

export const Ball = ({ scale, position, color }) => {
  return (
    <mesh position={position} scale={scale}>
      <sphereGeometry />;
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  );
};

export const Blob = forwardRef((props, forwardedRef) => {
  const mesh = useRef();
  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.3 },
    };
  }, []);

  useFrame(state => {
    const { clock } = state;
    if (mesh.current) {
      mesh.current.material.uniforms.u_time.value =
        0.4 * clock.getElapsedTime();

      mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        mesh.current.material.uniforms.u_intensity.value,
        0.15,
        0.02
      );
    }
  });

  return (
    <mesh
      ref={meshRef => {
        mesh.current = meshRef;
        if (forwardedRef) {
          if (typeof forwardedRef === "function") {
            forwardedRef(meshRef);
          } else {
            forwardedRef.current = meshRef;
          }
        }
      }}
      scale={0.2}
      {...props}
    >
      <icosahedronGeometry args={[2, 20]} />
      <shaderMaterial
        vertexShader={BlobVert}
        fragmentShader={BlobFrag}
        uniforms={uniforms}
      />
    </mesh>
  );
});

export const Eye = props => {
  const { nodes, materials } = useGLTF(EyeBall);
  const material = new THREE.MeshBasicMaterial({ color: "red" });
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.056}>
        <group rotation={[-0.062, 0.001, -0.031]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Eyeball_Segment_Low_Poly_0.geometry}
            material={materials.White_Plastic}
          />
          <group position={[0, -1.444, 0]} scale={0.711}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera005_0.geometry}
              material={materials.Camera_Plastic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera005_1.geometry}
              material={materials.Camera_Lens}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Eyeball_Segment_Low_Poly002_0.geometry}
            material={materials.White_Plastic}
            rotation={[Math.PI, -Math.PI / 3, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Eyeball_Segment_Low_Poly001_0.geometry}
            material={materials.White_Plastic}
            rotation={[-Math.PI, Math.PI / 3, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Battery_0.geometry}
            material={materials.Copper}
            position={[0, -1.444, 0]}
            rotation={[Math.PI, -Math.PI / 3, Math.PI]}
            scale={0.711}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Battery002_0.geometry}
            material={materials.Copper}
            position={[0, -1.444, 0]}
            rotation={[-Math.PI, 1.047, -Math.PI]}
            scale={0.711}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Battery001_0.geometry}
            material={materials.Copper}
            position={[0, -1.444, 0]}
            scale={0.711}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Armature002_0.geometry}
            material={materials["Metal.001"]}
            position={[0, 0.832, -0.001]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_Low_Poly_0.geometry}
            material={materials.Black_Plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve005_0.geometry}
            material={materials["BezierCurve.006_0"]}
            position={[-0.378, -0.902, 0.818]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Clip_0.geometry}
            material={materials.Metal}
            position={[0, 0.911, -0.697]}
            rotation={[-0.946, 0, 0]}
            scale={[0.145, 0.061, 0.061]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Lens_Low_Poly_0.geometry}
            material={materials.Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Light_Low_Poly_0.geometry}
            material={materials.Light}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve006_0.geometry}
          material={materials["BezierCurve.006_0"]}
          position={[-0.378, -0.902, 0.818]}
        />
      </group>
    </group>
  );
};

export const CloudMaze = props => {
  const { nodes, materials } = useGLTF(cloudsmaze);
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.003}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sky_Mat_0.geometry}
            material={materials.material}
            position={[51.637, 0, -817.579]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Boot_Finaal_1_Boot_Finaal_0.geometry}
            material={materials.Boot_Finaal}
            position={[7.534, -7.801, -688.476]}
            rotation={[0, -0.6, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cloud_Poly_Poly_0.geometry}
            material={materials.Poly}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cloud_1_Cloud_1_0.geometry}
            material={materials.Cloud_1}
            position={[-102.342, -152.023, -1209.99]}
            rotation={[1.917, 0.433, 0.911]}
            scale={1.5}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cloud_2_Cloud_2_0.geometry}
            material={materials.Cloud_2}
            position={[333.052, -63.933, -1541.733]}
            rotation={[-2.901, 0.214, -1.167]}
            scale={1.5}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cloud_3_Cloud_3_0.geometry}
            material={materials.Cloud_3}
            position={[339.375, -70.968, -1571.745]}
            rotation={[2.892, -1.308, 3.083]}
            scale={1.189}
          />
        </group>
      </group>
    </group>
  );
};

export const ProjectLens = props => {
  const { nodes } = useGLTF(Lens);
  const material = new Materials();
  const config = {
    color: "red",
    metalness: 0.1,
    roughness: 0.8,
    transparent: true,
    opacity: 0.8,
    envMapIntensity: 1,
  };
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        scale={[1, 0.402, 1]}
      >
        {material.standard(config)}
      </mesh>
    </group>
  );
};

export const ProjectLensTransParent = props => {
  const config = useControls("lensTFO", {
    thickness: { value: 1.5, min: 0, max: 200, step: 0.01 },
    ior: { value: 1.2, min: 1, max: 5, step: 0.01 },
    chromaticAberration: { value: 0.04, min: 0, max: 1 },
    anisotropy: { value: 0.1, min: 0, max: 10, step: 0.01 },
  });

  const { nodes, materials } = useGLTF(Lens);
  const material = new Materials();

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        scale={[1, 0.402, 1]}
      >
        {/* <MeshTransmissionMaterial {...config} /> */}
        {material.glass(config)}
      </mesh>
    </group>
  );
};
export const CylinderWall = props => {
  const config = useControls("lensTFO", {
    thickness: { value: 1.5, min: 0, max: 200, step: 0.01 },
    ior: { value: 1.2, min: 1, max: 5, step: 0.01 },
    chromaticAberration: { value: 0.04, min: 0, max: 1 },
    anisotropy: { value: 0.1, min: 0, max: 10, step: 0.01 },
  });

  const { nodes, materials } = useGLTF(Lens);
  const material = new Materials();

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        scale={[1, 0.402, 1]}
      >
        {/* <MeshTransmissionMaterial {...config} /> */}
        {material.glass(config)}
      </mesh>
    </group>
  );
};

export const DEOTEXT = props => {
  const { nodes, materials } = useGLTF(deo);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text003.geometry}
        material={materials["Material.001"]}
        position={[1.44, 0.029, 4.844]}
        rotation={[Math.PI / 2, 0, 0.633]}
      />
    </group>
  );
};

export const Line = ({ position, rotation, size, color }) => {
  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={size} />
      <meshBasicMaterial color="red" transparent opacity={0.2} />
    </mesh>
  );
};

export const Cell = props => {
  return (
    <group {...props} scale={0.01}>
      <Instance />
    </group>
  );
};

export const Cells = () => {
  const randomVector = r => [
    r / 2 - Math.random() * r,
    r / 2 - Math.random() * r,
    (r / 2) * Math.random() * r,
  ];
  const randomEuler = () => [
    Math.random() * Math.PI,
    Math.random() * Math.PI,
    Math.random() * Math.PI,
  ];
  const data = Array.from({ length: 150 }, (r = 10) => ({
    random: Math.random(),
    position: randomVector(r),
    rotation: randomEuler(),
  }));

  return (
    <group position-z={-60}>
      <Instances range={100}>
        <sphereGeometry />
        <meshBasicMaterial />
        {data.map((props, i) => {
          return <Cell key={i} {...props} />;
        })}
      </Instances>
    </group>
  );
};

// preloads
const modelsToPreload = [ComputerRoom, Lens, deo];
modelsToPreload.forEach(model => useGLTF.preload(model));
