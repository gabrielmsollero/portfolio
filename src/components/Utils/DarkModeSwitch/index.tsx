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
        borderRadius: "50%",
        border: "none",
        outline: "none",
        width: "40px",
        height: "40px",
      }}
    >
      {isDarkModeOn ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
