import { useContext, useRef } from "react";
import { motion, useInView } from "framer-motion";

import WaveSpacedSection from "./Utils/WaveSpacedSection";
import QRCode from "react-qr-code";

import { LangContext } from "../store/lang-context";

import classes from "./Responsiveness.module.css";

export default function Responsiveness() {
  const ctx = useContext(LangContext);

  const textRef = useRef<HTMLDivElement>(null);
  const wasTextViewed = useInView(textRef, {
    once: true,
    amount: 0.3,
  });

  const qrCodeRef = useRef<HTMLDivElement>(null);
  const wasQrCodeViewed = useInView(qrCodeRef, {
    once: true,
    amount: 0.3,
  });

  return (
    <WaveSpacedSection
      colors={[
        "var(--wave-pink-1)",
        "var(--wave-pink-2)",
        "var(--wave-pink-3)",
        "var(--wave-pink-4)",
      ]}
      hasBottomSpacer={false}
    >
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
            {ctx!.lang === "pt"
              ? "Vamos falar de responsividade?"
              : "Let's talk about responsiveness?"}
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: -30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            {ctx!.lang === "pt"
              ? "Gostou do portfolio? Escaneie o QR code e confira-o com seu celular!"
              : "Did you enjoy the portfolio? Scan the QR code and check it out with your phone!"}
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
            bgColor="var(--wave-pink-4)"
            fgColor="var(--white)"
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          />
        </motion.div>
      </div>
    </WaveSpacedSection>
  );
}
