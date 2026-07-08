import { motion } from "motion/react";
import { education } from "../data/portfolio";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" eyebrow="05." title="Education">
      <div className="grid gap-6 sm:grid-cols-2">
        {education.map((item, i) => (
          <Reveal key={item.school} delay={i * 0.12} from={i === 0 ? "left" : "right"}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="h-full rounded-xl border border-line bg-card p-6 transition-colors hover:border-accent/50"
            >
              <h3 className="font-semibold text-white">{item.school}</h3>
              <p className="mt-1 text-muted">{item.degree}</p>
              <div className="mt-4 flex items-center justify-between">
                <p className="font-mono text-sm text-muted">{item.period}</p>
                <p className="rounded-full bg-accent/15 px-3 py-1 text-sm font-semibold text-accent-soft">
                  {item.score}
                </p>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
