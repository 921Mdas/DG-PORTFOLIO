import React from "react";
import ParagraphHelper from "../../Util/ParagraphHelper.tsx";

const About = ({ _headNum, _material, initPos }) => {
  return (
    <>
      <group position={[0, 0, 0.4]}>
        <ParagraphHelper
          scale={0.06}
          lineHeight={2}
          anchorX={40}
          anchorY={initPos + 8}
          text={`
                 Originally from the DR Congo, 
                  I have worked and studied 
in beautiful Cape Town, South Africa. 
        `}
        />
      </group>
      <group position={[0.2, 0, 1]}>
        <ParagraphHelper
          scale={0.06}
          lineHeight={2}
          anchorX={30}
          anchorY={initPos + 15}
          text={`            
Representing MERN land.
Love creative projects
Curious about new stuffs
        Enjoy collaborating.`}
        />
      </group>

      <group position={[0, 0, 0.4]}>
        <ParagraphHelper
          scale={0.06}
          lineHeight={2}
          anchorX={40}
          anchorY={initPos + 26}
          text={`I enjoy good music,
        Particularly Blake Shelton's music 
              Love travelling, playing chess, 
        savoring sushi,and programming </>`}
        />
      </group>
    </>
  );
};

export default About;
