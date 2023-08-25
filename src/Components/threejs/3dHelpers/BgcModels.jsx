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
import HandModel from "../../../assets/models/hand2.glb";
import vertexShaderm from "../../../glsl/mgVert";
import fragmentShaderm from "../../../glsl/mgFrag";

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
import molecule from "../../../assets/models/molecule.glb";
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
  const hover = useRef(false);
  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.3 },
    };
  }, []);

  useFrame(state => {
    const { clock } = state;

    mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();
    // if (mesh.current) {
    //   mesh.current.material.uniforms.u_time.value =
    //     0.4 * clock.getElapsedTime();

    //   mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
    //     mesh.current.material.uniforms.u_intensity.value,
    //     0.15,
    //     0.02
    //   );
    // }

    if (hover) {
      mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        mesh.current.material.uniforms.u_intensity.value,
        hover.current ? 1.2 : 0.15,
        0.04
      );
    }
  });

  return (
    <mesh
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
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

export const Hand = forwardRef((props, forwardedRef) => {
  const { nodes, materials } = useGLTF(HandModel);
  const material = new Materials().standard2();
  const mesh = useRef();
  return (
    <group
      {...props}
      dispose={null}
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
    >
      <group
        position={[0.31, 0.156, 0.154]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
      >
        <group position={[-0.999, -2.259, -0.289]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9.geometry}
            material={material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11.geometry}
            material={material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_13.geometry}
            material={material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_14.geometry}
            material={material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_15.geometry}
            material={material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_16.geometry}
            material={material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_17.geometry}
            material={material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_18.geometry}
            material={material}
          />
        </group>
      </group>
    </group>
  );
});

export const ProjectLens = props => {
  const { nodes } = useGLTF(Lens);
  const material = new Materials();
  const config = {
    color: "white",
    metalness: 0.1,
    roughness: 0.8,
    transparent: true,
    opacity: 1,
    envMapIntensity: 1,
  };
  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0,
      },
      uRadius: {
        value: 0.1,
      },
    }),
    []
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        scale={[1, 0.402, 1]}
      >
        {/* <shaderMaterial
          vertexShader={vertexShaderm}
          fragmentShader={fragmentShaderm}
          uniforms={uniforms}
        /> */}
        {material.standard(config)}
      </mesh>
    </group>
  );
};

export const Molecule = props => {
  const { nodes, materials } = useGLTF(molecule);
  const material = new Materials().standard2();
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.02, 0.06, -2.76]}
        rotation={[-1.641, 0.503, -2.892]}
        scale={1.388}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={material}
        />
        <group
          position={[-0.659, 0, 0.177]}
          rotation={[-Math.PI, 1.309, -Math.PI]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials.Connector}
            position={[0, 0, 0.394]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.95}
          />
        </group>
        <group position={[0, 0, -0.683]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials.Connector}
            position={[0, 0, 0.394]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.95}
          />
        </group>
      </group>
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
