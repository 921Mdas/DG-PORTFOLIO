import React, { useRef, Suspense, useEffect } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { useThree, useFrame } from "@react-three/fiber";
import { Canvas, extend } from "@react-three/fiber";
import { useControls } from "leva";
import { useLoader } from "@react-three/fiber";
import { UnrealBloomPass } from "three-stdlib";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {
  CubeTextureLoader,
  CubeCamera,
  WebGLCubeRenderTarget,
  RGBFormat,
  LinearMipmapLinearFilter,
} from "three";
import {
  OrbitControls,
  Environment,
  useTexture,
  useGLTF,
  ContactShadows,
  Lightformer,
  Sparkles,
  Effects,
} from "@react-three/drei";

import { Physics, Debug } from "@react-three/cannon";

import Tron1 from "../../assets/models/Tron grid 3.jpg";
import adamsBridge from "../../assets/environ.pic";

// texture
import TerrainNormal from "../../assets/Texture/terrain-normal.jpeg";
import TerrainRough from "../../assets/Texture/terrain-roughness.jpeg";

import fontUse from "../../assets/Fonts/Inter_Bold.json";
// models
import Figure from "../../assets/models/gravityTron.glb";
import Mysterio from "../../assets/models/mysterio.glb";
import glassCube from "../../assets/models/glasscube.glb";
import IslandX from "../../assets/models/IslandCO2.glb";
import Text from "../../assets/models/TextIntro.glb";
import brain from "../../assets/models/brainmodel.glb";
import tete from "../../assets/models/gravityTron.gltf";
import adam from "../../assets/adams_bridge.hdr";

// env map
import im1 from "../../assets/Texture/env1/nx.jpg";
import im2 from "../../assets/Texture/env1/ny.jpg";
import im3 from "../../assets/Texture/env1/nz.jpg";
import im4 from "../../assets/Texture/env1/px.jpg";
import im5 from "../../assets/Texture/env1/py.jpg";
import im6 from "../../assets/Texture/env1/pz.jpg";

import {
  Box,
  SquareBox,
  Plane,
  CreateSphere,
  Gravity,
  Building,
  Floor,
  Robot,
  Projects,
  Dog,
  King,
  SquareBoxXL,
  SquareBoS,
  Cat,
  Bullet,
  ForwardArrow,
  BackArrow,
  NextArrow,
  PrevArrow,
  RobotDivision,
  StreetSign,
  TrashCan,
  Mailbox,
  FireHydrant,
  Taxi,
  GrassOne,
  GrassTwo,
  Electric,
} from "../ThreeJS/ThreeComponents";
import LightScene from "../ThreeJS/Light";

// events

const WhiteScene = ({ handleAbout, handleContact, handleWork }) => {
  return (
    <>
      <Floor />
      <Robot />
      <Projects />
      <CreateSphere radius={0.3} positions={[1, 0, 0.6]} />
      <CreateSphere radius={0.1} positions={[3, 2, -0.5]} />
      <CreateSphere radius={0.8} positions={[2, 0.5, -0.5]} />
      <CreateSphere radius={0.2} positions={[2, 0.5, -3]} />
      <SquareBoS size={[1, 1, 1]} />
      <King />
      <Dog />
      <SquareBox size={[0.52, 0.52, 0.52]} />
      <SquareBoxXL size={[1, 1, 1]} />
      <Bullet positions={[2, 3, 0]} />
      <Bullet positions={[2, 3.4, 1]} />
      <Bullet positions={[2, 3, 1]} />
      <CreateSphere radius={0.1} positions={[-2, 0.5, -3]} />
      <CreateSphere radius={0.5} positions={[-3, 0.5, 1]} />
      <Cat scale={[0.04, 0.04, 0.04]} />
      <ForwardArrow handleWork={handleWork} />
      <NextArrow handleContact={handleContact} />
      <PrevArrow handleAbout={handleAbout} />
    </>
  );
};

const DivisionScene = ({ handleAbout, handleContact, handleWork }) => {
  return (
    <>
      <RobotDivision />
      <Sparkles count={200} scale={[20, 20, 10]} size={1.5} speed={2} />
      <Plane positions={[0, -2, 0]} />
    </>
  );
};

const Scene = ({ handleWork, handleAbout, handleContact, rotateWork }) => {
  const { camera } = useThree();
  const tl = gsap.timeline();

  window.addEventListener("mousemove", e => {
    let x = e.clientX;
    let y = e.clientY;
    // camera.position.x = x / window.innerWidth;
    // camera.position.y = y / window.innerHeight;
  });

  useEffect(() => {
    tl.to(camera.position, {
      duration: 1.5,
      ease: "power2.inOut",
      y: 0.5,
      z: 5.5,
      onUpdate: () => {
        camera.lookAt(0, 0, 0);
      },
    });
  }, [camera, tl]);

  return (
    <Suspense fallback={null}>
      {/* <OrbitControls
        target={[0, 0.35, 0]}
        maxPolarAngle={1.45}
        enableZoom={false}
      /> */}
      {/* <LightScene /> */}
      <ContactShadows
        resolution={1024}
        frames={1}
        position={[0, -1.9, 0]}
        scale={25}
        blur={0.5}
        opacity={1}
        far={10}
      />

      <fog attach="fog" args={["#1F51FF", 0, 20]} />
      <Physics
        gravity={[0, -10, 0]}
        defaultContactMaterial={{ friction: 0.6, restitution: 0.7 }}
      >
        {/* <WhiteScene
          handleWork={handleWork}
          handleAbout={handleAbout}
          handleContact={handleContact}
        /> */}
        <Debug>
          <DivisionScene
            handleWork={handleWork}
            handleAbout={handleAbout}
            handleContact={handleContact}
          />
        </Debug>
      </Physics>
      <color attach="background" args={["#1F51FF"]} />
      <Environment files={adamsBridge} />
    </Suspense>
  );
};

const ThreeScene = ({ handleWork, handleAbout, handleContact, rotateWork }) => {
  return (
    <div className="canvas">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 2, 5], fov: 75, near: 1, far: 10000 }}
        shadowMap
        shadows
        gl={{
          physicallyCorrectLights: true,
          outputEncoding: THREE.sRGBEncoding,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 20,
          antialias: true,
        }}
        outputEncoding={THREE.sRGBEncoding}
        sRGB={true}
      >
        <Scene
          handleWork={handleWork}
          handleAbout={handleAbout}
          handleContact={handleContact}
          rotateWork={rotateWork}
        />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
