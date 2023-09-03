//css imports
import "./App.scss";

// external imports
import React, { useEffect, useState } from "react";
import ThreeJS from "../threejs/canvas";

const App = () => {
  return (
    <div className="portfolio">
      <ThreeJS />
    </div>
  );
};

export default App;
