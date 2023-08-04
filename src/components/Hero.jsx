import { motion } from 'framer-motion';
import { useState, useEffect, lazy, Suspense } from 'react';

import { styles } from '../styles';

const BlackPanthersCanvas = lazy(() => import('./canvas').then(module => ({ default: module.BlackPanthersCanvas })));
const IronhelsCanvas = lazy(() => import('./canvas').then(module => ({ default: module.IronhelsCanvas })));

const Hero = () => {
  const [randomIndex, setRandomIndex] = useState(null);

  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * 2));
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#03a3e2] ' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            HI, I'm <span className='text-[#03a3e2]'>Aman Bhatt</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}></p>
        </div>
      </div>

   
      {randomIndex === 0 && (
        <Suspense fallback={null}>
          <BlackPanthersCanvas />
        </Suspense>
      )}
      {randomIndex === 1 && (
        <Suspense fallback={null}>
          <IronhelsCanvas />
        </Suspense>
      )}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
              yoyo: Infinity, // Simplify animation using yoyo property
            }}
            className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'
          >
            <div className='w-3 h-3 bg-secondary mb-1' />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
