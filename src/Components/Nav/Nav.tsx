import "./nav.scss";
import React from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import Cursor from "../util/Cursor.tsx";

const Nav: React.FC = () => {
  return (
    <>
      <div className="navigation_bar">
        <div className="logo_name">
          <div className="logoname_title">deomadingu</div>
          <div className="logoname_subtitle">FULLSTACK DEVELOPER</div>
        </div>
        <div className="instruction">
          <div className="circle">
            <BsFillArrowDownCircleFill />
          </div>
          <div className="circle_text">scroll to interact</div>
        </div>
      </div>
      <Cursor />
    </>
  );
};

export default Nav;
