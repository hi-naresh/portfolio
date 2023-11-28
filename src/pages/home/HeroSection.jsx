import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function HeroSection() {
  const transition = useMemo(() => ({ type: 'easeInOut', duration: 0.3 }), []);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true, // Trigger the animation only once
    rootMargin: '-100px 0px 0px 0px',
  });

  const config = useMemo(() => ({
    initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
    animate: inView ? { x: 0, opacity: 1, transition: { ...transition, delay: 0 } } : {},
    exit: { x: 0, opacity: 0, transition: { ...transition, delay: 0 } },
  }), [inView, transition]);

  return (
    <div ref={ref} style={{ height: '100vh', scrollSnapAlign: 'start' }}>
      <motion.section {...config}>
        <div className="section--container">
          <motion.h1
            initial={{ x: -1600, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ type: 'spring', damping: 5, stiffness: 10, restDelta: 0.001, duration: 0.3 }}
          >
            Coming Soon!
          </motion.h1>
          <div className="support--content">
            <motion.div
              initial={{ x: -400, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{
                type: 'spring',
                damping: 7,
                stiffness: 10,
                restDelta: 0.001,
                duration: 0.6,
                delay: 0.2,
                delayChildren: 0.2,
              }}
            >
              <p>
                <b style={{fontSize:'1.4rem'}}>I'm a Naresh Jhawar</b> <br/><br/>
                Software Developer with expertise building<br/> Blockchain, mobile, and web applications. </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default HeroSection;
