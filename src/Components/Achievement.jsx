import React from "react";
import { AiFillTrophy } from "react-icons/ai";

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
