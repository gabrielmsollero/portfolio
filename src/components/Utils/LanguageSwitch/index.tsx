import { useContext } from "react";

import { LangContext } from "../../../store/lang-context";

import classes from "./LanguageSwitch.module.css";

export default function LanguageSwitch() {
  const ctx = useContext(LangContext);
  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    ctx!.setLang(event.target.checked ? "pt" : "en")
  }

  return (
    <div className={classes.background}>
      <label className={classes.wrapper}>
        <input type="checkbox" onChange={handleSwitch}/>
        <span className={classes.slider} />
      </label>
    </div>
  );
}
