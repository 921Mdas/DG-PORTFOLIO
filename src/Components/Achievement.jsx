import React from "react";
import { ICON } from "../Helper/Icons";

const { AiFillTrophy } = ICON;

const Achievement = ({ text }) => {
  return (
    <div className="achievement">
      <p>
        <span>
          <AiFillTrophy />
        </span>
        {text}
      </p>
    </div>
  );
};

export default Achievement;
