import React from "react";

const NavBtn = ({ Icon, title, idx, id }) => {
  return (
    <a href={id} class={`navigation-index nav-index${idx}`}>
      <Icon />
      <span>{title}</span>
    </a>
  );
};

export default NavBtn;
