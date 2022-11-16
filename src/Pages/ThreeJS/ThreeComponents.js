import React, { useRef, useEffect, useMemo } from "react";
import * as THREE from "three";
import { EffectComposer, Glitch } from "@react-three/postprocessing";

import { useFrame, useLoader } from "@react-three/fiber";
import { usePlane } from "@react-three/cannon";
import {
  useGLTF,
  MeshReflectorMaterial,
  TransformControls,
  Html,
  useTexture,
  Float,
} from "@react-three/drei";
import { gsap } from "gsap";
import Shader from "./shaders/Shader";

// texture
import TerrainNormal from "../../assets/Texture/terrain-normal.jpeg";
import TerrainRough from "../../assets/Texture/terrain-roughness.jpeg";

// models
import ROBOTHEAD from "../../assets/models/robot_head.glb";
import PortalDimension from "../../assets/models/portal.glb";
import { LinearEncoding, RepeatWrapping } from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import bakedTexture from "../../assets/models/baked.jpg";
import NovaModel from "../../assets/models/Nova.glb";
import Novatexture from "../../assets/models/xxy.jpg";

const vertexShader = `
        uniform mat4 projectionMatrix;
        uniform mat4 viewMatrix;
        uniform mat4 modelMatrix;
        uniform vec2 uFrequency;
        uniform float uTime;
        

        attribute vec3 position;
        attribute vec2 uv;
        attribute float aRandom;
        varying float vRandom;
        varying vec2 vUv;

        void main()
        {
             vec4 modelPosition = modelMatrix * vec4(position, 1.0);
             modelPosition.z += sin(modelPosition.x * 5.0 + uTime * 3.0) * 0.4;
             vec4 viewPosition = viewMatrix * modelPosition;
             vec4 projectedPosition = projectionMatrix * viewPosition;
             gl_Position = projectedPosition;

             vRandom = aRandom;
             vUv = uv;
        }
    `;

const fragmentShader = `
        precision mediump float;
        uniform vec4 uColor;
        uniform sampler2D uTexture;
        varying float vRandom;
        varying vec2 vUv;

        void main()
        {   
            vec4 textureColor = texture2D(uTexture, vUv);
            gl_FragColor = uColor;

        }
    `;

export const SquareShader = () => {
  const planeRef = useRef();
  const material = useRef();
  const texture = useTexture({
    map: TerrainNormal,
  });

  useEffect(() => {
    const count = planeRef.current.attributes.position.count;
    const randoms = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      randoms[i] = Math.random();
    }

    planeRef.current.setAttribute(
      "aRandom",
      new THREE.BufferAttribute(randoms, 1)
    );

    console.log(material.current.uniforms.uTime.value);
  }, []);

  useFrame((state, delta) => {
    material.current.uniforms.uTime.value += delta;
  });

  const uniforms = useMemo(
    () => ({
      uFrequency: {
        value: new THREE.Vector2(1, 5),
      },
      uTime: {
        value: 1.0,
      },
      uColor: {
        value: new THREE.Vector4(1, 1, 0, 1),
      },
      uTexture: { value: texture },
    }),
    []
  );

  return (
    <mesh>
      <planeGeometry args={[5, 5, 32, 32]} ref={planeRef} />
      <rawShaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        wireframe={false}
        side={THREE.DoubleSide}
        uniforms={uniforms}
        ref={material}
      />
    </mesh>
  );
};

