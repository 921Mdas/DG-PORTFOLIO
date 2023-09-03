import simulationVertexShader from "../../../glsl/simulationVertexShader";
import simulationFragmentShader from "../../../glsl/simulationFragmentShader";
import * as THREE from "three";

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
