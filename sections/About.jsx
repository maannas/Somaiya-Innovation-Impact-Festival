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
     <motion.p>
      
     </motion.p>
    </motion.div>
    About section
  </section>
);

export default About;
