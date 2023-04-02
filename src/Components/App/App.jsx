//css imports
import "./App.scss";

// external imports
import React, { useEffect, useState } from "react";
import ThreeJS from "../threejs/canvas";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div className="portfolio">
      {isLoading ? (
        <div className="loader">...</div>
      ) : (
        <>
          <ThreeJS />
        </>
      )}
    </div>
  );
};

export default App;
