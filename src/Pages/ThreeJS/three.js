// external
import React, { useEffect, useState, useRef, useMemo } from "react";
import * as THREE from "three";
import {
  Canvas,
  useThree,
  useFrame,
  instancedMesh,
  useLoader,
} from "@react-three/fiber";
import {
  OrbitControls,
  useProgress,
  Html,
  Environment,
  Float,
  Sparkles,
  MarchingCubes,
  MarchingCube,
  Text,
  Lightformer,
  Text3D,
  TransformControls,
  PivotControls,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import gsap from "gsap";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// Internal
import { Branch } from "./ThreeComponents";
import { Apple, SphereShader } from "./shaders/BlobShader";
import { R3FCameraAnimatedEvents } from "../../Helper/helper";
import { RigidBody, Physics, Debug, BallCollider } from "@react-three/rapier";
import Shader from "./shaders/Shader";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InterBoldFont from "../../assets/Fonts/Inter_Bold.json";
import rockScene from "../../assets/models/AboutMe2/deowork.glb";
import stackScene from "../../assets/models/AboutMe2/fckglb.glb";
import stackTexture from "../../assets/models/AboutMe2/fck.jpg";
import rockTexture from "../../assets/models/AboutMe2/baked2.jpg";

gsap.registerPlugin(ScrollTrigger);

const count = 10;

const Letter3D = ({ text, scale }) => {
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

const ShapeInstance = () => {
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

const Letter = ({ size, color, position, text, rotation }) => {
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

const Island = props => {
  const { nodes, materials } = useGLTF(rockScene);
  const bakedTexture = useTexture(rockTexture);
  bakedTexture.flipY = false;
  const ref = useRef();

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

const Island2 = props => {
  const { nodes, materials } = useGLTF(stackScene);
  const bakedTexture = useTexture(stackTexture);
  bakedTexture.flipY = false;
  return (
    <group {...props} dispose={null}>
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

const Rock = props => {
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

const Ball = ({ color, ...props }) => {
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

const objectDistance = 2;
const objectOne = -objectDistance * 1.4;
const objectTwo = -objectDistance * 1.75;

// main scene + models
const Scene = () => {
  // marchingcubes resolution is about how round they look
  // maxpolycounts is how many triangles and marchingcube will form
  // enable colors so the marchingcubes accept color
  // testing gsap

  return (
    <>
      {/* <ShapeInstance /> */}

      <Physics gravity={[0, 2, 0]}>
        {/* <Debug /> */}
        {/* <MarchingCubes
          resolution={64}
          maxPolyCount={200000}
          enableUvs={false}
          enableColors
        >
          <meshStandardMaterial
            vertexColors
            roughness={0}
            metalness={0}
            color={"#c9d1f1"}
          />

          <Ball color="#c9d1f1" position={[-1, -1, -0.5]} />
          <Ball color="#c9d1f1" position={[-2, 1, 0.5]} />
          <Ball color="#c9d1f1" position={[2, 2, 0.5]} />
          <Ball color="#c9d1f1" position={[-2, -2, -0.5]} />
          <Ball color="#c9d1f1" position={[3, 3, 0.5]} />
          <Ball color="#c9d1f1" position={[-3, -3, -0.5]} />
        </MarchingCubes> */}

        <Island
          scale={0.25}
          position={[0.5, objectOne, 0]}
          rotation={[0, 0.5, 0]}
        />
        <Island2
          scale={0.25}
          position={[-0.7, objectTwo, 0.3]}
          rotation={[0, 0.5, 0]}
        />
      </Physics>
      <R3FCameraAnimatedEvents />

      {/* <Rock /> */}

      {/* <MarchingCubes></MarchingCubes> */}
      {/* <Physics>
        <Debug />

        <Float
          floatingRange={[0, 0.2]}
          rotationIntensity={0.2}
          floatIntensity={3}
        >
          <Branch scale={0.5} position={[-5, 0, 0.7]} />
          <Apple scale={0.01} position={[-3, 0.75, 1.05]} />
          <RigidBody
            colliders="hull"
            position={[-2, 1.2, 1.05]}
            gravityScale={0.3}
          >
            <Apple scale={0.01} />
          </RigidBody>
        </Float>
      </Physics> */}
      {/* <R3FCameraAnimatedEvents /> */}
    </>
  );
};

const ThreeJS = ({ handleWork, handleAbout, handleContact, rotateWork }) => {
  return (
    <div className="canvas">
      <Canvas
        flat
        dpr={[1, 2]}
        camera={{ position: [0, 0, 3], fov: 25, rotation: [-0.3, 0, 0] }}
        shadows
        gl={{
          physicallyCorrectLights: true,
          outputEncoding: THREE.sRGBEncoding,
          toneMapping: THREE.ACESFilmicToneMapping,
          antialias: true,
        }}
        outputEncoding={THREE.sRGBEncoding}
        sRGB={true}
      >
        <Perf position="bottom-left" />
        {/* <OrbitControls enableZoom={false} /> */}
        <Environment background>
          <Lightformer
            position={[0, 0, 10]}
            scale={10}
            intensity={2}
            color={"#05b4ff"}
            form={"ring"}
          />
        </Environment>
        <Scene />
        {/* <Sparkles
          count={200}
          scale={[5, 2, 3]}
          position={[-3, 2, 1]}
          color={"#fcba03"}
        /> */}
      </Canvas>
    </div>
  );
};

export default ThreeJS;

const LoadingBooth = () => {
  const { progress } = useProgress();
  return <Html>{progress} % Loaded</Html>;
};
