import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import classes from "./Carousel.module.css";

import techs from "./techs";

export default function Carousel() {
  const carouselRef = useRef(null);
  const wasCarouselViewed = useInView(carouselRef, { once: true, amount: "some" });

  return (
    <motion.ul
      className={classes.carousel}
      initial="hidden"
      animate={wasCarouselViewed ? "visible" : "hidden"}
      ref={carouselRef}
    >
      {techs.map((tech) => (
        <motion.li
          key={tech.name}
          className={classes.carouselItem}
          variants={{
            hidden: { x: -500 },
            visible: { x: 0 }
          }}
          transition={{duration: 2}}
        >
          <img src={tech.imgSrc} alt={tech.name} draggable={false}/>
        </motion.li>
      ))}
    </motion.ul>
  );
}
