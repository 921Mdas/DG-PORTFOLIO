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
  Float,
  useAnimations,
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
import Mine from "../../assets/models/person/mine.glb";

import stepUV from "../../assets/models/AboutMe2/paperx.jpg";
import babySteps from "../../assets/models/AboutMe2/steps-new.glb";
import firstStep from "../../assets/models/person/introsteps.glb";
import firstStepTexture from "../../assets/models/person/introSteps.jpg";

import PersonModel from "../../assets/models/person/person2.glb";
import PersonTexture from "../../assets/models/person/personImage.jpg";
import FirstScene from "../../assets/models/person/introscene.glb";
import FirstSceneTexture from "../../assets/models/person/firstbake.jpg";
import MineTexture from "../../assets/models/person/mining2.jpg";
import FurnaceScene from "../../assets/models/person/perfectfurnace.glb";
import FurnaceSceneTexture from "../../assets/models/person/four.jpg";
import RockFoundation from "../../assets/models/person/rockbottom.glb";
import RockFoundationTexture from "../../assets/models/person/RockBottom.jpg";
import TunnelScene from "../../assets/models/person/tunnel.glb";
import TunnelSceneTexture from "../../assets/models/person/Tunnel.jpg";
import Shibaku from "../../assets/models/person/shibaku.glb";

import { SIMPLEGSAP } from "../../Helper/helper";

const Floater = (props, { speed, RInt, FlInt }) => {
  return (
    <Float
      speed={speed} // Animation speed, defaults to 1
      rotationIntensity={RInt} // XYZ rotation intensity, defaults to 1
      floatIntensity={FlInt} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
      floatingRange={[0.5, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
    >
      {props.children}
    </Float>
  );
};

const count = 10;

export const IntroScene = props => {
  const { nodes, materials } = useGLTF(FirstScene);
  const bakedTexture = useTexture(FirstSceneTexture);
  bakedTexture.flipY = false;
  const randomSpeed = 0.6;
  const randomRotationIntensity = 0.5;
  const randomFloatIntensity = 0.4;
  return (
    <group {...props} dispose={null}>
      <Floater
        speed={Math.random() * randomSpeed}
        RInt={Math.random() * randomRotationIntensity}
        FlInt={Math.random() * randomFloatIntensity}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031.geometry}
          // material={materials["Material.001"]}
          position={[1.14, 1.43, -0.16]}
          rotation={[-3.07, -0.05, 2.86]}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
      </Floater>
      {/* static */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032.geometry}
        // material={materials["Material.001"]}
        position={[1.4, 0.19, 0.01]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>

      {/* static */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube033.geometry}
        // material={materials["Material.001"]}
        position={[1.21, 0.58, 0.23]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      {/* static */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        // material={materials.rock}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      {/* static */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube035.geometry}
        // material={materials["Material.001"]}
        position={[1.03, 0.11, 0.57]}
        rotation={[Math.PI, 0, -2.29]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      {/* static */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube034.geometry}
        // material={materials["Material.001"]}
        position={[1.21, 2.29, 0.23]}
        rotation={[-Math.PI, 0.84, -Math.PI]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <Floater
        speed={Math.random() * randomSpeed}
        RInt={Math.random() * randomRotationIntensity}
        FlInt={Math.random() * randomFloatIntensity}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009.geometry}
          // material={materials["Material.001"]}
          position={[1.39, 1.78, 0.65]}
          rotation={[Math.PI / 2, 0, 0.97]}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
      </Floater>
      <Floater
        speed={Math.random() * randomSpeed}
        RInt={Math.random() * randomRotationIntensity}
        FlInt={Math.random() * randomFloatIntensity}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          // material={materials["Material.001"]}
          position={[1.45, 0.69, -1.06]}
          rotation={[2.33, 0.51, 1.46]}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
      </Floater>
      <Floater
        speed={Math.random() * randomSpeed}
        RInt={Math.random() * randomRotationIntensity}
        FlInt={Math.random() * randomFloatIntensity}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          // material={materials["Material.001"]}
          position={[1.45, 0.69, -1.06]}
          rotation={[2.33, 0.51, 1.46]}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
      </Floater>
      <Floater
        speed={Math.random() * randomSpeed}
        RInt={Math.random() * randomRotationIntensity}
        FlInt={Math.random() * randomFloatIntensity}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          // material={materials["Material.001"]}
          position={[0.88, 0.77, 0.73]}
          rotation={[Math.PI / 2, 1.03, Math.PI / 2]}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
      </Floater>
      <Floater
        speed={Math.random() * randomSpeed}
        RInt={Math.random() * randomRotationIntensity}
        FlInt={Math.random() * randomFloatIntensity}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          // material={materials["Material.001"]}
          position={[1.54, 1.22, 0.19]}
          rotation={[1.52, -0.17, 1.59]}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
      </Floater>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        // material={materials["Material.001"]}
        position={[1.6, 0.16, 1.66]}
        rotation={[2.18, 0.73, 1.53]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <Floater speed={1} RInt={0.5} FlInt={0.2}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.anim1.geometry}
          // material={materials.rock}
          position={[-0.63, -0.48, 1.18]}
          rotation={[2.44, 1.54, -2.76]}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
      </Floater>
      <Floater
        speed={Math.random() * randomSpeed}
        RInt={Math.random() * randomRotationIntensity}
        FlInt={Math.random() * randomFloatIntensity}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.anim2.geometry}
          // material={materials.rock}
          position={[-0.92, 0.84, -0.86]}
          rotation={[-0.68, -0.04, -2.28]}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
      </Floater>
      <Floater
        speed={Math.random() * randomSpeed}
        RInt={Math.random() * randomRotationIntensity}
        FlInt={Math.random() * randomFloatIntensity}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.anim3.geometry}
          // material={materials.rock}
          position={[0.22, 0.37, 2.34]}
          rotation={[-2.82, 0.57, 1.85]}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
      </Floater>
      <Floater
        speed={Math.random() * randomSpeed}
        RInt={Math.random() * randomRotationIntensity}
        FlInt={Math.random() * randomFloatIntensity}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.anim4.geometry}
          // material={materials.rock}
          position={[2.27, -0.01, -0.99]}
          rotation={[-1.23, -1.43, -0.83]}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
      </Floater>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011.geometry}
        // material={materials["Material.001"]}
        position={[1.85, 2.7, -0.38]}
        rotation={[1.52, -0.17, 1.59]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <Floater
        speed={Math.random() * randomSpeed}
        RInt={Math.random() * randomRotationIntensity}
        FlInt={Math.random() * randomFloatIntensity}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.anim5.geometry}
          // material={materials.rock}
          position={[1.72, 0.65, -2.34]}
          rotation={[-2.15, 0, 2.81]}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
      </Floater>
    </group>
  );
};

useGLTF.preload(FirstScene);

export const Tunnel = props => {
  const { nodes, materials } = useGLTF(TunnelScene);
  const bakedTexture = useTexture(TunnelSceneTexture);
  bakedTexture.flipY = false;
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.59, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube109.geometry}
          material={materials.rock}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube109_1.geometry}
          material={materials["Material.002"]}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube109_2.geometry}
          material={materials["Material.001"]}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
      </group>
    </group>
  );
};

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

