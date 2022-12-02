import React from "react";
import { Fade } from "react-awesome-reveal";

const Intro = () => {
  return (
    <>
      <Fade cascade damping={0.5}>
        <div className="headline_top subheadline">CREATIVE</div>
        <div className="headline subheadline">AGILE</div>
        <div className="headline_bottom subheadline">CURIOUS</div>
      </Fade>
    </>
  );
};

export default Intro;
