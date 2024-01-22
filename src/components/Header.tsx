import DarkModeSwitch from "./Utils/DarkModeSwitch";
import LogoIcon from "./Utils/Icons/LogoIcon";

import classes from "./Header.module.css";

export default function Header() {
  return (
    <div className={classes.header}>
      <LogoIcon />
      <DarkModeSwitch />
    </div>
  );
}
