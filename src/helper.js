import React, { useState, useRef } from "react";

// export const OBSERVERAPI = (target, stateChange) => {
//   const cb = (entries, observer) => {
//     const [entry] = entries;
//     const ratio = Math.trunc(entry.intersectionRatio * 100) > 15;
//     ratio ? stateChange(true) : stateChange(false);
//     observer.unobserve(entry.target);
//   };
//   const observer = new IntersectionObserver(cb, {
//     root: null,
//     threshold: 0.4,
//     rootMargin: "0px",
//   });

//   if (target.current) {
//     observer.observe(target.current);
//   }
// };
