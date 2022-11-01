import React from "react";
import "./sdx.scss";
import icon1 from "../../assets/geometry.png";
import icon2 from "../../assets/colorball.png";
import icon3 from "../../assets/shapes.png";
import icon4 from "../../assets/react.png";
import icon5 from "../../assets/django.png";
import icon6 from "../../assets/python.png";
import { useState } from "react";

import space from "../../assets/space.png";
import dj from "../../assets/django.png";
import js from "../../assets/js.png";
import python from "../../assets/python.png";
import redux from "../../assets/redux.png";
import node from "../../assets/node.png";

const Sdx = () => {
  const [pos, setPos] = useState(0);
  window.addEventListener("scroll", () => {
    setPos(window.scrollY);
  });

  return (
    <>
      <div className="sdx" data-testid="sdx-1">
        <img
          src={icon1}
          className="img_prlx"
          style={{
            transform: `translateY(${pos}px) rotate(${pos}deg) translateX(${
              pos / 50
            }px)  `,
          }}
          alt=""
        />
        <img
          src={icon2}
          className="img_prlx"
          alt=""
          style={{
            transform: `translateY(${-pos}px) rotate(${pos}deg)`,
          }}
        />
        <img
          src={icon3}
          className="img_prlx"
          alt=""
          style={{
            transform: `translateY(${-pos}px) rotate(${-pos}deg)`,
          }}
        />
        <img
          src={icon4}
          className="img_prlx"
          alt=""
          style={{
            transform: `translateY(${-pos}px) rotate(${pos}deg)`,
          }}
        />

        <img src={space} className="img_prlx" alt="" />
        <img
          src={dj}
          alt=""
          className="img_prlx"
          style={{
            transform: `translateY(${-pos}px)`,
          }}
        />
        <img
          src={js}
          alt=""
          className="img_prlx"
          style={{
            transform: `translateY(${-pos}px)`,
          }}
        />
        <img
          src={python}
          alt=""
          className="img_prlx"
          style={{
            transform: `translateY(${-pos}px)`,
          }}
        />
        <img
          src={redux}
          alt=""
          className="img_prlx"
          style={{
            transform: `translateY(${-pos}px) rotate(${pos}deg)`,
          }}
        />
        <img
          src={node}
          alt=""
          className="img_prlx"
          style={{
            transform: `translateY(${-pos}px)`,
          }}
        />
      </div>
      <div className="counter">{pos}px</div>
    </>
  );
};

export default Sdx;
