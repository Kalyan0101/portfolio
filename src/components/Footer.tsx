import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <p className="text-center font-mono text-xs text-muted">
        Designed & built by {profile.name} · React + Vite + Tailwind CSS
      </p>
    </footer>
  );
}
