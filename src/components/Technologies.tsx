import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import WaveSpacedSection from "./Utils/WaveSpacedSection";
import Carousel from "./Utils/Carousel";

import classes from "./Technologies.module.css";

export default function Technologies() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const wasTitleViewed = useInView(titleRef, { once: true, amount: "all" });

  const footerRef = useRef<HTMLParagraphElement>(null);
  const wasFooterViewed = useInView(footerRef, { once: true, amount: "all" });

  return (
    <WaveSpacedSection colors={["#109884", "#17ab93", "#1fbea3", "#28d1b2"]}>
      <motion.div
          className={classes.content}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: -30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            animate={wasTitleViewed ? "visible" : "hidden"}
            ref={titleRef}
          >
            Technologies I've worked with
          </motion.h2>
          <Carousel />
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            animate={wasFooterViewed ? "visible" : "hidden"}
            ref={footerRef}
          >
            Hover over them to see the projects where they were used!
          </motion.p>
        </motion.div>
    </WaveSpacedSection>
  );
}
