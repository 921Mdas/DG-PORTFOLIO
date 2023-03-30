import React, { useRef, useEffect } from "react";
import { useFrame, useLoader } from "react-three-fiber";
import * as THREE from "three";
import { PlaneBufferGeometry } from "three";
import { useControls } from "leva";

const Shader = () => {
  const vertexShader = `
    void main(){
      vec3 transformed = position;
      vec4 modelViewPosition = modelViewMatrix * vec4(transformed, 1.0);

       gl_Position = projectionMatrix * modelViewPosition;

    }
  `;
  const fragmentShader = `

   void main()
       {   
    
            gl_FragColor = vec4(1.0,0.5,0.5,1.0);
       }
  
  `;

  return (
    <shaderMaterial
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
    />
  );
};

export default Shader;
