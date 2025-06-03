import { useEffect, useState } from "react";

const characters = "01#@%$&ABCDEFabcdef{}[]<>";

export default function GlitchText({ text = "", interval = 80, loopDelay = 7000 }) {
  const [display, setDisplay] = useState("");
  const [revealIndex, setRevealIndex] = useState(0);
  const [cycle, setCycle] = useState(0); // to trigger a restart

  useEffect(() => {
    let timeout;
    if (revealIndex <= text.length) {
      timeout = setTimeout(() => {
        let glitch = "";
        for (let i = revealIndex; i < text.length; i++) {
          glitch += characters[Math.floor(Math.random() * characters.length)];
        }
        setDisplay(text.slice(0, revealIndex) + glitch);
        setRevealIndex((prev) => prev + 1);
      }, interval);
    } else {
      setDisplay(text);
      // Restart after delay
      timeout = setTimeout(() => {
        setRevealIndex(0);
        setCycle((c) => c + 1);
      }, loopDelay);
    }

    return () => clearTimeout(timeout);
  }, [revealIndex, cycle, text, interval, loopDelay]);

  return (
    <p className="text-lg md:text-2xl max-w-2xl font-code whitespace-nowrap text-black">{display}</p>
  );
}
