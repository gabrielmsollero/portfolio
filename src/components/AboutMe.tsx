import { useContext, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

import { LangContext } from "../store/lang-context";

import classes from "./AboutMe.module.css";

import profile from "../assets/profile.webp";

const textSettings: HTMLMotionProps<"p" | "h1"> = {
  variants: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  },
  transition: { duration: 0.5 },
};

const imageSettings: HTMLMotionProps<"img"> = {
  variants: {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
  },
};

export default function AboutMe() {
  const ctx = useContext(LangContext);
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
          <motion.h1 {...textSettings}>
          {ctx!.lang === "pt" ? (<>Olá 👋</>) : (<>Hi there 👋</>)}
          </motion.h1>
          <motion.p {...textSettings}>
            {ctx!.lang === "pt" ? (
              <>
                Bem vindo ao meu portfolio! Meu nome é Gabriel e eu sou{" "}
                <strong>desenvolvedor fullstack</strong>.
              </>
            ) : (
              <>
                Welcome to my portfolio! My name is Gabriel and I'm a{" "}
                <strong>fullstack developer</strong>.
              </>
            )}
          </motion.p>
          <motion.p {...textSettings}>
            {ctx!.lang === "pt" ? (
              <>
                Eu sou apaixonado por engenharia de software, inovação e
                tecnologia em geral. Iniciei minha{" "}
                <strong>graduação em 2018</strong> e tenho programado desde
                então. Entrei no{" "}
                <strong>mercado de desenvolvimento de software em 2021</strong>{" "}
                e passei por posições de frontend, backend e fullstack (também
                faço um pouco de devops se necessário), e estou bastante feliz
                trabalhando com qualquer um desses. No fim das contas, o que
                realmente me agrada é ver softwares <strong>crescendo</strong> e{" "}
                <strong>funcionando bem</strong>!
              </>
            ) : (
              <>
                I am passionate about software engineering, innovation and
                technology in general. I started my{" "}
                <strong>graduation in 2018</strong>, and have been programming
                since then. Entered the software development{" "}
                <strong>market in 2021</strong>, and been through frontend,
                backend and fullstack positions (I'll also do some devops if you
                need too), and I'm pretty happy working with any of these. In
                the end of the day, what I really like is to see softwares{" "}
                <strong>growing up</strong> and{" "}
                <strong>working smoothly</strong>!
              </>
            )}
          </motion.p>
          <motion.p {...textSettings}>
            {ctx!.lang === "pt" ? (
              <>
                Eu gosto de motos, artes marciais e cerveja também. Me chame
                para qualquer coisa que envolva pelo menos um desses, e eu
                estarei lá!
              </>
            ) : (
              <>
                I like motorcycles, martial arts and beer as well. Feel free to
                invite me to anything that involves at least one of these and
                I'll be there!
              </>
            )}
          </motion.p>
          <motion.p {...textSettings}>
            {ctx!.lang === "pt" ? (
              <>
                Ei, já que você leu até aqui, <strong>role para baixo</strong>{" "}
                para saber um pouco mais sobre a minha{" "}
                <a href="#education">educação</a> e{" "}
                <a href="#professional-experiences">
                  experiências profissionais
                </a>
                !
              </>
            ) : (
              <>
                Hey, since you've read this far, <strong>scroll down</strong>{" "}
                and you'll get to know a little more about my{" "}
                <a href="#education">education</a> and{" "}
                <a href="#professional-experiences">professional experiences</a>
                !
              </>
            )}
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
            transition={{ duration: 0.8, delay: 0.8 }}
            src={profile}
            alt={
              ctx!.lang === "pt" ? "Minha foto de perfil" : "My profile picture"
            }
            initial="hidden"
            animate={isProfileImgLoaded ? "visible" : "hidden"}
            onLoad={() => setIsProfileImgLoaded(true)}
          />
        </motion.div>
      </div>
    </section>
  );
}
