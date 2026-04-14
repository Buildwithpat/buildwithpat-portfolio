"use client";
import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = (e) => {
      // Improved detection for arrows/icons
      const path = e.composedPath();
      const isInteractive = path.some(
        (el) => el.tagName === "BUTTON" || el.tagName === "A",
      );
      setIsHovering(isInteractive);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block pointer-events-none">
      <div
        className="fixed top-0 left-0 w-10 h-10 border border-white/80 rounded-full z-[10000] pointer-events-none mix-blend-difference"
        style={{
          transition:
            "transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), background-color 0.2s",
          left: 0,
          top: 0,
          transform: `translate3d(${position.x - 20}px, ${position.y - 20}px, 0) scale(${isHovering ? 1.4 : 1})`,
          backgroundColor: isHovering
            ? "rgba(255, 255, 255, 0.15)"
            : "transparent",
          willChange: "transform",
        }}
      />
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full z-[10000] pointer-events-none mix-blend-difference"
        style={{
          left: 0,
          top: 0,
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
          willChange: "transform",
        }}
      />
    </div>
  );
}
