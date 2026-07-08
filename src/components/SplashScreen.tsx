import { motion } from "motion/react";
import { useEffect } from "react";
import { profile } from "../data/portfolio";

const SPLASH_DURATION_MS = 2400;

type SplashScreenProps = { onFinish: () => void };

/** One-time intro overlay: monogram + name assemble, then the curtain lifts. */
export default function SplashScreen({ onFinish }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(onFinish, SPLASH_DURATION_MS);
    return () => clearTimeout(timer);
  }, [onFinish]);

  const [firstName, lastName] = profile.name.split(" ");

  return (
    <motion.div
      exit={{ y: "-100%" }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-surface"
    >
      {/* soft glow behind the monogram */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute h-72 w-72 rounded-full bg-accent/15 blur-3xl"
      />

      {/* monogram */}
      <motion.p
        initial={{ opacity: 0, scale: 0.5, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, ease: "backOut" }}
        className="relative font-mono text-5xl font-bold"
      >
        <span className="text-accent-soft">&lt;</span>
        <span className="text-gradient">KN</span>
        <span className="text-accent-soft"> /&gt;</span>
      </motion.p>

      {/* name assembles letter by letter */}
      <p className="relative mt-6 flex text-xl font-semibold tracking-[0.3em] text-ink sm:text-2xl">
        {`${firstName} ${lastName}`.split("").map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.045, duration: 0.35, ease: "easeOut" }}
          >
            {char === " " ? " " : char}
          </motion.span>
        ))}
      </p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="relative mt-2 font-mono text-xs tracking-widest text-muted uppercase"
      >
        {profile.role}
      </motion.p>

      {/* loading bar */}
      <div className="relative mt-10 h-0.5 w-48 overflow-hidden rounded bg-line">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: (SPLASH_DURATION_MS - 500) / 1000, ease: "easeInOut" }}
          className="h-full origin-left bg-linear-to-r from-accent to-accent-alt"
        />
      </div>
    </motion.div>
  );
}
