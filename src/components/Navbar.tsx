import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // scroll progress bar
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  // highlight the nav link of the section currently on screen
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-line bg-surface/75 backdrop-blur-md"
    >
      {/* scroll progress */}
      <motion.div
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-linear-to-r from-accent to-accent-alt"
        style={{ scaleX: progress }}
      />

      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <a href="#top" className="group font-mono text-lg font-semibold text-white">
          <span className="text-accent-soft transition-transform group-hover:-translate-x-0.5 inline-block">&lt;</span>
          {profile.name.split(" ")[0]}
          <span className="text-accent-soft transition-transform group-hover:translate-x-0.5 inline-block"> /&gt;</span>
        </a>

        {/* desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.07 }}
            >
              <a
                href={link.href}
                className={`relative text-sm transition-colors hover:text-accent-soft ${
                  active === link.href ? "text-accent-soft" : "text-muted"
                }`}
              >
                <span className="mr-1 font-mono text-xs text-accent-soft">
                  0{i + 1}.
                </span>
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-muted md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6">
            {open ? <path d="M6 6l12 12M6 18 18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="space-y-1 overflow-hidden border-t border-line px-6 py-4 md:hidden"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-2 text-sm text-muted hover:bg-card hover:text-accent-soft"
              >
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.header>
  );
}
