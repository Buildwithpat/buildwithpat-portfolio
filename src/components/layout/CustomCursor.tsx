"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useKBar, VisualState } from "kbar";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, [data-cursor="interactive"]';

export function CustomCursor() {
  const isFinePointer = useMediaQuery("(hover: hover) and (pointer: fine)");
  // The command palette renders in a portal with a much higher z-index than
  // this cursor, so while it's open the custom dot would sit invisible
  // behind it and the native cursor is globally hidden by the CSS below —
  // net effect: no cursor at all inside the palette. Suspend the custom
  // cursor and restore the native one whenever the palette is showing.
  const { paletteOpen } = useKBar((state) => ({
    paletteOpen: state.visualState !== VisualState.hidden,
  }));
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const ready = useRef(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  const active = isFinePointer && !paletteOpen;

  useEffect(() => {
    if (!active) {
      document.documentElement.classList.remove("custom-cursor-active");
      return;
    }
    document.documentElement.classList.add("custom-cursor-active");

    function handleMove(e: MouseEvent) {
      if (!ready.current) {
        x.jump(e.clientX);
        y.jump(e.clientY);
        ready.current = true;
      } else {
        x.set(e.clientX);
        y.set(e.clientY);
      }
      const target = e.target as HTMLElement;
      setIsHovering(Boolean(target.closest(INTERACTIVE_SELECTOR)));
    }
    function handleDown() {
      setIsPressed(true);
    }
    function handleUp() {
      setIsPressed(false);
    }
    function handleLeaveWindow() {
      setIsHovering(false);
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("mouseleave", handleLeaveWindow);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("mouseleave", handleLeaveWindow);
    };
  }, [active, x, y]);

  if (!active) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
        animate={{
          width: isHovering ? 40 : 8,
          height: isHovering ? 40 : 8,
          opacity: isPressed ? 0.6 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
    </motion.div>
  );
}
