import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import { styles } from '../styles';
import { ComputersCanvas, BatsCanvas,BlackPanthersCanvas } from './canvas';
import {MoonsCanvas, IronhelsCanvas} from './canvas';


const Hero = () => {
  const [randomIndex, setRandomIndex] = useState(null);

  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * 5));
  }, []);
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#03a3e2] ' />
          <div className=' w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            HI, I'm <span className='text-[#03a3e2]'>Aman Bhatt</span>

          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          </p>
        </div>
      </div>
      
      {randomIndex === 0 && <ComputersCanvas />}
      {randomIndex === 1 && <BatsCanvas />}
      {randomIndex === 2 && <BlackPanthersCanvas />}
      {randomIndex === 3 && <MoonsCanvas />}
      {randomIndex === 4 && <IronhelsCanvas />}
      
        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href="#about">
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
              animate = {{
                y:[0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType:'loop'
              }}
              className='w-3 h-3 bg-secondary mb-1 '
              />

            </div>
          </a>
        </div>
    </section>
  )
}

export default Hero