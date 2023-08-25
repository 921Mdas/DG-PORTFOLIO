const vertexShader = `
uniform sampler2D uPositions;
attribute vec2 reference;
varying vec2 vUv;
void main() {
   
vec3 pos = texture2D(uPositions, position.xy).xyz;

  vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
  modelPosition.z += sin(modelPosition.z * 5.0) - cos(modelPosition.z * 5.0) ;
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;

  gl_PointSize = 3.0;
  // Size attenuation;
  gl_PointSize *= step(1.0 - (1.0/64.0), position.x) + 0.5;
}

`;

export default vertexShader;

// vec3 pos = texture2D(uPositions, position.xy).xyz;

//   vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
//   vec4 viewPosition = viewMatrix * modelPosition;
//   vec4 projectedPosition = projectionMatrix * viewPosition;

//   gl_Position = projectedPosition;

//   gl_PointSize = 3.0;
//   // Size attenuation;
//   gl_PointSize *= step(1.0 - (1.0/64.0), position.x) + 0.5;
