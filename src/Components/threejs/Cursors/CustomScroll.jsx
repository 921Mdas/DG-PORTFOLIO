// CustomScroll.js
import { useRef, useState, useEffect } from "react";

const useCustomScroll = () => {
  const canvasRef = useRef(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  const handleCanvasScroll = () => {
    const { scrollTop } = canvasRef.current;
    setScrollOffset(scrollTop);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas?.addEventListener("scroll", handleCanvasScroll);
    return () => {
      canvas?.removeEventListener("scroll", handleCanvasScroll);
    };
  }, []);

  return { canvasRef, scrollOffset };
};

export default useCustomScroll;
