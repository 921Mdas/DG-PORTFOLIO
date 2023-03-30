import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SubIntro = () => {
  gsap.to("#secundo", {
    scrollTrigger: {
      trigger: ".welcome_section",
      toggleActions: "play none none none",
      scrub: true,
      pin: true,
      start: "center 45%",
      end: "center 30%",
    },
    right: 50,
    duration: 3,
    ease: "power2.out",
  });
  return (
    <div className="second" id="secundo">
      <h1>CREATIVE</h1>
    </div>
  );
};

export default SubIntro;
