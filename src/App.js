import React, { useState, useRef, useEffect } from "react";

import Main from "./Pages/Home/Home";

function App() {
  const [pos, setPos] = useState(0);
  const [visible, setVisible] = useState(false);
  const [items, setItems] = useState([]);

  const TargetsEl = document.querySelector(".observer");
  const Collection = TargetsEl?.children;

  return (
    <div className="Main">
      <Main />
    </div>
  );
}

export default App;
