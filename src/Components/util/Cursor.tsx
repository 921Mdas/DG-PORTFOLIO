import React, { useEffect, useRef } from "react";
import "./Util.scss";

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e: { clientX: number; clientY: number }) => {
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
    };
    document.body.addEventListener("mousemove", onMouseMove);
    return () => {
      document.body.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <div className="cursor" ref={cursorRef} />;
};

export default Cursor;
