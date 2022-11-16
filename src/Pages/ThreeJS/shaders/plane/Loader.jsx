import React, { useMemo } from "react";

const vertexShader = `
        
        void main()
        {
            gl_Position =  vec4(position, 1.0);
        }
    `;
const fragmentShader = `
        uniform float uAlpha;
        void main()
        {
            gl_FragColor = vec4(0.122,0.318,1, uAlpha);
        }
    `;

const Loader = () => {
  const uniforms = useMemo(
    () => ({
      uAlpha: { value: 1 },
    }),
    []
  );

  return (
    <mesh>
      <planeGeometry args={[3, 3]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent={true}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default Loader;
