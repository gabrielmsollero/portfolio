import { useContext, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import WaveSpacedSection from './Utils/WaveSpacedSection';
import Carousel from './Utils/Carousel';

import { LangContext } from '../store/lang-context';

import classes from './Technologies.module.css';

export default function Technologies() {
  const ctx = useContext(LangContext);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const wasTitleViewed = useInView(titleRef, { once: true, amount: 'all' });

  const footerRef = useRef<HTMLParagraphElement>(null);
  const wasFooterViewed = useInView(footerRef, { once: true, amount: 'all' });

  return (
    <WaveSpacedSection
      colors={[
        'var(--wave-green-1)',
        'var(--wave-green-2)',
        'var(--wave-green-3)',
        'var(--wave-green-4)',
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
          animate={wasTitleViewed ? 'visible' : 'hidden'}
          ref={titleRef}
        >
          {ctx!.lang === 'pt' ? (
            <>Tecnologias com as quais trabalhei</>
          ) : (
            <>Technologies I've worked with</>
          )}
        </motion.h2>
        <Carousel />
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          animate={wasFooterViewed ? 'visible' : 'hidden'}
          ref={footerRef}
        >
          {/* {ctx!.lang === "pt" ? (<>
            Passe o mouse para ver os projetos onde foram usadas!
          </>) : (<>
            Hover over them to see the projects where they were used!
          </>)} */}
        </motion.p>
      </motion.div>
    </WaveSpacedSection>
  );
}