export const RobotDivision = props => {
  const { nodes, materials } = useGLTF(ROBOTHEAD);
  const CowBoy = useRef();
  const tl = gsap.timeline();

  const RobotMaterial = () => {
    const customUniforms = { uTime: { value: 0 } };

    useFrame((state, delta) => {
      customUniforms.uTime.value += delta;
    });

    return (
      <meshStandardMaterial
        color={[1.5, 1, 4]}
        roughness={0.1}
        metalness={0.9}
        toneMapped={false}
        onBeforeCompile={shader => {
          shader.uniforms.uTime = customUniforms.uTime;

          shader.vertexShader = shader.vertexShader.replace(
            "#include <common>",
            `#include <common>
              uniform float uTime;
              mat2 get2dRotateMatrix(float _angle)
              {
                  return mat2(cos(_angle), - sin(_angle), sin(_angle), cos(_angle));
              }
            
            `
          );

          shader.vertexShader = shader.vertexShader.replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
            float angle = sin(position.z + uTime) * 0.1;
            mat2 rotateMatrix = get2dRotateMatrix(angle);
            transformed.xz = rotateMatrix * transformed.xz;
            `
          );
        }}
      />
    );
  };

  useEffect(() => {
    tl.to(CowBoy.current.position, {
      duration: 1.5,
      ease: "power2.inOut",
      y: 0.5,
      z: 8,
    });
  }, [tl]);

  const Random = () => {
    const colors = [
      [10.5, 1, 4],
      [2.5, 1, 8],
      [5.5, 1, 3],
      [7.5, 1, 6],
    ];
    return colors[Math.trunc(Math.random() * colors.length)];
  };

  return (
    <>
      <TransformControls>
        <group {...props} dispose={null} ref={CowBoy} castShadow receiveShadow>
          <group
            rotation={[-Math.PI / 2, 0, -0.1]}
            position={[0, -7, -30]}
            scale={[20, 20, 20]}
            onClick={v => {
              v.object.material.color = new THREE.Color(Random());
              v.stopPropagation();
            }}
            onPointerEnter={() => {
              document.body.style.cursor = "pointer";
            }}
            onPointerLeave={() => {
              document.body.style.cursor = "default";
            }}
          >
            <group rotation={[Math.PI / 2, 0.1, 0]}>
              <group rotation={[0, 0, Math.PI / 2]} scale={[0.16, 0.02, 0.16]}>
                {/* hears */}
                <mesh
                  geometry={nodes.Object_4.geometry}
                  material={materials["Material.010"]}
                >
                  <RobotMaterial />
                </mesh>
              </group>

              {/* head */}
              <mesh
                geometry={nodes.Object_6.geometry}
                material={materials["Material.007"]}
              >
                <RobotMaterial />
              </mesh>
              <group scale={[0.85, 1, 1]} receiveShadow castShadow>
                {/* nose */}
                <mesh
                  geometry={nodes.Object_8.geometry}
                  material={materials["Material.024"]}
                >
                  <RobotMaterial />
                </mesh>
              </group>
              {/* mask */}
              <mesh
                geometry={nodes.Object_10.geometry}
                material={materials["Material.011"]}
              >
                <RobotMaterial />
              </mesh>
              {/* chin */}
              <mesh
                geometry={nodes.Object_11.geometry}
                material={materials["Material.034"]}
              >
                <RobotMaterial />
              </mesh>
              <group scale={[1.17, 1.29, 1]}>
                {/* glasses */}
                <mesh
                  geometry={nodes.Object_13.geometry}
                  material={materials["Material.030"]}
                >
                  <RobotMaterial />
                </mesh>
              </group>
              <group rotation={[0.12, -0.01, -0.01]} scale={[0.58, 0.58, 1.01]}>
                <mesh
                  geometry={nodes.Object_15.geometry}
                  material={materials["Material.001"]}
                >
                  <RobotMaterial />
                </mesh>
                <mesh
                  geometry={nodes.Object_16.geometry}
                  material={materials["Material.033"]}
                >
                  <RobotMaterial />
                </mesh>
              </group>
              <mesh
                geometry={nodes.Object_18.geometry}
                material={materials["Material.031"]}
              >
                <RobotMaterial />
              </mesh>
              <mesh
                geometry={nodes.Object_20.geometry}
                material={materials["Material.029"]}
              >
                <RobotMaterial />
              </mesh>
              <mesh
                geometry={nodes.Object_22.geometry}
                material={materials["Material.028"]}
              >
                <RobotMaterial />
              </mesh>
            </group>
          </group>
        </group>
      </TransformControls>
    </>
  );
};

export const Plane = ({ positions }) => {
  const textureNormal = useTexture(TerrainNormal);
  const textureRough = useTexture(TerrainRough);

  const [ref] = usePlane(() => ({
    mass: 0,
    type: "Static",
    position: positions,
    rotation: [-Math.PI * 0.5, 0, 0],
  }));
  useEffect(() => {
    [textureNormal, textureRough].forEach(t => {
      t.wrapS = RepeatWrapping;
      t.wrapT = RepeatWrapping;
      t.repeat.set(5, 5);
      t.offset.set(0, 0);
    });

    textureNormal.encoding = LinearEncoding;
    textureRough.encoding = LinearEncoding;
  }, [textureNormal, textureRough]);

  return (
    <mesh ref={ref} rotation={[-Math.PI * 0.5, -3, 0]}>
      <planeGeometry args={[50, 50]} />
      {/* <meshStandardMaterial color="orange" /> */}
      <MeshReflectorMaterial
        envMapIntensity={0}
        normalMap={textureNormal}
        normalScale={[0.15, 0.15]}
        roughnessMap={textureRough}
        dithering={true}
        color={[0.015, 0.015, 0.015]}
        roughness={0.7}
        blur={[1000, 400]} // Blur ground reflections (width, heigt), 0 skips blur
        mixBlur={30} // How much blur mixes with surface roughness (default = 1)
        mixStrength={80} // Strength of the reflections
        mixContrast={1} // Contrast of the reflections
        resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality, slower
        mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
        depthScale={0.5} // Scale the depth factor (0 = no depth, default = 0)
        minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
        maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
        depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
        debug={0}
        reflectorOffset={0.05} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
      />
    </mesh>
  );
};

export const MacBook = () => {
  const laptop = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  return (
    <primitive object={laptop.scene}>
      <Html transform className="html-wrapper" distanceFactor={1.17}>
        <iframe src="https://deomads.netlify.app/" />
      </Html>
    </primitive>
  );
};

export const Branch = props => {
  const { nodes, materials } = useGLTF("./model/tree_branch.glb");
  const material = new THREE.MeshStandardMaterial({ color: "#092b72" });

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={material}
          ></mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={material}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("./model/tree_branch.glb");

// preloads

useGLTF.preload(ROBOTHEAD);
