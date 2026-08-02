import type { Variants, Transition } from "framer-motion";

/** Shared easing — used everywhere so the whole site moves with one signature. */
export const EASE_PREMIUM: Transition["ease"] = [0.16, 1, 0.3, 1];
export const EASE_SOFT: Transition["ease"] = [0.22, 1, 0.36, 1];

export const springSnappy: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 28,
  mass: 0.9,
};

export const springGentle: Transition = {
  type: "spring",
  stiffness: 140,
  damping: 22,
  mass: 1,
};

/**
 * A small vocabulary of section-reveal patterns. Consecutive sections should
 * use different patterns so the scroll never repeats the same beat twice in
 * a row (see build-plan Phase L: choreography, not a single fade-in reused
 * everywhere).
 */

export const maskReveal: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)", opacity: 0 },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    opacity: 1,
    transition: { duration: 1, ease: EASE_PREMIUM },
  },
};

export const riseIn: Variants = {
  hidden: { y: 48, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: EASE_PREMIUM },
  },
};

export const scaleDepth: Variants = {
  hidden: { scale: 0.94, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.9, ease: EASE_SOFT },
  },
};

export const slideFromSide = (fromLeft = true): Variants => ({
  hidden: { x: fromLeft ? -56 : 56, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: EASE_PREMIUM },
  },
});

export const staggerChildren = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

export const wordReveal: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.8, ease: EASE_PREMIUM },
  },
};

export const viewportOnce = { once: true, margin: "-15% 0px -15% 0px" };
