import React from "react";

const SocialLink = props => {
  return (
    <div className="social">
      <a
        href={props.url}
        target="_blank"
        rel="noreferrer"
        data-content={props.name}
      >
        {props.children}
      </a>
    </div>
  );
};

export default SocialLink;
