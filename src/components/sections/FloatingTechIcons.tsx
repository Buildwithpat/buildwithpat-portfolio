"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FLOATING_TECH } from "@/content/hero-tech";
import { EASE_SOFT } from "@/lib/motion";

function FloatingIcon({ tech }: { tech: (typeof FLOATING_TECH)[number] }) {
  const [hovered, setHovered] = useState(false);
  const tooltipAbove = parseFloat(tech.top) > 50;

  return (
    <motion.div
      className="pointer-events-auto absolute"
      style={{ top: tech.top, left: tech.left }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -14, 0, 12, 0],
        x: [0, 8, 0, -8, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay: tech.delay },
        scale: { duration: 0.6, delay: tech.delay },
        y: {
          duration: tech.duration,
          delay: tech.delay,
          repeat: Infinity,
          ease: "easeInOut",
        },
        x: {
          duration: tech.duration * 1.3,
          delay: tech.delay,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <div
        className="group relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        tabIndex={0}
        role="img"
        aria-label={`${tech.name}: ${tech.quote}`}
      >
        <motion.div
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.25, ease: EASE_SOFT }}
          className="flex items-center justify-center rounded-2xl border border-line-subtle bg-surface-1/70 p-2.5 shadow-[var(--shadow-elevation-1)] backdrop-blur-md"
          style={{ width: tech.size, height: tech.size }}
        >
          <div className="relative size-full">
            <Image
              src={tech.icon}
              alt={tech.name}
              fill
              sizes="48px"
              className="object-contain"
            />
          </div>
        </motion.div>

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: tooltipAbove ? 8 : -8, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: tooltipAbove ? 8 : -8, scale: 0.92 }}
              transition={{ duration: 0.2, ease: EASE_SOFT }}
              className={`absolute left-1/2 z-20 w-56 -translate-x-1/2 rounded-xl border border-line-subtle bg-surface-2/95 px-3.5 py-2.5 text-left shadow-[var(--shadow-elevation-2)] backdrop-blur-xl ${
                tooltipAbove ? "bottom-full mb-3" : "top-full mt-3"
              }`}
            >
              <p className="text-[11px] font-medium tracking-wide text-accent uppercase">
                {tech.name}
              </p>
              <p className="mt-1 text-body-sm text-ink-1">{tech.quote}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function FloatingTechIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block">
      {FLOATING_TECH.map((tech) => (
        <FloatingIcon key={tech.name} tech={tech} />
      ))}
    </div>
  );
}
