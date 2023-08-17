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
  const { material } = useTransmissionProps();

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

// import { useThree, useFrame } from "@react-three/fiber";
// import { useState, useEffect, useRef } from "react";
// import { CircleGeometry, MeshBasicMaterial, Mesh, Vector3 } from "three";

// const CustomCursor = () => {
//   const { gl, viewport, camera } = useThree();
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isMouseDown, setIsMouseDown] = useState(false);
//   const footprintsRef = useRef([]);
//   const cursorRef = useRef();

//   useEffect(() => {
//     const handleMouseMove = event => {
//       const { clientX, clientY } = event;
//       const rect = gl.domElement.getBoundingClientRect();
//       const x = ((clientX - rect.left) / rect.width) * 2 - 1;
//       const y = -((clientY - rect.top) / rect.height) * 2 + 1;
//       setMousePosition({ x, y });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, [gl.domElement]);

//   const addFootprint = () => {
//     if (!isMouseDown) return;
//     const footprintGeometry = new CircleGeometry(0.1, 32);
//     const footprintMaterial = new MeshBasicMaterial({
//       color: "white",
//       transparent: true,
//       opacity: 0.5,
//     });
//     const footprint = new Mesh(footprintGeometry, footprintMaterial);
//     const position = new Vector3();
//     position.setFromMatrixPosition(cursorRef.current.matrixWorld);
//     footprint.position.copy(position);
//     camera.getWorldQuaternion(footprint.quaternion);
//     footprintsRef.current.push(footprint);
//     gl.domElement.style.cursor = "none"; // Hide the default cursor when a footprint is added
//   };

//   useEffect(() => {
//     const handleMouseDown = () => setIsMouseDown(true);
//     const handleMouseUp = () => setIsMouseDown(false);

//     window.addEventListener("mousedown", handleMouseDown);
//     window.addEventListener("mouseup", handleMouseUp);

//     return () => {
//       window.removeEventListener("mousedown", handleMouseDown);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []);

//   useFrame(() => {
//     const { width, height } = viewport;
//     const halfWidth = width / 2;
//     const halfHeight = height / 2;

//     const x = mousePosition.x * halfWidth;
//     const y = mousePosition.y * halfHeight;

//     cursorRef.current.position.set(x, y, -0.1);

//     addFootprint();
//   });

//   return (
//     <>
//       <mesh ref={cursorRef}>
//         <circleBufferGeometry args={[0.1, 32]} />
//         <meshBasicMaterial color="white" transparent opacity={0.5} />
//       </mesh>
//       {footprintsRef.current.map((footprint, index) => (
//         <primitive key={index} object={footprint} />
//       ))}
//     </>
//   );
// };

// export default CustomCursor;
