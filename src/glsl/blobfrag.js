// const BlobFrag = `

// uniform float u_intensity;
// uniform float u_time;

// varying vec2 vUv;
// varying float vDisplacement;

// void main() {
//     // Calculate the distort factor based on vDisplacement and u_intensity
//     float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);

//     // Calculate the intensity value for the dark spots (0.0 to 1.0)
//     float darkSpotIntensity = 1.0 - distort;

//     // Set the final color to white, but modulate it by the darkSpotIntensity to show dark spots
//     vec3 color = vec3(1.0) * darkSpotIntensity;

//     gl_FragColor = vec4(color, 1.0);
// }

// `;
const BlobFrag = `

uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {

    vec3 color = vec3(0.2, 3.0, 5.0);
    float strength = distance(gl_PointCoord, vec2(0.5 +   u_intensity ));
    strength = 1.0 / strength;
    strength = pow(strength, 2.0);

    color = mix(color, vec3(0.97, 0.70, 0.45), vDisplacement * 0.5);
    color = mix(vec3(0.0), color, strength);
    gl_FragColor = vec4(color, strength);

    // Calculate the distort factor based on vDisplacement and u_intensity
    float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time + u_intensity);

    // Calculate the intensity value for the dark spots (0.0 to 1.0)
    float darkSpotIntensity = 0.0 - distort;

    // Set the final color to white, but modulate it by the darkSpotIntensity to show dark spots
    // vec3 color = vec3(1.0) * darkSpotIntensity;

    gl_FragColor = vec4(color, strength);
}


`;

export default BlobFrag;
