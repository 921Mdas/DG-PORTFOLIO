// UseMotionPathAnimationTo.js
import { useRef, useLayoutEffect } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import gsap from "gsap";

export const UseMotionPathAnimationTo = (ref, settings) => {
  const scroll = useScroll();
  const tl = useRef();

  // animation
  useFrame((_state, _delta) => {
    tl?.current.seek(scroll.offset * tl?.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 5, ease: "power1.inOut" },
    });

    const tlx = tl.current;

    tlx.to(ref.current, settings);
  }, [ref, settings]);

  return <></>;
};
