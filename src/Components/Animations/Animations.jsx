// import React, { useLayoutEffect, useRef, useCallback, useEffect } from "react";
// import { gsap } from "gsap/all";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useThree } from "react-three-fiber";
// import { useFrame } from "react-three-fiber";
// import { scrollBar } from "smooth-scrollbar";
// import { ScrollControls } from "@react-three/drei";
// gsap.registerPlugin(ScrollTrigger);

// const Animations = () => {
//   const comp = useRef();
//   const { camera } = useThree();

//   // camera
//   useLayoutEffect(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".filler",
//         toggleActions: "play none none none",
//         scrub: true,
//         start: "center 35%",
//         end: "center center",
//         markers: true,
//       },
//     });

// //     const ctx = gsap.context(() => {
// //       tl.to(
// //         camera?.position,
// //         {
// //           duration: 4,
// //           y: 2,
// //           x: 1,
// //           ease: "power2.out",
// //         },
// //         "cam"
// //       ).to(camera.position, { duration: 3, z: 2, x: 0, ease: "power2.out" });
// //     }, comp);

// //     return () => ctx.revert();
// //   }, [camera.position]);

//   // abtme
//   gsap.fromTo(
//     [".title_who", ".title_ami"],
//     {
//       autoAlpha: 0,
//     },
//     {
//       duration: 4,
//       autoAlpha: 1,
//       scrollTrigger: {
//         trigger: ".welcome_section",
//         toggleActions: "play none none none",
//         scrub: 2,
//         start: "bottom 60%",
//         end: "110% center",
//       },
//     }
//   );

//   // skills
// //   gsap.fromTo(
// //     [".intro_skills_titleOne", ".intro_skills_titleTwo"],
// //     {
// //       autoAlpha: 0,
// //     },
// //     {
// //       duration: 4,
// //       autoAlpha: 1,
// //       scrollTrigger: {
// //         trigger: ".my_skills_intro",
// //         toggleActions: "play none none none",
// //         scrub: 2,
// //         start: "top 95%",
// //         end: "bottom center",
// //       },
// //     }
// //   );

//   // projects
// //   gsap.fromTo(
// //     ".project_title_1",
// //     {
// //       autoAlpha: 0,
// //     },
// //     {
// //       duration: 4,
// //       autoAlpha: 1,
// //       scrollTrigger: {
// //         trigger: ".the_projects",
// //         toggleActions: "play none none none",
// //         scrub: 2,
// //         start: "top 80%",
// //         end: "bottom center",
// //       },
// //     }
// //   );

// //   useFrame(({ camera }) => {
// //     camera.lookAt(0, 0, 0);
// //   });

//   return <></>;
// };

// export default Animations;
