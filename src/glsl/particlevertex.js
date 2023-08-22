const particleVertex = `
uniform sampler2D uPositionTexture;
attribute vec2 reference;

varying vec2 vUv;


void main() {
    vUv = reference;
    vec3 pos = texture2D(uPositionTexture, reference).xyz;
    vec4 mvPosition = modelViewMatrix * vec4(pos,1.0);
    gl_PointSize = 30.0 * (1.0 / - mvPosition.z);

    gl_Position = projectionMatrix * mvPosition;
}



`;

export default particleVertex;
