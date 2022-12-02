import React from "react";

const NavBtn = ({ Icon, title, idx }) => {
  return (
    <button class={`navigation-index nav-index${idx}`} content-data={title}>
      <Icon />
    </button>
  );
};

export default NavBtn;
