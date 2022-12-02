// external
import React, { useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
import { useThree, useFrame } from "@react-three/fiber";
import {
  MarchingCube,
  Text,
  Text3D,
  TransformControls,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import gsap from "gsap";

import { RigidBody, BallCollider } from "@react-three/rapier";

import InterBoldFont from "../../assets/Fonts/Inter_Bold.json";
import rockScene from "../../assets/models/AboutMe2/deowork.glb";
import stackScene from "../../assets/models/AboutMe2/deostack.glb";
import stackTexture from "../../assets/models/AboutMe2/stacktexture.jpg";
import stepTexture from "../../assets/models/AboutMe2/stairs.jpg";
import rockTexture from "../../assets/models/AboutMe2/baked2.jpg";
import Steps from "../../assets/models/AboutMe2/steps.glb";

import stepUV from "../../assets/models/AboutMe2/paperx.jpg";
import babySteps from "../../assets/models/AboutMe2/steps-new.glb";

import PersonModel from "../../assets/models/person/person2.glb";
import PersonTexture from "../../assets/models/person/personImage.jpg";

import { SIMPLEGSAP } from "../../Helper/helper";

const count = 10;

export const Person = props => {
  const { nodes, materials } = useGLTF(PersonModel);
  const bakedTexture = useTexture(PersonTexture);
  bakedTexture.flipY = false;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        position={[-0.05, 0.68, -1.72]}
      >
        <meshBasicMaterial color={"C9D1F1"} />
      </mesh>
    </group>
  );
};

useGLTF.preload(PersonModel);

export const Letter3D = ({ text, scale }) => {
  const ref = useRef();
  return (
    <>
      <Text3D
        font={InterBoldFont}
        size={1}
        height={1}
        curveSegments={12}
        bevelEnabled={true}
        bevelThickness={1}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
        scale={scale}
        ref={ref}
      >
        {text}
        <meshNormalMaterial />
      </Text3D>
      <TransformControls object={ref} />
    </>
  );
};

export const ShapeInstance = () => {
  const cubes = useRef();

  useEffect(() => {
    for (let i = 0; i < count; i++) {
      const matrix = new THREE.Matrix4();
      matrix.compose(
        new THREE.Vector3(
          Math.random() * -0.2 + i,
          Math.random() * 0.5,
          Math.random() * 0.2 + i
        ),
        new THREE.Quaternion(),
        new THREE.Vector3(0.05, 0.05, 0.05)
      );
      cubes.current?.setMatrixAt(i, matrix);
    }
  }, []);

  return (
    <instancedMesh args={[null, null, count]} ref={cubes}>
      <sphereGeometry />
      <meshStandardMaterial metalness={1} roughness={0} />
    </instancedMesh>
  );
};

export const Letter = ({ size, color, position, text, rotation }) => {
  return (
    <>
      <Text
        fontSize={size}
        color={color}
        position={position}
        rotation={rotation}
        scale={5}
      >
        {Text}
      </Text>
      <meshStandardMaterial color={"tomato"} />
    </>
  );
};

export const Island = props => {
  const { nodes, materials } = useGLTF(rockScene);
  const bakedTexture = useTexture(rockTexture);
  bakedTexture.flipY = false;
  const ref = useRef();
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".welcome_section",
      toggleActions: "play none none none",
      scrub: 2,
      start: "center top",
      end: "bottom top",
      markers: true,
    },
  });

  useEffect(() => {
    tl.to(ref?.current?.rotation, { duration: 5, y: 0.5 });
  }, [tl]);

  return (
    <group {...props} dispose={null} ref={ref}>
      <group position={[-0.59, 0.51, 0.77]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          // material={materials.rock}
        >
          <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_1.geometry}
          // material={materials.floor}
        >
          <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </group>
  );
};

