import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useFBO, useGLTF } from "@react-three/drei";
import { useFrame, extend, createPortal } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// internal imports
import SimulationMaterial from "./SimulationMaterial";
import vertexShader from "../../../glsl/fbovertex";
import fragmentShader from "../../../glsl/fbofragment";

// models
import trialglb from "../../../assets/models/envelope.glb";

extend({ SimulationMaterial: SimulationMaterial });

const FBOParticles = () => {
  let Root = null;
  const size = 128;
  const points = useRef();
  const simulationMaterialRef = useRef();
  const { nodes } = useGLTF(trialglb, false);
  const loader = new GLTFLoader();
  loader.load(trialglb, gltf => {
    Root = gltf.scene;
    console.log("root", Root);
  });

  // traverse the model
  const model =
    nodes.Sketchfab_Scene.children[0].children[0].children[0].children[0];

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(
    -1,
    1,
    1,
    -1,
    1 / Math.pow(2, 53),
    1
  );
  const positions = new Float32Array([
    -1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0,
  ]);
  const uvs = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0]);

  const renderTarget = useFBO(size, size, {
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    format: THREE.RGBAFormat,
    stencilBuffer: false,
    type: THREE.FloatType,
  });

  //  instead of particles position

  const particlesPosition = useMemo(() => {
    const length = size * size;
    const particles = new Float32Array(length * 3);
    for (let i = 0; i < length; i++) {
      let i3 = i * 3;
      particles[i3 + 0] = (i % size) / size;
      particles[i3 + 1] = i / size / size;
    }
    return particles;
  }, [size]);

  let modelTexture = null;
  useEffect(() => {
    loader.load(trialglb, gltf => {
      Root = gltf.scene;
      gltf.scene.traverse(node => {
        if (node.isMesh) {
          const material = node.material;
          if (material && material.map) {
            modelTexture = material.map;
          }
        }
      });
    });
  }, []);

  const uniforms = useMemo(
    () => ({
      uPositions: {
        value: null,
      },
      uTexture: {
        value: null,
      },
      uTime: {
        value: 0,
      },
    }),
    []
  );

  useFrame(state => {
    const { gl, clock } = state;

    gl.setRenderTarget(renderTarget);
    gl.clear();
    gl.render(scene, camera);
    gl.setRenderTarget(null);

    points.current.material.uniforms.uPositions.value = renderTarget.texture;
    simulationMaterialRef.current.uniforms.uTime.value = clock.elapsedTime;

    if (modelTexture) {
      simulationMaterialRef.current.uniforms.uTexture.value = modelTexture; // Add this line
    }
  });

  return (
    <>
      {createPortal(
        <mesh>
          <simulationMaterial ref={simulationMaterialRef} args={[size]} />
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={positions.length / 3}
              array={positions}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-uv"
              count={uvs.length / 2}
              array={uvs}
              itemSize={2}
            />
          </bufferGeometry>
        </mesh>,
        scene
      )}
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesPosition.length / 3}
            array={particlesPosition}
            itemSize={3}
          />
        </bufferGeometry>
        <shaderMaterial
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
        />
      </points>
    </>
  );
};

const Scene = () => {
  return (
    <group position={[0, 0, 0]}>
      <ambientLight intensity={0.5} />
      <FBOParticles />
    </group>
  );
};

export default Scene;
