import React from "react";
import SocialLinks from "../util/SocialLinks.tsx";
import { IoMdMail } from "react-icons/io";
import { AiOutlineLine } from "react-icons/ai";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="foot_sec">
      <div className="foot_one">
        <p>I'd love to hear from you</p>{" "}
        <span className="line_break">
          <AiOutlineLine />
        </span>
        <span className="email">
          <IoMdMail className="foot_icon" />
          <span>rodeomads@gmail.com</span>
        </span>
      </div>
      <div className="social">
        <SocialLinks />
      </div>
    </div>
  );
};

export default Footer;
