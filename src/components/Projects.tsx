import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "motion/react";
import type { ReactNode } from "react";
import { projects } from "../data/portfolio";
import { ExternalLinkIcon, SparkleIcon } from "./icons";
import Reveal from "./Reveal";
import Section from "./Section";

/** Card that tilts in 3D toward the cursor, with a glow that tracks it. */
function TiltCard({ children }: { children: ReactNode }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const glow = useMotionTemplate`radial-gradient(500px circle at ${glowX}% ${glowY}%, rgba(34, 211, 238, 0.08), transparent 65%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateX.set((0.5 - py) * 6);
    rotateY.set((px - 0.5) * 6);
    glowX.set(px * 100);
    glowY.set(py * 100);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <div style={{ perspective: 1000 }}>
      <motion.article
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: springX, rotateY: springY }}
        className="relative rounded-xl border border-line bg-card p-6 transition-colors hover:border-accent/60 sm:p-8"
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-xl"
          style={{ background: glow }}
        />
        {children}
      </motion.article>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" eyebrow="04." title="Projects">
      <div className="space-y-6">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.1}>
            <TiltCard>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl font-semibold text-white">
                  {project.name}
                  <span className="ml-3 text-sm font-normal text-muted">
                    {project.subtitle}
                  </span>
                </h3>
                <p className="font-mono text-sm text-muted">{project.period}</p>
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1.5">
                <p className="text-sm font-medium text-accent-soft">{project.role}</p>
                {project.aiAssisted && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-alt/40 bg-accent-alt/10 px-2.5 py-0.5 font-mono text-[11px] text-accent-alt">
                    <SparkleIcon /> AI-assisted development (Claude)
                  </span>
                )}
              </div>

              <ul className="mt-4 space-y-2">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-3 text-muted">
                    <span aria-hidden="true" className="mt-1 text-accent-soft">▹</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-accent-soft"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {project.links.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <motion.a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-accent/40 px-3 py-1.5 text-xs font-semibold text-accent-soft transition-colors hover:bg-accent/10"
                    >
                      {link.label} <ExternalLinkIcon />
                    </motion.a>
                  ))}
                </div>
              )}
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
