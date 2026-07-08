import { motion } from "motion/react";
import { profile } from "../data/portfolio";
import Reveal from "./Reveal";
import Section from "./Section";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "./icons";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="06." title="Get In Touch">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="leading-relaxed text-muted">
            I'm currently open to new opportunities and interesting projects.
            Whether you have a question, a role in mind, or just want to say hi —
            my inbox is always open.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <motion.a
            href={`mailto:${profile.email}`}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="relative mt-8 inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-accent to-accent-alt px-8 py-3 font-semibold text-surface shadow-lg shadow-accent/25"
          >
            {/* soft pulsing halo */}
            <motion.span
              aria-hidden="true"
              className="absolute inset-0 rounded-lg bg-accent/40 blur-md"
              animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.06, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="relative flex items-center gap-2">
              <MailIcon className="size-5" /> Say Hello
            </span>
          </motion.a>
        </Reveal>

        <Reveal delay={0.25}>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted">
            <li className="flex items-center gap-2">
              <PhoneIcon className="size-4" /> {profile.phone}
            </li>
            <li className="flex items-center gap-2">
              <MapPinIcon className="size-4" /> {profile.location}
            </li>
          </ul>

          <div className="mt-8 flex items-center justify-center gap-6 text-muted">
            {[
              { href: profile.github, label: "GitHub", Icon: GitHubIcon },
              { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
            ].map(({ href, label, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, rotate: -6, color: "#34d399" }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="size-6" />
              </motion.a>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
