import { useContext, useRef, useEffect, useState } from "react";
import { motion, useInView, HTMLMotionProps } from "framer-motion";

import Polaroid from "./Utils/Polaroid";

import { LangContext } from "../store/lang-context";

import classes from "./Education.module.css";

import ufuImg from "../assets/ufu.webp";
import lamauImg from "../assets/lamau.webp";
import emtdsImg from "../assets/emtds.webp";

const polaroids = [
  {
    src: ufuImg,
    alt: "Federal University of Uberlândia",
    smallRotate: -10,
    rotate: -10,
  },
  {
    src: lamauImg,
    alt: "An electric bike",
    smallRotate: 0,
    rotate: 10,
  },
  {
    src: emtdsImg,
    alt: "An electronic device",
    smallRotate: 10,
    rotate: -5,
  },
];

const hoveredOrTappedVariant = {
  scale: 1.5,
  zIndex: 4,
  transition: { duration: 0.001, type: "spring" },
};

const textSettings: HTMLMotionProps<"p" | "h1"> = {
  variants: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  },
  transition: { duration: 0.5 },
};

export default function Education() {
  const ctx = useContext(LangContext);

  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    setIsSmall(window.innerWidth < 960);
  }, []);

  const photosWrapperRef = useRef<HTMLDivElement>(null);
  const wasPhotosViewed = useInView(photosWrapperRef, {
    once: true,
    amount: 0.2,
  });

  const textWrapperRef = useRef<HTMLDivElement>(null);
  const wasTextViewed = useInView(textWrapperRef, {
    once: true,
    amount: 0.2,
  });

  return (
    <section id="education">
      <div className={classes.content}>
        <motion.div
          className={classes.photosWrapper}
          initial="hidden"
          animate={wasPhotosViewed ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.3 }}
          ref={photosWrapperRef}
        >
          {polaroids.map((p) => (
            <Polaroid
              key={p.src}
              className={classes.photoCard}
              src={p.src}
              alt={p.alt}
              variants={{
                hidden: { opacity: 0, scale: 1.5 },
                visible: {
                  rotate: isSmall ? p.smallRotate : p.rotate,
                  opacity: 1,
                  scale: 1,
                },
              }}
              whileHover={hoveredOrTappedVariant}
              whileTap={hoveredOrTappedVariant}
            />
          ))}
        </motion.div>
        <motion.div
          className={classes.textWrapper}
          transition={{ staggerChildren: 0.1 }}
          initial="hidden"
          animate={wasTextViewed ? "visible" : "hidden"}
          ref={textWrapperRef}
        >
          <motion.h1 {...textSettings}>
            {ctx!.lang === "pt" ? <>📖 Educação</> : <>📖 Education</>}
          </motion.h1>
          <motion.p {...textSettings}>
            {ctx!.lang === "pt" ? (
              <>
                Conquistei meu <strong>Bacharelado</strong> em Engenharia de{" "}
                Controle e Automação na Universidade Federal de Uberlândia (UFU){" "}
                <strong>em 2023</strong>. Foi uma jornada incrível, me formar{" "}
                lá.
              </>
            ) : (
              <>
                I got my <strong>Bachelor's Degree</strong> in Automation &{" "}
                Control Engineering at the Federal University of Uberlândia{" "}
                (UFU) <strong>in 2023</strong>. It's been an amazing journey,{" "}
                graduating there.
              </>
            )}
          </motion.p>
          <motion.p {...textSettings}>
            {ctx!.lang === "pt" ? (
              <>
                Participei como <strong>gerente da equipe de Eletrônica</strong>{" "}
                no projeto da <strong>primeira motocicleta elétrica</strong>{" "}
                projetada para corridas <strong>da América Latina</strong>, no{" "}
                <a
                  href="https://www.linkedin.com/company/lamau-ufu"
                  target="_blank"
                >
                  LAMAU
                </a>
                . Disputamos na competição{" "}
                <a href="https://www.motostudent.com/" target="_blank">
                  MotoStudent®
                </a>
                , edição VI. Ficamos em 2º lugar entre as equipes estreantes e{" "}
                em 8º lugar no geral, mesmo sendo todos graduandos sem{" "}
                financiamento ou outros projetos como referência! Vendemos{" "}
                <strong>rifas</strong>, vendemos garrafas de água{" "}
                <strong>nos semáforos</strong> e conseguimos!
              </>
            ) : (
              <>
                I've participated as the Electronics{" "}
                <strong>team manager</strong> on the project of the{" "}
                <strong>first electric motorcycle</strong> designed for racing{" "}
                <strong>of Latin America</strong>, at{" "}
                <a
                  href="https://www.linkedin.com/company/lamau-ufu"
                  target="_blank"
                >
                  LAMAU
                </a>
                . We were competitors in the{" "}
                <a href="https://www.motostudent.com/" target="_blank">
                  MotoStudent®
                </a>{" "}
                competition, edition VI. We were 2nd between the rookie teams{" "}
                and 8th overall, even though we were all undergraduates with no{" "}
                financing or other projects to use as reference! We sold{" "}
                <strong>raffles</strong>, we sold water bottles{" "}
                <strong>at traffic lights</strong> and we made it!
              </>
            )}
          </motion.p>
          <motion.p {...textSettings}>
            {ctx!.lang === "pt" ? (
              <>
                Após concluir a motocicleta, ingressei no{" "}
                <strong>Laboratório de Máquinas Especiais</strong> (LAMEP), onde{" "}
                permaneci até o final da graduação. Em parceria com a{" "}
                <a href="https://www.grupoenergisa.com.br/" target="_blank">
                  Energisa
                </a>
                , desenvolvemos um dispositivo portátil para detectar fraudes{" "}
                dinâmicas em medidores de energia elétrica em campo. Contribuí{" "}
                como <strong>desenvolvedor de software embarcado</strong> e{" "}
                bolsista de P&D.
              </>
            ) : (
              <>
                After finishing the motorcycle, I joined the{" "}
                <strong>Special Machines Laboratory</strong> (LAMEP) where I{" "}
                stayed until the end of graduation. There, in partnership with{" "}
                <a href="https://www.grupoenergisa.com.br/" target="_blank">
                  Energisa
                </a>
                , we developed a portable device for detecting dynamic tampers{" "}
                in electrical energy meters on field. I contributed to it as an{" "}
                <strong>embedded software developer</strong> and R&D scholar.
              </>
            )}
          </motion.p>
          <motion.p {...textSettings}>
            {ctx!.lang === "pt" ? (
              <>
                Além disso, obtive um GPA de <strong>85,5/100</strong> na{" "}
                graduação. Mesmo que eu não acredite que isso seja a única coisa{" "}
                que define conhecimento e esforço, estou{" "}
                <strong>bastante orgulhoso disso.</strong>
              </>
            ) : (
              <>
                Also, I had a GPA of <strong>85.5/100</strong> in graduation.{" "}
                Even though I don't believe this is the only thing that defines{" "}
                knowledge and effort, I'm <strong>pretty proud of it.</strong>
              </>
            )}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
