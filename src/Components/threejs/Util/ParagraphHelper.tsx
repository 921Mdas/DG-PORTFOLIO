import React, { useEffect, useState, useRef, forwardRef } from "react";
import { Text, useScroll } from "@react-three/drei";
import * as THREE from "three";
import { Vector3 } from "three";
import Rubik from "../../../assets/Fonts/RubikBold.ttf";
import { useThree } from "react-three-fiber";
import { useFrame } from "react-three-fiber";
import { vertexShader, fragmentShader } from "./Shader";
import SimulationMaterial from "../Util/simulationMaterial";

interface Paragraph {
  text: string;
  color: string;
  scale: number;
  lineHeight: number;
  anchorX: 'number | "center" | "left" | "right"';
  anchorY: 'number | "center" | "left" | "right"';
  position: Vector3;
  font?: any;
  fnOver?: () => any;
  fnOut?: () => any;
  fnClick?: () => any;
  shade: boolean;
}

const ParagraphHelper: React.FC<Paragraph> = ({
  text = "Hello",
  color = "",
  scale = 0.5,
  lineHeight = 1,
  anchorX = 0,
  anchorY = 0,
  position = new Vector3(0, 0, 0),
  font = "",
  fnOver,
  fnOut,
  fnClick,
  shade = false,
}) => {
  const data = useScroll();
  const { width, height } = useThree(state => state.viewport);
  const grp = useRef();
  const geomRef = useRef();

  function getPoint(v, size, data, offset) {
    v.set(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1);
    if (v.length() > 1) return getPoint(v, size, data, offset);
    return v.normalize().multiplyScalar(size).toArray(data, offset);
  }

  function getSphere(count, size, p = new THREE.Vector4()) {
    const data = new Float32Array(count * 4);
    for (let i = 0; i < count * 4; i += 4) getPoint(p, size, data, i);
    return data;
  }

  const positionsTexture = new THREE.DataTexture(
    getSphere(512 * 512, 128),
    512,
    512,
    THREE.RGBAFormat,
    THREE.FloatType
  );
  positionsTexture.needsUpdate = true;

  useEffect(() => {
    const count = geomRef.current.geometry.attributes.position.count;
    const randoms = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      randoms[i] = Math.random();
    }
    geomRef.current.geometry.setAttribute(
      "aRandom",
      new THREE.BufferAttribute(randoms, 1)
    );
  }, []);

  useFrame((state, delta) => {
    shaderMat.uniforms.uTime.value += delta;
  });

  const shaderMat = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
      uTime: { value: 0 },
      positions: { value: 0 },
      uCurlFreq: { value: 0.25 },
    },
  });

  const mat = shade
    ? shaderMat
    : new THREE.MeshStandardMaterial({
        color: "red",
        toneMapped: true,
        blending: THREE.AdditiveBlending,
        roughness: 0,
        metalness: 0.2,
      });

  return (
    <Text
      scale={scale}
      lineHeight={lineHeight}
      anchorX={anchorX}
      anchorY={anchorY}
      position={position}
      font={font}
      onClick={fnClick}
      ref={grp}
      shade={shade}
      ref={geomRef}
    >
      {text}
    </Text>
  );
};

export default ParagraphHelper;
function getSphere(arg0: number, arg1: number): BufferSource {
  throw new Error("Function not implemented.");
}
