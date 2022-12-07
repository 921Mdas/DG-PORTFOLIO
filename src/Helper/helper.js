import "react-scramble-text/dist/index.css";
import TextScrambler from "react-scramble-text";
import { useThree } from "react-three-fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

export const SIMPLEGSAP = (className, start, end, marker) => {
  return gsap.to({
    scrollTrigger: {
      trigger: className,
      toggleActions: "play none none none",
      scrub: 2,
      start: start,
      end: end,
      markers: marker,
    },
  });
};

export const R3FCameraAnimatedEvents = () => {
  const height = window.innerHeight;
  const { camera } = useThree();

  window.addEventListener("scroll", e => {
    const scrollRatio = window.scrollY / height;
    // camera.position.y = -scrollRatio * 1.5;
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".welcome_section",
      toggleActions: "play none none none",
      scrub: 2,
      start: "center 45%",
      // markers: true,
    },
  });

  tl.to(camera.rotation, { duration: 5, z: Math.PI * 0.03 }).to(
    camera.position,
    { duration: 5, y: Math.PI * 0.5 }
  );
};

export const AwesomeReveal = ({ Fx, children, delay, direction = "up" }) => {
  return (
    <Fx delay={delay} direction={direction}>
      {children}
    </Fx>
  );
};
