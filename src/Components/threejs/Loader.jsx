import React, { useRef, useEffect, useState } from "react";
import { useProgress, Html } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "black",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", marginRight: "10px" }}
        >
          <div
            className="dot"
            style={{
              animationDelay: "0s",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          ></div>
          <div className="dot" style={{ animationDelay: "0.2s" }}></div>
          <div className="dot" style={{ animationDelay: "0.4s" }}></div>
        </div> */}
      {/* </div> */}
      <div className="OutlineX">{Math.round(progress)}%</div>
    </Html>
  );
}

export default Loader;
