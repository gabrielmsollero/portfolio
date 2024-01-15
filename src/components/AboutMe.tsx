import { useState } from "react";
import { Variant, motion } from "framer-motion";

import classes from "./AboutMe.module.css";

import profile from "../assets/profile.webp";

export default function AboutMe() {
  type AnimationSettings = {
    variants: { hidden: Variant; visible: Variant };
    transition?: { duration: number };
  };

  const textSettings: AnimationSettings = {
    variants: {
      hidden: { opacity: 0, y: -30 },
      visible: { opacity: 1, y: 0 },
    },
    transition: { duration: 0.5 },
  };

  const imageSettings = {
    variants: {
      hidden: { opacity: 0, y: 200 },
      visible: { opacity: 1, y: 0 },
    }
  };

  const [isProfileImgLoaded, setIsProfileImgLoaded] = useState(false);

  return (
    <section>
      <div className={classes.content}>
        <motion.div
          className={classes.textWrapper}
          transition={{ staggerChildren: 0.1 }}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 {...textSettings}>Hi there👋</motion.h1>
          <motion.p {...textSettings}>
            Welcome to my portfolio! My name is Gabriel and I'm a fullstack
            developer.
          </motion.p>
          <motion.p {...textSettings}>
            I am passionate about software engineering, innovation and
            technology in general. I've been working with software development
            since 2021, and went through frontend, backend and fullstack
            positions (I'll also do some devops if you need too), and I'm pretty
            happy working with any of these. In the end of the day, what I
            really like is to see softwares growing up and working smoothly!
          </motion.p>
          <motion.p {...textSettings}>
            I like motorcycles, martial arts and beer as well. Feel free to
            invite me to anything that involves at least one of these and I'll
            be there!
          </motion.p>
          <motion.p {...textSettings}>
            Hey, since you've read this far, scroll down and you'll get to know
            a little more about my education and professional experiences!
          </motion.p>
        </motion.div>
        <motion.div
          className={classes.avatarWrapper}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className={classes.bgCircle}
            variants={{
              hidden: { scale: 0, opacity: 0 },
              visible: { scale: 1, opacity: 1 },
            }}
            transition={{ duration: 0.8 }}
          />
          <motion.img
            {...imageSettings}
            transition={{ duration: 0.8 }}
            src={profile}
            alt="My profile picture"
            initial="hidden"
            animate={isProfileImgLoaded ? "visible" : "hidden"}
            onLoad={() => setIsProfileImgLoaded(true)}
          />
        </motion.div>
      </div>
    </section>
  );
}