export const Furnace = props => {
  const { nodes, materials } = useGLTF(FurnaceScene);
  const bakedTexture = useTexture(FurnaceSceneTexture);
  bakedTexture.flipY = false;
  return (
    <>
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials.rock}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={materials.gold}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_3.geometry}
          material={materials["Material.001"]}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_4.geometry}
          material={materials.hot}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
      </group>
    </>
  );
};

export const Foundation = props => {
  const { nodes, materials } = useGLTF(RockFoundation);
  const bakedTexture = useTexture(RockFoundationTexture);
  bakedTexture.flipY = false;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        // material={materials.Material}
        position={[-1.93, 0.75, -1.12]}
        rotation={[-1.52, -0.67, 0.03]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
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

export const MineScene = props => {
  const { nodes, materials } = useGLTF(Mine);
  const bakedTexture = useTexture(MineTexture);
  bakedTexture.flipY = false;

  const ref = useRef();

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".skills_section",
      toggleActions: "play none none none",
      scrub: 2,
      start: "center 50%",
      end: "bottom top",
      markers: false,
    },
  });

  useEffect(() => {
    tl.to(ref?.current?.rotation, { duration: 5, y: -0.9 });
  }, [tl]);
  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_1.geometry}
        // material={materials.rock}
      >
        <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_2.geometry}
        // material={materials.metal}
      >
        <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_3.geometry}
        // material={materials.woord}
      >
        <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

useGLTF.preload(Mine);

