import { motion } from "framer-motion";

import classes from "./WaveSpacer.module.css"

type Props = {
  colors: [string, string?, string?, string?]
  flipped?: boolean
}

export default function WavesSpacer({ flipped = false, colors }: Props) {
  return (
    <div className={`${classes.spacer} ${flipped ? classes.flipped : ""}`}>
      <svg
        viewBox="0 0 1280 70"
        width="1280"
        height="70"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <motion.path
          d="M0 28L15.2 27.3C30.3 26.7 60.7 25.3 91.2 23C121.7 20.7 152.3 17.3 182.8 15.8C213.3 14.3 243.7 14.7 274.2 17.2C304.7 19.7 335.3 24.3 365.8 24.3C396.3 24.3 426.7 19.7 457.2 18.5C487.7 17.3 518.3 19.7 548.8 19.7C579.3 19.7 609.7 17.3 640 15.2C670.3 13 700.7 11 731.2 11C761.7 11 792.3 13 822.8 17.2C853.3 21.3 883.7 27.7 914.2 27.5C944.7 27.3 975.3 20.7 1005.8 17.7C1036.3 14.7 1066.7 15.3 1097.2 16C1127.7 16.7 1158.3 17.3 1188.8 17.5C1219.3 17.7 1249.7 17.3 1264.8 17.2L1280 17L1280 71L1264.8 71C1249.7 71 1219.3 71 1188.8 71C1158.3 71 1127.7 71 1097.2 71C1066.7 71 1036.3 71 1005.8 71C975.3 71 944.7 71 914.2 71C883.7 71 853.3 71 822.8 71C792.3 71 761.7 71 731.2 71C700.7 71 670.3 71 640 71C609.7 71 579.3 71 548.8 71C518.3 71 487.7 71 457.2 71C426.7 71 396.3 71 365.8 71C335.3 71 304.7 71 274.2 71C243.7 71 213.3 71 182.8 71C152.3 71 121.7 71 91.2 71C60.7 71 30.3 71 15.2 71L0 71Z"
          animate={{
            d: [
              "M0 28L15.2 27.3C30.3 26.7 60.7 25.3 91.2 23C121.7 20.7 152.3 17.3 182.8 15.8C213.3 14.3 243.7 14.7 274.2 17.2C304.7 19.7 335.3 24.3 365.8 24.3C396.3 24.3 426.7 19.7 457.2 18.5C487.7 17.3 518.3 19.7 548.8 19.7C579.3 19.7 609.7 17.3 640 15.2C670.3 13 700.7 11 731.2 11C761.7 11 792.3 13 822.8 17.2C853.3 21.3 883.7 27.7 914.2 27.5C944.7 27.3 975.3 20.7 1005.8 17.7C1036.3 14.7 1066.7 15.3 1097.2 16C1127.7 16.7 1158.3 17.3 1188.8 17.5C1219.3 17.7 1249.7 17.3 1264.8 17.2L1280 17L1280 71L1264.8 71C1249.7 71 1219.3 71 1188.8 71C1158.3 71 1127.7 71 1097.2 71C1066.7 71 1036.3 71 1005.8 71C975.3 71 944.7 71 914.2 71C883.7 71 853.3 71 822.8 71C792.3 71 761.7 71 731.2 71C700.7 71 670.3 71 640 71C609.7 71 579.3 71 548.8 71C518.3 71 487.7 71 457.2 71C426.7 71 396.3 71 365.8 71C335.3 71 304.7 71 274.2 71C243.7 71 213.3 71 182.8 71C152.3 71 121.7 71 91.2 71C60.7 71 30.3 71 15.2 71L0 71Z",
              "M0 25L15.2 24.8C30.3 24.7 60.7 24.3 91.2 22.7C121.7 21 152.3 18 182.8 15.7C213.3 13.3 243.7 11.7 274.2 12.7C304.7 13.7 335.3 17.3 365.8 21C396.3 24.7 426.7 28.3 457.2 29.5C487.7 30.7 518.3 29.3 548.8 25.3C579.3 21.3 609.7 14.7 640 13.3C670.3 12 700.7 16 731.2 17.7C761.7 19.3 792.3 18.7 822.8 18.7C853.3 18.7 883.7 19.3 914.2 22.2C944.7 25 975.3 30 1005.8 31.3C1036.3 32.7 1066.7 30.3 1097.2 26.3C1127.7 22.3 1158.3 16.7 1188.8 13.5C1219.3 10.3 1249.7 9.7 1264.8 9.3L1280 9L1280 71L1264.8 71C1249.7 71 1219.3 71 1188.8 71C1158.3 71 1127.7 71 1097.2 71C1066.7 71 1036.3 71 1005.8 71C975.3 71 944.7 71 914.2 71C883.7 71 853.3 71 822.8 71C792.3 71 761.7 71 731.2 71C700.7 71 670.3 71 640 71C609.7 71 579.3 71 548.8 71C518.3 71 487.7 71 457.2 71C426.7 71 396.3 71 365.8 71C335.3 71 304.7 71 274.2 71C243.7 71 213.3 71 182.8 71C152.3 71 121.7 71 91.2 71C60.7 71 30.3 71 15.2 71L0 71Z"
            ]
          }}
          transition={{
            repeat: Infinity,
            ease: "easeInOut",
            duration: 3,
            repeatType: "reverse"
          }}
          fill={colors[0]}
        ></motion.path>
        <motion.path
          d="M0 31L15.2 31.3C30.3 31.7 60.7 32.3 91.2 31.2C121.7 30 152.3 27 182.8 27.2C213.3 27.3 243.7 30.7 274.2 32.8C304.7 35 335.3 36 365.8 36.8C396.3 37.7 426.7 38.3 457.2 38.5C487.7 38.7 518.3 38.3 548.8 36.7C579.3 35 609.7 32 640 31.3C670.3 30.7 700.7 32.3 731.2 31.5C761.7 30.7 792.3 27.3 822.8 28.2C853.3 29 883.7 34 914.2 35.5C944.7 37 975.3 35 1005.8 35.3C1036.3 35.7 1066.7 38.3 1097.2 39.5C1127.7 40.7 1158.3 40.3 1188.8 38.5C1219.3 36.7 1249.7 33.3 1264.8 31.7L1280 30L1280 71L1264.8 71C1249.7 71 1219.3 71 1188.8 71C1158.3 71 1127.7 71 1097.2 71C1066.7 71 1036.3 71 1005.8 71C975.3 71 944.7 71 914.2 71C883.7 71 853.3 71 822.8 71C792.3 71 761.7 71 731.2 71C700.7 71 670.3 71 640 71C609.7 71 579.3 71 548.8 71C518.3 71 487.7 71 457.2 71C426.7 71 396.3 71 365.8 71C335.3 71 304.7 71 274.2 71C243.7 71 213.3 71 182.8 71C152.3 71 121.7 71 91.2 71C60.7 71 30.3 71 15.2 71L0 71Z"
          animate={{
            d: [
              "M0 31L15.2 31.3C30.3 31.7 60.7 32.3 91.2 31.2C121.7 30 152.3 27 182.8 27.2C213.3 27.3 243.7 30.7 274.2 32.8C304.7 35 335.3 36 365.8 36.8C396.3 37.7 426.7 38.3 457.2 38.5C487.7 38.7 518.3 38.3 548.8 36.7C579.3 35 609.7 32 640 31.3C670.3 30.7 700.7 32.3 731.2 31.5C761.7 30.7 792.3 27.3 822.8 28.2C853.3 29 883.7 34 914.2 35.5C944.7 37 975.3 35 1005.8 35.3C1036.3 35.7 1066.7 38.3 1097.2 39.5C1127.7 40.7 1158.3 40.3 1188.8 38.5C1219.3 36.7 1249.7 33.3 1264.8 31.7L1280 30L1280 71L1264.8 71C1249.7 71 1219.3 71 1188.8 71C1158.3 71 1127.7 71 1097.2 71C1066.7 71 1036.3 71 1005.8 71C975.3 71 944.7 71 914.2 71C883.7 71 853.3 71 822.8 71C792.3 71 761.7 71 731.2 71C700.7 71 670.3 71 640 71C609.7 71 579.3 71 548.8 71C518.3 71 487.7 71 457.2 71C426.7 71 396.3 71 365.8 71C335.3 71 304.7 71 274.2 71C243.7 71 213.3 71 182.8 71C152.3 71 121.7 71 91.2 71C60.7 71 30.3 71 15.2 71L0 71Z",
              "M0 30L15.2 28.8C30.3 27.7 60.7 25.3 91.2 26C121.7 26.7 152.3 30.3 182.8 33.2C213.3 36 243.7 38 274.2 35.8C304.7 33.7 335.3 27.3 365.8 27.3C396.3 27.3 426.7 33.7 457.2 36.5C487.7 39.3 518.3 38.7 548.8 36.3C579.3 34 609.7 30 640 31C670.3 32 700.7 38 731.2 39.7C761.7 41.3 792.3 38.7 822.8 37.7C853.3 36.7 883.7 37.3 914.2 38.3C944.7 39.3 975.3 40.7 1005.8 38.3C1036.3 36 1066.7 30 1097.2 30.3C1127.7 30.7 1158.3 37.3 1188.8 39.2C1219.3 41 1249.7 38 1264.8 36.5L1280 35L1280 71L1264.8 71C1249.7 71 1219.3 71 1188.8 71C1158.3 71 1127.7 71 1097.2 71C1066.7 71 1036.3 71 1005.8 71C975.3 71 944.7 71 914.2 71C883.7 71 853.3 71 822.8 71C792.3 71 761.7 71 731.2 71C700.7 71 670.3 71 640 71C609.7 71 579.3 71 548.8 71C518.3 71 487.7 71 457.2 71C426.7 71 396.3 71 365.8 71C335.3 71 304.7 71 274.2 71C243.7 71 213.3 71 182.8 71C152.3 71 121.7 71 91.2 71C60.7 71 30.3 71 15.2 71L0 71Z"
            ]
          }}
          transition={{
            repeat: Infinity,
            ease: "easeInOut",
            duration: 3,
            repeatType: "reverse"
          }}
          fill={colors[1] || colors[0]}
        ></motion.path>
        <motion.path
          d="M0 53L15.2 50.2C30.3 47.3 60.7 41.7 91.2 38.8C121.7 36 152.3 36 182.8 36.3C213.3 36.7 243.7 37.3 274.2 38.3C304.7 39.3 335.3 40.7 365.8 42.7C396.3 44.7 426.7 47.3 457.2 47.5C487.7 47.7 518.3 45.3 548.8 44.7C579.3 44 609.7 45 640 44.3C670.3 43.7 700.7 41.3 731.2 42.3C761.7 43.3 792.3 47.7 822.8 48.3C853.3 49 883.7 46 914.2 45.7C944.7 45.3 975.3 47.7 1005.8 46.7C1036.3 45.7 1066.7 41.3 1097.2 39.3C1127.7 37.3 1158.3 37.7 1188.8 39.3C1219.3 41 1249.7 44 1264.8 45.5L1280 47L1280 71L1264.8 71C1249.7 71 1219.3 71 1188.8 71C1158.3 71 1127.7 71 1097.2 71C1066.7 71 1036.3 71 1005.8 71C975.3 71 944.7 71 914.2 71C883.7 71 853.3 71 822.8 71C792.3 71 761.7 71 731.2 71C700.7 71 670.3 71 640 71C609.7 71 579.3 71 548.8 71C518.3 71 487.7 71 457.2 71C426.7 71 396.3 71 365.8 71C335.3 71 304.7 71 274.2 71C243.7 71 213.3 71 182.8 71C152.3 71 121.7 71 91.2 71C60.7 71 30.3 71 15.2 71L0 71Z"
          animate={{
            d: [
              "M0 53L15.2 50.2C30.3 47.3 60.7 41.7 91.2 38.8C121.7 36 152.3 36 182.8 36.3C213.3 36.7 243.7 37.3 274.2 38.3C304.7 39.3 335.3 40.7 365.8 42.7C396.3 44.7 426.7 47.3 457.2 47.5C487.7 47.7 518.3 45.3 548.8 44.7C579.3 44 609.7 45 640 44.3C670.3 43.7 700.7 41.3 731.2 42.3C761.7 43.3 792.3 47.7 822.8 48.3C853.3 49 883.7 46 914.2 45.7C944.7 45.3 975.3 47.7 1005.8 46.7C1036.3 45.7 1066.7 41.3 1097.2 39.3C1127.7 37.3 1158.3 37.7 1188.8 39.3C1219.3 41 1249.7 44 1264.8 45.5L1280 47L1280 71L1264.8 71C1249.7 71 1219.3 71 1188.8 71C1158.3 71 1127.7 71 1097.2 71C1066.7 71 1036.3 71 1005.8 71C975.3 71 944.7 71 914.2 71C883.7 71 853.3 71 822.8 71C792.3 71 761.7 71 731.2 71C700.7 71 670.3 71 640 71C609.7 71 579.3 71 548.8 71C518.3 71 487.7 71 457.2 71C426.7 71 396.3 71 365.8 71C335.3 71 304.7 71 274.2 71C243.7 71 213.3 71 182.8 71C152.3 71 121.7 71 91.2 71C60.7 71 30.3 71 15.2 71L0 71Z",
              "M0 51L15.2 48.5C30.3 46 60.7 41 91.2 38.7C121.7 36.3 152.3 36.7 182.8 38.8C213.3 41 243.7 45 274.2 45.7C304.7 46.3 335.3 43.7 365.8 42.8C396.3 42 426.7 43 457.2 41.8C487.7 40.7 518.3 37.3 548.8 37.2C579.3 37 609.7 40 640 41.5C670.3 43 700.7 43 731.2 44C761.7 45 792.3 47 822.8 47.2C853.3 47.3 883.7 45.7 914.2 43.5C944.7 41.3 975.3 38.7 1005.8 39.8C1036.3 41 1066.7 46 1097.2 47.5C1127.7 49 1158.3 47 1188.8 47.2C1219.3 47.3 1249.7 49.7 1264.8 50.8L1280 52L1280 71L1264.8 71C1249.7 71 1219.3 71 1188.8 71C1158.3 71 1127.7 71 1097.2 71C1066.7 71 1036.3 71 1005.8 71C975.3 71 944.7 71 914.2 71C883.7 71 853.3 71 822.8 71C792.3 71 761.7 71 731.2 71C700.7 71 670.3 71 640 71C609.7 71 579.3 71 548.8 71C518.3 71 487.7 71 457.2 71C426.7 71 396.3 71 365.8 71C335.3 71 304.7 71 274.2 71C243.7 71 213.3 71 182.8 71C152.3 71 121.7 71 91.2 71C60.7 71 30.3 71 15.2 71L0 71Z"
            ]
          }}
          transition={{
            repeat: Infinity,
            ease: "easeInOut",
            duration: 3,
            repeatType: "reverse"
          }}
          fill={colors[2] || colors[1] || colors[0]}
        ></motion.path>
        <motion.path
          d="M0 59L15.2 57.7C30.3 56.3 60.7 53.7 91.2 53.7C121.7 53.7 152.3 56.3 182.8 56.2C213.3 56 243.7 53 274.2 53C304.7 53 335.3 56 365.8 57.2C396.3 58.3 426.7 57.7 457.2 58.3C487.7 59 518.3 61 548.8 61.8C579.3 62.7 609.7 62.3 640 59.7C670.3 57 700.7 52 731.2 50.3C761.7 48.7 792.3 50.3 822.8 52.3C853.3 54.3 883.7 56.7 914.2 57C944.7 57.3 975.3 55.7 1005.8 53.7C1036.3 51.7 1066.7 49.3 1097.2 50.3C1127.7 51.3 1158.3 55.7 1188.8 55.7C1219.3 55.7 1249.7 51.3 1264.8 49.2L1280 47L1280 71L1264.8 71C1249.7 71 1219.3 71 1188.8 71C1158.3 71 1127.7 71 1097.2 71C1066.7 71 1036.3 71 1005.8 71C975.3 71 944.7 71 914.2 71C883.7 71 853.3 71 822.8 71C792.3 71 761.7 71 731.2 71C700.7 71 670.3 71 640 71C609.7 71 579.3 71 548.8 71C518.3 71 487.7 71 457.2 71C426.7 71 396.3 71 365.8 71C335.3 71 304.7 71 274.2 71C243.7 71 213.3 71 182.8 71C152.3 71 121.7 71 91.2 71C60.7 71 30.3 71 15.2 71L0 71Z"
          animate={{
            d: [
              "M0 59L15.2 57.7C30.3 56.3 60.7 53.7 91.2 53.7C121.7 53.7 152.3 56.3 182.8 56.2C213.3 56 243.7 53 274.2 53C304.7 53 335.3 56 365.8 57.2C396.3 58.3 426.7 57.7 457.2 58.3C487.7 59 518.3 61 548.8 61.8C579.3 62.7 609.7 62.3 640 59.7C670.3 57 700.7 52 731.2 50.3C761.7 48.7 792.3 50.3 822.8 52.3C853.3 54.3 883.7 56.7 914.2 57C944.7 57.3 975.3 55.7 1005.8 53.7C1036.3 51.7 1066.7 49.3 1097.2 50.3C1127.7 51.3 1158.3 55.7 1188.8 55.7C1219.3 55.7 1249.7 51.3 1264.8 49.2L1280 47L1280 71L1264.8 71C1249.7 71 1219.3 71 1188.8 71C1158.3 71 1127.7 71 1097.2 71C1066.7 71 1036.3 71 1005.8 71C975.3 71 944.7 71 914.2 71C883.7 71 853.3 71 822.8 71C792.3 71 761.7 71 731.2 71C700.7 71 670.3 71 640 71C609.7 71 579.3 71 548.8 71C518.3 71 487.7 71 457.2 71C426.7 71 396.3 71 365.8 71C335.3 71 304.7 71 274.2 71C243.7 71 213.3 71 182.8 71C152.3 71 121.7 71 91.2 71C60.7 71 30.3 71 15.2 71L0 71Z",
              "M0 61L15.2 59.5C30.3 58 60.7 55 91.2 53.8C121.7 52.7 152.3 53.3 182.8 54.7C213.3 56 243.7 58 274.2 58.3C304.7 58.7 335.3 57.3 365.8 57C396.3 56.7 426.7 57.3 457.2 56.5C487.7 55.7 518.3 53.3 548.8 53.2C579.3 53 609.7 55 640 57C670.3 59 700.7 61 731.2 61.5C761.7 62 792.3 61 822.8 60.7C853.3 60.3 883.7 60.7 914.2 60.2C944.7 59.7 975.3 58.3 1005.8 58C1036.3 57.7 1066.7 58.3 1097.2 59C1127.7 59.7 1158.3 60.3 1188.8 59C1219.3 57.7 1249.7 54.3 1264.8 52.7L1280 51L1280 71L1264.8 71C1249.7 71 1219.3 71 1188.8 71C1158.3 71 1127.7 71 1097.2 71C1066.7 71 1036.3 71 1005.8 71C975.3 71 944.7 71 914.2 71C883.7 71 853.3 71 822.8 71C792.3 71 761.7 71 731.2 71C700.7 71 670.3 71 640 71C609.7 71 579.3 71 548.8 71C518.3 71 487.7 71 457.2 71C426.7 71 396.3 71 365.8 71C335.3 71 304.7 71 274.2 71C243.7 71 213.3 71 182.8 71C152.3 71 121.7 71 91.2 71C60.7 71 30.3 71 15.2 71L0 71Z"
            ]
          }}
          transition={{
            repeat: Infinity,
            ease: "easeInOut",
            duration: 3,
            repeatType: "reverse"
          }}
          fill={colors[3] || colors[2] || colors[1] || colors[0]}
        ></motion.path>
      </svg>
    </div>
  );
}