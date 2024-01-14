// CursorDot.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CursorDot = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      gsap.to(dotRef.current, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.3,
        ease: "power2.out",
        delay: 0.1,
      });
    };

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="cursor-dot fixed w-[15px] h-[15px] bg-[#ffffff7d] rounded-[50%] pointer-events-none z-[9999]"
    />
  );
};

export default CursorDot;
