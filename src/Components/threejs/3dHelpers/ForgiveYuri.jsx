import React, { useMemo, useRef } from "react";
import { useFrame } from "react-three-fiber";
import vertexShader from "../../../glsl/mgVert";
import fragmentShader from "../../../glsl/mgFrag";

const ForgiveYuri = () => {
  const count = 2000;
  const points = useRef();

  const particlesPosition = useMemo(() => {
    let positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      let x = (Math.random() - 0.5) * 2;
      let y = (Math.random() - 0.5) * 2;
      let z = (Math.random() - 0.5) * 2;

      positions.set([x, y, z], i * 3);
    }

    return positions;
  }, [count]);

  const uniforms = useMemo(() => {
    return {
      uTime: { value: 0.0 },
      uRadius: { value: 2.0 },
    };
  }, []);

  useFrame(state => {
    const { clock } = state;
    points.current.material.uniforms.uTime.value = clock.elapsedTime;
  });
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        depthWrite={false}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </points>
  );
};

export default ForgiveYuri;
