import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const MagneticEffect = ({ children, bgColor = "" }) => {
  const ref = useRef(null);

  useEffect(() => {
    const xTo = gsap.quickTo(ref.current, "x", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });
    const yTo = gsap.quickTo(ref.current, "y", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });

    const handleHover = () => {
      gsap.to(ref.current, {
        backgroundColor: bgColor,
        cursor: "pointer",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleHoverExit = () => {
      gsap.to(ref.current, {
        backgroundColor: "",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, top, left } = ref.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x);
      yTo(y);
    };

    const mouseLeave = (e) => {
      xTo(0);
      yTo(0);
      handleHoverExit();
    };

    ref.current.addEventListener("mouseenter", handleHover);
    ref.current.addEventListener("mousemove", mouseMove);
    ref.current.addEventListener("mouseleave", mouseLeave);

    return () => {
      ref.current.removeEventListener("mouseenter", handleHover);
      ref.current.removeEventListener("mousemove", mouseMove);
      ref.current.removeEventListener("mouseleave", mouseLeave);
    };
  }, [bgColor]);

  return React.cloneElement(children, { ref });
};

export default MagneticEffect;
