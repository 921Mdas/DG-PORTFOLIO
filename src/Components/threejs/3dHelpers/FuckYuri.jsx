import React, { useEffect, useMemo, useRef, useCallback } from "react";
import fragmentShader from "../../../glsl/xfrag";
import vertexShader from "../../../glsl/xvert";
import * as THREE from "three";
import { useFrame } from "react-three-fiber";
import { MathUtils, Vector2, Color } from "three";
// var vertexShader = require("../../../glsl/xvert.vert");
// var fragmentShader = require("../../../glsl/xfrag.frag");

function FuckYuri() {
  const planeRef = useRef(null);
  const hover = useRef(false);

  const mousePosition = useRef({ x: 0, y: 0 });

  const updateMousePosition = useCallback(e => {
    mousePosition.current = { x: e.pageX, y: e.pageY };
  }, []);

  useEffect(() => {
    let count = planeRef.current.geometry.attributes.uv.count;
    let positions = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i] = Math.random();
    }
    planeRef.current.geometry.setAttribute(
      "aRandom",
      new THREE.BufferAttribute(positions, 1)
    );
    window.addEventListener("mousemove", updateMousePosition, false);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition, false);
    };
  }, [updateMousePosition]);

  const uniforms = useMemo(() => {
    return {
      uTime: {
        value: 0,
      },
      u_intensity: {
        value: 0.1,
      },
      u_mouse: { value: new Vector2(0, 0) },
      u_bg: {
        value: new Color("#57878F"),
      },
      u_colorA: { value: new Color("#ffffff") },
      u_colorB: { value: new Color("#57878F") },
    };
  });

  useFrame((state, delta) => {
    const { clock } = state;
    planeRef.current.material.uniforms.uTime.value =
      0.2 * clock.getElapsedTime();

    planeRef.current.material.uniforms.u_intensity.value = MathUtils.lerp(
      planeRef.current.material.uniforms.u_intensity.value,
      hover.current ? 0.45 : 0.15,
      0.02
    );
    planeRef.current.material.uniforms.u_mouse.value = new Vector2(
      mousePosition.current.x,
      mousePosition.current.y
    );
  });

  return (
    <>
      <mesh
        ref={planeRef}
        onPointerOver={() => (hover.current = true)}
        onPointerOut={() => (hover.current = false)}
      >
        <planeGeometry args={[10, 10, 32, 32]} />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          wireframe={false}
          uniforms={uniforms}
        />
      </mesh>
    </>
  );
}

export default FuckYuri;
