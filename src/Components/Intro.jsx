import React from "react";
import { Fade, Bounce } from "react-awesome-reveal";

const CurveGenerator = ({ txt, identityClass, shape }) => {
  return (
    <svg viewBox="0 0 500 500" className={identityClass}>
      <path id="curve" fill="transparent" d={shape} />
      <text width="500">
        <textPath href="#curve" fill="#7c86a2">
          {txt}
        </textPath>
      </text>
    </svg>
  );
};

const Intro = () => {
  return (
    <>
      <div className="circle">
        <Fade cascade damping={0.5}>
          <div className="headline_top subheadline">
            <CurveGenerator
              txt={"CODE"}
              identityClass="curveOne"
              shape={
                "M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
              }
            />
          </div>
          <div className="headline_top subheadline">
            <CurveGenerator
              txt={"TEST"}
              identityClass="curveTwo"
              shape={"M 0 300 Q 150 500 300 300 "}
            />
          </div>
          <div className="headline_top subheadline">
            <CurveGenerator
              txt={"REPEAT"}
              identityClass="curveThree"
              shape={"M 0 300 Q 150 500 300 300 "}
            />
          </div>
        </Fade>
      </div>
      <div className="headline_top subheadline">CREATIVE</div>
      <div className="headline subheadline">FULLSTACK</div>
      <div className="headline_bottom subheadline">DEVELOPER</div>
    </>
  );
};

export default Intro;
