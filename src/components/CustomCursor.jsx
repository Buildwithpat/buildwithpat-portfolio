"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;
    setIsVisible(true);

    let hovering = false;

    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${x - 20}px, ${y - 20}px, 0) scale(${hovering ? 1.4 : 1})`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x - 3}px, ${y - 3}px, 0)`;
      }
    };

    const handleHover = (e) => {
      const path = e.composedPath();
      hovering = path.some((el) => el.tagName === "BUTTON" || el.tagName === "A");
      if (ringRef.current) {
        ringRef.current.style.backgroundColor = hovering
          ? "rgba(255, 255, 255, 0.15)"
          : "transparent";
      }
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleHover, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block pointer-events-none">
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 border border-white/80 rounded-full z-[10000] pointer-events-none mix-blend-difference"
        style={{
          transition: "transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), background-color 0.2s",
          willChange: "transform",
        }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full z-[10000] pointer-events-none mix-blend-difference"
        style={{ willChange: "transform" }}
      />
    </div>
  );
}
