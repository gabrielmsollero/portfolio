import { motion } from "framer-motion";

import classes from "./Polaroid.module.css";

type Props = any; // TODO

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
