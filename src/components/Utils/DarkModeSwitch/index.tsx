import { useEffect, useState } from "react";

import MoonIcon from "../Icons/MoonIcon";
import SunIcon from "../Icons/SunIcon";

export default function DarkModeSwitch() {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  useEffect(() => {
    setIsDarkModeOn(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  useEffect(() => {
    document.querySelector("body")?.classList.toggle("dark", isDarkModeOn);
  }, [isDarkModeOn]);

  return (
    <button
      onClick={() => setIsDarkModeOn((prevMode) => !prevMode)}
      style={{
        color: "var(--text-color)",
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
        padding: "1rem",
        height: "1.5rem"
      }}
    >
      {isDarkModeOn ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
