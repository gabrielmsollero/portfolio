import { ReactNode, useContext, useRef } from "react";

import { motion, useInView } from "framer-motion";

import WaveSpacedSection from "./Utils/WaveSpacedSection";

import GithubIcon from "./Utils/Icons/GithubIcon";
import LinkedinIcon from "./Utils/Icons/LinkedinIcon";
import MailIcon from "./Utils/Icons/MailIcon";
import MediumIcon from "./Utils/Icons/MediumIcon";
import TelegramIcon from "./Utils/Icons/TelegramIcon";
import WhatsappIcon from "./Utils/Icons/WhatsappIcon";

import { LangContext } from "../store/lang-context";

import classes from "./SocialMedias.module.css";

type Media = {
  id: string;
  href: string;
  icon: ReactNode;
};

const medias: Media[] = [
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/gabriel-medeiros-sollero-328651163/",
    icon: <LinkedinIcon className={classes.mediaIcon} />,
  },
  {
    id: "github",
    href: "https://github.com/gabrielmsollero/",
    icon: <GithubIcon className={classes.mediaIcon} />,
  },
  {
    id: "medium",
    href: "https://medium.com/@gabrielsollero",
    icon: <MediumIcon className={classes.mediaIcon} />,
  },
  {
    id: "mail",
    href: "mailto:sollero.gms@gmail.com",
    icon: <MailIcon className={classes.mediaIcon} />,
  },
  {
    id: "telegram",
    href: "https://t.me/gabrielsollero",
    icon: <TelegramIcon className={classes.mediaIcon} />,
  },
  {
    id: "whatsapp",
    href: "https://wa.me/5534996901331",
    icon: <WhatsappIcon className={classes.mediaIcon} />,
  },
];

export default function SocialMedias() {
  const ctx = useContext(LangContext);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const wasTitleViewed = useInView(titleRef, { once: true, amount: "all" });

  const ulRef = useRef<HTMLUListElement>(null);
  const wasUlViewed = useInView(ulRef, { once: true, amount: 0.5 });

  const footerRef = useRef<HTMLParagraphElement>(null);
  const wasFooterViewed = useInView(footerRef, { once: true, amount: "all" });

  return (
    <WaveSpacedSection
      colors={[
        "var(--wave-blue-1)",
        "var(--wave-blue-2)",
        "var(--wave-blue-3)",
        "var(--wave-blue-4)",
      ]}
    >
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
          {ctx!.lang === "pt" ? (
            <>Confira minhas redes sociais!</>
          ) : (
            <>Check out my social medias!</>
          )}
        </motion.h2>
        <motion.ul
          initial="hidden"
          animate={wasUlViewed ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.1 }}
          className={classes.mediasWrapper}
          ref={ulRef}
        >
          {medias.map((media) => (
            <motion.li
              key={media.id}
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
              transition={{ type: "spring" }}
            >
              <a href={media.href} target="_blank">
                {media.icon}
              </a>
            </motion.li>
          ))}
        </motion.ul>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          animate={wasFooterViewed ? "visible" : "hidden"}
          ref={footerRef}
        >
          {ctx!.lang === "pt" ? (
            <>
              Possui uma proposta? Encontrou um bug nessa página? Não precisa
              sair dela para me avisar!{" "}
              <a
                className={classes.mailBtn}
                href="mailto:sollero.gms@gmail.com"
                target="_blank"
              >
                Diga&nbsp;olá
              </a>
            </>
          ) : (
            <>
              Have a proposal? Found a bug on this page? You don't have to leave
              it to let me know!{" "}
              <a
                className={classes.mailBtn}
                href="mailto:sollero.gms@gmail.com"
                target="_blank"
              >
                Say&nbsp;hello
              </a>
            </>
          )}
        </motion.p>
      </motion.div>
    </WaveSpacedSection>
  );
}
