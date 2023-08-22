import React from "react";
import { useFBO, useGLTF } from "@react-three/drei";
import { useFrame, extend, createPortal, Canvas } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import woman from "../../../assets/models/woman.glb";
import SimulationMaterial from "./SimulationMaterial";
import vertexShader from "../../../glsl/fbovertex";
import fragmentShader from "../../../glsl/fbofragment";

extend({ SimulationMaterial: SimulationMaterial });

const FBOParticles = () => {
  const size = 128;
  const points = useRef();
  const simulationMaterialRef = useRef();
  const { nodes } = useGLTF(woman, false);

  // traverse the model
  const model = nodes.Root.children[1].children[0];
  const scalemodel = 0.05;
  model.geometry.scale(scalemodel, scalemodel, scalemodel);
  const facePos = model.geometry.attributes.position.array;
  const faceNumber = facePos.length / 3;

  console.log(facePos);

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
  const fillPositions = texture => {
    let arr = texture.image.data;

    //   the array of texture data has about 4096 length
    // meaning each particle has 4 data it carries
    for (let i = 0; i < arr.length; i = i + 4) {
      //   here we set the particles positions
      // next we create random values to assign to each of 4 data positions;
      let rand = Math.floor(Math.random() * faceNumber);
      let x = facePos[i * rand];
      let y = facePos[i * rand + 1];
      let z = facePos[i * rand + 2];
      // for each particle, fill it's position with these random values at each iteration
      arr[i] = x;
      arr[i + 1] = y;
      arr[i + 2] = z;
      arr[i + 3] = 1;
    }

    return arr;
  };

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

  const uniforms = useMemo(
    () => ({
      uPositions: {
        value: null,
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
    <>
      <ambientLight intensity={0.5} />
      <FBOParticles />
    </>
  );
};

export default Scene;
