import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

import classes from "./Timeline.module.css";

export type TimelineItem = {
  imageSrc: string;
  dateText: string;
  content: ReactNode;
};

type Props = {
  items: TimelineItem[];
};

export default function Timeline({ items }: Props) {
  const ref = useRef(null);
  const wasTimelineViewed = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  return (
    <motion.ul
      className={classes.timeline}
      ref={ref}
      initial="hidden"
      animate={wasTimelineViewed ? "visible" : "hidden"}
      transition={{ staggerChildren: 0.1 }}
    >
      {items.map((item, idx) => (
        <motion.li key={idx} className={classes.timelineItem}>
          <motion.div
            className={classes.imgContainer}
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
          >
            <img src={item.imageSrc} />
          </motion.div>
          <motion.div
            className={classes.contentContainer}
            variants={{
              hidden: { opacity: 0, x: ((window.innerWidth > 720) && ((idx % 2) === 0)) ? -50 : 50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          >
            {item.content}
          </motion.div>
          <motion.div
            className={classes.dateContainer}
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{duration: 0.5, delay: 0.8 }}
          >
            <p>{item.dateText}</p>
          </motion.div>
        </motion.li>
      ))}
    </motion.ul>
  );
}
