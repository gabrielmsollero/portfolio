import classes from "./LanguageSwitch.module.css";

export default function LanguageSwitch() {
  return (
    <div className={classes.background}>
      <label className={classes.wrapper}>
        <input type="checkbox" />
        <span className={classes.slider} />
      </label>
    </div>
  );
}
