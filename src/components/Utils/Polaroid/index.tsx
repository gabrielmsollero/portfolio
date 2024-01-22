import { motion, HTMLMotionProps } from "framer-motion";

import classes from "./Polaroid.module.css";

type Props = HTMLMotionProps<"div"> & {
  src: string,
  alt?: string,
};

export default function Polaroid({
  src,
  alt = "",
  className = "",
  ...props
}: Props) {
  return (
    <motion.div
      {...props}
      className={`${classes.polaroid} ${className}`}
    >
      <img src={src} alt={alt} />
    </motion.div>
  );
}
