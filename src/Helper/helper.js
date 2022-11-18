import TextScrambler from "react-scramble-text";
import "react-scramble-text/dist/index.css";
import { useThree } from "react-three-fiber";
import { useEffect } from "react";
import gsap from "gsap";

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

export const R3FCameraAnimatedEvents = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const { camera } = useThree();
  const tl = gsap.timeline();

  // scroll and move animation base
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollRatio = window.scrollY / height;
      camera.position.y = -scrollRatio * 3;
    });

    window.addEventListener("mousemove", e => {
      if (!e) return;
      const { clientX } = e;
      let ratioWidth = clientX / width;

      camera.position.x += (ratioWidth - camera.position.x) * 0.01;
    });

    return () => {
      window.removeEventListener("scroll", window);
      window.removeEventListener("mousemove", window);
    };
  }, [camera.position, height, width, tl]);
};
