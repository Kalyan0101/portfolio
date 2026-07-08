import { useMotionValue, useSpring, useMotionTemplate, motion } from "motion/react";
import { useEffect } from "react";

/** Soft emerald glow that trails the cursor across the whole page. */
export default function Spotlight() {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);
  const x = useSpring(mouseX, { stiffness: 120, damping: 22, mass: 0.4 });
  const y = useSpring(mouseY, { stiffness: 120, damping: 22, mass: 0.4 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  const background = useMotionTemplate`radial-gradient(600px circle at ${x}px ${y}px, rgba(16, 185, 129, 0.09), transparent 70%)`;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 hidden lg:block"
      style={{ background }}
    />
  );
}
