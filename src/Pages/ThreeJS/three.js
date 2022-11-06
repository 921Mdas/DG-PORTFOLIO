import React, { useRef, Suspense, useEffect } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { useThree, useFrame } from "@react-three/fiber";
import { Canvas, extend } from "@react-three/fiber";
import { useControls, Leva } from "leva";
import { useLoader } from "@react-three/fiber";
import { UnrealBloomPass } from "three-stdlib";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import {
  OrbitControls,
  Environment,
  useTexture,
  useGLTF,
  ContactShadows,
  Lightformer,
  Sparkles,
  Effects,
  Text3D,
  Center,
  useMatcapTexture,
} from "@react-three/drei";
import PlaneShader from "./shaders/plane/PlaneShader";
import { Perf } from "r3f-perf";
import { Physics, Debug } from "@react-three/cannon";
import adamsBridge from "../../assets/environ.pic";

// env map
import im1 from "../../assets/Texture/env1/nx.jpg";
import im2 from "../../assets/Texture/env1/ny.jpg";
import im3 from "../../assets/Texture/env1/nz.jpg";
import im4 from "../../assets/Texture/env1/px.jpg";
import im5 from "../../assets/Texture/env1/py.jpg";
import im6 from "../../assets/Texture/env1/pz.jpg";
// models

import { Plane, RobotDivision, SquareShader } from "./ThreeComponents";
import LightScene from "./Light";

// texture
// events

const DivisionScene = ({ handleAbout, handleContact, handleWork }) => {
  const [matCapTexture] = useMatcapTexture("1A2461_3D70DB_2C3C8F_2C6CAC", 256);
  const geometry = new THREE.SphereGeometry();
  const material = new THREE.MeshMatcapMaterial();

  const sphereGroup = useRef();

  useEffect(() => {
    material.matcap = matCapTexture;
    material.needsUpdate = true;
    matCapTexture.encoding = THREE.sRGBEncoding;
    matCapTexture.needsUpdate = true;
  }, []);

  return (
    <>
      <RobotDivision />
      <LightScene />
      <Sparkles count={200} scale={[20, 20, 10]} size={1.5} speed={2} />
    </>
  );
};

const ThreeJSScene = ({
  handleWork,
  handleAbout,
  handleContact,
  rotateWork,
}) => {
  const { camera } = useThree();
  const tl = gsap.timeline();

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
    <>
      <PlaneShader />
      <Physics
        gravity={[0, -10, 0]}
        defaultContactMaterial={{ friction: 0.6, restitution: 0.7 }}
      >
        <Debug>
          <Suspense
            fallback={
              <mesh>
                <boxGeometry args={[1, 1]} />
                <meshBasicMaterial wireframe />
              </mesh>
            }
          >
            <DivisionScene
              handleWork={handleWork}
              handleAbout={handleAbout}
              handleContact={handleContact}
            />
          </Suspense>
          {/* <Plane positions={[0, -2, 0]} /> */}
        </Debug>
      </Physics>
    </>
  );
};

const ThreeJS = ({ handleWork, handleAbout, handleContact, rotateWork }) => {
  return (
    <div className="canvas">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 2, 6], fov: 75, near: 0.1, far: 200 }}
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
        <Perf position="bottom-left" />
        <OrbitControls
          target={[0, 0.35, 0]}
          maxPolarAngle={1.45}
          enableZoom={false}
        />
        <color attach="background" args={["#1F51FF"]} />
        <fog attach="fog" args={["#1F51FF", 0, 20]} />
        <LightScene />
        <ContactShadows
          resolution={1024}
          frames={1}
          position={[0, -1.9, 0]}
          scale={25}
          blur={0.5}
          opacity={1}
          far={10}
        />

        <Environment files={adamsBridge}>
          <Lightformer
            position={[0, 0, -1]}
            scale={10}
            intensity={10}
            color="white"
            form="ring"
          />
        </Environment>
        <ThreeJSScene
          handleWork={handleWork}
          handleAbout={handleAbout}
          handleContact={handleContact}
          rotateWork={rotateWork}
        />
      </Canvas>
    </div>
  );
};

export default ThreeJS;
