export const vertexShader = `
  
    attribute float aRandom;
    


    void main(){
      vec3 transformed = position;
      transformed.z = cos(transformed.x * 1.0);

      vec4 modelViewPosition = modelViewMatrix * vec4(transformed, 1.0);
  
      gl_Position = projectionMatrix * modelViewPosition;

    }
  `;

export const fragmentShader = `
     
      void main() {
         gl_FragColor = vec4(0.5, 0.5, 0.5, 1.0);
      }
  `;
