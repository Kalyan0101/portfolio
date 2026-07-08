import { motion } from "motion/react";
import { skills } from "../data/portfolio";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="02." title="Technical Skills">
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group, groupIndex) => (
          <Reveal key={group.group} delay={groupIndex * 0.1}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="h-full rounded-xl border border-line bg-card p-6 transition-colors hover:border-accent/50"
            >
              <h3 className="font-semibold text-white">{group.group}</h3>
              <motion.ul
                className="mt-4 flex flex-wrap gap-2"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  show: { transition: { staggerChildren: 0.05 } },
                }}
              >
                {group.items.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={{
                      hidden: { opacity: 0, scale: 0.6 },
                      show: { opacity: 1, scale: 1 },
                    }}
                    whileHover={{
                      scale: 1.12,
                      backgroundColor: "rgba(16, 185, 129, 0.15)",
                    }}
                    className="cursor-default rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-accent-soft"
                  >
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
