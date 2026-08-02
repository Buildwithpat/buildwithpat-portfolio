"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { riseIn, viewportOnce } from "@/lib/motion";

export function Reveal({
  children,
  variants = riseIn,
  className,
  delay = 0,
}: {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
