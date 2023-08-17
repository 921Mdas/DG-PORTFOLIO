import React, { useEffect, useRef } from "react";
import { useThree } from "react-three-fiber";
import * as THREE from "three";

import { easeOutSine } from "../Util/easing.utils";

const TouchTexture = () => {
  const size = 64;
  const maxAge = 120;
  const radius = 0.15;
  const trail = [];

  const canvasRef = useRef();
  const { gl } = useThree();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, size, size);

    const texture = new THREE.Texture(canvas);

    const clear = () => {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, size, size);
    };

    const drawTouch = point => {
      const pos = {
        x: point.x * size,
        y: (1 - point.y) * size,
      };

      let intensity = 1;
      if (point.age < maxAge * 0.3) {
        intensity = easeOutSine(point.age / (maxAge * 0.3), 0, 1, 1);
      } else {
        intensity = easeOutSine(
          1 - (point.age - maxAge * 0.3) / (maxAge * 0.7),
          0,
          1,
          1
        );
      }

      intensity *= point.force;

      const radiusValue = size * radius * intensity;
      const grd = ctx.createRadialGradient(
        pos.x,
        pos.y,
        radiusValue * 0.25,
        pos.x,
        pos.y,
        radiusValue
      );
      grd.addColorStop(0, `rgba(255, 255, 255, 0.2)`);
      grd.addColorStop(1, "rgba(0, 0, 0, 0.0)");

      ctx.beginPath();
      ctx.fillStyle = grd;
      ctx.arc(pos.x, pos.y, radiusValue, 0, Math.PI * 2);
      ctx.fill();
    };

    const update = delta => {
      clear();

      // age points
      trail.forEach((point, i) => {
        point.age++;
        // remove old
        if (point.age > maxAge) {
          trail.splice(i, 1);
        }
      });

      trail.forEach(point => {
        drawTouch(point);
      });

      texture.needsUpdate = true;
    };

    const addTouch = point => {
      let force = 0;
      const last = trail[trail.length - 1];
      if (last) {
        const dx = last.x - point.x;
        const dy = last.y - point.y;
        const dd = dx * dx + dy * dy;
        force = Math.min(dd * 10000, 1);
      }
      trail.push({ x: point.x, y: point.y, age: 0, force });
    };

    gl.domElement.addEventListener("pointermove", e => {
      const { clientX, clientY } = e;
      const rect = gl.domElement.getBoundingClientRect();
      const x = ((clientX - rect.left) / size) * 2 - 1;
      const y = -((clientY - rect.top) / size) * 2 + 1;
      addTouch({ x, y });
    });

    const animationId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationId);
      gl.domElement.removeEventListener("pointermove", addTouch);
    };
  }, [gl]);

  return <canvas ref={canvasRef} width={size} height={size} />;
};

export default TouchTexture;
