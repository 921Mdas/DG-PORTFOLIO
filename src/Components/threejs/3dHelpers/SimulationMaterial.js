import simulationVertexShader from "../../../glsl/simulationVertexShader";
import simulationFragmentShader from "../../../glsl/simulationFragmentShader";
import * as THREE from "three";
import woman from "../../../assets/models/woman.glb";
import { useGLTF } from "@react-three/drei";

// get random data doesn't transform anything!
// const getRandomData = (width, height) => {
//   // we need to create a vec4 since we're passing the positions to the fragment shader
//   // data textures need to have 4 components, R, G, B, and A
//   const length = width * height * 4;
//   const data = new Float32Array(length);

//   for (let i = 0; i < length; i++) {
//     const stride = i * 4;

//     const distance = Math.sqrt(Math.random()) * 2.0;
//     const theta = THREE.MathUtils.randFloatSpread(360);
//     const phi = THREE.MathUtils.randFloatSpread(360);

//     data[stride] = distance * Math.sin(theta) * Math.cos(phi);
//     data[stride + 1] = distance * Math.sin(theta) * Math.sin(phi);
//     data[stride + 2] = distance * Math.cos(theta);
//     data[stride + 3] = 1.0; // this value will not have any impact
//   }

//   return data;
// };
const getRandomData = (width, height) => {
  const length = width * height * 4;
  const data = new Float32Array(length);

  const vertexA = new THREE.Vector3(0, 0, 1);
  const vertexB = new THREE.Vector3(1, 0, 0);
  const vertexC = new THREE.Vector3(0, 1, 0);

  for (let i = 0; i < length; i++) {
    const stride = i * 4;

    // Generate random barycentric coordinates
    const w1 = Math.random();
    const w2 = Math.random() * (1 - w1);
    const w3 = 1 - w1 - w2;

    // Calculate the random point within the triangle using barycentric coordinates
    const randomPoint = new THREE.Vector3()
      .copy(vertexA)
      .multiplyScalar(w1)
      .addScaledVector(vertexB, w2)
      .addScaledVector(vertexC, w3);

    data[stride] = randomPoint.x;
    data[stride + 1] = randomPoint.y;
    data[stride + 2] = randomPoint.z;
    data[stride + 3] = 1.0;
  }

  return data;
};

// const fillPositions = (facePos, faceNumber) => {
//   // let arr = texture.image.data;
//   let positions = [];

//   //   the array of texture data has about 4096 length
//   // meaning each particle has 4 data it carries
//   for (let i = 0; i < facePos.length; i = i + 4) {
//     //   here we set the particles positions
//     // next we create random values to assign to each of 4 data positions;
//     let rand = Math.floor(Math.random() * facePos.length);
//     let x = facePos[i * rand];
//     let y = facePos[i * rand + 1];
//     let z = facePos[i * rand + 2];
//     // for each particle, fill it's position with these random values at each iteration
//     positions[i] = x;
//     positions[i + 1] = y;
//     positions[i + 2] = z;
//     positions[i + 3] = 1;
//   }

//   console.log("xx", positions);
//   return positions;
// };

class SimulationMaterial extends THREE.ShaderMaterial {
  constructor(size, facePos, faceNumber) {
    const positionsTexture = new THREE.DataTexture(
      getRandomData(size, size),
      size,
      size,
      THREE.RGBAFormat,
      THREE.FloatType
    );
    positionsTexture.needsUpdate = true;

    const simulationUniforms = {
      positions: { value: positionsTexture },
      uFrequency: { value: 1 },
      uTime: { value: 0 },
    };

    super({
      uniforms: simulationUniforms,
      vertexShader: simulationVertexShader,
      fragmentShader: simulationFragmentShader,
    });
  }
}

export default SimulationMaterial;
