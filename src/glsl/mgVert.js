const vertexShader = `
uniform float uTime;
uniform float uRadius;


// Source: https://github.com/dmnsgn/glsl-rotate/blob/main/rotation-3d-y.glsl.js

void main() {

  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;

}

`;

export default vertexShader;
