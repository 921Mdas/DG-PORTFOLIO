import React from "react";
// import fragmentShader from "../Effect/Shaders/xfrag.frag";
// import vertexShader from "../Effect/Shaders/xvert.vert";

var vertexShader = require("../Effect/Shaders/xvert.vert");
var fragmentShader = require("../Effect/Shaders/xfrag.frag");

function FuckYuri() {
  console.log(fragmentShader, vertexShader);
  return (
    <mesh>
      <planeBufferGeometry args={[1, 1, 32, 32]} />
      <rawShaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}

export default FuckYuri;
