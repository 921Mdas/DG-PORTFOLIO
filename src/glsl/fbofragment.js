const fragmentShader = `
void main() {
  vec3 color = vec3(0.2, 3.0, 5.0);
  gl_FragColor = vec4(color, 1.0);
}
`;

export default fragmentShader;
