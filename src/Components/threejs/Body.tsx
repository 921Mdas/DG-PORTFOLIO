import React from "react";
import { ScrollControls, Scroll } from "@react-three/drei";
import Foreground from "./Background/Foreground";
import Background from "./Background/Background.tsx";
import TextHeadLine from "./Util/TextHelper.tsx";
import ThreeText from "./3dContent/ThreeText";
import Animations from "../Animations/Animations";

const Body = () => {
  return (
    <>
      <ScrollControls pages={4} damping={0.2} distance={0.5}>
        <Foreground />
        <Background />
        <ThreeText />
      </ScrollControls>
    </>
  );
};

export default Body;
