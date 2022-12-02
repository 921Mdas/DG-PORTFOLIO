import React from "react";
import NavBtn from "./NavBtn";
import { NavData } from "../Helper/data";

const Nav = () => {
  return (
    <div id="navigation_bar">
      <div className="logo">
        <h3>deomadingu</h3>
        <h6>SOFTWARE DEVELOPER</h6>
      </div>

      <div className="navigation_btn">
        {NavData.map((el, idx) => {
          return <NavBtn {...el} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default Nav;
