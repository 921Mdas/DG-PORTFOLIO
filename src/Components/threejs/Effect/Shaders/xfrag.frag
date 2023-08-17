
precision mediump float;
varying vec2 vUv;
varying float vTime;

uniform sampler2D uTexture;


void main(){
    gl_FragColor = vec4(vUv,1.0,1.0);
}

