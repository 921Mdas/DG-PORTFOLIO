import React, { useState, useRef, useEffect } from "react";

import Navbar from "./Components/Navbar/Navbar";
import Greet from "./Components/Greet/Greet";
import Network from "./Components/Network/Network";
import Sdx from "./Components/sideEffect/Sdx";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

function App() {
  const [pos, setPos] = useState(0);
  const [visible, setVisible] = useState(false);
  const [items, setItems] = useState([]);

  const TargetsEl = document.querySelector(".observer");
  const Collection = TargetsEl?.children;

  return (
    <div className="Main">
      <Greet />
    </div>
  );
}

export default App;
