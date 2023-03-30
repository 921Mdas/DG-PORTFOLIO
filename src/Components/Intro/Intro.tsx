import React, { useLayoutEffect, useRef } from "react";
import "./intro.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  return (
    <>
      <div className="intro_boundless">
        <div className="first" id="uno">
          {/* <h1>BOUNDLESSLY</h1> */}
        </div>
        <div className="second" id="secundo">
          {/* <h1>CREATIVE</h1> */}
        </div>
      </div>
    </>
  );
};

export default Intro;