export const OttoStep = props => {
  const { nodes } = useGLTF(babySteps);
  const bakedTexture = useTexture(stepUV);
  bakedTexture.flipY = false;

  return (
    <group {...props} dispose={null}>
      <group position={[0.18, 2.06, -0.6]} rotation={[0, -1, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          // material={materials["rock.001"]}
        >
          <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_1.geometry}
          // material={materials["rock.002"]}
        >
          <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </group>
  );
};

export const Island2 = props => {
  const { nodes, materials } = useGLTF(stackScene);
  const bakedTexture = useTexture(stackTexture);
  bakedTexture.flipY = false;
  const ref = useRef();
  const tl = SIMPLEGSAP(".portfolio");

  useEffect(() => {
    tl.to(ref?.current?.rotation, { duration: 3, y: 0.5 });
  }, [tl]);

  return (
    <group {...props} dispose={null} ref={ref}>
      <group
        position={[-0.05, 0.37, -0.15]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.57}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          // material={materials["rock.001"]}
        >
          <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023_1.geometry}
          // material={materials["Material.002"]}
        >
          <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023_2.geometry}
          // material={materials["Material.001"]}
        >
          <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023_3.geometry}
          // material={materials["floor.001"]}
        >
          <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </group>
  );
};

export const IslandTwo = props => {
  const { nodes, materials } = useGLTF(stackScene);
  const bakedTexture = useTexture(stackTexture);
  bakedTexture.flipY = false;
  const ref = useRef();

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about_me",
      toggleActions: "play none none none",
      scrub: 2,
      start: "center 20%",
      end: "bottom top",
      markers: true,
    },
  });

  useEffect(() => {
    tl.to(ref?.current?.rotation, { duration: 5, y: 0.5 });
  }, [tl]);

  return (
    <group {...props} dispose={null} ref={ref}>
      <group position={[-0.05, 0.06, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials["floor.001"]}
        >
          <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials["rock.001"]}
        >
          <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={materials["Material.002"]}
        >
          <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_3.geometry}
          material={materials["Material.001"]}
        >
          <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </group>
  );
};

export const StepRock = props => {
  const { nodes, materials } = useGLTF(Steps);
  const bakedTexture = useTexture(stepTexture);
  bakedTexture.flipY = false;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube028.geometry}
        // material={materials["rock.002"]}
        position={[-2.13, -0.26, -0.6]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export const Rock = props => {
  const { nodes, materials } = useGLTF(rockScene);
  const bakedTexture = useTexture(rockTexture);
  bakedTexture.flipY = false;
  const ref = useRef();

  // useFrame((state, delta) => {
  //   ref.current.rotation.y += Math.sin(delta * 0.1);
  // });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".headline_text",
      toggleActions: "play none none none",
      scrub: 2,
      start: "top 25%",
      end: "bottom 30%",
      // markers: true,
    },
  });

  useEffect(() => {
    tl.to(ref.current?.rotation, { duration: 4, y: 5 });
  }, [tl]);

  return (
    <group
      {...props}
      dispose={null}
      scale={0.25}
      rotation={[0, 1, 0]}
      position={[0.5, -1.5, 0]}
      ref={ref}
    >
      <group
        position={[-0.07, 1.14, 0.07]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text002.geometry}
          // material={materials.rock}
        >
          <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text002_1.geometry}
          // material={materials.floor}
        >
          <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </group>
  );
};

export const Ball = ({ color, ...props }) => {
  // subtract is how much foam we get around balls
  // strength is how big the balls are
  // ball colliders are physical representation and args how big they are
  // make it a sensor type
  const vec = new THREE.Vector3();

  const api = useRef();
  const bulb = useRef();
  const { camera } = useThree();

  useFrame((state, delta) => {
    const coords = api.current?.translation();
    let x = coords?.x + 0.5;
    let y = coords?.y + 0.1;
    let z = coords?.z;

    api.current.applyImpulse(
      vec
        .copy({ x, y, z })
        .normalize()
        .multiplyScalar(delta * -0.05)
    );
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".headline_text",
      toggleActions: "play none none none",
      scrub: 2,
      start: "top 25%",
      end: "bottom 30%",
      // markers: true,
    },
  });

  const coords = Math.random() * 3;
  const memo = useMemo(() => {
    let ctx = gsap.context(() => {
      tl.to(bulb.current?.position, {
        duration: 3,
        x: coords,
      });

      return () => ctx.revert();
    });
  }, []);

  return (
    <>
      <RigidBody
        ref={api}
        colliders={false}
        {...props}
        linearDamping={2}
        angularDamping={0.95}
      >
        <MarchingCube strength={0.5} subtract={6} color={color} ref={bulb} />
        <BallCollider args={[0.1]} type="dynamic" />
      </RigidBody>
    </>
  );
};
