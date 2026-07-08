import { motion } from "motion/react";
import { profile } from "../data/portfolio";
import useTyped from "../hooks/useTyped";
import { ArrowIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  const typed = useTyped(profile.typedRoles);

  return (
    <section id="top" className="relative overflow-hidden">
      {/* animated background blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-blob absolute -top-32 left-[15%] h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
        <div className="animate-blob-slow absolute top-20 right-[5%] h-80 w-80 rounded-full bg-accent-alt/10 blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-5xl flex-col justify-center px-6 py-24"
      >
        <motion.p variants={item} className="font-mono text-accent-soft">
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl"
        >
          <span className="text-gradient">{profile.name}.</span>
        </motion.h1>

        <motion.h2
          variants={item}
          className="mt-3 h-10 text-2xl font-bold tracking-tight text-ink sm:h-14 sm:text-4xl"
        >
          {typed}
          <span className="animate-blink ml-1 font-light text-accent-soft">|</span>
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-accent to-accent-alt px-6 py-3 text-sm font-semibold text-surface shadow-lg shadow-accent/25"
          >
            View my work <ArrowIcon />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-lg border border-accent/40 px-6 py-3 text-sm font-semibold text-accent-soft transition-colors hover:bg-accent/10"
          >
            Get in touch
          </motion.a>

          <div className="ml-1 flex items-center gap-4 text-muted">
            {[
              { href: profile.github, label: "GitHub", Icon: GitHubIcon, external: true },
              { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon, external: true },
              { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon, external: false },
            ].map(({ href, label, Icon, external }) => (
              <motion.a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                aria-label={label}
                whileHover={{ scale: 1.2, rotate: 6, color: "#34d399" }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="size-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* scroll hint */}
        <motion.a
          href="#about"
          aria-label="Scroll to About"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6">
              <path d="M12 5v14m-6-6 6 6 6-6" />
            </svg>
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
}
