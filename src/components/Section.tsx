import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-6 py-20">
      <Reveal>
        <p className="font-mono text-sm text-accent-soft">{eyebrow}</p>
        <h2 className="mt-1 text-3xl font-bold tracking-tight text-white">{title}</h2>
        <div className="mt-3 h-0.5 w-16 rounded bg-linear-to-r from-accent to-accent-alt" />
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}
