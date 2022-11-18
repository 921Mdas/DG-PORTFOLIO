import React from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const SocialLink = () => {
  return (
    <>
      <div className="presentation_social section4 section">
        <div className="presentation_social_icon">
          <div className="social">
            <a
              href="https://www.linkedin.com/in/deo-m-5b873253/"
              target="_blank"
              rel="noreferrer"
              data-content="Linkedin"
            >
              <GrLinkedinOption />
            </a>
          </div>
          <div className="social">
            <a
              href="https://github.com/921Mdas/"
              target="_blank"
              rel="noreferrer"
              data-content="Github"
            >
              <FaGithubSquare />
            </a>
          </div>
          <div className="social">
            <a
              className="soc_link"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              data-content="Instagram"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialLink;
