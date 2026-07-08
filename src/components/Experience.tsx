import { motion } from "motion/react";
import { experience } from "../data/portfolio";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="03." title="Work Experience">
      <ol className="relative space-y-10 border-l border-line pl-8">
        {experience.map((job, i) => (
          <li key={job.company} className="relative">
            {/* timeline dot pulses when it enters the viewport */}
            <motion.span
              aria-hidden="true"
              initial={{ scale: 0 }}
              whileInView={{ scale: [0, 1.6, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="absolute left-[-2.42rem] top-1.5 size-3 rounded-full border-2 border-accent bg-surface shadow-[0_0_12px_rgba(16,185,129,0.8)]"
            />
            <Reveal from="left" delay={i * 0.15}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-white">
                  {job.role}{" "}
                  <span className="text-accent-soft">@ {job.company}</span>
                </h3>
                <p className="font-mono text-sm text-muted">{job.period}</p>
              </div>
              <p className="mt-1 text-sm text-muted">{job.location}</p>
              <ul className="mt-4 space-y-2">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-muted">
                    <span aria-hidden="true" className="mt-1 text-accent-soft">▹</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
