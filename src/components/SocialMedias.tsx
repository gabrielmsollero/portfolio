import { useRef } from "react";

import { motion, useInView } from "framer-motion";

import BlueWavesSpacer from "./Spacers/BlueWavesSpacer";

import GithubIcon from "./Icons/GithubIcon";
import LinkedinIcon from "./Icons/LinkedinIcon";
import MailIcon from "./Icons/MailIcon";
import TelegramIcon from "./Icons/TelegramIcon";
import WhatsappIcon from "./Icons/WhatsappIcon";

import classes from "./SocialMedias.module.css";

const medias = [
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
  const titleRef = useRef(null);
  const wasTitleViewed = useInView(titleRef, { once: true, amount: "all" })

  const ulRef = useRef(null);
  const wasUlViewed = useInView(ulRef, { once: true, amount: 0.5 })

  const footerRef = useRef(null);
  const wasFooterViewed = useInView(footerRef, { once: true, amount: "all" })

  return (
    <>
      <BlueWavesSpacer />
      <section className={classes.socialMedia}>
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
            Check out my social medias!
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
            Have a proposal? Found a bug on this page? You don't have to leave
            it to let me know!{" "}
            <a
              className={classes.mailBtn}
              href="mailto:sollero.gms@gmail.com"
              target="_blank"
            >
              Mail me
            </a>
          </motion.p>
        </motion.div>
      </section>
      <BlueWavesSpacer flipped />
    </>
  );
}
