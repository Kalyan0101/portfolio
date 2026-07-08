import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  /** slide-in direction */
  from?: "bottom" | "left" | "right";
  className?: string;
};

const offsets = {
  bottom: { x: 0, y: 32 },
  left: { x: -40, y: 0 },
  right: { x: 40, y: 0 },
} as const;

/** Fades + slides children in when they scroll into view. */
export default function Reveal({
  children,
  delay = 0,
  from = "bottom",
  className,
}: RevealProps) {
  const { x, y } = offsets[from];
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
