const fragmentShader = `
varying float vDistance;

void main() {
  vec3 color = vec3(0.34, 0.53, 0.96);
  color = mix(color, vec3(0.97, 0.70, 0.45), 0.5);
  gl_FragColor = vec4(color, 1.0);
}
`;

export default fragmentShader;
