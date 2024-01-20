import WavesSpacer from "./Utils/Spacers/WavesSpacer";
import QRCode from "react-qr-code";

import classes from "./Responsiveness.module.css";

export default function Responsiveness() {
  return (
    <>
      <WavesSpacer colors={["#bf3564", "#ca4e77", "#d46589", "#de7b9c"]} />
      <section className={classes.responsiveness}>
        <div className={classes.content}>
          <div className={classes.textWrapper}>
            <h2>Let's talk about responsiveness?</h2>
            <p>
              Did you enjoy the portfolio? Scan the QR code and check it out with your
              phone!
            </p>
          </div>
          <div className={classes.qrCodeWrapper}>
            <QRCode
              value={window.location.href}
              bgColor="#de7b9c"
              fgColor="#f9f9f9"
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            />
          </div>
        </div>
      </section>
      <WavesSpacer colors={["#bf3564", "#ca4e77", "#d46589", "#de7b9c"]} flipped />
    </>
  );
}
