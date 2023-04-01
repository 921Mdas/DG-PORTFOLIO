//css imports
import "./App.scss";

// external imports
import React, { Suspense, useEffect, useState } from "react";
import ThreeJS from "../threejs/canvas";

// components
import LoaderX from "../threejs/LoaderX.tsx";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="portfolio">
      <div className="canvas">
        <ThreeJS />
      </div>
    </div>
  );
};

export default App;
