// external import
import { useThree, useFrame } from "@react-three/fiber";
import { useState, useEffect, useRef } from "react";

// components
import { useTransmissionProps } from "../Util/Transmission";
import { ProjectLensTransParent } from "../3dHelpers/BgcModels";

const CustomCursor = props => {
  const { gl, viewport } = useThree();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef();
  const { _material } = useTransmissionProps();

  useEffect(() => {
    const handleMouseMove = event => {
      const { clientX, clientY } = event;
      const rect = gl.domElement.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((clientY - rect.top) / rect.height) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [gl.domElement]);

  useFrame(() => {
    const { width, height } = viewport;
    const halfWidth = width / 2;
    const halfHeight = height / 2;

    const x = mousePosition.x * halfWidth;
    const y = mousePosition.y * halfHeight;

    cursorRef.current.position.set(x, y, 3);
    cursorRef.current.rotation.set(1, Math.PI * 0.5, 0.3);
  });

  return (
    <mesh
      ref={cursorRef}
      {...props}
      rotation={[0.3, Math.PI * 0.5, 1.4]}
      scale={0.3}
      renderOrder={999}
    >
      <ProjectLensTransParent />
    </mesh>
  );
};

export default CustomCursor;
