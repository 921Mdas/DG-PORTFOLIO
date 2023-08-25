import React, { useRef, useEffect } from "react";
import { useThree } from "react-three-fiber";
import * as THREE from "three";
import bb from "../../../assets/Images/pot.png";

function ImageMesh({ img, width, height, elevation }) {
  const meshRef = useRef();
  const { gl } = useThree();

  useEffect(() => {
    if (!img) return;

    const ctx = document.createElement("canvas").getContext("2d");
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    ctx.drawImage(img, 0, 0);

    const imgData = ctx.getImageData(0, 0, width, height);
    const iData = imgData.data;

    const l = width * height;
    const positions = new Float32Array(l * 3);
    for (let i = 0; i < l; i++) {
      const i3 = i * 3;
      const i4 = i * 4;
      positions[i3] = ((i % width) / width - 0.5) * width;
      positions[i3 + 1] =
        ((iData[i4] / 0xff) * 0.299 +
          (iData[i4 + 1] / 0xff) * 0.587 +
          (iData[i4 + 2] / 0xff) * 0.114) *
        elevation;
      positions[i3 + 2] = (i / width / height - 0.5) * height;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({ size: 0.1, color: "white" });
    const points = new THREE.Points(geometry, material);

    meshRef.current = points;
    gl.domElement.addEventListener("resize", onResize);

    return () => {
      gl.domElement.removeEventListener("resize", onResize);
      if (meshRef.current) {
        meshRef.current.geometry.dispose();
        meshRef.current.material.dispose();
      }
    };
  }, [img, width, height, elevation, gl]);

  const onResize = () => {
    const { clientWidth, clientHeight } = gl.domElement;
    meshRef.current.material.uniforms.resolution.value.set(
      clientWidth,
      clientHeight
    );
  };

  return <primitive object={meshRef.current} position={[0, 0, 0]} />;
}

// Rest of your code remains the same...

function getImageTexture(imgSrc) {
  const img = new Image();
  img.src = imgSrc;
  return img;
}

function Imaginez() {
  const imgTexture = getImageTexture(bb); // Replace with your image path

  return (
    <>
      <ImageMesh img={imgTexture} width={512} height={512} elevation={10} />
    </>
  );
}

export default Imaginez;
