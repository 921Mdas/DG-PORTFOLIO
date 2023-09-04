// External imports
import React, { useRef, useMemo, forwardRef } from "react";
import { useControls } from "leva";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Instance, Instances } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import { MathUtils } from "three";

// internal imports
import { Materials } from "../MaterialsHHC/Materials";
import BlobFrag from "../../../glsl/blobfrag";
import BlobVert from "../../../glsl/blobvert";

// Models
import deo from "../../../assets/models/deo.glb";
import HandModel from "../../../assets/models/hand2.glb";
import Lens from "../../../assets/models/tfolens.glb";
import Steps from "../../../assets/models/steps.glb";
import molecule from "../../../assets/models/molecule.glb";
import universe from "../../../assets/models/universe.glb";

export const Rock = props => {
  const { scene } = useGLTF(Steps);
  return <primitive object={scene} {...props} />;
};
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
const modelsToPreload = [deo, HandModel, Lens, molecule];
modelsToPreload.forEach(model => useGLTF.preload(model));