export const Firstep = props => {
  const { nodes, materials } = useGLTF(firstStep);
  const bakedTexture = useTexture(firstStepTexture);
  bakedTexture.flipY = false;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials["rock.002"]}
        position={[-0.22, 1.43, -2.96]}
      >
        <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
      </mesh>
    </group>
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
      markers: false,
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
      start: "center 30%",
      end: "bottom top",
      markers: false,
    },
  });

  useEffect(() => {
    tl.to(ref?.current?.rotation, { duration: 5, y: -0.9 });
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

export const Tensei = props => {
  const group = useRef();
  const { nodes, materials } = useGLTF(Shibaku);
  const ref = useRef();
  const distribution = 2;

  useEffect(() => {
    ref.current.children.forEach(child => {
      gsap.to(child.position, {
        scrollTrigger: {
          trigger: ".welcome_section",
          toggleActions: "play none none none",
          scrub: 2,
          start: "bottom 99%",
          end: "bottom top",
          markers: true,
        },
        duration: 2,
        y:
          child.position.y < 0
            ? child.position.y - Math.random() * distribution
            : child.position.y + Math.random() * distribution,
        z:
          child.position.z < 0
            ? child.position.z - Math.random() * distribution
            : child.position.z + Math.random() * distribution,
        x:
          child.position.x < 0
            ? child.position.x - Math.random() * distribution
            : child.position.x + Math.random() * distribution,
      });
      gsap.to(child.rotation, {
        scrollTrigger: {
          trigger: ".welcome_section",
          toggleActions: "play none none none",
          scrub: 2,
          start: "bottom 99%",
          end: "bottom top",
          markers: true,
        },
        duration: 2,
        y:
          child.position.y < 0
            ? child.position.y - Math.random() * distribution
            : child.position.y + Math.random() * distribution,
        z:
          child.position.z < 0
            ? child.position.z - Math.random() * distribution
            : child.position.z + Math.random() * distribution,
        x:
          child.position.x < 0
            ? child.position.x - Math.random() * distribution
            : child.position.x + Math.random() * distribution,
      });
    });
  }, []);

  return (
    <RigidBody colliders="hull" friction={0.7}>
      <group ref={group} {...props} dispose={null}>
        <group name="Scene" ref={ref}>
          <mesh
            name="Sphere_cell013"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell013.geometry}
            material={materials.inside}
            position={[0.42, 0.66, 0.62]}
          />
          <mesh
            name="Sphere_cell023"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell023.geometry}
            material={materials.inside}
            position={[-0.26, -0.4, 0.15]}
          />
          <mesh
            name="Sphere_cell030"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell030.geometry}
            material={materials.inside}
            position={[0.2, -0.42, 0.31]}
          />
          <mesh
            name="Sphere_cell021"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell021.geometry}
            material={materials.inside}
            position={[0.06, -0.21, -0.36]}
          />
          <mesh
            name="Sphere_cell069"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell069.geometry}
            material={materials.inside}
            position={[-0.08, 0.24, 0.21]}
          />
          <mesh
            name="Sphere_cell081"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_cell081.geometry}
            material={materials.inside}
            position={[0.07, -0.68, -0.07]}
          />
          <group name="Sphere_cell" position={[0, 0.48, -0.84]}>
            <mesh
              name="Sphere_cell098"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell098.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell098_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell098_1.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell001" position={[-0.08, 0.95, 0.26]}>
            <mesh
              name="Sphere_cell099"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell099.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell099_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell099_1.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell002" position={[0.05, 0.03, -0.9]}>
            <mesh
              name="Sphere_cell001_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell001_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell001_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell001_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell003" position={[-0.5, -0.33, -0.5]}>
            <mesh
              name="Sphere_cell002_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell002_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell002_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell002_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell005" position={[0.2, -0.24, 0.84]}>
            <mesh
              name="Sphere_cell003_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell003_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell003_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell003_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell006" position={[0.18, 0.54, 0.75]}>
            <mesh
              name="Sphere_cell004"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell004.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell004_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell004_1.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell007" position={[0.29, -0.91, -0.12]}>
            <mesh
              name="Sphere_cell005_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell005_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell005_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell005_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell008" position={[-0.7, -0.02, 0.09]}>
            <mesh
              name="Sphere_cell006_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell006_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell006_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell006_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell009" position={[-0.88, -0.25, -0.14]}>
            <mesh
              name="Sphere_cell007_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell007_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell007_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell007_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell010" position={[0.84, -0.29, -0.06]}>
            <mesh
              name="Sphere_cell008_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell008_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell008_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell008_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell011" position={[0.54, -0.65, 0.4]}>
            <mesh
              name="Sphere_cell009_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell009_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell009_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell009_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell014" position={[0.77, -0.16, 0.46]}>
            <mesh
              name="Sphere_cell011_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell011_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell011_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell011_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell015" position={[-0.86, 0.47, -0.17]}>
            <mesh
              name="Sphere_cell012"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell012.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell012_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell012_1.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell016" position={[-0.39, -0.63, -0.64]}>
            <mesh
              name="Sphere_cell013_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell013_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell013_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell013_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell017" position={[-0.03, -0.49, -0.75]}>
            <mesh
              name="Sphere_cell014_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell014_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell014_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell014_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell018" position={[0.33, 0.06, -0.82]}>
            <mesh
              name="Sphere_cell015_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell015_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell015_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell015_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell019" position={[-0.55, 0.39, 0.58]}>
            <mesh
              name="Sphere_cell016_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell016_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell016_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell016_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell020" position={[-0.65, -0.48, 0.19]}>
            <mesh
              name="Sphere_cell017_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell017_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell017_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell017_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell022" position={[-0.77, -0.21, -0.47]}>
            <mesh
              name="Sphere_cell019_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell019_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell019_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell019_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell024" position={[-0.22, 0.84, -0.44]}>
            <mesh
              name="Sphere_cell021_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell021_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell021_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell021_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell025" position={[-0.01, 0.77, 0.45]}>
            <mesh
              name="Sphere_cell022_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell022_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell022_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell022_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell026" position={[0.96, 0.18, -0.19]}>
            <mesh
              name="Sphere_cell023_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell023_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell023_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell023_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell027" position={[0.27, 0.27, 0.86]}>
            <mesh
              name="Sphere_cell024_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell024_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell024_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell024_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell028" position={[-0.2, 0.52, 0.76]}>
            <mesh
              name="Sphere_cell025_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell025_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell025_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell025_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell029" position={[0.48, 0.74, 0]}>
            <mesh
              name="Sphere_cell026_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell026_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell026_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell026_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell031" position={[-0.05, -0.95, -0.21]}>
            <mesh
              name="Sphere_cell028_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell028_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell028_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell028_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell032" position={[-0.2, 0.63, -0.7]}>
            <mesh
              name="Sphere_cell029_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell029_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell029_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell029_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell033" position={[0.27, 0.41, -0.51]}>
            <mesh
              name="Sphere_cell030_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell030_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell030_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell030_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell034" position={[0.67, -0.28, -0.61]}>
            <mesh
              name="Sphere_cell031_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell031_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell031_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell031_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell035" position={[0.79, 0.44, -0.11]}>
            <mesh
              name="Sphere_cell032_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell032_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell032_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell032_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell036" position={[0.65, 0.08, 0.73]}>
            <mesh
              name="Sphere_cell033_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell033_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell033_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell033_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell038" position={[-0.67, 0.31, -0.37]}>
            <mesh
              name="Sphere_cell034_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell034_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell034_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell034_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell039" position={[0.42, -0.03, 0.75]}>
            <mesh
              name="Sphere_cell035_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell035_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell035_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell035_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell042" position={[-0.78, 0.32, 0.09]}>
            <mesh
              name="Sphere_cell036_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell036_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell036_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell036_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell043" position={[-0.63, -0.7, -0.07]}>
            <mesh
              name="Sphere_cell037"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell037.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell037_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell037_1.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell044" position={[0.36, -0.61, -0.62]}>
            <mesh
              name="Sphere_cell038_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell038_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell038_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell038_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell046" position={[0.46, -0.3, -0.8]}>
            <mesh
              name="Sphere_cell039_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell039_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell039_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell039_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell047" position={[-0.31, -0.66, 0.55]}>
            <mesh
              name="Sphere_cell040"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell040.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell040_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell040_1.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell048" position={[0.02, -0.93, 0.04]}>
            <mesh
              name="Sphere_cell041"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell041.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell041_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell041_1.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell050" position={[0.11, 0.91, 0.02]}>
            <mesh
              name="Sphere_cell042_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell042_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell042_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell042_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell051" position={[0.27, 0.81, -0.31]}>
            <mesh
              name="Sphere_cell043_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell043_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell043_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell043_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell055" position={[0.25, -0.89, 0.17]}>
            <mesh
              name="Sphere_cell044_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell044_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell044_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell044_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell056" position={[0.1, 0.95, 0.21]}>
            <mesh
              name="Sphere_cell045"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell045.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell045_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell045_1.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell057" position={[0.48, -0.41, 0.7]}>
            <mesh
              name="Sphere_cell046_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell046_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell046_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell046_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell060" position={[-0.06, 0.91, -0.19]}>
            <mesh
              name="Sphere_cell047_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell047_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell047_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell047_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell061" position={[-0.16, 0.94, 0.1]}>
            <mesh
              name="Sphere_cell048_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell048_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell048_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell048_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell062" position={[-0.43, 0.73, 0.11]}>
            <mesh
              name="Sphere_cell049"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell049.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell049_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell049_1.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell063" position={[0.04, 0.89, -0.4]}>
            <mesh
              name="Sphere_cell050_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell050_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell050_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell050_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell064" position={[0.42, 0.77, 0.37]}>
            <mesh
              name="Sphere_cell051_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell051_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell051_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell051_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell065" position={[-0.16, 0.03, 0.84]}>
            <mesh
              name="Sphere_cell052"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell052.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell052_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell052_1.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell066" position={[-0.93, -0.08, 0.13]}>
            <mesh
              name="Sphere_cell053"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell053.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell053_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell053_1.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell067" position={[-0.14, -0.95, 0.15]}>
            <mesh
              name="Sphere_cell054"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell054.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell054_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell054_1.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell068" position={[0.14, -0.82, -0.39]}>
            <mesh
              name="Sphere_cell055_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell055_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell055_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell055_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell070" position={[0.01, 0.62, -0.54]}>
            <mesh
              name="Sphere_cell057_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell057_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell057_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell057_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell071" position={[0.62, 0.39, 0.49]}>
            <mesh
              name="Sphere_cell058"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell058.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell058_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell058_1.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell072" position={[0.52, -0.53, -0.36]}>
            <mesh
              name="Sphere_cell059"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell059.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell059_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell059_1.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell075" position={[-0.85, -0.4, 0.2]}>
            <mesh
              name="Sphere_cell060_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell060_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell060_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell060_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell076" position={[-0.36, 0.89, -0.03]}>
            <mesh
              name="Sphere_cell061_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell061_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell061_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell061_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell077" position={[-0.37, 0.12, -0.76]}>
            <mesh
              name="Sphere_cell062_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell062_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell062_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell062_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell078" position={[-0.53, -0.69, -0.31]}>
            <mesh
              name="Sphere_cell063_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell063_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell063_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell063_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell079" position={[-0.62, 0.69, -0.18]}>
            <mesh
              name="Sphere_cell064_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell064_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell064_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell064_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell080" position={[-0.25, -0.79, -0.35]}>
            <mesh
              name="Sphere_cell065_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell065_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell065_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell065_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell082" position={[-0.91, 0.14, -0.2]}>
            <mesh
              name="Sphere_cell067_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell067_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell067_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell067_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell083" position={[-0.03, -0.55, 0.71]}>
            <mesh
              name="Sphere_cell068_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell068_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell068_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell068_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell084" position={[-0.65, -0.2, 0.54]}>
            <mesh
              name="Sphere_cell069_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell069_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell069_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell069_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell085" position={[0.56, 0.64, -0.43]}>
            <mesh
              name="Sphere_cell070_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell070_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell070_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell070_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell086" position={[0.04, -0.85, 0.42]}>
            <mesh
              name="Sphere_cell071_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell071_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell071_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell071_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell088" position={[-0.71, 0.55, 0.21]}>
            <mesh
              name="Sphere_cell072_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell072_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell072_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell072_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell089" position={[0.62, 0.17, -0.61]}>
            <mesh
              name="Sphere_cell073"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell073.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell073_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell073_1.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell090" position={[-0.2, -0.93, -0.03]}>
            <mesh
              name="Sphere_cell074"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell074.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell074_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell074_1.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell091" position={[0.62, 0.1, 0.02]}>
            <mesh
              name="Sphere_cell075_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell075_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell075_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell075_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell092" position={[0.83, 0.01, -0.42]}>
            <mesh
              name="Sphere_cell076_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell076_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell076_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell076_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell093" position={[-0.29, 0.89, -0.23]}>
            <mesh
              name="Sphere_cell077_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell077_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell077_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell077_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell094" position={[-0.38, -0.79, 0.23]}>
            <mesh
              name="Sphere_cell078_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell078_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell078_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell078_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell096" position={[-0.8, -0.45, -0.2]}>
            <mesh
              name="Sphere_cell079_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell079_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell079_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell079_2.geometry}
              material={materials.inside}
            />
          </group>
          <group name="Sphere_cell097" position={[-0.42, 0.65, -0.5]}>
            <mesh
              name="Sphere_cell080_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell080_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Sphere_cell080_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere_cell080_2.geometry}
              material={materials.inside}
            />
          </group>
        </group>
      </group>
    </RigidBody>
  );
};

export const Plane = props => {
  return (
    <RigidBody type="fixed">
      <mesh {...props}>
        <planeGeometry />
        <meshBasicMaterial side={THREE.DoubleSide} />
      </mesh>
    </RigidBody>
  );
};

useGLTF.preload(Shibaku);
