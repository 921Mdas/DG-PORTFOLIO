import React from "react";

const Plane = () => {
  return (
    <mesh position={[-1.5, initPos - 34, 0]}>
      <planeGeometry args={[size, size]} />
      <meshStandardMaterial color={"#6c1eff"} />
    </mesh>
  );
};

export default Geometries;
