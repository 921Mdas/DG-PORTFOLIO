import React, { useRef, useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";

const Loader = props => {
  const { progress } = useProgress();
  const [showLoader, setShowLoader] = useState(true);
  const ref = useRef();
  const hideLoader = () => {
    setShowLoader(false);
  };
  const timeOut = setTimeout(hideLoader, 500);

  useEffect(() => {
    const geneRateLoader = async () => {
      ref.current.style.width = `${progress}%`;
      if (progress === 100) {
        hideLoader();
      }
    };
    geneRateLoader();
  }, [progress]);

  return (
    <>
      {showLoader ? (
        <div className="loading_screen">
          <div className="loading_bar">
            <div className="progress" ref={ref}></div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Loader;
