import { GPUComputationRenderer } from "three/addons/misc/GPUComputationRenderer.js";

// external imports
import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Debug, Physics, RigidBody } from "@react-three/rapier";
import { CloudMaze, Eye } from "./BgcModels.jsx";
import Particles from "./BrunoParticles.jsx";
import { useThree } from "react-three-fiber";
import woman from "../../../assets/models/woman.glb";
import {
  TextureLoader,
  Vector3,
  RepeatWrapping,
  LinearFilter,
  Euler,
  BufferGeometry,
} from "three";
import { useControls } from "leva";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Float, Html, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";
// components
import CustomCursor from "../Cursors/Cursor.jsx";
// import Particles from "./Particles";
import { Blob, Cells, CylinderWall, Line } from "./BgcModels.jsx";
import VideoWrap from "./Video.jsx";
import VFX from "../Effect/BloomVFX.jsx";
import imageTexture from "../../../assets/Images/girl.png";
import xfrag from "../Effect/Shaders/xfrag";
import xvert from "../Effect/Shaders/xvert";
import vertexShader from "../Effect/Shaders/xvert";
import fragmentShader from "../Effect/Shaders/xfrag";
import particleVertex from "../Effect/Shaders/particlevertex";
import fragmentSimulation from "../Effect/Shaders/fragmentSimulation.js";

const WIDTH = 32;
const Experimental = () => {
  const plane = useRef(null);
  const { gl } = useThree();
  const [gpuCompute, setGpuCompute] = useState(null);

  // model
  const { nodes } = useGLTF(woman, false);

  // uniforms
  const uniforms = {
    uStrength: { value: new THREE.Vector2(4, 10) },
    uTime: { value: 0 },
    uPositionTexture: { value: null },
  };

  // traverse the model
  const model = nodes.Root.children[1].children[0];
  const scalemodel = 0.05;
  model.geometry.scale(scalemodel, scalemodel, scalemodel);
  const facePos = model.geometry.attributes.position.array;
  const faceNumber = facePos.length / 3;

  //   GPU
  // let gpuCompute; // Declare the GPUComputationRenderer
  let positionVariable;
  let dtPosition;
  //   additional setup
  let geometry = new THREE.BufferGeometry();
  let positions = new Float32Array(WIDTH * WIDTH * 3);
  let reference = new Float32Array(WIDTH * WIDTH * 2);

  const fillPositions = texture => {
    let arr = texture.image.data;

    //   the array of texture data has about 4096 length
    // meaning each particle has 4 data it carries
    for (let i = 0; i < arr.length; i = i + 4) {
      //   here we set the particles positions
      // next we create random values to assign to each of 4 data positions;
      let x = Math.random();
      let y = Math.random();
      let z = Math.random();
      // for each particle, fill it's position with these random values at each iteration
      arr[i] = x;
      arr[i + 1] = y;
      arr[i + 2] = z;
      arr[i + 3] = 1;
    }
  };

  useEffect(() => {
    // Initialize the GPUComputationRenderer
    if (!gpuCompute) {
      // Initialize the GPUComputationRenderer when gpuCompute is not set
      const newGpuCompute = new GPUComputationRenderer(WIDTH, WIDTH, gl);
      setGpuCompute(newGpuCompute);
    }

    const initGPU = () => {
      // gpuCompute = new GPUComputationRenderer(WIDTH, WIDTH, gl);

      console.log(gpuCompute, "test");
      // Add your GPU computation setups here
      // dataTexturePosition contains the data of the texture we need for fill in;
      //   here we use the gpucompute to create the texture floatArray where we can add data to match the position pf each vertex position
      if (gpuCompute) {
        dtPosition = gpuCompute.createTexture();
        fillPositions(dtPosition);
        positionVariable = gpuCompute.addVariable(
          "texturePosition",
          fragmentSimulation,
          dtPosition
        );

        // positionVariable.material.uniforms["time"] = { value: 0 };
        positionVariable.wraps = THREE.RepeatWrapping;
        positionVariable.wrapT = THREE.RepeatWrapping;

        for (let i = 0; i < WIDTH * WIDTH; i++) {
          let rand = Math.floor(Math.random() * faceNumber);
          let x = facePos[3 * rand];
          let y = facePos[3 * rand + 1];
          let z = facePos[3 * rand + 2];
          // rows and columns filling virtual uvs
          let xx = (i % WIDTH) / WIDTH;
          let yy = ~~(i / WIDTH) / WIDTH;

          positions.set([x, y, z], i * 3);
          reference.set([xx, yy], i * 2);
        }

        geometry.setAttribute(
          "position",
          new THREE.BufferAttribute(positions, 3)
        );
        geometry.setAttribute(
          "reference",
          new THREE.BufferAttribute(reference, 2)
        );

        gpuCompute.init();
      }
    };

    initGPU();
  }, [gl, gpuCompute]);
  //  we create custom uvs, normally they already exist on any given geometry
  // here we are creating our own custom geometry so the particles are not confined within a specific shape
  useFrame((state, delta) => {
    if (gpuCompute && plane.current) {
      gpuCompute.compute();

      const computedTexture =
        gpuCompute?.getCurrentRenderTarget(positionVariable).texture;
      plane.current.material.uniforms.uPositionTexture.value = computedTexture;

      // positionVariable.material.uniforms["time"].value = delta;
    }
  });

  return (
    <>
      <points ref={plane} geometry={geometry}>
        <shaderMaterial
          vertexShader={particleVertex}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          side={THREE.DoubleSide}
        />
      </points>
    </>
  );
};

export default Experimental;
