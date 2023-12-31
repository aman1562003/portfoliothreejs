import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const About = () => {
  const fadeInVariant = fadeIn("", "", 0.1, 1);

  return (
    <>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>

      <motion.p variants={fadeInVariant} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Skilled software developer with expertise in Django, Python, Java, HTML, CSS, and JS. 
        Full-stack proficiency, strong database management skills, and knowledge of software architecture. 
        Problem-solving mindset, committed to clean, maintainable code. Collaborative team player with a passion for continuous learning. Ready for challenging projects and contributing to the tech industry's advancements.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <Tilt key={service.title} className="xs:w-[250px] w-full">
            <motion.div
              variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
              className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
              <div
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col'
              >
                <img src={service.icon} alt={service.title} className='w-16 h-16 object-contain' />
                <h3 className='text-white text-[20px] font-bold text-center'>{service.title}</h3>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");
