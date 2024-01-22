import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

import classes from "./Timeline.module.css";

export type TimelineItemType = {
  imageSrc: string;
  dateText: string;
  content: ReactNode;
};

type Props = {
  item: TimelineItemType;
  position: "left" | "right";
};

export default function TimelineItem({ item, position }: Props) {
  const itemRef = useRef(null);
  const wasItemViewed = useInView(itemRef, {
    once: true,
    amount: "some",
  });

  return (
    <motion.li
      className={classes.timelineItem}
      ref={itemRef}
      initial="hidden"
      animate={wasItemViewed ? "visible" : "hidden"}
    >
      <motion.div
        className={classes.imgContainer}
        variants={{
          hidden: { scale: 0 },
          visible: { scale: 1 },
        }}
        transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
      >
        <img src={item.imageSrc} />
      </motion.div>
      <motion.div
        className={classes.contentContainer}
        variants={{
          hidden: {
            opacity: 0,
            x: position == "right" ? -50 : 50,
          },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        {item.content}
      </motion.div>
      <motion.div
        className={classes.dateContainer}
        variants={{
          hidden: { opacity: 0, y: 16 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <p>{item.dateText}</p>
      </motion.div>
    </motion.li>
  );
}
