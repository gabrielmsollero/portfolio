import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import WaveSpacedSection from "./Utils/WaveSpacedSection";
import QRCode from "react-qr-code";

import classes from "./Responsiveness.module.css";

export default function Responsiveness() {
  const textRef = useRef(null);
  const wasTextViewed = useInView(textRef, {
    once: true,
    amount: 0.3,
  });

  const qrCodeRef = useRef(null);
  const wasQrCodeViewed = useInView(qrCodeRef, {
    once: true,
    amount: 0.3,
  });

  return (
    <WaveSpacedSection colors={["#bf3564", "#ca4e77", "#d46589", "#de7b9c"]}>
      <div className={classes.content}>
        <motion.div
          className={classes.textWrapper}
          animate={wasTextViewed ? "visible" : "hidden"}
          ref={textRef}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: -30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            Let's talk about responsiveness?
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: -30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            Did you enjoy the portfolio? Scan the QR code and check it out with
            your phone!
          </motion.p>
        </motion.div>
        <motion.div
          className={classes.qrCodeWrapper}
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
          ref={qrCodeRef}
          transition={{ duration: 0.2, type: "spring", stiffness: 80 }}
          initial="hidden"
          animate={wasQrCodeViewed ? "visible" : "hidden"}
        >
          <QRCode
            value={window.location.href}
            bgColor="#de7b9c"
            fgColor="#f9f9f9"
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          />
        </motion.div>
      </div>
    </WaveSpacedSection>
  );
}
