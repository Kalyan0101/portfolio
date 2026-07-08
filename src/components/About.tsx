import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { profile } from "../data/portfolio";
import Reveal from "./Reveal";
import Section from "./Section";

const highlights = [
  { value: 1, suffix: "+", label: "Years of production experience" },
  { value: 40, suffix: "+", label: "REST API endpoints shipped" },
  { value: 30, suffix: "%", label: "API response time reduction" },
  { value: 3, suffix: "", label: "Production projects led" },
];

function Stat({
  value,
  suffix,
  label,
  delay,
}: (typeof highlights)[number] & { delay: number }) {
  const numberRef = useRef<HTMLParagraphElement>(null);
  const inView = useInView(numberRef, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.2,
      delay,
      ease: "easeOut",
      onUpdate: (latest) => {
        if (numberRef.current) {
          numberRef.current.textContent = `${Math.round(latest)}${suffix}`;
        }
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix, delay]);

  return (
    <div className="rounded-xl border border-line bg-card p-5 transition-colors hover:border-accent/50">
      <p ref={numberRef} className="text-3xl font-bold text-accent-soft">
        0{suffix}
      </p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
}

export default function About() {
  return (
    <Section id="about" eyebrow="01." title="About Me">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="space-y-4 text-muted md:col-span-3">
          {profile.about.map((paragraph, i) => (
            <Reveal key={paragraph} delay={i * 0.15} from="left">
              <p className="leading-relaxed">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 md:col-span-2">
          {highlights.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.1} from="right">
              <Stat {...item} delay={i * 0.1} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
