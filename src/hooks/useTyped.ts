import { useEffect, useState } from "react";

/** Types out each phrase, pauses, deletes it, then moves to the next — forever. */
export default function useTyped(
  phrases: readonly string[],
  { typeMs = 70, deleteMs = 35, holdMs = 1800 } = {},
) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[index % phrases.length];

    let delay: number;
    if (!deleting && text === phrase) {
      delay = holdMs;
    } else {
      delay = deleting ? deleteMs : typeMs;
    }

    const timer = setTimeout(() => {
      if (!deleting) {
        if (text === phrase) {
          setDeleting(true);
        } else {
          setText(phrase.slice(0, text.length + 1));
        }
      } else if (text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      } else {
        setText(phrase.slice(0, text.length - 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, phrases, typeMs, deleteMs, holdMs]);

  return text;
}
