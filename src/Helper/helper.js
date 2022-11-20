import TextScrambler from "react-scramble-text";
import "react-scramble-text/dist/index.css";
import { useFrame, useThree } from "react-three-fiber";
import { useEffect } from "react";
import gsap from "gsap";
import { useRef } from "react";

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
  const height = window.innerHeight;
  const { camera } = useThree();

  window.addEventListener("scroll", e => {
    const scrollRatio = window.scrollY / height;
    camera.position.y = -scrollRatio * 1.5;
  });

  // scroll and move animation base

  // window.addEventListener("scroll", () => {
  //   const scrollRatio = window.scrollY / height;
  //   // tl.to(camera.position, {
  //   //   duration: 1,
  //   // });
  //   // camera.position.y = -scrollRatio * 3;
  // });

  // useFrame((state, delta) => {
  //   window.addEventListener("mousemove", e => {
  //     if (!e) return;
  //     const { clientX, clientY } = e;
  //     const ratioX = clientX / width;
  //     const ratioY = clientY / height;

  //     camera.position.x += (ratioX - camera.position.x) * 0.1 * delta;
  //     camera.position.y += (ratioY - camera.position.y) * 0.1 * delta;
  //   });
  // });

  // useEffect(() => {
  //   window.addEventListener("mousemove", e => {
  //     if (!e) return;
  //     const { clientX, clientY } = e;
  //     const ratioX = Math.cos(clientX / window.innerWidth);
  //     const ratioY = Math.sin(clientY / window.innerHeight);

  //     camera.position.x += Math.sin(ratioX / 0.1);
  //     camera.position.y += Math.sin(ratioY / 0.1);
  //   });

  //   return () => {
  //     window.removeEventListener("scroll", window);
  //     window.removeEventListener("mousemove", window);
  //   };
  // }, [camera.position, height, width, tl]);

  //  window.addEventListener(
  //   "scroll",
  //   e => {
  //     const ratio = window.scrollY / window.innerHeight;
  //     camera.position.y = -ratio * 5;
  //   });
};
