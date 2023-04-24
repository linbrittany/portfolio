import React from 'react';
import "../styles/Experience.css"
import { motion } from "framer-motion";
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {

   const fade = {
    opacity: 1,
    transition:{
        duration: 1.4
    }
   }

  return (
      <>
          <div className="services" id='education'>
              <div className="container">
                <motion.div whileInView={fade} viewport={{ once: true }} initial={{opacity: 0}} className="heading">
                    <p className='heading-sub-text'>Where I've studied</p>
                    <p className='heading-text'>Education</p>
                </motion.div>
                <motion.div className="services-box" whileInView={fade} initial={{opacity: 0}}>
                    <div className="services-card">
                        <FaGraduationCap className='services-icon' />
                        <div className='services-desc'>
                            <p className='services-date'>March 2019 - July 2024</p>
                            <p className='services-title'>Software Engineer</p>
                            <p className='services-loc'>Instituto Tecnológico de Buenos Aires</p>
                        </div>
                    </div>
                    <div className="services-card">
                        <FaGraduationCap className='services-icon' />
                        <div className='services-desc'>
                            <p className='services-date'>2015 - 2017</p>
                            <p className='services-title'>French Baccalaureate in Science</p>
                            <p className='services-loc'>Liceo Frances Jean Mermoz</p>
                        </div>
                    </div>
                </motion.div>
              </div>
          </div>
      </>
  )
};

export default Education;
