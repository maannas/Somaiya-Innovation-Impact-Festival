'use client';
import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section id="about" className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-10"/>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
     <TypingText title="| About Somaiya Innovation and Impact Festival"
     textStyles="text-center"
     />
     <motion.p
     variants={fadeIn('up','twee', 0.2, 1)}
     className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
     >
      <span className="font-extrabold text-white">The Somaiya Innovation and Impact Festival</span>
      &nbsp;promises to be a transformative experience, where
creativity meets technology, and innovation meets social responsibility. By bringing together
&nbsp; <span className="font-extrabold text-white">MakerMela</span>,&nbsp;
<span className="font-extrabold text-white">Darwin</span>,
  and &nbsp;
  <span className="font-extrabold text-white">Nazariya</span>
  , we aspire to ignite imaginations, spark meaningful
conversations, and catalyze connections & actions that will shape a brighter future for all
     </motion.p>

     <motion.img
     variants={fadeIn('up', 'tween', 0.3, 1)}
     src="/arrow-down.svg"
     alt="arrow-down"
     className="w-[18px] h-[28px] object-contain mt-[28px]"
     />
    </motion.div>
  </section>
);

export default About;
