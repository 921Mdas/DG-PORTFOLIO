import React from "react";
import { ICON } from "../../Helper/Icons";
const { AiFillTrophy } = ICON;

interface AchieveProp {
  text: string;
}

const Achievement: React.FC<AchieveProp> = ({ text }) => {
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
