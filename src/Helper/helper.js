import TextScrambler from "react-scramble-text";
import "react-scramble-text/dist/index.css";

export const Scrambler = ({ phrases, speed, pauseTime }) => {
  return (
    <TextScrambler
      phrases={phrases}
      speed={speed}
      pauseTime={pauseTime}
      chars={"▲△◀∅∏▒▢◁≈▶▣▭"}
      repetitions={2}
    />
  );
};

export const MovePagePos = (page, perc) => {
  page.current.style.setProperty("left", `${perc}%`);
  return null;
};

export const MovePageNeg = (page, perc) => {
  page.current.style.setProperty("left", `-${perc}%`);
  return null;
};
