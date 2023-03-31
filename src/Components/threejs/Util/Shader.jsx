import React, { useRef, useEffect } from "react";
import { useFrame, useLoader } from "react-three-fiber";
import * as THREE from "three";
import { PlaneBufferGeometry } from "three";
import { useControls } from "leva";

export const vertexShader = `
  
    attribute float aRandom;


    void main(){
      vec3 transformed = position;
      transformed.z = sin(transformed.x * 10.0) * aRandom;
      vec4 modelViewPosition = modelViewMatrix * vec4(transformed, 1.0);
  
      gl_Position = projectionMatrix * modelViewPosition;

    }
  `;

export const fragmentShader = `
     
      void main() {
        gl_FragColor = vec4(1.0,1.0,1.0,1.0);
      }
  `;
